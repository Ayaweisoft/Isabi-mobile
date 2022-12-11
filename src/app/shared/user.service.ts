import { BehaviorSubject, Observable } from "rxjs";
import { AccountService } from 'src/app/shared/account.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController, AlertController } from '@ionic/angular';
import jwtDecode, * as jwt_decode from "jwt-decode";


@Injectable({ 
  providedIn: 'root'
})
export class UserService {
  messsageFromServer : any;
  token: any;
  accountBalance: any;
  username: any;
  userID: string | null;
  profilePic = new BehaviorSubject<any>('');
  user_name = new BehaviorSubject<any>('');
  full_name = new BehaviorSubject<any>('');
  is_first = new BehaviorSubject<any>('');
  rank = new BehaviorSubject<any>('');
  totalReferredCount = new BehaviorSubject<any>(0);
  networkDisconnet = false;
  
noAuthHeader = {headers: new HttpHeaders({NoAuth: 'True'})};
AuthHeader = {headers: new HttpHeaders().set('Authorization',
`Bearer ${localStorage.getItem('token')}`)};



constructor(private http: HttpClient,
            private accountService: AccountService,
            private router: Router,
            public alertController: AlertController,
            public toastController: ToastController
            ) {
          //     this.network.onDisconnect().subscribe(()=> {
          //   console.log('CONNETION LOST');
          //   this.networkDisconnet = true;
          // });

    //           this.network.onConnect().subscribe(()=> {
    //   setTimeout(()=> {
    //     console.log(' WE ARE BACK IN CONNECTION');
    //     this.networkDisconnet = false;
    //   });
    // });

    }


    async shortToast(messages) {
      const toast = await this.toastController.create({
        message: messages,
        position:'middle',
        duration: 1000
      });
      toast.present();
    }

    async longToast(messages) {
      const toast = await this.toastController.create({
        message: messages,
        position: 'middle',
        duration: 3000
      });
      toast.present();
    }

    async generalToast(message, duration) {
      const toast = await this.toastController.create({
        message: `${message}`,
        duration: duration
      });
      toast.present();
    }


    async generalAlert(message) {
      const alert = await this.alertController.create({
        header: 'Alert',
        message:  `${message}`,
        buttons: ['OK']
      });
    
      await alert.present();
    }


    registerUser( user) {
      return this.http.post(environment.apiBaseUrl + '/register' , user, this.noAuthHeader);
    }

    confirmEmail(email){
      return this.http.post(environment.apiBaseUrl + `/confirm-email`, email, this.noAuthHeader);
    }

    validateOtp(emailOtp: any){
      return this.http.post(environment.apiBaseUrl + `/validate-otp`, emailOtp, this.noAuthHeader);
    }

    validateAccountOtp(accountOtp: any){
      return this.http.post(environment.apiBaseUrl + `/validate-account-otp`, accountOtp);
    }

    sendAccountOtp(){
      return this.http.get(environment.apiBaseUrl + `/send-account-otp`);
    }


    // password reset
    resetPassword(email){
      return this.http.post(environment.apiBaseUrl + `/reset-password`, email, this.noAuthHeader);
    }

    validateResetToken(resetToken) {
      return this.http.post(environment.apiBaseUrl + `/validate-reset-token`, resetToken, this.noAuthHeader);
    }

    newPassword(model) {
      return this.http.post(environment.apiBaseUrl + `/new-password`, model, this.noAuthHeader);
    }

    submitEvent(event){
      return this.http.post(environment.apiBaseUrl + `/submit-event`, event);
    }
  
    postQuestion(question){
      return this.http.post(environment.apiBaseUrl + `/post-question`, question);
    }
    
    getAllQuestions(){
      return this.http.get(environment.apiBaseUrl + '/get-all-questions');
    }

    login(credentials) {
      return this.http.post(environment.apiBaseUrl  + '/login',
       credentials, this.noAuthHeader);
    }
  
