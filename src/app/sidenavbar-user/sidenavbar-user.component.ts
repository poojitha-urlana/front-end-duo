import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sidenavbar-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenavbar-user.component.html',
  styleUrl: './sidenavbar-user.component.css'
})
export class SidenavbarUserComponent {
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) {}
}
