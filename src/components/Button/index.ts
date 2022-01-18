import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px;

  font-size: 16px;
  
  background: ${props => props.color ? props.color : '#124559'};
  
  border: 0;
  border-radius: 3px ;

  color: #f5f5f5;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

`