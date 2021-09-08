import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavourService {

  private gameAmount = new BehaviorSubject<number>(null);

  constructor() { }


  setGameAmount(amount: any) {
		this.gameAmount.next(amount);
	}

	getGameAmount(): BehaviorSubject<any> {
		return this.gameAmount;
	}


}
