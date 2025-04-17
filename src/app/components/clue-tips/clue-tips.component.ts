import { IonSlides } from '@ionic/angular';
import { Component, ViewChild, OnInit } from '@angular/core';
import { GameServiceService } from '../../shared/game-service.service';
@Component({
  selector: 'clue-tips',
  templateUrl: './clue-tips.component.html',
  styleUrls: ['./clue-tips.component.scss'],
})
export class ClueTipsComponent implements OnInit {
  @ViewChild('mySlider', {static : false}) mySlider: IonSlides;

  slideCounter =  0;

opts = {
  slidePerView: 1,
  spaceBetween: 20
}
  constructor(
    public gameService: GameServiceService,
  ) { }

  ngOnInit() {
    this.autoSlide();
  }

  async autoSlide() {
    setInterval(()=> {
       this.gameService.slideCounter = this.gameService.gameTipArray.length;
       this.gameService.slideCounter --;
       this.mySlider.slideNext(3000, true);
      //  console.log('slide to prev', this.gameService.slideCounter);
    
    
    },9000)

 }

 clickSlidetoNext() {
  // console.log('slide to next')
  this.mySlider.slideNext();
}

clickSlidePrevious() {
  // console.log('slide to previous');
  this.mySlider.slidePrev();
}

}