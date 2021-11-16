import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss'],
})
export class TicketItemComponent implements OnInit {
@Input() id;

ticket : Ticket;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    console.log('shared tick id ', this.id )
    this.eventService.getTicketById(this.id).subscribe(data => {
      console.log('data ', data);
      this.ticket = data['ticket'];
    }, err => {
      console.log(err);
    })
  }

}
