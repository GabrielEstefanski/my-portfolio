import { ReactNodeProps } from "../../interfaces/ReactNodeProps";

export default function SkillsLists({children}: ReactNodeProps){
  return(
    <div className="content">
        <ul className="list-unstyled">
          {children}
        </ul>
    </div>
  )
}