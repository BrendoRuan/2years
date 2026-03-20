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
  selector: 'app-dezembro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dezembro.html',
  styleUrl: './dezembro.scss',
})
export class Dezembro1 {
   getValorPositivo(valor: number): number {
  return Math.abs(valor);
}
  // ====== TOPO ======
  tituloMes = 'Primeiro Final de Ano Juntos...';
  textoTopo = 'Assimm como foi a chegado do nosso primeiro mês, o primeiro final de ano juntos também foi algo marcante... Ficamnos juntos até altas horas no natal, e ficamos quase dois dias inteiro junto no ano novo, lembro que você tava bestinha kkk, foi ali também que tudo foi mudando pra nós, seus pais(sua mâe kkk) começaram a me enxerga com outros olhos, que nos permitiu passar mais tempos juntos...';
  // ====== MIDIAS (FOTOS / VIDEOS) ======
  fotoDestaque: MidiaMes | null = {
    url: 'https://ik.imagekit.io/2Years/2024/2024-dezembro/IMG_0399.HEIC?updatedAt=1773966717484',
    legenda: 'Primeiro ano novo Juntos!!',
    tipo: 'foto'
  };

  fotosMes: MidiaMes[] = [
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-outubro/20241017072108446.jpg?updatedAt=1773966714824',
      legenda: 'Não me deixa quieto',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-dezembro/IMG_0313.HEIC?updatedAt=1773966717058',
      legenda: 'Sempre tirando fotos',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-dezembro/CF19A9FF-DBB1-4B21-B6EA-0E891AAF4404.jpg?updatedAt=1773966714507',
      legenda: 'Charmosos é pouco',
      tipo: 'foto'
    },
     {
      url: 'https://ik.imagekit.io/2Years/2024/2024-dezembro/99A90037-A267-4005-9DA5-4F8E7878E7CC.jpg?updatedAt=1773966713936',
      legenda: 'Niver de David',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-dezembro/9D15AAD5-17F0-42F0-B40D-55EFF53B3400.jpg?updatedAt=1773966713655',
      legenda: 'Que Love Em...',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2024/2024-dezembro/59C4BA6A-D8E0-42E1-91E0-A9395C1BF854.jpg?updatedAt=1773966713506',
      legenda: 'fala das garrinha dela kkk',
      tipo: 'foto'
    }
  ];

  // ====== QUIZ (MINI-GAME) ======
  quiz: QuizPerguntaMes = {
    pergunta: 'Com quem luiza estava no final desse ano ?',
    opcoes: [
      { texto: 'Samuel', pontos: -5 },
      { texto: 'Roberto', pontos: 5 },
      { texto: 'Thiago', pontos: -5 },
      { texto: 'Nehum', pontos: -5 },
      { texto: 'Todos', pontos: -10 }
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

    this.router.navigate(['page/interno/trilha/2025/janeiro1']);
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
