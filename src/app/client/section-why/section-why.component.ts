import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-section-why',
  templateUrl: './section-why.component.html',
  styleUrls: ['./section-why.component.css']
})
export class SectionWhyComponent implements OnInit {
  @HostBinding('class.container') hostClass: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
