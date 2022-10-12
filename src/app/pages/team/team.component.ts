import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  constructor() {}

  members: any[] = [
    [
      {
        image: 'https://via.placeholder.com/500',
        name: 'lorem',
        post: 'lorem',
        email: 'lorem',
        phone: 'lorem',
      },
      {
        image: 'https://via.placeholder.com/500',
        name: 'lorem',
        post: 'lorem',
        email: 'lorem',
        phone: 'lorem',
      },
      {
        image: 'https://via.placeholder.com/500',
        name: 'lorem',
        post: 'lorem',
        email: 'lorem',
        phone: 'lorem',
      },
    ],
  ];

  ngOnInit(): void {}
}
