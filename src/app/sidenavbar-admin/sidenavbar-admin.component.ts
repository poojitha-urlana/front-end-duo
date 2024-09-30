import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { faHome ,faUser,faTractor,faSeedling,faCog,faSignOutAlt , faUsers} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenavbar-admin',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule ,RouterModule],
  templateUrl: './sidenavbar-admin.component.html',
  styleUrl: './sidenavbar-admin.component.css'
})
export class SidenavbarAdminComponent {

  faHome = faHome;
  faUser = faUser;
  faTractor = faTractor;
  faSeedling = faSeedling;
  faCog = faCog;
  faUsers = faUsers; 
  faSignOutAlt = faSignOutAlt;
}
