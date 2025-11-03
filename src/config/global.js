export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Procesos cognitivos y su relación con el aprendizaje',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de memoria en el aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Memoria sensorial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Memoria a corto plazo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Memoria a largo plazo',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Atención y percepción en la educación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La atención',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La percepción',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Factores que influyen en la percepción',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Rodríguez Moneo, M. & Aparicio Frutos, J. J. (2015). <em>El aprendizaje humano y la memoria: una visión integrada y su correlato neurofisiológico</em>. Difusora Larousse - Ediciones Pirámide.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/115237?page=13',
    },
    {
      referencia:
        'NeuronUP. (2021, 17 mayo). <em>La memoria: definición, tipos, ejercicios y evaluación</em>.',
      link:
        'https://neuronup.com/neurociencia/neuropsicologia/memoria/la-memoria-definicion-tipos-ejercicios-y-evaluacion/',
    },
    {
      referencia:
        'Sanfeliciano, A. (2019, 19 julio). <em>El modelo de memoria de Atkinson y Shiffrin</em>. La Mente Es Maravillosa.',
      link:
        'https://lamenteesmaravillosa.com/el-modelo-de-memoria-de-atkinson-y-shiffrin/',
    },
    {
      referencia:
        'Academia Lab. (2025). <em>El modelo de memoria de trabajo de Baddeley</em>. Enciclopedia.',
      link:
        'https://academia-lab.com/enciclopedia/el-modelo-de-memoria-de-trabajo-de-baddeley/',
    },
    {
      referencia:
        'Guerri, M. (2025). <em>El mágico número siete, más o menos dos: los límites de nuestra memoria</em>. PsicoActiva.',
      link:
        'https://www.psicoactiva.com/blog/magico-numero-siete-mas-menos-dos/',
    },
    {
      referencia:
        'Cerdán, L. L. (2011). <em>La memoria en el proceso de enseñanza/aprendizaje</em>. Dialnet.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3629232',
    },
    {
      referencia:
        'Maragall, F. P. (2024, 11 junio). <em>Fases de la memoria: ¿cómo memorizamos y recordamos?</em> Fundación Pasqual Maragall.',
      link: 'https://blog.fpmaragall.org/fases-memoria',
    },
    {
      referencia:
        'Fuenmayor, G., & Villasmil, Y. (2008). <em>La percepción, la atención y la memoria como procesos cognitivos utilizados para la comprensión textual</em>. Revista de Artes y Humanidades UNICA, 9(22), 187-202.',
      link: 'https://www.redalyc.org/pdf/1701/170118859011.pdf',
    },
    {
      referencia:
        'Jaume Rosselló, E. M. & Jaume Rosselló, E. M. (Coord.). (2015). <em>Atención y percepción</em>. Difusora Larousse - Alianza Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/45396?page=38',
    },
    {
      referencia:
        'Fundación Universitaria San Pablo. (2015). <em>Percepción, atención y memoria</em>.',
      link:
        'https://dspace.ceu.es/server/api/core/bitstreams/8af432e0-0d71-38b8-e053-0100007fe1f5/content',
    },
    {
      referencia:
        'De Bitbrain, E. E. (2024, 12 noviembre). <em>Qué es la atención, tipos y alteraciones</em>. Bitbrain.',
      link: 'https://www.bitbrain.com/es/blog/atencion-cognitiva-concentracion',
    },
    {
      referencia:
        'Merchán Price, M. S., & Henao Calderón, J. L. (2011). <em>Influencia de la percepción visual en el aprendizaje</em>. Ciencia y Tecnología para la Salud Visual y Ocular, 9(1), 93–101.',
      link:
        'https://saludvisual.lasalle.edu.co/article/download/1637/1724/1615',
    },
    {
      referencia:
        'Castro García, J. (2024, 25 septiembre). <em>Cuáles son los factores que afectan la percepción</em>.',
      link:
        'https://soporteyatencion.es/cuales-son-los-factores-que-afectan-la-percepcion/',
    },
    {
      referencia:
        'Yosen. (2024, 15 septiembre). <em>Qué papel tiene la percepción en el aprendizaje</em>. Salud Vital.',
      link:
        'https://saludvital.cl/percepcion/que-papel-tiene-la-percepcion-en-el-aprendizaje/',
    },
    {
      referencia:
        'Carrillo-Risquet, C. E., Jiménez-Puig, E. & Méndez-García, L. (2019). <em>Las funciones ejecutivas y su relación con el rendimiento académico</em>. Editorial Feijóo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/176886?page=4',
    },
    {
      referencia:
        'Russell A., B. (2012). <em>Las funciones ejecutivas y la autorregulación como fenotipo ampliado</em>.',
      link:
        'https://www.aepap.org/sites/default/files/profesionales-cap-03.pdf',
    },
    {
      referencia:
        'Soto, V. M. (2024, 28 septiembre). <em>Funciones ejecutivas: tipos y definición</em>. Tu Conducta.',
      link:
        'https://www.tuconducta.com/guia-infantil/funciones-ejecutivas-definicion-y-tipos#cuales%20son%20las%20funciones',
    },
    {
      referencia:
        'Francia, G. (2021, 14 junio). <em>Memoria de trabajo: qué es y cómo mejorarla</em>. Psicología Online.',
      link:
        'https://www.psicologia-online.com/memoria-de-trabajo-que-es-y-como-mejorarla-5797.html',
    },
    {
      referencia:
        'Socioestrategia. (2023). <em>Control inhibitorio: claves para la autorregulación</em>.',
      link:
        'https://socioestrategia.com/control-inhibitorio-claves-para-la-autorregulacion/',
    },
    {
      referencia:
        'Palau, M. (2025, 7 mayo). <em>Flexibilidad cognitiva: qué es, para qué sirve y ejemplos</em>. Psicología María Palau.',
      link:
        'https://www.psicologiamariapalau.com/flexibilidad-cognitiva-que-es-para-que-sirve-y-ejemplos/',
    },
    {
      referencia:
        'Castillero Mimenza, O. (2019). <em>Toma de decisiones: qué es, fases y partes del cerebro implicadas</em>. Psicología y Mente.',
      link: 'https://psicologiaymente.com/psicologia/toma-de-decisiones',
    },
    {
      referencia:
        'Injoque-Ricle, I., et al. (2019). <em>Razonamiento mecánico, memoria de trabajo y velocidad de procesamiento</em>. Liberabit, Revista Peruana de Psicología, 25(1), 75–86.',
      link: 'https://www.redalyc.org/articulo.oa?id=68660129008',
    },
    {
      referencia:
        'Alabau, I. (2024, 21 junio). <em>Autorregulación: qué es, ejemplos y ejercicios</em>. Psicología Online.',
      link:
        'https://www.psicologia-online.com/autorregulacion-que-es-ejemplos-y-ejercicios-4715.html',
    },
    {
      referencia:
        'Guerri, M. (2024). <em>Los principales tipos de razonamiento</em>. PsicoActiva.',
      link: 'https://www.psicoactiva.com/blog/tipos-de-razonamiento/',
    },
  ],
  glosario: [
    {
      termino: 'Anticipación',
      significado:
        'Capacidad cognitiva para prever eventos futuros y ajustar la conducta en función de expectativas o metas.',
    },
    {
      termino: 'Atención selectiva',
      significado:
        'Proceso mediante el cual el cerebro se enfoca en estímulos relevantes y filtra aquellos que son irrelevantes.',
    },
    {
      termino: 'Autorregulación',
      significado:
        'Habilidad para gestionar emociones, pensamientos y comportamientos de forma consciente y deliberada.',
    },
    {
      termino: 'Control inhibitorio',
      significado:
        'Capacidad de frenar impulsos automáticos o conductas inadecuadas según el contexto o los objetivos.',
    },
    {
      termino: 'Flexibilidad cognitiva',
      significado:
        'Función ejecutiva que permite cambiar de tarea, perspectiva o estrategia ante situaciones nuevas o inesperadas.',
    },
    {
      termino: 'Memoria de trabajo',
      significado:
        'Sistema que mantiene y manipula información temporalmente para realizar tareas cognitivas complejas.',
    },
    {
      termino: 'Memoria episódica',
      significado:
        'Tipo de memoria explícita que almacena eventos vividos con contexto temporal y espacial.',
    },
    {
      termino: 'Memoria semántica',
      significado:
        'Almacena conocimientos generales, conceptos y significados adquiridos a lo largo del tiempo.',
    },
    {
      termino: 'Percepción',
      significado:
        'Proceso de interpretación y organización de la información sensorial para darle significado al entorno.',
    },
  ],
}
