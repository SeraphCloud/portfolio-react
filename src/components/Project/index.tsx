import Paragrafo from "../Paragrafo"
import Title from "../Title"

import { Card, Botao } from "./styles"

const Project = () => {
  return(
    <Card>
      <Title>Lista de Tarefas</Title>
      <Paragrafo tipo="secundario">Lista de Tarefas VueJS</Paragrafo>
      <Botao>Visualizar</Botao>
    </Card>
  )
}

export default Project
