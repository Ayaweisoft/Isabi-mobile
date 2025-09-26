import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {
  @ViewChild(IonSlides) slides!: IonSlides;

  constructor(private router: Router) {}

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
  };

  async nextSlide() {
    await this.slides.slideNext();
  }

  skipOnboarding() {
    this.router.navigate(['/login']);
  }
}