import { trigger, transition, style, animate, group } from '@angular/animations';

export const fadeUpInAnimation = trigger('fadeUpIn', [
  transition(':enter', [
    style({ transform: 'translateY(50%)', opacity: 0 }),
    group([
      animate('1s ease-out',
        style({ transform: 'translateY(0%)' }),
      ),
      animate('600ms 400ms ease-out',
        style({ opacity: 1 })
      )
    ])
  ])
])