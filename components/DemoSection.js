import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '../styles/DemoSection.module.css';
import ReactPlayer from 'react-player';

const DemosSection = () => {
  const { t } = useTranslation();
  const [expandedDemo, setExpandedDemo] = useState(null);
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
      image: '/demo0.png',
      src: '/track1.mp3',
      title: t('Explore/Adventure'),
    },
    {
      id: 3,
      type: 'audio',
      image: '/demo1.png',
      src: '/track2.mp3',
      title: t('Estilos varios B'),
    },
    {
      id: 4,
      type: 'audio',
      image: '/demo2.png',
      src: '/track3.mp3',
      title: t('Estilos varios C'),
    },
    {
      id: 5,
      type: 'audio',
      image: '/demo3.png',
      src: '/track4.mp3',
      title: t('Estilos varios D'),
    },
  ];

  const toggleDemoExpand = (id) => {
    setExpandedDemo(expandedDemo === id ? null : id);
  };

  // Keyboard support for closing modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && expandedDemo) {
        setExpandedDemo(null);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [expandedDemo]);

  const renderDemoContent = (demo) => {
    const isExpanded = expandedDemo === demo.id;

    return (
      <div 
        key={demo.id} 
        className={`${styles.demoCard} ${isExpanded ? styles.expanded : ''}`}
      >
        {isExpanded && (
          <div className={styles.expandedOverlay}>
            <div className={styles.expandedModalContent}>
              <button 
                className={styles.closeButton} 
                onClick={() => toggleDemoExpand(demo.id)}
              >
                ✕
              </button>

              {demo.type === 'video' ? (
                <div className={styles.expandedVideoContainer}>
                  <ReactPlayer
                    url={demo.src}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true}
                  />
                </div>
              ) : (
                <div className={styles.expandedImageContainer}>
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}

              <div className={styles.expandedDemoContent}>
                {demo.type === 'audio' && (
                  <div className={styles.expandedAudioPlayerWrapper}>
                    <ReactPlayer
                      url={demo.src}
                      width="80%"
                      height="70px"
                      controls={true}
                      playing={playingAudio === demo.id}
                      onPlay={() => setPlayingAudio(demo.id)}
                      onPause={() => setPlayingAudio(null)}
                      config={{
                        file: {
                          forceAudio: true,
                          attributes: {
                            style: { outline: 'none' }
                          }
                        }
                      }}
                    />
                  </div>
                )}
                <h3 className={styles.expandedDemoTitle}>{demo.title}</h3>
              </div>
            </div>
          </div>
        )}

        {demo.type === 'video' ? (
          <div className={styles.videoContainer}>
            <ReactPlayer
              url={demo.src}
              width="100%"
              height="100%"
              light={true}
              playIcon={<button className={styles.expandButton}>Play</button>}
              onClickPreview={() => toggleDemoExpand(demo.id)}
            />
          </div>
        ) : (
          <div 
            className={styles.imageContainer}
            onClick={() => toggleDemoExpand(demo.id)}
          >
            <Image
              src={demo.image}
              alt={demo.title}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}

        {demo.type === 'audio' && (
          <div className={styles.audioPlayerWrapper}>
            <ReactPlayer
              url={demo.src}
              width="100%"
              height="50px"
              controls={true}
              playing={playingAudio === demo.id}
              onPlay={() => setPlayingAudio(demo.id)}
              onPause={() => setPlayingAudio(null)}
              config={{
                file: {
                  forceAudio: true,
                  attributes: {
                    style: { outline: 'none' }
                  }
                }
              }}
              className={styles.audioPlayer}
            />
          </div>
        )}

        <div className={styles.demoContent}>
          <h3 className={styles.demoTitle}>{demo.title}</h3>
        </div>
      </div>
    );
  };

  return (
    <section id="demos" className={styles.demosSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('Demos')}</h2>
        <div className={styles.demoGrid}>
          {demos.map(renderDemoContent)}
        </div>
      </div>
    </section>
  );
};

export default DemosSection;