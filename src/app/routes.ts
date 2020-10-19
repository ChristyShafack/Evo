import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventRouteActivator } from './events/events-details/event-route-activator.component';
import { EventsListComponent } from './events/events-list.component';
import { Routes } from '@angular/router';

//CREATING OUR ROUTES
//THERE ARE TWO WAYS TO ADD ROUTE  GUARDS; BY A SERVICE(MOST FLEXIBLE) OR A FUNCTION
export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] }, //ROUTE GUARD USING A FUNCTION REGISTERED AS A PROVIDER IN OUR MODULE
    { path: 'events', component: EventsListComponent, resolve: { events:EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]}, //GUARD USING A SERVICE
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]
