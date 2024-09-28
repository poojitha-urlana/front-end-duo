import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../authentication.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome ,faUser,faTractor,faSeedling,faCog,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidenavbar-user',
  standalone: true,
  imports: [RouterModule,FontAwesomeModule],
  templateUrl: './sidenavbar-user.component.html',
  styleUrl: './sidenavbar-user.component.css'
})
export class SidenavbarUserComponent {
  faHome = faHome;
  faUser = faUser;
  faTractor = faTractor;
  faSeedling = faSeedling;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) {}
}
