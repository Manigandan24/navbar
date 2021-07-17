import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navbar';
  constructor(private fb: FormBuilder,private activatedRoute: ActivatedRoute, private router: Router){
  
  }

}
