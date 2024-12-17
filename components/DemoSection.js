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
                    onEnded={() => setExpandedDemo(null)}
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
                    config={{
                      file: {
                        forceAudio: true,
                        attributes: { style: { outline: 'none' } },
                      },
                    }}
                  />
                </div>
              )}
              <h3 className={styles.expandedDemoTitle}>{demo.title}</h3>
            </div>
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
                  attributes: { style: { outline: 'none' } },
                },
              }}
            />
          </div>
        )}

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
        <div className={styles.demoGrid}>{demos.map(renderDemoContent)}</div>
      </div>
    </section>
  );
};

export default DemosSection;
