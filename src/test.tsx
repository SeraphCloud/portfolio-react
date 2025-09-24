import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontsize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => (props.principal ? 'red' : 'green')};
  font-size: ${props => (props.fontsize || '16px')}
`

const BotaoAtencao = styled(Botao)`
  background-color: yellow;
  color: #fff
`

function Teste() {
  return (
    <>
      <Botao fontsize='24px' principal>Enviar</Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoAtencao as="a" principal={false}>Cuidado</BotaoAtencao>
    </>
  )
}

export default Teste
