import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicPlayer } from "./page/music/music";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicPlayer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'presenteNamoro';
}
