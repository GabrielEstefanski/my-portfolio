import React from 'react';
import styled from 'styled-components';
import Title from '../../../../components/Title';

const SectionField = styled.section`
  padding: 5rem 1.5rem;
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
  margin-top: -14rem;
`;

const Container = styled.div`
  margin: 0 auto;
  width: auto;
  flex-grow: 1;
  position: relative;
  
  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }
  
  @media screen and (min-width: 1216px) {
    max-width: 1152px;
  }
  
  @media screen and (min-width: 1408px) {
    max-width: 1344px;
  }
`;

const SectionApresentation = styled.section`
  background-color: #4a56f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  color: white;
  padding: 3rem 1.5rem;
  padding-bottom: 14rem;
  -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1024px) {
    padding: 6rem 4.5rem;
  }

  @media screen and (min-width: 769px), print {
    padding-bottom: 14rem;
  }
`;

const StartupGrid = styled.div`
  margin-bottom: 4rem;

  @media screen and (min-width: 769px) {
    margin-bottom: 6rem;
  }
`;

const Columns = styled.div`
  justify-content: center;

  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

const Column = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;

  @media screen and (min-width: 769px) {
    flex: none;
    width: 60%;
  }
`;

const Article = styled.article`
  display: block;
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

const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  border: none;
  color: #1A8CFF;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: all .2s ease-in-out;
`;

const Span = styled.span`
  background-color: #EBF5FF;
  color: #0068D1;
  font-size: 1rem;
  align-items: center;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
`;

const Svg = styled.svg`
  overflow: visible;
  box-sizing: content-box;
  margin-right: 0.5rem !important;
  height: 1em;
`;


const ProjectsField: React.FC = () => {
  return (
    <>
    <SectionApresentation id="projects">
      <Container>
      <Title>Meus últimos trabalhos</Title>
      <Columns>
        <Column>
          <p>Esses são meus últimos trabalhos pessoais baseado no desenvolvimento Web. Estou sempre me desafiando e me propondo coisas novas e desafios diferentes.
          Os projetos não possuem domínio próprio, então a seguir estão os links para os repositórios no GitHub.</p>
        </Column>
      </Columns>
      </Container>
    </SectionApresentation>
    <SectionField className="projects-field">
      <Container className="projects-list">
        <StartupGrid>
          <Columns>
            <Article>
              <Box>
              <h3>ManagEase</h3>
              <p>Project 1 description</p>
              <Link target="_blank">
                <Span>
                <Svg
                  className="svg-inline--fa fa-arrow-up-right-from-square mr-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="arrow-up-right-from-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l121.4 0L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6 480 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L336 0zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32z">
                  </path>
                </Svg>
                  www.linkedin.com
                </Span>
              </Link>
              </Box>
            </Article>
            <Article>
              <Box>
              <h3>ReelFlix</h3>
              <p>Project 1 description</p>
              <Link target="_blank">
                <Span>
                <Svg className="svg-inline--fa fa-arrow-up-right-from-square mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l121.4 0L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6 480 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L336 0zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32z">
                </path>
                </Svg>
                www.linkedin.com
                </Span>
              </Link>
              </Box>
            </Article>
            <Article>
            <Box>
              <h3>Project 1</h3>
              <p>Project 1 description</p>
              <Link target="_blank">
                <Span>
                <Svg className="svg-inline--fa fa-arrow-up-right-from-square mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l121.4 0L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6 480 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L336 0zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32z">
                </path>
                </Svg>
                www.linkedin.com
                </Span>
              </Link>
              </Box>
            </Article>
          </Columns>
        </StartupGrid>
      </Container>
    </SectionField>
    </>
  );
};

export default ProjectsField;