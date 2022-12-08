import PropTypes from 'prop-types';
import css from './ErrorMessage.module.scss';

export const ErrorMessage = ({ onError }) => {
  console.log(onError);
  return (
    <div className={css.container}>
      <p className={css.container__message}>
        <b>Sorry, please try later. Code on error:</b> {onError.code}
      </p>
    </div>
  );
};

ErrorMessage.propTypes = {
  onError: PropTypes.string.isRequired,
};
