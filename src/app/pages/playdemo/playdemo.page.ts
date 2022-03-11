import { DemoQuestionsService } from '../../shared/demo-questions.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { GameServiceService } from '../../shared/game-service.service';
import { AccountService } from '../../shared/account.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CongratsComponent } from '../../components/congrats/congrats.component';
import { FailGameComponent } from '../../components/fail-game/fail-game.component';

@Component({
  selector: 'app-playdemo',
  templateUrl: './playdemo.page.html',
  styleUrls: ['./playdemo.page.scss'],
})
export class PlaydemoPage implements OnInit {
  @ViewChild('info', {static : false}) info: ElementRef; 
  @ViewChild('correct', {static : false}) correct: ElementRef;
  @ViewChild('wrong', {static : false}) wrong: ElementRef;
  gameQuestions: any [];
   
    lastQuestion : any;
    currentQuestion: any;
    startGame = false;
    progress: any;
    correcQuestion  = 0;
    wrongQuestion = 0;
    timerTicker : any;
     runningQuestion  = 0;
     timeMinute: any = 0;
    timeSeconds: any = 0;
    loadingGame = false;
    correctAns: any = 0;
    gameOver : boolean;
    wrongAns: any = 0;
    disableClick : boolean = false;
    low_balance = false;
    btnColor1 ="success";
    btnColor2 ="success";
    btnColor3 ="success";
    btnColor4 ="success";



    private QuestionSub;
    private playCategory;
    private loadBalanceSub;
    private deductSub;

    GameTimeMinute: any = 0;
  GameTimeSeconds: any = 0;
    


  constructor(private userService: UserService, private gameService: GameServiceService,
              public accountService: AccountService, private alertController : AlertController,
              private modalController : ModalController,
              private demoQuestionsService : DemoQuestionsService,
              // private nativeAudio: NativeAudio,
              private router: Router) {
    // setTimeout(()=> {
    //   this.info.nativeElement.classList.remove('infinite');
    // }, 12000);
  }

  model = {
    filterOptions : [
    ]
  } 

  public allCategory = [
    {
      name: "Art",
      participant: '150'
    },
    {
      name: "Economics",
      participant: '150'
    },
    {
      name: "History",
      participant: '150'
    },
    {
      name: "Movie",
      participant: '150'
    },
    {
      name: "Politics",
      participant: '150'
    },
    {
      name: "Science",
      participant: '150'
    },
    {
      name: "Sport",
      participant: '150'
    },
    {
      name: "Tourism",
      participant: '150'
    }
  ]

  ngOnInit() {

  }



  ionViewWillEnter() {
    this.gameService.getAdminDate();
    this.getQuestionForGame();
    console.log('will enter');
  }

  
  ngOnDestroy() {
    // this.gameQuestions.unsubscribe();
    this.QuestionSub = '';
    this.playCategory = '';
    this.loadBalanceSub = '';
    this.deductSub = '';
    this.timeSeconds = 0;
    this.timeMinute = 0;
    clearInterval(this.timerTicker);
    
  }

  getColor1(){
    this.btnColor1 = 'light';
  }
  getColor2(){
    this.btnColor2 = 'light';
  }
  getColor3(){
    this.btnColor3 = 'light';
  }
  getColor4(){
    this.btnColor4 = 'light';
  }

  getQuestionForGame() { 
    this.lastQuestion = 0;
    this.runningQuestion = 0;
    this.gameQuestions = this.demoQuestionsService.demoQuestions;
    this.lastQuestion =  this.gameQuestions.length - 1;
    this.loadingGame = false;
  }

  selectChange( $event) {
    this.playByCategory($event);
  }

  playByCategory(category){
    this.loadingGame = true;
    this.playCategory =  this.userService.playByCategory(category.toLowerCase()).subscribe(
      res => {
        this.loadingGame = false;
        this.startGame = true;
        this.gameQuestions = res['questions'];
        console.log(this.gameQuestions);
        this.lastQuestion =  this.gameQuestions.length - 1;
        this.currentQuestion  = this.gameQuestions[this.runningQuestion];
        this.startTimer();

      }
    );

  }


