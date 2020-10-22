import{
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  EventService,
  EventsListComponent,
  EventsThumbnailComponent,
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
import { ToastrService } from './commons/toastr.service';
import { appRoutes } from './routes';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
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
