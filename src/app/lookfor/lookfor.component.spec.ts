import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookforComponent } from './lookfor.component';

describe('LookforComponent', () => {
  let component: LookforComponent;
  let fixture: ComponentFixture<LookforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
