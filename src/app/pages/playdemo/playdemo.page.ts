import { BehavourService } from './../../services/behavour.service';
import { DemoQuestionsService } from "../../shared/demo-questions.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { GameServiceService } from "../../shared/game-service.service";
import { AccountService } from "../../shared/account.service";
import { AlertController, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { CongratsComponent } from "../../components/congrats/congrats.component";
import { FailGameComponent } from "../../components/fail-game/fail-game.component";

@Component({
  selector: "app-playdemo",
  templateUrl: "./playdemo.page.html",
  styleUrls: ["./playdemo.page.scss"],
})
export class PlaydemoPage implements OnInit {
  @ViewChild("info", { static: false }) info: ElementRef;
  @ViewChild("correct", { static: false }) correct: ElementRef;
  @ViewChild("wrong", { static: false }) wrong: ElementRef;
  gameQuestions: any[];

  lastQuestion: any;
  currentQuestion: any;
  startGame = false;
  progress: any;
  correcQuestion = 0;
  wrongQuestion = 0;
  timerTicker: any;
  runningQuestion = 0;
  timeMinute: any = 0;
  timeSeconds: any = 0;
  loadingGame = false;
  correctAns: any = 0;
  gameOver: boolean;
  wrongAns: any = 0;
  disableClick: boolean = false;
  low_balance = false;
  gameCategory: any;
  showModal: boolean = false;
  option1 = "none";
  option2 = "none";
  option3 = "none";
  option4 = "none";
  btnColor1 = "none";
  btnColor2 = "none";
  btnColor3 = "none";
  btnColor4 = "none";

  private QuestionSub;
  private playCategory;
  private loadBalanceSub;
  private deductSub;

  GameTimeMinute: any = 0;
  GameTimeSeconds: any = 0;
  currentGameAmount: any;
  currentDemoAmount: number = 20;

  constructor(
    private userService: UserService,
    private gameService: GameServiceService,
    public accountService: AccountService,
    private behaviorService: BehavourService,
    private alertController: AlertController,
    private modalController: ModalController,
    private demoQuestionsService: DemoQuestionsService,
    // private nativeAudio: NativeAudio,
    private router: Router
  ) {
    
    // setTimeout(()=> {
    //   this.info.nativeElement.classList.remove('infinite');
    // }, 12000);
  }

  model = {
    filterOptions: [],
  };

  public allCategory = [
    {
      name: "Economics",
      participant: "150",
      logo: "../../assets/figma/akar-icons_search.svg",
    },
    {
      name: "History",
      participant: "150",
      logo: "../../assets/figma/fluent_history-20-filled.svg",
    },
    {
      name: "Movie",
      participant: "150",
      logo: "../../assets/figma/bx_movie-play.svg",
    },
    {
      name: "Politics",
      participant: "150",
      logo: "../../assets/figma/ic_outline-how-to-vote.svg",
    },
    {
      name: "Science",
      participant: "150",
      logo: "../../assets/figma/eos-icons_science-outlined.svg",
    },
    {
      name: "Sport",
      participant: "150",
      logo: "../../assets/figma/fluent_sport-basketball-24-regular.svg",
    },
    {
      name: "Tourism",
      participant: "150",
      logo: "../../assets/figma/icon-park-outline_tour-bus.svg",
    },
  ];

  ngOnInit() {
    this.behaviorService.getGameAmount().subscribe(amount => {
      //console.log('see AMount', amount)
      this.currentGameAmount =  amount;
      if(amount === null){
        this.getRemoteAmount();
      }
    })
  }

  ionViewWillEnter() {
    this.gameService.getAdminDate();
    this.getQuestionForGame();
    console.log("will enter");
  }

  ionViewWillLeave() {
    // this.gameQuestions.unsubscribe();
    this.QuestionSub = "";
    this.playCategory = "";
    this.loadBalanceSub = "";
    this.deductSub = "";
    this.timeSeconds = 0;
    this.timeMinute = 0;
    clearInterval(this.timerTicker);
    // this.gameOver = true;
    this.loadingGame = true;
    this.startGame = false;
    this.gameOver = false;
    this.disableClick = false;
    this.runningQuestion = 0;
    this.lastQuestion = 0;
    this.correctAns = 0;
    this.wrongAns = 0;
  }

  ngOnDestroy() {
    // this.gameQuestions.unsubscribe();
    this.QuestionSub = "";
    this.playCategory = "";
    this.loadBalanceSub = "";
    this.deductSub = "";
    this.timeSeconds = 0;
    this.timeMinute = 0;
    clearInterval(this.timerTicker);
    // this.gameOver = true;
    this.loadingGame = true;
    this.startGame = false;
    this.gameOver = false;
    this.disableClick = false;
    this.runningQuestion = 0;
    this.lastQuestion = 0;
    this.correctAns = 0;
    this.wrongAns = 0;
  }

  getColor1() {
    this.btnColor1 = "light";
  }
  getColor2() {
    this.btnColor2 = "light";
  }
  getColor3() {
    this.btnColor3 = "light";
  }
  getColor4() {
    this.btnColor4 = "light";
  }

  getRemoteAmount(){
    console.log('getting remote amount');
    this.loadingGame =  true;
    this.gameService.getGameAmount().subscribe(res => {
      if(res.data?.amount){
        this.behaviorService.setGameAmount(res.data?.amount);
      }
      this.loadingGame = false;
    }, err => {
      this.loadingGame = false;
    })
  }

  getQuestionForGame() {
    this.lastQuestion = 0;
    this.runningQuestion = 0;
    this.gameQuestions = this.demoQuestionsService.demoQuestions;
    this.lastQuestion = this.gameQuestions.length - 1;
    this.loadingGame = false;
  }

  selectChange($event) {
    this.playByCategory($event);
  }

  setCategory(category: any){
    this.gameCategory = category;
    this.showModal = true;
  }

  playByCategory(category) {
    this.loadingGame = true;
    this.playCategory = this.userService
      .playByCategory(category.toLowerCase())
      .subscribe((res) => {
        // this.loadingGame = false;
        // this.startGame = true;
        this.gameQuestions = res["questions"];
        // console.log(this.gameQuestions);
        this.lastQuestion = this.gameQuestions.length - 1;
        this.currentQuestion = this.gameQuestions[this.runningQuestion];
        // this.startTimer();
      }); 
  }

  playWithBalance(){
    this.showModal = false;
    this.playByCategory(this.gameCategory);
    this.loadBalanceSub =  this.accountService.loadBalanceForCalculation().subscribe(
      res => {
        const UserBalance = res['balance'];
        if (UserBalance <  this.currentDemoAmount){
          this.low_balance = true;
          setTimeout(() => {
            this.low_balance = false;
          }, 7000);
          // this.logicService.presentAlert('Game Alert','Insuficient funds');
        } else {
          this.loadingGame = true;
        this.deductSub =  this.accountService.deductGameAmountFromAccountDemo().subscribe(
            (res) => {
              console.log('PAY RES',res)
              this.accountService.loadMyBalance();
              this.startGame = true;
              this.currentQuestion  = this.gameQuestions[this.runningQuestion];
              this.startTimer();
              this.loadingGame = false;

            },
            error => {console.log('ERROR', error); }
          );
        }
      },  
      err => {
        console.error(err);
        this.loadingGame = false;
      }
    );
  }

  playWithBonus(){
    this.showModal = false;
    this.playByCategory(this.gameCategory);
    
    this.loadBalanceSub =  this.accountService.loadBonusForCalculation().subscribe(
      res => {
        const UserBonus = res['bonus'];
        if (UserBonus <  this.currentDemoAmount){
          this.low_balance = true;
          setTimeout(() => {
            this.low_balance = false;
          }, 7000);
        } else {
          this.loadingGame = true;
        this.deductSub =  this.accountService.deductGameAmountFromBonusDemo().subscribe(
            (res) => {
              console.log('PAY RES',res)
              this.accountService.loadMyBonus();
              this.startGame = true;
              this.currentQuestion  = this.gameQuestions[this.runningQuestion];
              this.startTimer();
              this.loadingGame = false;

            },
            error => {console.log('ERROR', error); }
          );
        }
      },
      err => {
        console.error(err);
        this.loadingGame = false;
      }
    );
  }

  gameisOver() {
    this.GameTimeMinute = this.timeMinute;
    this.GameTimeSeconds = this.timeSeconds;
    this.gameOver = true;
    this.loadingGame = true;
    this.startGame = false;

    const minutes = 3 - this.timeMinute;
    const seconds = 60 - this.timeSeconds;
    let correct_qst = this.correctAns;
    let wrong_qst = this.wrongAns;

    // this.presentResult(minutes, seconds, correct_qst);
    if (correct_qst === 15) {
      this.presentCongratsModal(minutes, seconds, correct_qst);
    } else {
      this.presentFailedModal(minutes, seconds, correct_qst);
    }

    const record = { minutes, seconds, correct_qst, wrong_qst };
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
    // this.gameQuestions.unsubscribe();
    this.QuestionSub = "";
    this.playCategory = "";
    this.loadBalanceSub = "";
    this.deductSub = "";
    this.timeSeconds = 0;
    this.timeMinute = 0;
    clearInterval(this.timerTicker);
    // this.gameOver = true;
    this.loadingGame = true;
    this.startGame = false;
    this.gameOver = false;
    this.disableClick = false;
    this.runningQuestion = 0;
    this.lastQuestion = 0;
    this.correctAns = 0;
    this.wrongAns = 0;
  }

  checkAnswer(selection, correctAnswer, option) {
    this.disableClick = true;
    
    if (selection == correctAnswer) {
      this[option] = 'correct'
      this.correctAns = this.correctAns + 1;
    } else {
      this.wrongAns = this.wrongAns + 1;
      this[option] = 'wrong'
      const options = [
        this.currentQuestion.option1,
        this.currentQuestion.option2,
        this.currentQuestion.option3,
        this.currentQuestion.option4,
      ]
      let correctOption = options.findIndex(el=> {
        return el.includes(correctAnswer)
      }) + 1
      console.log(correctOption)
      this['option' + correctOption] = 'correct'

    }
    // tslint:disable-next-line: align
    setTimeout(() => {
      this.option1 = 'none'
      this.option2 = 'none'
      this.option3 = 'none'
      this.option4 = 'none'
      this.nextQuestion();
    }, 1000);
  }

  startQuestion() {
    this.startGame = true;
    this.currentQuestion = this.gameQuestions[this.runningQuestion];
    this.startTimer();
  }

  renderQuestion() {
    this.startGame = true;
    this.disableClick = false;
    this.currentQuestion = this.gameQuestions[this.runningQuestion];
  }

  nextQuestion() {
    this.btnColor1 = "success";
    this.btnColor2 = "success";
    this.btnColor3 = "success";
    this.btnColor4 = "success";
    // this.wrong.nativeElement.classList.remove('wobble');
    // this.correct.nativeElement.classList.remove('heartBeat');
    if (this.runningQuestion < this.lastQuestion) {
      this.runningQuestion++;
      this.renderQuestion();
    } else {
      this.startGame = false;
      this.gameOver = true;
      // no more question!
    }
  }

  renderProgress() {
    for (let qIndex = 0; qIndex <= this.lastQuestion; qIndex++) {
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
        const mins = Math.floor(secs / 60); // 1 min = 60 secs
        secs -= mins * 60;
        this.timeMinute = mins;
        this.timeSeconds = secs;

        if (this.gameOver) {
          clearInterval(this.timerTicker);
        } else {
        }
      }, 1000);
    }
  }

  gameOverToleaderboard() {
    this.gameOver = undefined;
    this.correctAns = 0;
    this.wrongAns = 0;
    this.router.navigate(["/leaderboard"]);
  }
  gameOverToRecords() {
    this.gameOver = undefined;
    this.correctAns = 0;
    this.wrongAns = 0;
    this.router.navigate(["/myrecord"]);
  }

  async presentCongratsModal(minutes, seconds, correctQuestion) {
    const modal = await this.modalController.create({
      component: CongratsComponent,
      componentProps: { minutes, seconds, correctQuestion },
    });

    await modal.present();
    const data = await modal.onDidDismiss();
     this.router.navigate(['/tabs/playdemo']);
  }

  async presentFailedModal(minutes, seconds, correctQuestion) {
    console.log("QSTTT", correctQuestion);
    const modal = await this.modalController.create({
      component: FailGameComponent,
      componentProps: { minutes, seconds, correctQuestion },
    });

    await modal.present();
    const data = await modal.onDidDismiss();
    this.ngOnDestroy();
  }

  async presentResult(min, secs, correct) {
    const alert = await this.alertController.create({
      header: " GAME RESULT",
      message: `<h1>Score  ${correct}/15</h1>  <br>
              <h4 class="text-success">Elapsed ${min} min , ${secs} secs</h4>`,

      buttons: [
        {
          text: "OK",
          cssClass: "success",
          handler: (val) => {
            this.router.navigate(["/tabs/playdemo"]);
          },
        },
      ],
    });

    await alert.present();

    setTimeout(() => {
      this.router.navigate(["/tabs/playdemo"]);
      this.ngOnDestroy();
      alert.dismiss();
    }, 3000);
  }
}
