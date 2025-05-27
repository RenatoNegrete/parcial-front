import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ShowComponent } from './componentes/show/show.component';
import { CreateComponent } from './componentes/create/create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'show', component: ShowComponent},
    { path: 'create', component: CreateComponent},
];
