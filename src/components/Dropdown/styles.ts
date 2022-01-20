import styled from 'styled-components'

export const DropdownContainer = styled.div`
  strong {
    cursor: pointer;
    border-radius: 3px;    
    background-color: ${props => props.theme.colors.textSecondary};
    color: ${props => props.theme.colors.primary};
    
    width: 40px;
    height: 40px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  

`
export const DropdownContent = styled.div`
  position: absolute;
  right: 100px;
  margin-top: 7px;
  /* padding: 5px; */
  
  flex-direction: column;
  display: flex;
  min-width: 150px;
  
  background: ${props => props.theme.colors.backgroundSecondary};
  box-shadow: 3px 5px 5px 5px rgba(28, 28, 28, 0.3) ;
  

  span {
    display: block;
    padding: 10px;
    
    cursor: pointer;
    
    text-align: right;
    text-transform: capitalize;
    
    &:hover{
      background: ${props => props.theme.colors.primary};
    }
  }

`