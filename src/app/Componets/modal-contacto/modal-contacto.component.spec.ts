import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContactoComponent } from './modal-contacto.component';

describe('ModalContactoComponent', () => {
  let component: ModalContactoComponent;
  let fixture: ComponentFixture<ModalContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContactoComponent]
    });
    fixture = TestBed.createComponent(ModalContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
