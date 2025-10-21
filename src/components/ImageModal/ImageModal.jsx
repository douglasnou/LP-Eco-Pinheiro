import React, { useEffect } from 'react';
import './ImageModal.scss';

const ImageModal = ({ isOpen, onClose, imageUrl, altText }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="image-modal__close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <img 
          src={imageUrl} 
          alt={altText || 'Imagem em tamanho grande'} 
          className="image-modal__image"
        />
      </div>
    </div>
  );
};

export default ImageModal;