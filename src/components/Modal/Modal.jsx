import React from 'react';
import css from './Modal.module.scss';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
    window.addEventListener('click', this.closeByBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
    window.removeEventListener('click', this.closeByBackdrop);
  }

  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { url, alt } = this.props;

    return (
      <div className={css.overlay} onClick={this.closeByBackdrop}>
        <div className={css.modal}>
          <img src={url} alt={alt} />
        </div>
      </div>
    );
  }
}
