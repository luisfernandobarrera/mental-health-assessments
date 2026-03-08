const TEST_PID5 = {
  id: 'pid5',
  abbr: 'PID-5',
  name: 'Personalidad DSM-5',
  fullName: 'Inventario de Personalidad del DSM-5',
  desc: 'Evaluación exhaustiva de rasgos patológicos de personalidad según el modelo dimensional del DSM-5. Mide 25 facetas en 5 dominios.',
  color: '#6B5B73',
  icon: '🧬',
  items: 220,
  time: '25-35 min',
  instructions: 'Lee cada afirmación y selecciona qué tan bien te describe en general, no solo cómo te sientes ahora.',
  sharedOptions: ["Muy falso o a menudo falso", "A veces o algo falso", "A veces o algo verdadero", "Muy verdadero o a menudo verdadero"],
  questions: [
    // === DOMAIN 1: NEGATIVE AFFECTIVITY ===
    // Emotional Lability (Labilidad Emocional) - items 0-6
    { title: "Mis emociones cambian sin razón aparente.", facet: "emotional_lability", domain: "negative_affectivity" },
    { title: "Mis estados de ánimo cambian drásticamente de un momento a otro.", facet: "emotional_lability", domain: "negative_affectivity" },
    { title: "Paso rápidamente de sentirme feliz a sentirme triste sin motivo claro.", facet: "emotional_lability", domain: "negative_affectivity" },
    { title: "Las personas cercanas me dicen que soy demasiado emocional.", facet: "emotional_lability", domain: "negative_affectivity" },
    { title: "Me resulta difícil controlar mis reacciones emocionales.", facet: "emotional_lability", domain: "negative_affectivity" },
    { title: "Me altero con facilidad ante situaciones que otros manejan sin problema.", facet: "emotional_lability", domain: "negative_affectivity" },
    { title: "Mis sentimientos son impredecibles, incluso para mí.", facet: "emotional_lability", domain: "negative_affectivity" },

    // Anxiousness (Ansiedad) - items 7-15
    { title: "Me preocupo por casi todo.", facet: "anxiousness", domain: "negative_affectivity" },
    { title: "Siempre estoy esperando que algo malo suceda.", facet: "anxiousness", domain: "negative_affectivity" },
    { title: "Me pongo nervioso/a con mucha facilidad.", facet: "anxiousness", domain: "negative_affectivity" },
    { title: "Me resulta muy difícil dejar de preocuparme por las cosas.", facet: "anxiousness", domain: "negative_affectivity" },
    { title: "Siento una ansiedad constante que no puedo explicar.", facet: "anxiousness", domain: "negative_affectivity" },
    { title: "Me preocupo en exceso por cosas que probablemente no van a pasar.", facet: "anxiousness", domain: "negative_affectivity" },
    { title: "Los pensamientos ansiosos invaden mi mente con frecuencia.", facet: "anxiousness", domain: "negative_affectivity" },
    { title: "Tengo miedo de que las cosas salgan mal en casi todas las situaciones.", facet: "anxiousness", domain: "negative_affectivity" },
    { title: "Me siento tenso/a y nervioso/a la mayor parte del tiempo.", facet: "anxiousness", domain: "negative_affectivity" },

    // Separation Insecurity (Inseguridad de Separación) - items 16-22
    { title: "Me aterra la idea de estar solo/a.", facet: "separation_insecurity", domain: "negative_affectivity" },
    { title: "Me preocupa mucho que las personas importantes en mi vida me abandonen.", facet: "separation_insecurity", domain: "negative_affectivity" },
    { title: "Necesito constantemente la cercanía de las personas que quiero.", facet: "separation_insecurity", domain: "negative_affectivity" },
    { title: "Me siento desprotegido/a cuando no estoy cerca de alguien que me importa.", facet: "separation_insecurity", domain: "negative_affectivity" },
    { title: "Me angustia mucho separarme de las personas a las que estoy apegado/a.", facet: "separation_insecurity", domain: "negative_affectivity" },
    { title: "Hago todo lo posible para evitar que las personas se alejen de mí.", facet: "separation_insecurity", domain: "negative_affectivity" },
    { title: "Cuando estoy lejos de alguien importante para mí, me resulta difícil funcionar.", facet: "separation_insecurity", domain: "negative_affectivity" },

    // Submissiveness (Sumisión) - items 23-26
    { title: "Cambio mis opiniones para coincidir con las de los demás.", facet: "submissiveness", domain: "negative_affectivity" },
    { title: "Me cuesta mucho decir que no, incluso cuando quiero hacerlo.", facet: "submissiveness", domain: "negative_affectivity" },
    { title: "Dejo que otros tomen las decisiones por mí para evitar conflictos.", facet: "submissiveness", domain: "negative_affectivity" },
    { title: "Prefiero ceder ante los demás antes que defender mi posición.", facet: "submissiveness", domain: "negative_affectivity" },

    // Hostility (Hostilidad) - items 27-36
    { title: "Me irrito con facilidad por cosas pequeñas.", facet: "hostility", domain: "negative_affectivity" },
    { title: "Frecuentemente me siento enojado/a sin saber exactamente por qué.", facet: "hostility", domain: "negative_affectivity" },
    { title: "La gente me dice que soy una persona de mal genio.", facet: "hostility", domain: "negative_affectivity" },
    { title: "Pierdo la paciencia con los demás más de lo que debería.", facet: "hostility", domain: "negative_affectivity" },
    { title: "Me molesta que la gente no haga las cosas a mi manera.", facet: "hostility", domain: "negative_affectivity" },
    { title: "Guardo resentimiento hacia las personas que me han hecho daño.", facet: "hostility", domain: "negative_affectivity" },
    { title: "Tiendo a reaccionar con rabia ante la menor provocación.", facet: "hostility", domain: "negative_affectivity" },
    { title: "Me enfurezco cuando las cosas no salen como quiero.", facet: "hostility", domain: "negative_affectivity" },
    { title: "Siento una irritación constante que me cuesta controlar.", facet: "hostility", domain: "negative_affectivity" },
    { title: "Cuando alguien me ofende, me cuesta mucho dejarlo pasar.", facet: "hostility", domain: "negative_affectivity" },

    // Perseveration (Perseveración) - items 37-45
    { title: "Me quedo atrapado/a en los mismos pensamientos una y otra vez.", facet: "perseveration", domain: "negative_affectivity" },
    { title: "Me resulta muy difícil dejar de pensar en mis problemas.", facet: "perseveration", domain: "negative_affectivity" },
    { title: "Repaso mentalmente las mismas situaciones sin poder detenerme.", facet: "perseveration", domain: "negative_affectivity" },
    { title: "Me obsesiono con errores que he cometido en el pasado.", facet: "perseveration", domain: "negative_affectivity" },
    { title: "Cuando algo me molesta, no puedo dejar de pensar en ello durante días.", facet: "perseveration", domain: "negative_affectivity" },
    { title: "Mis pensamientos se repiten como un disco rayado.", facet: "perseveration", domain: "negative_affectivity" },
    { title: "Me cuesta soltar un tema incluso cuando sé que debería hacerlo.", facet: "perseveration", domain: "negative_affectivity" },
    { title: "Sigo pensando en las mismas cosas aunque no sirva de nada.", facet: "perseveration", domain: "negative_affectivity" },
    { title: "La gente me dice que le doy demasiadas vueltas a las cosas.", facet: "perseveration", domain: "negative_affectivity" },

    // Restricted Affectivity (Afectividad Restringida) - items 46-52
    { title: "Rara vez muestro mis emociones a los demás.", facet: "restricted_affectivity", domain: "negative_affectivity" },
    { title: "La gente me dice que parezco frío/a o distante emocionalmente.", facet: "restricted_affectivity", domain: "negative_affectivity" },
    { title: "No suelo sentir emociones fuertes, ni positivas ni negativas.", facet: "restricted_affectivity", domain: "negative_affectivity" },
    { title: "Me resulta difícil expresar lo que siento, incluso con personas cercanas.", facet: "restricted_affectivity", domain: "negative_affectivity" },
    { title: "Las situaciones que emocionan a otros a mí me dejan indiferente.", facet: "restricted_affectivity", domain: "negative_affectivity" },
    { title: "No me conmueven las historias tristes ni las películas emotivas.", facet: "restricted_affectivity", domain: "negative_affectivity" },
    { title: "Prefiero no mostrar lo que siento porque lo considero una debilidad.", facet: "restricted_affectivity", domain: "negative_affectivity" },

    // === DOMAIN 2: DETACHMENT ===
    // Withdrawal (Retraimiento) - items 53-62
    { title: "Prefiero estar solo/a la mayor parte del tiempo.", facet: "withdrawal", domain: "detachment" },
    { title: "Evito las reuniones sociales siempre que puedo.", facet: "withdrawal", domain: "detachment" },
    { title: "No tengo interés en hacer amigos nuevos.", facet: "withdrawal", domain: "detachment" },
    { title: "Me siento incómodo/a cuando tengo que interactuar con otras personas.", facet: "withdrawal", domain: "detachment" },
    { title: "Prefiero hacer las cosas solo/a en lugar de en grupo.", facet: "withdrawal", domain: "detachment" },
    { title: "Me aíslo de los demás intencionalmente.", facet: "withdrawal", domain: "detachment" },
    { title: "Las conversaciones con otras personas me resultan agotadoras.", facet: "withdrawal", domain: "detachment" },
    { title: "Me siento mejor cuando no tengo que tratar con nadie.", facet: "withdrawal", domain: "detachment" },
    { title: "Evito situaciones en las que tenga que socializar.", facet: "withdrawal", domain: "detachment" },
    { title: "No me importa pasar largos períodos sin contacto social.", facet: "withdrawal", domain: "detachment" },

    // Anhedonia (Anhedonia) - items 63-70
    { title: "Pocas cosas en la vida me producen verdadero placer.", facet: "anhedonia", domain: "detachment" },
    { title: "He perdido el interés en actividades que antes disfrutaba.", facet: "anhedonia", domain: "detachment" },
    { title: "Me cuesta encontrar algo que realmente me motive.", facet: "anhedonia", domain: "detachment" },
    { title: "La vida me parece vacía y sin sentido la mayor parte del tiempo.", facet: "anhedonia", domain: "detachment" },
    { title: "No experimento alegría ni siquiera en ocasiones que deberían ser felices.", facet: "anhedonia", domain: "detachment" },
    { title: "Me siento emocionalmente vacío/a casi siempre.", facet: "anhedonia", domain: "detachment" },
    { title: "Nada me entusiasma realmente.", facet: "anhedonia", domain: "detachment" },
    { title: "Siento que mis emociones positivas se han apagado.", facet: "anhedonia", domain: "detachment" },

    // Depressivity (Depresividad) - items 71-84
    { title: "Siento que no valgo nada como persona.", facet: "depressivity", domain: "detachment" },
    { title: "Creo que el mundo estaría mejor sin mí.", facet: "depressivity", domain: "detachment" },
    { title: "Me siento desesperanzado/a respecto al futuro.", facet: "depressivity", domain: "detachment" },
    { title: "Me critico constantemente por todo lo que hago.", facet: "depressivity", domain: "detachment" },
    { title: "Siento una tristeza profunda que no se va.", facet: "depressivity", domain: "detachment" },
    { title: "Me considero un fracaso en casi todo lo que intento.", facet: "depressivity", domain: "detachment" },
    { title: "Creo que las cosas nunca van a mejorar para mí.", facet: "depressivity", domain: "detachment" },
    { title: "Me siento culpable por cosas que no son realmente mi culpa.", facet: "depressivity", domain: "detachment" },
    { title: "Tengo una visión muy negativa de mí mismo/a.", facet: "depressivity", domain: "detachment" },
    { title: "Frecuentemente pienso que no merezco ser feliz.", facet: "depressivity", domain: "detachment" },
    { title: "Me siento inútil e incapaz de hacer algo bien.", facet: "depressivity", domain: "detachment" },
    { title: "Lloro con frecuencia o siento ganas de llorar.", facet: "depressivity", domain: "detachment" },
    { title: "Me siento completamente solo/a incluso cuando estoy rodeado/a de gente.", facet: "depressivity", domain: "detachment" },
    { title: "Siento que mi vida no tiene propósito ni dirección.", facet: "depressivity", domain: "detachment" },

    // Intimacy Avoidance (Evitación de Intimidad) - items 85-90
    { title: "Evito las relaciones sentimentales porque me hacen sentir vulnerable.", facet: "intimacy_avoidance", domain: "detachment" },
    { title: "No me interesa tener una relación íntima con nadie.", facet: "intimacy_avoidance", domain: "detachment" },
    { title: "Me incomoda mucho la cercanía emocional con otra persona.", facet: "intimacy_avoidance", domain: "detachment" },
    { title: "Prefiero mantener a las personas a distancia emocional.", facet: "intimacy_avoidance", domain: "detachment" },
    { title: "Las relaciones íntimas me resultan sofocantes.", facet: "intimacy_avoidance", domain: "detachment" },
    { title: "No necesito a nadie en mi vida de forma cercana.", facet: "intimacy_avoidance", domain: "detachment" },

    // Suspiciousness (Suspicacia) - items 91-97
    { title: "Desconfío de las intenciones de la mayoría de las personas.", facet: "suspiciousness", domain: "detachment" },
    { title: "Creo que la gente tiene motivos ocultos la mayor parte del tiempo.", facet: "suspiciousness", domain: "detachment" },
    { title: "Sospecho que las personas hablan mal de mí a mis espaldas.", facet: "suspiciousness", domain: "detachment" },
    { title: "Me cuesta creer que alguien quiera ayudarme sin esperar algo a cambio.", facet: "suspiciousness", domain: "detachment" },
    { title: "Siempre estoy alerta porque creo que alguien podría intentar aprovecharse de mí.", facet: "suspiciousness", domain: "detachment" },
    { title: "Dudo de la sinceridad de los cumplidos o elogios que recibo.", facet: "suspiciousness", domain: "detachment" },
    { title: "Siento que no puedo confiar plenamente en nadie.", facet: "suspiciousness", domain: "detachment" },

    // === DOMAIN 3: ANTAGONISM ===
    // Manipulativeness (Manipulación) - items 98-102
    { title: "Soy bueno/a manipulando a la gente para conseguir lo que quiero.", facet: "manipulativeness", domain: "antagonism" },
    { title: "Uso la adulación para que la gente haga lo que yo quiero.", facet: "manipulativeness", domain: "antagonism" },
    { title: "No me importa usar a otros para lograr mis objetivos.", facet: "manipulativeness", domain: "antagonism" },
    { title: "Sé exactamente qué decir para influir en las decisiones de los demás.", facet: "manipulativeness", domain: "antagonism" },
    { title: "Disfruto controlando a las personas de forma sutil.", facet: "manipulativeness", domain: "antagonism" },

    // Deceitfulness (Falsedad) - items 103-112
    { title: "Miento con frecuencia si me conviene.", facet: "deceitfulness", domain: "antagonism" },
    { title: "No me resulta difícil engañar a la gente.", facet: "deceitfulness", domain: "antagonism" },
    { title: "Invento historias para salirme con la mía.", facet: "deceitfulness", domain: "antagonism" },
    { title: "A veces finjo ser alguien que no soy para impresionar a los demás.", facet: "deceitfulness", domain: "antagonism" },
    { title: "Exagero mis logros para causar buena impresión.", facet: "deceitfulness", domain: "antagonism" },
    { title: "Omito información importante cuando me beneficia.", facet: "deceitfulness", domain: "antagonism" },
    { title: "Soy capaz de actuar de manera convincente aunque esté mintiendo.", facet: "deceitfulness", domain: "antagonism" },
    { title: "No me molesta ser deshonesto/a si eso me ayuda.", facet: "deceitfulness", domain: "antagonism" },
    { title: "He estafado o engañado a otros para obtener algo que quería.", facet: "deceitfulness", domain: "antagonism" },
    { title: "Digo lo que la gente quiere oír, aunque no sea verdad.", facet: "deceitfulness", domain: "antagonism" },

    // Grandiosity (Grandiosidad) - items 113-118
    { title: "Merezco un trato especial porque soy mejor que la mayoría.", facet: "grandiosity", domain: "antagonism" },
    { title: "Creo que soy una persona extraordinaria y que los demás deberían reconocerlo.", facet: "grandiosity", domain: "antagonism" },
    { title: "La gente no aprecia lo valioso/a que realmente soy.", facet: "grandiosity", domain: "antagonism" },
    { title: "Me resulta difícil entender por qué otros no ven lo especial que soy.", facet: "grandiosity", domain: "antagonism" },
    { title: "Siento que estoy por encima de las reglas que aplican a los demás.", facet: "grandiosity", domain: "antagonism" },
    { title: "Me comparo con otros y casi siempre me considero superior.", facet: "grandiosity", domain: "antagonism" },

    // Attention Seeking (Búsqueda de Atención) - items 119-126
    { title: "Necesito ser el centro de atención en las situaciones sociales.", facet: "attention_seeking", domain: "antagonism" },
    { title: "Hago cosas llamativas para que la gente me note.", facet: "attention_seeking", domain: "antagonism" },
    { title: "Me molesta cuando la atención no está puesta en mí.", facet: "attention_seeking", domain: "antagonism" },
    { title: "Busco la aprobación y admiración de los demás constantemente.", facet: "attention_seeking", domain: "antagonism" },
    { title: "Me esfuerzo mucho por impresionar a la gente.", facet: "attention_seeking", domain: "antagonism" },
    { title: "Me gusta hacer grandes gestos para que los demás hablen de mí.", facet: "attention_seeking", domain: "antagonism" },
    { title: "Exagero mis emociones para obtener la reacción de los demás.", facet: "attention_seeking", domain: "antagonism" },
    { title: "Me siento vacío/a si no recibo atención de otras personas.", facet: "attention_seeking", domain: "antagonism" },

    // Callousness (Insensibilidad) - items 127-140
    { title: "No me importa si mis acciones hieren a otras personas.", facet: "callousness", domain: "antagonism" },
    { title: "La gente dice que soy insensible ante el sufrimiento ajeno.", facet: "callousness", domain: "antagonism" },
    { title: "No siento remordimiento cuando hago algo que lastima a alguien.", facet: "callousness", domain: "antagonism" },
    { title: "Las lágrimas de los demás no me conmueven.", facet: "callousness", domain: "antagonism" },
    { title: "Me resulta difícil entender por qué la gente se ofende tan fácilmente.", facet: "callousness", domain: "antagonism" },
    { title: "No me preocupo por los sentimientos de los demás si no me afectan directamente.", facet: "callousness", domain: "antagonism" },
    { title: "Puedo ser cruel si la situación lo requiere.", facet: "callousness", domain: "antagonism" },
    { title: "No me interesa consolar a alguien que está sufriendo.", facet: "callousness", domain: "antagonism" },
    { title: "Creo que la gente es demasiado sensible hoy en día.", facet: "callousness", domain: "antagonism" },
    { title: "No pierdo el sueño por haber tratado mal a alguien.", facet: "callousness", domain: "antagonism" },
    { title: "Me han dicho que soy una persona dura e implacable.", facet: "callousness", domain: "antagonism" },
    { title: "Considero que la empatía es una debilidad.", facet: "callousness", domain: "antagonism" },
    { title: "No me afecta ver a otros sufrir las consecuencias de sus errores.", facet: "callousness", domain: "antagonism" },
    { title: "Antepongo siempre mis necesidades sin importar cómo afecte a los demás.", facet: "callousness", domain: "antagonism" },

    // === DOMAIN 4: DISINHIBITION ===
    // Irresponsibility (Irresponsabilidad) - items 141-147
    { title: "Con frecuencia no cumplo mis compromisos ni obligaciones.", facet: "irresponsibility", domain: "disinhibition" },
    { title: "Soy descuidado/a con mis responsabilidades financieras.", facet: "irresponsibility", domain: "disinhibition" },
    { title: "La gente no puede contar conmigo para hacer lo que digo que haré.", facet: "irresponsibility", domain: "disinhibition" },
    { title: "Dejo tareas importantes sin terminar con frecuencia.", facet: "irresponsibility", domain: "disinhibition" },
    { title: "No me preocupo por cumplir los plazos ni las fechas límite.", facet: "irresponsibility", domain: "disinhibition" },
    { title: "Tiendo a dejar que otros se encarguen de mis responsabilidades.", facet: "irresponsibility", domain: "disinhibition" },
    { title: "Me cuesta mantener un trabajo o seguir un plan a largo plazo.", facet: "irresponsibility", domain: "disinhibition" },

    // Impulsivity (Impulsividad) - items 148-153
    { title: "Actúo sin pensar en las consecuencias.", facet: "impulsivity", domain: "disinhibition" },
    { title: "Hago cosas de forma impulsiva de las que luego me arrepiento.", facet: "impulsivity", domain: "disinhibition" },
    { title: "Me resulta muy difícil resistir mis impulsos.", facet: "impulsivity", domain: "disinhibition" },
    { title: "Tomo decisiones apresuradas sin considerar todas las opciones.", facet: "impulsivity", domain: "disinhibition" },
    { title: "Digo cosas sin pensar y luego desearía no haberlas dicho.", facet: "impulsivity", domain: "disinhibition" },
    { title: "No puedo esperar por las cosas; necesito gratificación inmediata.", facet: "impulsivity", domain: "disinhibition" },

    // Distractibility (Distractibilidad) - items 154-162
    { title: "Me distraigo con mucha facilidad.", facet: "distractibility", domain: "disinhibition" },
    { title: "Me cuesta concentrarme en una tarea por más de unos minutos.", facet: "distractibility", domain: "disinhibition" },
    { title: "Pierdo el hilo de mis pensamientos constantemente.", facet: "distractibility", domain: "disinhibition" },
    { title: "Empiezo muchas cosas pero me cuesta terminarlas porque me distraigo.", facet: "distractibility", domain: "disinhibition" },
    { title: "Cualquier ruido o estímulo externo desvía mi atención.", facet: "distractibility", domain: "disinhibition" },
    { title: "Me resulta difícil seguir una conversación larga sin perder la concentración.", facet: "distractibility", domain: "disinhibition" },
    { title: "Mi mente divaga cuando debería estar enfocado/a en algo.", facet: "distractibility", domain: "disinhibition" },
    { title: "Olvido lo que estaba haciendo con frecuencia.", facet: "distractibility", domain: "disinhibition" },
    { title: "Necesito que me repitan las instrucciones porque no logro retenerlas.", facet: "distractibility", domain: "disinhibition" },

    // Risk Taking (Toma de Riesgos) - items 163-176
    { title: "Disfruto haciendo cosas peligrosas.", facet: "risk_taking", domain: "disinhibition" },
    { title: "Busco emociones fuertes aunque impliquen riesgo.", facet: "risk_taking", domain: "disinhibition" },
    { title: "No me importa ponerme en situaciones arriesgadas.", facet: "risk_taking", domain: "disinhibition" },
    { title: "Me aburro fácilmente si no hay adrenalina de por medio.", facet: "risk_taking", domain: "disinhibition" },
    { title: "He hecho cosas temerarias que podrían haberme causado daño.", facet: "risk_taking", domain: "disinhibition" },
    { title: "Las actividades peligrosas me resultan emocionantes.", facet: "risk_taking", domain: "disinhibition" },
    { title: "Conduzco más rápido de lo permitido porque me gusta la velocidad.", facet: "risk_taking", domain: "disinhibition" },
    { title: "He consumido sustancias sin preocuparme por las consecuencias.", facet: "risk_taking", domain: "disinhibition" },
    { title: "Ignoro las señales de advertencia y sigo adelante con lo que estoy haciendo.", facet: "risk_taking", domain: "disinhibition" },
    { title: "Acepto retos que la mayoría consideraría demasiado arriesgados.", facet: "risk_taking", domain: "disinhibition" },
    { title: "Necesito experiencias intensas para sentirme vivo/a.", facet: "risk_taking", domain: "disinhibition" },
    { title: "Me aburro con la rutina y busco hacer cosas nuevas e impredecibles.", facet: "risk_taking", domain: "disinhibition" },
    { title: "No considero los peligros antes de actuar.", facet: "risk_taking", domain: "disinhibition" },
    { title: "La idea de hacer algo prohibido me resulta atractiva.", facet: "risk_taking", domain: "disinhibition" },

    // Rigid Perfectionism (Perfeccionismo Rígido) - items 177-186
    { title: "Todo tiene que estar perfecto o no me siento satisfecho/a.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "Me resulta imposible aceptar un trabajo que no sea impecable.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "Dedico demasiado tiempo a detalles insignificantes para asegurarme de que estén bien.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "Mis estándares son tan altos que a menudo no logro alcanzarlos.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "Insisto en que las cosas se hagan exactamente como yo quiero.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "Me cuesta delegar tareas porque nadie las hace tan bien como yo.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "Mi perfeccionismo interfiere con mi capacidad de terminar las cosas a tiempo.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "Me siento muy mal conmigo mismo/a cuando cometo el más mínimo error.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "Tengo reglas muy estrictas sobre cómo deben hacerse las cosas.", facet: "rigid_perfectionism", domain: "disinhibition" },
    { title: "No tolero la mediocridad, ni en mí ni en los demás.", facet: "rigid_perfectionism", domain: "disinhibition" },

    // === DOMAIN 5: PSYCHOTICISM ===
    // Unusual Beliefs (Creencias Inusuales) - items 187-194
    { title: "Creo que tengo un sexto sentido que me permite saber cosas que otros no saben.", facet: "unusual_beliefs", domain: "psychoticism" },
    { title: "He tenido experiencias que considero sobrenaturales o paranormales.", facet: "unusual_beliefs", domain: "psychoticism" },
    { title: "Creo que puedo influir en los eventos con solo pensarlo.", facet: "unusual_beliefs", domain: "psychoticism" },
    { title: "Siento que hay fuerzas ocultas que controlan lo que sucede en el mundo.", facet: "unusual_beliefs", domain: "psychoticism" },
    { title: "Creo que las coincidencias son mensajes del universo dirigidos a mí.", facet: "unusual_beliefs", domain: "psychoticism" },
    { title: "He sentido que tengo poderes o habilidades especiales que otros no poseen.", facet: "unusual_beliefs", domain: "psychoticism" },
    { title: "Creo que mis pensamientos pueden afectar directamente la realidad.", facet: "unusual_beliefs", domain: "psychoticism" },
    { title: "Siento una conexión especial con lo sobrenatural o lo místico.", facet: "unusual_beliefs", domain: "psychoticism" },

    // Eccentricity (Excentricidad) - items 195-207
    { title: "La gente me considera una persona rara o excéntrica.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Mi forma de pensar es muy diferente a la de la mayoría.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Tengo ideas que los demás consideran extrañas o fuera de lo común.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Mi comportamiento hace que la gente se sienta incómoda.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Digo cosas que otros consideran raras o sin sentido.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Tengo intereses o pasatiempos que la mayoría encuentra muy peculiares.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Me expreso de maneras que los demás no entienden.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Me han dicho que mi forma de ver el mundo es muy inusual.", facet: "eccentricity", domain: "psychoticism" },
    { title: "La gente me mira de forma extraña por cómo me comporto.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Mis reacciones ante las situaciones son diferentes a las de los demás.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Tengo un estilo personal que los demás consideran muy fuera de lo normal.", facet: "eccentricity", domain: "psychoticism" },
    { title: "A menudo pienso en cosas que la mayoría ni siquiera se imaginaría.", facet: "eccentricity", domain: "psychoticism" },
    { title: "Me siento fundamentalmente diferente a todas las demás personas.", facet: "eccentricity", domain: "psychoticism" },

    // Perceptual Dysregulation (Disregulación Perceptual) - items 208-219
    { title: "A veces siento que las cosas a mi alrededor no son reales.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "He tenido la sensación de estar fuera de mi cuerpo.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "A veces veo cosas que los demás no pueden ver.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "He escuchado voces o sonidos que otros no escuchaban.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "A veces siento que mi cuerpo cambia de forma o tamaño.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "He tenido experiencias en las que me sentía separado/a de mí mismo/a.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "A veces mi entorno me parece distorsionado o irreal.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "He sentido que mis pensamientos no me pertenecen.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "A veces pierdo la noción de dónde termino yo y empieza el mundo exterior.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "He tenido sensaciones extrañas en mi cuerpo que no puedo explicar.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "A veces siento que la realidad se fragmenta a mi alrededor.", facet: "perceptual_dysregulation", domain: "psychoticism" },
    { title: "He experimentado momentos en los que no reconocía mi propio reflejo.", facet: "perceptual_dysregulation", domain: "psychoticism" }
  ],
  domains: {
    'Afectividad Negativa': {
      facets: {
        'Labilidad Emocional': { items: [0, 1, 2, 3, 4, 5, 6] },
        'Ansiedad': { items: [7, 8, 9, 10, 11, 12, 13, 14, 15] },
        'Inseguridad de Separación': { items: [16, 17, 18, 19, 20, 21, 22] },
        'Sumisión': { items: [23, 24, 25, 26] },
        'Hostilidad': { items: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36] },
        'Perseveración': { items: [37, 38, 39, 40, 41, 42, 43, 44, 45] },
        'Afectividad Restringida': { items: [46, 47, 48, 49, 50, 51, 52] }
      }
    },
    'Desapego': {
      facets: {
        'Retraimiento': { items: [53, 54, 55, 56, 57, 58, 59, 60, 61, 62] },
        'Anhedonia': { items: [63, 64, 65, 66, 67, 68, 69, 70] },
        'Depresividad': { items: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84] },
        'Evitación de Intimidad': { items: [85, 86, 87, 88, 89, 90] },
        'Suspicacia': { items: [91, 92, 93, 94, 95, 96, 97] }
      }
    },
    'Antagonismo': {
      facets: {
        'Manipulación': { items: [98, 99, 100, 101, 102] },
        'Falsedad': { items: [103, 104, 105, 106, 107, 108, 109, 110, 111, 112] },
        'Grandiosidad': { items: [113, 114, 115, 116, 117, 118] },
        'Búsqueda de Atención': { items: [119, 120, 121, 122, 123, 124, 125, 126] },
        'Insensibilidad': { items: [127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140] }
      }
    },
    'Desinhibición': {
      facets: {
        'Irresponsabilidad': { items: [141, 142, 143, 144, 145, 146, 147] },
        'Impulsividad': { items: [148, 149, 150, 151, 152, 153] },
        'Distractibilidad': { items: [154, 155, 156, 157, 158, 159, 160, 161, 162] },
        'Toma de Riesgos': { items: [163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176] },
        'Perfeccionismo Rígido': { items: [177, 178, 179, 180, 181, 182, 183, 184, 185, 186] }
      }
    },
    'Psicoticismo': {
      facets: {
        'Creencias Inusuales': { items: [187, 188, 189, 190, 191, 192, 193, 194] },
        'Excentricidad': { items: [195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207] },
        'Disregulación Perceptual': { items: [208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219] }
      }
    }
  },
  maxScore: 'domains',
  scoreAnswer(qIdx, val) {
    return val;
  },
  getResult(score, answersArr) {
    const domainResults = [];

    for (const [domainName, domainData] of Object.entries(this.domains)) {
      const facetResults = [];
      let domainSum = 0;
      let domainCount = 0;

      for (const [facetName, facetData] of Object.entries(domainData.facets)) {
        let facetSum = 0;
        let facetCount = 0;

        facetData.items.forEach(idx => {
          if (answersArr && answersArr[idx] !== null && answersArr[idx] !== undefined) {
            facetSum += answersArr[idx];
            facetCount++;
          }
        });

        const facetAvg = facetCount > 0 ? Math.round((facetSum / facetCount) * 100) / 100 : 0;
        const facetElevated = facetAvg >= 2.0;

        facetResults.push({
          name: facetName,
          score: facetAvg,
          elevated: facetElevated
        });

        domainSum += facetSum;
        domainCount += facetCount;
      }

      const domainAvg = domainCount > 0 ? Math.round((domainSum / domainCount) * 100) / 100 : 0;
      const domainElevated = domainAvg >= 2.0;

      domainResults.push({
        name: domainName,
        score: domainAvg,
        elevated: domainElevated,
        facets: facetResults
      });
    }

    // Determine overall severity
    const elevatedDomainCount = domainResults.filter(d => d.elevated).length;
    const elevatedFacetCount = domainResults.reduce((sum, d) => sum + d.facets.filter(f => f.elevated).length, 0);
    const overallAvg = domainResults.reduce((sum, d) => sum + d.score, 0) / domainResults.length;

    let label, key, color, desc;

    if (elevatedDomainCount === 0 && elevatedFacetCount <= 2) {
      label = 'Sin rasgos patológicos significativos';
      key = 'normal';
      color = '#4CAF50';
      desc = 'Tu perfil no muestra elevaciones clínicamente significativas en los dominios de personalidad patológica. Esto indica un funcionamiento de personalidad dentro del rango normal.';
    } else if (elevatedDomainCount <= 1 && elevatedFacetCount <= 5) {
      label = 'Rasgos patológicos leves';
      key = 'mild';
      color = '#FFC107';
      desc = 'Tu perfil muestra algunas elevaciones en facetas específicas de personalidad. Estos rasgos podrían reflejar tendencias de personalidad que vale la pena explorar, aunque no necesariamente indican un trastorno.';
    } else if (elevatedDomainCount <= 3 && elevatedFacetCount <= 12) {
      label = 'Rasgos patológicos moderados';
      key = 'moderate';
      color = '#FF9800';
      desc = 'Tu perfil muestra elevaciones moderadas en varios dominios de personalidad. Estos patrones podrían estar asociados con dificultades en el funcionamiento interpersonal o personal. Se recomienda una evaluación profesional.';
    } else {
      label = 'Rasgos patológicos significativos';
      key = 'severe';
      color = '#F44336';
      desc = 'Tu perfil muestra elevaciones significativas en múltiples dominios de personalidad patológica. Esto sugiere patrones de personalidad que probablemente interfieren con el funcionamiento diario. Se recomienda encarecidamente una evaluación profesional.';
    }

    return {
      label,
      key,
      color,
      desc,
      domains: domainResults
    };
  }
};
