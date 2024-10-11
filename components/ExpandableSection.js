import React from 'react';
import styles from '../styles/ExpandableSection.module.css';

const ExpandableSection = ({ title, content, isExpanded, onToggle }) => {
  return (
    <div className={`${styles.expandableSection} ${isExpanded ? styles.expanded : ''}`}>
      <h3 className={styles.title} onClick={onToggle}>
        <span className={styles.titleText}>{title}</span>
        <span className={`${styles.arrow} ${isExpanded ? styles.expandedArrow : ''}`}>▼</span>
      </h3>
      <div className={styles.contentWrapper} style={{ maxHeight: isExpanded ? '1000px' : '0' }}>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableSection;