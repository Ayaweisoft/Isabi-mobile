import { GameServiceService } from 'src/app/shared/game-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
@Input() label : string;
  gameService: GameServiceService
  constructor(
    gameService: GameServiceService
  ) {
    this.gameService = gameService
   }

  ngOnInit() {}

}
