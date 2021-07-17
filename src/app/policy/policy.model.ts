export class PolicyDetailsApi{
    policyId: number
    

}

export class PolicyInfo{
    reason:string //list box
    lineOfBusiness:string
    policyType:string //list box
    rateState:string //list box
    company:string //list box
    policyNumber:string
    policyEffectiveDate:Date
    companyCode:string
    payPlan:string //default to REG, editable
}

export class PrimaryNamedInsured{
    namedInsuredId:number
    prefix:string
    firstName:string
    lastName:string
    middleName:string
    dateOfBirth:Date //>18yrs
    addressess:Address

}

export class AccountDetails{
    accountNumber:string
    accountName:string
}

export class Address{
    addressId:number
    addressType:string
    street:string
    city:string
    state:string //list box
    zip:string
    country:string
}

export interface VehicleDetail{
    checked:boolean
    vehicleId:number
    vehicleType:string
    supplementalVehicle:boolean
    vin:string
    make:string
    model:string
    year:number
}

export interface DriverDetails{
    firstName:string;
    lastName:string;
    driverNo:number
    dateOfBirth:Date
    gender:string //listbox
}

export class PolicyLevelCoverage{
    covergaeCode:string //listbox
    limit:number
    dedAmount:number
    optionCode:string
    optionAmount:Number
    premium:string //append $ by default

}

//load vehicle number  and add/remove button for coverage
export interface VehicleLevelCoverage{
    covergaeCode:string //listbox
    limit:number
    dedAmount:number
    optionCode:string
    optionAmount:Number
    premium:string //append $ by default
}

