import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // img = 'https://picsum.photos/340/340?r=' + Math.random();

  @Input() img: string = '';
  @Input() price: number = 0;
  @Input({ required: true }) title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click from child');
    this.addToCart.emit(
      'holi esto es un mdg desde el hijo pi.assaasasd' + this.title,
    );
  }
}
