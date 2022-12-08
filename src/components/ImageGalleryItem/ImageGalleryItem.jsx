import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.scss';

export const ImageGalleryItem = ({ imageGallery, onClick }) => {
  return imageGallery.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <li key={id} className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          data-url={largeImageURL}
          alt={tags}
          onClick={onClick}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  imageGallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
