
export interface ListOfCodes{
    stateCodes:StateCode[],
    companyCodes:CompanyCode[],
    reasons:ReasonCode[],
    lineOfBusiness:LobCode[],
    policyTypes:PolicyTypeCode[],
    gender:GenderCode[],
    coverageCodes:CoverageCode[],
    roles:RoleCode[],
    users:UserCode[]
}

export interface CompanyCode{
    id:number,
    code:string,
    value:string
}

export interface ReasonCode{
    id:number,
    code:string,
    value:string
}

export interface GenderCode{
    id:number,
    code:string,
    value:string
}

export interface LobCode{
    id:number,
    code:string,
    value:string
}

export interface PolicyTypeCode{
    id:number,
    code:string,
    value:string
}

export interface StateCode{
    id:number,
    code:string,
    value:string
}

export interface UserRoleCode{
    roleId:number,
    role:string,
    description:string
}

export interface UserCode{
    id:number,
    username:string,
    password:string
    userRoles:UserRoleCode[]
}

export interface RoleCode{
    roleId:number,
    role:string,
    description:string
}

export interface CoverageCode{
    id:number,
    code:string,
    value:string,
    coverageType:string,
    innerLimit:string,
    outerLimit:string
}