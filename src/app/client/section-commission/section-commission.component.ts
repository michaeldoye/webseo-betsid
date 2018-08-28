import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-commission',
  templateUrl: './section-commission.component.html',
  styleUrls: ['./section-commission.component.css']
})
export class SectionCommissionComponent implements OnInit {
  @HostBinding('class.container') hostClass: boolean = true;
  @Output() contactClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
