import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  overflow: hidden;
  background: linear-gradient(135deg, hsl(var(--card)), hsl(var(--card) / 0.8));
  border: 1px solid hsl(var(--border) / 0.5);
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: hsl(var(--primary) / 0.5);
    box-shadow: 0 10px 30px -10px hsl(var(--primary) / 0.3);
    transform: translateY(-2px);
  }
`;

export const ImageContainer = styled(Link)`
  position: relative;
  display: block;
  aspect-ratio: 3/4;
  overflow: hidden;
`;

export const ComicImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const BadgeContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const Badge = styled.span<{ variant: 'available' | 'pre-order' | 'out-of-stock' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    switch (props.variant) {
      case 'available':
        return `
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        `;
      case 'pre-order':
        return `
          background: hsl(var(--secondary));
          color: hsl(var(--secondary-foreground));
        `;
      case 'out-of-stock':
        return `
          background: hsl(var(--destructive));
          color: hsl(var(--destructive-foreground));
        `;
      default:
        return `
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        `;
    }
  }}
`;

export const RatingContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: hsl(var(--background) / 0.8);
  backdrop-filter: blur(4px);
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
`;

export const RatingText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: hsl(var(--foreground));
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const Title = styled(Link)`
  display: block;
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: hsl(var(--foreground));
  text-decoration: none;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: color 0.2s ease;
  
  &:hover {
    color: hsl(var(--primary));
  }
`;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 1rem 1rem;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: hsl(var(--primary));
`;

export const AddButton = styled.button<{ disabled?: boolean; variant?: 'default' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.disabled ? `
    opacity: 0.5;
    cursor: not-allowed;
    background: hsl(var(--muted));
    color: hsl(var(--muted-foreground));
    border: 1px solid hsl(var(--border));
  ` : props.variant === 'outline' ? `
    background: transparent;
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));
    
    &:hover {
      background: hsl(var(--accent));
    }
  ` : `
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    
    &:hover {
      background: hsl(var(--primary) / 0.9);
      transform: translateY(-1px);
    }
  `}
`;