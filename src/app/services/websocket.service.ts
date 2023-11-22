import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false

  constructor(
    private socket: Socket
  ) { 
    //this.checkStatus();
  }

  // checkStatus(){
  //   console.log('aqui');
  
  //   this.socket.on("connect", () => {
  //     console.log('Conectado al servidor');
      
  //     this.socketStatus = true;
  //   });

  //   console.log('end');
    

  // }

}
