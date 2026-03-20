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
export class Setembro1 {
  
   getValorPositivo(valor: number): number {
  return Math.abs(valor);
}
  // ====== TOPO ======
  tituloMes = 'Os Primeiros Conflitos...';
  textoTopo = 'Lembro como se fosse ontem, a primeira vez que fiquie verdadeiramente triste com você... Foi no momento que me acusou de algo que não fiz, por ingluência de outras pessoas. Aquilo me revoltou por dentro, e depois deste acontecimento, as coisas nunca mais foram as mesmas... Brigas e Desentedimento fazia parte da rotina! O afastamento um do outro e a frieza espiritual so crescia...';

  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2024/2024-setembro/IMG-20240127-WA0094-COLLAGE.jpg?updatedAt=1773966715260',
    legenda: 'Retroespectiva do ano.',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-setembro/20240912220201667.jpg?updatedAt=1773966713922',
      legenda: 'Uma linda adoradora e futura dirigente 🔥',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-setembro/20240907213912562.jpg?updatedAt=1773966714600',
      legenda: 'Sempre bem vestidos, gracas a Deus!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-setembro/20240907213929552.jpg?updatedAt=1773966714495',
      legenda: 'Só não podia faltar aquela foto pegando a moral comigo né',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Quem cresceu, mas so fez crescer o cabelo ?',
    opcoes: [
      { texto: 'Brendo', pontos: -5 },
      { texto: 'Suellen', pontos: 5 },
      { texto: 'Nenhum', pontos: -5 },
      { texto: 'Ambos', pontos: -5 },
      { texto: 'Aquela de pouca altura', pontos: 5 }
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

    this.router.navigate(['page/interno/trilha/2024/dezembro1']);
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
