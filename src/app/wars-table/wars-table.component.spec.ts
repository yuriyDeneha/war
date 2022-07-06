import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarsTableComponent } from './wars-table.component';

describe('WarsTableComponent', () => {
  let component: WarsTableComponent;
  let fixture: ComponentFixture<WarsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
