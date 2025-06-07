import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elegir-rol',
  templateUrl: './elegir-rol.component.html',
  styleUrls: ['./elegir-rol.component.scss'],
  standalone: false
})
export class ElegirRolComponent {
  constructor(private router: Router) {}

  elegirCliente(): void {
    this.router.navigate(['/registro/cliente']);
  }

  elegirTatuador(): void {
    this.router.navigate(['/registro/tatuador']);
  }
}
