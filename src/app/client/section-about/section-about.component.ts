import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.css']
})
export class SectionAboutComponent implements OnInit {
  @HostBinding('class.container') hostClass: boolean = true;
  @Output() contactClick = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
