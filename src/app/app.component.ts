import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary  ,  FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SidenavbarUserComponent } from './sidenavbar-user/sidenavbar-user.component';
import { Router, NavigationEnd } from '@angular/router';
import { AdminDashboardHeaderComponent } from "./admin-dashboard-header/admin-dashboard-header.component";
import { SidenavbarAdminComponent } from "./sidenavbar-admin/sidenavbar-admin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule,
    SidenavbarUserComponent, AdminDashboardHeaderComponent, SidenavbarAdminComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar: boolean = false;
  showAdminSidebar: boolean = false;

  title = 'smart-farming-frontend';
  constructor(library: FaIconLibrary,private router: Router) {
    library.addIconPacks(fas);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSidebar = ['/dashboard-user', '/farms', '/crop-health'].includes(event.url.split('?')[0]);
        this.showAdminSidebar = ['/admin-dashboard', '/admin-farms', '/admin-crop-health'].includes(event.url.split('?')[0]);
      }
    });
  }
  

}
