import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './products/page/components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
