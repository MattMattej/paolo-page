import React from 'react';
import styles from '../styles/ImageSeparator.module.css';

const ImageSeparator = () => {
  return (
    <div className={styles.imageSeparator}>
      <img 
        src="/A-11.jpg" 
        alt="Separador"
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }} // Prueba con estilos en línea para depuración
      />
    </div>
  );
};

export default ImageSeparator;
