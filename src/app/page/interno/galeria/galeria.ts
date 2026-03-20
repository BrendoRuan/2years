import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Midia {
  url: string;
  legenda: string;
  tipo: 'foto' | 'video';
}


@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {


  midias: Midia[] = [
    {
      url: 'assets/img/mes/2024-janeiro/IMG-20240127-WA0094.jpg',
      legenda: 'Nosso começo 💜',
      tipo: 'foto'
    },
    {
      url: 'assets/img/momentos/video1.mp4',
      legenda: 'Esse dia foi perfeito 😂',
      tipo: 'video'
    },
    {
      url: 'assets/img/momentos/dois-anos.jpg',
      legenda: 'Dois anos juntos ❤️',
      tipo: 'foto'
    }
  ];

  midiaAberta: any = null;

  constructor(private router: Router) {}

  abrirMidia(midia: any) {
    this.midiaAberta = midia;
    document.body.style.overflow = 'hidden';
  }

  fecharMidia() {
    this.midiaAberta = null;
    document.body.style.overflow = 'auto';
  }

  voltarHome() {
    this.router.navigate(['page/interno/home']);
  }
}
