import React from 'react';
import styles from '../styles/ExpandableSection.module.css';

const ExpandableSection = ({ title, content, isExpanded, onToggle }) => {
  return (
    <div className={`${styles.expandableSection} ${isExpanded ? styles.expanded : ''}`}>
      <h3 className={styles.title} onClick={onToggle}>
        {title}
        <span className={`${styles.arrow} ${isExpanded ? styles.expandedArrow : ''}`}>▼</span>
      </h3>
      <div className={`${styles.content} ${isExpanded ? styles.expanded : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ExpandableSection;
