import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  segment= 'direct';
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev){
    console.log(ev)
    this.segment = ev.detail.value;
  }

}
