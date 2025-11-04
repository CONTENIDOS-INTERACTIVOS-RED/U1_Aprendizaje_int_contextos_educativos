<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Atención y percepción en la educación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el ámbito educativo, la atención actúa como el primer filtro cognitivo que permite al estudiante seleccionar los estímulos relevantes del entorno, facilitando así el acceso a la información significativa. Sin una atención adecuada, los demás procesos cognitivos, como la percepción, la memoria y el aprendizaje, se ven comprometidos.
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una vez que el estudiante ha focalizado su atención, entra en juego la percepción, que le permite interpretar y dar sentido a los estímulos seleccionados, integrándolos con sus conocimientos previos. Este proceso articulado resulta fundamental para comprender los contenidos, resolver problemas y desarrollar habilidades.
        p Por ello, tanto la atención como la percepción se constituyen en pilares clave en la construcción de estrategias pedagógicas eficaces. Así lo evidencian Fuenmayor y Villasmil (2008). Al abordar estos procesos, comenzaremos por el estudio de la atención y, posteriormente, profundizaremos en la percepción, resaltando su papel complementario en el aprendizaje.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] La atención
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Para Fuenmayor y Villasmil (2008), la atención se manifiesta cuando un individuo comienza a captar activamente lo que observa y escucha, enfocándose en ciertos aspectos en lugar de percibirlos de manera superficial. Este proceso implica que la persona selecciona información relevante del entorno y puede incluso dividir su atención para realizar múltiples tareas simultáneamente. Esta capacidad depende del desarrollo de habilidades y la automatización de rutinas que permiten completar diversas actividades sin una concentración profunda en cada una.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este fenómeno se explica desde la teoría de la capacidad, que aborda la cantidad de atención que puede asignarse en un momento específico y cómo esta puede variar según el nivel de motivación o estimulación. Desde esta perspectiva, es posible dirigir la atención hacia ciertos estímulos mientras se ignoran otros. Así surge el concepto de atención selectiva, entendida como la capacidad de elegir e interpretar continuamente la información que proviene del entorno. Si se prestara atención a todos los estímulos por igual, el ser humano se vería fácilmente abrumado.
    
    p.mb-5 En este sentido, Jaume Rosselló (2015) sostiene que la atención es un proceso cognitivo que permite seleccionar y concentrarse en determinados estímulos mientras se ignoran otros. Funciona como un filtro mental que prioriza la información relevante en función de nuestras metas o intereses, facilitando el aprendizaje y la toma de decisiones. En el contexto educativo, la atención resulta esencial, ya que sin ella la información no se codifica adecuadamente en la memoria, comprometiendo todo el proceso de aprendizaje.

    .bg-full-width.row.justify-content-center.align-items-center.bg-color-7
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.p-5.order-lg-2
            p.mb-0 Un <b>ejemplo</b> claro de esto se observa en el aula:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Si el docente explica un tema en el tablero y un estudiante dirige su atención hacia él, está activando su sistema atencional para filtrar estímulos irrelevantes (ruido, distracciones visuales) y centrarse en la información significativa.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Por el contrario, los estudiantes que se distraen con el entorno permiten que estímulos no relevantes capten su atención, lo que interfiere directamente con el aprendizaje.
          .col-lg-4(data-aos="zoom-in").order-lg-1
            img.img-fluid(src='@/assets/curso/tema2/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-8.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Este escenario ilustra cómo la atención funciona como un mecanismo de selección, determinando qué información será procesada y, eventualmente, almacenada en la memoria.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Teorías de la atención
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Teorías de la atención, donde se aborda el desarrollo de modelos explicativos sobre cómo el ser humano procesa, filtra y prioriza la información sensorial en contextos con múltiples estímulos.  
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Teorías de la atención.
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
    
    h2(data-aos="fade-left") Tipos de atención
    p.mb-5 Según Bitbrain (2024), la atención es un concepto amplio que puede subdividirse en diferentes tipos, según el foco, la modalidad o la forma de manifestación. Cada tipo de atención cumple una función específica y se puede observar en situaciones cotidianas del aula.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Atención interna")
            p Capacidad de enfocarse en pensamientos, emociones o sensaciones internas. Es clave para la autorreflexión, la planificación mental y la regulación emocional. 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: un estudiante reflexiona mentalmente sobre cómo resolver un problema sin mirar el cuaderno.
            
    
          .div(titulo="Atención externa")
            p Orientación de la atención hacia estímulos del entorno (sonidos, imágenes, movimientos). 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: un alumno observa atentamente una demostración del profesor en el laboratorio de ciencias.
            
          .div(titulo="Atención abierta")
            p Manifiesta señales físicas visibles del acto de atender (como girar la cabeza o fijar la mirada). 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: una niña gira la cabeza y mira la pantalla cuando el docente proyecta un video educativo.
            
    
          .div(titulo="Atención encubierta")
            p La persona está mentalmente enfocada, aunque no lo parezca externamente. 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: un estudiante escucha la explicación del docente mientras aparenta leer su libro.
            
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Atención selectiva")
            p Se centra en un solo estímulo o tarea, ignorando otros. 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: un niño se concentra en la lectura de un cuento mientras sus compañeros conversan en voz baja.
            
          .div(titulo="Atención dividida")
            p Permite atender a más de una tarea simultáneamente. 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: una estudiante toma apuntes mientras escucha la explicación del profesor.
            
          .div(titulo="Atención sostenida")
            p Capacidad de mantener la concentración durante un periodo prolongado. 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: un alumno permanece atento durante una evaluación escrita de 45 minutos.
            
          .div(titulo="Atención visual")
            p Capacidad de centrar la atención en estímulos visuales. 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: un niño sigue con la vista las instrucciones escritas en la pizarra para copiarlas correctamente.
            
          .div(titulo="Atención auditiva")
            p Implica concentrarse en estímulos sonoros. 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: una niña escucha con atención las instrucciones orales del docente antes de comenzar una actividad grupal.
    
    .row.justify-content-center.align-items-center.bg-color-6.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center.p-4
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
            p De acuerdo con la Fundación Universitaria San Pablo (2015), además de los factores fisiológicos y trastornos neurológicos, existen elementos externos que alteran la atención. Uno de los más relevantes es el consumo de sustancias psicotrópicas como opiáceos, estimulantes, alucinógenos, afrodisíacos y depresores del sistema nervioso central.
            p.mb-0 Estas sustancias alteran los mecanismos neuroquímicos cerebrales y, con uso frecuente o prolongado, deterioran la concentración, la percepción, la comprensión, la memoria y la regulación emocional. En contextos educativos, esto puede causar dificultades para mantener la atención sostenida, interpretar la información o recordar contenidos, afectando de forma directa el rendimiento académico y la adaptación escolar.
          .col-lg-3(data-aos="zoom-in").order-lg-1
            img.img-fluid(src='@/assets/curso/tema2/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] La percepción
    
    p.mb-5 Según la Fundación Universitaria San Pablo (2015), la percepción puede definirse como una experiencia completa, diferenciada de la simple sensación, que se relaciona con la estimulación de los sentidos. En el análisis psicológico de la percepción, se deben considerar dos dimensiones fundamentales: la material y la formal.

    h2(data-aos="fade-left").mb-5 Dimensión material de la percepción

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La percepción, al igual que la sensación, depende de un cuerpo dotado de ciertos órganos sensoriales que permiten captar las características de la realidad circundante. Por ejemplo:
    
        .bg-color-9.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El espectro visible está determinado por las propiedades de las células fotosensibles en la retina.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El espectro audible depende de las células ciliadas en la cóclea.
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 En ambos casos, se lleva a cabo un proceso de transducción, es decir, la conversión de estímulos físicos (ondas electromagnéticas, sonoras, etc.) en señales eléctricas, que luego son enviadas a regiones específicas del cerebro donde se procesan.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Dimensión formal de la percepción
        p(data-aos="fade-left").mb-5 Aparte de las condiciones físicas, se debe considerar la actividad psíquica implicada. Esta formalidad distingue la percepción de una mera activación electroquímica: es una acción psíquica sustentada en procesos neuronales. Desde esta perspectiva, las actividades sensitivas y perceptivas son materialmente neuronales, pero formalmente psíquicas.
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas actividades psíquicas se caracterizan por tener un objeto concreto. En la sensación, este objeto son las cualidades directas percibidas por los órganos: colores (vista), sonidos (oído), olores (olfato), sabores (gusto) y texturas o temperatura (tacto).

    h2(data-aos="fade-left") Enfoques teóricos sobre la percepción
    p.mb-5 La psicología de la percepción se ha desarrollado desde múltiples corrientes, como:

    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Interpretaciones filosóficas
                p.mb-0.text-center Abordan la relación entre lo observable y la experiencia subjetiva.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/14.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Psicofísica
                p.mb-0.text-center Estudia la relación entre estímulo y sensación utilizando leyes matemáticas.
    
    p.mb-5 Desde una perspectiva filosófica moderna, se distinguía entre:

    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-8.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Impresión
                  p.mb-0 Fenómeno físico o estímulo.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-8.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Sensación
                  p.mb-0 Fenómeno psíquico inmediato.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-8.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Idea
                  p.mb-0 Representación mental derivada de la impresión.
        p.mb-5 Estas ideas podían combinarse para formar ideas de reflexión, que a su vez se integran en representaciones más complejas de la realidad. La clasificación filosófica de la percepción sensorial es: 

        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema2/19.png' alt='AvatarTop').mx-auto.mb-3
                    div.p-4
                      h4.text-center.mb-4 Ideas de sensación
                      p.text-center Representaciones mentales simples generadas directamente por la experiencia sensorial (vista, oído, olfato, gusto, tacto).
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema2/20.png' alt='AvatarTop').mx-auto.mb-3
                    div.p-4
                      h4.text-center.mb-4 Cualidades primarias
                      p.text-center Son objetivas y pueden ser verificadas por otras personas (por ejemplo, la forma o la cantidad).
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema2/21.png' alt='AvatarTop').mx-auto.mb-3
                    div.p-4
                      h4.text-center.mb-4 Cualidades secundarias
                      p.text-center Son subjetivas, solo verificables por quien las experimenta (por ejemplo, el color o la temperatura).
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema2/22.png' alt='AvatarTop').mx-auto.mb-3
                    div.p-4
                      h4.text-center.mb-4 Ideas de reflexión
                      p.text-center Surgen de la asociación de ideas de sensación. Representan una elaboración cognitiva más compleja de la experiencia.
                  .bg-color-white.h-100.shadow-app.tarjeta
                    img(src='@/assets/curso/tema2/23.png' alt='AvatarTop').mx-auto.mb-3
                    div.p-4
                      h4.text-center.mb-4 Leyes de asociación
                      p.text-center Principios como la semejanza, contigüidad y simultaneidad, que explican cómo se agrupan las ideas para formar representaciones del mundo.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema2/18.png', alt='')
    
    h2(data-aos="fade-left").mb-5 Enfoques contemporáneos: de lo filosófico a lo neuropsicológico

    .row.justify-content-center.align-items-center.bg-color-12.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center.p-4
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
            p La tendencia actual se aleja del empirismo clásico y adopta un enfoque neurológico, que interpreta la percepción como una actividad cerebral suficiente para explicar cómo percibimos. Esta postura se asemeja al mecanicismo cartesiano aplicado a la sensación.
            p.mb-0 Sin embargo, algunos autores proponen una síntesis compatible con los descubrimientos neurocientíficos actuales, recuperando el enfoque formal aristotélico. Esta perspectiva distingue entre tipos de cualidades sensibles y reconoce la percepción como un proceso de naturaleza neuropsicológica (no meramente neuronal), integrando el conocimiento biológico con el análisis de la conciencia perceptiva.
          .col-lg-3(data-aos="zoom-in").order-lg-1
            img.img-fluid(src='@/assets/curso/tema2/24.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/25.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Como cierre de este apartado, se destaca que se analizarán específicamente la percepción visual y auditiva, por ser los sentidos más desarrollados en el ser humano. (Fundación Universitaria San Pablo, 2015)
    
    h2(data-aos="fade-left").mb-5 Percepción visual

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Según la Fundación Universitaria San Pablo (2015), la luz se define como una onda electromagnética que los seres humanos pueden percibir dentro de un rango específico de frecuencia, conocido como espectro visible. Este espectro comprende longitudes de onda entre 380 y 780 nanómetros, abarcando todos los colores que el ojo humano puede distinguir. Está limitado por los rayos infrarrojos (frecuencias más bajas) y los rayos ultravioletas (frecuencias más altas).
    
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 La estimulación de estas ondas es interpretada psicológicamente como color, un proceso que comienza con la activación electroquímica de los receptores fotosensibles en la retina. No obstante, la percepción visual va más allá de esta reacción fisiológica; también involucra una dimensión fenomenológica, donde se exploran las causas subjetivas y cognitivas de la experiencia visual.
    
    p.mb-5 Uno de los aspectos centrales de la percepción visual es la existencia de cualidades visibles que trascienden lo puramente fisiológico. Aunque la experiencia visual es única para cada persona, no es completamente voluntaria, ya que depende de las cualidades objetivas del entorno. Sin embargo, pueden existir obstáculos orgánicos que afecten esta percepción, como:

    .bg-full-width.row.justify-content-center.align-items-center.bg-color-7
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.p-5.order-lg-2
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 El <b>daltonismo</b> o ceguera al color, que implica una disfunción o ausencia en los receptores fotosensibles (conos), según la teoría tricromática de Young-Helmholtz.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 La <b>miopía</b> y la <b>hipermetropía</b>, causadas por errores en la proyección del cristalino sobre la retina.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 El <b>astigmatismo</b>, derivado de irregularidades en la córnea.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 El <b>estrabismo</b>, que impide alinear los ojos en un mismo objeto y puede causar visión doble o dificultad para percibir profundidad.
          .col-lg-4(data-aos="zoom-in").order-lg-1
            img.img-fluid(src='@/assets/curso/tema2/27.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-8.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Además de estas alteraciones físicas, existen condiciones neuropsicológicas como la agnosia visual (incapacidad para reconocer objetos) y la prosopagnosia (incapacidad para reconocer rostros), que revelan alteraciones más complejas en el procesamiento visual.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/28.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Una capacidad notable de la visión humana es la percepción de la tridimensionalidad, facilitada por la disposición frontal de los ojos. Esta configuración permite capturar dos imágenes ligeramente distintas de un mismo objeto, que al superponerse ofrecen una sensación de profundidad espacial.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/29.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 También, la percepción del tamaño y la distancia está influida por el contexto. Por ejemplo, un objeto lejano puede parecer más pequeño, aunque el cerebro lo reconozca de tamaño real gracias a la proporción entre distancia y tamaño, un fenómeno que se puede ejemplificar con los rieles de tren, que parecen converger en el horizonte.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/30.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-3.px-4.py-5.text-white(data-aos="fade-left")
          p.mb-0 Esta ilusión perceptiva llevó a Helmholtz a formular su teoría de la “inferencia inconsciente”, según la cual la percepción es el resultado de una síntesis entre la sensación inmediata y las experiencias pasadas almacenadas en la memoria. Así, aunque visualmente los rieles parezcan unirse, el sujeto infiere inconscientemente que siguen siendo paralelos. Esta inferencia permite construir una interpretación más completa y coherente de la realidad percibida.
    
    p.mb-5 Asimismo, el movimiento en la percepción visual se detecta cuando un objeto cambia su posición relativa respecto a otros elementos. La corteza visual cuenta con neuronas especializadas que responden a estas variaciones, así como a diferentes orientaciones espaciales de los objetos.

    h2(data-aos="fade-left").mb-5 Percepción auditiva

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/31.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La percepción auditiva es el proceso mediante el cual el sistema auditivo capta las vibraciones sonoras que se propagan a través de un medio físico, como el aire, y las transforma en señales electroquímicas. Según la Fundación Universitaria San Pablo (2015), estas señales son procesadas por el cerebro, específicamente en las áreas temporales, donde se interpretan como sonidos con significado.
        p(data-aos="fade-left") Este mecanismo nos permite identificar voces, música, ruidos del entorno y otros estímulos sonoros, siendo esencial para la comunicación y el aprendizaje. El sonido, como fenómeno físico, presenta tres propiedades fundamentales que determinan cómo lo percibimos:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Amplitud" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Amplitud
            p Se refiere a la magnitud de la onda sonora. Está relacionada con la intensidad o volumen del sonido. A mayor amplitud, el sonido se percibe como más fuerte. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: cuando un profesor eleva la voz para captar la atención de los estudiantes.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/33.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Tono" :icon="require('@/assets/bullets/icon-tab-c-2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Tono
            p Depende de la frecuencia de la onda sonora (medida en hercios). Los sonidos de alta frecuencia se perciben como agudos, y los de baja frecuencia como graves. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: un timbre agudo indica el inicio de clases; uno grave, una evacuación.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/34.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Timbre" :icon="require('@/assets/bullets/icon-tab-c-3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Timbre
            p Es la cualidad que permite distinguir entre diferentes fuentes sonoras, incluso si tienen la misma amplitud y tono. Depende de la complejidad armónica del sonido. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: una misma nota tocada con flauta y con guitarra se distingue por su timbre.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/35.png', alt='', style="width: 100%;")
    
    h2(data-aos="fade-left") Relación entre percepción visual y auditiva en el aprendizaje
    p.mb-5 Tanto la percepción visual como la auditiva juegan un papel clave en el ámbito educativo, pues son los canales sensoriales principales a través de los cuales los estudiantes reciben, interpretan y procesan información del entorno. Según Merchán Price y Henao Calderón (2011):
     
    .bg-full-width.row.justify-content-center.align-items-center.bg-color-7
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.p-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 La percepción visual permite reconocer letras, símbolos, formas, colores y patrones espaciales. Es fundamental para habilidades como la lectura, escritura, organización espacial e interpretación de gráficos o esquemas. Una percepción visual eficiente facilita la comprensión de textos y problemas matemáticos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 La percepción auditiva es esencial para el desarrollo del lenguaje, la comprensión oral y la memoria auditiva. Ayuda a discriminar sonidos, identificar palabras clave y seguir instrucciones. Las dificultades en esta área pueden afectar la lectura fonológica, la ortografía y la participación en actividades grupales.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/36.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-8.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Ambas modalidades trabajan de manera integrada. Por ejemplo, al leer en voz alta, el estudiante activa simultáneamente la percepción visual (letras) y auditiva (sonido), lo que refuerza la codificación de la información y favorece un aprendizaje más profundo y duradero.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Factores que influyen en la percepción
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/37.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") La percepción es un proceso cognitivo esencial mediante el cual interpretamos los estímulos del entorno y construimos significados a partir de nuestras experiencias. Según Castro García (2024), en este proceso intervienen diversos factores fisiológicos, culturales y sociales que determinan tanto lo que percibimos como cómo lo interpretamos. Para facilitar su comprensión, estos factores pueden clasificarse en dos grandes grupos: los factores externos, que dependen del estímulo, y los factores internos, propios del individuo que percibe.
    
    h2(data-aos="fade-left") Factores externos de la percepción
    p.mb-5 Los factores externos hacen referencia a las características del entorno o del estímulo que favorecen su capacidad para atraer nuestra atención y, por tanto, incidir directamente en cómo lo percibimos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/38.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Intensidad
              p Estímulos más intensos, como un sonido fuerte o una luz brillante, captan con mayor facilidad la atención perceptiva.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>: Un video con volumen elevado destaca más que una explicación hablada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/39.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Novedad
              p Lo inusual o inesperado atrae más la atención, ya que rompe con la rutina perceptiva.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>: Un experimento nuevo en clase genera mayor curiosidad que repetir una fórmula conocida.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/40.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Repetición
              p Estímulos reiterados refuerzan su presencia en la conciencia perceptiva, aunque pueden causar habituación.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>: Repetir un concepto clave durante la clase facilita su consolidación, siempre que no se vuelva monótono.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/41.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tamaño
              p Estímulos más grandes tienden a captar más atención.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>: Un cartel grande con instrucciones sobresale frente a una nota pequeña escrita en la pizarra.
    
    h2(data-aos="fade-left") Factores internos de la percepción
    p.mb-5 Por otro lado, los factores internos están relacionados con las características individuales del perceptor, que influyen tanto en lo que se percibe como en la forma en que se interpreta la información recibida.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/42.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Atención")
            p Es el filtro cognitivo inicial que determina qué estímulos serán percibidos conscientemente.
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: Un estudiante distraído puede no notar un cambio en las instrucciones.
          .div(titulo="Motivaciones")
            p Las necesidades o deseos influyen en lo que se percibe con mayor claridad.
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: Un alumno motivado por aprender inglés presta más atención a palabras nuevas en ese idioma.
          .div(titulo="Intereses y valores")
            p Nuestros intereses personales y creencias determinan el enfoque perceptivo.
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: Una persona interesada en el tema notará detalles que otros pasarán por alto.
          .div(titulo="Características del observador")
            p Factores como la edad, la experiencia, el estado emocional o el nivel cognitivo afectan la percepción.
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: Un niño pequeño y un adulto pueden interpretar de manera diferente el mismo dibujo.
          .div(titulo="Cultura")
            p Los aprendizajes previos de tipo social o cultural condicionan la interpretación del entorno.
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: Un color puede simbolizar respeto en una cultura y tener otro significado en otra.

    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5
        h2(data-aos="fade-left") Importancia de la percepción en el aprendizaje
        p.mb-5 Una vez comprendidos los factores que inciden en la percepción, es necesario analizar su impacto en el ámbito educativo. Según Yosen (2024), la percepción cumple un rol esencial en los procesos de enseñanza y aprendizaje por diversas razones:

        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/44.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Activa el aprendizaje
                    p.text-center La percepción es el primer paso para transformar la información sensorial en conocimiento. Si no se percibe adecuadamente, no es posible comprender ni retener lo que se presenta.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/45.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Filtra y selecciona estímulos
                    p.text-center Mediante la atención selectiva, permite enfocarse en lo relevante y descartar lo irrelevante, lo que optimiza el procesamiento cognitivo.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/46.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Influye en la memoria y la comprensión
                    p.text-center Una percepción clara y organizada facilita la codificación de la información en la memoria a corto y largo plazo, mejorando la comprensión y el recuerdo.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/47.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Es base de la experiencia significativa
                    p.text-center Lo que se percibe con claridad y sentido se integra mejor en los esquemas mentales del estudiante, favoreciendo un aprendizaje significativo y duradero.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/48.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Está mediada por factores individuales
                    p.text-center Cada persona percibe de manera distinta según su historia, emociones, motivaciones y estilo cognitivo. Por ello, el aprendizaje es también una experiencia personal y única.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema2/43.png', alt='')
        
        p.mb-5 En consecuencia, diseñar estrategias pedagógicas que estimulen múltiples canales perceptivos (visual, auditivo, kinestésico), y que tomen en cuenta las diferencias individuales, es fundamental para lograr un aprendizaje verdaderamente inclusivo, eficaz y duradero.

        .bg-full-width.bg-color-3
          .px-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-3.mb-lg-0.text-white.order-lg-2
                h2.mb-4(data-aos="flip-up") Funciones ejecutivas y autorregulación
                p.mb-4(data-aos="fade-right") Se invita a leer el documento Funciones ejecutivas y autorregulación, donde se aborda el papel crucial de las funciones ejecutivas en el comportamiento humano y su vínculo con la autorregulación y el rendimiento académico. 
        
                a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                  .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p <strong>Anexo. </strong> Funciones ejecutivas y autorregulación.
              .col-lg-5.order-lg-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/49.png', alt='')
    


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.continental.edu.pe/bitstream/20.500.12394/4289/1/DC_FHU_501_MAI_UC0712_2018 " target="_blank" rel="noopener noreferrer") Sovero Lazo, J. G. (2018). Psicología de la percepción y atención. Universidad Continental. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.aucal.edu/blog/servicios-sociales-comunidad/importancia-de-la-percepcion-en-el-aprendizaje-concepto-etapas-tipos-y-componentes/" target="_blank" rel="noopener noreferrer") Briceño, G. (2021, 7 junio). Importancia de la percepción en el aprendizaje: concepto, etapas, tipos y componentes - Servicios Sociales y a la Comunidad. Servicios Sociales y A la Comunidad. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=8Pgga6Rgm6U" target="_blank" rel="noopener noreferrer") Diego Neurociencias. (2021, 6 de octubre). Neurobiología de la atención [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
