import { Routes } from '@angular/router';
import { Login } from './page/externo/login/login';
import { Home } from './page/interno/home/home';
import { Trajetoria } from './page/interno/trilha/2024/trajetoria/trajetoria';
import { Galeria } from './page/interno/galeria/galeria';
import { Textos } from './page/interno/textos/textos';
import { Abril } from './page/interno/trilha/2024/abril/abril';
import { Setembro } from './page/interno/trilha/2024/setembro/setembro';
import { Dezembro } from './page/interno/trilha/2024/dezembro/dezembro';
import { Surpresa } from './page/surpresa/surpresa/surpresa';


export const routes: Routes = [
    { path: '', redirectTo: 'externo/login', pathMatch: 'full' },
    {path:'externo/login', component:Login},
    {path:'page/surpresa', component: Surpresa},
    {path:'page/interno/home', component:Home},
    {path:'page/interno/trajetoria', component:Trajetoria},
    {path:'page/interno/galeria', component:Galeria},
    {path:'page/interno/textos', component:Textos},
    {path:'page/interno/trilha/2024/abril', component: Abril},
    {path:'page/interno/trilha/2024/setembro', component: Setembro},
    {path:'page/interno/trilha/2024/dezembro', component: Dezembro}

];
