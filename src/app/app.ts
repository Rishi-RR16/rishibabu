import { Component, effect, signal } from '@angular/core';
import { HeaderComponent } from './components/header';
import { HeroComponent } from './components/hero';
import { AboutComponent } from './components/about';
import { SkillsComponent } from './components/skills';
import { ExperienceComponent } from './components/experience';
import { EducationComponent } from './components/education';
import { ProjectsComponent } from './components/projects';
import { FooterComponent } from './components/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  theme = signal<'light' | 'dark'>('dark');

  constructor() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      this.theme.set(savedTheme);
    }
    
    effect(() => {
      const current = this.theme();
      document.documentElement.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
    });
  }

  toggleTheme() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }
}
