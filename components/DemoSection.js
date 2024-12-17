import React, { useState } from 'react';
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
      src: '/track1.flac',
      title: t('Epic / Drums / Orchestral'),
    },
    {
      id: 3,
      type: 'audio',
      image: '/demo1.png',
      src: '/track2.flac',
      title: t('Jazz / Swing'),
    },
    {
      id: 4,
      type: 'audio',
      image: '/demo2.png',
      src: '/track3.flac',
      title: t('Fantasy / Magic'),
    },
    {
      id: 5,
      type: 'audio',
      image: '/demo3.png',
      src: '/track4.flac',
      title: t('World Music'),
    },
  ];

  const toggleDemoExpand = (id) => {
    if (expandedDemo === id) {
      setExpandedDemo(null);
      setPlayingAudio(null);
    } else {
      setExpandedDemo(id);
      setPlayingAudio(null);
    }
  };

  return (
    <section id="demos" className={styles.demosSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('Demos')}</h2>
        <div className={styles.demoGrid}>
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={styles.demoCard}
              onClick={() => toggleDemoExpand(demo.id)}
            >
              <div className={styles.imageContainer}>
                {demo.type === 'video' ? (
                  <ReactPlayer
                    url={demo.src}
                    width="100%"
                    height="100%"
                    light={true}
                    playIcon={null}
                    controls={false}
                  />
                ) : (
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
              <h3 className={styles.demoTitle}>{demo.title}</h3>
            </div>
          ))}
        </div>

        {/* Modal */}
        {expandedDemo !== null && (
          <div className={styles.expandedOverlay}>
            <div className={styles.expandedModalContent}>
              <button
                className={styles.closeButton}
                onClick={() => toggleDemoExpand(null)}
              >
                ✕
              </button>
              {demos.map((demo) => {
                if (demo.id === expandedDemo) {
                  return (
                    <div key={demo.id} className={styles.expandedContent}>
                      <div className={styles.expandedImageContainer}>
                        {demo.type === 'video' ? (
                          <ReactPlayer
                            url={demo.src}
                            width="100%"
                            height="100%"
                            controls={true}
                            playing={true}
                          />
                        ) : (
                          <Image
                            src={demo.image}
                            alt={demo.title}
                            layout="fill"
                            objectFit="contain"
                          />
                        )}
                      </div>
                      {demo.type === 'audio' && (
                        <div className={styles.expandedAudioPlayerWrapper}>
                          <ReactPlayer
                            url={demo.src}
                            width="100%"
                            height="50px"
                            controls={true}
                            playing={playingAudio === demo.id}
                            onPlay={() => setPlayingAudio(demo.id)}
                            onPause={() => setPlayingAudio(null)}
                          />
                        </div>
                      )}
                      <h3 className={styles.expandedDemoTitle}>{demo.title}</h3>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemosSection;
