import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import Sidebar from './containers/Sidebar'
import About from './containers/About'
import EstiloGlobal, { Container } from './styles'
import Projects from './containers/Projects'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {

  const [temaDarkOn, setTemaDarkOn] = useState(false)

  function trocaTema() {
    setTemaDarkOn(!temaDarkOn)
  }

  return (
    <>
    <ThemeProvider theme={temaDarkOn ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema}/>
        <main>
          <About/>
          <Projects/>
        </main>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default App