    // Random tips on Random
    getRandomTips(){
      return this.http.get(environment.apiBaseUrl + '/get-random-tip');
    }
    findByCategory(category){
      return this.http.get(environment.apiBaseUrl + `/find-by-category${category}`, );
    }

    playByCategory(category){
      return this.http.get(environment.apiBaseUrl + `/play-by-category${category}` );
    }

    getLiveQuestionAmount(){
      return this.http.get(environment.apiBaseUrl + '/get-live-questions-amount');
    }



    changeQuestionStatusToFalse(id){
      return this.http.get(environment.apiBaseUrl + `/change-to-false${id}`);
    }
    changeQuestionStatusToTrue(id){
      return this.http.get(environment.apiBaseUrl + `/change-to-true${id}`);
    }
    getSingleQuestion(id){
      return this.http.get(environment.apiBaseUrl + `/get-single-question${id}`);
    }
  
    upDateQuestion(question){
      return this.http.post(environment.apiBaseUrl + `/update-question`, question);
    }
    deleteQuestion(id){
      return this.http.get(environment.apiBaseUrl + `/delete-question${id}`);
    }

    getContestantById(dataId){
      return this.http.post(environment.apiBaseUrl + `/get-contestant-by-id`,dataId, this.noAuthHeader);
    }

    postTransaction(tranx){
      return this.http.post(environment.apiBaseUrl + `/submit-transaction`, tranx);
    }

    postManualTransaction(tranx){
    }

    postManualTrans(tranx){
      return this.http.post(environment.apiBaseUrl + `/submit-manual-transaction`, tranx);
      
    }

    

    loadBalance(){
      this.accountService.getLeaderGameSection();
      return this.http.get(environment.apiBaseUrl + '/load-balance');
    }
  
    saveUserProfile(credentials){
      return this.http.post(environment.apiBaseUrl + '/save-user-profile', credentials);
    }

    getProfilePic(): Observable<any> {
      return this.http.get(environment.apiBaseUrl + '/get-profile-pic');
    }

    updateProfilePic(credentials){
      return this.http.post(environment.apiBaseUrl + '/update-profile-pic',credentials);
    }

    // getUsername(): Observable<any> {
    //   return this.http.get(environment.apiBaseUrl + '/get-profile-name');
    // }

    updateUserProfile(credentials){
      return this.http.post(environment.apiBaseUrl + '/update-user-profile',credentials);
    }

    getUserProfile(): Observable<any> {
      return this.http.get(environment.apiBaseUrl + `/get-user-profile`);
    }
  
    getRandomQuestionsForGame(){
      this.accountService.getLeaderGameSection();
      return this.http.get(environment.apiBaseUrl + '/get-random-questions-for-game');
    }

    getAllLiveQuestions(){
      return this.http.get(environment.apiBaseUrl + '/get-all-live-questions');
    }
  
   

      postQuestionRecord( record){
       return this.http.post(environment.apiBaseUrl +'/post-game-record', record);
     }

     searchQuestion(words){
       return this.http.post(environment.apiBaseUrl + '/search-question', words);
     }

     getGameRecord(){
       return this.http.get(environment.apiBaseUrl + '/get-game-record');
     }
  
     deleteGameRecord(id){
       return this.http.get(environment.apiBaseUrl + `/delete-game-record${id}`);
     }



     getEmail(){
      try {
        let payLoad = jwtDecode(this.getToken());
        let email = payLoad['email'];
        return email;
      } catch (error) {
        
      }
     
     }

    
   

     getRole(){
     try {
      let payLoad = jwtDecode(this.getToken());
      let role = payLoad['role'];
      return role;
     } catch (error) {
        console.log('I failed')
     }

     }

     checkForAdmin(){
     try {
      let payLoad = jwtDecode(this.getToken());
      let role = payLoad['role'];
      if(role == 'ADMIN'){
        return true
      }else{
        return false;
      }
     } catch (error) {
       
     }
     
     }
     
