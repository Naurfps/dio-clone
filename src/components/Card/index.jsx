import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer, 
    Content, 
    HasInfo, 
    PostInfo, 
    UserInfo, 
    UserPicture, 
    ImageBackground
} from './styles'

const Card = () => {
  return ( 
    <CardContainer>
        <ImageBackground src="https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?b=1&s=170667a&w=0&k=20&c=CfaVabgMcwwc-ijzVAxNs_Sz6q3JVPJnlQ-Py-dpuAQ="/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/123757710?v=4"/>
                    <div>
                        <h4>Ruan Lucas</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto usando o ReactJS</h4>
                    <p>Projeto clone da DIO usando a ferramenta ReactJS</p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT #REACT</h4>
                    <p>
                        <FiThumbsUp /> 
                    </p>
                </HasInfo>
            </Content>
    </CardContainer>
  )
}

export { Card }