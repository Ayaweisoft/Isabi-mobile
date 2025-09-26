import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityBillService } from 'src/app/services/utility-bill.services';
import { Observable, Subject } from 'rxjs'; 
import { takeUntil } from 'rxjs/operators';
// NOTE: firstValueFrom is removed as it's RxJS v7. Using .toPromise() instead.

// Interface definitions
interface MobileForm {
  phone: string;
  amount: number;
  networkid?: number;
  dataPlan?: string;
}

interface ElectricityForm {
  meter: string; 
  type: string; 
  amount: number;
}

interface ExamForm {
  examType: string;
  quantity: number;
  // Added amount and type to match the payload in submitExamForm
  amount?: number; 
  type?: string; 
}

interface BankForm {
  account: string;
  accountName?: string;
  bank: string; // Holds the bank code (settlementBank)
  amount: number;
  remark?: string;
}

@Component({
  selector: 'app-utility',
  templateUrl: './utility.page.html',
  styleUrls: ['./utility.page.scss'],
})
export class UtilityPage implements OnInit, OnDestroy {
  // --- NAVIGATION STATE ---
  currentView: 'grid' | 'mobile' | 'electricity' | 'examinations' | 'bank' = 'grid';
  mobileType: 'airtime' | 'data' | 'mtn_awuf' | 'pin' = 'airtime';

  // --- FORM MODELS ---
  mobileForm: Partial<MobileForm> = {};
  electricityForm: Partial<ElectricityForm> = {};
  examForm: Partial<ExamForm> = {};
  bankForm: Partial<BankForm> = {};

  // --- DATA LISTS ---
  dataBundles: any[] = [];
  banksList: any[] = [];
  filteredBanks: any[] = [];

  // --- STATE ---
  isLoading: boolean = false;
  
  // --- HTML DEPENDENCIES ---
  headerIsActive: boolean = false; 
  
  // --- RXJS ---
  bankSearchTerm$: Subject<string> = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private utilityBillService: UtilityBillService) {}

  ngOnInit() {
    this.fetchBanks();

    this.bankSearchTerm$
      .pipe(takeUntil(this.destroy$))
      .subscribe(term => {
        this.filteredBanks = this.filterBanks(term);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // --- NAVIGATION LOGIC ---
  goToForm(
    type: 'grid' | 'mobile' | 'electricity' | 'examinations' | 'bank',
    subType?: 'airtime' | 'data' | 'mtn_awuf' | 'pin'
  ) {
    this.currentView = type;
    if (subType) {
      this.mobileType = subType;
    }
  }

  backToGrid() {
    this.currentView = 'grid';
  }

  // --- DATA FETCHING & FILTERING ---
  fetchBanks() {
    this.utilityBillService.getBanks()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (banks) => {
          this.banksList = banks?.banks?.details?.message || [];
          this.filteredBanks = this.banksList;
        },
        error: () => {
          this.banksList = [];
          this.filteredBanks = [];
        }
      });
  }

  filterBanks(term: string): any[] {
    if (!term) return this.banksList;
    term = term.toLowerCase();
    return this.banksList.filter(bank =>
      bank.name?.toLowerCase().includes(term)
    );
  }

  onBankSearch(term: string) {
    this.bankSearchTerm$.next(term);
  }
  
  // --- MISSING HTML EVENT HANDLERS ---
  
  verifyMeter() {
    if (this.electricityForm.meter) {
      console.log('Verifying meter:', this.electricityForm.meter);
      // Implement API call for verification here
    }
  }

  // FIXED: Cleaned up redundant 'await' and mismatched calls
  async verifyBankDetails() {
    if (this.bankForm.bank && this.bankForm.account && this.bankForm.account.length === 10) {
      this.isLoading = true;
      this.bankForm.accountName = 'Verifying...';
      
      const verifyPayload = {
        account: this.bankForm.account,
        settlementBank: this.bankForm.bank 
      };

      try {
        // FIXED: Use .toPromise() for async/await in RxJS v6
        const res = await this.utilityBillService.verifyBank(verifyPayload).toPromise();
        this.bankForm.accountName = res?.bank?.bankName || 'Account Verified';
      } catch (err) {
        this.bankForm.accountName = 'Verification Failed';
        console.error('Bank verification failed:', err);
      } finally {
        this.isLoading = false;
      }
    } else {
      this.bankForm.accountName = undefined;
    }
  }


  // --- FORM SUBMISSIONS ---
  async submitMobileForm() {
    this.isLoading = true;
    let request$: Observable<any> | null = null;
    const networkId = this.mobileForm.networkid || 2; 

    // Base payload maps frontend 'phone' to backend 'account'
    const basePayload = {
        account: this.mobileForm.phone!,
        amount: this.mobileForm.amount!,
        networkid: networkId,
    };

    switch (this.mobileType) {
      case 'airtime':
        request$ = this.utilityBillService.buyAirtime(basePayload);
        break;

      case 'data':
        // Data payload uses bundle_code from the select box
        request$ = this.utilityBillService.buyData({
          account: basePayload.account,
          bundle_code: this.mobileForm.dataPlan!,
        });
        break;

      case 'mtn_awuf':
        request$ = this.utilityBillService.buyMTNAWUF(basePayload);
        break;

      case 'pin':
        request$ = this.utilityBillService.buyPIN(basePayload);
        break;
    }

    if (request$) {
      try {
        // FIXED: Use .toPromise()
        const res = await request$.toPromise();
        console.log('Mobile purchase success:', res);
      } catch (err) {
        console.error('Mobile purchase failed:', err);
      } finally {
        this.isLoading = false;
      }
    } else {
      this.isLoading = false;
    }
  }

  async submitElectricityForm() {
    this.isLoading = true;
    try {
      // FIXED: Use .toPromise()
      const res = await this.utilityBillService.purchaseElectricityToken(this.electricityForm).toPromise();
      console.log('Electricity token purchase success:', res);
    } catch (err) {
      console.error('Electricity token purchase failed:', err);
    } finally {
      this.isLoading = false;
    }
  }

  async submitExamForm() {
    this.isLoading = true;
    try {
      // Mapping examForm keys to backend service requirements
      const examPayload = {
          account: this.examForm.examType!, // Using examType as account/identifier
          amount: this.examForm.amount || 5000, // Using amount from form or default
          type: this.examForm.examType
      };
      // FIXED: Use .toPromise()
      const res = await this.utilityBillService.purchaseExamPin(examPayload).toPromise();
      console.log('Exam pin purchase success:', res);
    } catch (err) {
      console.error('Exam pin purchase failed:', err);
    } finally {
      this.isLoading = false;
    }
  }

  async submitBankForm() {
    this.isLoading = true;
    try {
      // 1. Final Payload Construction 
      const sendMoneyPayload = {
        // Correct mapping: account (number), settlementBank (code)
        account: this.bankForm.account!, 
        settlementBank: this.bankForm.bank!, 
        amount: this.bankForm.amount!,
        remark: this.bankForm.remark || 'Transfer'
      };

      // 2. Send Money
      // FIXED: Use .toPromise()
      const res = await this.utilityBillService.sendMoney(sendMoneyPayload).toPromise();
      console.log('Bank transfer success:', res);
      
    } catch (err) {
      console.error('Bank transfer failed:', err);
    } finally {
      this.isLoading = false;
    }
  }
}