import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { faUser, faEnvelope, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser = {
    id: 0,
    username: '',
    email: ''
  };

  constructor(private router: Router){}

  faUser = faUser;
faEnvelope = faEnvelope;
faUserPlus = faUserPlus;

  addUser() {
    console.log('User added:', this.newUser);
    
  }
}
