import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Book } from '../../../Model/book';
import { BookService } from '../../../Services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookListComponent implements OnInit {
  livros: Book[] = [];

  config = {
    initialSlide: 0,
    spaceBetween: 25,
    navigation: true,
    centeredSlides: true,
    keyboard: {
      enabled: true
    },
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    speed: 1000,
    grabCursor: true,

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      930: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  };
  dataSource: any;

  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      console.log(response); // Log the response to verify the data structure
      this.livros = response;
    });
  }

  onSlideChange() {
    console.log('slide change');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
