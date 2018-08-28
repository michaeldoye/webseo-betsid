import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCommissionComponent } from './section-commission.component';

describe('SectionCommissionComponent', () => {
  let component: SectionCommissionComponent;
  let fixture: ComponentFixture<SectionCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
