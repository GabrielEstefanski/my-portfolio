import styled from "styled-components";
import Title from "../../../../components/Title";
import BoxProps from "../../../../interfaces/BoxProps";

const Section = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  margin-bottom: 5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1344px;

  @media (max-width: 768px) {
    justify-content: center !important;
    padding: 0 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4rem;
  margin: 0 auto;
  max-width: 1344px;
  height: 100vh;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;

  @media (max-width: 768px) {
    align-items: center !important;
    padding: 0 1.5rem;
    height: auto;
    box-shadow: none;
  }
`;

const TitleExperience = styled.h5`
  font-size: 1.25rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    font-size: 1.1rem;
  }
`;

const Subtitle = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.25;
  white-space: pre-wrap;
  text-align: left;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => (props.noBorder ? "none" : "2px solid #E6ECF8")};
  align-items: flex-start;
  width: 100%;
  padding: 5rem 0;
  flex: 1;

  @media (max-width: 768px) {
    align-items: center;
    padding: 3rem 0;
    border-bottom: ${(props) => (props.noBorder ? "none" : "1px solid #E6ECF8")};
  }
`;

export default function WorkExperienceField() {
  const experiences = [
    {
      title: "Fullstack Developer",
      subtitle: "4SIS - Fevereiro 2021 a Setembro 2021",
      description:
        `Trabalhei no desenvolvimento de páginas web, no estilo de páginas de administração, com CRUDS, login e na criação de APIs integradas com banco de dados,
desenvolvendo principalmente nas linguagens Javascript, HTML, CSS e PHP.`,
    },
    {
      title: "Data Engineer Interno",
      subtitle: "2RP Net - Outubro 2022 a Julho 2022",
      description:
        `Atuei como engenheiro de dados interno, responsável em desenvolver pipelines de ETL com Python e criar DAGs com Airflow para
o agendamento de tarefas.\n
Também fui responsável na criação de Dashboards e plotagem de dados com PowerBI e HUE e no gerenciamento de banco de dados HiveDB e OracleDB`,
    },
    {
      title: "Fullstack Developer.",
      subtitle: "Safran Cabin - Agosto 2023 até o presente",
      description:
        `Sou responsável por criar ferramentas web robustas e eficientes, focadas principalmente no estilo de páginas de administração, com CRUDs, gráficos, logins e desenvolvimento de APIs.
Inicialmente, utilizei VueJs para construir interfaces dinâmicas, mas com o tempo, passei a adotar React, buscando a melhor solução para atender às necessidades do projeto.
Utilizo também NodeJs e Tailwind CSS, com integração a bancos de dados como SQL Server e OracleDB. Em outros projetos específicos, também desenvolvi aplicações em C#, com foco em otimização de processos.
`,
    },
  ];

  return (
    <>
      <Section id="experiences">
        <TitleContainer>
          <Title size="2rem">Experiências</Title>
        </TitleContainer>
        <Container>
          {experiences.map((experience, index) => (
            <Box key={index} noBorder={index === experiences.length - 1}>
              <TitleExperience>{experience.title}</TitleExperience>
              <Subtitle>{experience.subtitle}</Subtitle>
              <Description>{experience.description}</Description>
            </Box>
          ))}
        </Container>
      </Section>
    </>
  );
}
