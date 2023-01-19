import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  signInForm=new FormGroup({
    fullName:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    phoneNumber:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
  })
  ngOnInit(): void {
  }
  signin(){
    
    let signInRef=this.signInForm.value;
    this.userService.signInUser(signInRef.email,signInRef.password,signInRef.fullName,signInRef.phoneNumber).subscribe(data=>{
      if(data!=null){
        console.log(data);
        this.router.navigate(["/login"]);
      }
      else{
        alert("unable sign in try again");
        
      }
    },
    error=>alert("1. email may be already in use \n2. use password must be atleast 8 character long \n3. password must contain atleast one small letter, one capital letter,one special character and one number"),
    ()=>console.log("signin completed")
    
    )
  }

}
