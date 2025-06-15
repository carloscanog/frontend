import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';
import { ClienteService } from '../../../core/services/cliente.service';

@Component({
  selector: 'app-editar-perfil-cliente',
  templateUrl: './editar-perfil-cliente.component.html',
  styleUrls: ['./editar-perfil-cliente.component.scss'],
  standalone: false
})
export class EditarPerfilClienteComponent implements OnInit {
    form!: FormGroup;
    perfil: any;

    constructor(
        private fb: FormBuilder,
        private profileService: ProfileService,
        private clienteService: ClienteService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.profileService.obtenerPerfil().subscribe(res => {
        this.perfil = res.perfil;

        this.form = this.fb.group({
            ciudad: [this.perfil.ciudad],
            intereses: [this.perfil.intereses?.join(',')]
        });
        });
    }

    onSubmit(): void {
        const actualizado = {
            ...this.perfil,
            ...this.form.value,
            intereses: this.form.value.intereses.split(',').map((e: string) => e.trim())
        };

        this.clienteService.actualizarPerfil(actualizado).subscribe(() => {
            this.router.navigate(['/profile']);
        });
    }

    cancelar(): void {
        this.router.navigate(['/profile']);
    }
}
