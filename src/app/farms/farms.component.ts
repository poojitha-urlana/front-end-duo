import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidenavbarAdminComponent } from '../sidenavbar-admin/sidenavbar-admin.component';
import { SidenavbarUserComponent } from '../sidenavbar-user/sidenavbar-user.component';
import { UserDashboardHeaderComponent } from '../user-dashboard-header/user-dashboard-header.component';

@Component({
  selector: 'app-farms',
  standalone: true,
  imports: [CommonModule, 
    SidenavbarAdminComponent,
    FormsModule, SidenavbarUserComponent, UserDashboardHeaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css'] // Corrected to styleUrls
})
export class FarmsComponent {
  // Properties to control sidebar visibility
  showSidebar: boolean = true;
  showAdminSidebar: boolean = false; 
  userRole: string = 'user'; // Example: 'admin' or 'user'

  shouldShowFooter(): boolean {
    return true; // Example logic for showing footer
  }

  farms = [
    { 
      id: 1, 
      name: 'Farm 1', 
      location: 'Paralakhemundi',
      area: 50, 
      cropName: 'Corn',
      sensors: {
        temperature: { value: 22, status: 'Normal' },
        humidity: { value: 60, status: 'Normal' },
        moisture: { value: 30, status: 'Low' }
      }
    },
    { 
      id: 2, 
      name: 'Farm 2', 
      location: 'Kosamala',
      area: 40, 
      cropName: 'Wheat',
      sensors: {
        temperature: { value: 22, status: 'Normal' },
        humidity: { value: 55, status: 'Normal' },
        moisture: { value: 40, status: 'Good' }
      }
    },
    {
      id: 3,
      name: 'Farm 3',
      location: 'Paralakhemundi',
      area: 30,
      cropName: 'Rice',
      sensors: {
        temperature: { value: 25, status: 'Normal' },
        humidity: { value: 65, status: 'Normal' },
        moisture: { value: 35, status: 'Low' }
      }
    }
  ];

  locations = [...new Set(this.farms.map(farm => farm.location))]; // Unique locations
  selectedLocation = '';
  filteredFarms = this.farms;

  constructor(private router: Router) {
    this.setSidebarVisibility(); // Set sidebar visibility based on user role
  }

  filterFarmsByLocation() {
    if (this.selectedLocation) {
      this.filteredFarms = this.farms.filter(farm => farm.location === this.selectedLocation);
    } else {
      this.filteredFarms = this.farms;
    }
  }

  viewFarmDetails(farmId: number) {
    const farm = this.farms.find(f => f.id === farmId);
    this.router.navigate([`/farm/${farmId}`], { state: { farm } }); // Corrected string interpolation for routing
  }

  setSidebarVisibility() {
    // Adjust sidebar visibility based on user role
    if (this.userRole === 'admin') {
      this.showAdminSidebar = true;
      this.showSidebar = false; // Hide user sidebar
    } else {
      this.showSidebar = true;
      this.showAdminSidebar = false; // Hide admin sidebar
    }
  }
}
