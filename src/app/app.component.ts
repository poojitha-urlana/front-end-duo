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
  showUserSidebar: boolean = false;
  showAdminSidebar: boolean = false;
  showFooter: boolean = true;  // Control footer visibility

  constructor(library: FaIconLibrary, private router: Router) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url.split('?')[0]; 

        // Decide when to show/hide the sidebar
        this.showUserSidebar = ['/dashboard-user', '/farms', '/crop-health'].includes(currentUrl);
        this.showAdminSidebar = ['/dashboard-admin', '/farm-management', '/user-management'].includes(currentUrl);
        
        // Decide when to show/hide the footer
        this.showFooter = [
          '/dashboard-user', 
          '/farms',
           '/crop-health',
           '/dashboard-admin', 
           '/farm-management',
            '/user-management',
            '/login-user',
            'login-admin'
          ].includes(currentUrl); // Show footer on all pages except home page
      }
    });
  }

  isLoggedOut = false;

  
  logOut() {
    this.isLoggedOut = true;
  }

 
  shouldShowFooter() {
    return !this.isLoggedOut;
  }
  
}
