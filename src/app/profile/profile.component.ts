import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  email: any = sessionStorage.getItem('email');
  disabled: boolean = true;
  fullName: string = '';
  mobileNumber: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  typedPassword = '';
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('email') != null) {
      this.loadUser();
    } else {
      this.router.navigate(['/login']);
    }
  }
  loadUser() {
    // console.log(this.username);

    this.userService.getUserDetails().subscribe((result) => {
      this.user = result;
      this.fullName = this.user.fullName;
      this.mobileNumber = this.user.mobileNumber;
    });
  }
  logout() {
    sessionStorage.removeItem('email');
    window.location.href="/";
  }
  editProfile() {
    this.disabled = false;
  }
  submitChanges() {
    // this.disabled = true;
  }
  changeUserDetails() {
    console.log(this.user);
    let user: User = new User(
      this.fullName,
      this.user.email,
      this.mobileNumber,
      this.typedPassword
    );
    this.userService.changeUserDetails(user).subscribe(
      (result) => console.log(result),
      (error) => console.log(error),
      () => {
        this.loadUser();
        this.typedPassword = '';
        this.disabled=true;
        document.getElementById("closeUserDetailsChanger")!.click();
      }
    );
  }
  changePassword() {
    this.userService
      .changePassword(this.oldPassword, this.newPassword)
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error),
        () => {
          this.oldPassword = '';
          this.newPassword = '';
          document.getElementById("closePasswordChanger")!.click();
        }
      );
  }
}
