import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input()
  allEvents: Array<any> = [];
  @Output()
  displayedEvents: EventEmitter<any[]>  = new EventEmitter<any[]>();
  // displayEvents: Array<any> = [];

  constructor() { }

  ngOnInit() {
    
  }

  filterItem(value, list = this.allEvents){
    let newEvents = list.filter(item => item.eventName.toUpperCase().includes(value.toUpperCase()) || item.aboutEvent.toUpperCase().includes(value.toUpperCase()));
    // this.displayedEvents = newEvent¦s;
    this.displayedEvents.emit(newEvents);
  }
}
