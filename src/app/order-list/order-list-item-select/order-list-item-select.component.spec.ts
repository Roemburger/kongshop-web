import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListItemSelectComponent } from './order-list-item-select.component';

describe('OrderListItemSelectComponent', () => {
  let component: OrderListItemSelectComponent;
  let fixture: ComponentFixture<OrderListItemSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListItemSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListItemSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
