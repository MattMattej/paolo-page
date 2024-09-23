import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import styles from '../styles/DemoSection.module.css';

const DemosSection = () => {
  const { t } = useTranslation();

  // Definición de los items del carrusel
  const demos = [
    {
      id: 1,
      type: 'video',
      src: 'https://youtu.be/2yBu8unNlek?si=aujWKgyQXYF6TRaP', // Reemplaza 'tu-video-id' con el ID del video de YouTube
      title: t('Film Scoring'),
    },
    {
      id: 2,
      type: 'audio',
      image: '/fondo1.webp',
      src: '/track1.mp3',
      title: t('Estilos varios B'),
    },
    {
      id: 3,
      type: 'audio',
      image: '/fondo1.webp',
      src: '/track2.mp3',
      title: t('Estilos varios B'),
    },
    {
      id: 4,
      type: 'audio',
      image: '/fondo1.webp',
      src: '/track3.mp3',
      title: t('Estilos varios C'),
    },
  ];

  return (
    <section id='demos' className={styles.demosSection}>
      <div className='container'>
        <h2 className={styles.title}>{t('Demos')}</h2>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} className={styles.carousel}>
          {demos.map((demo) => (
            <div key={demo.id} className={styles.demoSlide}>
              {demo.type === 'video' ? (
                <iframe
                  width='100%'
                  height='400'
                  src={demo.src}
                  title={demo.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              ) : (
                <div className={styles.audioContainer}>
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    width={800}
                    height={400}
                    objectFit='cover'
                    className={styles.fixedImage}
                  />
                  <audio controls className={styles.audioPlayer}>
                    <source src={demo.src} type='audio/mpeg' />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
              <p className={styles.legend}>{demo.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default DemosSection;
