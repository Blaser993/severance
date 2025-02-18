import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/views/home/home.component';
import { AboutComponent } from './app/views/about/about.component';

const routes = [
  { path: '', component: HomeComponent }, // Homepage
  { path: 'about', component: AboutComponent }, // Pagina About
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
