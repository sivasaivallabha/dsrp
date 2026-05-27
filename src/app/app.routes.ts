import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Alumni } from './components/alumni/alumni';
import { Gallery } from './components/gallery/gallery';
import {Footer} from './components/footer/footer';  
export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'alumni',
    component: Alumni
  },

  {
    path: 'gallery',
    component: Gallery
  },
   {
    path: 'footer',
    component: Footer
  },

  {
    path: '**',
    redirectTo: ''
  }

];