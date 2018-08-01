import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DantistListComponent } from './dantist-list.component';

describe('DantistListComponent', () => {
  let component: DantistListComponent;
  let fixture: ComponentFixture<DantistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DantistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DantistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
