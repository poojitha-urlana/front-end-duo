import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SidenavbarUserComponent } from './sidenavbar-user/sidenavbar-user.component';
import { Router, NavigationEnd } from '@angular/router';
import { AdminDashboardHeaderComponent } from "./admin-dashboard-header/admin-dashboard-header.component";
import { SidenavbarAdminComponent } from "./sidenavbar-admin/sidenavbar-admin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule,
    SidenavbarUserComponent, 
    AdminDashboardHeaderComponent, 
    SidenavbarAdminComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar: boolean = false;
  showAdminSidebar: boolean = false;
  title = 'smart-farming-frontend';

  constructor(library: FaIconLibrary, private router: Router) {
    // Adding FontAwesome icon pack
    library.addIconPacks(fas);
  }

  ngOnInit() {
    // Subscribe to router events to show/hide sidebars based on routes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url.split('?')[0]; // Remove query params for matching
        // Define routes for user and admin sidebars
        this.showSidebar = ['/dashboard-user', '/farms', '/crop-health'].includes(currentUrl);
        this.showAdminSidebar = ['/admin-dashboard', '/admin-farms', '/admin-crop-health'].includes(currentUrl);
      }
    });
  }

  // Define the isLoggedOut property and initialize it
  isLoggedOut = false;

  // Example method to toggle the logged-out state
  logOut() {
    this.isLoggedOut = true;
  }

  // Check if the footer should be shown
  shouldShowFooter() {
    return !this.isLoggedOut;
  }
  
}
