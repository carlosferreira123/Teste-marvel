import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  background: hsl(var(--background));
`;

export const CartContainer = styled.div`
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

export const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

export const EmptyCartIcon = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto 1rem;
  color: hsl(var(--muted-foreground));
`;

export const EmptyCartTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: hsl(var(--foreground));
`;

export const EmptyCartDescription = styled.p`
  color: hsl(var(--muted-foreground));
  margin-bottom: 2rem;
`;

export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CartTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: hsl(var(--foreground));
`;

export const ClearButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.375rem;
  background: hsl(var(--background));
  color: hsl(var(--destructive));
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: hsl(var(--destructive));
    background: hsl(var(--destructive)) / 0.1;
  }
`;

export const CartItem = styled.div`
  background: var(--gradient-card);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid hsl(var(--border));
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const ItemImage = styled.div`
  width: 5rem;
  height: 7rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ItemTitle = styled(Link)`
  font-weight: 600;
  font-size: 1.125rem;
  color: hsl(var(--foreground));
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: hsl(var(--primary));
  }
`;

export const ItemMeta = styled.p`
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const ItemPrice = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  color: hsl(var(--primary));
  margin-top: 0.5rem;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.375rem;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  cursor: pointer;
  transition: all 0.3s ease;

  ${props => props.$disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  &:hover:not(:disabled) {
    background: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
`;

export const QuantityDisplay = styled.span`
  width: 2rem;
  text-align: center;
  font-weight: 500;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid hsl(var(--border));
  border-radius: 0.375rem;
  background: hsl(var(--background));
  color: hsl(var(--destructive));
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: hsl(var(--destructive));
    background: hsl(var(--destructive)) / 0.1;
  }
`;

export const OrderSummary = styled.div`
  background: var(--gradient-card);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid hsl(var(--border));
  position: sticky;
  top: 1.5rem;
  height: fit-content;
`;

export const SummaryTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: hsl(var(--foreground));
`;

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryLabel = styled.span`
  color: hsl(var(--foreground));
`;

export const SummaryValue = styled.span<{ $highlight?: boolean }>`
  color: ${props => props.$highlight ? 'hsl(var(--secondary))' : 'hsl(var(--foreground))'};
  font-weight: ${props => props.$highlight ? '500' : 'normal'};
`;

export const SummaryDivider = styled.div`
  border-top: 1px solid hsl(var(--border));
  padding-top: 0.75rem;
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const TotalLabel = styled.span`
  color: hsl(var(--foreground));
`;

export const TotalValue = styled.span`
  color: hsl(var(--primary));
`;

export const CheckoutButton = styled.button`
  width: 100%;
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

export const ShippingNote = styled.p`
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  text-align: center;
  margin-top: 1rem;
`;