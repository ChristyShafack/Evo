import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/index'

//LETTING TYPESCRIPT KNOW ABT THE Toastr VARIABLE
@Component({
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

//INJECTING EVENT SERVICE & TOASTR SERVICE
export class EventsListComponent implements OnInit {
  events: IEvent[]
  constructor(private eventService: EventService, private route:ActivatedRoute) {
  }
  //INJECTING THE SERVICE IN A LIFE CYCLE HOOK (ONLY WHEN IT IS NEEDED)
  //FETCHING DATA FROM THE ngOnInit event
  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }
}
