import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../services/websocket.service';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls:[
    './chat.component.css'
  ]
})
export class ChatComponent {

  constructor(
    public wsService: WebsocketService
  ){}

  ngOnInit(){
    
    
  }

}
