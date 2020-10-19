import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr>
  <!--PASSING VALUE OF EVENT1 FROM EVENTS-LIST COMP TO EVENTS-THUMBNAIL COMP-->
  <!--USING THUMBNAIL VARIABLES TO INTERACT WITH CHILD COMPONENTS using #thumbnail -->
  <div class="row">
  <div *ngFor = "let event of events" class="col-md-5">
  <events-thumbnail [event] = "event" ></events-thumbnail>
  </div>
  </div>
</div>
  `
})

//INJECTING EVENT SERVICE
export class EventsListComponent {
  events
  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents()
  }
}
