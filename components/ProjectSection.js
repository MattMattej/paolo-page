import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '../styles/ProjectSection.module.css';
import { 
  Youtube, 
  Music, 
  Play, 
  Link as LinkIcon, 
  FileText, 
  Video,
  Info,
  ExternalLink,
  Spotify,
  Apple
} from 'lucide-react';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const selectedProjectRef = useRef(null);
  const [activeFilters, setActiveFilters] = useState(['ALL']);
  const [visibleProjects, setVisibleProjects] = useState(10);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      "id": 1,
      "title": "FUSE (CORTOMETRAJE - United Kingdom)",
      "description": "Diseño de sonido y mezcla. Ganador del festival 'The Vancouver Horror Show 2023 (Canada)' en 'Best Twist' y nominado en 'Best Sound', 'Best Short' y 'Best Lead Performance'. Nominado a 'Best Horror Short' en 'Performance Short Film Competition 2023'. Selección oficial en Festivales 'Sunday Shorts', 'Dead Northern', 'Frightfest', 'Lift-off Global Network Showcase 2023' Dirección: Will Dennies. 2023",
      "image": "/projects/fuse.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://www.willdennies.com/work_fuse2023", "text": "Más información" }
      ]
    },
    {
      "id": 2,
      "title": "MIGRAR (CORTOMETRAJE)",
      "description": "Composición, interpretación y grabación de música original. Diseño sonoro, postproducción y mezcla de sonido. Festivales: Detour 2024, Festival de Huelva 2024. Dirección: Lucía Haro y Maria del Mar Boix. Astuta Films. 2023",
      "image": "/projects/migrar.jpg",
      "categories": ["CINE", "AUDIO"],
      "links": [
        { "url": "https://vimeo.com/909108323", "text": "Ver trailer" }
      ]
    },
    {
      "id": 3,
      "title": "OTRAS PERSONAS (PELÍCULA)",
      "description": "Edición de diálogos, diseño sonoro, postproducción y mezcla de sonido. Estreno en Centro Cultural San Martín (Argentina) en la 4a edición del Festival 'Semana de Cine Latinoamericano'. Dirección: Augusto Chiminelli. 2022 - 2023",
      "image": "/projects/otras_personas.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=tuXWzuma19c", "text": "Ver trailer" }
      ]
    },
    {
      id: 4,
      title: "UNA LUZ AFUERA (PELÍCULA)",
      description: "Composición, interpretación, grabación y mezcla de música original. Diseñador sonoro. Ganadora del fondo Montevideo Audiovisual 2022. Estreno en cines septiembre 2024. Dirección: José Elizalde. Producción: Gardeliam. 2021 - 2022",
      image: "/projects/una_luz.jpeg",
      categories: ["CINE", "ALBUM", "AUDIO"],
      links: [
        { 
          url: "https://www.youtube.com/watch?v=M_3NH3EIpvk",
          text: "Ver trailer"
        },
        { 
          url: "https://open.spotify.com/album/666uXCB1uLPb7sdZ3fnEaJ",
          text: "Escuchar en Spotify"
        },
        { 
          url: "https://www.youtube.com/playlist?list=PLf9WXCV40h_Xm4Zs2KyKtajY4RuKXOBoP",
          text: "Escuchar en YouTube"
        },
        { 
          url: "https://music.apple.com/hn/album/una-luz-afuera-original-motion-picture-soundtrack/1769240618",
          text: "Escuchar en Apple Music"
        },
        { 
          url: "https://www.imdb.com/title/tt27212583/",
          text: "Ver en IMDb"
        }
      ]
    },
    {
      "id": 5,
      "title": "MIMESIS (CORTOMETRAJE)",
      "description": "Edición de diálogos, postproducción y mezcla de sonido. Estreno en Festival 'Detour' y 'Cortos en cartelera'. Dirección: Facundo Sosa. 2021",
      "image": "/projects/mimesis.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://www.imdb.com/title/tt21965794/?ref_=tt_rvi_tt_i_11", "text": "Ver en IMDb" }
      ]
    },
    {
      "id": 6,
      "title": "'SABOREANDO LA SOSTENIBILIDAD EN URUGUAY', Instituto SARAS (COMERCIAL)",
      "description": "Composición, interpretación, grabación y mezcla de música original. Sonido directo, edición de diálogos y postproducción de sonido. Realización y dirección: Guillermo Amato. 2020",
      "image": "/projects/saboreando.png",
      "categories": ["VARIOS", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=28oWx6W4zJg&list=PLdL4sEy2I5x6AqICEt7OuFEdP0hIbgLVf&index=11", "text": "Ver spot" }
      ]
    },
    {
      "id": 7,
      "title": "'CICLO TEMÁTICO: ALIMENTOS Y SOSTENIBILIDAD', Instituto SARAS (COMERCIAL)",
      "description": "Composición, interpretación, grabación y mezcla de música original. Sonido directo, editor de diálogos, editor de SFX y postproducción de sonido. Realización y dirección: Guillermo Amato. 2020",
      "image": "/projects/ciclo.png",
      "categories": ["VARIOS", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=lPg7HcsvQWM&list=PLdL4sEy2I5x6AqICEt7OuFEdP0hIbgLVf&index=12", "text": "Ver spot" }
      ]
    },
    {
      "id": 8,
      "title": "UNO DE NOSOTROS (CORTOMETRAJE)",
      "description": "Composición, grabación y mezcla de música original. Sonido directo y edición de diálogos. Ganador del People's Choice Award en Filminute Festival. Dirección: Facundo Sosa. Realización: Reject Films. 2019",
      "image": "/projects/uno_denos.png",
      "categories": ["CINE", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=1hxOLTpYYHE&t=40s", "text": "Ver cortometraje" }
      ]
    },
    {
      "id": 9,
      "title": "CÓMO DEJÉ DE PREOCUPARME POR QUIEN ME MIRA AL ESPEJO (CORTOMETRAJE)",
      "description": "Sonido directo y artista de Foley. Dirección: Facundo Sosa. Realización: Reject Films. 2019",
      "image": "/projects/como_deje.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://vimeo.com/370719388", "text": "Ver en Vimeo" },
        { "url": "https://www.imdb.com/title/tt21965618/?ref_=hm_rvi_tt_i_12", "text": "Ver en IMDb" },
        { "url": "https://www.youtube.com/watch?v=bwuXdNYhMsY", "text": "Entrevista al director" }
      ]
    },
    {
      "id": 10,
      "title": "'EL RITMO DE LA TRIBU' para CANDELA CROSSFIT (COMERCIAL)",
      "description": "Composición, interpretación, grabación y mezcla de música original. Diseñador sonoro. Realización: Reject Films. Dirección: Facundo Sosa. 2019",
      "image": "/projects/candela.png",
      "categories": ["VARIOS", "AUDIO"],
      "links": [
        { "url": "https://www.candelatraining.net/", "text": "Sitio web" }
      ]
    },
    {
      "id": 11,
      "title": "LUGAR EN NINGUNA PARTE (PELÍCULA DOCUMENTAL)",
      "description": "Diseño sonoro, edición de diálogos, postproducción y mezcla de sonido. Composición, interpretación y grabación parcial de música original. Realización y Dirección: Anthony Fletcher y Guillermo Amato. 2019 - 2018",
      "image": "/projects/lugar.png",
      "categories": ["CINE", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=b7851ONZqWM", "text": "Ver trailer" },
        { "url": "https://mvdaudiovisual.montevideo.gub.uy/es/contenido/lugar-en-ninguna-parte", "text": "Reseña" },
        { "url": "https://sodre.gub.uy/espectaculos/lugar-en-ninguna-parte/", "text": "Ficha técnica" }
      ]
    },
    {
      "id": 12,
      "title": "EL PUENTE (PELÍCULA)",
      "description": "Sonido directo (actualmente en etapa de postproducción). Realización: Reject Films. Dirección: Facundo Sosa. 2019 - 2018",
      "image": "/projects/el_puente.png",
      "categories": ["AUDIO"]
    },
    {
      "id": 13,
      "title": "PIELES Y RIELES (CORTOMETRAJE)",
      "description": "Editor de diálogos y SFX, diseñador sonoro, postproducción y mezcla de sonido. Realización y Dirección: Felipe Ipar. 2019 - 2018",
      "image": "/projects/pieles.png",
      "categories": ["AUDIO"]
    },
    {
      "id": 14,
      "title": "MAYRA (CORTOMETRAJE)",
      "description": "Diseño sonoro, postproducción y mezcla de sonido. Realización y Dirección: Anthony Fletcher. 2018",
      "image": "/projects/mayra.png",
      "categories": ["AUDIO"]
    },
    {
      "id": 15,
      "title": "MALPO Y PAULA (CORTOMETRAJE)",
      "description": "Composición, interpretación y grabación de música original. Diseñador sonoro, postproducción y mezcla de sonido. Realización y Dirección: Anthony Fletcher. 2018",
      "image": "/projects/malpo.png",
      "categories": ["CINE", "AUDIO"]
    },
    {
      "id": 16,
      "title": "FE EN LA RESISTENCIA (PELÍCULA DOCUMENTAL)",
      "description": "Composición, interpretación y grabación de música original. Postproducción y mezcla de sonido. Estreno en 'Sala Zitarrosa' y 'Sala B' del Sodre. Realización y Dirección: Nicolás Iglesias Schneider. 2018",
      "image": "/projects/fe.png",
      "categories": ["CINE", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=rcEKrxV8Bbo", "text": "Ver trailer" },
        { "url": "https://www.youtube.com/watch?v=0GIw8ECGbSM", "text": "Ver película" },
        { "url": "https://www.youtube.com/watch?v=Tw9Qfh8ITXw", "text": "Entrevista al director" }
      ]
    },
    {
      "id": 17,
      "title": "POR AMOR (CORTOMETRAJE ANIMADO)",
      "description": "Composición, interpretación y grabación de música original. Realización y Dirección: Macarena Campos y Camilo Fernández. 2018",
      "image": "/projects/por_amor.png",
      "categories": ["CINE"],
      "links": [
        { "url": "https://www.imdb.com/title/tt10660548/?ref_=nm_flmg_knf_c_1", "text": "Ver en IMDb" },
        { "url": "https://vimeo.com/281539503", "text": "Ver en Vimeo" },
        { "url": "https://www.macarenacampos.com/forlove", "text": "Web de la directora" }
      ]
    },
    {
      "id": 18,
      "title": "LA HUIDA (CORTOMETRAJE - Argentina)",
      "description": "Director de sonido. Composición, interpretación y grabación de música original. Realización y Dirección: Guillermo Lazarte. 2018 - 2017",
      "image": "/projects/la_huida.png",
      "categories": ["CINE", "VARIOS"],
      "links": [
        { "url": "https://www.imdb.com/title/tt8839234/?ref_=tt_rvi_tt_i_13", "text": "Ver en IMDb" },
        { "url": "https://www.youtube.com/watch?v=j_LnqefMzCU", "text": "Ver trailer" },
        { "url": "https://www.youtube.com/watch?v=9UzPtyMHFDw", "text": "Ver cortometraje" }
      ]
    },
    {
      "id": 19,
      "title": "FLAUTA MÁGICA NRO.1247 (CORTOMETRAJE)",
      "description": "Composición, interpretación y grabación de música original (colaboración con Gonzalo Varela). Realización y Dirección: Lucía Fidalgo. 2014",
      "image": "/projects/flauta_magica.png",
      "categories": ["CINE"],
      "links": [
        { "url": "https://m.imdb.com/title/tt10664508/?ref_=tt_mv_desc", "text": "Ver en IMDb" }
      ]
    },
    {
      "id": 20,
      "title": "SCOTT WHISKERS: The Search for the Golden Cat (VIDEOJUEGO - Alemania)",
      "description": "Composición, interpretación, grabación y mezcla de música original (20 tracks). Desarrollador: Alex Friedrich. Realización: Fancy Factory. 2024",
      "image": "/projects/goldencat.jpg",
      "categories": ["VIDEOJUEGO"],
      "links": []
    },
    {
      "id": 21,
      "title": "SCOTT WHISKERS: The search for Mr. Fumbleclaw (VIDEOJUEGO - Alemania)",
      "description": "Composición, interpretación, grabación y mezcla de música original (2 tracks, colaboración con Bruno Boselli). Desarrollador: Alex Friedrich. Realización: Fancy Factory. 2023",
      "image": "/projects/fumbleclaw.png",
      "categories": ["VIDEOJUEGO"],
      "links": [
        { "url": "https://www.imdb.com/title/tt29169862/", "text": "Ver en IMDb" },
        { "url": "https://www.youtube.com/watch?v=2Wr6SFsVxvY", "text": "Ver trailer" },
        { "url": "https://store.steampowered.com/app/1545610/Scott_Whiskers_in_the_Search_for_Mr_Fumbleclaw/", "text": "Steam" }
      ]
    },
    {
      "id": 22,
      "title": "CASTILLO INFLADO (OBRA DE TEATRO)",
      "description": "Composición, interpretación y grabación de música original (colaboración con Gonzalo Varela). Ganadora del Fondo Concursables para la Cultura (MEC) y mención en Premio Literario Juan Carlos Onetti. Estreno Sala Vaz Ferreira (SODRE). Dirección: Bruno Acevedo Quevedo. 2022 - 2021",
      "image": "/projects/castillo_inflado.png",
      "categories": ["TEATRO", "ALBUM"],
      "links": [
        { "url": "https://open.spotify.com/intl-es/album/0VsvWlxm33ynIJ1Zgl9dJP?si=94pHpdhzQQOE8I2fFMJCZw", "text": "Spotify" },
        { "url": "https://www.youtube.com/playlist?list=OLAK5uy_nK0yWmLg-oFjRNkCHqbhWWEulglREf1lM", "text": "YouTube" },
        { "url": "https://music.apple.com/hn/album/castillo-inflado-original-theatre-soundtrack/1613762272", "text": "Apple Music" },
        { "url": "https://sodre.gub.uy/espectaculos/castillo-inflable/", "text": "Información del espectáculo" },
        { "url": "https://www.youtube.com/watch?v=cP4VSo174x4", "text": "Entrevista" },
        { "url": "https://www.youtube.com/watch?v=Qhhs8IIQ5F4", "text": "Entrevista" }
      ]
    },
    {
      "id": 23,
      "title": "CHOCHAS (OBRA DE RADIOTEATRO)",
      "description": "Diseño de sonido. Grabación y edición de diálogos, editor de SFX y mezcla. Adaptación de la obra teatral 'Club de chochas', ganadora del concurso 'Ficción sonora' realizado por el Teatro Solís. Dirección: Luis Pazos. 2021",
      "image": "/projects/chochas.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://www.teatrosolis.org.uy/PROGRAMACION/Chochas-uc1483", "text": "Ficha del espectáculo" },
        { "url": "https://www.teatrosolis.org.uy/TS/Ficciones-uc1485?plantilla=54", "text": "Escuchar el radioteatro" }
      ]
    },
    {
      "id": 24,
      "title": "CASI DAHIANA (OBRA DE TEATRO)",
      "description": "Composición, interpretación, grabación y mezcla de música original. Diseñador sonoro. Seleccionada por el Programa de Fortalecimiento de las Artes. Ganadora del Premio Florencio 2021 en 'Mejor Actriz de Unipersonal'. Estreno en el teatro Stella D'Italia. Dirección: Anthony Fletcher. 2020",
      "image": "/projects/casi_dahiana.png",
      "categories": ["TEATRO", "AUDIO"],
      "links": [
        { "url": "https://www.teatrosolis.org.uy/PROGRAMACION/Casi-Dahiana-uc1452", "text": "Programación" },
        { "url": "https://intermediosproducciones.com.uy/produccion/casi-dahiana/", "text": "Información de la productora" },
        { "url": "https://www.youtube.com/watch?v=p6BSxlrwOtE", "text": "Entrevista a la actriz" },
        { "url": "https://www.facebook.com/watch/?v=2772912459616362", "text": "Video promocional" }
      ]
    },
    {
      "id": 25,
      "title": "SI NO ME COME LA NOCHE (OBRA DE TEATRO)",
      "description": "Composición, grabación, interpretación y mezcla de música original. Diseñador sonoro y técnico operador. Estreno en 'La cretina' y ciclo 'Nuevas dramaturgias' en Sala Vaz Ferreira. Dirección: Gustavo Kreiman. 2019",
      "image": "/projects/si_no_me_come.jpg",
      "categories": ["TEATRO", "AUDIO"],
      "links": [
        { "url": "https://semanariovoces.com/nuevas-dramaturgias-en-la-vaz-ferreira-obras-que-se-proponen-hacer-poesia-con-algo-del-ruido-actual-del-mundo/", "text": "Información del ciclo" }
      ]
    },
    {
      "id": 26,
      "title": "CUANDO TERMINA LA PRIMAVERA (OBRA DE TEATRO)",
      "description": "Composición, grabación, interpretación y mezcla de música original. Diseñador sonoro y técnico operador. Ganadora del Programa de Fortalecimiento de las Artes. Dirección: José Pagano. 2018",
      "image": "/projects/primavera.png",
      "categories": ["TEATRO", "AUDIO"],
      "links": [
        { "url": "https://www.agadu.org/agenda.php?ag=2787", "text": "Ficha técnica" },
        { "url": "http://historico.espectador.com/cultura/410922/cuando-termina-la-primavera-entre-naufragios-y-reflexiones-sobre-la-depresion-juvenil-en-nuestro-pais#1", "text": "Reseña" }
      ]
    },
    {
      "id": 27,
      "title": "CONFERENCIA SOBRE LA LLUVIA (OBRA DE TEATRO)",
      "description": "Composición, interpretación y grabación de música original. Ganadora del premio COFONTE. Estreno 'Teatro del Notariado'. Dirección: Eduardo Cervieri. 2022",
      "image": "/projects/conferencia.png",
      "categories": ["TEATRO", "ALBUM"],
      "links": [
        { "url": "https://open.spotify.com/intl-es/album/1YIZ1RvzYm15GvHlJlqoyL?si=c_x6Fvp5TmaECcu8DykD9g", "text": "Escuchar en Spotify" },
        { "url": "https://www.youtube.com/watch?v=kWXH8W0wsxo&list=OLAK5uy_nnCnv12RXEUbtWDszQy4cOdiyyktRKyP0", "text": "Escuchar en YouTube" },
        { "url": "https://music.apple.com/mx/album/conferencia-sobre-la-lluvia-original-theatre-soundtrack/1631576497", "text": "Escuchar en Apple Music" },
        { "url": "https://www.youtube.com/watch?v=Hy-e-mPUp3c&t=20s", "text": "Entrevista al actor" }
      ]
    },
    {
      "id": 28,
      "title": "SUEÑO DE LA PROCESIÓN DE SUS MUERTOS (OBRA DE TEATRO)",
      "description": "Diseñador sonoro y composición, grabación, interpretación y mezcla de música original (colaboración con Gonzalo Varela). Ganadora Premios Florencio 2023 a 'Mejor Escena Alternativa' y nominada en Mejor Ambientación sonora, Vestuario, Escenografía, Iluminación y Elenco. Realización: Animalismo Teatro. Dirección: Santiago Lans. 2023 - 2021",
      "image": "/projects/procesion.jpg",
      "categories": ["TEATRO", "ALBUM"],
      "links": [
        { "url": "https://open.spotify.com/intl-es/album/17U8tv4j59Z5HLLAQGVDLU?si=sRR4LNDsR8G7Fy-Szcw7yg", "text": "Escuchar en Spotify" },
        { "url": "https://www.youtube.com/watch?v=W6Ydw-jp6cs&list=OLAK5uy_kLezU6Qz13JmbX_CBQ1aFSIBJcTRSfpjs", "text": "Escuchar en YouTube" },
        { "url": "https://music.apple.com/us/album/sue%C3%B1o-de-la-procesi%C3%B3n-de-sus-muertos-original/1635327193", "text": "Escuchar en Apple Music" },
        { "url": "https://animalismoteatro.com", "text": "Web de Animalismo Teatro" },
        { "url": "https://www.youtube.com/watch?v=4jBavauQwmg", "text": "Entrevista en Uniradio" },
        { "url": "https://semanariovoces.com/ritual-escenico-en-la-madriguera/", "text": "Entrevista en Semanario Voces" }
      ]
    },
    {
      "id": 29,
      "title": "LORCA EN LAS TRINCHERAS DE MADRID (OBRA DE TEATRO)",
      "description": "Diseño sonoro y composición de música original (colaboración con Gonzalo Varela). Estreno en teatro El Galpón. Dirección: Adhemar Bianchi y Ximena Bianchi. 2017",
      "image": "/projects/lorca.png",
      "categories": ["TEATRO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=_pdyoHouTnE", "text": "Entrevistas" },
        { "url": "https://www.youtube.com/watch?v=qERe_7W0nMY", "text": "Trailer" }
      ]
    },
    {
      "id": 30,
      "title": "BANG BANG, ESTÁS MUERTO (OBRA DE TEATRO)",
      "description": "Diseño sonoro y composición, interpretación, grabación y mezcla de música original (colaboración con Gonzalo Varela). Nominada a 4 Premios 'Florencio 2016' incluyendo 'Mejor Ambientación Sonora'. Estreno teatro El Galpón. Dirección: Dante Alfonso. 2016",
      "image": "/projects/bang.png",
      "categories": ["TEATRO"],
      "links": [
        { "url": "https://www.montevideo.com.uy/Tiempo-libre/-Bang-bang-estas-muerto--en-El-Galpon-uc315350", "text": "Reseña" },
        { "url": "https://www.youtube.com/watch?v=eeGhhjX-le4", "text": "Entrevistas" },
        { "url": "https://www.youtube.com/watch?v=XwaUi7v7BwE", "text": "Entrevista en Buen Día" }
      ]
    },
    {
      "id": 31,
      "title": "HECHOS CONSUMADOS (OBRA DE TEATRO)",
      "description": "Diseño sonoro y composición, interpretación, grabación y mezcla de música original (colaboración con Gonzalo Varela). Estreno en teatro El Galpón. Dirección: Dardo Delgado. 2016",
      "image": "/projects/hechos_consumados.jpg",
      "categories": ["TEATRO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=Ds8gjocEOjs", "text": "Entrevista promocional" }
      ]
    },
    {
      "id": 32,
      "title": "ELIXIR (OBRA DE TEATRO)",
      "description": "Composición, grabación, interpretación y mezcla de música original. Diseño sonoro y técnico operador (colaboración con Gonzalo Varela). Ganadora mención 'mejor espectáculo Movida Joven 2016' Realización: Animalismo Teatro. Dirección: Santiago Lans. 2016",
      "image": "/projects/elixir.jpg",
      "categories": ["TEATRO", "ALBUM"],
      "links": [
        { "url": "https://animalismoteatro.com", "text": "Web de Animalismo Teatro" }
      ]
    },
    {
      "id": 33,
      "title": "EL ALA QUEBRADIZA DE LA MARIPOSA (OBRA DE TEATRO)",
      "description": "Composición, interpretación, grabación y mezcla de música original. Diseño sonoro y técnico operador (colaboración con Gonzalo Varela). Estreno teatro El Galpón. Dirección: Dante Alfonso. 2015",
      "image": "/projects/el_ala_quebradiza.jpg",
      "categories": ["TEATRO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=9yRjKU2Z7fU", "text": "Entrevista al director" },
        { "url": "https://www.alternativateatral.com/obra35868-el-ala-quebradiza-de-la-mariposa", "text": "Ficha técnica" }
      ]
    },
    {
      "id": 34,
      "title": "MOSQUITO (OBRA DE TEATRO)",
      "description": "Composición, grabación, interpretación y mezcla de música original. Diseñador sonoro y técnico operador. Dirección: Paolo Grosso y Mauro Olivera. 2018",
      "image": "/projects/mosquito.jpg",
      "categories": ["TEATRO", "AUDIO"],
      "links": [
        { "url": "https://cartelera.montevideo.com.uy/averespectaculo.aspx?20126", "text": "Cartelera" }
      ]
    },
    {
      "id": 35,
      "title": "HABBUK (OBRA DE TEATRO - Uruguay- Canadá - Islandia)",
      "description": "Composición, grabación, interpretación y mezcla de música original. Diseñador sonoro y técnico operador (colaboración con Gonzalo Varela). Realización: Animalismo Teatro. Dirección: Santiago Lans. 2018 - 2017",
      "image": "/projects/habbuk.jpg",
      "categories": ["TEATRO", "ALBUM"],
      "links": [
        { "url": "https://open.spotify.com/album/69iXlzOnU9wmzCXYGoSzuw?si=5bX1uIhoRfih-4GpDWOd_Q", "text": "Escuchar en Spotify" },
        { "url": "https://www.youtube.com/playlist?list=OLAK5uy_nQzW2Nc3AzXeLYLwTWpqsF7TLduSDwZts", "text": "Escuchar en YouTube" },
        { "url": "https://music.apple.com/us/album/habbuk-original-theatre-soundtrack/1613775324", "text": "Escuchar en Apple Music" },
        { "url": "https://animalismoteatro.com", "text": "Web de Animalismo Teatro" },
        { "url": "https://socioespectacular.com.uy/habbuk-teatro-victoria/?doing_wp_cron=1728007134.7502739429473876953125", "text": "Nota escrita" },
        { "url": "https://www.youtube.com/watch?v=130LZ7JwE5U", "text": "Trailer 1" },
        { "url": "https://www.youtube.com/watch?v=7lRlKjioxwA", "text": "Trailer 2" }
      ]
    },
    {
      "id": 36,
      "title": "LO CONTRARIO (OBRA DE TEATRO)",
      "description": "Composición, grabación, interpretación y mezcla de música original. Diseñador sonoro y técnico operador. Dirección: Sebastián Calderón. 2018",
      "image": "/projects/lo_contrario.jpg",
      "categories": ["TEATRO", "AUDIO"],
      "links": [
        { "url": "https://970universal.com/2018/04/17/sebastian-calderon-presento-lo-contrario-obra-que-estrena-el-25-de-abril/", "text": "Entrevista al director" }
      ]
    },
    {
      "id": 37,
      "title": "NO SE ELIGE SER UN HÉROE (OBRA DE TEATRO)",
      "description": "Composición, interpretación, grabación y mezcla de música original. Estreno teatro Circular. Dirección: Eduardo Cervieri. 2015",
      "image": "/projects/no_se_elige_ser_un_heroe.jpg",
      "categories": ["TEATRO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=b8OGOGo-6mU", "text": "Entrevista al director" },
        { "url": "https://www.youtube.com/watch?v=XgYP1YiLiwE", "text": "Trailer" },
        { "url": "https://www.teatrocircular.org.uy/no-se-elige-ser-un-heroe/", "text": "Ficha técnica" }
      ]
    },
    {
      "id": 38,
      "title": "LOS COMENSALES",
      "description": "Diseño sonoro y composición, interpretación, grabación y mezcla de música original (colaboración con Gonzalo Varela). Dirección: Felipe Ipar. 2014",
      "image": "/projects/los_comensales.jpg",
      "categories": ["TEATRO", "AUDIO"],
      "links": [
        { "url": "https://cartelera.montevideo.com.uy/averespectaculo.aspx?12406", "text": "Cartelera" }
      ]
    },
    {
      "id": 39,
      "title": "'1989' DEL GRUPO 'ENSAMBLE DE JAZZ GITANO' (FONOGRAMA)",
      "description": "Dirección de sonido. Interpretación en guitarra y voz. Grabado en los Estudios Sondor. Dirección general: Angel Varela Rey. 2020",
      "image": "/projects/1989_ensamble_jazz_gitano.jpg",
      "categories": ["MUSICA", "VARIOS"],
      "links": [
        { "url": "https://soundcloud.com/ensamble-de-jazz-gitano", "text": "Escuchar en SoundCloud" },
        { "url": "https://www.youtube.com/watch?v=TRaYv9wWWls", "text": "Spot del toque" }
      ]
    },
    {
      "id": 40,
      "title": "'TIME' (INTERLUDIO) DE LA OPERA-ROCK 'ECLIPSE'",
      "description": "Composición, interpretación, grabación y mezcla de la composición 'Time'. Dirección general: Fabián Almada. 2023",
      "image": "/projects/time_eclipse.jpg",
      "categories": ["MUSICA"],
      "links": [
        { "url": "https://fabianalmadarey.com/", "text": "Página del artista" }
      ]
    },
    {
      "id": 41,
      "title": "ARREGLO/INSTRUMENTACIÓN PARA LA COMPOSICIÓN 'GUITARRÓN'",
      "description": "Instrumentación para sección de cuerdas, interpretación, grabación y mezcla. Compositor: Federico Brann. 2023",
      "image": "/projects/guitarron.jpg",
      "categories": ["MUSICA", "ARREGLOS"]
    },
    {
      "id": 42,
      "title": "LA MANUSH (GRUPO MUSICAL)",
      "description": "Composición, guitarrista y vocalista. 2011- 2016",
      "image": "/projects/la_manush.jpg",
      "categories": ["MUSICA", "INTÉRPRETE MUSICAL", "ALBUM"],
      "links": [
        { "url": "#", "text": "Escuchar disco" }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedProjectRef.current && !selectedProjectRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filters = [
    { id: 'ALL', label: t('All') },
    { id: 'CINE', label: t('Film') },
    { id: 'VIDEOJUEGO', label: t('Videogame') },
    { id: 'TEATRO', label: t('Theatre') },
    { id: 'MUSICA', label: t('Music') },
    { id: 'VARIOS', label: t('Various') },
    { id: 'ALBUM', label: t('Albums') },
    { id: 'AUDIO', label: t('Audio') },
  ];

  // Función para formatear la descripción
  const formatDescription = (description) => {
    // Divide el texto en oraciones y las formatea
    const sentences = description.split(/(?<=\.)(?:\s+)/);
    return sentences.map((sentence, index) => (
      <React.Fragment key={index}>
        {sentence.trim()}
        {index < sentences.length - 1 && <br />}<br />
      </React.Fragment>
    ));
  };

  // Función para determinar el ícono del enlace
  const getLinkIcon = (url, text) => {
    const lowercaseUrl = url.toLowerCase();
    const lowercaseText = text.toLowerCase();

    if (lowercaseUrl.includes('spotify')) {
      return <Spotify className={styles.linkIcon} />;
    }
    if (lowercaseUrl.includes('youtube')) {
      return <Youtube className={styles.linkIcon} />;
    }
    if (lowercaseUrl.includes('apple.com/music')) {
      return <Apple className={styles.linkIcon} />;
    }
    if (lowercaseUrl.includes('imdb')) {
      return <Video className={styles.linkIcon} />;
    }
    if (lowercaseText.includes('trailer')) {
      return <Play className={styles.linkIcon} />;
    }
    if (lowercaseText.includes('info') || lowercaseText.includes('más')) {
      return <Info className={styles.linkIcon} />;
    }
    if (lowercaseText.includes('ficha')) {
      return <FileText className={styles.linkIcon} />;
    }
    return <ExternalLink className={styles.linkIcon} />;
  };

  const toggleFilter = (filterId) => {
    if (activeFilters[0] === filterId) {
      setActiveFilters(['ALL']); // Vuelve a 'ALL' si se hace clic en el filtro activo
    } else {
      setActiveFilters([filterId]); // Establece el nuevo filtro como único activo
    }
  };

  const filteredProjects = projects.filter(project => 
    activeFilters.includes('ALL') || project.categories.some(cat => activeFilters.includes(cat))
  );

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 10, filteredProjects.length));
  };

  const selectProject = (project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('Projects')}</h2>
        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilters.includes(filter.id) ? styles.active : ''}`}
              onClick={() => toggleFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {selectedProject && (
          <div className={styles.selectedProject} ref={selectedProjectRef}>
            <div className={styles.selectedProjectImage}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                layout="fill"
                objectFit="contain"
                className={styles.projectImage}
              />
            </div>
            <h3 className={styles.selectedProjectTitle}>{selectedProject.title}</h3>
            <div className={styles.selectedProjectDescription}>
              {formatDescription(selectedProject.description)}
            </div>
            <div className={styles.projectLinks}>
              {selectedProject.links?.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  {getLinkIcon(link.url, link.text)}
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className={styles.projectGrid}>
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${selectedProject?.id === project.id ? styles.selected : ''}`}
              onClick={() => selectProject(project)}
            >
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
        {visibleProjects < filteredProjects.length && (
          <button className={styles.loadMoreButton} onClick={showMoreProjects}>
            {t('Load More')}
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;