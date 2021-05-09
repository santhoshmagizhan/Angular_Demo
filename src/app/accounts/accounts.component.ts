import { Component, OnInit } from '@angular/core';
import { APIDataConfig } from '../APIDataConfig';
import { AppComponent  } from "../app.component";
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
Users:any=[];
  constructor(private APIResult:APIDataConfig, private Appcomp:AppComponent) { 

    this.APIResult.SetResultData.subscribe((Rdata:any)=>{
      this.Users=Rdata;
    });
  }
  getalert(){
    // this.APIResult.SetResultData.subscribe((Rdata:any)=>{
    //   alert(Rdata);
    // });
    this.Appcomp.TriggerAPICall2();
   // alert(JSON.stringify(this.Users));
   
  }
  ngOnInit(): void {
  }

}
