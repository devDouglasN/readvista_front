import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  livros1 = [
    { title: 'A Guerra dos Tronos', img: 'assets/images/got-image1.jpg', available: true },
    { title: 'Fogo & Sangue', img: 'assets/images/got-image2.webp', available: true },
    { title: 'O Festim dos Corvos', img: 'assets/images/got-image3.jpg', available: true },
    { title: 'O Festim dos Corvos', img: 'assets/images/got-image3.jpg', available: false },
    { title: 'Fogo & Sangue', img: 'assets/images/got-image2.webp', available: true }
  ];

  livros2 = [
    { title: 'Blade - Vol. 7', img: 'https://example.com/livro6.jpg', available: true },
    { title: 'Lore Olympus', img: 'https://example.com/livro7.jpg', available: true },
    { title: 'Mordida - Sucesso no TikTok', img: 'https://example.com/livro8.jpg', available: true },
    { title: 'Martin Mystère', img: 'https://example.com/livro9.jpg', available: false },
    { title: 'Hokuto No Ken', img: 'https://example.com/livro10.jpg', available: true }
  ];

  config = {
    initialSlide: 0,
    spaceBetween: 0,
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
      delay: 15000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    speed: 5000,
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

  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit() {}
}
