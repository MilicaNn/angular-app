import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTreningComponent } from './previous-trening.component';

describe('PreviousTreningComponent', () => {
  let component: PreviousTreningComponent;
  let fixture: ComponentFixture<PreviousTreningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousTreningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousTreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
