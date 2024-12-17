import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const selectedProjectRef = useRef(null);
  const [activeFilters, setActiveFilters] = useState(['ALL']);
  const [visibleProjects, setVisibleProjects] = useState(12);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!i18n.isInitialized) {
    return <div>Loading...</div>;
  }
  const projects = useMemo(() => [
    {
      "id": 1,
      "title": t('FUSE_TITLE'),
      "description": t('FUSE_DESCRIPTION'),
      "image": "/projects/fuse.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://www.willdennies.com/work_fuse2023", "text": t('More Info') }
      ]
    },
    {
      "id": 2,
      "title": t('MIGRAR_TITLE'),
      "description": t('MIGRAR_DESCRIPTION'),
      "image": "/projects/migrar.jpg",
      "categories": ["CINE", "AUDIO"],
      "links": [
        { "url": "https://vimeo.com/909108323", "text": t('Watch trailer') }
      ]
    },
    {
      "id": 3,
      "title": t('OTRAS_PERSONAS_TITLE'),
      "description": t('OTRAS_PERSONAS_DESCRIPTION'),
      "image": "/projects/otras_personas.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=tuXWzuma19c", "text": t('Watch trailer') }
      ]
    },
    {
      "id": 4,
      "title": t('UNA_LUZ_AFUERA_TITLE'),
      "description": t('UNA_LUZ_AFUERA_DESCRIPTION'),
      "image": "/projects/una_luz.jpg",
      "categories": ["CINE", "ALBUM", "AUDIO"],
     /* "links": [
       { "url": "https://www.youtube.com/watch?v=M_3NH3EIpvk", "text": t('Watch trailer') },
        { "url": "https://open.spotify.com/album/666uXCB1uLPb7sdZ3fnEaJ", "text": t('Listen on Spotify') },
         { "url": "https://www.youtube.com/playlist?list=PLf9WXCV40h_Xm4Zs2KyKtajY4RuKXOBoP", "text": t('Listen on YouTube') },
        { "url": "https://music.apple.com/hn/album/una-luz-afuera-original-motion-picture-soundtrack/1769240618", "text": t('Listen on Apple Music') },
       { "url": "https://www.imdb.com/title/tt27212583/", "text": t('See on IMDb') }
      ]*/
    },
    {
      "id": 5,
      "title": t('MIMESIS_TITLE'),
      "description": t('MIMESIS_DESCRIPTION'),
      "image": "/projects/mimesis.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://www.imdb.com/title/tt21965794/?ref_=tt_rvi_tt_i_11", "text": t('See on IMDb') }
      ]
    },
    {
      "id": 6,
      "title": t('SABOREANDO_LA_SOSTENIBILIDAD_TITLE'),
      "description": t('SABOREANDO_LA_SOSTENIBILIDAD_DESCRIPTION'),
      "image": "/projects/saboreando.png",
      "categories": ["VARIOS", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=28oWx6W4zJg&list=PLdL4sEy2I5x6AqICEt7OuFEdP0hIbgLVf&index=11", "text": t('Watch spot') }
      ]
    },
    {
      "id": 7,
      "title": t('CICLO_TEMATICO_TITLE'),
      "description": t('CICLO_TEMATICO_DESCRIPTION'),
      "image": "/projects/ciclo.png",
      "categories": ["VARIOS", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=lPg7HcsvQWM&list=PLdL4sEy2I5x6AqICEt7OuFEdP0hIbgLVf&index=12", "text": t('Watch spot') }
      ]
    },
    {
      "id": 8,
      "title": t('UNO_DE_NOSOTROS_TITLE'),
      "description": t('UNO_DE_NOSOTROS_DESCRIPTION'),
      "image": "/projects/uno_denos.png",
      "categories": ["CINE", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=1hxOLTpYYHE&t=40s", "text": t('Watch short film') }
      ]
    },
    {
      "id": 9,
      "title": t('COMO_DEJE_DE_PREOCUPARME_TITLE'),
      "description": t('COMO_DEJE_DE_PREOCUPARME_DESCRIPTION'),
      "image": "/projects/como_deje.png",
      "categories": ["AUDIO"],
      "links": [
        { "url": "https://vimeo.com/370719388", "text": t('See on Vimeo') },
        { "url": "https://www.imdb.com/title/tt21965618/?ref_=hm_rvi_tt_i_12", "text": t('See on IMDb') },
        { "url": "https://www.youtube.com/watch?v=bwuXdNYhMsY", "text": t('Interview with director') }
      ]
    },
    {
      "id": 10,
      "title": t('RITMO_DE_LA_TRIBU_TITLE'),
      "description": t('RITMO_DE_LA_TRIBU_DESCRIPTION'),
      "image": "/projects/candela.png",
      "categories": ["VARIOS", "AUDIO"],
      "links": [
        { "url": "https://www.candelatraining.net/", "text": t('Website') }
      ]
    },
    {
      "id": 11,
      "title": t('LUGAR_EN_NINGUNA_PARTE_TITLE'),
      "description": t('LUGAR_EN_NINGUNA_PARTE_DESCRIPTION'),
      "image": "/projects/lugar.png",
      "categories": ["CINE", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=b7851ONZqWM", "text": t('Watch trailer') },
        { "url": "https://mvdaudiovisual.montevideo.gub.uy/es/contenido/lugar-en-ninguna-parte", "text": t('Review') },
        { "url": "https://sodre.gub.uy/espectaculos/lugar-en-ninguna-parte/", "text": t('Technical sheet') }
      ]
    },
    {
      "id": 12,
      "title": t('EL_PUENTE_TITLE'),
      "description": t('EL_PUENTE_DESCRIPTION'),
      "image": "/projects/el_puente.png",
      "categories": ["AUDIO"]
    },
    {
      "id": 13,
      "title": t('PIELES_Y_RIELES_TITLE'),
      "description": t('PIELES_Y_RIELES_DESCRIPTION'),
      "image": "/projects/pieles.png",
      "categories": ["AUDIO"]
    },
    {
      "id": 14,
      "title": t('MAYRA_TITLE'),
      "description": t('MAYRA_DESCRIPTION'),
      "image": "/projects/mayra.png",
      "categories": ["AUDIO"]
    },
    {
      "id": 15,
      "title": t('MALPO_Y_PAULA_TITLE'),
      "description": t('MALPO_Y_PAULA_DESCRIPTION'),
      "image": "/projects/malpo.png",
      "categories": ["CINE", "AUDIO"]
    },
    {
      "id": 16,
      "title": t('FE_EN_LA_RESISTENCIA_TITLE'),
      "description": t('FE_EN_LA_RESISTENCIA_DESCRIPTION'),
      "image": "/projects/fe.png",
      "categories": ["CINE", "AUDIO"],
      "links": [
        { "url": "https://www.youtube.com/watch?v=rcEKrxV8Bbo", "text": t('Watch trailer') },
        { "url": "https://www.youtube.com/watch?v=0GIw8ECGbSM", "text": t('Watch film') },
        { "url": "https://www.youtube.com/watch?v=Tw9Qfh8ITXw", "text": t('Interview with director') }
      ]
    },
    {
      "id": 17,
      "title": t('POR_AMOR_TITLE'),
      "description": t('POR_AMOR_DESCRIPTION'),
      "image": "/projects/por_amor.png",
      "categories": ["CINE"],
      "links": [
        { "url": "https://www.imdb.com/title/tt10660548/?ref_=nm_flmg_knf_c_1", "text": t('See on IMDb') },
        { "url": "https://vimeo.com/281539503", "text": t('See on Vimeo') },
        { "url": "https://www.macarenacampos.com/forlove", "text": t('Director\'s Website') }
      ]
    },
    {
      "id": 18,
      "title": t('LA_HUIDA_TITLE'),
      "description": t('LA_HUIDA_DESCRIPTION'),
      "image": "/projects/la_huida.png",
      "categories": ["CINE", "VARIOS"],
      "links": [
        { "url": "https://www.imdb.com/title/tt8839234/?ref_=tt_rvi_tt_i_13", "text": t('See on IMDb') },
        { "url": "https://www.youtube.com/watch?v=j_LbVqvVjd8", "text": t('Watch trailer') }
      ]
    },




    {
  "id": 19,
  "title": t('FLAUTA_MAGICA_TITLE'),
  "description": t('FLAUTA_MAGICA_DESCRIPTION'),
  "image": "/projects/flauta_magica.png",
  "categories": ["CINE"],
  "links": [
    { "url": "https://m.imdb.com/title/tt10664508/?ref_=tt_mv_desc", "text": t('See on IMDb') }
  ]
},
{
  "id": 20,
  "title": t('SCOTT_WHISKERS_GOLDEN_CAT_TITLE'),
  "description": t('SCOTT_WHISKERS_GOLDEN_CAT_DESCRIPTION'),
  "image": "/projects/goldencat.jpg",
  "categories": ["VIDEOJUEGO"],
  "links": []
},
{
  "id": 21,
  "title": t('SCOTT_WHISKERS_FUMBLECLAW_TITLE'),
  "description": t('SCOTT_WHISKERS_FUMBLECLAW_DESCRIPTION'),
  "image": "/projects/fumbleclaw.png",
  "categories": ["VIDEOJUEGO"],
  "links": [
    { "url": "https://www.imdb.com/title/tt29169862/", "text": t('See on IMDb') },
    { "url": "https://www.youtube.com/watch?v=2Wr6SFsVxvY", "text": t('Watch trailer') },
    { "url": "https://store.steampowered.com/app/1545610/Scott_Whiskers_in_the_Search_for_Mr_Fumbleclaw/", "text": t('Steam') }
  ]
},
{
  "id": 22,
  "title": t('CASTILLO_INFLADO_TITLE'),
  "description": t('CASTILLO_INFLADO_DESCRIPTION'),
  "image": "/projects/castillo_inflado.png",
  "categories": ["TEATRO", "ALBUM"],
  "links": [
    { "url": "https://open.spotify.com/intl-es/album/0VsvWlxm33ynIJ1Zgl9dJP?si=94pHpdhzQQOE8I2fFMJCZw", "text": t('Spotify') },
    { "url": "https://www.youtube.com/playlist?list=OLAK5uy_nK0yWmLg-oFjRNkCHqbhWWEulglREf1lM", "text": t('YouTube') },
    { "url": "https://music.apple.com/hn/album/castillo-inflado-original-theatre-soundtrack/1613762272", "text": t('Apple Music') },
    { "url": "https://sodre.gub.uy/espectaculos/castillo-inflable/", "text": t('Show Info') },
    { "url": "https://www.youtube.com/watch?v=cP4VSo174x4", "text": t('Interview') },
    { "url": "https://www.youtube.com/watch?v=Qhhs8IIQ5F4", "text": t('Interview') }
  ]
},
{
  "id": 23,
  "title": t('CHOCHAS_TITLE'),
  "description": t('CHOCHAS_DESCRIPTION'),
  "image": "/projects/chochas.png",
  "categories": ["AUDIO"],
  "links": [
    { "url": "https://www.teatrosolis.org.uy/PROGRAMACION/Chochas-uc1483", "text": t('Show Info') },
    { "url": "https://www.teatrosolis.org.uy/TS/Ficciones-uc1485?plantilla=54", "text": t('Listen to the radioplay') }
  ]
},
{
  "id": 24,
  "title": t('CASI_DAHIANA_TITLE'),
  "description": t('CASI_DAHIANA_DESCRIPTION'),
  "image": "/projects/casi_dahiana.png",
  "categories": ["TEATRO", "AUDIO"],
  "links": [
    { "url": "https://www.teatrosolis.org.uy/PROGRAMACION/Casi-Dahiana-uc1452", "text": t('Program Info') },
    { "url": "https://intermediosproducciones.com.uy/produccion/casi-dahiana/", "text": t('Producer Info') },
    { "url": "https://www.youtube.com/watch?v=p6BSxlrwOtE", "text": t('Actress Interview') },
    { "url": "https://www.facebook.com/watch/?v=2772912459616362", "text": t('Promotional Video') }
  ]
},
{
  "id": 25,
  "title": t('SI_NO_ME_COME_NOCHE_TITLE'),
  "description": t('SI_NO_ME_COME_NOCHE_DESCRIPTION'),
  "image": "/projects/si_no_me_come.jpg",
  "categories": ["TEATRO", "AUDIO"],
  "links": [
    { "url": "https://semanariovoces.com/nuevas-dramaturgias-en-la-vaz-ferreira-obras-que-se-proponen-hacer-poesia-con-algo-del-ruido-actual-del-mundo/", "text": t('Cycle Info') }
  ]
},
{
  "id": 26,
  "title": t('CUANDO_TERMINA_PRIMAVERA_TITLE'),
  "description": t('CUANDO_TERMINA_PRIMAVERA_DESCRIPTION'),
  "image": "/projects/primavera.png",
  "categories": ["TEATRO", "AUDIO"],
  "links": [
    { "url": "https://www.agadu.org/agenda.php?ag=2787", "text": t('Technical Sheet') },
    { "url": "http://historico.espectador.com/cultura/410922/cuando-termina-la-primavera-entre-naufragios-y-reflexiones-sobre-la-depresion-juvenil-en-nuestro-pais#1", "text": t('Review') }
  ]
},
{
  "id": 27,
  "title": t('CONFERENCIA_SOBRE_LLUVIA_TITLE'),
  "description": t('CONFERENCIA_SOBRE_LLUVIA_DESCRIPTION'),
  "image": "/projects/conferencia.png",
  "categories": ["TEATRO", "ALBUM"],
  "links": [
    { "url": "https://open.spotify.com/intl-es/album/1YIZ1RvzYm15GvHlJlqoyL?si=c_x6Fvp5TmaECcu8DykD9g", "text": t('Listen on Spotify') },
    { "url": "https://www.youtube.com/watch?v=kWXH8W0wsxo&list=OLAK5uy_nnCnv12RXEUbtWDszQy4cOdiyyktRKyP0", "text": t('Listen on YouTube') },
    { "url": "https://music.apple.com/mx/album/conferencia-sobre-la-lluvia-original-theatre-soundtrack/1631576497", "text": t('Listen on Apple Music') },
    { "url": "https://www.youtube.com/watch?v=Hy-e-mPUp3c&t=20s", "text": t('Actor Interview') }
  ]
},




