import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  orders: Orders[] = [];
  orderStatus: string | null = null;
  constructor(private orderService: OrdersService, private route: ActivatedRoute) {
    if (sessionStorage.getItem("email") == '' || sessionStorage.getItem("email") == null) {
      alert("Login First to see your order history");
    }
    else {
      this.route.paramMap.subscribe(paramMap => {
        this.orders=[];
        this.orderStatus=null;
        this.orderStatus = paramMap.get('orderStatus');
        console.log(this.orderStatus);
        if (this.orderStatus == "" || this.orderStatus == null) {
          console.log("it should come when status is null or empty");
          
          this.loadOrders();
        }
        else {
          this.loadOrdersWithOrderStatus();
        }
      })
    }
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(paramMap => {
    //   this.orders=[];
    //   this.orderStatus=null;
    //   this.orderStatus = paramMap.get('orderStatus');
    //   console.log(this.orderStatus);
    //   if (this.orderStatus == "" || this.orderStatus == null) {
    //     console.log("it should come when status is null or empty");
        
    //     this.loadOrders();
    //   }
    //   else {
    //     this.loadOrdersWithOrderStatus();
    //   }
    // })
    
  }
  loadOrders() {
    this.orderService.loadOrders().subscribe(data => {
      // console.log(data,"this is data");
      this.orders = data;
      // console.log(this.orders);

    },
      error => console.log(error),
      () => console.log("load data completed")

    )
  }
  loadOrdersWithOrderStatus() {
    this.orderService.loadOrdersWithOrderStatus(this.orderStatus).subscribe(data => {
      // console.log(data,"this is data");
      this.orders = data;
      // console.log(this.orders);

    },
      error => console.log(error),
      () => console.log("load data with status completed")

    )
  }

}
