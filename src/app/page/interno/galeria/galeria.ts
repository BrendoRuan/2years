import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Midia {
  url: string;
  legenda: string;
  tipo: 'foto' | 'video';
}


@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {


  midias: Midia[] = [
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
    },
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
    },
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
    },
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
    },
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
    },
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
      },
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
    },
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
    },
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
    },
     {
      url: 'https://ik.imagekit.io/2Years/2025/2025-setembro/IMG_4048.JPG?updatedAt=1773967646410',
      legenda: 'Miinha tia das crianças!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-setembro/IMG_4023.JPG?updatedAt=1773967632741',
      legenda: 'Um amor por essa foto',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-agosto/IMG_3258.JPG?updatedAt=1773967665536',
      legenda: 'Minha Princesa...',
      tipo: 'foto'
    }, {
      url: 'https://ik.imagekit.io/2Years/2025/2025-agosto/IMG_3185.JPG?updatedAt=1773967655860',
      legenda: 'Eu e minha varoa serviremos ao Senhor!!',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-julho/IMG_2993.JPG?updatedAt=1773967563685',
      legenda: 'Meu dodói ',
      tipo: 'foto'
    },
    {
      url: 'https://ik.imagekit.io/2Years/2025/2025-julho/IMG_2876.JPG?updatedAt=1773967590354',
      legenda: 'Já estou vendo nossa casa com 3 criancas correndo por ai',
      tipo: 'foto'
    },
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

  midiaAberta: any = null;

  constructor(private router: Router) {}

  abrirMidia(midia: any) {
    this.midiaAberta = midia;
    document.body.style.overflow = 'hidden';
  }

  fecharMidia() {
    this.midiaAberta = null;
    document.body.style.overflow = 'auto';
  }

  voltarHome() {
    this.router.navigate(['page/interno/home']);
  }
}
