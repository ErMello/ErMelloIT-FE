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
            spanScss: "computerServices_websites",
            spanTxt: "WebSites",
            iconSrc: "../../../assets/icon/header/websites.svg",
            iconScss: "headerIcons"
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
            iconSrc: "../../../assets/icon/header/gaming.svg",
            iconScss: "headerIcons"
          },
          {
            spanScss: "computerServices_workstation",
            spanTxt: "WorkStations",
            iconSrc: "../../../assets/icon/header/workstation.svg",
            iconScss: "headerIcons"
          },/*
          {
            spanScss: "computerServices_laptop",
            spanTxt: "Laptop"
          },*/
          {
            spanScss: "computerServices_assistance",
            spanTxt: "Assistance",
            iconSrc: "../../../assets/icon/header/assistance.svg",
            iconScss: "headerIcons"

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
            iconSrc: "../../../assets/icon/header/websites.svg",
            iconScss: "headerIcons"
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
            iconSrc: "../../../assets/icon/header/gaming.svg",
            iconScss: "headerIcons"
          },
          {
            spanScss: "computerServices_workstation",
            spanTxt: "WorkStations",
            iconSrc: "../../../assets/icon/header/workstation.svg",
            iconScss: "headerIcons"
          },/*
          {
            spanScss: "computerServices_laptop",
            spanTxt: "Laptop"
          },*/
          {
            spanScss: "computerServices_assistance",
            spanTxt: "Assistance",
            iconSrc: "../../../assets/icon/header/assistance.svg",
            iconScss: "headerIcons"

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
