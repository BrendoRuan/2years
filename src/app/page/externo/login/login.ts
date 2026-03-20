import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'], // Corrigido 'styleUrl' -> 'styleUrls'
})
export class Login {

  // 👉 Altere aqui para a data certa de vocês
  private readonly SENHA_CORRETA = '17/03/2024';

  senha: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

onSubmit(): void {
  const valor = this.senha.trim();

  if (!valor) {
    this.errorMessage = 'Por favor, digite a nossa data.';
    return;
  }

  if (valor === this.SENHA_CORRETA) {
    this.errorMessage = '';

    // Navega para home e depois mostra o alert
    this.router.navigate(['page/interno/home']).then(() => {
      alert('Escolha uma música para melhorar sua experiência! 🎵');
    });

  } else {
    this.errorMessage = 'Hmm... essa não é a nossa data. Tenta de novo. 😉';
  }
}

  goToHome(): void {
    this.router.navigate(['page/interno/home']);
  }
}