import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TatuadorService } from '../../../core/services/tatuador.service';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-editar-perfil-tatuador',
  templateUrl: './editar-perfil-tatuador.component.html',
  styleUrls: ['./editar-perfil-tatuador.component.scss'],
  standalone: false
})
export class EditarPerfilTatuadorComponent implements OnInit {
    form!: FormGroup;
    perfil: any;

    constructor(
        private fb: FormBuilder,
        private profileService: ProfileService,
        private tatuadorService: TatuadorService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.profileService.obtenerPerfil().subscribe(res => {
        this.perfil = res.perfil;

        this.form = this.fb.group({
            biografia: [this.perfil.biografia],
            ubicacion: [this.perfil.ubicacion],
            estilos: [this.perfil.estilos?.join(', ')],
            instagram: [this.perfil.instagram],
            tiktok: [this.perfil.tiktok]
        });
        });
    }

    onSubmit(): void {
        const actualizado = {
            ...this.perfil,
            ...this.form.value,
            estilos: this.form.value.estilos.split(',').map((e: string) => e.trim())
        };

        this.tatuadorService.actualizarPerfil(actualizado).subscribe(() => {
            this.router.navigate(['/profile']);
        });
    }

    cancelar(): void {
        this.router.navigate(['/profile']);
    }
}
