import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  background: hsl(var(--background));
`;

export const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: hsl(var(--muted-foreground));
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: hsl(var(--primary));
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingContent = styled.div`
  text-align: center;
`;

export const LoadingTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: hsl(var(--foreground));
`;

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundContent = styled.div`
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: hsl(var(--foreground));
`;

export const ComicGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CoverSection = styled.div`
  position: relative;
`;

export const CoverImage = styled.div`
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--gradient-card);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AvailabilityBadge = styled.div<{ $variant: 'default' | 'secondary' | 'destructive' }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props =>
        props.$variant === 'default' ? 'hsl(var(--primary))' :
            props.$variant === 'secondary' ? 'hsl(var(--secondary))' :
                'hsl(var(--destructive))'
    };
  color: ${props =>
        props.$variant === 'default' ? 'hsl(var(--primary-foreground))' :
            props.$variant === 'secondary' ? 'hsl(var(--secondary-foreground))' :
                'hsl(var(--destructive-foreground))'
    };
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TitleSection = styled.div``;

export const ComicTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const ComicSeries = styled.p`
  font-size: 1.25rem;
  color: hsl(var(--muted-foreground));
`;

export const MetaSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const RatingText = styled.span`
  font-weight: 500;
  color: hsl(var(--foreground));
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: hsl(var(--muted-foreground));
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  color: hsl(var(--foreground));
`;

export const CreatorsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CreatorCard = styled.div`
  background: var(--gradient-card);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid hsl(var(--border));
`;

export const CreatorTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: hsl(var(--foreground));
`;

export const CreatorList = styled.ul`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CreatorItem = styled.li`
  margin-bottom: 0.25rem;
`;

export const CharactersCard = styled.div`
  background: var(--gradient-card);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid hsl(var(--border));
`;

export const CharactersTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: hsl(var(--foreground));
`;

export const CharactersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const CharacterBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
`;

export const PurchaseSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: var(--gradient-card);
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
`;

export const Price = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  color: hsl(var(--primary));
`;

export const AddToCartButton = styled.button<{ $disabled?: boolean; $variant?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;

  ${props => props.$disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${props => props.$variant === 'outline' ? `
    background: hsl(var(--background));
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));
  ` : `
    background: var(--gradient-primary);
    color: hsl(var(--primary-foreground));
    box-shadow: var(--shadow-hero);
  `}

  &:hover:not(:disabled) {
    ${props => props.$variant === 'outline' ? `
      background: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    ` : `
      transform: translateY(-1px);
      box-shadow: var(--shadow-hero);
    `}
  }
`;

export const CheckoutButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--gradient-primary);
  color: hsl(var(--primary-foreground));
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-hero);
  }
`;