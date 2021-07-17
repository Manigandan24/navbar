import { FormArray, FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StateComponent, State } from '../metadata/state';
import { CountryComponent, Country } from '../metadata/country'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { PrimaryNamedInsured } from '../policy/policy.model'
import { DatePipe } from '@angular/common';

const addressType: string[] = [
    "MailingAddres",
    "PrimaryAddress"
]

@Component({
    selector: 'ni-policyinfo',
    styleUrls: ['./ni.component.css'],
    templateUrl: './ni.component.html',
    providers: [DatePipe]
})
export class NamedInsuredComponent {

    states: State[] = new StateComponent().getStateList();
    countries: Country[] = new CountryComponent().getCountryList();

    addressIndex: number = -1;
    addressId: number = 0;
    dateOfBirth:Date;

    namedInsuredForm!: FormGroup;
    address!: FormArray;

    constructor(private formBuilder: FormBuilder, private router: Router, private datePipe: DatePipe) {

    }

    ngOnInit() {
        this.namedInsuredForm = this.formBuilder.group({
            namedInsuredId: new FormControl(1),
            prefix: new FormControl(),
            firstName: new FormControl(),
            lastName: new FormControl(),
            middleName: new FormControl(),
            dateOfBirth: new FormControl(), //>18yrs
            //addressess:new FormArray([this.createAddress()])
            addressess: this.formBuilder.array([this.createAddress()])
        })
    }

    createAddress(): FormGroup {
        this.addressId++;
        return this.formBuilder.group({
            addressId: new FormControl(this.addressId),
            addressType: new FormControl(),
            street: new FormControl(),
            city: new FormControl(),
            state: new FormControl(this.states[0].id),
            zip: new FormControl(),
            country: new FormControl(this.countries[0].id),
        })
    }

    addAddress() {
        this.getAddress().push(this.createAddress());
    }

    removeAddress() {
        if(this.addressIndex>0)
            this.getAddress().removeAt(this.addressIndex);
        this.addressIndex = -1;
    }

    getAddress(): FormArray {
        return this.namedInsuredForm.get('addressess') as FormArray
    }

    setCurrIndex(event: MatCheckboxChange, i: number) {
        if (event.checked && i > 0)
            this.addressIndex = i
        else
            this.addressIndex = -1;
    }

    onSubmit() {
        let namedInsured: PrimaryNamedInsured;
        namedInsured = this.namedInsuredForm.value
        console.log(namedInsured.addressess[0].city);
        console.log(this.datePipe.transform(namedInsured.dateOfBirth, 'yyyy-MM-dd'))
        console.log(this.dateOfBirth);
    }

}