import Sidebar from './containers/Sidebar'
import About from './containers/About'
import EstiloGlobal, { Container } from './styles'
import Projects from './containers/Projects'

function App() {
  return (
    <>
    <EstiloGlobal />
    <Container>
      <Sidebar />
      <main>
        <About/>
        <Projects/>
      </main>
    </Container>
    </>
  )
}

export default App
