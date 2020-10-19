import { BrowserModule } from '@angular/platform-browser';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
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
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
