import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;
  height: 350px;

  background: #e5e5e5;

  border-radius: 10px;

    div {
      padding: 15px;

      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        text-align: center;
        margin-bottom: 10px;
        color: #254E70;
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
          font-size: 14px;
        }

        input {
          margin-bottom: 10px;
        }
      }

      a {
        text-decoration: none;
        margin-top: 10px;
        font-size: 14px;
        text-align: right;
        color: #254E70;

        &:hover{
          opacity: 0.6;
        }
      }
  }
  

  
  
`