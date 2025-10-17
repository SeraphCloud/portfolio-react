import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Title from "../../components/Title"

import { BotaoTema, Description, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => {
  return(
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Victor Silva</Title>
        <Paragrafo tipo="secundario" fontSize={16}>SeraphCloud</Paragrafo>
        <Description tipo="principal" fontSize={12}>Dev Full-Stack</Description>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
