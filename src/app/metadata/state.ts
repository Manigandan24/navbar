export class StateComponent{
    public getStateList(){
        let states:State[]=[
            new State('1_TN','TN'),
            new State('2_AP','AP'),
            new State('3_KL','KL'),
            new State('4_TA','TA')
        ]

        return states;
    }
}


export class State{
    id:string
    value:string

    constructor(id:string,value:string){
        this.id=id
        this.value=value
    }
}