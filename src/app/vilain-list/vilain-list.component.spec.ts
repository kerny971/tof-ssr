import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilainListComponent } from './vilain-list.component';

describe('VilainListComponent', () => {
  let component: VilainListComponent;
  let fixture: ComponentFixture<VilainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
