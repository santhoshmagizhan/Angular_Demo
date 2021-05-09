import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class APIDataConfig {
  public SetResultData = new Subject();
    
    constructor(){

    }
}