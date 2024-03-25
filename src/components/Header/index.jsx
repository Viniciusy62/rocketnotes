import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/viniciusy62.png"
          alt="Foto de usuário"
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>Vinicius de Andrade</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}