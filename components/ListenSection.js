import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ListenSection.module.css';

const ListenSection = () => {
  const { t } = useTranslation();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const clientId = '805950e62e3a4bfcb7d700faf861c5ad';  
  const clientSecret = 'd4a5a5e8633c4dffb5c97225afff5e24';  

  useEffect(() => {
    const getAccessToken = async () => {
      const credentials = btoa(`${clientId}:${clientSecret}`);
      const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
        }),
      });
      const data = await res.json();
      return data.access_token;
    };

    const fetchAlbums = async () => {
      const accessToken = await getAccessToken();
      const res = await fetch('https://api.spotify.com/v1/artists/71emEmZqNA92fpj1aBzsVF/albums', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();
      setAlbums(data.items);
      setLoading(false);
    };

    fetchAlbums();
  }, []);

  const renderAlbumName = (name) => {
    if (name.includes('(')) {
      const [mainName, parenthetical] = name.split('(');
      return (
        <>
          <h3>{mainName.trim()}</h3>
          <p>({parenthetical.trim()}</p>
        </>
      );
    }
    return <h3>{name}</h3>;
  };

  return (
    <section id="Albums" className={styles.listenSection}>
      <div className="container">
        <h2 className={styles.title}>{t('Albums')}</h2>
        <div className={styles.albumGrid}>
          {loading ? (
            <p>{t('Loading albums...')}</p>
          ) : albums.length > 0 ? (
            albums.map((album) => (
              <a
                key={album.id}
                href={album.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.albumLink}
              >
                <div className={styles.albumCard}>
                  <img
                    src={album.images[0].url}
                    alt={album.name}
                    className={styles.albumImage}
                  />
                  <div className={styles.albumInfo}>
                    {renderAlbumName(album.name)}
                    <p>{album.release_date.split('-')[0]}</p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p>{t('No albums found')}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListenSection;