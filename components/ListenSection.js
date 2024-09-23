import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ListenSection.module.css';

const ListenSection = () => {
  const { t } = useTranslation();

  const tracks = [
    { id: 1, title: t('Tema1'), album: t('Castillos'), src: '/track1.mp3' },
    { id: 2, title: t('track2Title'), album: t('track2Album'), src: '/track2.mp3' },
    { id: 3, title: t('track3Title'), album: t('track3Album'), src: '/track3.mp3' },
    { id: 4, title: t('track4Title'), album: t('track4Album'), src: '/track4.mp3' },
  ];

  return (
    <section id='listen' className={styles.listenSection}>
      <div className='container'>
        <h2 className={styles.title}>{t('Listen')}</h2>
        <div className={styles.trackList}>
          {tracks.map((track) => (
            <div key={track.id} className={styles.track}>
              <div className={styles.trackInfo}>
                <h3>{track.title}</h3>
                <p>{track.album}</p>
              </div>
              <audio controls src={track.src} className={styles.audioPlayer}>
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListenSection;