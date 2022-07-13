import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarsTableRowComponent } from './wars-table-row.component';

describe('WarsTableRowComponent', () => {
  let component: WarsTableRowComponent;
  let fixture: ComponentFixture<WarsTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarsTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarsTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
