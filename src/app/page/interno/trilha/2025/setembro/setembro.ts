import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Gameprogress } from "../../../../../core/service/gameProgress/gameprogress";

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

     getValorPositivo(valor: number): number {
  return Math.abs(valor);
}
  // ====== TOPO ======
  tituloMes = 'O Início do Amor Verdadeiro...';
  textoTopo = 'A cada dia que passava... Eu percebia mais e mais que eu tinha encontrado a minha pessoa, a minha melhor amiga, a minha parceira, a minha companheira, a minha namorada, a minha love, a minha vida... E que eu queria passar o resto da minha vida ao lado dela... E que eu faria de tudo pra ser feliz ao lado dela... E que eu faria de tudo pra fazer ela feliz... E que eu faria de tudo pra cuidar dela... E que eu faria de tudo pra proteger ela... E que eu faria de tudo pra amar ela... E que eu faria de tudo pra ser amado por ela... Enfim... Eu só queria viver um amor recíproco e verdadeiro com ela, e foi isso que encontrei!!';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2025/2025-setembro/IMG_4301.JPG?updatedAt=1773967662052',
    legenda: 'Nem nega que é gamada no neguinho bom aqui!!',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-setembro/IMG_4048.JPG?updatedAt=1773967646410',
      legenda: 'Miinha tia das crianças!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-setembro/IMG_4023.JPG?updatedAt=1773967632741',
      legenda: 'Um amor por essa foto',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-agosto/IMG_3258.JPG?updatedAt=1773967665536',
      legenda: 'Minha Princesa...',
      tipo: 'foto'
    }, {
      url: 'https://ik.imagekit.io/2Years/2025/2025-agosto/IMG_3185.JPG?updatedAt=1773967655860',
      legenda: 'Eu e minha varoa serviremos ao Senhor!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-julho/IMG_2993.JPG?updatedAt=1773967563685',
      legenda: 'Meu dodói ',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-julho/IMG_2876.JPG?updatedAt=1773967590354',
      legenda: 'Já estou vendo nossa casa com 3 criancas correndo por ai',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Quantos Filhos decidimos ter ?',
    opcoes: [
      { texto: '1', pontos: -5 },
      { texto: '2', pontos: 5 },
      { texto: '3', pontos: 5 },
      { texto: '4', pontos: -5 },
      { texto: '5', pontos: -5 }
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

    this.router.navigate(['page/interno/trilha/2025/dezembro']);
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
