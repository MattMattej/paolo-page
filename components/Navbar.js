import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LenguageSwitcher from './LenguageSwitcher';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector(`.${styles.navbar}`).offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <span className={styles.brandName} onClick={() => scrollToSection('home')}>Paolo Grosso</span>
      <div className={styles.navItems}>
        <ul className={`${styles.ul} ${isMenuOpen ? styles.show : ''}`}>
          <li className={styles.li} onClick={() => scrollToSection('demos')}>{t('demos')}</li>
          <li className={styles.li} onClick={() => scrollToSection('listen')}>{t('listen')}</li>
          <li className={styles.li} onClick={() => scrollToSection('projects')}>{t('projects')}</li>
          <li className={styles.li} onClick={() => scrollToSection('bio')}>{t('bio')}</li>
          <li className={styles.li} onClick={() => scrollToSection('contact')}>{t('contact')}</li>
        </ul>
        <LenguageSwitcher />
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰ Menu
      </button>
    </nav>
  );
}