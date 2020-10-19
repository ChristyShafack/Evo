import { BrowserModule } from '@angular/platform-browser';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.component';
import { EventService } from './events/shared/event.service'
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
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
