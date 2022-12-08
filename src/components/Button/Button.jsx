import PropTypes from 'prop-types';
import css from './Button.module.scss';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
