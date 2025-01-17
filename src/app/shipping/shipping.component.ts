import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
