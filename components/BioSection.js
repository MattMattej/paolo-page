import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/BioSection.module.css';

const BioSection = () => {
  const { t } = useTranslation();

  return (
    <section id="bio" className={`${styles.bioSection} section`}>
      <div className="container">
        <h2 className={styles.title}>
          <span>{t('About Paolo')}</span>
          <div className={styles.socialIcons}>
            <a href="https://www.youtube.com/user/PaoloGrosso" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/francopaologrosso/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a href="https://open.spotify.com/artist/71emEmZqNA92fpj1aBzsVF" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSpotify} className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/the_smokeymonkey/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
          </div>
        </h2>
        <div className={styles.bioContent}>
          <div className={styles.bioBlock}>
            <div className={styles.bioText}>
              <p><strong>Franco Paolo Grosso González</strong></p>
              <p>{t('bio_text_1')}</p>
              <p>{t('bio_text_2')}</p>
            </div>
            <div className={styles.bioImage}>
              <Image 
                src="/A-24.jpg" 
                alt="Paolo Grosso" 
                width={540} 
                height={780} 
                objectFit="contain" 
                className={styles.image}
              />
              
            </div>
          </div>

          <div className={styles.bioBlock}>
            <div className={styles.bioImage}>
              <Image 
                src="/A-35.jpg" 
                alt="Paolo Grosso" 
                width={680} 
                height={500} 
                objectFit="contain" 
                className={styles.image}
              />
            </div>
            <div className={styles.bioText}>
             
              <p>{t('bio_text_4')}</p>
              <p>{t('bio_text_5')}</p>
            </div>
          </div>

          <div className={styles.bioBlock}>
            <div className={styles.bioText}>
             
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default BioSection;
