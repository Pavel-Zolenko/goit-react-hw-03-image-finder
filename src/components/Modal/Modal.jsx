import { Component } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    state = {
     showModal: false,
    };
    
     componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscape)
    }
    
    handleEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
        }
    };
    
    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose()
        }
    };
   

    render() {

        return createPortal(<div className={css.Overlay} onClick={this.handleBackdropClick}>
            <div className={css.Modal}>{this.props.children}</div>
        </div>, modalRoot);
    }
};

 