  gameisOver(){ 
    this.GameTimeMinute = this.timeMinute;
    this.GameTimeSeconds = this.timeSeconds;
    this.gameOver = true;
    this.loadingGame = true;
    this.startGame = false;
    
    const minutes = (3 -  this.timeMinute );
    const seconds = (60 -  this.timeSeconds );
    let correct_qst = this.correctAns;
    let wrong_qst = this.wrongAns;
  
    // this.presentResult(minutes, seconds, correct_qst);
    if(correct_qst === 15){
      this.presentCongratsModal(minutes, seconds, correct_qst);
    }else{
      this.presentFailedModal(minutes, seconds, correct_qst);
    }
    
    const record = {minutes , seconds, correct_qst, wrong_qst};
    // this.userService.postQuestionRecord(record).subscribe(
    //     res => {
    //       this.loadingGame = false;
    //       console.log('record submitted..');
    //       this.gameOver = null;
    //       this.disableClick = false;
    //       this.loadingGame = false;
    //       this.startGame = false;


    //       this.runningQuestion = 0;
    //       this.playCategory = '';
    //       this.loadBalanceSub = '';
    //       this.deductSub = '';
    //       this.timeSeconds = 0;
    //       this.timeMinute = 0;
    //       clearInterval(this.timerTicker);
    //         }
    //   );
    this.gameOver = false;
    this.disableClick = false;
    this. runningQuestion  = 0;
    this.lastQuestion = 0;
    }

  checkAnswer(selection, correctAnswer) {
      this.disableClick = true;
      console.log("clicked");
      if (selection == correctAnswer){
        // this.correct.nativeElement.classList.add('heartBeat');
        this.correctAns = this.correctAns + 1;
          } else {
        this.wrongAns = this.wrongAns + 1;
        // this.wrong.nativeElement.classList.add('wobble');
        }
        // tslint:disable-next-line: align
        setTimeout(() => {
          this.nextQuestion();
        }, 1000);
  }


  startQuestion() {
    this.startGame = true;
    this.currentQuestion  = this.gameQuestions[this.runningQuestion];
    this.startTimer();
           
  }


 
  renderQuestion() {
  this.startGame = true;
  this.disableClick = false;
  this.currentQuestion  = this.gameQuestions[this.runningQuestion];
  }


  nextQuestion(){
    this.btnColor1 = 'success';
    this.btnColor2 = 'success';
    this.btnColor3 = 'success';
    this.btnColor4 = 'success';
    // this.wrong.nativeElement.classList.remove('wobble');
    // this.correct.nativeElement.classList.remove('heartBeat');
    if ( this.runningQuestion  < this.lastQuestion  ) {
      this.runningQuestion ++;
      this.renderQuestion();
    }else{
      this.startGame = false;
      this.gameOver = true;
      // no more question!
    }
  }
  

  renderProgress() {
    for (let qIndex = 0; qIndex <= this.lastQuestion; qIndex++ ) {
      this.progress = qIndex;
    } 
  }

  startTimer() {
    // COUNTDOWN IN SECONDS
   // EXAMPLE - 5 MINS = 5 X 60 = 300 SECS
   let counter = 240;
   // Start if not past end date
   if (counter > 0) {
     this.timerTicker = setInterval(() => {
       // Stop if passed end time
       counter--;
       if (counter == 0 || this.gameOver) {
         clearInterval(this.timerTicker);
         this.gameisOver();
         counter = 0;
        
       }
 
       let secs = counter;
       const mins  = Math.floor(secs / 60); // 1 min = 60 secs
       secs -= mins * 60;
       this.timeMinute = mins;
       this.timeSeconds = secs;

       if (this.gameOver){
         clearInterval(this.timerTicker);
       }else{
       }
 
     }, 1000);
   }
 }

 gameOverToleaderboard(){
   this.gameOver = undefined;
   this.correctAns = 0;
   this.wrongAns = 0;
   this.router.navigate(['/leaderboard']);
 }
 gameOverToRecords(){
   this.gameOver = undefined;
   this.correctAns = 0;
   this.wrongAns = 0;
   this.router.navigate(['/myrecord']);
 }


 async presentCongratsModal(minutes, seconds, correctQuestion) {
   const modal = await this.modalController.create({
   component: CongratsComponent,
   componentProps: {minutes, seconds, correctQuestion }
   });
 
   await modal.present();
   const data = await modal.onDidDismiss();
  //  this.router.navigate(['/tabs/gamesection']);
 
 }


 async presentFailedModal(minutes, seconds, correctQuestion) {
   console.log('QSTTT',correctQuestion);
   const modal = await this.modalController.create({
   component: FailGameComponent,
   componentProps: {minutes, seconds, correctQuestion }
   });
 
   await modal.present();
   const data = await modal.onDidDismiss();
   this.ngOnDestroy();
 
 }
 
 
async presentResult(min, secs, correct) {
  const alert = await this.alertController.create({
    header: ' GAME RESULT',
    message : `<h1>Score  ${correct}/15</h1>  <br>
              <h4 class="text-success">Elapsed ${min} min , ${secs} secs</h4>`,
 
    buttons: [ {
        text: 'OK',
        cssClass : 'success',
        handler: (val) => {
         this.router.navigate(['/tabs/gamesection']);
        }
      }
    ]
  });

  await alert.present();

  setTimeout(()=> {
    this.router.navigate(['/tabs/gamesection']);
    this.ngOnDestroy()
    alert.dismiss()
  },3000);
}


}
