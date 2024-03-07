import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
