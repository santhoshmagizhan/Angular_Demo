import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {AccountsComponent} from '../accounts/accounts.component'
import {AppComponent } from '../app.component';
import { APIDataConfig } from "../APIDataConfig";
import { Subject } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   Users:any;
    
  constructor(private Usersobj:UsersService, private AppAuth:AppComponent , private APIResult:APIDataConfig) {
   // AppAuth.ConfigureSSO();
  //   this.Usersobj.getResult().subscribe(Rdata=>{
  //     this.Users = Rdata;
  //     console.log(this.Users);
  //  });
  
    this.APIResult.SetResultData.subscribe((Rdata:any)=>{
     this.Users=Rdata;
    });
}
test(e:Event)
{
  let Textbox:HTMLInputElement=e.target as HTMLInputElement;
  if(Textbox.value.length>=3)
  alert(Textbox.value);
}
  onclick()
  {
    this.AppAuth.TriggerAPICall();
  }
  ngOnInit(): void {
    this.AppAuth.TriggerAPICall();
  }

}
