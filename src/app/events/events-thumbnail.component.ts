import { Component, Input } from '@angular/core';

import { IEvent } from './shared/index'

@Component({
  selector: 'events-thumbnail',
  template: `
  <div [routerLink] = "['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{ event?.name | uppercase }}</h2>
    <div>Date: {{event?.date | date: 'shortDate' }}</div>
    <div  [ngSwitch] ="event?.time">Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">( Early Start )</span>
      <span *ngSwitchCase="'10:00 am'">( Late Start )</span>
      <span *ngSwitchDefault>( Normal Start )</span>
    </div>
    <div>Price: {{event?.price | currency:'USD'}}</div>
    <div *ngIf="event?.location"><!-- [hidden]="!event?.location" Hides location if it doesn't exist-->
        <span> Location: {{event?.location?.address}}</span>
        <span class="pad-left"> {{event?.location?.city}},</span>
        <span> {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl"><!-- [hidden]="!event?.onlineUrl Hides url if it doesn't exist-->
    Online URL: {{event?.onlineUrl}}
    </div>
    </div>
    `,
  styles: [
    ` .thumbnail { min-height: 210px; }
      .pad-left { margin-left: 10px; }
      .well div { color: #bbb; }
    `
  ]
})
export class EventsThumbnailComponent {
  @Input() event: IEvent

}
