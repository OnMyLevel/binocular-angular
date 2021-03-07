import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDnsComponent } from './remote-dns.component';

describe('RemoteDnsComponent', () => {
  let component: RemoteDnsComponent;
  let fixture: ComponentFixture<RemoteDnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteDnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
