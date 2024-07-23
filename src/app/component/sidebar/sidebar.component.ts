import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AccordionModule } from 'ngx-bootstrap/accordion';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true,
  imports: [MatCheckboxModule, 
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    AccordionModule,
  ],
  })

  export class SidebarComponent {
    isCollapsed: boolean = true;
    isContentVisible1: boolean = false;
    isContentVisible2: boolean = false;
    isContentVisible3: boolean = false;
  
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  
    toggleContentVisibility1() {
      this.isContentVisible1 = !this.isContentVisible1;
    }

    toggleContentVisibility2() {
      this.isContentVisible2 = !this.isContentVisible2;
    }

    toggleContentVisibility3() {
      this.isContentVisible3 = !this.isContentVisible3;
    }

    openModal1() {
    }

    openModal2() {
    }

    openModal3() {
    }

    openModal4() {
    }

    openModal5() {
    }
  };
