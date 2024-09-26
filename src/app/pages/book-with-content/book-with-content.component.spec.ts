import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWithContentComponent } from './book-with-content.component';

describe('BookWIthContentComponent', () => {
  let component: BookWithContentComponent;
  let fixture: ComponentFixture<BookWithContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookWithContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookWithContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
