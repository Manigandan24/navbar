import { Component } from '@angular/core';
import {AuthService} from '../auth/auth.service'
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'menu-root',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })
export class MenuComponent{

  constructor(private authservice: AuthService,private router:Router){

  }

  logout(){
    this.authservice.logoutUser();
    this.router.navigate(['./login'])
  }

}