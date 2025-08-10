import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const PaginationButton = styled.button<{ $isActive?: boolean; $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid hsl(var(--border));
  background: ${props => props.$isActive ? 'hsl(var(--primary))' : 'hsl(var(--background))'};
  color: ${props => props.$isActive ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.$disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  &:hover:not(:disabled) {
    background: ${props => props.$isActive ? 'hsl(var(--primary))' : 'hsl(var(--accent))'};
    color: ${props => props.$isActive ? 'hsl(var(--primary-foreground))' : 'hsl(var(--accent-foreground))'};
  }
`;

export const PaginationNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PageButton = styled(PaginationButton)`
  width: 2.5rem;
  justify-content: center;
`;