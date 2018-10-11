import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-contact',
  templateUrl: './about-contact.component.html',
  styleUrls: ['./about-contact.component.css']
})
export class AboutContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vimeoLink: string = 'http://vimeo.com/anniehua';
  vimeoTooltip: string = 'Watch my other videos on Vimeo';
  linkedInLink: string = 'http://fr.linkedin.com/in/anniehua3d';
  linedInTooltip: string = 'View my professional profile on LinkedIn';
  gmailAddress: string = 'anniehua.contact@gmail.com';
  gmailLink: string = 'mailto:' + this.gmailAddress;
  gmailTooltip: string = 'Contact me';
}
