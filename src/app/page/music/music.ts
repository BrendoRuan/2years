import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from '../../core/service/music';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrl: './music.scss'
})
export class MusicPlayer {

  minimizado = false;
  playlistAberta = false;

  constructor(public music: MusicService) {}


toggleMinimizar() {
  this.minimizado = !this.minimizado;

  // Fecha playlist automaticamente quando minimiza o player
  if (this.minimizado) {
    this.playlistAberta = false;
  }
}

togglePlaylist() {
  this.playlistAberta = !this.playlistAberta;

  // No mobile, se o player estiver minimizado, abre o player ao abrir playlist
  if (this.playlistAberta && this.minimizado) {
    this.minimizado = false;
  }
}

  tocarMusica(index: number) {

    this.music.index = index;

    this.music['audio'].src =
      this.music.playlist[index].arquivo;

    this.music.play();

  }

}