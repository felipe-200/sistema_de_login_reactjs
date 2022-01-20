import styled from 'styled-components'

export const Header = styled.header`
  height: 5rem;
  width: 100%;
  padding: 0px 100px;

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textSecondary};

  display:flex;
  justify-content: space-between ;
  align-items: center;

`

export const IconHead = styled.span`
  cursor: pointer;
  width: 30px;
`