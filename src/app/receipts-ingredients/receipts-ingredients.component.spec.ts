import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsIngredientsComponent } from './receipts-ingredients.component';

describe('ReceiptsIngredientsComponent', () => {
  let component: ReceiptsIngredientsComponent;
  let fixture: ComponentFixture<ReceiptsIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptsIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptsIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
