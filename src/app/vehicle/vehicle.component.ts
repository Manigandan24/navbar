import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { VehicleType } from '../metadata/vehicletype';
import { VehicleTypeComponent } from '../metadata/vehicletype'
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { VehicleDetail } from '../policy/policy.model'


@Component({
    selector: 'app-vehicleinfo',
    styleUrls: ['./vehicle.component.scss'],
    templateUrl: './vehicle.component.html'
})
export class VehicleDetailsComponent implements OnInit {
    vehicleDetailsForm!: FormGroup;
    vehicleDetailsArray!: FormArray;

    vehicleTypes: VehicleType[] = new VehicleTypeComponent().getVehicleTypeList();
    selectedVehicleIds: number[] = [];

    thSelected = false;
    multiselect: boolean = false;

    constructor(private formBuilder: FormBuilder,) {
    }

    ngOnInit() {
        this.vehicleDetailsForm = this.formBuilder.group({
            vehicleDetailsArray: this.formBuilder.array([])
        })
        this.vehicleDetails().push(this.newVehicleDetails());
    }

    newVehicleDetails(): FormGroup {
        return this.formBuilder.group({
            checked: new FormControl(false),
            vehicleId: [''],
            vehicleType: [this.vehicleTypes[0].id],
            supplementalVehicle: [''],
            vin: new FormControl(''),
            make: new FormControl(''),
            model: [''],
            year: ['']
        })
    }

    vehicleDetails(): FormArray {
        return this.vehicleDetailsForm.get("vehicleDetailsArray") as FormArray;
    }

    addVehicleDetails() {
        this.vehicleDetails().push(this.newVehicleDetails());
    }

    removeVehicleDetails(vehIndex: number) {
        this.vehicleDetails().removeAt(vehIndex);
    }

    removeSelectVehicle() {
        let vehicleDetails: VehicleDetail[] = this.vehicleDetails().value;
        vehicleDetails.sort(function (a, b) { return a.vehicleId > b.vehicleId ? 1 : ((b.vehicleId > a.vehicleId ? -1 : 0)) }
        )
        this.selectedVehicleIds.forEach(a => {
            let index = vehicleDetails.map(function (e) {
                return e.vehicleId
            }).indexOf(a);

            if (index > -1 ) { //leave first entry
                this.vehicleDetails().removeAt(index);
                index = -1
                vehicleDetails = this.vehicleDetails().value;
                vehicleDetails.sort(function (a, b) { return a.vehicleId > b.vehicleId ? 1 : ((b.vehicleId > a.vehicleId ? -1 : 0)) }
                )
            }
        })
        this.selectedVehicleIds = []
        this.multiselect=false
        this.thSelected=false
    }

    setCurrIndex(event: MatCheckboxChange, vehIndex: number) {
        if (event.checked)
            this.selectedVehicleIds.push(vehIndex);
        else { //when unchecked remove the vehicle id
            let index = this.selectedVehicleIds.indexOf(vehIndex)
            if (index > -1)
                this.selectedVehicleIds.splice(index, 1)
        }
        console.log(this.selectedVehicleIds)
    }
    
    /*
    selectAll(event: MatCheckboxChange) {
        this.multiselect=true
        let vehicleDetails: VehicleDetail[] = this.vehicleDetails().value;
        if (event.checked) {
            for (let i = 0; i < vehicleDetails.length; i++) {
                let vehicleDetail: VehicleDetail;
                vehicleDetail = (<FormArray>this.vehicleDetailsForm.controls['vehicleDetailsArray']).at(i).value;
                vehicleDetail['checked'] = true;
                (<FormArray>this.vehicleDetailsForm.controls['vehicleDetailsArray']).controls[i].patchValue(vehicleDetail);
            }
            vehicleDetails.forEach(e => {
                this.selectedVehicleIds.push(e.vehicleId);
            });
        } else {
            for (let i = 0; i < vehicleDetails.length; i++) {
                let vehicleDetail: VehicleDetail;
                vehicleDetail = (<FormArray>this.vehicleDetailsForm.controls['vehicleDetailsArray']).at(i).value;
                vehicleDetail['checked'] = false;
                (<FormArray>this.vehicleDetailsForm.controls['vehicleDetailsArray']).controls[i].patchValue(vehicleDetail);
            }
            this.selectedVehicleIds=[]
        }
    }*/

    
    selectAll(event: MatCheckboxChange) {
        if(event.checked){
            let vehicleDetails: VehicleDetail[] = this.vehicleDetails().value;
            this.multiselect=true;
            this.thSelected=true;
            vehicleDetails.forEach(e => {
                this.selectedVehicleIds.push(e.vehicleId);
            });
            
        }else{
            this.multiselect=false;
            this.thSelected=false;
            this.selectedVehicleIds=[]
        }
    }

    onSubmit(vehicleDetailsForm: VehicleDetail) {

    }
}