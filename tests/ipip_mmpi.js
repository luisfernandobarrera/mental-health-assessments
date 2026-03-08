const TEST_IPIP_MMPI = {
  id: 'ipip_mmpi',
  abbr: 'IPIP-Clínico',
  name: 'Escalas Clínicas IPIP',
  fullName: 'Escalas Clínicas IPIP (equivalentes a escalas MMPI)',
  desc: 'Evaluación clínica completa de personalidad usando ítems de dominio público. Mide 10 escalas clínicas y 3 escalas de validez equivalentes a las del MMPI.',
  color: '#5A6B8A',
  icon: '⚕️',
  items: 180,
  time: '20-30 min',
  instructions: 'Responde verdadero o falso a cada afirmación según se aplique a ti generalmente. Sé honesto/a; no hay respuestas correctas ni incorrectas.',
  sharedOptions: ["Falso", "Verdadero"],
  maxScore: 'scales',
  questions: [
    // 1-10
    { title: "Nunca he dicho una mentira.", scale: "L", keyed: true },
    { title: "Me preocupo mucho por mi salud.", scale: "Hs", keyed: true },
    { title: "Me siento triste la mayor parte del tiempo.", scale: "D", keyed: true },
    { title: "Creo que la gente habla de mí a mis espaldas.", scale: "Pa", keyed: true },
    { title: "Tengo más energía que la mayoría de las personas.", scale: "Ma", keyed: true },
    { title: "Escucho voces que otros no pueden oír.", scale: "F", keyed: true },
    { title: "Me considero una persona muy equilibrada.", scale: "K", keyed: true },
    { title: "A veces tengo dolores de cabeza sin causa aparente.", scale: "Hy", keyed: true },
    { title: "Las reglas me parecen aburridas e innecesarias.", scale: "Pd", keyed: true },
    { title: "Me interesan mucho las actividades artísticas y culturales.", scale: "Mf", keyed: true },
    // 11-20
    { title: "Reviso las cosas varias veces para asegurarme de que están bien.", scale: "Pt", keyed: true },
    { title: "A veces tengo pensamientos muy extraños.", scale: "Sc", keyed: true },
    { title: "Prefiero estar solo/a que en compañía de otros.", scale: "Si", keyed: true },
    { title: "Siempre soy amable con todas las personas que conozco.", scale: "L", keyed: true },
    { title: "Siento que mi estómago me molesta con frecuencia.", scale: "Hs", keyed: true },
    { title: "El futuro me parece oscuro y sin esperanza.", scale: "D", keyed: true },
    { title: "Siento que me persiguen o me vigilan.", scale: "F", keyed: true },
    { title: "Tiendo a ignorar mis problemas hasta que desaparecen.", scale: "Hy", keyed: true },
    { title: "Desconfío de las intenciones de la mayoría de las personas.", scale: "Pa", keyed: true },
    { title: "Inicio muchos proyectos a la vez sin terminarlos.", scale: "Ma", keyed: true },
    // 21-30
    { title: "Estoy satisfecho/a con mi vida tal como es.", scale: "K", keyed: true },
    { title: "He tenido problemas con personas en posición de autoridad.", scale: "Pd", keyed: true },
    { title: "Me considero una persona muy sensible emocionalmente.", scale: "Mf", keyed: true },
    { title: "Me cuesta mucho tomar decisiones importantes.", scale: "Pt", keyed: true },
    { title: "A veces me siento desconectado/a de la realidad.", scale: "Sc", keyed: true },
    { title: "Me cuesta iniciar conversaciones con personas desconocidas.", scale: "Si", keyed: true },
    { title: "Nunca me he sentido enojado/a con nadie.", scale: "L", keyed: true },
    { title: "Frecuentemente tengo dolores en diferentes partes de mi cuerpo.", scale: "Hs", keyed: true },
    { title: "He perdido el interés en cosas que antes disfrutaba.", scale: "D", keyed: true },
    { title: "Creo que tengo poderes especiales que otros no tienen.", scale: "F", keyed: true },
    // 31-40
    { title: "Mis relaciones familiares son muy buenas.", scale: "K", keyed: true },
    { title: "A veces siento hormigueos o entumecimiento sin razón médica.", scale: "Hy", keyed: true },
    { title: "Siento que las personas cercanas a mí conspiran en mi contra.", scale: "Pa", keyed: true },
    { title: "Me siento impulsado/a a estar siempre en movimiento.", scale: "Ma", keyed: true },
    { title: "Me gusta quebrantar las normas cuando puedo.", scale: "Pd", keyed: true },
    { title: "Disfruto leyendo poesía y literatura.", scale: "Mf", keyed: true },
    { title: "Me preocupo excesivamente por cosas pequeñas.", scale: "Pt", keyed: true },
    { title: "A veces siento que mi cuerpo cambia de forma o tamaño.", scale: "Sc", keyed: true },
    { title: "Me siento incómodo/a en reuniones sociales grandes.", scale: "Si", keyed: true },
    { title: "Nunca he tomado algo que no me perteneciera.", scale: "L", keyed: true },
    // 41-50
    { title: "Me preocupa tener una enfermedad grave sin diagnosticar.", scale: "Hs", keyed: true },
    { title: "Lloro con más facilidad que antes.", scale: "D", keyed: true },
    { title: "A veces siento que alguien controla mis pensamientos.", scale: "F", keyed: true },
    { title: "Generalmente manejo bien las situaciones difíciles.", scale: "K", keyed: true },
    { title: "Cuando tengo un conflicto, prefiero no pensar en ello.", scale: "Hy", keyed: true },
    { title: "Siento que la gente me observa con malas intenciones.", scale: "Pa", keyed: true },
    { title: "Mis ideas cambian muy rápidamente de un tema a otro.", scale: "Ma", keyed: true },
    { title: "A menudo actuó sin pensar en las consecuencias.", scale: "Pd", keyed: true },
    { title: "Me conmuevo fácilmente con las historias tristes.", scale: "Mf", keyed: true },
    { title: "Necesito que todo esté perfectamente ordenado.", scale: "Pt", keyed: true },
    // 51-60
    { title: "A veces escucho mis propios pensamientos como si fueran en voz alta.", scale: "Sc", keyed: true },
    { title: "Evito las situaciones donde tengo que hablar en público.", scale: "Si", keyed: true },
    { title: "Siempre digo la verdad, sin excepción.", scale: "L", keyed: true },
    { title: "Siento que mi corazón late de forma irregular frecuentemente.", scale: "Hs", keyed: true },
    { title: "Me siento cansado/a y sin energía la mayor parte del día.", scale: "D", keyed: true },
    { title: "He tenido experiencias sobrenaturales que no puedo explicar.", scale: "F", keyed: true },
    { title: "Considero que soy una persona bastante competente.", scale: "K", keyed: true },
    { title: "A veces siento mareos o debilidad sin motivo claro.", scale: "Hy", keyed: true },
    { title: "Estoy seguro/a de que hay personas que quieren hacerme daño.", scale: "Pa", keyed: true },
    { title: "Me resulta difícil quedarme quieto/a por mucho tiempo.", scale: "Ma", keyed: true },
    // 61-70
    { title: "No me importa mucho seguir las normas sociales.", scale: "Pd", keyed: true },
    { title: "Me gustan las flores y la naturaleza más que a la mayoría.", scale: "Mf", keyed: true },
    { title: "Tengo pensamientos repetitivos que no puedo detener.", scale: "Pt", keyed: true },
    { title: "A veces siento que las cosas a mi alrededor no son reales.", scale: "Sc", keyed: true },
    { title: "Me resulta difícil hacer amigos nuevos.", scale: "Si", keyed: true },
    { title: "Nunca he llegado tarde a una cita o compromiso.", scale: "L", keyed: true },
    { title: "Consulto al médico más frecuentemente que la mayoría.", scale: "Hs", keyed: true },
    { title: "Me siento inútil o como una carga para los demás.", scale: "D", keyed: true },
    { title: "Veo cosas que otros no pueden ver.", scale: "F", keyed: true },
    { title: "Siento que mi familia me apoya en todo.", scale: "K", keyed: true },
    // 71-80
    { title: "A veces pierdo la sensibilidad en partes de mi cuerpo.", scale: "Hy", keyed: true },
    { title: "Creo que alguien está tratando de envenenarme o hacerme daño.", scale: "Pa", keyed: true },
    { title: "Duermo mucho menos que otras personas y me siento bien.", scale: "Ma", keyed: true },
    { title: "He tenido problemas legales por mi comportamiento.", scale: "Pd", keyed: true },
    { title: "Me interesa la moda y la decoración de interiores.", scale: "Mf", keyed: true },
    { title: "Siento una ansiedad constante que no puedo explicar.", scale: "Pt", keyed: true },
    { title: "A veces siento que no soy yo mismo/a.", scale: "Sc", keyed: true },
    { title: "Prefiero actividades solitarias como leer o caminar solo/a.", scale: "Si", keyed: true },
    { title: "Nunca he sentido envidia de nadie.", scale: "L", keyed: true },
    { title: "Frecuentemente siento náuseas o malestar estomacal.", scale: "Hs", keyed: true },
    // 81-90
    { title: "A veces pienso que sería mejor no estar vivo/a.", scale: "D", keyed: true },
    { title: "Siento que puedo predecir el futuro.", scale: "F", keyed: true },
    { title: "Me considero una persona emocionalmente estable.", scale: "K", keyed: true },
    { title: "He tenido desmayos o episodios de pérdida de conciencia.", scale: "Hy", keyed: true },
    { title: "Creo que mis compañeros de trabajo hablan mal de mí.", scale: "Pa", keyed: true },
    { title: "Hago cosas arriesgadas solo por la emoción.", scale: "Ma", keyed: true },
    { title: "La honestidad no siempre es la mejor política.", scale: "Pd", keyed: true },
    { title: "Me gusta cocinar y preparar platos elaborados.", scale: "Mf", keyed: true },
    { title: "Siento que algo malo va a pasar, aunque no sé qué.", scale: "Pt", keyed: true },
    { title: "Mis pensamientos a veces se mezclan de manera confusa.", scale: "Sc", keyed: true },
    // 91-100
    { title: "Me pongo nervioso/a cuando estoy rodeado/a de mucha gente.", scale: "Si", keyed: true },
    { title: "Nunca he hablado mal de otra persona.", scale: "L", keyed: true },
    { title: "Me preocupa que mi cuerpo no funcione correctamente.", scale: "Hs", keyed: true },
    { title: "Me cuesta concentrarme en lo que estoy haciendo.", scale: "D", keyed: true },
    { title: "He sentido la presencia de seres que no están ahí.", scale: "F", keyed: true },
    { title: "No tengo problemas importantes en mi vida.", scale: "K", keyed: true },
    { title: "A veces me duele mucho la espalda sin motivo aparente.", scale: "Hy", keyed: true },
    { title: "Creo que hay personas que me espían.", scale: "Pa", keyed: true },
    { title: "Tengo planes grandiosos para mi futuro que otros no entienden.", scale: "Ma", keyed: true },
    { title: "Me aburro fácilmente de las rutinas y la monotonía.", scale: "Pd", keyed: true },
    // 101-110
    { title: "Me considero una persona con gran sensibilidad artística.", scale: "Mf", keyed: true },
    { title: "Me lavo las manos o reviso cerraduras más de lo necesario.", scale: "Pt", keyed: true },
    { title: "Siento que mi mente funciona de manera diferente a la de los demás.", scale: "Sc", keyed: true },
    { title: "Evito las fiestas y eventos sociales cuando puedo.", scale: "Si", keyed: true },
    { title: "Siempre cumplo absolutamente todas mis promesas.", scale: "L", keyed: true },
    { title: "Presto mucha atención a cualquier cambio en mi cuerpo.", scale: "Hs", keyed: true },
    { title: "Me siento culpable por cosas que he hecho en el pasado.", scale: "D", keyed: true },
    { title: "Siento que puedo comunicarme con los muertos.", scale: "F", keyed: true },
    { title: "Creo que la mayoría de las personas son buenas y confiables.", scale: "K", keyed: true },
    { title: "Cuando estoy estresado/a, me duele mucho la cabeza.", scale: "Hy", keyed: true },
    // 111-120
    { title: "Siento que la gente se ríe de mí cuando no estoy presente.", scale: "Pa", keyed: true },
    { title: "Me siento capaz de hacer cualquier cosa que me proponga.", scale: "Ma", keyed: true },
    { title: "He mentido con frecuencia para salir de problemas.", scale: "Pd", keyed: true },
    { title: "Disfruto viendo programas sobre arte, historia o cultura.", scale: "Mf", keyed: true },
    { title: "Tengo miedo de perder el control de mis acciones.", scale: "Pt", keyed: true },
    { title: "A veces siento que alguien más controla mis movimientos.", scale: "Sc", keyed: true },
    { title: "Prefiero trabajar solo/a que en equipo.", scale: "Si", keyed: true },
    { title: "Nunca he sentido el deseo de romper algo por frustración.", scale: "L", keyed: true },
    { title: "Creo que me enfermo más que la mayoría de las personas.", scale: "Hs", keyed: true },
    { title: "No disfruto de las comidas como antes.", scale: "D", keyed: true },
    // 121-130
    { title: "He tenido visiones o experiencias místicas intensas.", scale: "F", keyed: true },
    { title: "Mis amigos dirían que soy una persona adaptable.", scale: "K", keyed: true },
    { title: "A veces siento un nudo en la garganta sin razón médica.", scale: "Hy", keyed: true },
    { title: "Creo que mis vecinos me tienen mala voluntad.", scale: "Pa", keyed: true },
    { title: "Hablo muy rápido y la gente a veces no me entiende.", scale: "Ma", keyed: true },
    { title: "Me resulta difícil mantener un trabajo por mucho tiempo.", scale: "Pd", keyed: true },
    { title: "Me emociono con facilidad al escuchar música.", scale: "Mf", keyed: true },
    { title: "Necesito revisar varias veces si cerré la puerta con llave.", scale: "Pt", keyed: true },
    { title: "Siento que hay algo fundamentalmente diferente en mí.", scale: "Sc", keyed: true },
    { title: "Me siento más cómodo/a estando en casa que saliendo.", scale: "Si", keyed: true },
    // 131-140
    { title: "Nunca he desobedecido una regla o norma.", scale: "L", keyed: true },
    { title: "Siento dolores musculares frecuentes sin causa conocida.", scale: "Hs", keyed: true },
    { title: "Mi sueño es irregular; duermo mucho o muy poco.", scale: "D", keyed: true },
    { title: "A veces siento que mi alma abandona mi cuerpo.", scale: "F", keyed: true },
    { title: "Puedo resolver la mayoría de mis problemas sin ayuda.", scale: "K", keyed: true },
    { title: "Tengo problemas de visión que los médicos no pueden explicar.", scale: "Hy", keyed: true },
    { title: "Siento que hay un complot organizado en mi contra.", scale: "Pa", keyed: true },
    { title: "Me siento lleno/a de energía y vitalidad.", scale: "Ma", keyed: true },
    { title: "No me siento culpable cuando hago algo incorrecto.", scale: "Pd", keyed: true },
    { title: "Me gusta cuidar de los demás y atender sus necesidades.", scale: "Mf", keyed: true },
    // 141-150
    { title: "Siento un miedo intenso sin saber exactamente a qué.", scale: "Pt", keyed: true },
    { title: "A veces no reconozco mi propia imagen en el espejo.", scale: "Sc", keyed: true },
    { title: "Me resulta agotador socializar durante mucho tiempo.", scale: "Si", keyed: true },
    { title: "Nunca he tenido un pensamiento inapropiado.", scale: "L", keyed: true },
    { title: "Frecuentemente siento que me falta el aire.", scale: "Hs", keyed: true },
    { title: "Me cuesta encontrar la motivación para hacer cosas.", scale: "D", keyed: true },
    { title: "He sentido que estoy poseído/a por una fuerza exterior.", scale: "F", keyed: true },
    { title: "Me siento cómodo/a conmigo mismo/a la mayor parte del tiempo.", scale: "K", keyed: true },
    { title: "Cuando estoy bajo presión, siento temblores o tics.", scale: "Hy", keyed: true },
    { title: "Creo que ciertas personas me siguen o me rastrean.", scale: "Pa", keyed: true },
    // 151-160
    { title: "Me impaciento fácilmente cuando las cosas van lentas.", scale: "Ma", keyed: true },
    { title: "He destruido propiedad ajena cuando estaba enojado/a.", scale: "Pd", keyed: true },
    { title: "Me gustan las conversaciones profundas sobre emociones y sentimientos.", scale: "Mf", keyed: true },
    { title: "Me resulta difícil relajarme, siempre estoy tenso/a.", scale: "Pt", keyed: true },
    { title: "Tengo dificultades para distinguir entre sueños y realidad.", scale: "Sc", keyed: true },
    { title: "Me resulta difícil mirar a los ojos a las personas.", scale: "Si", keyed: true },
    { title: "Nunca he sentido pereza ni he evitado una responsabilidad.", scale: "L", keyed: true },
    { title: "Siento que mis órganos internos no funcionan bien.", scale: "Hs", keyed: true },
    { title: "La vida no tiene mucho sentido para mí últimamente.", scale: "D", keyed: true },
    { title: "He recibido mensajes especiales a través de la televisión o la radio.", scale: "F", keyed: true },
    // 161-170
    { title: "Creo que tengo buen juicio para tomar decisiones.", scale: "K", keyed: true },
    { title: "A veces no puedo mover alguna parte de mi cuerpo temporalmente.", scale: "Hy", keyed: true },
    { title: "Siento que mis enemigos quieren arruinar mi reputación.", scale: "Pa", keyed: true },
    { title: "A menudo gasto dinero de forma impulsiva.", scale: "Ma", keyed: true },
    { title: "No me importa herir los sentimientos de otros si es necesario.", scale: "Pd", keyed: true },
    { title: "Me gusta explorar mis propias emociones y las de los demás.", scale: "Mf", keyed: true },
    { title: "Tengo rituales o costumbres que debo seguir al pie de la letra.", scale: "Pt", keyed: true },
    { title: "A veces siento que no tengo identidad propia.", scale: "Sc", keyed: true },
    { title: "Disfruto más las actividades tranquilas que las sociales.", scale: "Si", keyed: true },
    { title: "Nunca me he saltado una fila ni he tomado un atajo indebido.", scale: "L", keyed: true },
    // 171-180
    { title: "Me preocupa constantemente si tengo algún problema de salud.", scale: "Hs", keyed: true },
    { title: "Siento que he decepcionado a las personas que me importan.", scale: "D", keyed: true },
    { title: "He sentido que mi mente es leída por otras personas.", scale: "F", keyed: true },
    { title: "Me adapto bien a los cambios en mi vida.", scale: "K", keyed: true },
    { title: "A veces tengo episodios de dolor intenso sin diagnóstico médico.", scale: "Hy", keyed: true },
    { title: "Siento que no puedo confiar en nadie completamente.", scale: "Pa", keyed: true },
    { title: "Necesito estar constantemente ocupado/a haciendo cosas.", scale: "Ma", keyed: true },
    { title: "He usado a otras personas para conseguir lo que quiero.", scale: "Pd", keyed: true },
    { title: "Siento que mis dudas y miedos me paralizan a veces.", scale: "Pt", keyed: true },
    { title: "A veces me siento completamente aislado/a del mundo que me rodea.", scale: "Sc", keyed: true }
  ],
  scales: {
    validity: {
      'L-Deseabilidad Social': {
        items: [0, 13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169],
        keyedTrue: [0, 13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169],
        keyedFalse: [],
        desc: 'Mide la tendencia a presentarse de manera excesivamente favorable. Puntuaciones altas pueden indicar falta de honestidad en las respuestas o un deseo excesivo de aprobación social.'
      },
      'F-Infrecuencia': {
        items: [5, 16, 29, 42, 55, 68, 81, 94, 107, 120, 133, 146, 159, 172],
        keyedTrue: [5, 16, 29, 42, 55, 68, 81, 94, 107, 120, 133, 146, 159, 172],
        keyedFalse: [],
        desc: 'Mide la tendencia a dar respuestas atípicas o infrecuentes. Puntuaciones altas pueden indicar exageración de síntomas, confusión o psicopatología severa.'
      },
      'K-Defensividad': {
        items: [6, 20, 30, 43, 56, 69, 82, 95, 108, 121, 134, 147, 160, 173],
        keyedTrue: [6, 20, 30, 43, 56, 69, 82, 95, 108, 121, 134, 147, 160, 173],
        keyedFalse: [],
        desc: 'Mide la defensividad sutil y la tendencia a minimizar problemas. Puntuaciones altas sugieren negación de dificultades o una autoimagen excesivamente positiva.'
      }
    },
    clinical: {
      'Hs-Hipocondría': {
        items: [1, 14, 27, 40, 53, 66, 79, 92, 105, 118, 131, 144, 157, 170],
        keyedTrue: [1, 14, 27, 40, 53, 66, 79, 92, 105, 118, 131, 144, 157, 170],
        keyedFalse: [],
        desc: 'Mide la preocupación excesiva por la salud y el funcionamiento corporal. Puntuaciones altas indican tendencia a la somatización y preocupaciones hipocondríacas.'
      },
      'D-Depresión': {
        items: [2, 15, 28, 41, 54, 67, 80, 93, 106, 119, 132, 145, 158, 171],
        keyedTrue: [2, 15, 28, 41, 54, 67, 80, 93, 106, 119, 132, 145, 158, 171],
        keyedFalse: [],
        desc: 'Mide síntomas depresivos como tristeza, pesimismo, baja autoestima y falta de motivación. Puntuaciones altas sugieren un estado de ánimo deprimido significativo.'
      },
      'Hy-Histeria': {
        items: [7, 17, 31, 44, 57, 70, 83, 96, 109, 122, 135, 148, 161, 174],
        keyedTrue: [7, 17, 31, 44, 57, 70, 83, 96, 109, 122, 135, 148, 161, 174],
        keyedFalse: [],
        desc: 'Mide la tendencia a desarrollar síntomas físicos como respuesta al estrés y la negación de problemas emocionales. Puntuaciones altas sugieren mecanismos de conversión.'
      },
      'Pd-Desviación Psicopática': {
        items: [8, 21, 34, 47, 60, 73, 86, 99, 112, 125, 138, 151, 164, 177],
        keyedTrue: [8, 21, 34, 47, 60, 73, 86, 99, 112, 125, 138, 151, 164, 177],
        keyedFalse: [],
        desc: 'Mide la tendencia al comportamiento antisocial, conflictos con la autoridad e impulsividad. Puntuaciones altas sugieren dificultades en las relaciones y las normas sociales.'
      },
      'Mf-Masculinidad-Feminidad': {
        items: [9, 22, 35, 48, 61, 74, 87, 100, 113, 126, 139, 152, 165],
        keyedTrue: [9, 22, 35, 48, 61, 74, 87, 100, 113, 126, 139, 152, 165],
        keyedFalse: [],
        desc: 'Mide intereses y roles asociados con expresión de género. Puntuaciones altas indican mayor orientación hacia intereses estéticos, artísticos y emocionales.'
      },
      'Pa-Paranoia': {
        items: [3, 18, 32, 45, 58, 71, 84, 97, 110, 123, 136, 149, 162, 175],
        keyedTrue: [3, 18, 32, 45, 58, 71, 84, 97, 110, 123, 136, 149, 162, 175],
        keyedFalse: [],
        desc: 'Mide suspicacia, desconfianza e ideas de persecución. Puntuaciones altas sugieren tendencias paranoides y dificultad para confiar en los demás.'
      },
      'Pt-Psicastenia': {
        items: [10, 23, 36, 49, 62, 75, 88, 101, 114, 127, 140, 153, 166, 178],
        keyedTrue: [10, 23, 36, 49, 62, 75, 88, 101, 114, 127, 140, 153, 166, 178],
        keyedFalse: [],
        desc: 'Mide ansiedad, conductas obsesivo-compulsivas, dudas excesivas y dificultad para tomar decisiones. Puntuaciones altas indican alto nivel de ansiedad y rumiación.'
      },
      'Sc-Esquizofrenia': {
        items: [11, 24, 37, 50, 63, 76, 89, 102, 115, 128, 141, 154, 167, 179],
        keyedTrue: [11, 24, 37, 50, 63, 76, 89, 102, 115, 128, 141, 154, 167, 179],
        keyedFalse: [],
        desc: 'Mide pensamientos inusuales, alienación social y experiencias perceptuales atípicas. Puntuaciones altas sugieren dificultades en el pensamiento y la percepción de la realidad.'
      },
      'Ma-Hipomanía': {
        items: [4, 19, 33, 46, 59, 72, 85, 98, 111, 124, 137, 150, 163, 176],
        keyedTrue: [4, 19, 33, 46, 59, 72, 85, 98, 111, 124, 137, 150, 163, 176],
        keyedFalse: [],
        desc: 'Mide elevación del ánimo, grandiosidad, impulsividad y exceso de actividad. Puntuaciones altas sugieren tendencias hipomaníacas o maníacas.'
      },
      'Si-Introversión Social': {
        items: [12, 25, 38, 51, 64, 77, 90, 103, 116, 129, 142, 155, 168],
        keyedTrue: [12, 25, 38, 51, 64, 77, 90, 103, 116, 129, 142, 155, 168],
        keyedFalse: [],
        desc: 'Mide la preferencia por la soledad, la timidez y la incomodidad social. Puntuaciones altas indican introversión marcada y posible aislamiento social.'
      }
    }
  },
  getResult(score, answersArr) {
    if (!answersArr || answersArr.length === 0) {
      return { label: 'Sin datos', key: 'no_data', color: '#999', desc: 'No se proporcionaron respuestas.' };
    }

    const calculateScaleScore = (scaleData) => {
      let raw = 0;
      scaleData.keyedTrue.forEach(idx => {
        if (answersArr[idx] === 1) raw++;
      });
      scaleData.keyedFalse.forEach(idx => {
        if (answersArr[idx] === 0) raw++;
      });
      return raw;
    };

    const toTScore = (raw, mean, sd) => {
      return Math.round(50 + 10 * (raw - mean) / sd);
    };

    // Calculate validity scales
    const validityResults = [];
    const validityMean = 5;
    const validitySd = 3;
    for (const [name, data] of Object.entries(this.scales.validity)) {
      const raw = calculateScaleScore(data);
      const tScore = toTScore(raw, validityMean, validitySd);
      const elevated = tScore >= 65;
      validityResults.push({
        name,
        raw,
        tScore,
        elevated,
        desc: data.desc
      });
    }

    // Calculate clinical scales
    const clinicalResults = [];
    const clinicalMean = 7;
    const clinicalSd = 3;
    let elevatedCount = 0;
    const elevatedScales = [];

    for (const [name, data] of Object.entries(this.scales.clinical)) {
      const raw = calculateScaleScore(data);
      const tScore = toTScore(raw, clinicalMean, clinicalSd);
      const elevated = tScore >= 65;
      if (elevated) {
        elevatedCount++;
        elevatedScales.push(name);
      }
      clinicalResults.push({
        name,
        raw,
        tScore,
        elevated,
        desc: data.desc
      });
    }

    // Check validity
    const lScore = validityResults.find(v => v.name.startsWith('L'));
    const fScore = validityResults.find(v => v.name.startsWith('F'));
    const kScore = validityResults.find(v => v.name.startsWith('K'));

    let validityWarning = '';
    if (lScore && lScore.tScore >= 70) {
      validityWarning += 'La escala L está muy elevada, lo que sugiere un patrón de respuestas excesivamente favorable. ';
    }
    if (fScore && fScore.tScore >= 80) {
      validityWarning += 'La escala F está muy elevada, lo que podría indicar exageración de síntomas o respuestas inconsistentes. ';
    }
    if (kScore && kScore.tScore >= 70) {
      validityWarning += 'La escala K está elevada, sugiriendo posible minimización de problemas. ';
    }

    // Determine overall result
    let label, key, color, desc;

    if (fScore && fScore.tScore >= 80) {
      label = 'Perfil posiblemente inválido';
      key = 'invalid_profile';
      color = '#888';
      desc = 'Las escalas de validez sugieren que el perfil puede no ser interpretable. ' + validityWarning;
    } else if (elevatedCount === 0) {
      label = 'Perfil dentro de límites normales';
      key = 'normal';
      color = '#4CAF50';
      desc = 'No se encontraron escalas clínicas significativamente elevadas. El perfil sugiere un funcionamiento psicológico dentro de los parámetros esperados.';
    } else if (elevatedCount <= 2) {
      label = 'Perfil con elevaciones leves';
      key = 'mild_elevations';
      color = '#FF9800';
      desc = 'Se encontraron ' + elevatedCount + ' escala(s) clínica(s) elevada(s): ' + elevatedScales.join(', ') + '. Esto sugiere áreas de atención que podrían beneficiarse de evaluación adicional.';
    } else if (elevatedCount <= 5) {
      label = 'Perfil con elevaciones moderadas';
      key = 'moderate_elevations';
      color = '#F44336';
      desc = 'Se encontraron ' + elevatedCount + ' escalas clínicas elevadas: ' + elevatedScales.join(', ') + '. Esto sugiere dificultades significativas en múltiples áreas. Se recomienda evaluación profesional.';
    } else {
      label = 'Perfil con elevaciones múltiples';
      key = 'multiple_elevations';
      color = '#9C27B0';
      desc = 'Se encontraron ' + elevatedCount + ' escalas clínicas elevadas: ' + elevatedScales.join(', ') + '. Este patrón sugiere malestar psicológico significativo. Se recomienda encarecidamente consultar con un profesional de salud mental.';
    }

    if (validityWarning && key !== 'invalid_profile') {
      desc += ' Nota de validez: ' + validityWarning;
    }

    return {
      label,
      key,
      color,
      desc,
      validityScales: validityResults,
      clinicalScales: clinicalResults
    };
  }
};
