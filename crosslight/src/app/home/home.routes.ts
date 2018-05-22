import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserListComponent } from './user-list/user-list.component';

export const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'user_list', component: UserListComponent, data: { title: 'Crosslight: User List' } },
            { path: '', redirectTo: 'user_list', pathMatch: 'full' }
        ]
    }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(HOME_ROUTES);
