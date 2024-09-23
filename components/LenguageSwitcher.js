import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button
        onClick={() => changeLanguage('es')}
        style={{
          padding: '5px 10px',
          backgroundColor: i18n.language === 'es' ? '#a0e6ff' : '#fff',
          color: i18n.language === 'es' ? '#000' : '#333',
          border: '2px solid #a0e6ff',
          borderRadius: '20px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
        className="language-btn"
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        style={{
          padding: '5px 7px',
          backgroundColor: i18n.language === 'en' ? '#a0e6ff' : '#fff',
          color: i18n.language === 'en' ? '#000' : '#333',
          border: '2px solid #a0e6ff',
          borderRadius: '20px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
        className="language-btn"
      >
        ENG
      </button>
    </div>
  );
}
