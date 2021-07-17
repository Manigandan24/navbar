
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ListOfCodes} from './code'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
  })
export class DataService{
    headers = {'accept': 'application/json' , 'Content-Type': 'application/json'}


    constructor(private http: HttpClient) {}

    /**
     * 
     * @returns Async function
     */
    public getData():Observable<ListOfCodes>{
        return this.http.get<ListOfCodes>(environment.CODE_URL,{'headers':this.headers});
    }

    /**
     * 
     * @returns Synchronous service
     */
    public async getDataService(){
        return await this.http.get<ListOfCodes>(environment.CODE_URL,{'headers':this.headers}).toPromise();
    }

}