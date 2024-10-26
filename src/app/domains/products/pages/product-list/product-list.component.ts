// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
    import { ProductService } from './../../../shared/services/product.service';';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  category: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductService,
  ) {}

  ngOnInit(): void {
    // Leer la categoría desde la URL
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      if (this.category) {
        this.fetchProducts(this.category);
      }
    });
  }

  fetchProducts(category: string) {
    this.productoService.getProductsByCategory(category).subscribe((data) => {
      this.products = data;
    });
  }
}
