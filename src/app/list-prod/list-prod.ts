import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-prod',
  imports: [CurrencyPipe],
  templateUrl: './list-prod.html',
  styleUrl: './list-prod.css',
})
export class ListProd {
  listaProductos = [
    { id: 1, nombre: 'Laptop Gamer ASUS', categoria: 'Laptops', precio: 3499.00, stock: 8 },
    { id: 2, nombre: 'Monitor Curvo 27"', categoria: 'Monitores', precio: 899.90, stock: 15 },
    { id: 3, nombre: 'Teclado Mecánico RGB', categoria: 'Accesorios', precio: 249.00, stock: 22 },
    { id: 4, nombre: 'Mouse Inalámbrico Ergonómico', categoria: 'Accesorios', precio: 120.00, stock: 5 },
    { id: 5, nombre: 'Disco Duro Sólido 1TB M.2', categoria: 'Componentes', precio: 310.50, stock: 12 }
  ];
}

