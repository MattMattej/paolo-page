import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '../styles/HomeSection.module.css';
import ExpandableSection from './ExpandableSection';

const HomeSection = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const toggleExpand = (sectionKey) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  };

  return (
    <section id="home" className={`${styles.homeSection} section`}>
      <div className={styles.container}>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>{t('home_description')}</p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/paolo2.png"
              alt="Paolo Grosso"
              width={200}
              height={200}
              layout="responsive"
              className={styles.roundedImage} // Añadido estilo para bordes redondeados
            />
          </div>
        </div>
        <div className={styles.expandableSections}>
          <ExpandableSection
            title={t('expandable_title_1')}
            content={t('expandable_content_1')}
            isExpanded={expandedSections.section1}
            onToggle={() => toggleExpand('section1')}
          />
          <ExpandableSection
            title={t('expandable_title_2')}
            content={t('expandable_content_2')}
            isExpanded={expandedSections.section2}
            onToggle={() => toggleExpand('section2')}
          />
          <ExpandableSection
            title={t('expandable_title_3')}
            content={t('expandable_content_3')}
            isExpanded={expandedSections.section3}
            onToggle={() => toggleExpand('section3')}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
