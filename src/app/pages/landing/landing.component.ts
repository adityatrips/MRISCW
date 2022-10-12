import { Component, OnInit } from '@angular/core';

declare let particlesJS: any;
declare let $: any;

import { config } from 'src/assets/particles-config';
import '../../../assets/styles/owl.carousel.css';
import '../../../assets/styles/owl.theme.default.css';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  move() {
    window.location.href = '#events';
  }

  links: string[] = [
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
  ];

  evtTitle: string[] = [
    '#event-title1',
    '#event-title2',
    '#event-title3',
    '#event-title4',
  ];

  evtImage: string[] = [
    '0,#event-image1',
    '1,#event-image2',
    '2,#event-image3',
    '3,#event-image4',
  ];

  onMouseEnter(id: string) {
    for (let i of this.evtImage) {
      if (id == i.split(',')[1]) {
        $(id).addClass('magictime puffOut');
        $(this.evtTitle[Number(i.split(',')[0])]).addClass('o1');
      }
    }
  }
  onMouseLeave(id: string) {
    for (let i of this.evtImage) {
      if (id == i.split(',')[1]) {
        $(this.evtTitle[Number(i.split(',')[0])]).addClass('dn');
        setTimeout(() => {
          $(id).removeClass('magictime puffIn');
          $(this.evtTitle[Number(i.split(',')[0])]).removeClass('o1');
        }, 500);
        $(id).removeClass('magictime puffOut');
        $(id).addClass('magictime puffIn');
      }
    }
  }

  ngOnInit() {
    particlesJS('particles-js', config, null);
    for (let t of this.evtTitle) {
      $(t).addClass('o0');
    }
  }
}
