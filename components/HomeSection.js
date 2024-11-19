import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/HomeSection.module.css';
import ExpandableSection from './ExpandableSection';

const HomeSection = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleExpand = (sectionKey) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  };

  const isAnySectionExpanded = Object.values(expandedSections).some(Boolean);

  return (
    <section
      id="home"
      className={`${styles.homeSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.overlay}></div>
      <div
        className={`${styles.container} ${
          isAnySectionExpanded ? styles.shifted : ''
        }`}
      >
        <div
          className={`${styles.content} ${
            isAnySectionExpanded ? styles.shiftUp : ''
          } ${isVisible ? styles.fadeIn : ''}`}
        >
          <div className={styles.textContent}>
            <h1 className={styles.description}>{t('home_description')}</h1>
          </div>
        </div>
        <div
          className={`${styles.expandableSections} ${
            isVisible ? styles.fadeInUp : ''
          } ${isAnySectionExpanded ? styles.expanded : ''}`}
        >
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
