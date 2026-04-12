import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section class="section container" id="education">
      <h2 class="section-title neon-text-secondary">Education</h2>
      <div class="timeline">
        @for (edu of education; track edu.institution) {
          <div class="timeline-item neon-border">
            <div class="timeline-header flex-row">
              <h3 class="neon-text-primary">{{ edu.degree }}</h3>
              <span class="period neon-text-secondary">{{ edu.period }}</span>
            </div>
            <h4 class="company">{{ edu.institution }}</h4>
            <p>{{ edu.details }}</p>
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
export class EducationComponent {
  education = [
    {
      degree: 'Bachelor Of Engineering',
      institution: 'PSNA College of Engineering and Technology',
      period: '2019 – 2023',
      details: '7.5 CGPA'
    },
    {
      degree: 'HSC',
      institution: 'Velammal Matriculation Hr Sec School, Madurai',
      period: '2019',
      details: '60%'
    },
    {
      degree: 'SSLC',
      institution: 'Velammal Vidyalaya Viraganoor, Madurai',
      period: '2017',
      details: '80%'
    }
  ];
}
