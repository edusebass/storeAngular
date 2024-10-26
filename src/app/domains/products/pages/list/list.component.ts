import { Component, computed, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Object>({});
  categoriesArray = computed(() => Object.values(this.categories()));
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.productService.getProduct().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.categoryService.getAll().subscribe({
      next: (categories) => {
        console.log(categories);
        this.categories.set(categories);
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.productService.getProductsByCategory('jewelery').subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(event: Product) {
    this.cartService.addToCart(event);
  }

  categoriesFinal = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  categoriesFinalFunction() {
    return this.categoriesFinal;
  }
}
