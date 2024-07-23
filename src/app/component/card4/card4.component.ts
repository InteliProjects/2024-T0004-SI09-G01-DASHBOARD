import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card4',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule
  ],
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component {
  selecao: string = '';
}

