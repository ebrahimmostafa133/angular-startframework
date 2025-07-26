import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Portfolio } from './components/portfolio/portfolio';
export const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: Home ,title: 'Home'},
      { path: 'about', component: About ,title: 'About'},
      { path: 'contact', component: Contact ,title: 'Contact'},
      { path: 'portfolio', component: Portfolio ,title: 'Portfolio'},
      { path: '**', component: PageNotFound ,title: 'Page Not Found'}
];
