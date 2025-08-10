import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  min-height: 100vh;
  background: hsl(var(--background));
`;

export const HeroSection = styled(motion.section)`
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0.1;
`;

export const HeroContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
`;

export const HeroInner = styled.div`
  text-align: center;
  max-width: 64rem;
  margin: 0 auto;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: heroGlow 2s ease-in-out infinite alternate;

  @keyframes heroGlow {
    from {
      filter: brightness(1);
    }
    to {
      filter: brightness(1.2);
    }
  }
`;

export const HeroDescription = styled(motion.p)`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: hsl(var(--muted-foreground));
  margin-bottom: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroActions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const HeroButton = styled(motion.button)`
  display: inline-block;
  background: var(--gradient-primary);
  color: hsl(var(--primary-foreground));
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-hero);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;

export const ComicsSection = styled(motion.section)`
  padding: 4rem 0;
`;

export const ComicsContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ComicsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

export const ComicsTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: hsl(var(--foreground));
`;

export const ComicsSubtitle = styled(motion.p)`
  color: hsl(var(--muted-foreground));
  font-size: 1.125rem;
`;

export const LoadingGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const LoadingCard = styled(motion.div)`
  background: var(--gradient-card);
  border-radius: 0.5rem;
  padding: 1rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export const LoadingImage = styled.div`
  aspect-ratio: 3/4;
  background: hsl(var(--muted));
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

export const LoadingTitle = styled.div`
  height: 1rem;
  background: hsl(var(--muted));
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const LoadingSubtitle = styled.div`
  height: 1rem;
  background: hsl(var(--muted));
  border-radius: 0.25rem;
  width: 75%;
`;

export const ComicsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;