import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebPage } from './web.page';

describe('WebPage', () => {
  let component: WebPage;
  let fixture: ComponentFixture<WebPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
