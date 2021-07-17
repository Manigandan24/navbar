import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LineOfBusiness,LineOfBusinessComponent } from '../metadata/lineofbusiness';
import {PolicyTypeComponent, PolicyType} from '../metadata/policytype'
import { ReasonComponent,Reason } from '../metadata/reason';
import { StateComponent,State } from '../metadata/state';
import {CompanyComponent, Company} from '../metadata/company'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {DataService} from '../service/data.service'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyCode, ListOfCodes, ReasonCode } from '../service/code';

@Component({
    selector:'app-policyinfo',
    styleUrls:['./policyinfo.component.css'],
    templateUrl:'./policyinfo.component.html'
})
export class PolicyInfoComponent{

    policyInfoForm:FormGroup;
    reasons:Reason[]=new ReasonComponent().getReasons();
    lob:LineOfBusiness[]=new LineOfBusinessComponent().getLob();
    policyTypes:PolicyType[]=new PolicyTypeComponent().getpolicyTypeList();
    rateStates:State[]=new StateComponent().getStateList();
    companies:Company[]=new CompanyComponent().getCompanyList();

    isLoading:boolean=false;
    listOfCodes:ListOfCodes;
    companieCodes:CompanyCode[];
    reasonCodes:ReasonCode[];


    constructor(private formBuilder: FormBuilder,private router: Router, private dataService: DataService){

        this.dataService.getData().subscribe(
            (resp)=>{
                this.listOfCodes=resp;
                this.isLoading=true;

                this.companieCodes=this.listOfCodes.companyCodes;
            },
            (error)=>{
                console.log('Error in calling data service')
            }
        )

        //sync call
        this.dataService.getDataService().then(a=>{
            this.reasonCodes=a.reasons
        })

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

    next(){
        this.router.navigate(['menu/policy/pni'],{ skipLocationChange: false });
    }

    onSubmit(){

    }

}
