export class ReasonComponent{

    reason:Reason[]

    public getReasons(){
        this.reason=[
            new Reason('1','Policy not found/Policy not found'),
            new Reason('2','New Policy')
        ]

        return this.reason;
    }
}


export class Reason{
    id:string
    value:string

    constructor(id:string,value:string){
        this.id=id
        this.value=value
    }
}