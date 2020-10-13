import { Component, Input } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{ event.name }}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
        <span>Location: Address: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>Location: City: {{event.location.city}}</span>
        <span>Location: Country: {{event.location.country}}</span>
    </div>
    <br>
    <button class="btn btn-primary" (click)="handleClickMe()"> Click Me! </button>
    </div>`
})
export class EventsThumbnailComponent {
  @Input() event: any;
  handleClickMe(){
      alert('clicked!');
  }
}
