import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  headerLogoImg = {
    src: "../../assets/imgs/header_home_logo.png",
    title: "Matteo Gelsomini",
    alt: "Matteo Gelsomini",
    style_sm: "max-width: 40%; max-height: 60%",
    style_lg: "max-width: 80%; max-height: 100%"
  }

  headerMenuIcon = {
    class: "headerMenuIcon",
    name: ""
  }

  accordionMobileMenu = [
    {
      menuOption: {
        value: "webServices",
        label: "Web Services",
        divScss: "webServices",
        services: [
          {
            spanScss: "webServices_websites",
            spanTxt: "WebSites",
            icon: "globe"
          }
        ]
      },
    },
    {
      menuOption: {
        value: "computerServices",
        label: "Computer Services",
        divScss: "computerServices",
        services: [
          {
            spanScss: "computerServices_gaming",
            spanTxt: "Gaming",
            icon: "game-controller"
          },
          {
            spanScss: "computerServices_workstation",
            spanTxt: "WorkStations",
            icon: "code-working"
          },/*
          {
            spanScss: "computerServices_laptop",
            spanTxt: "Laptop"
          },*/
          {
            spanScss: "computerServices_assistance",
            spanTxt: "Assistance",
            icon: "help-circle"
          }
        ]
      }
    }
  ]
  accordionDesktopMenu = [
    {}
  ]
  desktopMenu = [
    {
      menuOption: {
        value: "webServices",
        label: "Web Services",
        labelScss: "desktopMenu_labelScss",
        services: [
          {
            spanScss: "computerServices_websites",
            spanTxt: "WebSites",
            icon: "globe"
          }
        ]
      }
    },
    {
      menuOption: {
        value: "computerServices",
        label: "Computer Services",
        labelScss: "desktopMenu_labelScss",
        services: [
          {
            spanScss: "computerServices_gaming",
            spanTxt: "Gaming",
            icon: "game-controller"
          },
          {
            spanScss: "computerServices_workstation",
            spanTxt: "WorkStations",
            icon: "code-working"
          },/*
          {
            spanScss: "computerServices_laptop",
            spanTxt: "Laptop"
          },*/
          {
            spanScss: "computerServices_assistance",
            spanTxt: "Assistance",
            icon: "help-circle"
          }
        ]
      }
    }
  ]

  activeDesktopMenuOption = {value: "", isActive: false, index: 0};
  isMobileMenuActive = false;
  headerMobileMenuScss: string = "headerMobileMenu";

  constructor() {
  }

  ngOnInit() {
    this.mobileMenu(this.isMobileMenuActive);
  }

  mobileMenu(isExpanded: boolean) {
    if (isExpanded) {
      this.headerMenuIcon.name = "close-sharp"
    } else if (!isExpanded) {
      this.headerMenuIcon.name = "menu-sharp"
    }

  }

  desktopDevicesMenu(optionSelected: string, index: number): void {
    if(this.activeDesktopMenuOption.value == ""){
      this.activeDesktopMenuOption.isActive = !this.activeDesktopMenuOption.isActive;
    }
    if(this.activeDesktopMenuOption.value != optionSelected){
      this.activeDesktopMenuOption.value = optionSelected;
    }
    else if(this.activeDesktopMenuOption.value == optionSelected) {
      this.activeDesktopMenuOption.isActive = !this.activeDesktopMenuOption.isActive;
      this.activeDesktopMenuOption.value = "";
    }
    this.activeDesktopMenuOption.index = index;
  }

}
