import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';

import {Container, Title, TitleLogin, Wrapper, Column, EsqueciText, CriarText, SubtitleLogin, Row} from './styles'

const Login = () => {

  const navigate = useNavigate();

  const handleGoToFeed = () => {
    navigate('/feed')
  }

  const handleGoToSignUp = () => {
    navigate('/signup')
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
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form>
            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
            <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
            <Button title="Entrar" variant="secondary" onClick={handleGoToFeed}/>
          </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={handleGoToSignUp}>Criar Conta</CriarText>
            </Row>
        </Wrapper>
        </Column>
      </Container>
    </>)
}

export { Login }