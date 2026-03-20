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
  selector: 'app-janeiro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './janeiro.html',
  styleUrl: './janeiro.scss',
})
export class Janeiro1 {
   getValorPositivo(valor: number): number {
  return Math.abs(valor);
}
  // ====== TOPO ======
  tituloMes = 'Início de 2025 com muito Love...';
  textoTopo = 'O início de 2025 foi ótimo, pendencias em sua grande maioria resolvidos, mais íntimos, mais love, mais carinhos, mais beijos, mais brigas... Enfim foi tudo mais kkkk...';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2025/2025-janeiro/IMG_0598.HEIC?updatedAt=1773967579050',
    legenda: 'Marra, Estilo e Muito Love',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-janeiro/IMG_0470.HEIC?updatedAt=1773967572161',
      legenda: 'Primeiro Culto Jovem do Ano',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-janeiro/89B345BD-D315-4E46-B156-ADE0A7AE9362.jpg?updatedAt=1773967551657',
      legenda: 'Primeiro rolê no shopping do ano',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-janeiro/51B1FA01-92E2-4F66-8D3B-77D262CEECBA.jpg?updatedAt=1773967556583',
      legenda: 'depois desse iphone meu cell so viveu cheios de fotão...',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-fevereiro/IMG_0961.JPG?updatedAt=1773967673140',
      legenda: 'Primeira ida ao Templo Central do ano',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-fevereiro/IMG_0961.JPG?updatedAt=1773967673140',
      legenda: 'Muito Linda de toquinhaaaaaaaaaaa!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-marco/IMG_1297.JPG?updatedAt=1773967629977',
      legenda: 'niver do meu Amorrrrrrrr',
      tipo: 'foto'
    },
     {
      url: 'https://ik.imagekit.io/2Years/2025/2025-marco/IMG-20240817-WA0169.jpeg?updatedAt=1773967583759',
      legenda: 'umas das nossas melhores fotos',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Com quantos anos nos conhecmos ?',
    opcoes: [
      { texto: '15 e 19', pontos: 5 },
      { texto: '16 e 19', pontos: -5 },
      { texto: '16 e 20', pontos: -5 },
      { texto: '17 e 20', pontos: -5 },
      { texto: '16 e 18', pontos: -5 }
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

    this.router.navigate(['page/interno/trilha/2025/abril']);
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
