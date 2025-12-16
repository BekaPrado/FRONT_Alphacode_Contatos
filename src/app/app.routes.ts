import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ContatoLista } from './components/contato-lista/contato-lista';
import { ContatoForm } from './components/contato-form/contato-form';

export const routes: Routes = [
  //inicial
  { path: '', component: Home },
  // lista
  { path: '', redirectTo: '/contatos', pathMatch: 'full' },
  { path: 'contatos', component: ContatoLista },
  // novo
  { path: 'contatos/novo', component: ContatoForm },
  //editar
  { path: 'contatos/editar/:id', component: ContatoForm }
];