import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gameprogress } from '../../../../../core/service/gameProgress/gameprogress';

interface MidiaMes {
  url: string;
  legenda: string;
  tipo: 'foto' | 'video';
}

interface QuizOption {
  texto: string;
  pontos: number;
}

interface QuizPerguntaMes {
  pergunta: string;
  opcoes: QuizOption[];
}

@Component({
  selector: 'app-setembro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setembro.html',
  styleUrl: './setembro.scss',
})
export class Setembro {
  
  // ====== TOPO ======
  tituloMes = 'Mês 1 - Nosso começo';
  textoTopo = 'O primeiro mês em que tudo parecia novidade e ao mesmo tempo tão certo.';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'assets/img/mes/2024-janeiro/IMG-20240127-WA0094.jpg',
    legenda: 'Nosso primeiro registro especial.',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://drive.proton.me/u/0/liPn_V3eLXOkDijJWy529Otv65DolT2VZQltb2ZNQZIZoPmcvhIeFOm1gU04cVtRgYfhje9U8ph--rYCgUGtNA==/file/rWxsK0qsaHBaBgby-XjQGdevOp8cN_KQpH7-Kovkes1RypTpqTzhWMkmChhQNxkgCB1CmE888tzKzbWBmZffXA==',
      legenda: 'Foto 1 do mês 1',
      tipo: 'foto'
    },
    {
      url: 'https://res.cloudinary.com/dhehoubf2/video/upload/v1773942219/VID-20240324-WA0093_flohi9.mp4',
      legenda: 'Nosso momento engraçado 😂',
      tipo: 'video'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-abril/IMG-20240428-WA0114.jpg',
      legenda: 'Foto 3 do mês 1',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Onde foi o nosso primeiro encontro?',
    opcoes: [
      { texto: 'Na frente da escola', pontos: -10 },
      { texto: 'No shopping', pontos: 20 },
      { texto: 'Na praça', pontos: 30 },
      { texto: 'Na parada de ônibus', pontos: 40 },
      { texto: 'Na sua casa', pontos: 50 }
    ]
  };

  quizRespondido = false;
  opcaoSelecionadaIndex: number | null = null;
  quizFeedback = '';

  // pontos SOMENTE desse mês
  pontosDesteMes = 0;

  constructor(
    private gameProgress: Gameprogress,
    private router: Router
  ) {}

  responderQuiz(index: number): void {
    if (this.quizRespondido) {
      return;
    }

    this.opcaoSelecionadaIndex = index;
    const opcao = this.quiz.opcoes[index];

    this.pontosDesteMes = opcao.pontos;
    this.quizRespondido = true;

    this.quizFeedback =
      `Você escolheu: "${opcao.texto}" e ganhou +${opcao.pontos} pontos neste mês 💜`;
  }

  irParaProximoMes(): void {
    if (!this.quizRespondido) {
      this.quizFeedback = 'Responde primeiro, amor 💜';
      return;
    }

    this.gameProgress.addPontos(this.pontosDesteMes);

    this.router.navigate(['page/interno/home']);
  }

  voltarHome(): void {
    this.router.navigate(['page/interno/home']);
  }

  // ====== MODAL IMAGEM ======

  imagemAberta: string | null = null;

  abrirImagem(url: string) {
    this.imagemAberta = url;
  }

  fecharImagem() {
    this.imagemAberta = null;
  }
}
