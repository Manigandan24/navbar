export class CompanyComponent{
    public getCompanyList(){
        let companies:Company[]=[
            new Company('1_ABC','ABC'),
            new Company('2_XYZ','XYZ'),
            new Company('3_ASD','ASD'),
            new Company('4_ZXC','ZXC')
        ]

        return companies;
    }
}


export class Company{
    id:string
    value:string

    constructor(id:string,value:string){
        this.id=id
        this.value=value
    }
}