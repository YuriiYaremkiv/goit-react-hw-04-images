import PropTypes from 'prop-types';
import css from './ImageGallery.module.scss';

export const ImageGallery = ({ children }) => {
  return (
    <ul className={css.imageGallery} id="gallery">
      {children}
    </ul>
  );
};

ImageGallery.propTypes = {
  children: PropTypes.element.isRequired,
};
