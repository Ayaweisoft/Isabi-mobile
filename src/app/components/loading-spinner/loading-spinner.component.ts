import { IonSlides } from '@ionic/angular';
import { Component, ViewChild, OnInit } from '@angular/core';
import { GameServiceService } from '../../shared/game-service.service';
@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
 
  constructor(
    public gameService: GameServiceService,
  ) { }

  ngOnInit() {
  }

}