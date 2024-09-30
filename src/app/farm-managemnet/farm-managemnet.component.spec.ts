import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmManagemnetComponent } from './farm-managemnet.component';

describe('FarmManagemnetComponent', () => {
  let component: FarmManagemnetComponent;
  let fixture: ComponentFixture<FarmManagemnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmManagemnetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmManagemnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
