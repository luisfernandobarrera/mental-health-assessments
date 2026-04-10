const TEST_TRIAGE = {
  id: 'triage',
  abbr: 'Guía',
  name: 'Test Inicial — ¿Qué evaluarte?',
  fullName: 'Cuestionario de Orientación Inicial',
  desc: '¿No sabes por dónde empezar? Este cuestionario breve te recomienda qué evaluaciones son más relevantes para ti.',
  color: '#5B7B9B',
  icon: '🧭',
  items: 27,
  time: '3-5 min',
  instructions: 'Responde con honestidad a las siguientes preguntas sobre cómo te has sentido últimamente. Al final recibirás recomendaciones personalizadas sobre qué evaluaciones realizar.',
  sharedOptions: ["Nada", "Un poco", "Moderadamente", "Bastante", "Mucho"],
  maxScore: 'triage',

  domains: {
    'Estado de ánimo': { items: [0, 1, 2], tests: ['bdi', 'phq9'] },
    'Ansiedad': { items: [3, 4, 5], tests: ['bai', 'gad7'] },
    'Ansiedad social': { items: [6, 7], tests: ['spin'] },
    'Estrés': { items: [8, 9], tests: ['pss'] },
    'Trauma': { items: [10, 11], tests: ['pcl5'] },
    'Sueño': { items: [12, 13], tests: ['isi'] },
    'Alimentación': { items: [14, 15], tests: ['eat26'] },
    'Alcohol': { items: [16], tests: ['audit'] },
    'Atención y concentración': { items: [17, 18], tests: ['asrs'] },
    'Obsesiones y compulsiones': { items: [19, 20], tests: ['ocir'] },
    'Cambios de ánimo': { items: [21, 22], tests: ['mdq'] },
    'Regulación emocional': { items: [23, 24], tests: ['msibpd'] },
    'Rasgos del espectro autista': { items: [25, 26], tests: ['aq10', 'aq50'] }
  },

  questions: [
    // 1-3: Estado de ánimo / Depresión → BDI-II, PHQ-9
    { title: "Me he sentido triste, desanimado/a o sin esperanza" },
    { title: "He perdido interés o placer en las cosas que antes disfrutaba" },
    { title: "Me siento sin energía o fatigado/a la mayor parte del tiempo" },

    // 4-6: Ansiedad → BAI, GAD-7
    { title: "Me siento nervioso/a, ansioso/a o con los nervios de punta" },
    { title: "Tengo preocupaciones excesivas que no puedo controlar" },
    { title: "Experimento síntomas físicos de ansiedad (palpitaciones, sudoración, temblores)" },

    // 7-8: Ansiedad social → SPIN
    { title: "Evito situaciones sociales por miedo a ser juzgado/a o hacer el ridículo" },
    { title: "Me resulta muy difícil hablar en público o con desconocidos" },

    // 9-10: Estrés → PSS-10
    { title: "Siento que las situaciones de mi vida me superan" },
    { title: "Tengo dificultad para manejar los problemas cotidianos" },

    // 11-12: Trauma → PCL-5
    { title: "He vivido una experiencia traumática que me sigue afectando" },
    { title: "Tengo recuerdos perturbadores o pesadillas sobre eventos pasados" },

    // 13-14: Sueño → ISI
    { title: "Tengo dificultad para conciliar el sueño o mantenerlo" },
    { title: "Mi calidad de sueño afecta mi funcionamiento diario" },

    // 15-16: Alimentación → EAT-26
    { title: "Me preocupa excesivamente mi peso o mi imagen corporal" },
    { title: "Tengo una relación problemática con la comida (restricciones, atracones, purgas)" },

    // 17: Alcohol → AUDIT
    { title: "Mi consumo de alcohol me preocupa o ha causado problemas" },

    // 18-19: Atención / TDAH → ASRS
    { title: "Me cuesta concentrarme, organizar tareas o terminar lo que empiezo" },
    { title: "Soy excesivamente inquieto/a o me cuesta quedarme quieto/a" },

    // 20-21: TOC → OCI-R
    { title: "Tengo pensamientos repetitivos intrusivos que me causan angustia" },
    { title: "Siento la necesidad de repetir ciertas acciones o rituales" },

    // 22-23: Cambios de ánimo / Bipolar → MDQ
    { title: "He tenido períodos de euforia o energía excesiva seguidos de períodos de depresión" },
    { title: "He tenido episodios en los que me sentía inusualmente hiperactivo/a o impulsivo/a" },

    // 24-25: Regulación emocional / Personalidad → MSI-BPD
    { title: "Mis relaciones interpersonales son intensas e inestables" },
    { title: "Mis emociones cambian rápidamente y me cuesta regularlas" },

    // 26-27: Rasgos del espectro autista → AQ-10, AQ-50
    { title: "Me cuesta entender las intenciones o emociones de los demás" },
    { title: "Prefiero las rutinas y me incomoda cuando se alteran" }
  ],

  getResult(score, answersArr) {
    if (!answersArr) {
      return {
        label: 'Sin datos',
        key: 'no_data',
        color: '#9E9E9E',
        desc: 'No se pudieron calcular los resultados.'
      };
    }

    const domains = this.domains;
    const domainScores = [];
    const recommendations = [];

    const domainReasons = {
      'Estado de ánimo': 'Puntuación elevada en indicadores de estado de ánimo',
      'Ansiedad': 'Puntuación elevada en indicadores de ansiedad',
      'Ansiedad social': 'Puntuación elevada en indicadores de ansiedad social',
      'Estrés': 'Puntuación elevada en indicadores de estrés percibido',
      'Trauma': 'Puntuación elevada en indicadores de trauma y estrés postraumático',
      'Sueño': 'Puntuación elevada en indicadores de problemas de sueño',
      'Alimentación': 'Puntuación elevada en indicadores de conducta alimentaria',
      'Alcohol': 'Puntuación elevada en indicadores de consumo de alcohol',
      'Atención y concentración': 'Puntuación elevada en indicadores de inatención e hiperactividad',
      'Obsesiones y compulsiones': 'Puntuación elevada en indicadores obsesivo-compulsivos',
      'Cambios de ánimo': 'Puntuación elevada en indicadores de cambios del estado de ánimo',
      'Regulación emocional': 'Puntuación elevada en indicadores de inestabilidad emocional e interpersonal'
    };

    // Calculate score per domain
    for (const [name, domain] of Object.entries(domains)) {
      const itemScores = domain.items.map(i => answersArr[i] || 0);
      const sum = itemScores.reduce((a, b) => a + b, 0);
      const avg = sum / domain.items.length;

      domainScores.push({
        name: name,
        score: Math.round(avg * 10) / 10,
        maxScore: 4
      });

      // Threshold: average >= 2 means recommend
      if (avg >= 2) {
        const priority = avg >= 3 ? 'high' : 'medium';
        for (const testId of domain.tests) {
          // Avoid duplicates
          if (!recommendations.find(r => r.testId === testId)) {
            recommendations.push({
              testId: testId,
              priority: priority,
              reason: domainReasons[name],
              domainKey: name,
              _avg: avg
            });
          }
        }
      }
    }

    // Sort recommendations by relevance (highest average score first)
    recommendations.sort((a, b) => b._avg - a._avg);

    // Remove internal _avg field
    for (const rec of recommendations) {
      delete rec._avg;
    }

    // Always recommend WHO-5 (bienestar general)
    if (!recommendations.find(r => r.testId === 'who5')) {
      recommendations.push({
        testId: 'who5',
        priority: 'suggested',
        reason: 'Evaluación general de bienestar recomendada para todos',
        reasonKey: 'suggested_wellbeing'
      });
    }

    // Always recommend at least one personality test
    const personalityTests = ['bfi44', 'mbti', 'pid5'];
    const hasPersonality = recommendations.some(r => personalityTests.includes(r.testId));
    if (!hasPersonality) {
      recommendations.push({
        testId: 'bfi44',
        priority: 'suggested',
        reason: 'Evaluación de personalidad recomendada como complemento',
        reasonKey: 'suggested_personality'
      });
    }

    // Sort domain scores descending
    domainScores.sort((a, b) => b.score - a.score);

    return {
      label: 'Tus evaluaciones recomendadas',
      key: 'triage',
      color: '#5B7B9B',
      desc: 'Basándonos en tus respuestas, te recomendamos las siguientes evaluaciones:',
      recommendations: recommendations,
      domainScores: domainScores
    };
  }
};
