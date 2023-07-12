import { Component, OnInit } from "@angular/core";
import { UtilityBillsService } from "src/app/shared/utility-bills.service";

@Component({
  selector: "app-utility-bills",
  templateUrl: "./utility-bills.page.html",
  styleUrls: ["./utility-bills.page.scss"],
})
export class UtilityBillsPage implements OnInit {
  loading: boolean = true;
  utilityBills: any;
  banks: {
    bankCode: string;
    bankName: string;
  }[];
  selectedUtility: "bank" | "tv" | "electricity" | undefined;

  constructor(private utilityBillsService: UtilityBillsService) {
    this.getUtilityBills();
  }

  ngOnInit() {}

  setSelectedUtility(utility: "bank" | "tv" | "electricity") {
    this.selectedUtility = utility;
  }
  onChangeSelectedUtility(event) {
    this.setSelectedUtility(event.target.value);
  }

  getUtilityBills() {
    this.loading = true;
    this.utilityBillsService.getBanks().subscribe(
      (res: {
        message: string;
        banks: {
          bankCode: string;
          bankName: string;
        }[];
      }) => {
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
}
