import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Texto {
  titulo: string;
  conteudo: string;
}

@Component({
  selector: 'app-textos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textos.html',
  styleUrl: './textos.scss',
})
export class Textos {

  textos: Texto[] = [
    {
        titulo:'O inicio das aventuras...',
    conteudo:'Bom... O que fala desses meses? Muitas novidades e descobertas, e foi aqui que eu descobre que o neném não é neném kkk. Foram dias maravilhosos, cheios de emoção ardentes e bastante euphoria pelo novo.'
    },
    {
 titulo:'Primeiro Final de Ano Juntos...',
  conteudo:'Assimm como foi a chegado do nosso primeiro mês, o primeiro final de ano juntos também foi algo marcante... Ficamnos juntos até altas horas no natal, e ficamos quase dois dias inteiro junto no ano novo, lembro que você tava bestinha kkk, foi ali também que tudo foi mudando pra nós, seus pais(sua mâe kkk) começaram a me enxerga com outros olhos, que nos permitiu passar mais tempos juntos...'
    },
    { titulo:'Os Primeiros Conflitos...',
  conteudo: 'Lembro como se fosse ontem, a primeira vez que fiquie verdadeiramente triste com você... Foi no momento que me acusou de algo que não fiz, por ingluência de outras pessoas. Aquilo me revoltou por dentro, e depois deste acontecimento, as coisas nunca mais foram as mesmas... Brigas e Desentedimento fazia parte da rotina! O afastamento um do outro e a frieza espiritual so crescia...'
    },
    {  titulo:'Janeiro de 2024 - Nosso começo',
  conteudo:'És aqui um começo... Um prolongo do que viria em dois anos... Dois anos cheios de descobertas, alegrias, desafios, alto e baixos... E muito Amor! Na época, nem pensava em ter alguém, tão pouco entrar em compromisso com uma pessoa. Porém... És que surje uma pequena, bem pequenina varoa, e com seu sorriso majestoso fez meu coração voltar a palpitar de emoção. E foi assim que tudo começou...'
},
{
  titulo:'Primeiro Final de Ano Juntos...',
  conteudo:'Assimm como foi a chegado do nosso primeiro mês, o primeiro final de ano juntos também foi algo marcante... Ficamnos juntos até altas horas no natal, e ficamos quase dois dias inteiro junto no ano novo, lembro que você tava bestinha kkk, foi ali também que tudo foi mudando pra nós, seus pais(sua mâe kkk) começaram a me enxerga com outros olhos, que nos permitiu passar mais tempos juntos...'
  },
  {titulo:'Um mês cheiro de maravilhas...',
  conteudo:'Nossa primeira ida à praia juntos foi daquelas memórias que ficam guardadas com carinho pra sempre. O jeito que o tempo parecia mais leve, o som do mar misturado com nossas risadas… tudo simplesmente encaixava. 🌊✨E esses últimos dias têm sido assim também: leves, bons, cheios de pequenos momentos que fazem tudo valer a pena. Estar com você transforma qualquer lugar em algo especial. 💜'
}
  ];

  textoAberto: any = null;

  constructor(private router: Router) {}

  abrirTexto(texto: any) {
    this.textoAberto = texto;
    document.body.style.overflow = 'hidden';
  }

  fecharTexto() {
    this.textoAberto = null;
    document.body.style.overflow = 'auto';
  }

  voltarHome() {
    this.router.navigate(['page/interno/home']);
  }
}
