import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListItemCreateComponent } from './product-list-item-create.component';

describe('ProductListItemCreateComponent', () => {
  let component: ProductListItemCreateComponent;
  let fixture: ComponentFixture<ProductListItemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListItemCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
