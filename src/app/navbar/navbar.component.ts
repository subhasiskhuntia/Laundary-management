import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userEmail:string|null='';
  constructor() { 
    this.userEmail=sessionStorage.getItem("email");
    console.log(this.userEmail);
    
  }
  logout(){
    this.userEmail='';
    sessionStorage.removeItem("email");
  }
  ngOnInit(): void {
  }

}
