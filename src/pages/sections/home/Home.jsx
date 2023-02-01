import "./Home.scss"
import Hero from "./Hero"
import LastProjects from "./LastProjects"

const Home = (props) => {
  return (
    <section className="home-wrapper" id="home" ref={props.homeWrapperElem}>

      
      <Hero />
      
      <LastProjects />


    </section>
  )
}

export default Home