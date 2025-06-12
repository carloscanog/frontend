import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TatuajeService } from '../../../core/services/tatuaje.service';

@Component({
  selector: 'app-nuevo-tatuaje',
  templateUrl: './nuevo-tatuaje.component.html',
  styleUrls: ['./nuevo-tatuaje.component.scss'],
  standalone: false
})
export class NuevoTatuajeComponent {
  form: FormGroup;
  imagenSeleccionada: File | null = null;

  constructor(
    private fb: FormBuilder,
    private tatuajeService: TatuajeService,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      etiquetas: ['', Validators.required],
      imagen: [null, Validators.required]
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
    formData.append('imagen', this.imagenSeleccionada);

    this.tatuajeService.crearTatuaje(formData).subscribe(() => {
      this.router.navigate(['/mis-tatuajes']);
    });
  }
}
