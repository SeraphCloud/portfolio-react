import Title from "../../components/Title"
import Paragrafo from "../../components/Paragrafo"
import { GithubSection } from "./styles"

const USER = 'SeraphCloud'

const About = () => {
  return(
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Paragrafo tipo="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae ab facilis nulla aspernatur architecto cupiditate reprehenderit cum blanditiis dicta, ipsum nemo, eaque tempore eos labore, sunt ut! Culpa, minus.
      </Paragrafo>
      <GithubSection>
        <img
          height="180em"
          src={`https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&theme=dracula&include_all_commits=true&count_private=true&card_width=400`}
          alt="GitHub stats"
        />
        <img
          height="180em"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&langs_count=7&theme=dracula&card_width=400`}
          alt="Top languages"
        />
      </GithubSection>
    </section>
  )
}

export default About
