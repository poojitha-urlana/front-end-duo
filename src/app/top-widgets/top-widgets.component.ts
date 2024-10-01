import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard, faShop, faUsers, faSeedling, faLocation } from '@fortawesome/free-solid-svg-icons';
import { NgIf, CommonModule } from '@angular/common'; // Import NgIf and CommonModule

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, NgIf, CommonModule], // Add NgIf and CommonModule to imports
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  faDashboard = faDashboard;
  faUsers = faUsers;
  faShop = faShop;
  faSeedling = faSeedling;
  faLocation = faLocation;

  showLocation: boolean = false;

  constructor(private router: Router) {}

  // Method to navigate to location page
  onNavigateToLocation() {
    this.router.navigate(['/location']);
  }

  // Method to handle navigation for other routes
  onNavigate(route: string) {
    this.router.navigate([route]);
  }
}
