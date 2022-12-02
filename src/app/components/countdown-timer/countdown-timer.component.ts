import { Component, Input, OnInit } from '@angular/core';
import { GameServiceService } from '../../shared/game-service.service';
@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
    @Input() userCount: String;
    notLive: boolean = true;
  constructor(
    public gameService: GameServiceService,
    ) { 
      console.log("userCount", this.userCount);
}

ngOnInit() {
    console.log("userCount", this.userCount);
}

  async initializeTimer(){
    let day = document.querySelector(".day-loader");
    let hour = document.querySelector(".hour-loader");
    let minute = document.querySelector(".minute-loader");
    let second = document.querySelector(".second-loader");
  
    let dayValue = 0;
    let hourValue = 0;
    let minuteValue = 0;
    let secondValue = 0;
  
    let dayEndValue = 60 * 60 * 24;
    let hourEndValue = 60 * 60;
    let minuteEndValue = 60;
    let secondEndValue = 60;
    // let progressEndValue = 60 * 60;
    let speed = 1000;
  
    
  
    let dayprogress = setInterval(() => {
        dayValue++;
       
        (day as HTMLElement).style.background = `conic-gradient(
            #4d5bf9 ${dayValue * 0.1}deg,
            #cadcff ${dayValue * 0.1}deg
        )`
        if(dayValue == dayEndValue){
            dayValue = 0;
        }
    }, speed)
  
    let hourprogress = setInterval(() => {
      hourValue++;
     
      (hour as HTMLElement).style.background = `conic-gradient(
          #4d5bf9 ${hourValue * 0.1}deg,
          #cadcff ${hourValue * 0.1}deg
      )`
      if(hourValue == hourEndValue){
          hourValue = 0;
      }
  }, speed)
  
  let minuteprogress = setInterval(() => {
        minuteValue++;
       
        (day as HTMLElement).style.background = `conic-gradient(
            #4d5bf9 ${minuteValue * 6}deg,
            #cadcff ${minuteValue * 6}deg
        )`
        if(minuteValue == minuteEndValue){
            minuteValue = 0;
        }
    }, speed)
  
    let secondprogress = setInterval(() => {
        secondValue++;
       
        (day as HTMLElement).style.background = `conic-gradient
            #cadcff ${secondValue * 6}deg,
            #4d5bf9 ${secondValue * 6}deg,
        )`
        if(secondValue == secondEndValue){
            secondValue = 0;
        }
    }, speed)
  }
}