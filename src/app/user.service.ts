import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  
  loginUser(email:string,password:string):Observable<string>{
    return this.http.post("http://localhost:8081/user/login",{"email":email,"password":password},{responseType:"text"});
  }
  signInUser(email:string,password:string,fullName:string,phoneNumber:string):Observable<string>{
    return this.http.post("http://localhost:8081/user/signIn",{"fullName":fullName,"email":email,"mobileNumber":phoneNumber,"password":password},{responseType:"text"});
  }
  getUserDetails():Observable<User>{
    return this.http.post<User>("http://localhost:8081/user/getUserDetails",{"email":sessionStorage.getItem("email")})
  }
  changeUserDetails(user:User):Observable<string>{
    return this.http.put("http://localhost:8081/user/changeUserDetails",user,{responseType:"text"});
  }
  changePassword(oldPassword:string,newPassword:string):Observable<string>{
    return this.http.post("http://localhost:8081/user/changePassword",{"oldPassword":oldPassword,"newPassword":newPassword,"email":sessionStorage.getItem("email")},{responseType:"text"})
  }
}
