import { Component, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        img: 'https://picsum.photos/100/100?r=2',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }
  fromChild(event: string) {
    console.log(event);
    console.log('des list compnent');
  }
}
