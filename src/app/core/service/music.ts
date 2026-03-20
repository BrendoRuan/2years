import { Injectable } from '@angular/core';

interface Musica {
  nome: string;
  arquivo: string;
  capa: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private audio = new Audio();

  playlist: Musica[] = [
    {
      nome: 'De Janeiro A Janeiro - Roberta Campos, Nando Reis',
      arquivo: 'assets/music/(LETRA) De Janeiro A Janeiro - Roberta Campos, Nando Reis - TUDO LEGENDADO (youtube).mp3',
      capa: 'assets/music/capa/DeJaneiroAJaneiro.jpg'
    },
    {
      nome: 'Aliança - Tribalistas',
      arquivo: 'assets/music/Aliança - Tribalistas (lyric video) - MARISAMONTE (youtube).mp3',
      capa: 'assets/music/capa/aliança.jpg'
    },
    {
      nome: 'Just The Way You Are - Bruno Mars',
      arquivo: 'assets/music/Bruno Mars - Just The Way You Are (Lyrics) - Dan Music (youtube).mp3',
      capa: 'assets/music/capa/JustTheWayYouAre.jpg'
    },
    {
      nome: 'When I Was Your Man - Bruno Mars',
      arquivo: 'assets/music/Bruno Mars - When I Was Your Man - LatinHype (youtube).mp3',
      capa: 'assets/music/capa/WhenIWasYourMan.jpg'
    },
    {
      nome: 'A Thousand Years - Christina Perri',
      arquivo: 'assets/music/Christina Perri - A Thousand Years - LatinHype (youtube).mp3',
      capa: 'assets/music/capa/AThousandYears.jpg'
    },
    {
      nome: 'Amor Puro - Djavan',
      arquivo: 'assets/music/DJAVAN - Amor Puro (Com letra) - Músicas de A a Z (youtube).mp3',
      capa: 'assets/music/capa/Perfect.jpg'
    },
    {
      nome: 'Perfect - Ed Sheeran',
      arquivo: 'assets/music/Ed Sheeran - Perfect - LatinHype (youtube).mp3',
      capa: 'assets/music/capa/Perfect.jpg'
    },
    {
      nome: 'Those Eyes - New West',
      arquivo: 'assets/music/New West - Those Eyes (Lyrics) - Dan Music (youtube).mp3',
      capa: 'assets/music/capa/thoseEyes.jpg'
    },
    {
      nome: 'P.S. I LOVE YOU - Paul Partohap feat. YUNA',
      arquivo: 'assets/music/Paul Partohap - P.S. I LOVE YOU feat. YUNA (Lyric Video) - paul partohap (youtube).mp3',
      capa: 'assets/music/capa/p.s.ILoveYou.jpg'
    },
    {
      nome: 'Sonho - KHORUS',
      arquivo: 'assets/music/Sonho - KHORUS - Bruno Duarte (youtube).mp3',
      capa: 'assets/music/capa/sonho.jpeg'
    },
    {
      nome: 'Until I Found You - Stephen Sanchez',
      arquivo: 'assets/music/Stephen Sanchez - Until I Found You (Official Video) - StephenSanchezVEVO (youtube).mp3',
      capa: 'assets/music/capa/UntilIFoundYou.jpg'
    }
  ];

  index = 0;

  progresso = 0;
  tempoAtual = 0;
  duracao = 0;

  constructor() {

    this.carregarMusica();

    this.audio.ontimeupdate = () => {

      this.tempoAtual = this.audio.currentTime;
      this.duracao = this.audio.duration;

      this.progresso =
        (this.audio.currentTime / this.audio.duration) * 100;
    };

    this.audio.onended = () => {
      this.proxima();
    };
  }

  private carregarMusica() {
    this.audio.src = this.playlist[this.index].arquivo;
  }

  get musicaAtual() {
    return this.playlist[this.index];
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  toggle() {
    this.audio.paused ? this.play() : this.pause();
  }

  proxima() {

    this.index = (this.index + 1) % this.playlist.length;

    this.carregarMusica();

    this.play();
  }

  anterior() {

    this.index =
      (this.index - 1 + this.playlist.length) % this.playlist.length;

    this.carregarMusica();

    this.play();
  }

  setVolume(valor: number) {
    this.audio.volume = valor;
  }

  seek(valor: number) {

    if (this.audio.duration) {

      this.audio.currentTime =
        (valor / 100) * this.audio.duration;

    }
  }

  isPlaying() {
    return !this.audio.paused;
  }

  formatarTempo(segundos: number) {

    if (!segundos) return "0:00";

    const min = Math.floor(segundos / 60);
    const sec = Math.floor(segundos % 60);

    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  pararOutrasMusicas() {
  const audios = document.querySelectorAll('audio');

  audios.forEach((audio: any) => {
    if (!audio.hasAttribute('data-surpresa')) {
      audio.pause();
    }
  audio.currentTime = 0;
  });
}

}