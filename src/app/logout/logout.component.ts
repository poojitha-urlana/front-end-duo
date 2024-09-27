import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../authentication.service';
import { HomeContentComponent } from '../home-content/home-content.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [HomeContentComponent,FooterComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService){}

  ngOnInit(): void {
      this.hardcodedAuthenticationService.logout();
  }

}
