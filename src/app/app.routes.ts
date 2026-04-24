import { Routes } from '@angular/router';
import { ClientePageComponent } from './clientes/pages/cliente-page/cliente-page.component';

export const routes: Routes = [
  {
    path: 'cliente/:codigo',
    component: ClientePageComponent,
    title: 'Cliente',
  },
  {
    path: '**',
    redirectTo: 'cliente/100100555',
  },
];
