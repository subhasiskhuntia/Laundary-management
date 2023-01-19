import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private orderService:OrdersService) {
    this.loadAllOrder();
   }
  requested:number=0;
  accepted:number=0;
  inProgress:number=0;
  finished:number=0;

  ngOnInit(): void {
  }
  loadAllOrder(){
    this.orderService.loadOrders().subscribe(data=>{
      data.forEach(a=>{
        if(a.orderStatus==0)
          this.requested++;
        if(a.orderStatus==1)
          this.accepted++;
        if(a.orderStatus==2)
          this.inProgress++;
        if(a.orderStatus==3)
          this.finished++;
      })
      // console.log(this.requested);
      // console.log(this.accepted);
      // console.log(this.inProgress);
      // console.log(this.finished);
      
    })
  }

}
