
import '../../styles.css'
export const Modal =({Image, onClick}) => {
        return <>
          <div
            onClick={onClick}
            className="Overlay">
            <div
              className="Modal">
              <img src={Image} alt="" />
            </div>
          </div>
</>

}