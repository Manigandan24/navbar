import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth/authguard.service';
import { LoginComponent } from './login/login.component'
import { PolicyComponent } from './sidenav/policy.component'
import { MenuComponent } from './topnav/menu.component'
import { AdminComponent } from './admin/admin.component';
import { PolicyInfoComponent } from './policyinfo/policyinfo.component'
import {VehicleDetailsComponent} from './vehicle/vehicle.component'
import {NamedInsuredComponent} from './namedinsued/ni.component'
import { MergeComponent } from './merge/merge.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'menu', component: MenuComponent, canActivate: [AuthGuardService], children: [
      { path: '', redirectTo: 'policy', pathMatch: 'full' }, //default page
      {
        path: 'policy', component: PolicyComponent, children: [
           { path: 'policyInfo', component: PolicyInfoComponent },
           { path: 'pni', component: NamedInsuredComponent },
           { path: 'vehicleDetails', component: VehicleDetailsComponent
        }]
      },
      { path: 'admin', component: AdminComponent }
    ]
  }
 /* {
    path: 'menu', component: MenuComponent, canActivate: [AuthGuardService], children: [
      { path: '', redirectTo: 'policy', pathMatch: 'full' }, //default page
      {
        path: 'policy', component: PolicyComponent, children: [{
//          path: 'select',children:[{
            path: 'policyInfo', component: PolicyInfoComponent
 //         }]
        }]
      },
      { path: 'admin', component: AdminComponent }
    ]
  }*/,
  //{path:'search',component:PolicyComponent },// canActivate:[AuthGuardService]}, //enable authguard to redirect to login page

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
