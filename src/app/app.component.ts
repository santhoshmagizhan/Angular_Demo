import { Component, OnInit , OnChanges, DoCheck} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso.config';
import { Router } from '@angular/router'
import { UsersService } from "./users.service";
import { APIDataConfig } from "./APIDataConfig";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firstng';
  opened=false;
  Users:any=[];
  constructor(public dialog: MatDialog, public Oauth:OAuthService, private router:Router , private Usersobj:UsersService, private ApiResult:APIDataConfig) {
  
  
  }
ProgressBar_SetStatus(Status:boolean)
{
  let ProgressBar:HTMLElement=document.getElementById("ProgressBars") as HTMLElement;
  console.log(ProgressBar);
  Status?ProgressBar.setAttribute('mode','indeterminate'):ProgressBar.setAttribute('mode','determinate');
}
  TriggerAPICall()
  {
    this.ProgressBar_SetStatus(true);
    this.Usersobj.getResult().subscribe((Rdata: any)=>{
    this.ApiResult.SetResultData.next(Rdata);
    console.log(Rdata);
    this.ProgressBar_SetStatus(false);
   });
  }
  TriggerAPICall2()
  {
    this.ProgressBar_SetStatus(true);
    this.Usersobj.PostApi().subscribe((Rdata: any)=>{
    this.ApiResult.SetResultData.next(Array.isArray(Rdata)?Rdata:[Rdata]);
    console.log(Rdata);
    this.ProgressBar_SetStatus(false);
   });
  }
  ngOnInit()
  {
     
  }
  ngOnChanges(){
 
  }
  ngDoCheck(){
    //this.ConfigureSSO(); 
     }
  ConfigureSSO()
{
 
  this.Oauth.configure(authCodeFlowConfig);
  this.Oauth.tokenValidationHandler=new JwksValidationHandler();
  this.Oauth.loadDiscoveryDocumentAndLogin();
}



get CurrentUrl()
{
return window.location.origin + this.router.url;
}

get token()
{
  let claims:any = this.Oauth.getIdentityClaims;
  return claims ? claims : null;
}

  openDialog() {
  let dialogRef= this.dialog.open(DialogContentComponent);
   
  dialogRef.afterClosed().subscribe(result=>{
  console.log(`Dialog Result : ${result}`)
  });
  }
}
