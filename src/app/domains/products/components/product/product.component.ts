import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // img = 'https://picsum.photos/340/340?r=' + Math.random();

  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click from child');
    this.addToCart.emit(
      // 'holi esto es un mdg desde el hijo pi.assaasasd' + this.title,
      this.product,
    );
  }
}
