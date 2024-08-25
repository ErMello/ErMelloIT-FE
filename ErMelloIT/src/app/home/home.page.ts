import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import {Autoplay, Pagination, Navigation} from "swiper/modules";

Swiper.use([Autoplay, Pagination, Navigation])
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  isWebAppReady = false;

  homeSwiperSlides = [
    {
      title: "Web Services",
      alt: "Web Services",
      descr: "Web Services",
      scssClass: "homeSlideImg",
      src: "../../assets/imgs/home/home-websites.png"
    },
    {
      title: "Computer Services",
      alt: "Computer Services",
      descr: "Computer Services",
      scssClass: "homeSlideImg",
      src: "../../assets/imgs/home/home-computerServices.png"
    }
  ]
  constructor() {}

  ngOnInit() {
  }

}
