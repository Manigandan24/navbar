import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component'
import {AuthService} from './auth/auth.service'
import {AuthGuardService} from './auth/authguard.service'
import {PolicyComponent} from './sidenav/policy.component'
import {MenuComponent} from './topnav/menu.component'
import { RouterLinkActive } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {UserService} from './policy/user.service'
import {MenuListItemComponent} from './menu-list-item/menu-list-item.component'
import {PolicyInfoComponent} from './policyinfo/policyinfo.component'
import { MergeComponent } from './merge/merge.component';
import {VehicleDetailsComponent} from './vehicle/vehicle.component'
import {NamedInsuredComponent} from './namedinsued/ni.component'
import {MY_DATE_FORMATS } from './metadata/forms.validation'
import {HttpClientModule } from '@angular/common/http'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MAT_DATE_FORMATS } from '@angular/material/core'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PolicyComponent,
    MenuComponent,
    AdminComponent,
    MenuListItemComponent,
    PolicyInfoComponent,
    MergeComponent,
    VehicleDetailsComponent,
    NamedInsuredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  providers: [AuthService,AuthGuardService,UserService,RouterLinkActive,
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
