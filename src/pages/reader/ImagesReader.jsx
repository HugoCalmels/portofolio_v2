import "./ImagesReader.scss"
import {VscChromeClose} from "react-icons/vsc"

const ImagesReader = (props) => {

  const btnStyle = { color: "#000C2E", width: "20px", height: "20px" }
  console.log("//////")
  console.dir(props.selectedImage)
  console.log("//////")

  const closeReader = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target)
    props.ImagesReaderRef.current.classList.remove("active")
  }
  return (
    <div className="images-reader-wrapper" ref={props.ImagesReaderRef}>
             <div className="reader-overlay"  onClick={(e) => closeReader(e)}>
        
        </div>
      <div className="images-reader-container">

        <div className="image-reader-close-btn" onClick={(e)=>closeReader(e)}>
          <VscChromeClose style={btnStyle} />
        </div>
        <div className="selected-image-container">
        <img src={props.selectedImage}/>
        </div>
        
      </div>
    </div>
  )
}

export default ImagesReader