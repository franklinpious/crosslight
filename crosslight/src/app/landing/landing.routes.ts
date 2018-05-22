/**
 * Landing pages router.
**/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';

export const LANDING_ROUTES: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            { path: 'login', component: LoginComponent, data: { title: 'Crosslight: Login' } },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    }
];

export const LandingRouting: ModuleWithProviders = RouterModule.forChild(LANDING_ROUTES);
