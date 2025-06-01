import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    const body = { email: this.email, password: this.password };

    this.http.post<any>('http://localhost:8080/auth/login', body).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.error('❌ Login fallido', err);
        alert('Email o contraseña incorrectos');
      }
    });
  }
}
