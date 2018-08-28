import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-section-testimonials',
  templateUrl: './section-testimonials.component.html',
  styleUrls: ['./section-testimonials.component.css']
})
export class SectionTestimonialsComponent implements OnInit {
  @HostBinding('class.container') hostClass: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
