import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators, } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthGuardService } from '../auth/authguard.service';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../policy/user.service'
import { SideNavItem } from '../sidenav/nav.item'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'merge-card',
    templateUrl: './merge.component.html',
    styleUrls: ['./merge.component.css']
  })
export class MergeComponent{

  
}