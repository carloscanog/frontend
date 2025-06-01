import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/me').subscribe({
      next: (data) => this.user = data,
      error: (err) => console.error('Error en /me', err)
    });
  }
}
