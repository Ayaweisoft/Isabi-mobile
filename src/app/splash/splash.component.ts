import { IonSlides, ModalController, } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {
    slideOpts = {
    initialSlide: 1,
    // speed: 750
  };
  
  @ViewChild('mySlider', {static : false}) mySlider: IonSlides;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  ionViewDidEnter(){
   setTimeout(() => {
     this.modalController.dismiss()
   }, 30000)
   this.autoSlide()
  }

    clickSlidetoNext() {
    console.log('slide to next')
    this.mySlider.slideNext();
  }

  clickSlidePrevious() {
    console.log('slide to previous');
    this.mySlider.slidePrev();
  }

  async autoSlide() {
     this.mySlider.slideNext(3500, true);
}

}
