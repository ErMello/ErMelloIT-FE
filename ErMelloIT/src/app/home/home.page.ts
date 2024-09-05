import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {SwiperOptions} from 'swiper/types';
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import {Router} from "@angular/router";

Swiper.use([Autoplay, Pagination, Navigation])

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  isWebAppReady = false;
  svgWhite = "";


  homeSwiperSlides = [
    {
      title: "Web Services",
      alt: "Web Services",
      descr: "Web Services",
      scssClass: "homeSlideImg",
      src: "../../assets/imgs/home/home-websites.png",
      buttonClick: "/services/web"
    },
    {
      title: "Computer Services",
      alt: "Computer Services",
      descr: "Computer Services",
      scssClass: "homeSlideImg",
      src: "../../assets/imgs/home/home-computerServices.png",
      buttonClick: "/services/computer"
    }
  ]

  techStackWeb = [
    {
      title: "HTML5",
      alt: "HTML5",
      src: "../../assets/icon/home/html5.svg",
      scssClass: "icon64 svgDarkRed marginRL2_5"
    },
    {
      title: "CSS3",
      alt: "CSS3",
      src: "../../assets/icon/home/css3.svg",
      scssClass: "icon64 svgDarkBlue marginRL2_5"
    },
    {
      title: "Ionic",
      alt: "Ionic",
      src: "../../assets/icon/home/ionic.svg",
      scssClass: "icon64 marginRL2_5"
    },
    {
      title: "Angular",
      alt: "Angular",
      src: "../../assets/icon/home/angular.svg",
      scssClass: "icon64 marginRL2_5"
    },
    {
      title: "NodeJs",
      alt: "NodeJs",
      src: "../../assets/icon/home/nodejs.svg",
      scssClass: "icon64 marginRL2_5"
    },
    {
      title: "Java",
      alt: "Java",
      src: "../../assets/icon/home/java.svg",
      scssClass: "icon64 marginRL2_5"
    },
    {
      title: "SpringBoot",
      alt: "SpringBoot",
      src: "../../assets/icon/home/springboot.svg",
      scssClass: "icon64 marginRL2_5 svgGreen"
    }
  ]

  computerBrands = [
    {
      title: "MSI",
      alt: "MSI",
      src: "../../assets/icon/home/msi-gaming.svg",
      scssClass: "icon64 marginRL2_5"
    },
    {
      title: "Corsair",
      alt: "Corsair",
      src: "../../assets/icon/home/corsair.svg",
      scssClass: ""
    },
    {
      title: "Intel",
      alt: "Intel",
      src: "../../assets/icon/home/intel.svg",
      scssClass: "icon64 marginRL2_5"
    },
    {
      title: "AMD",
      alt: "AMD",
      src: "../../assets/icon/home/amd.svg",
      scssClass: ""
    },
    {
      title: "Nvidia",
      alt: "Nvidia",
      src: "../../assets/icon/home/nvidia.svg",
      scssClass: "icon64 marginRL2_5"
    }

  ]

  homeWebServicesDesc = "We develop WebSites and WebApps for individuals and small companies at competitive prices" +
    " and tailored to their need. Our software is written from scratch using modern frameworks," +
    " giving our customers the possibility to fully customize their product.";

  homeComputerServicesDesc = "Our services are not limited to software development! Depending on" +
    " your necessities, we offer support with your desktop devices. From new work stations to gaming," +
    " we assemble customized computers, choosing the right components for the workload it will need to sustain.";

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.initSvgStyle();
  }

  /**
   * Adapt svg based on theme selected
   */
  initSvgStyle(): void {
    Object.keys(this.computerBrands).forEach(key => {
      // @ts-ignore
      switch (this.computerBrands[key].title) {

        case "Corsair":
        case "AMD":
          if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            // @ts-ignore
            this.computerBrands[key].scssClass = "icon64 marginRL2_5"
          } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // @ts-ignore
            this.computerBrands[key].scssClass = "icon64 marginRL2_5 svgWhite"
          }
      }
    })
  }

  navigateTo(url: string) {
    this.router.navigate([url])
  }

}
