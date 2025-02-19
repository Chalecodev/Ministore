import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ApiService } from '../../app/services/api.service';
import { IProduct } from '../../interface/iProduct';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: IProduct[] = [];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((products)=>{
      this.products = products;
    });
  }

}
