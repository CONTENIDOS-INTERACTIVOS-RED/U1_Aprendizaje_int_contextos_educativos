<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Tipos de memoria en el aprendizaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4.text-white
            p.mb-0(data-aos="fade-up") Para comenzar esta unidad, es fundamental comprender qué es la memoria y cómo se relaciona con el aprendizaje. Según Rodríguez Moneo y Aparicio Frutos (2015), desde las primeras reflexiones filosóficas, como las de Platón, se ha intentado explicar cómo reconocemos y recordamos, vinculando la memoria directamente con los procesos de aprendizaje. Memorizar implica dar al conocimiento la posibilidad de persistir en el tiempo y estar disponible cuando lo necesitemos, convirtiéndose en un pilar esencial para cualquier teoría del aprendizaje.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La memoria se entiende como la capacidad del ser humano para almacenar y recuperar información previamente adquirida. Es un componente fundamental del conocimiento: aprender no tendría sentido si no pudiéramos conservar lo aprendido. Sin embargo, aunque crucial para comprender cómo aprendemos, la memoria fue difícil de investigar científicamente durante mucho tiempo. Los primeros estudios de psicología experimental no lograron abordar el fenómeno de forma sistemática, y los enfoques teóricos dominantes, a menudo rígidos o parciales, obstaculizaron una visión más completa.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esto contribuyó a la idea, incluso en el pensamiento común, de que la memoria y el aprendizaje eran terreno exclusivo de especulaciones teóricas. No obstante, con el tiempo, los avances acumulados han permitido consolidar un conocimiento más sólido y fundamentado sobre cómo almacenamos, recordamos y aplicamos lo que aprendemos (Rodríguez Moneo y Aparicio Frutos, 2015).
    
    p.mb-5 Uno de los hitos fundamentales en el estudio científico de la memoria fue el trabajo de Ebbinghaus en 1885. Influenciado por el asociacionismo y los métodos experimentales de Fechner, comenzó sus investigaciones entre 1879 y 1880. Su objetivo era comprender cómo se conserva lo aprendido mediante un método riguroso y sistemático. Para evitar interferencias de conocimientos previos, empleó sílabas sin sentido como material de estudio y se convirtió en el único sujeto de sus experimentos. Así, logró condiciones controladas que permitieron observar con precisión el proceso de memorización, abriendo el camino a estudios empíricos más rigurosos en psicología.

    .row.justify-content-center.align-items-center.bg-color-5.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
            p.mb-0 En términos funcionales, la memoria es la facultad mental que nos permite codificar, guardar y recuperar información. Gracias a ella conservamos vivencias, emociones, imágenes e ideas, y mantenemos una conexión con nuestra historia personal. Este proceso cerebral no solo es clave para el aprendizaje, sino también para la adaptación al entorno, ya que permite responder eficazmente a los desafíos de la vida cotidiana. Anatómicamente, el hipocampo juega un rol central, aunque intervienen múltiples regiones cerebrales: el hemisferio derecho almacena el significado de las palabras, el córtex temporal conserva recuerdos de la infancia y los lóbulos frontales se relacionan con funciones como la percepción y el pensamiento (NeuronUP, 2021).
          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Desde un enfoque teórico, Sanfeliciano (2019) destaca la importancia del modelo multialmacén propuesto por Atkinson y Shiffrin en 1968. Esta teoría sostiene que la memoria está compuesta por tres sistemas diferenciados, por los que la información transita a medida que es procesada. La metáfora de Jorge Luis Borges, citada por Sanfeliciano (2019) —“ese quimérico museo de formas inconstantes, ese montón de espejos rotos”—, refuerza la idea de que lo que recordamos constituye gran parte de lo que somos.
        p(data-aos="fade-left") El modelo de Atkinson y Shiffrin ha sido particularmente influyente al estructurar la memoria en almacenes funcionales que explican cómo el cerebro organiza y conserva la información durante distintos periodos de tiempo:
    

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Registro sensorial
            p.mb-0.text-center Recibe estímulos del entorno. Retiene la información de forma muy breve (milisegundos).
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Memoria a corto plazo
            p.mb-0.text-center Almacena información temporalmente (15-30 segundos). Tiene capacidad limitada.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/9.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Memoria a largo plazo
            p.mb-0.text-center Retiene información de forma más permanente y con capacidad ilimitada. Se consolida con el tiempo.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estos tres sistemas no actúan de forma aislada: cooperan e interactúan para formar lo que entendemos como memoria. Esta perspectiva funcional ha sido clave para comprender el aprendizaje y diseñar estrategias educativas más eficaces.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Memoria sensorial
    
    p.mb-5 A lo largo de la historia, ha existido una preocupación constante por entender cuántos elementos pueden percibirse de un vistazo. Según Telfer (1955), citado por Rodríguez Moneo y Aparicio Frutos (2015), ya en el siglo IV d.C., Nemosio, un obispo, investigó este fenómeno. Experimentos mostraron que, en un intervalo de apenas 50 milisegundos, los participantes recordaban solo entre 4 y 5 elementos, lo que sugería que la capacidad perceptiva inmediata era limitada.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Sin embargo, los estudios de Sperling (1960), también referidos por Rodríguez Moneo y Aparicio Frutos (2015), revelaron que esta limitación no se debía a la percepción visual, sino a la capacidad de verbalizar lo percibido. Sperling descubrió que la información permanece brevemente en nuestro sistema perceptivo antes de desvanecerse o transferirse a otro sistema de retención temporal: la memoria sensorial.
          figure.d-flex.justify-content-end.mb-0
            img(src="@/assets/curso/tema1/12.svg" data-aos="zoom-in", style="max-width: 90px")
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Según Sanfeliciano (2019), los registros sensoriales funcionan como depósitos temporales que retienen la información captada por los sentidos (vista, oído, tacto, entre otros), permitiendo su disponibilidad por un instante suficiente para ser evaluada. Son similares a los buffers en informática, ya que retienen datos momentáneamente para su procesamiento. Este sistema actúa como una “pantalla de espera” donde la información sensorial permanece el tiempo necesario para que el sistema cognitivo decida si debe atenderla o descartarla.
    
    .row.justify-content-center.align-items-center.bg-color-4.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center.p-4
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            p Cada modalidad sensorial posee su propio registro:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Memoria icónica</b>: visual
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Memoria ecoica</b>: auditiva
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Memoria háptica</b>: táctil
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 También existen registros menos estudiados como el olfativo y el gustativo
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 Estos registros tienen alta capacidad para captar detalles, aunque su duración es breve (milisegundos a pocos segundos). Además de ser un filtro inicial, la memoria sensorial es clave para la percepción continua: permite integrar estímulos sucesivos, como en una frase hablada o una secuencia visual. Sin esta retención temporal, nuestra experiencia sería fragmentada y caótica (Rodríguez Moneo y Aparicio Frutos, 2015). Los tipos de memoria según modalidad sensorial y procesamiento son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7
              h5 Memoria auditiva (ecoica)
              p Permite recordar lo que escuchamos, creando una representación sonora de la realidad. Las personas con buena memoria auditiva suelen repetir en voz alta los conceptos para reforzar su aprendizaje. Este tipo de memoria es útil, pero si no se acompaña de comprensión, se limita a un aprendizaje mecánico, débil y pasajero. (Maragall, 2024)
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7
              h5 Memoria visual o icónica
              p Facilita el recuerdo de lo que vemos, incluyendo imágenes de objetos o sus representaciones. Los estímulos visuales se retienen momentáneamente como imágenes mentales. Es la primera forma de memoria que se desarrolla en la infancia. Puede ser más vívida que la memoria lógica. Personas con esta memoria desarrollada, como artistas, recuerdan mejor las imágenes que el significado abstracto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7
              h5 Memoria kinestésica
              p Se relaciona con el recuerdo de imágenes motrices. Es útil en el aprendizaje activo: escribir las ideas o practicarlas físicamente ayuda a consolidarlas. Este tipo de memoria es fundamental para el aprendizaje de habilidades prácticas, como deportes, música, pintura o cualquier experiencia ligada al movimiento, el tacto o el cuerpo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7
              h5 Memoria reproductiva o mecánica
              p También conocida como “aprender de memoria”. Consiste en repetir exactamente frases u oraciones aprendidas. Se basa en la repetición sin necesidad de comprensión. Es útil para aprender: tablas aritméticas, ortografía, definiciones, leyes o autores. Sin embargo, si se usa de forma exclusiva, genera un aprendizaje frágil y poco significativo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7
              h5 Memoria lógica o comprensiva
              p Implica comprensión y análisis del material. El estudiante no solo recuerda, sino que entiende lo que aprende, reconociendo características importantes y su conexión con otros conceptos. Está vinculada al razonamiento, a la organización de la información y a la integración del nuevo conocimiento con conocimientos previos. Es más duradera y significativa.
    
    p.mb-5 Los psicólogos cognitivos como Atkinson, Shiffrin, Norman y Hunt propusieron que existen dos mecanismos de memoria cualitativamente distintos: algunos sujetos pueden recordar gran cantidad de información de forma inmediata pero la olvidan al poco tiempo (memoria a corto plazo); otros presentan mayor dificultad inmediata, pero conservan la información por largo tiempo (memoria a largo plazo). Por ejemplo:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Quien recuerda varios números telefónicos recién dichos usa memoria a corto plazo.

      .col-lg-6
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Quien conserva lecciones de infancia usa memoria a largo plazo.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4.text-white
        p.mb-0 Esto sugiere que fortalecer la memoria a largo plazo implica mejorar primero la memoria a corto plazo, mediante estrategias adecuadas como la comprensión, la asociación de ideas, y la práctica distribuida.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Memoria a corto plazo
    
    .row.justify-content-center.align-items-center.bg-color-6.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center.p-4
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
            p La memoria a corto plazo (MCP) es un sistema de almacenamiento temporal que permite retener una cantidad limitada de información durante un período breve, aproximadamente de 20 a 30 segundos, según Academia Lab (2025). Su capacidad suele estar entre 5 y 9 unidades de información, como lo formuló George Miller en su influyente artículo sobre “el número mágico 7 ± 2”.
            p.mb-0 Según Guerri (2025), Miller observó que esta capacidad se mantiene constante, independientemente del tipo de información, ya sean dígitos, letras o palabras. A partir de este hallazgo, propuso el concepto de chunking, clave para entender cómo ampliamos nuestra capacidad de retención a corto plazo. Un chunk (o fragmento) es una unidad de significado que agrupa múltiples elementos individuales. Por ejemplo, transformar “1-9-4-5” en “mil novecientos cuarenta y cinco” reduce cuatro elementos a uno solo. Esta agrupación significativa permite manejar más información de la que parece posible según el límite numérico.
          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/20.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Este principio explica, por ejemplo, cómo los ajedrecistas pueden recordar múltiples posiciones de piezas reconociendo patrones familiares. El chunking es, por tanto, una estrategia cognitiva para optimizar la MCP y constituye una base para el desarrollo de habilidades especializadas.
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 No obstante, el modelo tradicional de MCP fue superado por una concepción más activa y funcional de la memoria: la memoria de trabajo, propuesta por Baddeley y Hitch en 1974. A diferencia de un simple almacén pasivo, esta memoria implica la manipulación activa de la información para ejecutar tareas cognitivas complejas como la comprensión lectora, el razonamiento, la planificación o la toma de decisiones (Academia Lab, 2025).
        p Los modelos de memoria de trabajo son: 
    
    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/23.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="17%" y="25.5%" numero="+")
                h5 Ejecutivo central
                p Sistema de control que regula y dirige la atención. No almacena información por sí solo, pero coordina los subsistemas. Decide qué información se procesa, en qué orden y cómo. Es esencial en tareas que requieren concentración, cambio de foco o resolución de conflictos.
    
              .bg-color-white.box-shadow.p-3(x="18%" y="71%" numero="+")
                h5 Bucle fonológico
                p Responsable del procesamiento verbal y auditivo. Se divide en dos partes: un almacén fonológico (que retiene sonidos) y un sistema de repaso articulatorio (que mantiene la información activa mediante repetición). Es clave para recordar palabras, números o instrucciones orales.
    
              .bg-color-white.box-shadow.p-3(x="77%" y="77%" numero="+")
                h5 Agenda visoespacial
                p Mantiene y manipula información visual y espacial (formas, colores, trayectorias, posiciones). Fundamental para tareas como leer un mapa, visualizar una figura o recordar la ubicación de objetos.
    
              .bg-color-white.box-shadow.p-3(x="84%" y="32%" numero="+")
                h5 <em>Búfer</em> episódico
                p Integra información verbal, visual y de la memoria a largo plazo en una representación unificada. Permite construir escenas mentales complejas, recordar experiencias vividas o comprender historias.
    
    .bg-color-2.mb-5
      .px-4.px-md-5.py-4.text-white
        p.mb-0 Este modelo multicomponente ha sido ampliamente validado por estudios experimentales y neuropsicológicos, y ha impactado significativamente en la comprensión del aprendizaje, tanto en contextos educativos como clínicos. La noción de que manipulamos activamente la información que retenemos —no solo la almacenamos— es clave para entender procesos tan diversos como la lectura, el cálculo mental, la toma de decisiones o la solución de problemas.
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Memoria a largo plazo
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La memoria a largo plazo (MLP) es el sistema cognitivo que permite conservar información durante períodos prolongados, que pueden ir desde días hasta toda la vida. Gracias a ella, recordamos conocimientos, experiencias y habilidades que configuran nuestra identidad y nos permiten desenvolvernos en el entorno. (NeuronUP, 2021)
        p(data-aos="fade-left") Desde una perspectiva funcional, la MLP se clasifica en dos grandes categorías: la memoria explícita (declarativa) y la memoria implícita (no declarativa), cada una con funciones y subtipos específicos. Lis tipos de memoria a largo plazo son: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/26.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Memoria explícita o declarativa")
            p Requiere un acceso consciente. Nos permite recordar hechos, datos y experiencias personales.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Memoria semántica</b>.  Almacena conocimientos generales sobre el mundo: conceptos, datos culturales, significados lingüísticos. Ej.: saber que París es la capital de Francia o que los perros son mamíferos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Memoria episódica</b>.  Guarda recuerdos autobiográficos ligados a un tiempo y lugar determinados, incluyendo emociones y contexto. Ej.: recordar el día de una boda o una conversación importante. Permite “viajar mentalmente” al pasado. (NeuronUP, 2021)
    
          .div(titulo="Memoria implícita o no declarativa ")
            p Opera de forma automática, sin esfuerzo consciente. Está relacionada con habilidades, hábitos y respuestas condicionadas.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Memoria procedimental</b>. Se refiere a habilidades motoras o cognitivas que ya no requieren atención consciente. Ej.: montar en bicicleta, conducir, escribir en teclado. Una vez aprendidas, se ejecutan de manera fluida.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Condicionamiento clásico y <em>priming</em></b>. El condicionamiento clásico se manifiesta en respuestas automáticas a estímulos, como salivar al oler comida. El priming facilita el reconocimiento de estímulos ya vistos, incluso si no los recordamos conscientemente. (NeuronUP, 2021)
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/27.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La memoria a largo plazo es esencial para el aprendizaje significativo, ya que permite integrar nueva información con conocimientos previos, consolidar experiencias y automatizar habilidades. Su funcionamiento no se concentra en una sola región cerebral, sino que depende de múltiples estructuras interconectadas, como el hipocampo, la corteza prefrontal y los ganglios basales, responsables de codificar, almacenar y recuperar información. (NeuronUP, 2021)
    
    .row.justify-content-center.align-items-center.bg-color-5.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
            p Desde el modelo de Atkinson y Shiffrin, se describe el flujo de información entre sistemas de memoria. Primero, los estímulos captados por los sentidos se almacenan brevemente en los registros sensoriales, que filtran los datos mediante la atención selectiva. Solo la información relevante o significativa pasa al siguiente nivel.
            p.mb-0 Esa información seleccionada ingresa a la memoria a corto plazo, donde se mantiene y se procesa activamente. Si la cantidad de datos es excesiva, poco significativa o no se utilizan estrategias como la repetición, puede perderse. En cambio, cuando es bien organizada, relacionada con conocimientos previos o resulta emocionalmente significativa, puede consolidarse en la memoria a largo plazo.
          .col-lg-3(data-aos="zoom-in").order-lg-1
            img.img-fluid(src='@/assets/curso/tema1/28.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 Finalmente, la MLP almacena esta información útil de manera duradera, permitiendo su recuperación posterior para resolver problemas, tomar decisiones o aplicar estrategias. Por ejemplo, cuando utilizamos una técnica aprendida para evitar llorar al cortar cebolla, estamos activando la información ya almacenada en la memoria de largo plazo. (Sanfeliciano, 2019)

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Memoria y aprendizaje
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Memoria y aprendizaje, donde se aborda la relación entre los procesos de memoria y el aprendizaje, destacando su importancia tanto en el contexto educativo como en la vida cotidiana. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Memoria y aprendizaje.
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/29.png', alt='')
          
    
        

             

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/71123?page=1 " target="_blank" rel="noopener noreferrer") Betancur Arias, J. D. & Montoya Zuluaga, P. A. (2017). Hacia un concepto multifactorial del aprendizaje y la memoria. Volumen I: aproximaciones neuropsicopedagógicas: ( ed.). Universidad Católica Luis Amigó. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://lamenteesmaravillosa.com/el-modelo-de-memoria-de-atkinson-y-shiffrin/" target="_blank" rel="noopener noreferrer") Sanfeliciano, A. (2019, 19Cómo desarrollar la metacognición, el aprender a aprender, la autorregulación y el autoconocimiento julio). El modelo de memoria de Atkinson y Shiffrin. La Mente Es Maravillosa. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rcsXfgtdlr8 " target="_blank" rel="noopener noreferrer") Sinapsis EMP. (2023, 9 de septiembre). Neuroanatomía y fisiología de la memoria [Vídeo]. YouTube. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
