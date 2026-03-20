import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Texto {
  titulo: string;
  conteudo: string;
}

@Component({
  selector: 'app-textos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textos.html',
  styleUrl: './textos.scss',
})
export class Textos {

  textos: Texto[] = [
    {
      titulo: 'Nosso primeiro mês',
      conteudo: `Eu ainda lembro de cada detalhe...
      Foi tudo tão leve, tão natural.
      Como se o mundo tivesse decidido parar só pra gente viver aquilo. 💜`
    },
    {
      titulo: 'Quando percebi que te amava',
      conteudo: `Não foi em um momento específico...
      Foi nos pequenos detalhes.
      No jeito que você sorria,
      no jeito que me fazia sentir em casa.`
    }
  ];

  textoAberto: any = null;

  constructor(private router: Router) {}

  abrirTexto(texto: any) {
    this.textoAberto = texto;
    document.body.style.overflow = 'hidden';
  }

  fecharTexto() {
    this.textoAberto = null;
    document.body.style.overflow = 'auto';
  }

  voltarHome() {
    this.router.navigate(['page/interno/home']);
  }
}
