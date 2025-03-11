import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  noAuthHeader = {headers: new HttpHeaders({NoAuth: 'True'})};
AuthHeader = {headers: new HttpHeaders().set('Authorization',
`Bearer ${localStorage.getItem('token')}`)};


  constructor(private http: HttpClient) { }

  submitPagent(form){
    return this.http.post(environment.apiBaseUrl + '/submit-pagent', form);
  }

  getAllEvent(){
    return this.http.get(environment.apiBaseUrl +'/get-all-event');
  }
  getAllEventAdmin(){
    return this.http.get(environment.apiBaseUrl +'/get-all-event-admin');
  }
  getAllApprovedEventAdmin(){
    return this.http.get(environment.apiBaseUrl +'/get-event-by-status/APPROVED');
  }
  getAllPendingEventAdmin(){
    return this.http.get(environment.apiBaseUrl +'/get-event-by-status/PENDING');
  }

  getEventById(id: any){
    console.log('service: ', id);
    return this.http.get(environment.apiBaseUrl +`/v2/get-event-by-id/${id}`);
  }
  approveEvent(id: any){
    return this.http.get(environment.apiBaseUrl +`/approve-event/${id}`);
  }
  rejectEvent(id: any){
    return this.http.get(environment.apiBaseUrl +`/reject-event/${id}`);
  }

  checkTicketIdIfExist(ticketId, eventId){
    return this.http.get(environment.apiBaseUrl+ `/v2/check-ticket-id/${ticketId}/${eventId}`)

  }

  savePurchaseTicket(ticket: any){
    return this.http.post(environment.apiBaseUrl +'/v2/save-purchased-ticket', ticket).pipe(shareReplay(1))
  }

  findMyTicket(eventId, email){
    return this.http.get(environment.apiBaseUrl +'/v2/find-my-ticket/'+ eventId +"/"+email);
  }
  submitEvent(event){
    return this.http.post(environment.apiBaseUrl + '/submit-event', event);
  }

  updateEvent(event){
    return this.http.put(environment.apiBaseUrl + '/update-event', event);
  }

  createContestTant(contestant){
    return this.http.post(environment.apiBaseUrl + '/create-contestant', contestant);
  }

  getAllContestant(id){
    return this.http.get(environment.apiBaseUrl + `/get-contestant${id}`)
  }

deleteTicket(id){
  return this.http.delete(environment.apiBaseUrl + '/v2/delete-ticket/'+id);
}

  updateEventStatus(data){
    return this.http.put(environment.apiBaseUrl + `/v2/change-event-status`, data)
  }

  submitVote(votes){
    return this.http.put(environment.apiBaseUrl + '/submit-vote', votes);
  }

  submitVoteForWeb(votes){
    return this.http.put(environment.apiBaseUrl + '/submit-vote-web', votes);
  }

  deleteContestant(id){
return this.http.delete(environment.apiBaseUrl +`/delete-contestant${id}`);
  }

  deleteEvent(id){
return this.http.delete(environment.apiBaseUrl +`/delete-event${id}`);
  }


  submitTicket(ticket){
    return this.http.post(environment.apiBaseUrl +'/v2/submit-ticket', ticket);
  }
  getTicketByEventId(id){
    return this.http.get(environment.apiBaseUrl +'/v2/get-ticket-by-event-id/'+id);
  }

  shareTicket(newTicketData){
    return this.http.put(environment.apiBaseUrl + '/v2/share-my-ticket', newTicketData);
  }

  getTicketById(id){
    return this.http.get(environment.apiBaseUrl +'/v2/get-ticket-by-id/'+id)
  }

  confirmTicketId(id){
    return this.http.get(environment.apiBaseUrl +'/v2/confirm-ticket/'+id);
  }

  
}
