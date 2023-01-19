import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  todaysDate!: string;
  constructor(private orderService: OrdersService) { }
  placeOrderRef = new FormGroup({
    "topWear": new FormControl(0),
    "bottomWear": new FormControl(0),
    "woolenCloth": new FormControl(0),
    "others": new FormControl(0),
    "contactPerson": new FormControl("", Validators.required),
    "description": new FormControl(""),
    "pickupDate": new FormControl("", Validators.required)
  })

  ngOnInit(): void {
    this.todaysDate = new Date().toISOString().slice(0, 10);
  }
  placeOrder() {
    let value = this.placeOrderRef.value;
    console.log(value);
    if (value.topWear + value.bottomWear + value.woolenCloth + value.others === 0) {
      alert("At least one of the topwear/bottomwear/woolencloth/others must be greater than zero");
    }
    else if (sessionStorage.getItem('email') == '' || sessionStorage.getItem('email') == null) {
      alert("Login First");
    }
    else {
      this.orderService.placeOrder(
        value.topWear,
        value.bottomWear,
        value.woolenCloth,
        value.others,
        value.contactPerson,
        value.description,
        value.pickupDate
      ).subscribe(data => {
        console.log(data);
        alert("order placed successfully");

      }, error => console.log(error),
        () => {
          console.log("order placed");
          this.placeOrderRef.reset();
        }

      )
    }
  }

}
