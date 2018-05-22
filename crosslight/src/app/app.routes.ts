/**
 * Application root module router.
**/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    // lazy loaded modules
    { path: '', loadChildren: './landing/landing.module#LandingModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }

];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
