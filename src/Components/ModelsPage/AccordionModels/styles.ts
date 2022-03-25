import styled from "styled-components"

export const Container = styled.div`
  background: #F4F4F4;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 10px;

  
`
export const Content = styled.div`
  width: 50rem;

  .arrow {
    color: #FFFFFF;
  }

  .accordion {
    background: #0B3A5E;
    border-radius: 0.3rem;
  }

  .AccordionDetails{
    background: #F4F4F4;
    height:450px;
    overflow:auto;
  }

  .title {
    font-weight: bold;
    color: #FFFFFF;
    
  }

  ul {
    :hover{
      background: #e0e0e0;
    }
  }

  li {
    list-style-type: none;
    padding: 5px;
    color: #0B3A5E;
    font-weight: bold;
  }

  /* @media(min-width: 600px) {
    .accordion {
      height: 6rem;
      

   
    }

    .title {
    font-size: 2rem;
    }

    li {
      font-size: 1.5rem;
    }
  } */
`