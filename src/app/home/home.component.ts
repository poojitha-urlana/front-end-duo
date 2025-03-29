import { Component, Renderer2, ElementRef, AfterViewInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, HeaderComponent, RouterModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeColor: string = 'black';
  throttled: boolean = false;  // Declare the throttled property
  sections = [
    { id: 'project-info', color: '#f9f9f9' },
    { id: 'advanced-features', color: '#37414b' },
    { id: 'cta-section', color: '#f1f0f1' },
  ];

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: any // Inject PLATFORM_ID to detect platform
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {  // Ensure code runs only in the browser
      console.log('ngAfterViewInit called');

      // Initially update background colors based on panel's data-color
      const panels = this.el.nativeElement.querySelectorAll('.panel');
      panels.forEach((panel: HTMLElement) => {
        const color = panel.getAttribute('data-color');
        if (color) {
          this.renderer.setStyle(panel, 'background-color', color);
        } else {
          console.warn('No data-color defined for this panel:', panel);
        }
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (!this.throttled) {
      this.throttled = true;
      setTimeout(() => {
        this.detectActivePanel();
        this.throttled = false;
      }, 100); // Adjust this timeout to control the throttling
    }
  }
  
  private detectActivePanel() {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjusted buffer zone
  
    const panels = this.el.nativeElement.querySelectorAll('.panel');
    const body = this.el.nativeElement.ownerDocument.body;
  
    let activePanelFound = false;
  
    panels.forEach((panel: HTMLElement) => {
      const panelTop = panel.offsetTop;
      const panelHeight = panel.offsetHeight;
      const panelColor = panel.getAttribute('data-color') || '#ffffff';
  
      if (!activePanelFound && panelTop <= scrollPosition && (panelTop + panelHeight) > scrollPosition) {
        // Change background color and stop further checks
        this.renderer.setStyle(body, 'background-color', panelColor);
        activePanelFound = true;
      }
    });
  }
  
}