     getUserName(){
      try {
        let payLoad = jwtDecode(this.getToken());
      let username = payLoad['username'];
      console.log('getting username: ', payLoad['username'])
      console.log('payload: ', payLoad);
      return username;
      } catch (error) {
        
      }
     }
   

     getAuthId(){
      try {
        let payLoad = jwtDecode(this.getToken());
      let user_id = payLoad['_id'];
      return user_id;
      } catch (error) {
        
      }
     }

    setProfilePicture(pic: any){
      this.profilePic.next(pic);
    }

    getProfilePicture(): BehaviorSubject<any> {
      return this.profilePic;
    }

    loadProfilePicture(){
      this.http.get(environment.apiBaseUrl + '/get-profile-pic')
      .subscribe(value => {
        this.setProfilePicture(value['image_url'])
        console.log('Update Image ',this.profilePic.getValue())
      })
    }

    setUsername(name: string){
      this.user_name.next(name)
    }

    getUsername(): BehaviorSubject<any> {
      return this.user_name;
    }

    loadUsername(){
      this.http.get(environment.apiBaseUrl + '/get-user-name')
      .subscribe(value => {
        this.setUsername(value['username'])
        console.log('Update username ',this.user_name.getValue())
      })
    }

    loadIsFirst(){
      this.http.get(environment.apiBaseUrl + '/check-is-first')
      .subscribe(value => {
        this.setIsFirst(value['isFirst'])
        console.log('isFirst ', this.is_first.getValue())
      })
    }

    setIsFirst(name: string){
      this.is_first.next(name)
    }

    checkIsFirst(): BehaviorSubject<any> {
      return this.is_first;
    }

    toggleIsFirst(){
      return this.http.get(environment.apiBaseUrl + '/toggle-is-first');
    }

    setFullname(name: string){
      this.full_name.next(name)
    }

    getFullname(): BehaviorSubject<any> {
      return this.full_name;
    }

    loadFullname(){
      this.http.get(environment.apiBaseUrl + '/get-full-name')
      .subscribe(value => {
        this.setFullname(value['fullname'])
        console.log('Update username ',this.full_name.getValue());
      })
    }

    setTotalReferredCount(totalReferredCount: number){
      this.totalReferredCount.next(totalReferredCount)
    }

    getTotalReferredCount(): BehaviorSubject<any> {
      return this.totalReferredCount;
    }

    loadTotalReferrredCount(){
      this.http.get(environment.apiBaseUrl + '/get-user-totalReferredCount')
      .subscribe(value => {
        this.setTotalReferredCount(value['totalReferredCount'])
        console.log('Update TotalReferralCount ', this.totalReferredCount.getValue())
      })
    }

    setRank(rank: string){
      this.rank.next(rank)
    }

    getRank(): BehaviorSubject<any> {
      return this.rank;
    }

    loadRank(){
      this.http.get(environment.apiBaseUrl + '/get-user-rank')
      .subscribe(value => {
        this.setRank(value['rank'])
        console.log('Update rank ', this.rank.getValue())
      })
    }
  
   
     setToken(token: string) {
      localStorage.setItem('token', token);
     }
    //  setUsername(username: string) {
    //   localStorage.setItem('username', username);
    //  }

     deleteToken() {
       window.localStorage.removeItem('token');
     }
   
     public getToken(): string {
     this.token = localStorage.getItem('token');
     return this.token;
     }
  
   
     getUserPayload() {
       const token = this.getToken();
       if (token) {
         const userPayload = atob(token.split('.')[1]);
         return JSON.parse(userPayload);
       } else {
         return null;
       }
     }
   
     isLogedIn() {
       const userPayload = this.getUserPayload();
       if (userPayload) {
       return userPayload.exp > Date.now() / 1000;
       } else {
       return false;
       }
     }
     public logout(): void {
      this.deleteToken();
      this.token = '';
      this.username = '';
      this.accountBalance = '';
      this.profilePic.next('');
      this.user_name.next('');
      localStorage.removeItem('appUser');
      this.router.navigateByUrl('/login');
     }
 
}
