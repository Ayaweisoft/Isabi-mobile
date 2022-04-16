import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input()
  allItems: Array<any> = [];
  @Output()
  displayedItems: EventEmitter<any[]>  = new EventEmitter<any[]>();
  // displayEvents: Array<any> = [];

  constructor() { }

  ngOnInit() {
    
  }

  filterItem(value, list = this.allItems){
    let newEvents = list.filter(item => item.eventName.toUpperCase().includes(value.toUpperCase()) || item.aboutEvent.toUpperCase().includes(value.toUpperCase()));
    // this.displayedEvents = newEvent¦s;
    this.displayedItems.emit(newEvents);
  }
}
