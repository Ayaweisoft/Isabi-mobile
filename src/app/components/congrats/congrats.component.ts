import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss'],
})
export class CongratsComponent implements OnInit {
  @Input() minutes: string;
  @Input() seconds: string;
  @Input() correctQuestion: number;
  result: any;
    constructor(private modalController: ModalController, private router: Router) { 
     
      this.result = {minutes: this.minutes, seconds : this.seconds, correctQuestion : this.correctQuestion};
    }
  
   
  
    ngOnInit() {
      console.log(this.minutes, this.seconds, this.correctQuestion);
    }
  
    dismissModal(){
      this.modalController.dismiss();
      this.router.navigate(['/tabs/events']);
      
    }
    playAgain(){
      this.modalController.dismiss();
      this.router.navigate(['/tabs/playsection']);
      
    }
  
  
  }
  