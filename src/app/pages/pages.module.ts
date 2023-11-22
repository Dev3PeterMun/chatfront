import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { PagesComponent } from './pages.component';
import { UsersComponent } from './users/users.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientsComponent } from './clients/clients.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { environment } from "../environments/environment.prod";

const config: SocketIoConfig = { url: environment.wsUrl, options: {} };


@NgModule({
  declarations: [
    DashboardComponent,
    ChatComponent,
    PagesComponent,
    UsersComponent,
    CalendarComponent,
    ClientsComponent

  ],
  exports: [
    DashboardComponent,
    ChatComponent,
    PagesComponent,
    UsersComponent,
    CalendarComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SocketIoModule.forRoot(config)
  ]
})
export class PagesModule { }
