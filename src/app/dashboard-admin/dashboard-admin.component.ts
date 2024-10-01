import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavbarAdminComponent } from "../sidenavbar-admin/sidenavbar-admin.component";
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [SidenavbarAdminComponent , RouterModule,TopWidgetsComponent],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {

}
