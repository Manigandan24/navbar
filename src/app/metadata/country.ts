export class CountryComponent{
    public getCountryList(){
        let countries:Country[]=[
            new Country('1_TN','TN'),
            new Country('2_AP','AP'),
            new Country('3_KL','KL'),
            new Country('4_TA','TA')
        ]

        return countries;
    }
}


export class Country{
    id:string
    value:string

    constructor(id:string,value:string){
        this.id=id
        this.value=value
    }
}