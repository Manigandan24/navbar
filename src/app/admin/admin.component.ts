import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LineOfBusiness,LineOfBusinessComponent } from '../metadata/lineofbusiness';
import {PolicyTypeComponent, PolicyType} from '../metadata/policytype'
import { ReasonComponent,Reason } from '../metadata/reason';
import { StateComponent,State } from '../metadata/state';
import {CompanyComponent, Company} from '../metadata/company'

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent{

  policyInfoForm:FormGroup;
  reasons:Reason[]=new ReasonComponent().getReasons();
  lob:LineOfBusiness[]=new LineOfBusinessComponent().getLob();
  policyTypes:PolicyType[]=new PolicyTypeComponent().getpolicyTypeList();
  rateStates:State[]=new StateComponent().getStateList();
  companies:Company[]=new CompanyComponent().getCompanyList();

  constructor(private formBuilder: FormBuilder,){

      this.policyInfoForm=this.formBuilder.group({
          reason:[this.reasons[0].id],
          lineOfBusiness:[''],
          policyType:[''],
          rateState:[''],
          company:[''],
          policyNumber:[''],
          policyEffectiveDate:[''],
          companyCode:[''],
          payPlan:['REG']
      });
  }

  onSubmit(){

  }

}