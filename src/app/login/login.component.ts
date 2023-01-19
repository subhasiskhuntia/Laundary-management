import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
loginUser(loginForm:NgForm){
  
  let email=loginForm.value.email;
  let password=loginForm.value.password;

  this.userService.loginUser(email,password).subscribe(data=>{
    console.log(data);
    
    if(data!=null && data!=""){
      let userEmail=JSON.parse(data).email;
      sessionStorage.setItem("email",userEmail);
      window.location.href="/";
    }
    else{
      alert("Invalid credentials");
      sessionStorage.setItem("email","");
    }
  },error=>console.log(error),
  ()=>console.log("process completed")
  
  )
  

}
}
