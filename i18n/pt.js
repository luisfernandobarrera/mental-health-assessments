const LANG_PT = {
  ui: {
    appTitle: "Avaliações de Saúde Mental",
    appSubtitle: "Ferramentas de autoavaliação psicológica",
    tabTests: "Testes",
    tabHistory: "Histórico",
    welcome: "Bem-vindo/a. Selecione uma avaliação para começar.",
    startTest: "Iniciar teste",
    nextQuestion: "Próxima",
    prevQuestion: "Anterior",
    viewResults: "Ver resultados",
    question: "Pergunta",
    of: "de",
    items: "itens",
    backToTests: "Voltar aos testes",
    repeatTest: "Repetir teste",
    viewHistory: "Ver histórico",
    otherTests: "Outros testes",
    detailByItem: "Detalhe por item",
    helpResources: "Recursos de ajuda",
    helpText: "Se você está passando por uma crise emocional, procure ajuda profissional. CVV (Centro de Valorização da Vida): ligue 188 ou acesse cvv.org.br.",
    disclaimerTitle: 'Nota importante:',
    disclaimerText: 'Este teste é uma ferramenta de autoavaliação e não substitui o diagnóstico de um profissional de saúde mental. Se sente que precisa de ajuda, consulte um especialista.',
    privacyTitle: 'Sua privacidade:',
    privacyText: 'Seus resultados são armazenados apenas no seu navegador (localStorage). Nenhum dado é enviado a qualquer servidor nem sai do seu computador.',
    cat_triage: 'Por onde começar?',
    cat_clinical: 'Avaliações Clínicas',
    cat_screening: 'Triagem e Detecção',
    cat_wellbeing: 'Bem-Estar e Autoestima',
    cat_personality: 'Personalidade',
    cat_advanced: 'Avaliação Avançada',
    noRecords: "Nenhum registro salvo.",
    completeFirst: "Complete pelo menos um teste para ver o histórico.",
    goToTests: "Ir para testes",
    trend: "Tendência",
    all: "Todos",
    clearHistory: "Limpar histórico",
    clearConfirm: "Tem certeza de que deseja limpar todo o histórico? Esta ação não pode ser desfeita.",
    score: "Pontuação",
    outOf: "de",
    disclaimer: "Esta ferramenta é apenas orientativa e não substitui uma avaliação profissional. Consulte um especialista em saúde mental para um diagnóstico adequado.",
    resumePrompt: "Você tem um teste em andamento",
    continueTest: "Continuar teste",
    resumeMessage: "Você tem um teste de {test} em andamento ({n}/{total} perguntas)",
    dismiss: "Fechar",
    questionsAnswered: "perguntas respondidas",
    inProgress: "Em andamento",
    testBy: "Testes",
  },

  scales: {
    agreement5: [
      "Discordo totalmente",
      "Discordo",
      "Nem concordo nem discordo",
      "Concordo",
      "Concordo totalmente"
    ],
    frequency4: [
      "Nenhuma vez",
      "Vários dias",
      "Mais da metade dos dias",
      "Quase todos os dias"
    ],
    frequency5: [
      "Nunca",
      "Quase nunca",
      "Às vezes",
      "Com frequência",
      "Muito frequentemente"
    ],
    severity4: [
      "De modo algum",
      "Levemente",
      "Moderadamente",
      "Severamente"
    ],
    severity5: [
      "De modo algum",
      "Um pouco",
      "Moderadamente",
      "Bastante",
      "Extremamente"
    ],
    yesNo: ["Não", "Sim"],
  },

  tests: {
    bdi: {
      name: "BDI-II",
      fullName: "Inventário de Depressão de Beck-II",
      desc: "Avalia a presença e a severidade de sintomas depressivos nas últimas duas semanas.",
      instructions: "Leia cada grupo de afirmações com atenção e selecione a que melhor descreve como você se sentiu durante as últimas duas semanas, incluindo hoje.",
      questions: [
        {
          title: "Tristeza",
          options: [
            "Não me sinto triste.",
            "Eu me sinto triste grande parte do tempo.",
            "Eu me sinto triste o tempo todo.",
            "Eu me sinto tão triste ou infeliz que não consigo suportar."
          ]
        },
        {
          title: "Pessimismo",
          options: [
            "Não estou desanimado/a a respeito do meu futuro.",
            "Eu me sinto mais desanimado/a a respeito do meu futuro do que antes.",
            "Não espero que as coisas deem certo para mim.",
            "Sinto que meu futuro é sem esperança e que só vai piorar."
          ]
        },
        {
          title: "Fracasso",
          options: [
            "Não me sinto um/a fracassado/a.",
            "Fracassei mais do que deveria.",
            "Quando olho para trás, vejo muitos fracassos.",
            "Sinto que, como pessoa, sou um fracasso total."
          ]
        },
        {
          title: "Perda de prazer",
          options: [
            "Tenho tanto prazer como sempre nas coisas de que gosto.",
            "Não desfruto das coisas tanto como antes.",
            "Tenho muito pouco prazer nas coisas de que costumava gostar.",
            "Não consigo ter nenhum prazer nas coisas de que costumava gostar."
          ]
        },
        {
          title: "Sentimentos de culpa",
          options: [
            "Não me sinto particularmente culpado/a.",
            "Eu me sinto culpado/a por várias coisas que fiz ou deveria ter feito.",
            "Eu me sinto bastante culpado/a na maior parte do tempo.",
            "Eu me sinto culpado/a o tempo todo."
          ]
        },
        {
          title: "Sentimentos de punição",
          options: [
            "Não sinto que estou sendo punido/a.",
            "Sinto que talvez esteja sendo punido/a.",
            "Espero ser punido/a.",
            "Sinto que estou sendo punido/a."
          ]
        },
        {
          title: "Insatisfação consigo mesmo",
          options: [
            "Sinto o mesmo de sempre em relação a mim mesmo/a.",
            "Perdi a confiança em mim mesmo/a.",
            "Estou decepcionado/a comigo mesmo/a.",
            "Não gosto de mim mesmo/a."
          ]
        },
        {
          title: "Autocrítica",
          options: [
            "Não me critico nem me culpo mais do que o habitual.",
            "Sou mais crítico/a comigo mesmo/a do que costumava ser.",
            "Eu me critico por todas as minhas falhas.",
            "Eu me culpo por tudo de ruim que acontece."
          ]
        },
        {
          title: "Pensamentos ou desejos suicidas",
          options: [
            "Não tenho nenhum pensamento de me matar.",
            "Tenho pensamentos de me matar, mas não os levaria adiante.",
            "Gostaria de me matar.",
            "Eu me mataria se tivesse oportunidade."
          ]
        },
        {
          title: "Choro",
          options: [
            "Não choro mais do que costumava chorar.",
            "Choro mais do que costumava chorar.",
            "Choro por qualquer coisinha.",
            "Tenho vontade de chorar, mas não consigo."
          ]
        },
        {
          title: "Agitação",
          options: [
            "Não estou mais inquieto/a ou agitado/a do que o habitual.",
            "Eu me sinto mais inquieto/a ou agitado/a do que o habitual.",
            "Estou tão inquieto/a ou agitado/a que é difícil ficar parado/a.",
            "Estou tão inquieto/a ou agitado/a que tenho que estar sempre me mexendo ou fazendo alguma coisa."
          ]
        },
        {
          title: "Perda de interesse",
          options: [
            "Não perdi o interesse por outras pessoas ou atividades.",
            "Estou menos interessado/a por outras pessoas ou coisas do que antes.",
            "Perdi quase todo o interesse por outras pessoas ou coisas.",
            "É difícil me interessar por qualquer coisa."
          ]
        },
        {
          title: "Indecisão",
          options: [
            "Tomo decisões tão bem quanto antes.",
            "Acho mais difícil tomar decisões do que o habitual.",
            "Tenho muito mais dificuldade para tomar decisões do que antes.",
            "Tenho problemas para tomar qualquer decisão."
          ]
        },
        {
          title: "Desvalorização",
          options: [
            "Não sinto que não tenho valor.",
            "Não me considero tão valioso/a e útil como antes.",
            "Eu me sinto menos valioso/a quando me comparo com os outros.",
            "Sinto que não tenho nenhum valor."
          ]
        },
        {
          title: "Perda de energia",
          options: [
            "Tenho tanta energia como sempre.",
            "Tenho menos energia do que costumava ter.",
            "Não tenho energia suficiente para fazer muita coisa.",
            "Não tenho energia suficiente para fazer nada."
          ]
        },
        {
          title: "Mudanças nos hábitos de sono",
          options: [
            "Não percebi nenhuma mudança nos meus hábitos de sono.",
            "Durmo um pouco mais ou um pouco menos do que o habitual.",
            "Durmo muito mais ou muito menos do que o habitual.",
            "Durmo a maior parte do dia ou acordo 1-2 horas mais cedo e não consigo voltar a dormir."
          ]
        },
        {
          title: "Irritabilidade",
          options: [
            "Não estou mais irritável do que o habitual.",
            "Estou mais irritável do que o habitual.",
            "Estou muito mais irritável do que o habitual.",
            "Estou irritável o tempo todo."
          ]
        },
        {
          title: "Mudanças no apetite",
          options: [
            "Não percebi nenhuma mudança no meu apetite.",
            "Meu apetite está um pouco menor ou um pouco maior do que o habitual.",
            "Meu apetite está muito menor ou muito maior do que o habitual.",
            "Não tenho nenhum apetite ou tenho vontade de comer o tempo todo."
          ]
        },
        {
          title: "Dificuldade de concentração",
          options: [
            "Consigo me concentrar tão bem como sempre.",
            "Não consigo me concentrar tão bem como o habitual.",
            "É difícil manter a mente em algo por muito tempo.",
            "Não consigo me concentrar em nada."
          ]
        },
        {
          title: "Cansaço ou fadiga",
          options: [
            "Não estou mais cansado/a ou fatigado/a do que o habitual.",
            "Fico cansado/a ou fatigado/a mais facilmente do que o habitual.",
            "Estou cansado/a ou fatigado/a demais para fazer muitas das coisas que costumava fazer.",
            "Estou cansado/a ou fatigado/a demais para fazer a maioria das coisas que costumava fazer."
          ]
        },
        {
          title: "Perda de interesse em sexo",
          options: [
            "Não notei nenhuma mudança recente no meu interesse por sexo.",
            "Estou menos interessado/a em sexo do que costumava estar.",
            "Estou muito menos interessado/a em sexo agora.",
            "Perdi completamente o interesse em sexo."
          ]
        }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Sua pontuação sugere um nível mínimo de depressão. É normal experimentar altos e baixos emocionais."
        },
        mild: {
          label: "Leve",
          desc: "Sua pontuação sugere sintomas depressivos leves. Considere conversar com um profissional se persistirem."
        },
        moderate: {
          label: "Moderada",
          desc: "Sua pontuação sugere sintomas depressivos moderados. Recomenda-se consultar um profissional de saúde mental."
        },
        severe: {
          label: "Severa",
          desc: "Sua pontuação sugere sintomas depressivos severos. É importante buscar ajuda profissional o mais rápido possível."
        }
      }
    },

    bai: {
      name: "BAI",
      fullName: "Inventário de Ansiedade de Beck",
      desc: "Avalia a severidade dos sintomas de ansiedade durante a última semana.",
      instructions: "Indique o quanto cada sintoma o/a incomodou durante a última semana, incluindo hoje.",
      questions: [
        { title: "Dormência ou formigamento" },
        { title: "Sensação de calor" },
        { title: "Tremor nas pernas" },
        { title: "Incapaz de relaxar" },
        { title: "Medo de que o pior aconteça" },
        { title: "Tontura ou vertigem" },
        { title: "Palpitação ou aceleração do coração" },
        { title: "Sem equilíbrio" },
        { title: "Aterrorizado/a ou com medo" },
        { title: "Nervoso/a" },
        { title: "Sensação de sufocação" },
        { title: "Tremor nas mãos" },
        { title: "Trêmulo/a ou cambaleante" },
        { title: "Medo de perder o controle" },
        { title: "Dificuldade de respirar" },
        { title: "Medo de morrer" },
        { title: "Assustado/a" },
        { title: "Indigestão ou desconforto abdominal" },
        { title: "Sensação de desmaio" },
        { title: "Rosto afogueado" },
        { title: "Suor frio ou quente" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Sua pontuação sugere um nível mínimo de ansiedade."
        },
        mild: {
          label: "Leve",
          desc: "Sua pontuação sugere ansiedade leve. Monitore seus sintomas."
        },
        moderate: {
          label: "Moderada",
          desc: "Sua pontuação sugere ansiedade moderada. Considere consultar um profissional."
        },
        severe: {
          label: "Severa",
          desc: "Sua pontuação sugere ansiedade severa. Recomenda-se buscar ajuda profissional."
        }
      }
    },

    gad7: {
      name: "GAD-7",
      fullName: "Escala de Transtorno de Ansiedade Generalizada-7",
      desc: "Avalia a severidade da ansiedade generalizada nas últimas duas semanas.",
      instructions: "Nas últimas 2 semanas, com que frequência você foi incomodado/a pelos seguintes problemas?",
      questions: [
        { title: "Sentir-se nervoso/a, ansioso/a ou muito tenso/a" },
        { title: "Não ser capaz de impedir ou controlar as preocupações" },
        { title: "Preocupar-se muito com diversas coisas" },
        { title: "Dificuldade para relaxar" },
        { title: "Ficar tão inquieto/a que é difícil permanecer sentado/a" },
        { title: "Ficar facilmente aborrecido/a ou irritável" },
        { title: "Sentir medo como se algo terrível pudesse acontecer" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Sua pontuação sugere um nível mínimo de ansiedade."
        },
        mild: {
          label: "Leve",
          desc: "Sua pontuação sugere ansiedade leve."
        },
        moderate: {
          label: "Moderada",
          desc: "Sua pontuação sugere ansiedade moderada. Considere consultar um profissional."
        },
        severe: {
          label: "Severa",
          desc: "Sua pontuação sugere ansiedade severa. Recomenda-se buscar ajuda profissional."
        }
      }
    },

    msibpd: {
      name: "MSI-BPD",
      fullName: "Instrumento de Rastreamento McLean para Transtorno de Personalidade Borderline",
      desc: "Ferramenta de rastreamento de traços associados ao transtorno de personalidade borderline.",
      instructions: "Responda sim ou não a cada uma das seguintes perguntas.",
      questions: [
        { title: "Você já se cortou, queimou ou machucou de propósito deliberadamente?" },
        { title: "Você já tentou suicídio?" },
        { title: "Você teve pelo menos dois relacionamentos (ou tentativas de relacionamento) que foram muito intensos, mas instáveis?" },
        { title: "Sua noção de quem você é muda frequentemente de forma dramática?" },
        { title: "Seu humor muda frequentemente de forma repentina?" },
        { title: "Você frequentemente sente raiva intensa que é difícil de controlar?" },
        { title: "Você frequentemente desconfia de outras pessoas?" },
        { title: "Você frequentemente se sente irreal ou como se as coisas ao seu redor fossem irreais?" },
        { title: "Você frequentemente se sente vazio/a?" },
        { title: "Você frequentemente faz esforços desesperados para evitar ser abandonado/a por alguém?" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Sua pontuação sugere uma baixa presença de traços associados ao transtorno de personalidade borderline."
        },
        moderate: {
          label: "Moderada",
          desc: "Sua pontuação sugere alguns traços associados ao transtorno borderline. Considere consultar um profissional."
        },
        severe: {
          label: "Significativa",
          desc: "Sua pontuação sugere uma presença significativa de traços borderline. Recomenda-se uma avaliação profissional completa."
        }
      }
    },

    pss: {
      name: "PSS-10",
      fullName: "Escala de Estresse Percebido-10",
      desc: "Avalia o grau em que as situações da vida são percebidas como estressantes no último mês.",
      instructions: "As seguintes perguntas referem-se aos seus sentimentos e pensamentos durante o último mês. Indique com que frequência você se sentiu ou pensou de determinada maneira.",
      questions: [
        { title: "Com que frequência você ficou aborrecido/a por causa de algo que aconteceu inesperadamente?" },
        { title: "Com que frequência você se sentiu incapaz de controlar as coisas importantes na sua vida?" },
        { title: "Com que frequência você se sentiu nervoso/a e estressado/a?" },
        { title: "Com que frequência você lidou com sucesso com os pequenos problemas irritantes do dia a dia?" },
        { title: "Com que frequência você sentiu que enfrentou efetivamente mudanças importantes que estavam ocorrendo na sua vida?" },
        { title: "Com que frequência você se sentiu confiante na sua capacidade de lidar com seus problemas pessoais?" },
        { title: "Com que frequência você sentiu que as coisas estavam indo do seu jeito?" },
        { title: "Com que frequência você sentiu que não conseguia lidar com todas as coisas que tinha que fazer?" },
        { title: "Com que frequência você conseguiu controlar as irritações na sua vida?" },
        { title: "Com que frequência você sentiu que tinha tudo sob controle?" }
      ],
      results: {
        minimal: {
          label: "Baixo",
          desc: "Seu nível de estresse percebido é baixo. Continue com suas estratégias de enfrentamento atuais."
        },
        moderate: {
          label: "Moderado",
          desc: "Seu nível de estresse percebido é moderado. Considere incorporar técnicas de gerenciamento de estresse."
        },
        severe: {
          label: "Alto",
          desc: "Seu nível de estresse percebido é alto. Recomenda-se buscar apoio profissional e técnicas de redução de estresse."
        }
      }
    },

    asrs: {
      name: "ASRS v1.1",
      fullName: "Escala de Autorrelato de TDAH em Adultos v1.1",
      desc: "Ferramenta de rastreamento de sintomas de transtorno de déficit de atenção e hiperatividade em adultos.",
      instructions: "Responda às seguintes perguntas pensando em como você se sentiu e se comportou nos últimos 6 meses.",
      questions: [
        { title: "Com que frequência você tem dificuldade para terminar os detalhes finais de um projeto, depois que as partes difíceis já foram feitas?" },
        { title: "Com que frequência você tem dificuldade para colocar as coisas em ordem quando precisa fazer uma tarefa que requer organização?" },
        { title: "Com que frequência você tem problemas para lembrar de compromissos ou obrigações?" },
        { title: "Quando você tem uma tarefa que requer muita concentração, com que frequência você evita ou adia começá-la?" },
        { title: "Com que frequência você mexe ou torce as mãos ou os pés quando precisa ficar sentado/a por muito tempo?" },
        { title: "Com que frequência você se sente excessivamente ativo/a e compelido/a a fazer coisas, como se estivesse movido/a por um motor?" }
      ],
      results: {
        minimal: {
          label: "Improvável",
          desc: "Sua pontuação sugere baixa probabilidade de TDAH."
        },
        moderate: {
          label: "Possível",
          desc: "Sua pontuação sugere alguns sintomas compatíveis com TDAH. Considere uma avaliação profissional."
        },
        severe: {
          label: "Provável",
          desc: "Sua pontuação sugere uma alta probabilidade de sintomas de TDAH. Recomenda-se uma avaliação profissional completa."
        }
      }
    },

    ocir: {
      name: "OCI-R",
      fullName: "Inventário Obsessivo-Compulsivo Revisado",
      desc: "Avalia sintomas do transtorno obsessivo-compulsivo.",
      instructions: "As seguintes afirmações referem-se a experiências que muitas pessoas têm no dia a dia. Indique em que grau o/a incomodaram durante o último mês.",
      questions: [
        { title: "Acumulei tantas coisas que elas atrapalham" },
        { title: "Verifico as coisas mais do que o necessário" },
        { title: "Fico incomodado/a quando os objetos não estão bem organizados" },
        { title: "Sinto necessidade de contar enquanto faço coisas" },
        { title: "Acho difícil tocar um objeto quando sei que foi tocado por desconhecidos ou certas pessoas" },
        { title: "Acho difícil controlar meus próprios pensamentos" },
        { title: "Acumulo coisas de que não preciso" },
        { title: "Verifico repetidamente portas, janelas, gavetas, etc." },
        { title: "Fico incomodado/a se os outros mudam a ordem em que coloquei as coisas" },
        { title: "Sinto que devo repetir certos números" },
        { title: "Às vezes tenho que me lavar ou me limpar simplesmente porque me sinto contaminado/a" },
        { title: "Fico incomodado/a com pensamentos desagradáveis que vêm à minha mente contra a minha vontade" },
        { title: "Evito jogar coisas fora porque tenho medo de precisar delas depois" },
        { title: "Verifico repetidamente o gás, a água e as luzes depois de desligá-los" },
        { title: "Preciso que as coisas estejam organizadas de uma maneira determinada" },
        { title: "Sinto que existem números bons e maus" },
        { title: "Lavo as mãos mais do que o necessário" },
        { title: "Frequentemente tenho pensamentos horríveis e tenho dificuldade em me livrar deles" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Sua pontuação sugere um nível mínimo de sintomas obsessivo-compulsivos."
        },
        moderate: {
          label: "Moderada",
          desc: "Sua pontuação sugere sintomas obsessivo-compulsivos moderados. Considere consultar um profissional."
        },
        severe: {
          label: "Significativa",
          desc: "Sua pontuação sugere sintomas obsessivo-compulsivos significativos. Recomenda-se uma avaliação profissional."
        }
      }
    },

    pcl5: {
      name: "PCL-5",
      fullName: "Lista de Verificação de Transtorno de Estresse Pós-Traumático para o DSM-5",
      desc: "Avalia os sintomas de estresse pós-traumático no último mês.",
      instructions: "Abaixo está uma lista de problemas que as pessoas às vezes têm em resposta a uma experiência muito estressante. Indique o quanto esse problema o/a incomodou no último mês.",
      questions: [
        { title: "Memórias repetidas, perturbadoras e involuntárias da experiência estressante" },
        { title: "Sonhos repetidos e perturbadores sobre a experiência estressante" },
        { title: "De repente sentir ou agir como se a experiência estressante estivesse acontecendo novamente" },
        { title: "Sentir-se muito mal quando algo o/a faz lembrar da experiência estressante" },
        { title: "Ter reações físicas fortes quando algo o/a faz lembrar da experiência estressante (por exemplo, coração acelerado, dificuldade para respirar, suor)" },
        { title: "Evitar memórias, pensamentos ou sentimentos relacionados à experiência estressante" },
        { title: "Evitar coisas externas que o/a fazem lembrar da experiência estressante (por exemplo, pessoas, lugares, conversas, atividades, objetos ou situações)" },
        { title: "Dificuldade para lembrar de partes importantes da experiência estressante" },
        { title: "Ter crenças negativas fortes sobre si mesmo/a, outras pessoas ou o mundo" },
        { title: "Culpar a si mesmo/a ou outra pessoa pela experiência estressante ou pelo que aconteceu depois" },
        { title: "Ter sentimentos negativos fortes como medo, horror, raiva, culpa ou vergonha" },
        { title: "Perda de interesse em atividades de que costumava gostar" },
        { title: "Sentir-se distante ou afastado/a de outras pessoas" },
        { title: "Dificuldade para experimentar sentimentos positivos" },
        { title: "Comportamento irritável, explosões de raiva ou agir de forma agressiva" },
        { title: "Correr riscos demais ou fazer coisas que poderiam causar dano a si mesmo/a" },
        { title: "Ficar superalerta, vigilante ou em guarda" },
        { title: "Sentir-se sobressaltado/a ou assustar-se com facilidade" },
        { title: "Ter dificuldade para se concentrar" },
        { title: "Problemas para pegar no sono ou permanecer dormindo" }
      ],
      results: {
        minimal: {
          label: "Mínima",
          desc: "Sua pontuação sugere um nível baixo de sintomas de estresse pós-traumático."
        },
        moderate: {
          label: "Moderada",
          desc: "Sua pontuação sugere sintomas moderados de estresse pós-traumático. Considere consultar um profissional."
        },
        severe: {
          label: "Significativa",
          desc: "Sua pontuação sugere sintomas significativos de estresse pós-traumático. Recomenda-se buscar ajuda profissional."
        }
      }
    },

    bfi44: {
      name: "BFI-44",
      fullName: "Inventário dos Cinco Grandes Fatores de Personalidade",
      desc: "Avalia cinco dimensões principais da personalidade: Extroversão, Amabilidade, Conscienciosidade, Neuroticismo e Abertura à experiência.",
      instructions: "Eu me vejo como alguém que... Indique o quanto você concorda ou discorda de cada afirmação.",
      questions: [
        { title: "É falante" },
        { title: "Tende a ser crítico/a" },
        { title: "É minucioso/a no trabalho" },
        { title: "É depressivo/a, melancólico/a" },
        { title: "É original, tem ideias novas" },
        { title: "É reservado/a" },
        { title: "É generoso/a e ajuda os outros" },
        { title: "Pode ser um pouco descuidado/a" },
        { title: "É tranquilo/a, lida bem com o estresse" },
        { title: "Tem curiosidade por muitas coisas diferentes" },
        { title: "É cheio/a de energia" },
        { title: "Inicia discussões com os outros" },
        { title: "É um/a trabalhador/a confiável" },
        { title: "Pode ficar tenso/a" },
        { title: "É engenhoso/a, um/a pensador/a profundo/a" },
        { title: "Gera muito entusiasmo" },
        { title: "Tem tendência a perdoar" },
        { title: "Tende a ser desorganizado/a" },
        { title: "Preocupa-se muito" },
        { title: "Tem uma imaginação ativa" },
        { title: "Tende a ser calado/a" },
        { title: "É geralmente confiável" },
        { title: "Tende a ser preguiçoso/a" },
        { title: "É emocionalmente estável, não se abala facilmente" },
        { title: "É inventivo/a" },
        { title: "Tem uma personalidade assertiva" },
        { title: "Pode ser frio/a e distante" },
        { title: "Persevera até terminar a tarefa" },
        { title: "Pode ser temperamental" },
        { title: "Valoriza experiências artísticas e estéticas" },
        { title: "Às vezes é tímido/a, inibido/a" },
        { title: "É atencioso/a e gentil com quase todos" },
        { title: "Faz as coisas de maneira eficiente" },
        { title: "Permanece calmo/a em situações tensas" },
        { title: "Prefere um trabalho rotineiro" },
        { title: "É sociável, extrovertido/a" },
        { title: "Às vezes é grosseiro/a com os outros" },
        { title: "Faz planos e os leva adiante" },
        { title: "Fica nervoso/a com facilidade" },
        { title: "Gosta de refletir, brincar com as ideias" },
        { title: "Tem poucos interesses artísticos" },
        { title: "Gosta de cooperar com os outros" },
        { title: "Distrai-se facilmente" },
        { title: "É sofisticado/a em arte, música ou literatura" }
      ],
      dimensionNames: {
        E: "Extroversão",
        A: "Amabilidade",
        C: "Conscienciosidade",
        N: "Neuroticismo",
        O: "Abertura à experiência"
      },
      dimensionDescs: {
        E: {
          low: "Você tende a ser reservado/a, tranquilo/a e a preferir atividades solitárias.",
          mid: "Você mostra um equilíbrio entre sociabilidade e necessidade de tempo sozinho/a.",
          high: "Você tende a ser sociável, enérgico/a e a gostar de interagir com os outros."
        },
        A: {
          low: "Você tende a ser mais competitivo/a e direto/a em suas interações.",
          mid: "Você mostra um equilíbrio entre cooperação e assertividade.",
          high: "Você tende a ser cooperativo/a, compassivo/a e atencioso/a com os outros."
        },
        C: {
          low: "Você tende a ser mais flexível e espontâneo/a em sua abordagem.",
          mid: "Você mostra um equilíbrio entre estrutura e flexibilidade.",
          high: "Você tende a ser organizado/a, disciplinado/a e orientado/a a objetivos."
        },
        N: {
          low: "Você tende a ser emocionalmente estável e calmo/a diante de situações estressantes.",
          mid: "Você experimenta uma gama normal de emoções positivas e negativas.",
          high: "Você tende a experimentar mais emoções negativas e maior sensibilidade ao estresse."
        },
        O: {
          low: "Você tende a preferir o convencional e o prático.",
          mid: "Você mostra um equilíbrio entre curiosidade e interesses práticos.",
          high: "Você tende a ser criativo/a, curioso/a e aberto/a a novas experiências."
        }
      }
    },

    mbti: {
      name: "MBTI",
      fullName: "Indicador de Tipo de Personalidade Myers-Briggs",
      desc: "Identifica preferências de personalidade em quatro dimensões: Energia, Percepção, Tomada de decisões e Estilo de vida.",
      instructions: "Selecione a opção que melhor o/a descreve na maioria das situações. Não há respostas certas ou erradas.",
      questions: [
        { title: "Em reuniões sociais, você prefere interagir com muitas pessoas, incluindo desconhecidos" },
        { title: "Você tende a ser mais realista do que imaginativo/a" },
        { title: "É pior ser injusto do que impiedoso" },
        { title: "Normalmente você prefere fazer as coisas de acordo com um plano estabelecido" },
        { title: "Depois de passar tempo com um grupo, você se sente energizado/a" },
        { title: "Você prefere focar nos detalhes específicos em vez do panorama geral" },
        { title: "Ao tomar decisões, você considera primeiro os sentimentos das pessoas" },
        { title: "Você gosta de ter as coisas decididas e resolvidas" },
        { title: "Você prefere iniciar conversas com pessoas novas" },
        { title: "Você confia mais na sua experiência do que na sua intuição" },
        { title: "Você valoriza mais a compaixão do que a verdade objetiva" },
        { title: "Você prefere seguir um horário rigoroso" },
        { title: "Você acha fácil conversar com desconhecidos" },
        { title: "Você presta mais atenção ao que é real e atual do que ao que poderia ser" },
        { title: "Você se importa mais com a harmonia do grupo do que com resultados objetivos" },
        { title: "Você prefere terminar um projeto antes de começar outro" },
        { title: "Você precisa de tempo sozinho/a para recarregar as energias" },
        { title: "Você gosta de pensar em conceitos abstratos e teorias" },
        { title: "Ao resolver problemas, você prioriza a lógica sobre os sentimentos" },
        { title: "Você prefere manter suas opções abertas em vez de se comprometer" },
        { title: "No seu tempo livre, você prefere estar com amigos" },
        { title: "Você se interessa mais pelas possibilidades futuras do que pelos fatos presentes" },
        { title: "Você prefere tomar decisões baseadas em princípios lógicos" },
        { title: "Você se sente mais confortável com estrutura e rotinas" },
        { title: "Você é a alma da festa" },
        { title: "Você se sente mais atraído/a por significados simbólicos do que por fatos literais" },
        { title: "Em um conflito, você busca a solução mais justa mesmo que alguém fique chateado" },
        { title: "Você gosta de planejar suas férias com antecedência e em detalhe" },
        { title: "Você se sente confortável sendo o centro das atenções" },
        { title: "Você gosta mais de explorar ideias novas do que de aplicar métodos comprovados" },
        { title: "Você tende a decidir com a cabeça mais do que com o coração" },
        { title: "Você prefere a espontaneidade ao planejamento" },
        { title: "Você acha cansativo passar muito tempo sozinho/a" },
        { title: "Você prefere aprender conceitos teóricos antes de ver exemplos práticos" },
        { title: "Você considera que a diplomacia é mais importante do que a franqueza" },
        { title: "Você se sente desconfortável quando os planos mudam de repente" },
        { title: "Você fala mais do que escuta nas conversas" },
        { title: "Você confia nos seus palpites e intuições" },
        { title: "Você valoriza mais a eficiência do que a cooperação" },
        { title: "Você gosta de improvisar e se adaptar conforme as coisas acontecem" }
      ],
      typeDescriptions: {
        ISTJ: "Responsável e confiável. Você valoriza a tradição, a lealdade e a ordem. É meticuloso/a e trabalha de maneira constante para cumprir com seus deveres.",
        ISFJ: "Protetor/a e dedicado/a. Você é gentil, responsável e atento/a às necessidades dos outros. Valoriza a harmonia e a estabilidade.",
        INFJ: "Idealista e visionário/a. Você tem uma compreensão profunda das pessoas e um forte desejo de ajudar os outros a alcançar seu potencial.",
        INTJ: "Estrategista e independente. Você tem uma mente analítica e uma visão clara de como melhorar as coisas. Valoriza a competência e o conhecimento.",
        ISTP: "Prático/a e observador/a. Você gosta de entender como as coisas funcionam e de resolver problemas de maneira eficiente.",
        ISFP: "Artista e sensível. Você valoriza a autenticidade e a harmonia. Aprecia a beleza e tem um forte senso estético.",
        INFP: "Idealista e empático/a. Você tem fortes valores pessoais e um desejo de tornar o mundo um lugar melhor.",
        INTP: "Lógico/a e criativo/a. Você gosta de analisar sistemas complexos e gerar ideias inovadoras.",
        ESTP: "Enérgico/a e pragmático/a. Você gosta de ação e vive no momento presente. É habilidoso/a em resolver problemas práticos.",
        ESFP: "Espontâneo/a e entusiasta. Você aproveita a vida e contagia os outros com sua alegria. É generoso/a e otimista.",
        ENFP: "Entusiasta e criativo/a. Você vê possibilidades em todos os lugares e tem uma energia contagiante para inspirar os outros.",
        ENTP: "Inovador/a e desafiador/a. Você gosta de debates intelectuais e busca constantemente novas ideias e possibilidades.",
        ESTJ: "Organizador/a e decidido/a. Você valoriza a eficiência e a ordem. É um/a líder e administrador/a nato/a.",
        ESFJ: "Sociável e prestativo/a. Você se preocupa profundamente com os outros e trabalha para criar harmonia no seu ambiente.",
        ENFJ: "Carismático/a e empático/a. Você inspira os outros e tem uma habilidade natural para liderar com compaixão.",
        ENTJ: "Líder nato/a e estratégico/a. Você é decidido/a, eficiente e gosta de desafios organizacionais e de liderança."
      }
    }
  }
};
