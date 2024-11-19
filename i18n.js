const i18next = require('i18next');
const { initReactI18next } = require('react-i18next');

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          bio: 'Bio',
          demos: 'Demos',
          listen: 'Listen',
          projects: 'Projects',
          news: 'News',
          contact: 'Contact',
          'All': 'All',
          'Film': 'Film',
          'Videogame': 'Videogame',
          'Theatre': 'Theatre',
          'Music': 'Music',
          'Various': 'Various',
          'Albums': 'Albums',
          'ES': 'ES',
          'EN': 'EN',

           // HomeSection
           'home_description': 'Original music soundtracks that transcend boundaries.',
           'expandable_title_1': 'Unique Sound and Musical Signature',
           'expandable_content_1': 'My compositions always start from very particular and varied places, inspired by the My compositions always arise from very particular and varied places, inspired by the narrative and the world created in each project. By blending diverse elements, influences and musical genres, I manage to create a unique sound palette and musical signature for each particular project.',
           'expandable_title_2': 'Versatile Composer',
           'expandable_content_2': 'My musical skills and abilities span a wide range of genres and styles, from contemporary orchestral pieces, chamber ensembles and Big Bands to music from diverse world cultures and electrifying digitally developed electronic soundscapes. I have the ability to adapt my style and approach to the unique vision and tone of each artistic project, making the music fit seamlessly with the directors creative vision.',
           'expandable_title_3': 'Collaborative Teamwork',
           'expandable_content_3': 'Beyond the work environment, I have a deep respect for the collaborative nature and teamwork of every artistic process. I am captivated by the synergy that comes from working closely with directors and developers, producers and the entire creative team, bringing all my experience and maximum responsibility to each project.',

          // DemosSection
          'Demos': 'Demos',
          'Demo Teatro': 'Theater Demo',
          'Demo Audiovisual': 'Audiovisual Demo',
          'Demo Otro': 'Other Demo',

          // ProjectsSection
          'Projects': 'Projects',
          'Pelicula1': 'Movie 1',
          'Videojuego1': 'Videogame 1',
          'Teatro1': 'Theatre 1',
          'Musica1': 'Music 1',
          'Album1': 'Album 1',
          'Varios1': 'Various 1',

          // BioSection
          'About Paolo': 'About Paolo',
          'bio_text_1': 'I am a composer, musician, and sound designer born in Montevideo, Uruguay in 1989. I hold a Bachelors degree from the Universidad de la República (UDELAR) in Music, profile: Composition, where I studied with professors Osvaldo Budón, Leonardo Secco, and Luis Jure. Additionally, I studied composition with Coriún Aharonián and explored various musical genres such as Jazz, Swing, Classical, Indian Music, Candombe, Jazz Manouche, and Folk with teachers like Ariel Ameijenda, Ángel Varela, Ludmila Cavallaro, Fabián Almada, and Mario Piro, among others.',
          'bio_text_2': 'I currently teach sound (post-production, sound design) in the Bachelors Degree in Languages and Audiovisual Media at the University of the Republic (UDELAR) in the Eastern Regional University Center (CURE) and I am a professor of Music Production at the Rodó Conservatory. I have also been teaching courses and master classes of sound and music for film and theater in several public and private institutions, and I have worked as an assistant professor at EMAD ( Multidisciplinary School of Dramatic Art) and ECU (Uruguayan Film School).',
          'bio_text_3': ' Music composition has naturally become my profession, initially by studying and developing my performance skills over the years across various instruments and genres (drums, guitar, sitar, violin, clarinet, and saxophone), and later on by entering the University to study music composition formally. I am known for being an incredibly versatile composer and for achieving in my music a sound product of the highest quality. Throughout my education and career, I have been deeply immersed in a passionate quest for new musical horizons, which keeps me constantly exploring the elements, techniques, and musical language that define music across every imaginable style and ensemble, ranging from orchestral or chamber compositions to music from diverse cultures and regions around the world. My particular sensitivity and artistic creativity have allowed me to develop a unique musical signature that characterizes each of my compositions and my passion for teamwork and collaboration has led me to compose music for a wide range of audiovisual formats, including short films, feature films, documentaries, theater productions, and video games created by people with astounding creative visions.',
          'bio_text_4': 'For years, I have studied and worked in sound for audiovisual media, gaining extensive experience as a sound designer, mixer, and audio post-producer.',
          'bio_text_5': 'I have received awards, nominations, mentions, and grants for my work as a composer and sound designer at the Florencio Awards, Movida Joven, FONAM, SUDEI, and several film festivals.',

            // Footer
        'contact_title': 'Contact',
        'contact_email': 'Email:',
        'contact_phone': 'Phone:',
        },
      },
      es: {
        translation: {
          // Navbar
          bio: 'Biografía',
          demos: 'Demos',
          listen: 'Escuchar',
          projects: 'Proyectos',
          news: 'Noticias',
          contact: 'Contacto',
          'All': 'Todo',
          'Film': 'Película',
          'Videogame': 'Videojuego',
          'Theatre': 'Teatro',
          'Music': 'Música',
          'Various': 'Varios',
          'Albums': 'Álbumes',
          'ES': 'ES',
          'EN': 'EN',

          // HomeSection
          'home_description': 'Bandas sonoras originales que trascienden fronteras.',
          'expandable_title_1': 'Sonido único y sello musical',
          'expandable_content_1': 'Mis composiciones siempre surgen de lugares muy particulares y variados, inspiradas por la narrativa y el mundo creado en cada proyecto. Al mezclar diversos elementos, influencias y corrientes musicales, logro crear una paleta sonora y una firma musical totalmente únicas para cada proyecto en particular.',
          'expandable_title_2': 'Compositor Versátil',
          'expandable_content_2': 'Mis habilidades y capacidades musicales abarcan una amplia gama de géneros y estilos, desde piezas orquestales contemporáneas, conjuntos de cámara y Big Bands hasta música de diversas culturas del mundo y electrizantes paisajes sonoros electrónicos desarrollados digitalmente. Tengo la capacidad de adaptar mi estilo y enfoque a la visión y tono únicos de cada proyecto artístico, haciendo que la música encaje a la perfección con la visión creativa del director.',
          'expandable_title_3': 'Trabajo en Equipo Colaborativo',
          'expandable_content_3': 'Más allá del entorno de trabajo, siento un profundo respeto por la naturaleza colaborativa y el trabajo en equipo que sucede en todo proceso artístico. Me cautiva la sinergia que se produce al trabajar en estrecha colaboración con directores, desarrolladores, productores y todo el equipo creativo, aportando toda mi experiencia y máxima responsabilidad a cada proyecto.',

          // DemosSection
          'Demos': 'Demos',
          'Demo Teatro': 'Demo Teatro',
          'Demo Audiovisual': 'Demo Audiovisual',
          'Demo Otro': 'Otro Demo',

          // ProjectsSection
          'Projects': 'Proyectos',
          'Pelicula1': 'Película 1',
          'Videojuego1': 'Videojuego 1',
          'Teatro1': 'Teatro 1',
          'Musica1': 'Música 1',
          'Album1': 'Álbum 1',
          'Varios1': 'Varios 1',

          // BioSection
          'About Paolo': 'Sobre Paolo',
          'bio_text_1': 'Soy un compositor, músico y diseñador sonoro nacido en Montevideo, Uruguay en 1989.   Poseo un título de grado de la Universidad de la República (UDELAR) en Música, opción: Composición, donde estudié con los profesores Osvaldo Budón, Leonardo Secco y Luis Jure. Además estudié composición con Coriún Aharonián y profundicé en varios géneros musicales como Jazz, Swing, Clásica, Música de la India, Candombe, Jazz Manouche y Folklore con profesores como Ariel Ameijenda, Angel Varela, Ludmila Cavallaro, Fabián Almada y Mario Piro, entre otros.',
          'bio_text_2': 'Actualmente soy docente de sonido (postproducción, diseño sonoro) en la Licenciatura en Lenguajes y Medios Audiovisuales de la Universidad de la República (UDELAR) en el Centro Universitario Regional Este (CURE) y profesor de Producción Musical en el Conservatorio Rodó. Además he realizado cursos y clases magistrales de sonido y música para cine y teatro en varias instituciones públicas y privadas, y he ejercido tareas de docencia como asistente de cátedra en la EMAD (Escuela Multidisciplinaria de Arte Dramático) y ECU (Escuela de Cine del Uruguay).',
          'bio_text_3': ' La composición musical ha llegado a convertirse en mi profesión de manera muy orgánica, primero estudiando y desarrollando mis habilidades en interpretación musical durante años, en diversos instrumentos y géneros (batería, guitarra, sitar, violín, clarinete y saxofón) y más adelante ingresé a la Universidad para estudiar composición formalmente. Me caracterizo por ser un compositor increíblemente versátil y por lograr en mi música un producto sonoro de la más alta calidad. A lo largo de toda mi formación y carrera musical siempre me encontré a mí mismo inmerso en una ferviente búsqueda de nuevos horizontes musicales, lo que me mantiene en una constante exploración de los elementos, técnicas y lenguaje musical que caracterizan a la música de cualquier estilo y conjunto imaginable, abarcando desde la composición para orquesta o conjunto de cámara hasta música de las más variadas culturas y regiones geográficas alrededor del mundo. Mi particular sensibilidad y creatividad artística me han permitido lograr un sello musical único y propio que se imprime sonoramente en cada una de mis composiciones y la pasión que siento por el trabajo en equipo y colaborativo me ha llevado a componer música para una gran cantidad de medios y formatos audiovisuales, desde cortometrajes, largometrajes y documentales hasta obras de teatro y videojuegos realizados por personas con una asombrosa visión creativa.',
          'bio_text_4': ' Durante años, estudié y trabajé en sonido para medios audiovisuales, generando una gran experiencia como diseñador sonoro, mezclador y postproductor de audio.',
          'bio_text_5': ' He obtenido premios, nominaciones, menciones y apoyos por mi trabajo como compositor y diseño sonoro en los Premios Florencio, Movida Joven, FONAM, SUDEI y en varios Festivales de cine.',
       
         // Footer
         'contact_title': 'Contacto',
         'contact_email': 'Correo electrónico:',
         'contact_phone': 'Teléfono:',
       
        },
      },
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de reserva

    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
  });

module.exports = i18next;
