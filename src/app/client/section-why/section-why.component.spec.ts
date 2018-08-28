import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhyComponent } from './section-why.component';

describe('SectionWhyComponent', () => {
  let component: SectionWhyComponent;
  let fixture: ComponentFixture<SectionWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
