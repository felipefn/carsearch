import styled from "styled-components";
import HeroContainerImg from '../../../assets/HeroContainer.png'

export const Container = styled.div`
  background: #F4F4F4;
  height: 25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  /* @media(min-width: 600px) {
    height: 50rem;
    width: auto;
  } */

`

   

export const Content = styled.div`
  background-image: url(${HeroContainerImg});
  width: 80%;
  height: 100%;
  background-size:cover;
  /* @media(min-width: 600px) {
    width: 100%;
  } */
`