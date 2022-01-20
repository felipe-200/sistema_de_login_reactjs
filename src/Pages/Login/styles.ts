import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  
  div {
    background: ${props => props.theme.colors.backgroundTertiary};
    width: 350px;
    height: 350px;
      
    padding: 15px;
    
    border-radius: 10px;
      

      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        text-align: center;
        margin-bottom: 10px;
        color: ${props => props.theme.colors.primary};
      }

      hr {
        margin-bottom: 10px;
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        label {
          margin-bottom: 5px;
          /* font-size: 14px; */
        }

        input {
          margin-bottom: 15px;
        }
      }

      a {
        text-decoration: none;
        margin-top: 10px;
        font-size: 14px;
        text-align: right;
        color: ${props => props.theme.colors.primary};

        &:hover{
          opacity: 0.6;
        }
      }
  }
  

  
  
`