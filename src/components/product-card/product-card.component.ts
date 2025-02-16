import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() price: number = 0;
  @Input() imageUrl: string = "";  // <-- Nuevo input
  @Input() stock: number = 0;       // <-- Otro input
}