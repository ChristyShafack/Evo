import { Component } from '@angular/core'
import { EventService } from './shared/index'
import { Router } from '@angular/router'

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
  event:any 
  
  newEvent
  isDirty:boolean = true
  constructor(private router: Router, 
    private eventService:EventService) {
  }
  ngOnInit(){
    this.event = {
      id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        onlineUrl:'http://angularconnect.com',
        imageUrl: 'http://angularconnect.com/angularconnect-shield.png',
    }
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}