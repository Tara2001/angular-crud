import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinfoComponent } from './sinfo.component';

describe('SinfoComponent', () => {
  let component: SinfoComponent;
  let fixture: ComponentFixture<SinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinfoComponent]
    });
    fixture = TestBed.createComponent(SinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
