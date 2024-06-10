import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'login', component: LoginComponent},
];
