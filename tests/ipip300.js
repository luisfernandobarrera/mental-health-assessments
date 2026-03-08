const TEST_IPIP300 = {
  id: 'ipip300',
  abbr: 'IPIP-300',
  name: 'Personalidad Completa',
  fullName: 'IPIP-NEO-300 — Inventario de Personalidad de 300 ítems',
  desc: 'La evaluación de personalidad más completa disponible. Mide 30 facetas agrupadas en los 5 grandes rasgos con alta precisión.',
  color: '#7B5EA7',
  icon: '🔬',
  items: 300,
  time: '30-45 min',
  instructions: 'Indica qué tan precisa es cada afirmación para describir cómo eres generalmente. No hay respuestas correctas ni incorrectas. Responde con honestidad.',
  sharedOptions: ["Muy inexacto", "Inexacto", "Ni exacto ni inexacto", "Exacto", "Muy exacto"],
  questions: [
    // ===== NEUROTICISMO (N) — ítems 0-59 =====

    // N1: Ansiedad (ítems 0-9)
    { title: "Me preocupo por las cosas.", facet: "N1", reverse: false },
    { title: "Estoy relajado/a la mayor parte del tiempo.", facet: "N1", reverse: true },
    { title: "Temo lo peor en cada situación.", facet: "N1", reverse: false },
    { title: "Rara vez me siento ansioso/a.", facet: "N1", reverse: true },
    { title: "Me pongo nervioso/a fácilmente.", facet: "N1", reverse: false },
    { title: "No me preocupo por cosas que ya pasaron.", facet: "N1", reverse: true },
    { title: "Me inquieto por lo que pueda salir mal.", facet: "N1", reverse: false },
    { title: "Mantengo la calma ante la incertidumbre.", facet: "N1", reverse: true },
    { title: "Siento ansiedad con frecuencia.", facet: "N1", reverse: false },
    { title: "No me asusto con facilidad.", facet: "N1", reverse: true },

    // N2: Ira (ítems 10-19)
    { title: "Me irrito con facilidad.", facet: "N2", reverse: false },
    { title: "Rara vez pierdo los estribos.", facet: "N2", reverse: true },
    { title: "Me enfado cuando las cosas no salen como quiero.", facet: "N2", reverse: false },
    { title: "Soy difícil de provocar.", facet: "N2", reverse: true },
    { title: "Me frustro fácilmente.", facet: "N2", reverse: false },
    { title: "Mantengo la compostura en situaciones difíciles.", facet: "N2", reverse: true },
    { title: "Me molestan muchas cosas.", facet: "N2", reverse: false },
    { title: "No me enojo con facilidad.", facet: "N2", reverse: true },
    { title: "Exploto cuando me provocan.", facet: "N2", reverse: false },
    { title: "Controlo bien mi temperamento.", facet: "N2", reverse: true },

    // N3: Depresión (ítems 20-29)
    { title: "A menudo me siento triste.", facet: "N3", reverse: false },
    { title: "Me siento cómodo/a conmigo mismo/a.", facet: "N3", reverse: true },
    { title: "Me siento desanimado/a con frecuencia.", facet: "N3", reverse: false },
    { title: "Rara vez me siento abatido/a.", facet: "N3", reverse: true },
    { title: "Me siento insatisfecho/a con mi vida.", facet: "N3", reverse: false },
    { title: "Generalmente me siento contento/a.", facet: "N3", reverse: true },
    { title: "Me siento vacío/a por dentro a veces.", facet: "N3", reverse: false },
    { title: "No me dejo llevar por pensamientos negativos.", facet: "N3", reverse: true },
    { title: "Tiendo a ver el lado oscuro de las cosas.", facet: "N3", reverse: false },
    { title: "Disfruto de la vida tal como es.", facet: "N3", reverse: true },

    // N4: Timidez (ítems 30-39)
    { title: "Me avergüenzo fácilmente.", facet: "N4", reverse: false },
    { title: "Me siento cómodo/a en situaciones sociales.", facet: "N4", reverse: true },
    { title: "Me preocupa lo que los demás piensen de mí.", facet: "N4", reverse: false },
    { title: "No me importa ser el centro de atención.", facet: "N4", reverse: true },
    { title: "Me siento incómodo/a cuando me observan.", facet: "N4", reverse: false },
    { title: "Rara vez me siento cohibido/a.", facet: "N4", reverse: true },
    { title: "Me cuesta hablar frente a un grupo.", facet: "N4", reverse: false },
    { title: "No me preocupa hacer el ridículo.", facet: "N4", reverse: true },
    { title: "Me pongo rojo/a con facilidad.", facet: "N4", reverse: false },
    { title: "Me comporto con naturalidad ante desconocidos.", facet: "N4", reverse: true },

    // N5: Inmoderación (ítems 40-49)
    { title: "Me resulta difícil resistir las tentaciones.", facet: "N5", reverse: false },
    { title: "Controlo bien mis impulsos.", facet: "N5", reverse: true },
    { title: "Como o bebo en exceso cuando estoy estresado/a.", facet: "N5", reverse: false },
    { title: "Sé cuándo detenerme.", facet: "N5", reverse: true },
    { title: "Gasto dinero en cosas que no necesito.", facet: "N5", reverse: false },
    { title: "Resisto bien las tentaciones.", facet: "N5", reverse: true },
    { title: "Me dejo llevar por mis antojos.", facet: "N5", reverse: false },
    { title: "Mantengo mis hábitos bajo control.", facet: "N5", reverse: true },
    { title: "Hago cosas de las que luego me arrepiento.", facet: "N5", reverse: false },
    { title: "No caigo fácilmente en excesos.", facet: "N5", reverse: true },

    // N6: Vulnerabilidad (ítems 50-59)
    { title: "Me desmorono bajo presión.", facet: "N6", reverse: false },
    { title: "Manejo bien las situaciones estresantes.", facet: "N6", reverse: true },
    { title: "Me siento abrumado/a por las dificultades.", facet: "N6", reverse: false },
    { title: "No me dejo vencer por los problemas.", facet: "N6", reverse: true },
    { title: "Me paralizo cuando tengo mucha presión.", facet: "N6", reverse: false },
    { title: "Funciono bien incluso bajo estrés.", facet: "N6", reverse: true },
    { title: "Me cuesta recuperarme de los contratiempos.", facet: "N6", reverse: false },
    { title: "Soy resiliente ante las adversidades.", facet: "N6", reverse: true },
    { title: "Pierdo el control cuando estoy bajo mucha presión.", facet: "N6", reverse: false },
    { title: "Afronto los problemas con serenidad.", facet: "N6", reverse: true },

    // ===== EXTRAVERSIÓN (E) — ítems 60-119 =====

    // E1: Amigabilidad (ítems 60-69)
    { title: "Hago amigos fácilmente.", facet: "E1", reverse: false },
    { title: "Me cuesta acercarme a los demás.", facet: "E1", reverse: true },
    { title: "Me siento a gusto con la gente.", facet: "E1", reverse: false },
    { title: "Soy distante con los desconocidos.", facet: "E1", reverse: true },
    { title: "Conecto rápidamente con las personas.", facet: "E1", reverse: false },
    { title: "Me mantengo a distancia de los demás.", facet: "E1", reverse: true },
    { title: "Trato a todos con calidez.", facet: "E1", reverse: false },
    { title: "Me resulta difícil confiar en personas nuevas.", facet: "E1", reverse: true },
    { title: "Hago que la gente se sienta bienvenida.", facet: "E1", reverse: false },
    { title: "No soy una persona muy cálida.", facet: "E1", reverse: true },

    // E2: Gregarismo (ítems 70-79)
    { title: "Disfruto estar rodeado/a de gente.", facet: "E2", reverse: false },
    { title: "Prefiero estar solo/a.", facet: "E2", reverse: true },
    { title: "Me gusta ir a fiestas y reuniones.", facet: "E2", reverse: false },
    { title: "Evito las multitudes.", facet: "E2", reverse: true },
    { title: "Busco la compañía de los demás.", facet: "E2", reverse: false },
    { title: "Me gusta la soledad.", facet: "E2", reverse: true },
    { title: "Me siento bien en grupos grandes.", facet: "E2", reverse: false },
    { title: "Prefiero las actividades solitarias.", facet: "E2", reverse: true },
    { title: "Me encanta socializar.", facet: "E2", reverse: false },
    { title: "Me agotan las reuniones sociales.", facet: "E2", reverse: true },

    // E3: Asertividad (ítems 80-89)
    { title: "Tomo el mando en las situaciones.", facet: "E3", reverse: false },
    { title: "Me mantengo en segundo plano.", facet: "E3", reverse: true },
    { title: "Digo lo que pienso sin dudar.", facet: "E3", reverse: false },
    { title: "Me cuesta expresar mis opiniones.", facet: "E3", reverse: true },
    { title: "Asumo el papel de líder con naturalidad.", facet: "E3", reverse: false },
    { title: "Dejo que otros tomen las decisiones.", facet: "E3", reverse: true },
    { title: "Defiendo mis ideas con firmeza.", facet: "E3", reverse: false },
    { title: "Me cuesta decir que no.", facet: "E3", reverse: true },
    { title: "Tomo la iniciativa en las conversaciones.", facet: "E3", reverse: false },
    { title: "Evito imponer mi punto de vista.", facet: "E3", reverse: true },

    // E4: Nivel de actividad (ítems 90-99)
    { title: "Siempre estoy ocupado/a.", facet: "E4", reverse: false },
    { title: "Me tomo las cosas con calma.", facet: "E4", reverse: true },
    { title: "Tengo un ritmo de vida acelerado.", facet: "E4", reverse: false },
    { title: "Me gusta tomarme mi tiempo.", facet: "E4", reverse: true },
    { title: "Hago muchas cosas durante el día.", facet: "E4", reverse: false },
    { title: "Prefiero un ritmo de vida tranquilo.", facet: "E4", reverse: true },
    { title: "Me muevo rápidamente de una actividad a otra.", facet: "E4", reverse: false },
    { title: "No me gusta apresurarme.", facet: "E4", reverse: true },
    { title: "Soy una persona muy activa.", facet: "E4", reverse: false },
    { title: "Me gusta relajarme sin hacer nada.", facet: "E4", reverse: true },

    // E5: Búsqueda de emociones (ítems 100-109)
    { title: "Busco la aventura y las emociones fuertes.", facet: "E5", reverse: false },
    { title: "Prefiero lo predecible y seguro.", facet: "E5", reverse: true },
    { title: "Me encantan las experiencias emocionantes.", facet: "E5", reverse: false },
    { title: "Evito las situaciones de riesgo.", facet: "E5", reverse: true },
    { title: "Me gusta probar cosas nuevas y arriesgadas.", facet: "E5", reverse: false },
    { title: "Prefiero la rutina a las sorpresas.", facet: "E5", reverse: true },
    { title: "Disfruto de la velocidad y la adrenalina.", facet: "E5", reverse: false },
    { title: "No me gustan las actividades peligrosas.", facet: "E5", reverse: true },
    { title: "Me aburro si no hay emoción.", facet: "E5", reverse: false },
    { title: "Me conformo con una vida tranquila.", facet: "E5", reverse: true },

    // E6: Alegría (ítems 110-119)
    { title: "Soy una persona alegre.", facet: "E6", reverse: false },
    { title: "Rara vez estoy de buen humor.", facet: "E6", reverse: true },
    { title: "Irradio optimismo.", facet: "E6", reverse: false },
    { title: "No soy una persona especialmente alegre.", facet: "E6", reverse: true },
    { title: "Río con facilidad.", facet: "E6", reverse: false },
    { title: "Me cuesta sentir entusiasmo.", facet: "E6", reverse: true },
    { title: "Veo el lado positivo de las cosas.", facet: "E6", reverse: false },
    { title: "No me emociono con facilidad.", facet: "E6", reverse: true },
    { title: "Contagio mi alegría a los demás.", facet: "E6", reverse: false },
    { title: "Soy más serio/a que la mayoría.", facet: "E6", reverse: true },

    // ===== APERTURA A LA EXPERIENCIA (O) — ítems 120-179 =====

    // O1: Imaginación (ítems 120-129)
    { title: "Tengo una imaginación muy activa.", facet: "O1", reverse: false },
    { title: "Rara vez fantaseo.", facet: "O1", reverse: true },
    { title: "Me gusta soñar despierto/a.", facet: "O1", reverse: false },
    { title: "Soy muy práctico/a, no me pierdo en fantasías.", facet: "O1", reverse: true },
    { title: "Creo mundos imaginarios en mi mente.", facet: "O1", reverse: false },
    { title: "No pierdo el tiempo con la imaginación.", facet: "O1", reverse: true },
    { title: "Me fascina el mundo de las ideas.", facet: "O1", reverse: false },
    { title: "Prefiero los hechos a las fantasías.", facet: "O1", reverse: true },
    { title: "Mi mente está llena de ideas creativas.", facet: "O1", reverse: false },
    { title: "No tengo mucha imaginación.", facet: "O1", reverse: true },

    // O2: Intereses artísticos (ítems 130-139)
    { title: "Aprecio el arte y la belleza.", facet: "O2", reverse: false },
    { title: "No me interesan las manifestaciones artísticas.", facet: "O2", reverse: true },
    { title: "Me conmueve la música.", facet: "O2", reverse: false },
    { title: "No le veo el sentido al arte abstracto.", facet: "O2", reverse: true },
    { title: "Disfruto visitando museos y galerías.", facet: "O2", reverse: false },
    { title: "El arte me parece aburrido.", facet: "O2", reverse: true },
    { title: "Me gusta contemplar la naturaleza.", facet: "O2", reverse: false },
    { title: "No me fijo en los detalles estéticos.", facet: "O2", reverse: true },
    { title: "Valoro la expresión artística en todas sus formas.", facet: "O2", reverse: false },
    { title: "Prefiero lo funcional sobre lo bello.", facet: "O2", reverse: true },

    // O3: Emotividad (ítems 140-149)
    { title: "Siento las emociones con mucha intensidad.", facet: "O3", reverse: false },
    { title: "Rara vez me conmuevo profundamente.", facet: "O3", reverse: true },
    { title: "Me afectan mucho las películas y los libros.", facet: "O3", reverse: false },
    { title: "No soy una persona especialmente emotiva.", facet: "O3", reverse: true },
    { title: "Puedo llorar con una canción hermosa.", facet: "O3", reverse: false },
    { title: "No me dejo llevar por las emociones.", facet: "O3", reverse: true },
    { title: "Siento empatía profunda por los demás.", facet: "O3", reverse: false },
    { title: "Controlo mis sentimientos con la razón.", facet: "O3", reverse: true },
    { title: "Mis emociones son muy variadas e intensas.", facet: "O3", reverse: false },
    { title: "Soy una persona emocionalmente reservada.", facet: "O3", reverse: true },

    // O4: Espíritu aventurero (ítems 150-159)
    { title: "Me gusta explorar lugares nuevos.", facet: "O4", reverse: false },
    { title: "Prefiero lo familiar a lo desconocido.", facet: "O4", reverse: true },
    { title: "Disfruto probando comidas de otras culturas.", facet: "O4", reverse: false },
    { title: "Me siento cómodo/a con mis rutinas.", facet: "O4", reverse: true },
    { title: "Me atraen los viajes a lugares exóticos.", facet: "O4", reverse: false },
    { title: "No me gusta salir de mi zona de confort.", facet: "O4", reverse: true },
    { title: "Busco nuevas experiencias constantemente.", facet: "O4", reverse: false },
    { title: "Prefiero hacer las cosas de la manera habitual.", facet: "O4", reverse: true },
    { title: "Me adapto bien a situaciones nuevas.", facet: "O4", reverse: false },
    { title: "Los cambios me generan incomodidad.", facet: "O4", reverse: true },

    // O5: Intelecto (ítems 160-169)
    { title: "Disfruto resolviendo problemas complejos.", facet: "O5", reverse: false },
    { title: "Evito las discusiones filosóficas.", facet: "O5", reverse: true },
    { title: "Me gusta reflexionar sobre ideas abstractas.", facet: "O5", reverse: false },
    { title: "No me interesan los debates intelectuales.", facet: "O5", reverse: true },
    { title: "Leo mucho sobre temas variados.", facet: "O5", reverse: false },
    { title: "Prefiero las actividades prácticas a las teóricas.", facet: "O5", reverse: true },
    { title: "Me fascina aprender cosas nuevas.", facet: "O5", reverse: false },
    { title: "No me interesa la filosofía.", facet: "O5", reverse: true },
    { title: "Tengo curiosidad por entender cómo funciona todo.", facet: "O5", reverse: false },
    { title: "No me gustan los acertijos ni los rompecabezas.", facet: "O5", reverse: true },

    // O6: Liberalismo (ítems 170-179)
    { title: "Creo que las leyes deberían adaptarse a los tiempos.", facet: "O6", reverse: false },
    { title: "Respeto las tradiciones establecidas.", facet: "O6", reverse: true },
    { title: "Estoy abierto/a a replanteamientos sociales.", facet: "O6", reverse: false },
    { title: "Creo que la sociedad funciona mejor con reglas estrictas.", facet: "O6", reverse: true },
    { title: "Cuestiono las normas establecidas.", facet: "O6", reverse: false },
    { title: "Prefiero seguir las convenciones sociales.", facet: "O6", reverse: true },
    { title: "Apoyo los cambios sociales progresistas.", facet: "O6", reverse: false },
    { title: "Me parece importante conservar las costumbres.", facet: "O6", reverse: true },
    { title: "Creo que hay que desafiar lo establecido.", facet: "O6", reverse: false },
    { title: "Las tradiciones dan estabilidad a la sociedad.", facet: "O6", reverse: true },

    // ===== AMABILIDAD (A) — ítems 180-239 =====

    // A1: Confianza (ítems 180-189)
    { title: "Confío en los demás.", facet: "A1", reverse: false },
    { title: "Desconfío de las intenciones de la gente.", facet: "A1", reverse: true },
    { title: "Creo que la mayoría de la gente es honesta.", facet: "A1", reverse: false },
    { title: "Sospecho de los motivos ocultos de los demás.", facet: "A1", reverse: true },
    { title: "Doy a las personas el beneficio de la duda.", facet: "A1", reverse: false },
    { title: "Creo que la gente busca aprovecharse de mí.", facet: "A1", reverse: true },
    { title: "Creo en la bondad de las personas.", facet: "A1", reverse: false },
    { title: "Me cuesta confiar en alguien.", facet: "A1", reverse: true },
    { title: "Asumo que las personas tienen buenas intenciones.", facet: "A1", reverse: false },
    { title: "Soy escéptico/a ante la amabilidad de los desconocidos.", facet: "A1", reverse: true },

    // A2: Moralidad (ítems 190-199)
    { title: "Soy honesto/a en todo momento.", facet: "A2", reverse: false },
    { title: "A veces manipulo a los demás para conseguir lo que quiero.", facet: "A2", reverse: true },
    { title: "No mentiría para obtener un beneficio.", facet: "A2", reverse: false },
    { title: "Uso trucos para que la gente haga lo que yo quiero.", facet: "A2", reverse: true },
    { title: "Trato a los demás con justicia.", facet: "A2", reverse: false },
    { title: "A veces finjo ser lo que no soy.", facet: "A2", reverse: true },
    { title: "Digo la verdad aunque sea incómoda.", facet: "A2", reverse: false },
    { title: "No siempre soy completamente sincero/a.", facet: "A2", reverse: true },
    { title: "Actúo de acuerdo con mis principios.", facet: "A2", reverse: false },
    { title: "Recurro a la adulación cuando me conviene.", facet: "A2", reverse: true },

    // A3: Altruismo (ítems 200-209)
    { title: "Me gusta ayudar a los demás.", facet: "A3", reverse: false },
    { title: "No me involucro en los problemas ajenos.", facet: "A3", reverse: true },
    { title: "Siento satisfacción cuando hago algo por alguien.", facet: "A3", reverse: false },
    { title: "Miro primero por mis propios intereses.", facet: "A3", reverse: true },
    { title: "Me preocupo por el bienestar de los demás.", facet: "A3", reverse: false },
    { title: "No me gusta que me pidan favores.", facet: "A3", reverse: true },
    { title: "Ayudo a quien lo necesita sin esperar nada a cambio.", facet: "A3", reverse: false },
    { title: "No me siento obligado/a a ayudar a los demás.", facet: "A3", reverse: true },
    { title: "Doy mi tiempo generosamente.", facet: "A3", reverse: false },
    { title: "Prefiero no meterme en asuntos ajenos.", facet: "A3", reverse: true },

    // A4: Cooperación (ítems 210-219)
    { title: "Evito los conflictos.", facet: "A4", reverse: false },
    { title: "No me importa discutir con la gente.", facet: "A4", reverse: true },
    { title: "Busco el acuerdo en las discusiones.", facet: "A4", reverse: false },
    { title: "Disfruto de un buen debate aunque sea tenso.", facet: "A4", reverse: true },
    { title: "Cedo para mantener la paz.", facet: "A4", reverse: false },
    { title: "Insisto en mi punto de vista aunque genere conflicto.", facet: "A4", reverse: true },
    { title: "Prefiero la armonía sobre tener la razón.", facet: "A4", reverse: false },
    { title: "No me molesta contradecir a los demás.", facet: "A4", reverse: true },
    { title: "Trato de encontrar soluciones que satisfagan a todos.", facet: "A4", reverse: false },
    { title: "Puedo ser bastante terco/a en las discusiones.", facet: "A4", reverse: true },

    // A5: Modestia (ítems 220-229)
    { title: "No me gusta presumir.", facet: "A5", reverse: false },
    { title: "Creo que soy mejor que la mayoría.", facet: "A5", reverse: true },
    { title: "Soy una persona humilde.", facet: "A5", reverse: false },
    { title: "Me gusta ser el centro de atención.", facet: "A5", reverse: true },
    { title: "No me considero especial.", facet: "A5", reverse: false },
    { title: "Creo que merezco más reconocimiento del que recibo.", facet: "A5", reverse: true },
    { title: "Resto importancia a mis logros.", facet: "A5", reverse: false },
    { title: "Me gusta hablar de mis éxitos.", facet: "A5", reverse: true },
    { title: "No busco que me admiren.", facet: "A5", reverse: false },
    { title: "Sé que valgo más que la mayoría de la gente.", facet: "A5", reverse: true },

    // A6: Simpatía (ítems 230-239)
    { title: "Me conmueven las personas que sufren.", facet: "A6", reverse: false },
    { title: "No me afectan mucho los problemas de los demás.", facet: "A6", reverse: true },
    { title: "Siento compasión por los menos afortunados.", facet: "A6", reverse: false },
    { title: "Creo que cada quien debe resolver sus propios problemas.", facet: "A6", reverse: true },
    { title: "Me preocupo por los que están en desventaja.", facet: "A6", reverse: false },
    { title: "No me conmueven fácilmente las historias tristes.", facet: "A6", reverse: true },
    { title: "Creo que la sociedad debe proteger a los vulnerables.", facet: "A6", reverse: false },
    { title: "La gente exagera sus problemas.", facet: "A6", reverse: true },
    { title: "Me duele ver sufrir a los animales.", facet: "A6", reverse: false },
    { title: "No soy muy sentimental con las causas sociales.", facet: "A6", reverse: true },

    // ===== RESPONSABILIDAD (C) — ítems 240-299 =====

    // C1: Autoeficacia (ítems 240-249)
    { title: "Sé que puedo manejar cualquier situación.", facet: "C1", reverse: false },
    { title: "Dudo de mis capacidades.", facet: "C1", reverse: true },
    { title: "Completo las tareas con éxito.", facet: "C1", reverse: false },
    { title: "No me siento preparado/a para los retos.", facet: "C1", reverse: true },
    { title: "Confío en mi capacidad para resolver problemas.", facet: "C1", reverse: false },
    { title: "Me siento inseguro/a ante tareas difíciles.", facet: "C1", reverse: true },
    { title: "Sé cómo hacer bien las cosas.", facet: "C1", reverse: false },
    { title: "Me siento incompetente a veces.", facet: "C1", reverse: true },
    { title: "Manejo las dificultades con destreza.", facet: "C1", reverse: false },
    { title: "Temo no estar a la altura de las expectativas.", facet: "C1", reverse: true },

    // C2: Orden (ítems 250-259)
    { title: "Mantengo mis cosas ordenadas.", facet: "C2", reverse: false },
    { title: "Dejo todo desordenado.", facet: "C2", reverse: true },
    { title: "Me gusta que todo esté en su lugar.", facet: "C2", reverse: false },
    { title: "No me importa el desorden.", facet: "C2", reverse: true },
    { title: "Sigo una rutina organizada.", facet: "C2", reverse: false },
    { title: "Soy bastante desorganizado/a.", facet: "C2", reverse: true },
    { title: "Limpio y ordeno con frecuencia.", facet: "C2", reverse: false },
    { title: "No me preocupo por tener las cosas en orden.", facet: "C2", reverse: true },
    { title: "Me molesta el caos a mi alrededor.", facet: "C2", reverse: false },
    { title: "Mi espacio de trabajo suele estar desordenado.", facet: "C2", reverse: true },

    // C3: Sentido del deber (ítems 260-269)
    { title: "Cumplo con mis obligaciones.", facet: "C3", reverse: false },
    { title: "A veces no sigo las reglas.", facet: "C3", reverse: true },
    { title: "Cumplo mis promesas.", facet: "C3", reverse: false },
    { title: "No siempre hago lo que se espera de mí.", facet: "C3", reverse: true },
    { title: "Me tomo en serio mis responsabilidades.", facet: "C3", reverse: false },
    { title: "A veces falto a mis compromisos.", facet: "C3", reverse: true },
    { title: "Hago lo que digo que voy a hacer.", facet: "C3", reverse: false },
    { title: "No me preocupan mucho las reglas.", facet: "C3", reverse: true },
    { title: "Soy una persona de palabra.", facet: "C3", reverse: false },
    { title: "A veces dejo de lado mis deberes.", facet: "C3", reverse: true },

    // C4: Orientación al logro (ítems 270-279)
    { title: "Trabajo duro para alcanzar mis metas.", facet: "C4", reverse: false },
    { title: "Me conformo con lo mínimo.", facet: "C4", reverse: true },
    { title: "Me esfuerzo por la excelencia.", facet: "C4", reverse: false },
    { title: "No me importa mucho el éxito.", facet: "C4", reverse: true },
    { title: "Busco superarme constantemente.", facet: "C4", reverse: false },
    { title: "No soy muy ambicioso/a.", facet: "C4", reverse: true },
    { title: "Tengo metas claras y trabajo para lograrlas.", facet: "C4", reverse: false },
    { title: "Hago solo lo necesario para salir del paso.", facet: "C4", reverse: true },
    { title: "Me motiva alcanzar grandes logros.", facet: "C4", reverse: false },
    { title: "No me esfuerzo más de lo necesario.", facet: "C4", reverse: true },

    // C5: Autodisciplina (ítems 280-289)
    { title: "Termino lo que empiezo.", facet: "C5", reverse: false },
    { title: "Me cuesta mantener la concentración.", facet: "C5", reverse: true },
    { title: "Persevero hasta completar la tarea.", facet: "C5", reverse: false },
    { title: "Postergo las cosas con frecuencia.", facet: "C5", reverse: true },
    { title: "Me pongo a trabajar de inmediato.", facet: "C5", reverse: false },
    { title: "Me distraigo con facilidad.", facet: "C5", reverse: true },
    { title: "No dejo las tareas a medias.", facet: "C5", reverse: false },
    { title: "Pierdo el tiempo en cosas sin importancia.", facet: "C5", reverse: true },
    { title: "Mantengo el enfoque en mis objetivos.", facet: "C5", reverse: false },
    { title: "Me cuesta empezar las tareas difíciles.", facet: "C5", reverse: true },

    // C6: Cautela (ítems 290-299)
    { title: "Pienso antes de actuar.", facet: "C6", reverse: false },
    { title: "Actúo sin pensar en las consecuencias.", facet: "C6", reverse: true },
    { title: "Considero todas las opciones antes de decidir.", facet: "C6", reverse: false },
    { title: "Tomo decisiones impulsivamente.", facet: "C6", reverse: true },
    { title: "Evalúo los riesgos cuidadosamente.", facet: "C6", reverse: false },
    { title: "Me lanzo a las cosas sin planificar.", facet: "C6", reverse: true },
    { title: "Planifico antes de actuar.", facet: "C6", reverse: false },
    { title: "Hago las cosas sin pensarlo mucho.", facet: "C6", reverse: true },
    { title: "Reflexiono sobre las posibles consecuencias.", facet: "C6", reverse: false },
    { title: "Digo cosas sin medir las consecuencias.", facet: "C6", reverse: true }
  ],
  dimensions: {
    'Neuroticismo': {
      facets: {
        'N1-Ansiedad': { items: [0,1,2,3,4,5,6,7,8,9], reverse: [1,3,5,7,9] },
        'N2-Ira': { items: [10,11,12,13,14,15,16,17,18,19], reverse: [11,13,15,17,19] },
        'N3-Depresión': { items: [20,21,22,23,24,25,26,27,28,29], reverse: [21,23,25,27,29] },
        'N4-Timidez': { items: [30,31,32,33,34,35,36,37,38,39], reverse: [31,33,35,37,39] },
        'N5-Inmoderación': { items: [40,41,42,43,44,45,46,47,48,49], reverse: [41,43,45,47,49] },
        'N6-Vulnerabilidad': { items: [50,51,52,53,54,55,56,57,58,59], reverse: [51,53,55,57,59] }
      }
    },
    'Extraversión': {
      facets: {
        'E1-Amigabilidad': { items: [60,61,62,63,64,65,66,67,68,69], reverse: [61,63,65,67,69] },
        'E2-Gregarismo': { items: [70,71,72,73,74,75,76,77,78,79], reverse: [71,73,75,77,79] },
        'E3-Asertividad': { items: [80,81,82,83,84,85,86,87,88,89], reverse: [81,83,85,87,89] },
        'E4-Nivel de actividad': { items: [90,91,92,93,94,95,96,97,98,99], reverse: [91,93,95,97,99] },
        'E5-Búsqueda de emociones': { items: [100,101,102,103,104,105,106,107,108,109], reverse: [101,103,105,107,109] },
        'E6-Alegría': { items: [110,111,112,113,114,115,116,117,118,119], reverse: [111,113,115,117,119] }
      }
    },
    'Apertura': {
      facets: {
        'O1-Imaginación': { items: [120,121,122,123,124,125,126,127,128,129], reverse: [121,123,125,127,129] },
        'O2-Intereses artísticos': { items: [130,131,132,133,134,135,136,137,138,139], reverse: [131,133,135,137,139] },
        'O3-Emotividad': { items: [140,141,142,143,144,145,146,147,148,149], reverse: [141,143,145,147,149] },
        'O4-Espíritu aventurero': { items: [150,151,152,153,154,155,156,157,158,159], reverse: [151,153,155,157,159] },
        'O5-Intelecto': { items: [160,161,162,163,164,165,166,167,168,169], reverse: [161,163,165,167,169] },
        'O6-Liberalismo': { items: [170,171,172,173,174,175,176,177,178,179], reverse: [171,173,175,177,179] }
      }
    },
    'Amabilidad': {
      facets: {
        'A1-Confianza': { items: [180,181,182,183,184,185,186,187,188,189], reverse: [181,183,185,187,189] },
        'A2-Moralidad': { items: [190,191,192,193,194,195,196,197,198,199], reverse: [191,193,195,197,199] },
        'A3-Altruismo': { items: [200,201,202,203,204,205,206,207,208,209], reverse: [201,203,205,207,209] },
        'A4-Cooperación': { items: [210,211,212,213,214,215,216,217,218,219], reverse: [211,213,215,217,219] },
        'A5-Modestia': { items: [220,221,222,223,224,225,226,227,228,229], reverse: [221,223,225,227,229] },
        'A6-Simpatía': { items: [230,231,232,233,234,235,236,237,238,239], reverse: [231,233,235,237,239] }
      }
    },
    'Responsabilidad': {
      facets: {
        'C1-Autoeficacia': { items: [240,241,242,243,244,245,246,247,248,249], reverse: [241,243,245,247,249] },
        'C2-Orden': { items: [250,251,252,253,254,255,256,257,258,259], reverse: [251,253,255,257,259] },
        'C3-Sentido del deber': { items: [260,261,262,263,264,265,266,267,268,269], reverse: [261,263,265,267,269] },
        'C4-Orientación al logro': { items: [270,271,272,273,274,275,276,277,278,279], reverse: [271,273,275,277,279] },
        'C5-Autodisciplina': { items: [280,281,282,283,284,285,286,287,288,289], reverse: [281,283,285,287,289] },
        'C6-Cautela': { items: [290,291,292,293,294,295,296,297,298,299], reverse: [291,293,295,297,299] }
      }
    }
  },
  maxScore: 'dimensions',
  scoreAnswer(qIdx, val) {
    const q = this.questions[qIdx];
    if (q && q.reverse) {
      return 4 - val; // reverse: 0->4, 1->3, 2->2, 3->1, 4->0
    }
    return val;
  },
  getResult(score, answersArr) {
    const facetDescriptions = {
      'N1-Ansiedad': {
        high: 'Tiendes a experimentar preocupación y nerviosismo con frecuencia.',
        mid: 'Experimentas niveles moderados de preocupación.',
        low: 'Eres una persona tranquila que rara vez se preocupa.'
      },
      'N2-Ira': {
        high: 'Te irritas y frustras con facilidad ante las dificultades.',
        mid: 'Manejas la frustración de forma moderada.',
        low: 'Eres difícil de provocar y manejas bien la frustración.'
      },
      'N3-Depresión': {
        high: 'Tiendes a experimentar tristeza y desánimo con frecuencia.',
        mid: 'Experimentas altibajos emocionales de forma moderada.',
        low: 'Generalmente te sientes satisfecho/a y positivo/a.'
      },
      'N4-Timidez': {
        high: 'Te sientes incómodo/a y cohibido/a en situaciones sociales.',
        mid: 'Experimentas cierta incomodidad social en algunas situaciones.',
        low: 'Te sientes cómodo/a y seguro/a en situaciones sociales.'
      },
      'N5-Inmoderación': {
        high: 'Te cuesta resistir tentaciones y controlar tus impulsos.',
        mid: 'Tienes un control moderado sobre tus impulsos.',
        low: 'Controlas bien tus impulsos y resistes las tentaciones.'
      },
      'N6-Vulnerabilidad': {
        high: 'Te sientes abrumado/a bajo presión y te cuesta recuperarte.',
        mid: 'Manejas la presión de forma moderada.',
        low: 'Eres resiliente y manejas bien la presión y el estrés.'
      },
      'E1-Amigabilidad': {
        high: 'Eres una persona cálida que conecta fácilmente con los demás.',
        mid: 'Eres selectivo/a pero amable en tus relaciones sociales.',
        low: 'Tiendes a ser reservado/a y distante con los demás.'
      },
      'E2-Gregarismo': {
        high: 'Disfrutas mucho de la compañía y las reuniones sociales.',
        mid: 'Disfrutas de la compañía pero también valoras tu espacio.',
        low: 'Prefieres la soledad o los grupos muy pequeños.'
      },
      'E3-Asertividad': {
        high: 'Tomas el mando y expresas tus opiniones con confianza.',
        mid: 'Te expresas con moderación según la situación.',
        low: 'Prefieres seguir a otros y te cuesta expresar tus opiniones.'
      },
      'E4-Nivel de actividad': {
        high: 'Llevas un ritmo de vida muy activo y acelerado.',
        mid: 'Mantienes un ritmo de actividad equilibrado.',
        low: 'Prefieres un ritmo de vida tranquilo y pausado.'
      },
      'E5-Búsqueda de emociones': {
        high: 'Buscas constantemente aventura, riesgo y emociones fuertes.',
        mid: 'Disfrutas de algo de emoción pero sin excesos.',
        low: 'Prefieres la seguridad, lo predecible y lo tranquilo.'
      },
      'E6-Alegría': {
        high: 'Eres una persona muy alegre, optimista y entusiasta.',
        mid: 'Mantienes un estado de ánimo generalmente positivo.',
        low: 'Tiendes a ser serio/a y menos expresivo/a emocionalmente.'
      },
      'O1-Imaginación': {
        high: 'Tienes una imaginación muy rica y activa.',
        mid: 'Combinas creatividad con sentido práctico.',
        low: 'Eres práctico/a y prefieres los hechos a las fantasías.'
      },
      'O2-Intereses artísticos': {
        high: 'Aprecias profundamente el arte, la belleza y la estética.',
        mid: 'Tienes cierto interés por las manifestaciones artísticas.',
        low: 'No te interesan especialmente el arte ni la estética.'
      },
      'O3-Emotividad': {
        high: 'Sientes las emociones con gran intensidad y profundidad.',
        mid: 'Experimentas las emociones con intensidad moderada.',
        low: 'Tiendes a controlar tus emociones con la razón.'
      },
      'O4-Espíritu aventurero': {
        high: 'Te encanta explorar lo desconocido y vivir nuevas experiencias.',
        mid: 'Disfrutas de algunas experiencias nuevas pero valoras lo familiar.',
        low: 'Prefieres lo conocido y te sientes cómodo/a con tus rutinas.'
      },
      'O5-Intelecto': {
        high: 'Disfrutas enormemente de las ideas abstractas y los desafíos intelectuales.',
        mid: 'Tienes cierta curiosidad intelectual pero también valoras lo práctico.',
        low: 'Prefieres lo concreto y práctico sobre lo abstracto y teórico.'
      },
      'O6-Liberalismo': {
        high: 'Cuestionas las normas y estás abierto/a a nuevas formas de pensar.',
        mid: 'Equilibras el respeto por las tradiciones con apertura al cambio.',
        low: 'Valoras las tradiciones y las normas establecidas.'
      },
      'A1-Confianza': {
        high: 'Confías en las buenas intenciones de los demás.',
        mid: 'Eres moderadamente confiado/a según la situación.',
        low: 'Tiendes a desconfiar de las intenciones de los demás.'
      },
      'A2-Moralidad': {
        high: 'Eres muy honesto/a y transparente en tus relaciones.',
        mid: 'Eres generalmente honesto/a aunque con cierta flexibilidad.',
        low: 'Puedes ser estratégico/a en tus interacciones sociales.'
      },
      'A3-Altruismo': {
        high: 'Disfrutas ayudando a los demás de forma desinteresada.',
        mid: 'Ayudas a los demás cuando puedes pero también cuidas de ti.',
        low: 'Priorizas tus propios intereses sobre los de los demás.'
      },
      'A4-Cooperación': {
        high: 'Evitas los conflictos y buscas la armonía en tus relaciones.',
        mid: 'Buscas el equilibrio entre cooperar y defender tu posición.',
        low: 'No te importa el conflicto y defiendes tus posturas con firmeza.'
      },
      'A5-Modestia': {
        high: 'Eres humilde y no te gusta llamar la atención.',
        mid: 'Reconoces tus logros sin exagerarlos.',
        low: 'Tienes alta confianza en ti y no dudas en destacar tus méritos.'
      },
      'A6-Simpatía': {
        high: 'Te conmueve profundamente el sufrimiento de los demás.',
        mid: 'Sientes cierta compasión pero mantienes cierta distancia.',
        low: 'Eres más racional que emocional ante el sufrimiento ajeno.'
      },
      'C1-Autoeficacia': {
        high: 'Confías mucho en tu capacidad para manejar cualquier reto.',
        mid: 'Confías en ti en algunas áreas pero dudas en otras.',
        low: 'Tiendes a dudar de tus capacidades y a sentirte inseguro/a.'
      },
      'C2-Orden': {
        high: 'Eres muy organizado/a y te gusta que todo esté en su lugar.',
        mid: 'Mantienes cierto orden pero eres flexible con el desorden.',
        low: 'No te preocupa el desorden y eres bastante desorganizado/a.'
      },
      'C3-Sentido del deber': {
        high: 'Cumples rigurosamente con tus obligaciones y promesas.',
        mid: 'Generalmente cumples con tus deberes pero con cierta flexibilidad.',
        low: 'A veces dejas de lado tus obligaciones y compromisos.'
      },
      'C4-Orientación al logro': {
        high: 'Eres muy ambicioso/a y trabajas duro por alcanzar tus metas.',
        mid: 'Te esfuerzas pero sin obsesionarte con el éxito.',
        low: 'No te motiva especialmente alcanzar grandes logros.'
      },
      'C5-Autodisciplina': {
        high: 'Eres muy disciplinado/a y terminas todo lo que empiezas.',
        mid: 'Tienes disciplina moderada pero a veces procrastinas.',
        low: 'Te cuesta mantener el enfoque y tiendes a postergar las cosas.'
      },
      'C6-Cautela': {
        high: 'Piensas cuidadosamente antes de actuar o tomar decisiones.',
        mid: 'Generalmente reflexionas antes de actuar pero puedes ser espontáneo/a.',
        low: 'Tiendes a actuar impulsivamente sin pensar en las consecuencias.'
      }
    };

    const dimensionDescriptions = {
      'Neuroticismo': {
        high: 'Tiendes a experimentar emociones negativas con frecuencia e intensidad. Eres sensible al estrés y a las dificultades.',
        mid: 'Experimentas altibajos emocionales de manera moderada, con cierta capacidad de regulación emocional.',
        low: 'Eres emocionalmente estable y tiendes a manejar bien el estrés y las situaciones difíciles.'
      },
      'Extraversión': {
        high: 'Eres sociable, enérgico/a y buscas la estimulación en compañía de otros. Disfrutas ser el centro de atención.',
        mid: 'Muestras un equilibrio entre la sociabilidad y la preferencia por momentos de soledad.',
        low: 'Tiendes a ser reservado/a y a preferir actividades en solitario o en grupos pequeños.'
      },
      'Apertura': {
        high: 'Eres curioso/a, creativo/a y abierto/a a nuevas experiencias e ideas. Valoras la imaginación y el arte.',
        mid: 'Combinas la curiosidad intelectual con un aprecio por lo familiar y lo práctico.',
        low: 'Prefieres lo convencional y práctico, valorando la estabilidad y lo conocido.'
      },
      'Amabilidad': {
        high: 'Eres cooperativo/a, compasivo/a y valoras llevarse bien con los demás. Confías en la gente.',
        mid: 'Combinas la cooperación con la capacidad de defender tus propios intereses cuando es necesario.',
        low: 'Tiendes a ser más competitivo/a y escéptico/a ante las intenciones de los demás.'
      },
      'Responsabilidad': {
        high: 'Eres organizado/a, disciplinado/a y orientado/a a lograr tus metas. Cumples con tus obligaciones.',
        mid: 'Mantienes un equilibrio entre la disciplina y la flexibilidad en tus hábitos.',
        low: 'Tiendes a ser más espontáneo/a y flexible, prefiriendo la improvisación sobre la planificación.'
      }
    };

    const dimensionResults = [];

    for (const [dimName, dimData] of Object.entries(this.dimensions)) {
      let dimSum = 0;
      let dimCount = 0;
      const facetResults = [];

      for (const [facetName, facetData] of Object.entries(dimData.facets)) {
        let facetSum = 0;
        let facetCount = 0;

        facetData.items.forEach(idx => {
          if (answersArr && answersArr[idx] !== null && answersArr[idx] !== undefined) {
            let val = answersArr[idx] + 1; // Convert 0-4 to 1-5
            if (facetData.reverse.includes(idx)) {
              val = 6 - val; // Reverse: 1->5, 2->4, 3->3, 4->2, 5->1
            }
            facetSum += val;
            facetCount++;
          }
        });

        const facetAvg = facetCount > 0 ? Math.round((facetSum / facetCount) * 100) / 100 : 0;
        dimSum += facetSum;
        dimCount += facetCount;

        let descLevel;
        if (facetAvg >= 3.67) descLevel = 'high';
        else if (facetAvg >= 2.34) descLevel = 'mid';
        else descLevel = 'low';

        facetResults.push({
          name: facetName,
          score: facetAvg,
          description: facetDescriptions[facetName] ? facetDescriptions[facetName][descLevel] : ''
        });
      }

      const dimAvg = dimCount > 0 ? Math.round((dimSum / dimCount) * 100) / 100 : 0;

      let dimDescLevel;
      if (dimAvg >= 3.67) dimDescLevel = 'high';
      else if (dimAvg >= 2.34) dimDescLevel = 'mid';
      else dimDescLevel = 'low';

      dimensionResults.push({
        name: dimName,
        score: dimAvg,
        description: dimensionDescriptions[dimName] ? dimensionDescriptions[dimName][dimDescLevel] : '',
        facets: facetResults
      });
    }

    return {
      label: 'Tu perfil de personalidad detallado',
      key: 'personality',
      color: '#7B5EA7',
      desc: 'El IPIP-NEO-300 mide 30 facetas agrupadas en los 5 grandes rasgos de personalidad. No hay resultados buenos ni malos; cada perfil refleja tu forma única de pensar, sentir y comportarte. Este es el análisis más detallado disponible.',
      dimensions: dimensionResults
    };
  }
};
