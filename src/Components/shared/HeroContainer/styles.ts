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
`

export const Content = styled.div`
  background-image: url(${HeroContainerImg});
  width: 80%;
  height: 100%;
  background-size:cover;
`