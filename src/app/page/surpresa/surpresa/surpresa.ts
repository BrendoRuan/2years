import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { MusicService } from '../../../core/service/music';

@Component({
  selector: 'app-surpresa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surpresa.html',
  styleUrl: './surpresa.scss',
})
export class Surpresa {


  
  @ViewChild('audioPlayer') audioRef!: ElementRef<HTMLAudioElement>;

ngAfterViewInit() {
   this.musicService.pararOutrasMusicas();
  setTimeout(() => {
    this.tocarMusica();
  }, 500);
}

tocarMusica() {
  const audio = this.audioRef.nativeElement;

  audio.play().then(() => {
    this.fadeInAudio(audio);
  }).catch(() => {
    // fallback mobile
    document.addEventListener('click', () => {
      audio.play().then(() => this.fadeInAudio(audio));
    }, { once: true });
  });
}

fadeInAudio(audio: HTMLAudioElement) {
  let volume = 0;
  audio.volume = volume;

  const interval = setInterval(() => {
    volume += 0.05;

    if (volume >= 0.3) {
      volume = 0.3;
      clearInterval(interval);
    }

    audio.volume = volume;
  }, 200);
}

  slides = [
  { tipo: 'foto', url: 'assets/img/mes/2024-janeiro/IMG-20240127-WA0094.jpg' },
  { tipo: 'foto', url: 'assets/img/mes/2024-janeiro/IMG-20240127-WA0094.jpg' },
  { tipo: 'video', url: 'assets/img/mes/2024-janeiro/VID-20240125-WA0086.mp4' }
];

index = 0;
slideAtual = this.slides[0];

mostrarTextoFinal = false;
mostrarPedido = false;
aceitouPedido = false;

textos = [
  "Tudo começou sem a gente perceber...",
  "Mas cada momento com você virou especial...",
  "E hoje eu tenho certeza de uma coisa..."
];

textoAtual = '';
textoIndex = 0;

ngOnInit() {
  this.iniciarSlides();
}

iniciarSlides() {
  setInterval(() => {
    this.index++;

    if (this.index < this.slides.length) {
      this.slideAtual = this.slides[this.index];
    } else {
      this.iniciarTextoFinal();
    }
  }, 5000);
}

iniciarTextoFinal() {
  this.mostrarTextoFinal = true;

  const intervalo = setInterval(() => {
    this.textoAtual = this.textos[this.textoIndex];
    this.textoIndex++;

    if (this.textoIndex >= this.textos.length) {
      clearInterval(intervalo);

      setTimeout(() => {
        this.mostrarPedido = true;
      }, 2000);
    }
  }, 3000);
}

constructor(
  private router: Router,
  private musicService: MusicService
) {}

saindo = false;

finalizarSurpresa() {
    const audio = this.audioRef.nativeElement;

  audio.pause();
  audio.currentTime = 0;

  this.saindo = true;

  setTimeout(() => {
    this.router.navigate(['page/interno/home']);
    this.musicService.play();
  }, 5000); // tempo da animação
}

aceitou() {
  this.aceitouPedido = true;

  // vibração
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  // confete simples
  this.soltarConfete();

    // tempo para ela ver a mensagem
  setTimeout(() => {
    this.finalizarSurpresa();
  }, 5000); // 🔥 5 segundos (pode ajustar)
}

fugirBotao() {
  const btn = document.querySelector('.btn-nao') as HTMLElement;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  btn.style.transform = `translate(${x}px, ${y}px)`;
}

soltarConfete() {
  console.log("🎉 confete!");
}
}
