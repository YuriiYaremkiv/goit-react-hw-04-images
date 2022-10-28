import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { IconContext } from 'react-icons';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.scss';

export class Searchbar extends Component {
  state = { nameImage: '' };

  handleSubmit = event => {
    const { nameImage } = this.state;
    const { prevSearchName, onSubmit } = this.props;

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
    this.reset();
  };

  handleChangeName = event => {
    this.setState({
      nameImage: event.currentTarget.value,
    });
  };

  reset() {
    this.setState({ nameImage: '' });
  }
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
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
            value={this.state.nameImage}
            onChange={this.handleChangeName}
          />
        </form>
      </header>
    );
  }
}
