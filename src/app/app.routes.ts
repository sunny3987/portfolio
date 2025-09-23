import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Work } from './work/work';
import { Contact } from './contact/contact';


export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'home', component: Home },
  { path: '', component: Home },
  { path: 'work', component: Work },
  { path: '', redirectTo: 'home', pathMatch: 'full' } // default route
];

