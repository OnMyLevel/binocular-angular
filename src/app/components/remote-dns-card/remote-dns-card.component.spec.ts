import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDnsCardComponent } from './remote-dns-card.component';

describe('RemoteDnsCardComponent', () => {
  let component: RemoteDnsCardComponent;
  let fixture: ComponentFixture<RemoteDnsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteDnsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDnsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
