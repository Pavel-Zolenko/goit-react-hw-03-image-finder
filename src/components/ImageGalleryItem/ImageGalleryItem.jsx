import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };


  render() {
    const { webformatURL, tags} = this.props.image;

    return (
      <>
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />

        
      </>
    );
  }
}


