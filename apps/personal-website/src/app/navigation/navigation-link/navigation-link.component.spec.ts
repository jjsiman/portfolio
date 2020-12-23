import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationLinkComponent } from './navigation-link.component';
import { NavigationComponent } from '../navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationLinkComponent', () => {
  let component: NavigationLinkComponent;
  let fixture: ComponentFixture<NavigationLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MatIconModule,
        MatButtonModule
      ],
      declarations: [ NavigationLinkComponent ],
      providers: [
        {
          provide: NavigationComponent,
          useValue: { collasible: true }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
