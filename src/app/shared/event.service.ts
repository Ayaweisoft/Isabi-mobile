import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  checkTicketIdIfExist(ticketId, eventId){
    return this.http.get(environment.apiBaseUrl+ `/v2/check-ticket-id/${ticketId}/${eventId}`)

  }

  savePurchaseTicket(ticket){
    return this.http.post(environment.apiBaseUrl +'/v2/save-purchased-ticket', ticket);
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
