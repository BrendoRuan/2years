import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gameprogress } from '../../../core/service/gameProgress/gameprogress';

interface Slide {
  titulo: string;
  descricao: string;
  url: string;
  tipo: 'foto' | 'video';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  isLoading = true;
  progress = 0;
  loadingMessage = 'Carregando nossos momentos...';

slides: Slide[] = [
  {
    titulo: 'Nosso Início',
    descricao: 'O dia em que tudo começou 💜',
    url: 'assets/img/mes/2024-janeiro/IMG-20240127-WA0094.jpg',
    tipo: 'foto'
  },
  {
    titulo: 'Primeiro Encontro',
    descricao: 'Olha esse momento kkkkk 😂',
    url: 'assets/img/mes/2024-janeiro/VID-20240125-WA0086.mp4',
    tipo: 'video'
  },
  {
    titulo: 'Dois Anos de Nós',
    descricao: 'Dois anos de história ❤️',
    url: 'assets/img/momentos/dois-anos.jpg',
    tipo: 'foto'
  }
];
  slideAtual = 0;

  pontosNecessarios = 50;
  pontosUsuario = 0;

  constructor(
    private gameProgress: Gameprogress,
    private router: Router
  ) {}
intervalo: any;
midiaAberta: any = null;

ngOnInit(): void {
  this.simularCarregamento();
  this.pontosUsuario = this.gameProgress.pontosTotal;

  this.iniciarCarrossel(); // 🔥 inicia automático
}

ngAfterViewChecked(): void {
  const atual = this.gameProgress.pontosTotal;
  if (atual !== this.pontosUsuario) {
    this.pontosUsuario = atual;
  }
}

get surpresaLiberada(): boolean {
  return this.pontosUsuario >= this.pontosNecessarios;
}

/* ===== LOADING ===== */
private simularCarregamento(): void {
  const interval = setInterval(() => {
    this.progress += 2;
    if (this.progress >= 100) {
      this.progress = 100;
      clearInterval(interval);
      this.isLoading = false;
    }
  }, 40);
}

/* ===== CARROSSEL ===== */

iniciarCarrossel() {
  this.intervalo = setInterval(() => {
    this.slideAtual = (this.slideAtual + 1) % this.slides.length;
  }, 4000);
}

pararCarrossel() {
  clearInterval(this.intervalo);
}

proximoSlide(): void {
  this.pararCarrossel();
  this.slideAtual = (this.slideAtual + 1) % this.slides.length;
  this.iniciarCarrossel();
}

slideAnterior(): void {
  this.pararCarrossel();
  this.slideAtual =
    (this.slideAtual - 1 + this.slides.length) % this.slides.length;
  this.iniciarCarrossel();
}

irParaSlide(index: number): void {
  this.pararCarrossel();
  this.slideAtual = index;
  this.iniciarCarrossel();
}

/* ===== NAVEGAÇÃO ===== */

abrirTrajetoriaPrimeiroMes(): void {
  this.router.navigate(['page/interno/trajetoria']);
}

/* ===== FULLSCREEN ===== */

abrirMidia(midia: any) {
  this.pararCarrossel(); // 🔥 pausa quando abre
  this.midiaAberta = midia;
  document.body.style.overflow = 'hidden';
}

fecharMidia() {
  this.midiaAberta = null;
  document.body.style.overflow = 'auto';

  this.iniciarCarrossel(); // 🔥 volta quando fecha
}
irParaGaleria() {
  this.router.navigate(['page/interno/galeria']);
}
irParaTextos() {
  this.router.navigate(['page/interno/textos']);
}
irParaSurpresa() {
  this.router.navigate(['page/surpresa']);
}
}