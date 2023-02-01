import Rocket from "./assets/gifs/Rocket.gif"
import {useEffect, useRef} from "react"
const Loader = (props) => {
const spaceShipElem = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      spaceShipElem.current.style.display = "none"
    }, [2000])
    setTimeout(() => {
      props.loaderElem.current.style.display = "none"
    }, [3000])
  })
  return (
    <div className="app-loader" ref={props.loaderElem}>
      <div className="gif-container" ref={spaceShipElem}>
      <img src={Rocket} />
      </div>
 
  </div>
  )
}

export default Loader