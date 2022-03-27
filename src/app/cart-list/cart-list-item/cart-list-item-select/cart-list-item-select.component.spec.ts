import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListItemSelectComponent } from './cart-list-item-select.component';

describe('CartListItemSelectComponent', () => {
  let component: CartListItemSelectComponent;
  let fixture: ComponentFixture<CartListItemSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartListItemSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListItemSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
