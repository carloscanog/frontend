import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {
    constructor(private router: Router) {}

    irA(ruta: string): void {
      this.router.navigate([ruta]);
    }

    cerrarSesion(): void {
      // Aquí puedes vaciar token o llamar a AuthService
      localStorage.removeItem('jwt'); // o cualquier clave que uses
      this.router.navigate(['/login']);
    }
}
