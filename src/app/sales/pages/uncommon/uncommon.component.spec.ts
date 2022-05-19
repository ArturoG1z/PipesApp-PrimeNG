import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonComponent } from './uncommon.component';

describe('UncommonComponent', () => {
  let component: UncommonComponent;
  let fixture: ComponentFixture<UncommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
