import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidenavbarAdminComponent } from "../sidenavbar-admin/sidenavbar-admin.component";

interface Farm {
  id: number;
  name: string;
  location: string;
  area: number;
  cropName: string;
  sensors: {
    temperature: { value: number, status: string },
    humidity: { value: number, status: string },
    moisture: { value: number, status: string }
  };
}
@Component({
  selector: 'app-farm-managemnet',
  standalone: true,
  imports: [CommonModule, FormsModule, SidenavbarAdminComponent],
  templateUrl: './farm-managemnet.component.html',
  styleUrl: './farm-managemnet.component.css'
})
export class FarmManagemnetComponent {
  farms: Farm[] = [
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
    }
  ];

  farmModel: Farm = this.createEmptyFarm();
  selectedFarm: Farm | null = null;

  createEmptyFarm(): Farm {
    return {
      id: 0,
      name: '',
      location: '',
      area: 0,
      cropName: '',
      sensors: {
        temperature: { value: 0, status: '' },
        humidity: { value: 0, status: '' },
        moisture: { value: 0, status: '' }
      }
    };
  }

  addOrUpdateFarm() {
    if (this.selectedFarm) {
      // Update farm
      const index = this.farms.findIndex(f => f.id === this.selectedFarm!.id);
      if (index !== -1) {
        this.farms[index] = { ...this.farmModel };
      }
      this.selectedFarm = null;
    } else {
      // Add new farm
      const newId = this.farms.length ? Math.max(...this.farms.map(f => f.id)) + 1 : 1;
      this.farms.push({ ...this.farmModel, id: newId });
    }
    this.farmModel = this.createEmptyFarm(); // Reset form
  }

  deleteFarm(id: number) {
    this.farms = this.farms.filter(farm => farm.id !== id);
  }

  editFarm(farm: Farm) {
    this.selectedFarm = { ...farm };
    this.farmModel = { ...farm }; // Populate form with selected farm details
  }

  cancelEdit() {
    this.selectedFarm = null;
    this.farmModel = this.createEmptyFarm(); // Reset form
  }
}