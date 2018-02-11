import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {products} from "../../products";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{
  pid: string;
  subscription: Subscription
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   this.subscription = this.route.params.subscribe(
     (params: Params) => {
       this.pid = params['pid'];
       let flag = products.find(
         value => {
           if(value === this.pid) {
             return true
           }
         }
       );
       if(!flag) {
         this.router.navigate(['/not-found']);
       }
     }
   );
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
