import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { RouterModule } from '@angular/router';

import { HomeContentComponent } from '../home-content/home-content.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent , HomeContentComponent ,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
