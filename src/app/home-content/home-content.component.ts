import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, FontAwesomeModule ,RouterModule],
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']  
})
export class HomeContentComponent  {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // Listen to the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset; // Current vertical scroll position
    console.log('Scroll Position:', scrollPosition);

    // Get the offset position of the advanced features section
    const advancedFeaturesSection = this.el.nativeElement.querySelector('.advanced-features').offsetTop;
    console.log('Advanced Features Offset:', advancedFeaturesSection);

    if (scrollPosition >= advancedFeaturesSection / 2) {
      console.log('Adding scrolled class');
      this.renderer.addClass(this.el.nativeElement.querySelector('.hero-section'), 'scrolled');
    } else {
      console.log('Removing scrolled class');
      this.renderer.removeClass(this.el.nativeElement.querySelector('.hero-section'), 'scrolled');
    }
  }
}