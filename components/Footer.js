import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { t } = useTranslation(); // Importamos i18n hook

  return (
    <section id='contact' className={`${styles.bioSection} section`}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>{t('contact_title')}</h3>
            <p>{t('contact_email')} paologrosso@gmail.com</p>
         
          </div>
          <div className={styles.socialIcons}>
            <a href='https://www.youtube.com/user/PaoloGrosso' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </a>
            <a href='https://www.linkedin.com/in/francopaologrosso/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a href='https://open.spotify.com/artist/71emEmZqNA92fpj1aBzsVF' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faSpotify} className={styles.icon} />
            </a>
            <a href='https://www.instagram.com/the_smokeymonkey/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
