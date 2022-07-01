import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarFormComponent } from './war-form.component';

describe('WarFormComponent', () => {
  let component: WarFormComponent;
  let fixture: ComponentFixture<WarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
