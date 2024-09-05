import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComputerPage } from './computer.page';

describe('ComputerPage', () => {
  let component: ComputerPage;
  let fixture: ComponentFixture<ComputerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
