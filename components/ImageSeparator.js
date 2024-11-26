import React from 'react';


const ImageSeparator = () => {
  return (
    <div className={styles.imageSeparator}>
    <h1> HOLA</h1>
      <img 
        src="/A-11.jpg" 
        alt="Separador"
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }} // Prueba con estilos en línea para depuración
      />
    </div>
  );
};

export default ImageSeparator;
