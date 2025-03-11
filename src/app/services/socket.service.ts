import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
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
    return this.socket
            .fromEvent(eventName)
            .pipe(map((data: any) => {
              // data.msg
              console.log(data)
              return data;
            } ));
    // return this.socket.fromEvent(eventName).pipe(map((result: any) => result.data));
  }

  emit(eventName: string, data: any){
    this.socket.emit(eventName, data);
  }
  test(id: string){
    console.log("test", id);
    this.emit('test', id);
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

  getConnectedUsers(): Observable<any> {
    this.test('test');
    this.emit('getConnectedUsers', null);
    return this.listen('connectedUsers');
  }

  getUserDisconnected(): Observable<any> {
    this.emit('getUserDisconnected', null);
    return this.listen('userDisconnected');
  }

  userEntersGame(id: string, gameId: string){
    this.emit('userEntersGame', {userId: id, gameId: gameId});
  }

  userLeavesGame(id: string, gameId: string){
    this.emit('userLeavesGame', {userId: id, gameId: gameId});
  }

}


