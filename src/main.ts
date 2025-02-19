// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { HomeComponent } from './app/views/home/home.component';
// import { AboutComponent } from './app/views/about/about.component';
// import { MacrodatarefinementComponent } from './app/views/macrodatarefinement/macrodatarefinement.component';

// const routes = [
//   { path: '', component: HomeComponent }, // Homepage
//   { path: 'about', component: AboutComponent }, // Pagina About
//   { path: 'mr', component: MacrodatarefinementComponent }, // Pagina About
// ];

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// });

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/views/home/home.component').then((m) => m.HomeComponent),
  }, // Homepage
  {
    path: 'about',
    loadComponent: () =>
      import('./app/views/about/about.component').then((m) => m.AboutComponent),
  }, // Pagina About
  {
    path: 'mr',
    loadComponent: () =>
      import('./app/views/macrodatarefinement/macrodatarefinement.component').then(
        (m) => m.MacrodatarefinementComponent
      ),
  }, // Pagina MacrodataRefinement
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});

