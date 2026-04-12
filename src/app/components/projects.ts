import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="section container" id="projects">
      <h2 class="section-title neon-text-secondary">Projects</h2>
      <div class="projects-grid">
        @for (project of projects; track project.name) {
          <div class="project-card neon-border">
            <h3 class="neon-text-primary">{{ project.name }}</h3>
            <p class="tech-stack neon-text-secondary">Tech: {{ project.tech }}</p>
            <p class="team-size">Team size: {{ project.teamSize }}</p>
            <p class="project-desc">{{ project.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2rem;
    }
    .tech-stack {
      margin: 0.5rem 0 1rem;
      font-size: 0.9rem;
    }
    .team-size {
      font-size: 0.85rem;
      margin-bottom: 1rem;
      opacity: 0.7;
    }
    .project-desc {
      line-height: 1.5;
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'BetSmart - Online Betting Simulation Platform',
      teamSize: 3,
      tech: 'Angular, Node, Express, MySql',
      description: 'Built a sports betting simulation app with features like live odds, bet slips, wallet system, and real-time updates for events and results.'
    },
    {
      name: 'Jewellery ERP',
      teamSize: 5,
      tech: 'Angular',
      description: 'Developed a comprehensive ERP system tailored for jewellery businesses, streamlining inventory, sales, and purchase management. Enabled real-time stock insights and improved operational efficiency.'
    }
  ];
}
