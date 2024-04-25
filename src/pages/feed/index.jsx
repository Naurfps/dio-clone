import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
  return (<>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column>
          <TitleHighlight># TOP 5 RANKING DA SEMANA</TitleHighlight>
          <UserInfo percentual={35} name={"Ruan Lucas"} image={"https://avatars.githubusercontent.com/u/123757710?v=4"}/>
          <UserInfo percentual={60} name={"Ruan Lucas"} image={"https://avatars.githubusercontent.com/u/123757710?v=4"}/>
          <UserInfo percentual={75} name={"Ruan Lucas"} image={"https://avatars.githubusercontent.com/u/123757710?v=4"}/>
          <UserInfo percentual={25} name={"Ruan Lucas"} image={"https://avatars.githubusercontent.com/u/123757710?v=4"}/>
          <UserInfo percentual={40} name={"Ruan Lucas"} image={"https://avatars.githubusercontent.com/u/123757710?v=4"}/>
          <UserInfo percentual={12} name={"Ruan Lucas"} image={"https://avatars.githubusercontent.com/u/123757710?v=4"}/>
          <UserInfo percentual={99} name={"Ruan Lucas"} image={"https://avatars.githubusercontent.com/u/123757710?v=4"}/>
          <UserInfo percentual={50} name={"Ruan Lucas"} image={"https://avatars.githubusercontent.com/u/123757710?v=4"}/>
        </Column>
      </Container>
    </>)
}

export { Feed }