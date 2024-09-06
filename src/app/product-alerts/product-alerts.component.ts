import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../product'; 
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
