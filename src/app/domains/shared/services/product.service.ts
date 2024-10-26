import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products/category';

  constructor() {}

  getProduct() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getOne(id: string) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
