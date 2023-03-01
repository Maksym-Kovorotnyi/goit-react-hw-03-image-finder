import css from './Button.module.css';
import PropTypes from 'prop-types'

export const LoadMoreBtn = ({onClick}) => {
    return <>
        <div className={css.container}>
        <button
            onClick={onClick}
                className={css.button} type="button">Load more</button>
            </div>
        </>
}

LoadMoreBtn.propTypes = {
 onClick: PropTypes.func.isRequired,
}