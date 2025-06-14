import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DisenyoService } from '../../../core/services/disenyo.service';

@Component({
  selector: 'app-nuevo-disenyo',
  templateUrl: './nuevo-disenyo.component.html',
  styleUrls: ['./nuevo-disenyo.component.scss'],
  standalone: false
})
export class NuevoDisenyoComponent {
  form: FormGroup;
  imagenSeleccionada: File | null = null;

  constructor(
    private fb: FormBuilder,
    private disenyoService: DisenyoService,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      etiquetas: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]]
    });
  }

  onImagenSeleccionada(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imagenSeleccionada = file;
    }
  }

  onSubmit(): void {
    if (this.form.invalid || !this.imagenSeleccionada) return;

    const formData = new FormData();
    formData.append('titulo', this.form.value.titulo);
    // El backend se encarga de dividir las etiquetas
    formData.append('etiquetas', this.form.value.etiquetas);
    formData.append('precio', this.form.value.precio.toString());
    formData.append('imagen', this.imagenSeleccionada);

    this.disenyoService.crearDisenyo(formData).subscribe(() => {
      this.router.navigate(['/mis-disenyos']);
    });
  }
}
