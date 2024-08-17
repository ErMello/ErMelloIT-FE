import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  footerSocials = [
    {
      socialName: "Linkedin",
      socialLink: "https://www.linkedin.com/in/ermello/",
      socialIcon: "logo-linkedin",
      socialDisabled: false
    },
    {
      socialName: "Instagram",
      socialLink: "",
      socialIcon: "logo-instagram",
      socialDisabled: true
    },
    {
      socialName: "GitHub",
      socialLink: "",
      socialIcon: "logo-github",
      socialDisabled: true
    }
  ]

  footerResumeButton = {
    title: "Download Resume",
    url: "",
    scss: "",
    disabled: true
  }

  constructor() {
  }

  ngOnInit() {
    if(this.footerResumeButton.url == ""){
      this.footerResumeButton.disabled = true;
      this.footerResumeButton.scss = "buttonDisabled";
    } else {
      this.footerResumeButton.disabled = false;
      this.footerResumeButton.scss = "button";
    }
  }

  protected readonly window = window;
}
