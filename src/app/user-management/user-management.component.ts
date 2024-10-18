import { Component } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe, CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']  // Corrected styleUrls to plural
})
export class UserManagementComponent {
  users = [
    { id: 1, username: 'JohnDoe', email: 'john@example.com' },
    { id: 2, username: 'JaneSmith', email: 'jane@example.com' },
    { id: 3, username: 'MikeRoss', email: 'mike@example.com' }
  ];
  
  message: string = '';
  constructor(private router: Router){}

  updateUser(userId: number) {
    console.log('Update user with ID:', userId);
  }

  logoutUser(userId: number) {
    this.message = `User ${userId} logged out successfully!`;
    console.log('Logout user with ID:', userId);
  }

  addUser() {
    this.router.navigate(['/add-user']);
    console.log('Add new user');
  }
}
