import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissoesComponent } from './submissoes.component';

describe('SubmissoesComponent', () => {
  let component: SubmissoesComponent;
  let fixture: ComponentFixture<SubmissoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
