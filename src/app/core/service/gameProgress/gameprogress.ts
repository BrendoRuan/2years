import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Gameprogress {
   private _pontosTotal = 0;

  get pontosTotal(): number {
    return this._pontosTotal;
  }

  addPontos(pontos: number): void {
    this._pontosTotal += pontos;
  }

  reset(): void {
    this._pontosTotal = 0;
  }
}
