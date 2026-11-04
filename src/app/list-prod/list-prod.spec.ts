import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProd } from './list-prod';

describe('ListProd', () => {
  let component: ListProd;
  let fixture: ComponentFixture<ListProd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
