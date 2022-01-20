import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px;

  font-size: 16px;
  
  background: ${props => props.color ? props.color : props.theme.colors.primary};
  
  border: 0;
  border-radius: 3px;

  color: ${props => props.theme.colors.textSecondary};

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

`