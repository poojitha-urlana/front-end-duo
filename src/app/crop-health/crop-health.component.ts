import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidenavbarUserComponent } from '../sidenavbar-user/sidenavbar-user.component';
import { UserDashboardHeaderComponent } from '../user-dashboard-header/user-dashboard-header.component';

@Component({
  selector: 'app-crop-health',
  standalone: true,
  imports: [FormsModule , CommonModule , SidenavbarUserComponent , UserDashboardHeaderComponent],
  templateUrl: './crop-health.component.html',
  styleUrls: ['./crop-health.component.css']
})
export class CropHealthComponent {
  file: File | null = null;
  analysisResults: any | null = null;
  recommendations: any | null = null;

  // Handle file input change
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

  // Call the backend to analyze the image
  analyzeImage() {
    if (!this.file) {
      alert('Please upload an image.');
      return;
    }

    // Mock the backend analysis results
    this.analysisResults = {
      diseases: [
        { name: 'Powdery Mildew', severity: 'High' },
        { name: 'Rust', severity: 'Medium' }
      ]
    };

    // Mock recommendations based on the analysis
    this.recommendations = [
      {
        disease: 'Powdery Mildew',
        organic: 'Apply sulfur-based fungicides',
        chemical: 'Use systemic fungicides'
      },
      {
        disease: 'Rust',
        organic: 'Use neem oil',
        chemical: 'Apply rust fungicides'
      }
    ];
  }
}
