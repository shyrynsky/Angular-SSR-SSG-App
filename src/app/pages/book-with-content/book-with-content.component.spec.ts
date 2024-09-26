import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWIthContentComponent } from './book-with-content.component';

describe('BookWIthContentComponent', () => {
  let component: BookWIthContentComponent;
  let fixture: ComponentFixture<BookWIthContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookWIthContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookWIthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
