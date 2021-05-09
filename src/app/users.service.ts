import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  PostData={
    id:'Tst1',
    title:'tSt2',
    test2:'tsT3'
  };
  constructor(private http:HttpClient) { }

    getResult()
    {
 
      return  this.http.get("https://jsonplaceholder.typicode.com/todos")
    
    }

    PostApi()
    {
      return  this.http.post("https://jsonplaceholder.typicode.com/posts",this.PostData)
    }
    PutAPI()
    {
      return this.http.put("https://jsonplaceholder.typicode.com/posts/1",this.PostData)
    }
    DeleteAPI()
    {
      return this.http.delete("https://jsonplaceholder.typicode.com/posts/1")
    }
}
