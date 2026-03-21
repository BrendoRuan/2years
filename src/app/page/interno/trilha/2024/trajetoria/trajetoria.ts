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
  selector: 'app-trajetoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trajetoria.html',
  styleUrl: './trajetoria.scss',
})
export class Trajetoria {
  getValorPositivo(valor: number): number {
  return Math.abs(valor);
}

  // ====== TOPO ======
  tituloMes = 'Janeiro de 2024 - Nosso começo';
  textoTopo = 'És aqui um começo... Um prolongo do que viria em dois anos... Dois anos cheios de descobertas, alegrias, desafios, alto e baixos... E muito Amor! Na época, nem pensava em ter alguém, tão pouco entrar em compromisso com uma pessoa. Porém... És que surje uma pequena, bem pequenina varoa, e com seu sorriso majestoso fez meu coração voltar a palpitar de emoção. E foi assim que tudo começou...';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2024/2024-janeiro/IMG-20240127-WA0094.jpg?updatedAt=1773966712719',
    legenda: 'O primeiro registro de vários, vários, vários, vários outros muitos, muitos, muitos que viriam...',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-janeiro/IMG-20240127-WA0094.jpg?updatedAt=1773966712719',
      legenda: 'Nosso primeiro registro especial.',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-fevereiro/IMG-20240310-WA0094.jpg?updatedAt=1773966711742',
      legenda: 'Um lindo casal de azul!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-fevereiro/IMG-20240325-WA0117.jpg?updatedAt=1773966713009',
      legenda: 'A minha Preferida!!',
      tipo: 'foto'
    },
     {
      url: 'https://ik.imagekit.io/2Years/2024/2024-marco/IMG-20240212-WA0050.jpg?updatedAt=1773966712737',
      legenda: 'Sempre foi gamadinha no varão kkk',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-marco/IMG-20240211-WA0086.jpg?updatedAt=1773966712517',
      legenda: 'Pegando uma Moral com este nego lindo aqui 😎',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-marco/IMG-20240213-WA0038.jpg?updatedAt=1773966712778',
      legenda: 'Primeiro Simpósio juntos...',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Quem foi o primeiro a se interessar pelo outro?',
    opcoes: [
      { texto: 'Suellen', pontos: 5},
      { texto: 'Brendo(O ++)', pontos: -5},
      { texto: 'nenhum', pontos: -5 },
      { texto: 'Ambos', pontos: -5 },
      { texto: 'A primeira opção', pontos: 5 }
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

    this.router.navigate(['page/interno/trilha/2024/abril1']);
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