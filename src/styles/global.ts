import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Light mode colors */
    --background: 220 10% 5%;
    --foreground: 220 10% 98%;
    --card: 220 8% 8%;
    --card-foreground: 220 10% 98%;
    --popover: 220 8% 8%;
    --popover-foreground: 220 10% 98%;
    --primary: 350 100% 68%;
    --primary-foreground: 220 10% 5%;
    --secondary: 30 80% 60%;
    --secondary-foreground: 220 10% 5%;
    --muted: 220 8% 15%;
    --muted-foreground: 220 5% 65%;
    --accent: 220 8% 18%;
    --accent-foreground: 220 10% 98%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 8% 18%;
    --input: 220 8% 18%;
    --ring: 350 100% 68%;
    --radius: 0.5rem;

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(350 100% 68%), hsl(350 100% 58%));
    --gradient-card: linear-gradient(145deg, hsl(220 8% 8%), hsl(220 8% 12%));
    --gradient-gold: linear-gradient(135deg, hsl(45 100% 70%), hsl(35 100% 60%));
    --gradient-hero: linear-gradient(135deg, hsl(350 100% 68% / 0.1), hsl(350 100% 58% / 0.2));

    /* Shadows */
    --shadow-glow: 0 0 40px hsl(350 100% 68% / 0.3);
    --shadow-card: 0 10px 30px -5px hsl(220 8% 0% / 0.3);
    --shadow-hero: 0 20px 40px -10px hsl(350 100% 68% / 0.4);

    /* Transitions */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .hero-gradient {
    background: var(--gradient-hero);
  }

  .card-gradient {
    background: var(--gradient-card);
  }

  .gold-gradient {
    background: var(--gradient-gold);
  }

  .glow-effect {
    box-shadow: var(--shadow-glow);
  }

  .transition-smooth {
    transition: var(--transition-smooth);
  }

  .transition-bounce {
    transition: var(--transition-bounce);
  }
`;

export const theme = {
  colors: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    card: 'hsl(var(--card))',
    cardForeground: 'hsl(var(--card-foreground))',
    primary: 'hsl(var(--primary))',
    primaryForeground: 'hsl(var(--primary-foreground))',
    secondary: 'hsl(var(--secondary))',
    secondaryForeground: 'hsl(var(--secondary-foreground))',
    muted: 'hsl(var(--muted))',
    mutedForeground: 'hsl(var(--muted-foreground))',
    accent: 'hsl(var(--accent))',
    accentForeground: 'hsl(var(--accent-foreground))',
    destructive: 'hsl(var(--destructive))',
    destructiveForeground: 'hsl(var(--destructive-foreground))',
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
  },
  gradients: {
    primary: 'var(--gradient-primary)',
    card: 'var(--gradient-card)',
    gold: 'var(--gradient-gold)',
    hero: 'var(--gradient-hero)',
  },
  shadows: {
    glow: 'var(--shadow-glow)',
    card: 'var(--shadow-card)',
    hero: 'var(--shadow-hero)',
  },
  transitions: {
    smooth: 'var(--transition-smooth)',
    bounce: 'var(--transition-bounce)',
  },
  radius: 'var(--radius)',
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
};