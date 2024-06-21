import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListAdmComponent } from './book-list-adm.component';

describe('BookListAdmComponent', () => {
  let component: BookListAdmComponent;
  let fixture: ComponentFixture<BookListAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
