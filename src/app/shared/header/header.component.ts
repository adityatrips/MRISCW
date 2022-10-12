import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  toggleSidebar() {
    const backdrop = <HTMLElement>document.querySelector('.sidebar-backdrop');
    const sidebar = <HTMLElement>document.querySelector('.sidebar');
    if (backdrop.style.display === 'none') {
      sidebar.style.display = 'block';
      sidebar.style.right = '0';
      backdrop.style.display = 'block';
      setTimeout(() => {
        backdrop.style.opacity = '0.7';
      }, 1);
    } else {
      sidebar.style.right = '-100%';
      backdrop.style.opacity = '0';
      setTimeout(() => {
        backdrop.style.display = 'none';
      }, 500);
    }
  }

  move() {
    window.location.href = '#events';
  }

  hideSidebar() {
    const backdrop = <HTMLElement>document.querySelector('.sidebar-backdrop');
    const sidebar = <HTMLElement>document.querySelector('.sidebar');
    sidebar.style.right = '-100%';
    backdrop.style.opacity = '0';
    setTimeout(() => {
      backdrop.style.display = 'none';
    }, 500);
  }

  ngOnInit(): void {}
}
