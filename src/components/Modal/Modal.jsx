import PropTypes from 'prop-types'
import css from './Modal.module.css'
export const Modal =({Image, onClick,}) => {
        return <>
          <div
            onClick={onClick}
            className={css.overlay}>
            <div
              className={css.modal}>
              <img src={Image} alt="" />
            </div>
          </div>
</>

}

Modal.propTypes = {
   images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
}