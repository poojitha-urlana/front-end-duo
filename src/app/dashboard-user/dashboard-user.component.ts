import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserDashboardHeaderComponent } from '../user-dashboard-header/user-dashboard-header.component';
import { SidenavbarUserComponent } from '../sidenavbar-user/sidenavbar-user.component';
@Component({
  selector: 'app-dashboard-user',
  standalone: true,
  imports: [RouterModule , CommonModule,SidenavbarUserComponent,UserDashboardHeaderComponent ],
  providers: [ProfileService],
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  profileImage: string | null = null;
  username: string = 'poojitha';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileImage = this.profileService.getProfileImage();
    this.username = this.profileService.getUsername();
  }
  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.profileService.setProfileImage(e.target.result as string);
          this.profileImage = e.target.result as string;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
