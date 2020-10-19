import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.component';
import { EventsListComponent } from './events/events-list.component';
import { Routes } from '@angular/router';

//CREATING OUR ROUTES
export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]