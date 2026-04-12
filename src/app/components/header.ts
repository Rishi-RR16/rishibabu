import { Component, Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="logo neon-text-primary">RB</div>
      
      <!-- Hamburger Icon -->
      <button class="hamburger neon-text-secondary" (click)="toggleMenu()">
        @if (!isMenuOpen()) {
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        } @else {
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        }
      </button>

      <!-- Nav Links -->
      <div class="nav-links" [class.open]="isMenuOpen()">
        <a href="#about" (click)="closeMenu()">About</a>
        <a href="#skills" (click)="closeMenu()">Skills</a>
        <a href="#experience" (click)="closeMenu()">Experience</a>
        <a href="#projects" (click)="closeMenu()">Projects</a>
        <button class="theme-toggle neon-border" (click)="toggleTheme.emit(); closeMenu()">
          {{ theme === 'dark' ? '☀' : '☾' }}
        </button>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      position: sticky;
      top: 1rem;
      z-index: 1000;
      padding: 0 1rem;
    }
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 2rem;
      width: 100%;
      max-width: 900px;
      position: relative;
      
      /* Capsule & Glassmorphism */
      background: color-mix(in srgb, var(--card-bg) 75%, transparent);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-radius: 50px;
      
      /* 3D Appearance */
      border: 1px solid var(--border-color);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3),
                  inset 0 1px 2px rgba(255, 255, 255, 0.05),
                  inset 0 -1px 2px rgba(0, 0, 0, 0.1);
                  
      transition: all 0.4s ease;
    }
    .logo {
      font-family: var(--font-logo);
      font-size: 1.2rem;
      margin-bottom: -4px; /* visually align with press start 2p */
    }
    .hamburger {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--secondary);
      transition: transform 0.3s ease;
    }
    .hamburger:hover {
      text-shadow: var(--shadow-secondary);
      transform: scale(1.1);
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    .nav-links a {
      font-family: var(--font-heading);
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 1px;
    }
    .nav-links a:hover {
      color: var(--secondary);
      text-shadow: var(--shadow-secondary);
    }
    .theme-toggle {
      background: color-mix(in srgb, var(--bg-color) 50%, transparent);
      border: 1px solid var(--border-color);
      border-radius: 50px;
      cursor: pointer;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      color: inherit;
      transition: all 0.3s ease;
      font-family: var(--font-heading);
      text-transform: uppercase;
    }
    .theme-toggle:hover {
      border-color: var(--secondary);
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    }
    
    /* Mobile/Tablet Styles */
    @media (max-width: 900px) {
      :host {
        position: fixed;
        top: auto;
        bottom: 1.5rem;
        left: 0;
        right: 0;
        padding: 0;
      }
      .navbar {
        width: 90%;
        margin: 0 auto;
        padding: 0.8rem 1.5rem;
      }
      .hamburger {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 5px;
      }
      .nav-links {
        flex-direction: column;
        position: absolute;
        bottom: calc(100% + 20px);
        right: 0;
        left: 0;
        background: color-mix(in srgb, var(--card-bg) 95%, transparent);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1px solid var(--border-color);
        box-shadow: 0 -8px 32px 0 rgba(0, 0, 0, 0.4);
        border-radius: 20px;
        padding: 2rem;
        gap: 1.5rem;
        
        /* Hidden by default */
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px) scale(0.95);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .nav-links.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }
      .theme-toggle {
        width: 100%;
        margin-top: 1rem;
      }
      .nav-links a {
        font-size: 1.1rem;
        width: 100%;
        text-align: center;
        padding: 0.5rem;
      }
    }
  `]
})
export class HeaderComponent {
  @Input() theme: 'light' | 'dark' = 'dark';
  @Output() toggleTheme = new EventEmitter<void>();

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
