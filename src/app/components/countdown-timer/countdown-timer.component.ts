import { Component, Input, OnInit } from '@angular/core';
import { GameServiceService } from '../../shared/game-service.service';
@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  constructor(
    public gameService: GameServiceService,
  ) { }

  ngOnInit() {}

}