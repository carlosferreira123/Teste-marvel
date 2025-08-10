import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid hsl(var(--border) / 0.4);
  background: hsl(var(--card) / 0.95);
  backdrop-filter: blur(8px);
  
  @supports (backdrop-filter: blur(8px)) {
    background: hsl(var(--card) / 0.8);
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

export const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const LogoSubtext = styled.span`
  color: hsl(var(--muted-foreground));
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;



export const CartButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: hsl(var(--primary) / 0.9);
    transform: translateY(-1px);
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  font-size: 0.75rem;
  font-weight: bold;
`;

export const CartButtonText = styled.span`
  display: none;
  
  @media (min-width: 640px) {
    display: inline;
  }
`;