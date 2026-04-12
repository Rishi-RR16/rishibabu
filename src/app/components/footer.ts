import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer neon-border">
      <div class="container footer-content">
        <p class="neon-text-primary">SYS.MSG: EOF</p>
        <p>&copy; 2026 Rishi Babu. <a href="https://www.linkedin.com/in/rishibabusoftwaredeveloper/" target="_blank" style="text-decoration: underline;">LinkedIn</a>. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 4rem;
      text-align: center;
      border-bottom: none;
      border-left: none;
      border-right: none;
      padding-bottom: 2rem;
    }
    @media (max-width: 900px) {
      .footer {
        padding-bottom: 8rem;
      }
    }
  `]
})
export class FooterComponent {}
