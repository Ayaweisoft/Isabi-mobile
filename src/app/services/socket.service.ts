import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

constructor(private socket: Socket) {
  this.socket.connect();
} 

  connect(){
    this.socket.connect();
  }

  listen(eventName: string){
    return this.socket.fromEvent(eventName).pipe(map((result: any) => result.data));
  }

  emit(eventName: string, data: any){
    this.socket.emit(eventName, data);
  }
  
  fetchOnlineUsers(): Observable<number> {
    this.emit('fetchOnlineUsers', null);
    return this.listen('onlineUsers');
  }

  userConnected(id: string){
    this.emit('userConnected', id);
  }
  
  userDisconnected(id: string){
    this.emit('userDisconnected', id);
  }

  userEntersGame(id: string, gameId: string){
    this.emit('userEntersGame', {userId: id, gameId: gameId});
  }

  userLeavesGame(id: string, gameId: string){
    this.emit('userLeavesGame', {userId: id, gameId: gameId});
  }

}


