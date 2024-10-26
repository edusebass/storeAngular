import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() id?: string;

  product = signal<Product | null>(null);
  private productService = inject(ProductService);

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          console.log(product);
          this.product.set(product);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
