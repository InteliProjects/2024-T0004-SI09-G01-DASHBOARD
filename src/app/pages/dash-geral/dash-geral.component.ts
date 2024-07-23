import { Component } from '@angular/core';
import { HeaderComponentMenu } from '../../component/header/header.component';
import { TituloComponent } from '../../component/titulo/titulo.component';
import { CardComponent } from '../../component/card/card.component';
import { Card2Component } from '../../component/card2/card2.component';
import { Card3Component } from '../../component/card3/card3.component';
import { Card4Component } from '../../component/card4/card4.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { Card5Component } from '../../component/card5/card5.component';
import { GraphicDashGeralComponent } from '../../component/graphic-dash-geral/graphic-dash-geral.component';
import { Card6Component } from '../../component/card6/card6.component';

@Component({
  selector: 'app-dash-geral',
  standalone: true,
  imports: [
    HeaderComponentMenu,
    TituloComponent,
    CardComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    SidebarComponent,
    Card5Component,
    Card6Component,
    GraphicDashGeralComponent,
  ],
  templateUrl: './dash-geral.component.html',
  styleUrl: './dash-geral.component.css'
})
export class DashGeralComponent {

}
