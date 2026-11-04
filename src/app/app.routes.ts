import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { ListProd } from './list-prod/list-prod';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
    { path: '', component: Inicio, title:'Componente Inicio' },
    { path: 'Inicio', component: Inicio, title:'Componente Inicio' },
    { path: 'prods', component: ListProd, title:'Listado de productos' },
    { path: '**', component: NoEncontrado, title:'Recurso no encontrado' }
];