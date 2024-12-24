import PurpleEllipse from "../PurpleEllipse";
import Icon from "../Icon";
import SkillsIcon from "../SkillsIconSpan";

export default function RoundedCode(){
  return (
    <>
      <SkillsIcon>
        <PurpleEllipse />
        <Icon 
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          width="50"
          height="50">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
        </Icon>
      </SkillsIcon>
    </>
  )
}