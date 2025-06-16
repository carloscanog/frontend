import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-exitosa',
  templateUrl: './compra-exitosa.component.html',
  styleUrls: ['./compra-exitosa.component.scss'],
  standalone: false
})
export class CompraExitosaComponent {
  constructor(private router: Router) {}

  irADisenyos() {
    this.router.navigate(['muro-disenyos']);
  }

  irAPedidos() {
    this.router.navigate(['mis-pedidos']);
  }
}
