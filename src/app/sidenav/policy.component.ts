
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
  selector: 'policy-card',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})

export class PolicyComponent {
  @ViewChild("policyForm") policyForm!: NgForm;
  searchPolicy: boolean = true
  viewPolicy: boolean = false
  policynumber: string;
  policyExists: boolean = false
  isAdmin: boolean = false
  userName: string
  policystatus: string

  sideNavItems: SideNavItem[] = new ItemsList().getItemsList();
  /**
   * activate ngclass
   */
  classStyler = {
    search: true,
    view: false
  }

  constructor(private authGuardService: AuthGuardService, private authService: AuthService, private userService: UserService) {
  }

  onSubmit(policyForm: NgForm) {
    this.policynumber = this.policyForm.control.get("policynumber").value;
    //invoke service to check policy existence
    if (this.policynumber == '12345') {
      this.policyExists = true
      this.policystatus = "Policy Found"
    } else {
      this.policyExists = false
      this.policystatus = "Policy not Found"
    }

    this.userService.currentUser.subscribe(x => {
      this.isAdmin = x.isAdmin
      this.userName = x.userName;
    })
  }

  enableSearchPolicy() {
    this.searchPolicy = true;

    this.classStyler.search = true;
    this.classStyler.view = false
  }

  enableViewPolicy() {
    this.searchPolicy = false

    this.classStyler.search = false;
    this.classStyler.view = true
  }

  reset(policyForm: NgForm) {
    policyForm.resetForm();
    this.policyExists = false
    this.policystatus = ""
  }

}

export class ItemsList {

  public getItemsList() {
    let sideNavItems: SideNavItem[] = [
      {
        displayName: 'View/Create/Edit',
        disabled: true,
        iconName: '',
        route: 'menu',
        children: [{
          displayName: 'PolicyInfo',
          disabled: false,
          iconName: '',
          route: 'menu/policy/policyInfo',
        }, {
          displayName: 'PNI/Mailing Address',
          disabled: false,
          iconName: '',
          route: 'menu/policy/pni',
        }, {
          displayName: 'Policy Coverage',
          disabled: false,
          iconName: '',
          route: '',
        }, {
          displayName: 'Driver/Vehicle Details',
          disabled: false,
          iconName: '',
          route: 'menu/policy/vehicleDetails',
        }, {
          displayName: 'Policy/Vehicle Level Coverages',
          disabled: false,
          iconName: '',
          route: '',
        }, {
          displayName: 'Vehicle Coverage',
          disabled: false,
          iconName: '',
          route: '',
        }, {
          displayName: 'Discounts',
          disabled: false,
          iconName: '',
          route: '',
        }
        ]
      }
    ]

    return sideNavItems;
  }
}