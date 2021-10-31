
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  public appUser: any;
  // public accountBalance = null;
  accountSubject =  new BehaviorSubject<number>(0);
  leaderboard$: Observable<any>;
  leaderboardGameSection$: Observable<any>;
  appUsername: any;
  public user_id: string;

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };
  AuthHeader = {
    headers: new HttpHeaders().set(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    )
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  loadMyBalance() {
    console.log("GETTING BALANCE");
    this.getLeaderGameSection();
    this.appUser = localStorage.getItem("appUser");
    this.http
      .get(environment.apiBaseUrl + "/get-account-balance")
      .subscribe(value => {

        this.setAccountBalance(value["balance"])
        console.log('NEW Balance ',this.accountSubject.getValue() )
        this.getLeaderboard();
        this.user_id = localStorage.getItem("user_id");
        this.appUsername = localStorage.getItem("appUser");
      });
  }


  setAccountBalance(balance: number) {
    this.accountSubject.next(balance);
}


getAccountBalance(): BehaviorSubject<any> {
    return this.accountSubject;
}

  getLeaderboard() {
    return this.http.get(environment.apiBaseUrl + "/get-leaderboard");
  }

  getWinners(){
    return this.http.get(environment.apiBaseUrl + "/get-winners");
  }

  activatePromo(promo){
    return this.http.put(environment.apiBaseUrl + '/activate-promo', promo);
  }

  merchantTransfer(username){
    return this.http.post(environment.apiBaseUrl + '/merchant-transfer', username);
  }

  getLeaderGameSection() {
    this.http
      .get(environment.apiBaseUrl + "/get-leaderboard-game-section")
      .subscribe(value => {
        this.leaderboardGameSection$ = value["document"];
      });
  }

  loadBalanceForCalculation() {
    this.loadMyBalance();
    return this.http.get(environment.apiBaseUrl + "/get-account-balance");
  }

  deductGameAmountFromAccount() {
    return this.http.get(environment.apiBaseUrl + "/deduct-game-amount");
  }

  myTransaction() {
    return this.http.get(environment.apiBaseUrl + "/get-my-transaction");
  }

  getManualTransactions() {
    return this.http.get(environment.apiBaseUrl + "/get-manual-transactions");
  }

  cashout(amount){
    return this.http.post(environment.apiBaseUrl + '/user-cashout', amount);
  }

  confirmTransaction(accountId) {
    return this.http.get(
      environment.apiBaseUrl + `/confirm-transaction${accountId}`
    );
  }

  cashoutOutRequest(){
    return this.http.get(environment.apiBaseUrl + '/cash-out-request');
  }

  declineTransaction(id) {
    return this.http.get(environment.apiBaseUrl + `/decline-transaction${id}`);
  }

  settleLeader(id) {
    return this.http.get(environment.apiBaseUrl + `/settle-leader${id}`);
  }

  queryUser(username) {
    return this.http.post(environment.apiBaseUrl + "/query-username", username);
  }

  payWinner(user_doc){
    return this.http.post(environment.apiBaseUrl + '/pay-winner', user_doc);
  }
  payCashout(user){
    return this.http.post(environment.apiBaseUrl + '/pay-cashout', user);
  }
}
