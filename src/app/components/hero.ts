import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="section hero-section" id="hero">
      <div class="container hero-content">
        <h2 class="greeting neon-text-secondary">Hello. I am</h2>
        <h1 class="glitch name-title neon-text-primary" data-text="RISHI BABU">RISHI BABU</h1>
        <h3 class="role">Full Stack Developer</h3>
        <div class="contact-bar">
          <span>&#9993; rishibabusoftwaredeveloper@gmail.com</span>
          <span>&#9742; 9360443341</span>
          <span><a href="https://www.linkedin.com/in/rishibabusoftwaredeveloper/" target="_blank">LinkedIn Profile</a></span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 80vh;
      display: flex;
      align-items: center;
    }
    .hero-content {
      text-align: left;
    }
    .greeting {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .name-title {
      font-size: 5rem;
      margin-bottom: 0.5rem;
      font-family: var(--font-logo);
    }
    .role {
      font-size: 2rem;
      color: var(--accent);
      margin-bottom: 2rem;
    }
    .contact-bar {
      display: flex;
      gap: 2rem;
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      .hero-content {
        text-align: center;
        padding: 0 1rem;
      }
      .name-title {
        font-size: 2.8rem;
        word-break: break-word;
      }
      .role {
        font-size: 1.5rem;
      }
      .contact-bar {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
      }
    }
  `]
})
export class HeroComponent { }
