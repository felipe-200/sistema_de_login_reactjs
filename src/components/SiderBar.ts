import styled from 'styled-components'

export const SideBar = styled.div`
  width: 20%;
  height: calc(100vh - 5rem);

  color: ${props => props.theme.colors.textSecondary};
  background: ${props => props.theme.colors.textPrimary};

  display: flex;
  flex-direction: column;

  h4 {
    padding: 5px;
  }
`

export const SideBarItem = styled.div`

  padding: 15px;

  background-color: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.textSecondary};
  
  cursor: pointer;
  
  &:hover{
    background: ${props => props.theme.colors.textSecondary};
    color: ${props => props.theme.colors.textPrimary};
  }
`


export const Main = styled.main`
  background-color: ${props => props.theme.colors.backgroundTertiary};

  width: 100%;
  height: calc(100vh - 5rem);
  
  padding: 15px;
`