import styled from 'styled-components'

export const DropdownContainer = styled.div`
  span {
    cursor: pointer;
    /* padding: 10px; */
    border-radius: 3px;
    
    display: flex;
    
    span {
      margin-left: 3px;
      display: block;
      width: 20px;
      font-size: px;
    }

  }
`
export const DropdownContent = styled.div`
  position: absolute;
  right: 10px;
  /* margin-top: 15px; */
  background: #282828;
  display: flex;
  width: 120px;
  flex-direction: column;
  /* align-items: center; */
  box-shadow: 3px 5px 10px 10px rgba(28, 28, 28, 0.5) ;

  span {
    display: block;
    padding: 10px;

    &:hover{
      background: #124559;
    }
  }

`