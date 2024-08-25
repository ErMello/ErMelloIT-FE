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
      socialLink: "https://www.github.com/ErMello",
      socialIcon: "logo-github",
      socialDisabled: false
    }
  ]

  footerResumeButton = {
    title: "Download Resume",
    /* ../../../assets/docs/resume/Resume_Matteo_Gelsomini.pdf */
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
      this.footerResumeButton.scss = "buttonResume";
    }
  }

  protected readonly window = window;
}
