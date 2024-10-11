import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '../styles/DemoSection.module.css';
import ReactPlayer from 'react-player';

const DemosSection = () => {
  const { t } = useTranslation();
  const [expandedVideo, setExpandedVideo] = useState(null);
  const [playingAudio, setPlayingAudio] = useState(null);

  const demos = [
    {
      id: 1,
      type: 'video',
      src: 'https://www.youtube.com/watch?v=2yBu8unNlek',
      title: t('Film Scoring'),
    },
    {
      id: 2,
      type: 'audio',
      image: '/fondo1.webp',
      src: '/track1.mp3',
      title: t('Estilos varios A'),
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
    {
      id: 5,
      type: 'audio',
      image: '/fondo1.webp',
      src: '/track4.mp3',
      title: t('Estilos varios D'),
    },
  ];

  const toggleVideoExpand = (id) => {
    setExpandedVideo(expandedVideo === id ? null : id);
  };

  const handleAudioPlay = (id) => {
    setPlayingAudio(id);
  };

  const handleAudioPause = () => {
    setPlayingAudio(null);
  };

  return (
    <section id='demos' className={styles.demosSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('Demos')}</h2>
        <div className={styles.demoGrid}>
          {demos.map((demo) => (
            <div key={demo.id} className={styles.demoCard}>
              {demo.type === 'video' ? (
                <div className={`${styles.videoContainer} ${expandedVideo === demo.id ? styles.expanded : ''}`}>
                  <ReactPlayer
                    url={demo.src}
                    width="100%"
                    height="100%"
                    controls={true}
                    light={true}
                    playing={expandedVideo === demo.id}
                    onPlay={() => setExpandedVideo(demo.id)}
                  />
                  <button className={styles.expandButton} onClick={() => toggleVideoExpand(demo.id)}>
                    {expandedVideo === demo.id ? 'Reducir' : 'Expandir'}
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles.imageContainer}>
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      layout="fill"
                      objectFit="cover"
                      className={styles.demoImage}
                    />
                  </div>
                  <div className={styles.audioPlayerWrapper}>
                    <ReactPlayer
                      url={demo.src}
                      width="100%"
                      height="50px"
                      controls={true}
                      playing={playingAudio === demo.id}
                      onPlay={() => handleAudioPlay(demo.id)}
                      onPause={handleAudioPause}
                      config={{
                        file: {
                          forceAudio: true,
                          attributes: {
                            style: {
                              outline: 'none',
                            }
                          }
                        },
                      }}
                      className={styles.audioPlayer}
                    />
                  </div>
                </>
              )}
              <div className={styles.demoContent}>
                <h3 className={styles.demoTitle}>{demo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemosSection;