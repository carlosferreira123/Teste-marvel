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
