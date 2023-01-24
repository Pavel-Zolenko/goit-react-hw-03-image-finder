import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  
  toggleModal = () => {
        this.setState(state => ({
             showModal: !state.showModal
        }))
    };

  render() {
    const { webformatURL, tags, largeImageURL} = this.props.image;

    return (
      <>
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (<Modal onClose={this.toggleModal}>
        <img src={largeImageURL} alt={tags} />
      </Modal >)}
        
      </>
    );
  }
}


