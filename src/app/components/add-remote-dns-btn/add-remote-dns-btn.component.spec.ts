import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoteDnsBtnComponent } from './add-remote-dns-btn.component';

describe('AddRemoteDnsBtnComponent', () => {
  let component: AddRemoteDnsBtnComponent;
  let fixture: ComponentFixture<AddRemoteDnsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoteDnsBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoteDnsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
