import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListItemSelectComponent } from './product-list-item-select.component';

describe('ProductListItemSelectComponent', () => {
  let component: ProductListItemSelectComponent;
  let fixture: ComponentFixture<ProductListItemSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListItemSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
