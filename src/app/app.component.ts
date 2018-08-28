import { Component, ViewChild, ViewContainerRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('about', { read: ViewContainerRef }) aboutSection;
  @ViewChild('why', { read: ViewContainerRef }) whySection;
  @ViewChild('comm', { read: ViewContainerRef }) commSection;
  @ViewChild('testi', { read: ViewContainerRef }) testiSection;
  @ViewChild('contact', { read: ViewContainerRef }) contactSection;

  public fixed = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let num = document.documentElement.scrollTop;
    if ( num > 121 ) {
        this.fixed = true;
    } else if (this.fixed && num < 121) {
        this.fixed = false;
    }
  }

  scrollToSection(section: string) {
    switch (section) {
      case 'about':
        this.aboutSection.element.nativeElement.scrollIntoView({
          behavior:"smooth",
          block: "start", 
          inline: "nearest"
        });        
        break;

      case 'why':
        this.whySection.element.nativeElement.scrollIntoView({
          behavior:"smooth",
          block: "start", 
          inline: "nearest"
        });        
        break;        
    
      case 'comm':
        this.commSection.element.nativeElement.scrollIntoView({
          behavior:"smooth",
          block: "start", 
          inline: "nearest"
        });        
        break;

      case 'testi':
        this.testiSection.element.nativeElement.scrollIntoView({
          behavior:"smooth",
          block: "start", 
          inline: "nearest"
        });        
        break;

      case 'contact':
        this.contactSection.element.nativeElement.scrollIntoView({
          behavior:"smooth",
          block: "start", 
          inline: "nearest"
        });        
        break;               

      default:
        break;
    }
  }  
}
