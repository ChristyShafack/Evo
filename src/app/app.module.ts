import { CollapsibleWellComponent, JQ_TOKEN, ModalTriggerDirective, SimpleModalComponent, TOASTR_TOKEN, Toastr } from './commons/index'
import{
  CreateEventComponent,
  DurationPipe,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  EventService,
  EventsListComponent,
  EventsThumbnailComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService
} from './events/index'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './user/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CreateSessionComponent } from './events/events-details/create-session.component';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { appRoutes } from './routes';

let toastr:Toastr = window['toastr']
let jQuery:Toastr = window['$']

@NgModule({
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  // { TOASTR_TOKEN }, USE CLASS WAY OF PROVIDING SERVICES
  // { provide: TOASTR_TOKEN, useValue: toastr }, USE VALUE WAY OF PROVIDING SERVICES
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },

    EventRouteActivator,  
    EventListResolver,
    VoterService,
    AuthService,
    { provide: 'canDeactivateCreateEvent', 
    useValue: checkDirtySate
    }
    //THE LONG HAND APPROACH {provide: EventService, useValue: EventService}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtySate(component:CreateEventComponent){
  if (component.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}
