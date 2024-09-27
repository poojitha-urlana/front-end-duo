import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeContentComponent } from '../home-content/home-content.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent , FooterComponent, HomeContentComponent ,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
