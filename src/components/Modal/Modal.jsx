import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../Loader/Loader';
import css from './Modal.module.scss';

export const Modal = ({ url, alt, onCloseModal }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [onCloseModal]);

  const closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <div className={css.overlay} onClick={closeByBackdrop}>
      <div className={css.modal}>
        <img src={url} alt={alt} onLoad={() => setShowLoader(false)} />
        {showLoader && <Loader />}
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};