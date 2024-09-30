import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavbarAdminComponent } from "../sidenavbar-admin/sidenavbar-admin.component";

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [SidenavbarAdminComponent , RouterModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {

}
