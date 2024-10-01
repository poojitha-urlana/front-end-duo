import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faDashboard, faShop,
        faUsers,
        faSeedling,
         faLocation
 } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.css'
})
export class TopWidgetsComponent {
 faDashboard = faDashboard; // Declare the icons you want to use
  faUsers = faUsers;
  faShop = faShop;
  faSeedling = faSeedling;
  faLocation = faLocation;
  constructor(private router: Router) {}

  onNavigate(path: string) {
    this.router.navigate([path]);
  }
}
