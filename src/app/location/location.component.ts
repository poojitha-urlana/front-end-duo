import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  standalone: true,
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  latitude = '-37.816279'; // Example latitude
  longitude = '144.953735'; // Example longitude

  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Create the sanitized URL using the given latitude and longitude
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095073!2d${this.longitude}!3d${this.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1b0a7b7%3A0xf577840f5a1bbcf6!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1611111112453!5m2!1sen!2sin`
    );
  }
}
