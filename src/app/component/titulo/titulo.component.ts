import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule 
  ],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent {}
