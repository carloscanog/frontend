import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: false
})
export class InicioComponent {
  constructor(private router: Router) {}

  irARegistro() {
    this.router.navigate(['/registro/paso1']);
  }

  irALogin() {
    this.router.navigate(['/auth/login']);
  }

}
