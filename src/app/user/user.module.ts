import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login.component'
import { NgModule } from '@angular/core'
import { ProfileComponent } from './profile.component'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule 
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [

  ]
})
export class UserModule { }