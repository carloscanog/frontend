import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-cancelada',
  templateUrl: './compra-cancelada.component.html',
  styleUrls: ['./compra-cancelada.component.scss'],
  standalone: false
})
export class CompraCanceladaComponent {
  constructor(private router: Router) {}

  volverADetalle() {
    this.router.navigate(['muro-disenyos']);
  }
}
