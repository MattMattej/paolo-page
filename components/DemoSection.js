import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '../styles/DemoSection.module.css';
import ReactPlayer from 'react-player';

const DemosSection = () => {
  const { t } = useTranslation();
  const [expandedDemo, setExpandedDemo] = useState(null);

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
    setExpandedDemo(expandedDemo === id ? null : id);
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
                  <ReactPlayer url={demo.src} width="100%" height="100%" light controls={false} />
                ) : (
                  <Image src={demo.image} alt={demo.title} layout="fill" objectFit="cover" />
                )}
              </div>
              <h3 className={styles.demoTitle}>{demo.title}</h3>
            </div>
          ))}
        </div>

        {expandedDemo !== null && (
          <div className={styles.expandedOverlay}>
            <div className={styles.expandedModalContent}>
              <button className={styles.closeButton} onClick={() => toggleDemoExpand(null)}>
                ✕
              </button>
              <div className={styles.expandedImageContainer}>
                {demos[expandedDemo - 1].type === 'video' ? (
                  <ReactPlayer
                    url={demos[expandedDemo - 1].src}
                    width="100%"
                    height="100%"
                    controls
                    playing
                  />
                ) : (
                  <Image
                    src={demos[expandedDemo - 1].image}
                    alt={demos[expandedDemo - 1].title}
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
              <h3 className={styles.expandedDemoTitle}>{demos[expandedDemo - 1].title}</h3>
              <div className={styles.expandedAudioPlayerWrapper}>
                {demos[expandedDemo - 1].type === 'audio' && (
                  <ReactPlayer
                    url={demos[expandedDemo - 1].src}
                    width="100%"
                    height="50px"
                    controls
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemosSection;
