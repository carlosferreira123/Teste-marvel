import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(var(--background));
`;

export const Content = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: hsl(var(--muted-foreground));
  margin-bottom: 1rem;
`;

export const ReturnLink = styled.a`
  color: hsl(var(--primary));
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: hsl(var(--primary)) / 0.8;
  }
`;