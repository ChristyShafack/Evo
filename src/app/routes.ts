import {
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventListResolver,
    EventRouteActivator,
    EventsListComponent
} from './events/index'

import { Error404Component } from './errors/404.component';
import { Routes } from '@angular/router';

//CREATING OUR ROUTES
//THERE ARE TWO WAYS TO ADD ROUTE  GUARDS; BY A SERVICE(MOST FLEXIBLE) OR A FUNCTION
export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] }, //ROUTE GUARD USING A FUNCTION REGISTERED AS A PROVIDER IN OUR MODULE
    { path: 'events', component: EventsListComponent, resolve: { events:EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]}, //GUARD USING A SERVICE
    { path: 'events/sessions/new', component: CreateSessionComponent}, //GUARD USING A SERVICE
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    // { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'user', loadChildren: () => import('./user/user.module').then((mod) => mod.UserModule),}

]
