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
  selector: 'app-fevereiro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fevereiro.html',
  styleUrl: './fevereiro.scss',
})
export class Fevereiro {

         getValorPositivo(valor: number): number {
  return Math.abs(valor);
}
  
  // ====== TOPO ======
  tituloMes = 'Um mês cheiro de maravilhas...';
  textoTopo = 'Nossa primeira ida à praia juntos foi daquelas memórias que ficam guardadas com carinho pra sempre. O jeito que o tempo parecia mais leve, o som do mar misturado com nossas risadas… tudo simplesmente encaixava. 🌊✨E esses últimos dias têm sido assim também: leves, bons, cheios de pequenos momentos que fazem tudo valer a pena. Estar com você transforma qualquer lugar em algo especial. 💜';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2026/2026-fevereiro/WhatsApp%20Image%202026-03-09%20at%20251.45.jpeg?updatedAt=1773967967334',
    legenda: 'Nossa primeira praia juntos, e que dia maravilhoso foi aquele!!',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2026/2026-fevereiro/WhatsApp%20Image%202026-03-09%20at.51.45.jpeg?updatedAt=1773967965940',
      legenda: 'Nada a declarar...',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2026/2026-fevereiro/WhatsApp%20Image%202026-039%20at%2023.51.44.jpeg?updatedAt=1773967964316',
      legenda: 'Amo esse tipo de foto!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2026/2026-fevereiro/WhatsApp%20Image%202026-03-09%20at%20.51.40.jpeg?updatedAt=1773967965456',
      legenda: 'Um casal lindo de se ver!!',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Onde nos falamos pela primeira vez?',
    opcoes: [
      { texto: 'Escola', pontos: -5 },
      { texto: 'Igreja', pontos: 5 },
      { texto: 'Instagram', pontos: 5},
      { texto: 'WhatsApp', pontos: -5 },
      { texto: 'Pessoalmente', pontos: 5 }
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
