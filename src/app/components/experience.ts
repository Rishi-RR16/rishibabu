import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="section container" id="experience">
      <h2 class="section-title neon-text-secondary">Experience Log</h2>
      <div class="timeline">
        @for (job of experience; track job.period) {
          <div class="timeline-item neon-border">
            <div class="timeline-header flex-row">
              <h3 class="neon-text-primary">{{ job.role }}</h3>
              <span class="period neon-text-secondary">{{ job.period }}</span>
            </div>
            <h4 class="company">{{ job.company }}</h4>
            <p>{{ job.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-left: 2px dashed var(--border-color);
      padding-left: 2rem;
      margin-left: 1rem;
    }
    .timeline-item {
      position: relative;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -2.8rem;
      top: 1.5rem;
      width: 1rem;
      height: 1rem;
      background-color: var(--bg-color);
      border: 2px solid var(--secondary);
      border-radius: 50%;
      box-shadow: var(--shadow-secondary);
    }
    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .company {
      color: var(--text-color);
      opacity: 0.8;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    .period {
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      .timeline {
        margin-left: 0.5rem;
        padding-left: 1rem;
      }
      .timeline-item::before {
        left: -1.7rem;
        width: 12px;
        height: 12px;
      }
      .timeline-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class ExperienceComponent {
  experience = [
    {
      role: 'Full Stack Developer',
      company: 'Bridge Labz',
      period: 'Dec 2025 - Present',
      description: 'Creating software applications and developing a portfolio website using the Angular framework.'
    },
    {
      role: 'Full Stack Developer',
      company: 'Agaram Solutions',
      period: '2023 - Dec 2025',
      description: 'Developed full-stack web applications using Angular for responsive frontends and Spring Boot for scalable backends. Designed and integrated RESTful APIs, built reusable Angular components, and optimized Spring Boot services.'
    }
  ];
}
