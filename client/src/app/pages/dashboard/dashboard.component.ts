import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title: string = 'Tableau de bord';

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  }

  setSelector(): void {
    const navItems = document.querySelectorAll('.nav-item');
    const url = this.router.url.split('/');
    navItems.forEach((element: Element) => {
      const isSelected = element.classList.contains('selected');
      if (isSelected) {
        element.classList.remove('selected');
      }
      const link = element.querySelector('a');
      const path = link?.getAttribute('routerlink');
      if (url.length > 2) {
        if (path == url[2]) {
          element.classList.add('selected');
        }
      } else {
        const pathDashboard = path?.split('/')[1];
        if (pathDashboard == url[1]) {
          element.classList.add('selected');
        }
      }
    });

  }

  onActivate(event: any): void {
    this.setSelector();
    
  }

  setTitle(): void {

  }

}
