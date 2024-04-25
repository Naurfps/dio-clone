import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';

import {Container, Title, TitleLogin, Wrapper, Column, Text, LoginButton, SubtitleLogin, Row} from './styles'

const SignUp = () => {

  const navigate = useNavigate();

  const handleGoToFeed = () => {
    navigate('/feed')
  }

  const handleGoToLogin = () => {
    navigate('/login')
  }

  return (<>
      <Header />
      <Container>
        <Column>
          <Title>
            A Plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas
          </Title>
        </Column>
        <Column>
        <Wrapper>
          <TitleLogin>Começe agora grátis</TitleLogin>
          <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
          <form>
            <Input placeholder="Nome Completo" leftIcon={<MdAccountCircle/>}/>
            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
            <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
            <Button title="Criar minha conta" variant="secondary" onClick={handleGoToFeed}/>
          </form>
            <Row>
            <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</SubtitleLogin>
            </Row>
            <Text>
              <p>Já tenho conta.</p>
              <LoginButton>
                <p onClick={handleGoToLogin}>Fazer Login</p>
              </LoginButton>
            </Text>
        </Wrapper>
        </Column>
      </Container>
    </>)
}

export { SignUp }