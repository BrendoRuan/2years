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
export class Janeiro {
       getValorPositivo(valor: number): number {
  return Math.abs(valor);
}
  // ====== TOPO ======
  tituloMes = 'A conversa que mudou tudo...';
  textoTopo = 'Depois de uma conversa.., aquela conversa, tudo mudou e desde lá, estivemos vivendo dias maravilhosos...';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2026/2026-janeiro/WhaApp%20Image%202026-03-09%20at%2023.39.06.jpeg?updatedAt=1773967964283',
    legenda: 'O início de um ano maravilhoso e esperançoso',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2026/2026-janeiro/WhatsApp%20Image%202026-009%20at%2023.39.06.jpeg?updatedAt=1773967964145',
      legenda: 'Primeiro culto jovem do ano!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2026/2026-janeiro/WhatsApp%20Image%202026--09%20at%2023.39.06.jpeg?updatedAt=1773967966327',
      legenda: 'o cheirinho bom de sempre!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2026/2026-janeiro/WhatsApp%20Image%202026-03-09%20at3.39.06.jpeg?updatedAt=1773967963230',
      legenda: 'Nossas Mehores= fotos são assim lkkk',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'o que voce mais admira no seu nego?',
    opcoes: [
      { texto: 'Sorriso', pontos: 5},
      { texto: 'Corpo', pontos: 5 },
      { texto: 'Braços', pontos: 5 },
      { texto: 'Tudo', pontos: 5 },
      { texto: 'Edo', pontos: 5}
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

    this.router.navigate(['page/interno/trilha/2026/fevereiro']);
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
