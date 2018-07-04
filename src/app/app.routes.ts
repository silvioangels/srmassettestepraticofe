import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const ROUTES: Routes = [
    {path : '', component: HomeComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
