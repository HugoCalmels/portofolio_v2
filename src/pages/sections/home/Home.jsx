import "./Home.scss";
import Hero from "./Hero";
import hugo from "../../../assets/images/hugoo.jpg";

const Home = (props) => {
  return (
    <section className="home-wrapper" id="home" ref={props.homeWrapperElem}>
      <Hero
        navbarLinkProjects={props.navbarLinkProjects}
        navbarLinkContact={props.navbarLinkContact}
        navigateTo={props.navigateTo} 
      />
      <div className="home-testimonials">
        <h5>Recommandations</h5>
        <div className="ht-body">

          <div className="ht-unit">
            <div className="ht-header">
              <div className="ht-header-image">
                <img src={hugo}/>
              </div>
              <div className="ht-header-content">
                <p><strong>Hugo Calmels</strong></p>
                <p>Développeur</p>
              </div>
            </div>
  
          <p className="ht-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed ipsam in expedita rem numquam esse ea tempore tempora dolores reiciendis doloremque, quae laborum nostrum magnam doloribus accusantium nisi omnis?</p>
          </div>
          
          <div className="ht-unit">
            <div className="ht-header">
              <div className="ht-header-image">
                <img src={hugo}/>
              </div>
              <div className="ht-header-content">
                <p><strong>Hugo Calmels</strong></p>
                <p>Développeur</p>
              </div>
            </div>
  
          <p className="ht-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed ipsam in expedita rem numquam esse ea tempore tempora dolores reiciendis doloremque, quae laborum nostrum magnam doloribus accusantium nisi omnis?</p>
          </div>
        </div>

      </div>
    
    </section>
  );
};

export default Home;
