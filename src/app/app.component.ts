import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary  ,  FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SidenavbarUserComponent } from './sidenavbar-user/sidenavbar-user.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, 
    HeaderComponent, 
    FooterComponent ,  
    FontAwesomeModule,
    SidenavbarUserComponent,
   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar: boolean = false;

  title = 'smart-farming-frontend';
  constructor(library: FaIconLibrary,private router: Router) {
    library.addIconPacks(fas);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Adjust sidebar visibility based on routes
        this.showSidebar = ['/dashboard-user', '/farms', '/crop-health'].includes(event.url.split('?')[0]);
      }
    });
  }
  

}
