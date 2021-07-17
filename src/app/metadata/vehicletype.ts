export class VehicleTypeComponent{
    public getVehicleTypeList(){
        let types:VehicleType[]=[
            new VehicleType('RV','Recreational Vehicle'),
            new VehicleType('CR','Caravan'),
            new VehicleType('PPA','Private Passenger Auto'),
        ]

        return types;
    }
}


export class VehicleType{
    id:string
    value:string

    constructor(id:string,value:string){
        this.id=id
        this.value=value
    }
}