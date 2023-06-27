import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { User } from "./User";

@Injectable()
export class UserService{

uri:string="http://localhost:3000/api/user";

constructor(private http: HttpClient){}

postUser(uname: string, upass: string):Observable<string> {
  return this.http.post<string>(this.uri, {"username":uname, "upass": upass});
}
 

getUser(data: string):Observable<User[]>{
    return this.http.get<User[]>(this.uri+data);
}

    
}