import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section container" id="about">
      <h2 class="section-title neon-text-secondary">Summary</h2>
      <div class="neon-border summary-card">
        <p>
          Full stack Developer with 2 years of experience building responsive web applications using Angular, TypeScript, and Java Spring Boot. Skilled in creating user-friendly interfaces and working with REST APIs. Quick learner, good problem solver, and eager to grow in a dynamic team.
        </p>
      </div>
    </section>
  `,
  styles: [`
    .summary-card p {
      font-size: 1.1rem;
      line-height: 1.6;
    }
  `]
})
export class AboutComponent {}