{
  "id": 28,
  "title": t('SUEÑO_DE_LA_PROCESIÓN_DE_SUS_MUERTOS'),
  "description": t('SUEÑO_DE_LA_PROCESIÓN_DE_SUS_MUERTOS_DESCRIPTION'),
  "image": "/projects/procesion.png",
  "categories": ["TEATRO", "ALBUM"],
   /* "links": [
    { "url": "https://open.spotify.com/intl-es/album/17U8tv4j59Z5HLLAQGVDLU?si=sRR4LNDsR8G7Fy-Szcw7yg", "text": t('Escuchar en Spotify') },
    { "url": "https://www.youtube.com/watch?v=W6Ydw-jp6cs&list=OLAK5uy_kLezU6Qz13JmbX_CBQ1aFSIBJcTRSfpjs", "text": t('Escuchar en YouTube') },
  { "url": "https://music.apple.com/us/album/sue%C3%B1o-de-la-procesi%C3%B3n-de-sus-muertos-original/1635327193", "text": t('Escuchar en Apple Music') },
    { "url": "https://animalismoteatro.com", "text": t('Web de Animalismo Teatro') },
    { "url": "https://www.youtube.com/watch?v=4jBavauQwmg", "text": t('Entrevista en Uniradio') },
    { "url": "https://semanariovoces.com/ritual-escenico-en-la-madriguera/", "text": t('Entrevista en Semanario Voces') }
  ]*/

},
{
  "id": 29,
  "title": t('LORCA_EN_LAS_TRINCHERAS_DE_MADRID'),
  "description": t('LORCA_EN_LAS_TRINCHERAS_DE_MADRID_DESCRIPTION'),
  "image": "/projects/lorca.png",
  "categories": ["TEATRO"],
  "links": [
    { "url": "https://www.youtube.com/watch?v=_pdyoHouTnE", "text": t('Entrevistas') },
    { "url": "https://www.youtube.com/watch?v=qERe_7W0nMY", "text": t('Trailer') }
  ]
},
{
  "id": 30,
  "title": t('BANG_BANG_ESTÁS_MUERTO'),
  "description": t('BANG_BANG_ESTÁS_MUERTO_DESCRIPTION'),
  "image": "/projects/bang.png",
  "categories": ["TEATRO"],
  "links": [
    { "url": "https://www.montevideo.com.uy/Tiempo-libre/-Bang-bang-estas-muerto--en-El-Galpon-uc315350", "text": t('Reseña') },
    { "url": "https://www.youtube.com/watch?v=eeGhhjX-le4", "text": t('Entrevistas') },
    { "url": "https://www.youtube.com/watch?v=XwaUi7v7BwE", "text": t('Entrevista en Buen Día') }
  ]
},
{
  "id": 31,
  "title": t('HECHOS_CONSUMADOS'),
  "description": t('HECHOS_CONSUMADOS_DESCRIPTION'),
  "image": "/projects/hechos_consumados.png",
  "categories": ["TEATRO"],
  "links": [
    { "url": "https://www.youtube.com/watch?v=Ds8gjocEOjs", "text": t('Entrevista promocional') }
  ]
},
{
  "id": 32,
  "title": t('ELIXIR'),
  "description": t('ELIXIR_DESCRIPTION'),
  "image": "/projects/elixir.png",
  "categories": ["TEATRO", "ALBUM"],
  "links": [
    { "url": "https://animalismoteatro.com", "text": t('Web de Animalismo Teatro') }
  ]
},
{
  "id": 33,
  "title": t('EL_Ala_QUEBRADIZA_DE_LA_MARIPOSA'),
  "description": t('EL_Ala_QUEBRADIZA_DE_LA_MARIPOSA_DESCRIPTION'),
  "image": "/projects/quebradiza.png",
  "categories": ["TEATRO"],
  "links": [
    { "url": "https://www.youtube.com/watch?v=9yRjKU2Z7fU", "text": t('Entrevista al director') },
    { "url": "https://www.alternativateatral.com/obra35868-el-ala-quebradiza-de-la-mariposa", "text": t('Ficha técnica') }
  ]
},
{
  "id": 34,
  "title": t('MOSQUITO'),
  "description": t('MOSQUITO_DESCRIPTION'),
  "image": "/projects/mosquito.jpg",
  "categories": ["TEATRO", "AUDIO"],
  "links": [
    { "url": "https://cartelera.montevideo.com.uy/averespectaculo.aspx?20126", "text": t('Cartelera') }
  ]
},
{
  "id": 35,
  "title": t('HABBUK'),
  "description": t('HABBUK_DESCRIPTION'),
  "image": "/projects/habbuk.jpg",
  "categories": ["TEATRO", "ALBUM"],
  "links": [
    { "url": "https://open.spotify.com/album/69iXlzOnU9wmzCXYGoSzuw?si=5bX1uIhoRfih-4GpDWOd_Q", "text": t('Escuchar en Spotify') },
    { "url": "https://www.youtube.com/playlist?list=OLAK5uy_nQzW2Nc3AzXeLYLwTWpqsF7TLduSDwZts", "text": t('Escuchar en YouTube') },
    { "url": "https://music.apple.com/us/album/habbuk-original-theatre-soundtrack/1613775324", "text": t('Escuchar en Apple Music') },
    { "url": "https://animalismoteatro.com", "text": t('Web de Animalismo Teatro') },
    { "url": "https://socioespectacular.com.uy/habbuk-teatro-victoria/?doing_wp_cron=1728007134.7502739429473876953125", "text": t('Nota escrita') },
    { "url": "https://www.youtube.com/watch?v=130LZ7JwE5U", "text": t('Trailer 1') },
    { "url": "https://www.youtube.com/watch?v=7lRlKjioxwA", "text": t('Trailer 2') }
  ]
},
{
  "id": 36,
  "title": t('LO_CONTRARIO'),
  "description": t('LO_CONTRARIO_DESCRIPTION'),
  "image": "/projects/contrario.png",
  "categories": ["TEATRO", "AUDIO"],
  "links": [
    { "url": "https://970universal.com/2018/04/17/sebastian-calderon-presento-lo-contrario-obra-que-estrena-el-25-de-abril/", "text": t('Entrevista al director') }
  ]
},
{
  "id": 37,
  "title": t('NO_SE_ELIGE_SER_UN_HEROE'),
  "description": t('NO_SE_ELIGE_SER_UN_HEROE_DESCRIPTION'),
  "image": "/projects/heroe.png",
  "categories": ["TEATRO"],
  "links": [
    { "url": "https://www.youtube.com/watch?v=b8OGOGo-6mU", "text": t('Entrevista al director') },
    { "url": "https://www.youtube.com/watch?v=XgYP1YiLiwE", "text": t('Trailer') },
    { "url": "https://www.teatrocircular.org.uy/no-se-elige-ser-un-heroe/", "text": t('Ficha técnica') }
  ]
},
{
  "id": 38,
  "title": t('LOS_COMENSALES'),
  "description": t('LOS_COMENSALES_DESCRIPTION'),
  "image": "/projects/comensales.jpg",
  "categories": ["TEATRO", "AUDIO"],
  "links": [
    { "url": "https://cartelera.montevideo.com.uy/averespectaculo.aspx?12406", "text": t('Cartelera') }
  ]
},
{
  "id": 39,
  "title": t("1989_ENSAMBLE_JAZZ_GITANO_TITLE"),
  "description": t("1989_ENSAMBLE_JAZZ_GITANO_DESCRIPTION"),
  "image": "/projects/gitano.png",
  "categories": ["AUDIO"],
  "links": [
    { "url": "https://www.youtube.com/watch?v=IR8To0qugXs", "text": t("WATCH_ON_YOUTUBE") }
  ]
},
{
 "id": 40,
  "title": t("TIME_INTERLUDIO_ECLIPSE_TITLE"),
  "description": t("TIME_INTERLUDIO_ECLIPSE_DESCRIPTION"),
  "image": "/projects/clipse.png",
  "categories": ["MUSICA"],
  "links": [
    { "url": "https://fabianalmadarey.com/", "text": t("ARTIST_PAGE") }
  ]
},
{
  "id": 41,
  "title": t("ARREGLO_GUITARRON_TITLE"),
  "description": t("ARREGLO_GUITARRON_DESCRIPTION"),
  "image": "/projects/guitarron.png",
  "categories": ["MUSICA", "ARREGLOS"]
},
{
  "id": 42,
  "title": t("LA_MANUSH_TITLE"),
  "description": t("LA_MANUSH_DESCRIPTION"),
  "image": "/projects/la_manush.jpg",
  "categories": ["MUSICA", "INTÉRPRETE MUSICAL", "ALBUM"],
  "links": [
    { "url": "#", "text": t("LISTEN_TO_ALBUM") }
  ]
},
].map(project => ({
  ...project,
  links: project.links?.filter(link => link.url && link.text) || [] // Filtra links inválidos
})), [t]);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (selectedProjectRef.current && !selectedProjectRef.current.contains(event.target)) {
      setSelectedProject(null);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

useEffect(() => {
  if (selectedProject && sectionRef.current) {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}, [selectedProject]);

const filters = [
  { id: 'ALL', label: t('All') },
  { id: 'CINE', label: t('Film') },
  { id: 'VIDEOJUEGO', label: t('Videogame') },
  { id: 'TEATRO', label: t('Theatre') },
  { id: 'MUSICA', label: t('Music') },
  { id: 'VARIOS', label: t('Various') },
  { id: 'AUDIO', label: t('Audio') },
];

const toggleFilter = (filterId) => {
  setActiveFilters(activeFilters[0] === filterId ? ['ALL'] : [filterId]);
};

const showMoreProjects = () => {
  setVisibleProjects((prev) => Math.min(prev + 10, filteredProjects.length));
};

const selectProject = (project) => {
  setSelectedProject(selectedProject?.id === project.id ? null : project);
};

const formatDescription = (description) => {
  const sentences = description.split(/(?<=\.)(?:\s+)/);
  return sentences.map((sentence, index) => (
    <React.Fragment key={index}>
      {sentence.trim()}
      {index < sentences.length - 1 && <br />}<br />
    </React.Fragment>
  ));
};

const getLinkIcon = (url, text) => {
  const lowercaseUrl = url.toLowerCase();
  const lowercaseText = text.toLowerCase();

  if (lowercaseUrl.includes('spotify')) return <Spotify className={styles.linkIcon} />;
  if (lowercaseUrl.includes('youtube')) return <Youtube className={styles.linkIcon} />;
  if (lowercaseUrl.includes('apple.com/music')) return <Apple className={styles.linkIcon} />;
  if (lowercaseUrl.includes('imdb')) return <Video className={styles.linkIcon} />;
  if (lowercaseText.includes('trailer')) return <Play className={styles.linkIcon} />;
  if (lowercaseText.includes('info')) return <Info className={styles.linkIcon} />;
  return <ExternalLink className={styles.linkIcon} />;
};

const filteredProjects = projects.filter(project =>
  activeFilters.includes('ALL') || project.categories.some(cat => activeFilters.includes(cat))
);

return (
  <section id="projects" className={styles.projectsSection} ref={sectionRef}>
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
            {selectedProject.links?.map((link, index) => {
              if (!link?.url || !link?.text) return null;
              return (
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
              );
            })}
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