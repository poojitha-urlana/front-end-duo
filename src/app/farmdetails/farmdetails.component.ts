import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { UserDashboardHeaderComponent } from "../user-dashboard-header/user-dashboard-header.component";
import { SidenavbarUserComponent } from "../sidenavbar-user/sidenavbar-user.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-farmdetails',
  standalone: true,
  imports: [FormsModule, CommonModule, UserDashboardHeaderComponent, SidenavbarUserComponent, FooterComponent], // Include necessary modules if required
  templateUrl: './farmdetails.component.html',
  styleUrls: ['./farmdetails.component.css'] // Corrected to styleUrls
})
export class FarmdetailsComponent implements OnInit {
    farm: any;
  
    constructor(private router: Router) {}
  
    ngOnInit() {
      this.farm = history.state.farm; 
    }
  }