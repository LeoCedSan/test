import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { products } from './interface/products';


// Importar el tipo 'products'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fruta: products = ['manzana', 'pera', 'naranja'];
}
