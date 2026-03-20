import { Routes } from '@angular/router';
import { Login } from './page/externo/login/login';
import { Home } from './page/interno/home/home';
import { Trajetoria } from './page/interno/trilha/2024/trajetoria/trajetoria';
import { Galeria } from './page/interno/galeria/galeria';
import { Textos } from './page/interno/textos/textos';
import { Surpresa } from './page/surpresa/surpresa/surpresa';
import { Fevereiro } from './page/interno/trilha/2026/fevereiro/fevereiro';
import { Marco } from './page/interno/trilha/2026/marco/marco';
import { Janeiro1 } from './page/interno/trilha/2025/janeiro/janeiro';
import { Janeiro } from './page/interno/trilha/2026/janeiro/janeiro';
import { Abril1 } from './page/interno/trilha/2024/abril/abril';
import { Abril } from './page/interno/trilha/2025/abril/abril';
import { Setembro1 } from './page/interno/trilha/2024/setembro/setembro';
import { Dezembro1 } from './page/interno/trilha/2024/dezembro/dezembro';
import { Dezembro } from './page/interno/trilha/2025/dezembro/dezembro';
import { Setembro } from './page/interno/trilha/2025/setembro/setembro';


export const routes: Routes = [
    { path: '', redirectTo: 'externo/login', pathMatch: 'full' },
    {path:'externo/login', component:Login},
    {path:'page/surpresa', component: Surpresa},
    {path:'page/interno/home', component:Home},
    {path:'page/interno/trajetoria', component:Trajetoria},
    {path:'page/interno/galeria', component:Galeria},
    {path:'page/interno/textos', component:Textos},
    {path:'page/interno/trilha/2024/abril1', component: Abril1},
    {path:'page/interno/trilha/2024/setembro1', component: Setembro1},
    {path:'page/interno/trilha/2024/dezembro1', component: Dezembro1},
    {path: 'page/interno/trilha/2025/dezembro', component: Dezembro},
    {path:'page/interno/trilha/2025/janeiro1', component: Janeiro1},
    {path:'page/interno/trilha/2025/abril', component: Abril},
    {path:'page/interno/trilha/2025/setembro', component: Setembro},
    {path:'page/interno/trilha/2026/janeiro', component: Janeiro},
    {path:'page/interno/trilha/2026/fevereiro', component: Fevereiro},
    {path:'page/interno/trilha/2026/marco', component: Marco}


];
