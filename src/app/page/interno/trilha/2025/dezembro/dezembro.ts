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
  selector: 'app-dezembro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dezembro.html',
  styleUrl: './dezembro.scss',
})
export class Dezembro {

       getValorPositivo(valor: number): number {
  return Math.abs(valor);
}
  // ====== TOPO ======
  tituloMes = 'Nosso Segundo Final de Ano Juntos...';
  textoTopo = 'Nosso segundo final de ano juntos… quem diria, né? 🥺✨Se no primeiro já parecia especial, esse conseguiu ser ainda mais bonito, mais leve, mais nosso.É estranho pensar como o tempo passa rápido quando a gente está ao lado de quem faz tudo valer a pena. Foram mais risadas, mais momentos simples que viraram memórias gigantes, mais aprendizados e, principalmente, mais amor.Esse ano teve de tudo um pouco: dias corridos, desafios, saudade às vezes… mas também teve abraço que acalma, conversa que resolve, olhar que entende sem precisar dizer nada. E é isso que faz tudo ser tão incrível com você.Fechar mais um ano ao seu lado não é só sobre datas… é sobre sentir que, independente do que venha, eu tenho você — e isso já é tudo.Que venham muitos outros finais de ano, com a gente ainda mais juntos, mais fortes e com o mesmo sentimento bonito que só cresce.Eu escolheria você em todos eles. 💜';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2025/2025-dezembro/WhatsApp%20Image%202026-03-09%20at%202.29.10.jpeg?updatedAt=1773967663998',
    legenda: 'Nosso segundo final de ano juntos...',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-outubro/WhatApp%20Image%202026-03-09%20at%2023.09.44.jpeg?updatedAt=1773967621210',
      legenda: 'Amo seus cheiros...',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-outubro/WhatsApp%20Image%20226-03-09%20at23.09.44.jpeg?updatedAt=1773967625027',
      legenda: 'Ultima ida ao Templo Centtal de 2025',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-novembro/WhatsApp%20Image%202026-0-09%20at%2023.20.56.jpeg?updatedAt=1773967593666',
      legenda: 'Amo está ao seu lado...',
      tipo: 'foto'
    },
       {
      url: 'https://ik.imagekit.io/2Years/2025/2025-novembro/WhatsApp%20Image%20202603-09%20at%2023.20.54.jpeg?updatedAt=1773967601885',
      legenda: 'Minha princesa!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-dezembro/WhatsApp%20Image%202026-03-09%20at%20.29.10.jpeg?updatedAt=1773967662820',
      legenda: 'Base e postura tem de sobra!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-dezembro/WhatsApp%20Image%202026-009%20at%2023.29.09.jpeg?updatedAt=1773967657797',
      legenda: 'Meus momentos só são especiais, porque você está neles!!',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Quem é mais ciumento?',
    opcoes: [
      { texto: 'Brendo', pontos: -5 },
      { texto: 'Suellen', pontos: 5 },
      { texto: 'Ambos', pontos: -5 },
      { texto: 'Nenhum', pontos: -5 },
      { texto: 'A dona da razão', pontos: 5 }
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

    this.router.navigate(['page/interno/trilha/2026/janeiro']);
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
