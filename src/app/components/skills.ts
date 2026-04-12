import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="section container" id="skills">
      <h2 class="section-title neon-text-secondary">Skills Matrix</h2>
      <div class="skills-grid">
        @for (skill of skills; track skill) {
          <div class="skill-item neon-border">{{ skill }}</div>
        }
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 1.5rem;
    }
    .skill-item {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-family: var(--font-heading);
      letter-spacing: 1px;
      min-height: 80px;
    }
  `]
})
export class SkillsComponent {
  skills = ['Java', 'HTML', 'CSS', 'Javascript', 'React Js', 'Angular', 'Node Js', 'SQL'];
}
