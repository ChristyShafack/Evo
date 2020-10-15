import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr>
  <!--PASSING VALUE OF EVENT1 FROM EVENTS-LIST COMP TO EVENTS-THUMBNAIL COMP-->
  <!--USING THUMBNAIL VARIABLES TO INTERACT WITH CHILD COMPONENTS-->
  <events-thumbnail #thumbnail  [event]= "event1" ></events-thumbnail>
  <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Me Some Foo</button>
</div>
  `
})

export class EventsListComponent {
  event1 = {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10:00 am',
      price: 599.99,
      imageUrl: 'assets/images/angularconnect-shield.png',
      location : {
          address: '1057 DT',
          city: 'London',
          country: 'England'
        }
      } 
}
