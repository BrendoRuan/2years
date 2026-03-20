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
  selector: 'app-abril',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abril.html',
  styleUrl: './abril.scss',
})
export class Abril {
  getValorPositivo(valor: number): number {
  return Math.abs(valor);
}
  // ====== TOPO ======
  tituloMes = 'Primeira Festividade Juntos...';
  textoTopo = 'Assim como todo começo de ano agitado é, veio a nossa festividade, e te falar visse... Que coisa mais fofinha de fardamento dos jovens, vou colocar várias fotinhas dela na galeria do app!!!';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2025/2025-abril/IMG_1788.JPG?updatedAt=1773967659217',
    legenda: 'O pesinho é o charme!!',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-abril/IMG_1744.JPG?updatedAt=1773967637882',
      legenda: 'Olha a carinha de quem esta prestando atenção na pregação!!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-abril/IMG_1786.JPG?updatedAt=1773967657003',
      legenda: 'Sempre querendo bater de frente, mas cono? Sem Tamanho 😂',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-maio/IMG_2134.JPG?updatedAt=1773967610302',
      legenda: 'Que base viu...',
      tipo: 'foto'
    },
       {
      url: 'https://ik.imagekit.io/2Years/2025/2025-maio/IMG_2143.JPG?updatedAt=1773967628185',
      legenda: 'Jogador caro não olha pra foto!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-junho/IMG_2578.JPG?updatedAt=1773967609925',
      legenda: 'Ela é bonita, mas quando ta ao meu lado...',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-junho/IMG_2610.JPG?updatedAt=1773967584332',
      legenda: 'Nem gosta de um cheirinho ela',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Quem é a nossa fotografa oficial?',
    opcoes: [
      { texto: 'Luiza', pontos: 5},
      { texto: 'Bya', pontos: -5 },
      { texto: 'Bianquinha', pontos: -5},
      { texto: 'Ninguém!', pontos: -5 },
      { texto: 'Sombra Branca', pontos: 5 }
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

    this.router.navigate(['page/interno/trilha/2025/setembro']);
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
