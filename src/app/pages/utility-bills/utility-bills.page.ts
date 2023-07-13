import { MobileNetworks } from "./utility-bills.constants";
import { Component, OnInit } from "@angular/core";
import { UtilityBillsService } from "src/app/shared/utility-bills.service";
import { IBank, UtilityType } from "./utility-bills.interface";

@Component({
  selector: "app-utility-bills",
  templateUrl: "./utility-bills.page.html",
  styleUrls: ["./utility-bills.page.scss"],
})
export class UtilityBillsPage implements OnInit {
  loading: boolean = true;
  utilityBills: any;
  banks: IBank[];
  networks: string[];
  packages: string[];
  selectedUtility: UtilityType;
  selectedBank: IBank["bankCode"];
  selectedPackage: IBank["bankCode"];
  selectedMobileNetwork: string;
  accountNumber: string = "ss";

  constructor(private utilityBillsService: UtilityBillsService) {
    this.getUtilityBills();
    this.selectedUtility = "internet";
    this.networks = MobileNetworks;
  }

  ngOnInit() {}

  setSelectedUtility(utility: UtilityType) {
    this.selectedUtility = utility;
  }
  onChangeSelectedUtility(event) {
    this.setSelectedUtility(event.target.value);
  }
  onChangeSelectedMobileNetwork(event) {
    this.selectedMobileNetwork = event.target.value;
    this.getDataPlans(this.selectedMobileNetwork);
  }
  onChangeSelectedBank(event) {
    this.selectedBank = event.target.value;
  }

  onAccountNumberInput(event) {
    event.preventDefault();
    // return;
    // this.accountNumber = "sndisodfi";
    // Check if value is a number
    if (event.target.value.match(/^[0-9]+$/)) {
      console.log("ha");
      this.accountNumber = event.target.value;
    }

    if (event.target.value.length > 9) {
      this.verifyAccountNumber(this.selectedBank, this.accountNumber);
    }
  }

  verifyAccountNumber(bankCode: IBank["bankCode"], accountNumber: string) {
    console.log(accountNumber, bankCode);
    this.utilityBillsService
      .verifyAccountNumber(bankCode, accountNumber)
      .subscribe((res: { message: string; accountName: string }) => {
        console.log(res);
      });
  }

  vendProduct(productType: IBank["bankCode"], accountNumber: string) {
    console.log(accountNumber, productType);
    this.utilityBillsService
      .verifyAccountNumber(productType, accountNumber)
      .subscribe((res: { message: string; accountName: string }) => {
        console.log(res);
      });
  }

  getUtilityBills() {
    this.loading = true;
    this.utilityBillsService.getBanks().subscribe(
      (res: { message: string; banks: IBank[] }) => {
        this.loading = false;
        this.banks = res.banks.sort((a, b) => {
          if (a.bankName.toLowerCase() < b.bankName.toLowerCase()) {
            return -1;
          }
          if (a.bankName.toLowerCase() > b.bankName.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        console.log({ res });

        console.log(this.utilityBills);
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  getDataPlans(network: string) {
    this.loading = true;
    this.packages = [];
    this.utilityBillsService.getDataPlans(network).subscribe(
      (res: { message: string; dataPlans: IBank[] }) => {
        this.loading = false;

        console.log({ res });
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }
}
