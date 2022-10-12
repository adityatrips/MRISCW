import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

export const fadeAnim = trigger('fadeAnim', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0, position: 'absolute' })]),
    query(':leave', [
      style({ opacity: 1 }),
      animate('0.3s', style({ opacity: 0, position: 'absolute' })),
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.3s', style({ opacity: 1, position: 'absolute' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
