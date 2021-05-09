import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 PostResult:any;
 PutResult:any;
 DeleteResultSE:any;
  constructor(private APIService:UsersService) {
  this.APIService.PostApi().subscribe(
    Pdata=>{this.PostResult=Pdata;}
  );
  this.APIService.PutAPI().subscribe(PutData=>{
this.PutResult=PutData;
  });
  this.APIService.DeleteAPI().subscribe(
    success=> {
     this.DeleteResultSE="Deleted Successfully!";

      },
      err=>{
        this.DeleteResultSE="Error in Deletion";
      }
      )

  }

  ngOnInit(): void {
  }

}
