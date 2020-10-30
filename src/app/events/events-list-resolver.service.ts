import { EventService } from './shared/event.service';
//CREATING THE GET EVENTS LIST RESOLVER SERVICE
import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {}
    resolve(){
        //Subscribing to the Observrable
       return this.eventService.getEvents()
    }
}