export class PolicyTypeComponent{
    public getpolicyTypeList(){
        let policyType:PolicyType[]=[
            new PolicyType('1','Auto'),
            new PolicyType('2','Powersports'),
            new PolicyType('3','Homeowners'),
            new PolicyType('4','Tenant')
        ]

        return policyType;
    }
}


export class PolicyType{
    id:string
    value:string

    constructor(id:string,value:string){
        this.id=id
        this.value=value
    }
}