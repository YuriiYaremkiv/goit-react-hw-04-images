import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

import css from './Searchbar.module.scss';

export const Searchbar = ({ prevSearchName, onSubmit, changePage }) => {
  const [nameImage, setNameImage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!nameImage) {
      Notify.info('Please input image name for search');
      return;
    }

    if (prevSearchName && nameImage === prevSearchName) {
      Notify.info(
        `Already presented results for the search term: ${nameImage}`
      );
      return;
    }

    onSubmit(nameImage);
    changePage();
    setNameImage('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <IconContext.Provider value={{ color: 'blue', size: '30' }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={nameImage}
          onChange={event => {
            setNameImage(event.currentTarget.value);
          }}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  prevSearchName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};
