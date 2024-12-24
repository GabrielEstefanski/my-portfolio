import Title from "../../../../../components/Title";
import Paragraph from "../../Paragraph";
import ListTitle from "../../../../../components/ListTitle";
import RoundedLightBulb from "../../../../../components/Icons/RoundedLightBulb";
import SkillsLists from "../../../../../components/SkillsLists";

export default function SoftSkillsColumn (){
  return (
    <div className="container has-text-centered">
      <RoundedLightBulb/>
      <Title>Soft Skills</Title>
      <Paragraph>
        Sou uma pessoa focada, que lida bem com pressão e encontra soluções rápidas.
        Trabalho bem em equipe, sou versátil e me adapto facilmente às mudanças,
        sempre buscando melhorar minhas habilidades.
      </Paragraph>
      <ListTitle>Principais Soft Skills:</ListTitle>
      <SkillsLists>
        <li>Resolução de Problemas</li>
        <li>Pensamento Crítico</li>
        <li>Comunicação</li>
        <li>Adaptabilidade</li>
        <li>Gestão de Tempo</li>
        <li>Autodidatismo</li>
        <li>Orientação a Detalhes</li>
        <li>Pensamento Analítico</li>
      </SkillsLists>
    </div>
  )
}