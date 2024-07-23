import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashGeralComponent } from './pages/dash-geral/dash-geral.component';

export const routes: Routes = [
    {path: '', component : LoginComponent},
    {path: 'dash-geral', component : DashGeralComponent}
];

