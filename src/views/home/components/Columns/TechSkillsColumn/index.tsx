import Title from "../../../../../components/Title";
import Paragraph from "../../Paragraph";
import ListTitle from "../../../../../components/ListTitle";
import RoundedCog from "../../../../../components/Icons/RoundedCog";
import SkillsLists from "../../../../../components/SkillsLists";

export default function TechSkillsColumn(){
  return(
    <div>
      <RoundedCog/>
      <Title>Técnicas & Processos</Title>
      <Paragraph>
        Trabalho com uma combinação de ferramentas modernas e metodologias ágeis
        para entregar projetos de software de forma eficiente e com alta qualidade.
      </Paragraph>
      <ListTitle>Conhecimento Técnico:</ListTitle>
      <SkillsLists>
        <li>Design Patterns</li>
        <li>Solid</li>
        <li>CI/CD</li>
        <li>Jest & Vitest</li>
        <li>Cloud Service</li>
        <li>Banco de Dados</li>
      </SkillsLists>
      <ListTitle>Metodologia Ágil:</ListTitle>
      <SkillsLists>
        <li>Scrum</li>
        <li>Kanban</li>
        <li>Jira</li>
        <li>Boards</li>
        <li>Metodologia Ágil</li>
        <li>Práticas DevOps</li>
      </SkillsLists>
    </div>
  )
}