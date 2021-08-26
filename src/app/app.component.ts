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
    
    //1. if or ternary or switch
    //2. loop for or map*
    //3. object or array--> add, check, filter.

    //Manipulating existing array
    let names=['hari','ramkumar','santhosh'];

    //multi array
    let MA_names=[{'name':'hari','degree':'BCA','hobbies':['games','eating shawarma','roaming']},{'name':'ramkumar','degree':'ECE','hobbies':['reading','killing']},{'name':'santhosh','degree':'BCA','hobbies':['movies','series','games']}];

    console.clear();  
  

    //looping 

    // not gonna use in angular
    for(let i=0;i<names.length;i++)
    {
      //syntax : variable[index]  -- names[1]
     console.log(names[i],"For LOOP");
    }
    
    names.forEach(this.testfunction);
//

//will use in angular
  names.map((temp:any)=>
  {
   console.log(temp,"---> Map =>");
  });

  names.map(function(temp:any)
  {
    console.log(temp,"---> Map function");
  });

  //checking

  //what is index eg:
  let name = "Ram Kumar";
  let index = name.indexOf("mar");

 // alert(index);

  //findindex single array
  let nameindex= names.findIndex((tempfind:any)=> tempfind==="hari");
  //alert(nameindex);

  //find index 0 1 2 
  let nameindex2= MA_names.findIndex((tempfind:any)=> tempfind.name==="ramkumar");
  //alert(nameindex2);

  //filer match
  let getfiltered = MA_names.filter((tempfilter:any)=>tempfilter.degree==='BCA');
  //alert(JSON.stringify(getfiltered));

  //filer unmatched
  let getfiltered1 = MA_names.filter((tempfilter:any)=>tempfilter.degree!=='BCA');
  //alert(JSON.stringify(getfiltered1));

  //alert(MA_names[0].hobbies[2]);

  //filter array inside the array
  
  let filerinside = MA_names.filter((tempfilter:any)=> {
    let index=tempfilter.hobbies.indexOf('reading');
    //ternary 
    return index!==-1? tempfilter:"";

  });
  // alert(JSON.stringify(filerinside));
  //continue... ⬇

 //switch eg.
   switch (filerinside[0].name) {
     case 'hari':
     //  alert('velavan');
       break;
       case 'ramkumar':
     //   alert('shyam ganesh');
        break;
     default:
     //  alert('santhosh');
       break;
   }


  //looping -- ends
  



    
   
  //Create an array
  names.push('thirdperson');
  //alert(JSON.stringify(names));
  MA_names.push({'name':'thirdperson','degree':'open university','hobbies':['nothing']});
  //alert(JSON.stringify(MA_names));

let numberdata:number[]=[];
  for(let i=0;i<=5;i++)
  {
    numberdata.push(i);
  }
  
  alert(numberdata.toString());



   
  
  }

testfunction(item:any){
 console.log(item,"For Each");
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
