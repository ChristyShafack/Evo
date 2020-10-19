import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { Routes } from '@angular/router';

//CREATING OUR ROUTES
export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]