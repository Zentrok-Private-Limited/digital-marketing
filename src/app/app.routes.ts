import { Routes } from '@angular/router';
import { HomeComponent } from './user/home';
import { AboutComponent } from './user/about';
import { ServiceComponent } from './user/service';
import { PortfolioComponent } from './user/portfolio';
import { ContactComponent } from './user/contact';
import { ProvideComponent } from './user/provide';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'service', component: ServiceComponent },
     { path: 'portfolio', component: PortfolioComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'provide', component: ProvideComponent },
];
