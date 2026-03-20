import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gameprogress } from '../../../../../core/service/gameProgress/gameprogress';
import { CommonModule } from '@angular/common';

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
export class Abril1 {
    getValorPositivo(valor: number): number {
  return Math.abs(valor);
}

    // ====== TOPO ======
    tituloMes = 'O inicio das aventuras...';
    textoTopo = 'Bom... O que fala desses meses? Muitas novidades e descobertas, e foi aqui que eu descobre que o neném não é neném kkk. Foram dias maravilhosos, cheios de emoção ardentes e bastante euphoria pelo novo.';
  
    // ====== MIDIAS (FOTOS / VIDEOS) ======
    fotoDestaque: MidiaMes | null = {
      url: 'https://ik.imagekit.io/2Years/2024/2024-abril/IMG-20240428-WA0121.jpg?updatedAt=1773966712178',
      legenda: 'A nossa escolha 🤍',
      tipo: 'foto'
    };
  
    fotosMes: MidiaMes[] = [
      {
        url: 'https://ik.imagekit.io/2Years/2024/2024-abril/IMG-20240426-WA0142.jpg?updatedAt=1773966714064',
        legenda: 'Olha o biquinho',
        tipo: 'foto'
      },
      {
        url: 'https://ik.imagekit.io/2Years/2024/2024-abril/IMG-20240413-WA0119.jpg?updatedAt=1773966712640',
        legenda: 'chiqueza é o lema',
        tipo: 'foto'
      },
      {
        url: 'https://ik.imagekit.io/2Years/2024/2024-abril/IMG-20240426-WA0126.jpg?updatedAt=1773966713345',
        legenda: 'O sorriso do nega sempre foi bonito!!',
        tipo: 'foto'
      }
    ];
  
    // ====== QUIZ (MINI-GAME) ======
    quiz: QuizPerguntaMes = {
      pergunta: 'Quem Gosta, mas não admite?',
      opcoes: [
        { texto: 'Brendo', pontos: -5 },
        { texto: 'Suellen', pontos: 5 },
        { texto: 'nenhum', pontos: -5 },
        { texto: 'Ambos', pontos: -5 },
        { texto: 'Meia Altura', pontos: 5 }
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
  
      this.router.navigate(['page/interno/trilha/2024/setembro1']);
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
