import React from 'react';
import styled from 'styled-components';
import LinkIcon from '../../../../components/Icons/Link';
import SectionApresentation from './Components/SectionApresentation';
import Container from './Components/Container';
import FadeInOnScroll from '../../../../components/AnimatedContainer';


const SectionField = styled.section`
  padding: 5rem 1.5rem;
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
  margin-top: -14rem;
`;

const StartupGrid = styled.div`
  margin-bottom: 2.5rem;

  @media screen and (min-width: 769px) {
    margin-bottom: 6rem;
  }
`;

const Columns = styled.div`
  justify-content: center;
  align-items: stretch;

  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;

  @media screen and (min-width: 769px) {
    flex-grow: 1;
  }
  
  @media screen and (min-width: 1024px) {
    flex: none;
    width: 50%;
  }
    
  @media screen and (min-width: 1216px) {
    flex: none;
    width: 33.3333%;
  }
`;

const Box = styled.div`
  padding: 40px;
  border-radius: 12px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
  color: #141c3a;
  display: block;
  padding: 1.25rem;

  @media screen and (min-width: 1216px) {
    padding: 60px 35px;
  }
`;

const BoxTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 1.5rem;
`;

const DescriptionBox = styled.p`
  font-size: 16px;
  margin-bottom: 2rem;

  @media screen and (min-width: 769px) {
    font-size: 18px;
  }
`;

export default function ProjectsField() {
  return (
    <>
    <SectionApresentation/>
    <SectionField className="projects-field">
      <FadeInOnScroll threshold={0.1}>
        <Container className="projects-list">
          <StartupGrid>
            <Columns>
              <Article>
                <Box>
                  <BoxTitle>ManagEase</BoxTitle>
                  <DescriptionBox>Página de administração, com geração de gráficos para companhias e filiais.</DescriptionBox>
                  <LinkIcon
                    href="https://www.linkedin.com/posts/gabriel-estefanski_fullstack-projeto-node-activity-7195939791064944640-pHKk?utm_source=share&utm_medium=member_desktop"
                    text="www.linkedin.com.br"
                  />
                </Box>
              </Article>
              <Article>
                <Box>
                  <BoxTitle>ReelFlix</BoxTitle>
                  <DescriptionBox>Frontend de streaming baseado em aplicações como a Netflix.</DescriptionBox>
                  <LinkIcon
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7232541795115532289/"
                    text="www.linkedin.com.br"
                  />
                </Box>
              </Article>
              <Article>
                <Box>
                  <BoxTitle>Em construção...</BoxTitle>
                  <DescriptionBox>Enquanto isso, pegue uma cadeira, sirva-se de um café e acompanhe o progresso deste projeto</DescriptionBox>
                </Box>
              </Article>
            </Columns>
          </StartupGrid>
        </Container>
      </FadeInOnScroll>
    </SectionField>
    </>
  );
};
