export class LineOfBusinessComponent{

    public getLob(){
        let lob:LineOfBusiness[]=[
            {
                id: '1',
                value:'Personal Auto'
            },
            {
                id: '2',
                value:'Powersports'
            },
            {
                id: '3',
                value:'Personal Property'
            }

        ]

        return lob;
    }
}

export interface LineOfBusiness{
    id:string
    value:string
}