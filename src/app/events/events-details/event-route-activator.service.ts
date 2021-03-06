import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router"

import { EventService } from "../shared/event.service"
import { Injectable } from "@angular/core"

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router){
    }
    
    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !!this.eventService.getEvent(+route.params['id']) //CASTING EVENT ID TO A NUMBER
        if (!eventExists)
        this.router.navigate(['/404'])
        return eventExists
    }
}