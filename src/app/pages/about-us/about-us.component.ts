import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  constructor(private router: Router) {}

  navigateToProjects(): void {
    this.router.navigate(['/projects']);
  }

  navigateToProject(fragment: string): void {
    this.router.navigate(['/projects'], { fragment });
  }

}
