import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileImage: string | null = null;
  private username: string = 'User'; // Default username or fetch from a source

  constructor() { }

  // Save profile image
  setProfileImage(image: string): void {
    this.profileImage = image;
  }

  // Retrieve profile image
  getProfileImage(): string | null {
    return this.profileImage;
  }

  // Set username
  setUsername(username: string): void {
    this.username = username;
  }

  // Retrieve username
  getUsername(): string {
    return this.username;
  }
}
