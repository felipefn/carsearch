import { Container } from "./styles";

import logoImg from '../../../assets/logo.png'

export function Header() {
  return(
    <Container>
      <a href="" >
        <img src={logoImg} alt="" />
      </a>
    </Container>
  )
}