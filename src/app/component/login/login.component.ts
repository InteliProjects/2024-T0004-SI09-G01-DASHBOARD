import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    MatCardModule,
    FormsModule, 
    CommonModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router:Router,
  ){}

  email: string = '';
  password: string = '';

  hide: boolean = true; 

  login(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/dash-geral'])
  }

}
