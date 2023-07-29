import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const Material = [MatCardModule, MatButtonModule];

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ...Material],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  date = Date.now();
}
