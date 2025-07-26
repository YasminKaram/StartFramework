import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
   {
       path: '',
       component: Home
   },
   {
       path: 'contact',
       component: Contact
    },
    {
        path: 'portfolio',
        component: Portfolio
    },
    {
        path: 'about',
        component: About
    },

      {
       path: '**',
       component: Home
   }
       
];
