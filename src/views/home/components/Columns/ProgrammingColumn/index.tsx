import RoundedCode from "../../../../../components/Icons/RoundedCode";
import Paragraph from "../../Paragraph";
import Title from "../../../../../components/Title";
import ListTitle from "../../../../../components/ListTitle";
import SkillsLists from "../../../../../components/SkillsLists";

export default function ProgrammingColumn() {
  return (
    <>
      <RoundedCode/>
      <Title>Fullstack Developer</Title>
      <Paragraph>
        Eu gosto de programar e criar sistemas web,
        sempre buscando soluções eficientes e inovadoras para desafios técnicos
      </Paragraph>
      <ListTitle>Linguagens de Desenvolvimento:</ListTitle>
      <SkillsLists>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>C#</li>
      </SkillsLists>
      <ListTitle>Ferramentas e Frameworks:</ListTitle>
      <SkillsLists>
        <li>React</li>
        <li>Vue</li>
        <li>Node</li>
        <li>VS Code</li>
        <li>Tailwind CSS</li>
        <li>Github</li>
        <li>Bootstrap</li>
        <li>Postman</li>
        <li>Bulma</li>
      </SkillsLists>
    </>
  )
}