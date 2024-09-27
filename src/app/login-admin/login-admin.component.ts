import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule , FooterComponent , HeaderComponent, RouterModule],
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'poojitha' && this.password === '123456') {
      this.router.navigate(['/dashboard-admin']);
    } else {
      alert('Invalid login credentials for Admin');
    }
  }
}
