const LANG_PT = {
  "ui": {
    "appTitle": "Avaliações de Saúde Mental",
    "appSubtitle": "Ferramentas de autoavaliação psicológica",
    "tabTests": "Testes",
    "tabHistory": "Histórico",
    "welcome": "Bem-vindo/a. Selecione uma avaliação para começar.",
    "startTest": "Iniciar teste",
    "nextQuestion": "Próxima",
    "prevQuestion": "Anterior",
    "viewResults": "Ver resultados",
    "question": "Pergunta",
    "of": "de",
    "items": "itens",
    "backToTests": "Voltar aos testes",
    "repeatTest": "Repetir teste",
    "viewHistory": "Ver histórico",
    "otherTests": "Outros testes",
    "detailByItem": "Detalhe por item",
    "helpResources": "Recursos de ajuda",
    "helpText": "Se você está passando por uma crise emocional, procure ajuda profissional. CVV (Centro de Valorização da Vida): ligue 188 ou acesse cvv.org.br.",
    "disclaimerTitle": "Nota importante:",
    "disclaimerText": "Este teste é uma ferramenta de autoavaliação e não substitui o diagnóstico de um profissional de saúde mental. Se sente que precisa de ajuda, consulte um especialista.",
    "privacyTitle": "Sua privacidade:",
    "privacyText": "Seus resultados são armazenados apenas no seu navegador (localStorage). Nenhum dado é enviado a qualquer servidor nem sai do seu computador.",
    "cat_triage": "Por onde começar?",
    "cat_clinical": "Avaliações Clínicas",
    "cat_screening": "Triagem e Detecção",
    "cat_wellbeing": "Bem-Estar e Autoestima",
    "cat_personality": "Personalidade",
    "cat_advanced": "Avaliação Avançada",
    "noRecords": "Nenhum registro salvo.",
    "completeFirst": "Complete pelo menos um teste para ver o histórico.",
    "goToTests": "Ir para testes",
    "trend": "Tendência",
    "all": "Todos",
    "clearHistory": "Limpar histórico",
    "clearConfirm": "Tem certeza de que deseja limpar todo o histórico? Esta ação não pode ser desfeita.",
    "score": "Pontuação",
    "outOf": "de",
    "disclaimer": "Esta ferramenta é apenas orientativa e não substitui uma avaliação profissional. Consulte um especialista em saúde mental para um diagnóstico adequado.",
    "resumePrompt": "Você tem um teste em andamento",
    "continueTest": "Continuar teste",
    "resumeMessage": "Você tem um teste de {test} em andamento ({n}/{total} perguntas)",
    "dismiss": "Fechar",
    "questionsAnswered": "perguntas respondidas",
    "inProgress": "Em andamento",
    "testBy": "Testes",
    "recommendedTests": "Avaliações recomendadas",
    "highPriority": "Alta prioridade",
    "recommended": "Recomendado",
    "suggested": "Sugerido",
    "areasEvaluated": "Áreas avaliadas"
  },
  "scales": {
    "agreement5": ["Discordo totalmente","Discordo","Nem concordo nem discordo","Concordo","Concordo totalmente"],
    "frequency4": ["Nenhuma vez","Vários dias","Mais da metade dos dias","Quase todos os dias"],
    "frequency5": ["Nunca","Quase nunca","Às vezes","Com frequência","Muito frequentemente"],
    "severity4": ["De modo algum","Levemente","Moderadamente","Severamente"],
    "severity5": ["De modo algum","Um pouco","Moderadamente","Bastante","Extremamente"],
    "yesNo": ["Não","Sim"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Inventário de Depressão de Beck-II",
      "desc": "Avalia a presença e a severidade de sintomas depressivos nas últimas duas semanas.",
      "instructions": "Leia cada grupo de afirmações com atenção e selecione a que melhor descreve como você se sentiu durante as últimas duas semanas, incluindo hoje.",
      "questions": [
        {
          "title": "Tristeza",
          "options": [
            "Não me sinto triste.",
            "Eu me sinto triste grande parte do tempo.",
            "Eu me sinto triste o tempo todo.",
            "Eu me sinto tão triste ou infeliz que não consigo suportar."
          ]
        },
        {
          "title": "Pessimismo",
          "options": [
            "Não estou desanimado/a a respeito do meu futuro.",
            "Eu me sinto mais desanimado/a a respeito do meu futuro do que antes.",
            "Não espero que as coisas deem certo para mim.",
            "Sinto que meu futuro é sem esperança e que só vai piorar."
          ]
        },
        {
          "title": "Fracasso",
          "options": [
            "Não me sinto um/a fracassado/a.",
            "Fracassei mais do que deveria.",
            "Quando olho para trás, vejo muitos fracassos.",
            "Sinto que, como pessoa, sou um fracasso total."
          ]
        },
        {
          "title": "Perda de prazer",
          "options": [
            "Tenho tanto prazer como sempre nas coisas de que gosto.",
            "Não desfruto das coisas tanto como antes.",
            "Tenho muito pouco prazer nas coisas de que costumava gostar.",
            "Não consigo ter nenhum prazer nas coisas de que costumava gostar."
          ]
        },
        {
          "title": "Sentimentos de culpa",
          "options": [
            "Não me sinto particularmente culpado/a.",
            "Eu me sinto culpado/a por várias coisas que fiz ou deveria ter feito.",
            "Eu me sinto bastante culpado/a na maior parte do tempo.",
            "Eu me sinto culpado/a o tempo todo."
          ]
        },
        {
          "title": "Sentimentos de punição",
          "options": [
            "Não sinto que estou sendo punido/a.",
            "Sinto que talvez esteja sendo punido/a.",
            "Espero ser punido/a.",
            "Sinto que estou sendo punido/a."
          ]
        },
        {
          "title": "Insatisfação consigo mesmo",
          "options": [
            "Sinto o mesmo de sempre em relação a mim mesmo/a.",
            "Perdi a confiança em mim mesmo/a.",
            "Estou decepcionado/a comigo mesmo/a.",
            "Não gosto de mim mesmo/a."
          ]
        },
        {
          "title": "Autocrítica",
          "options": [
            "Não me critico nem me culpo mais do que o habitual.",
            "Sou mais crítico/a comigo mesmo/a do que costumava ser.",
            "Eu me critico por todas as minhas falhas.",
            "Eu me culpo por tudo de ruim que acontece."
          ]
        },
        {
          "title": "Pensamentos ou desejos suicidas",
          "options": [
            "Não tenho nenhum pensamento de me matar.",
            "Tenho pensamentos de me matar, mas não os levaria adiante.",
            "Gostaria de me matar.",
            "Eu me mataria se tivesse oportunidade."
          ]
        },
        {
          "title": "Choro",
          "options": [
            "Não choro mais do que costumava chorar.",
            "Choro mais do que costumava chorar.",
            "Choro por qualquer coisinha.",
            "Tenho vontade de chorar, mas não consigo."
          ]
        },
        {
          "title": "Agitação",
          "options": [
            "Não estou mais inquieto/a ou agitado/a do que o habitual.",
            "Eu me sinto mais inquieto/a ou agitado/a do que o habitual.",
            "Estou tão inquieto/a ou agitado/a que é difícil ficar parado/a.",
            "Estou tão inquieto/a ou agitado/a que tenho que estar sempre me mexendo ou fazendo alguma coisa."
          ]
        },
        {
          "title": "Perda de interesse",
          "options": [
            "Não perdi o interesse por outras pessoas ou atividades.",
            "Estou menos interessado/a por outras pessoas ou coisas do que antes.",
            "Perdi quase todo o interesse por outras pessoas ou coisas.",
            "É difícil me interessar por qualquer coisa."
          ]
        },
        {
          "title": "Indecisão",
          "options": [
            "Tomo decisões tão bem quanto antes.",
            "Acho mais difícil tomar decisões do que o habitual.",
            "Tenho muito mais dificuldade para tomar decisões do que antes.",
            "Tenho problemas para tomar qualquer decisão."
          ]
        },
        {
          "title": "Desvalorização",
          "options": [
            "Não sinto que não tenho valor.",
            "Não me considero tão valioso/a e útil como antes.",
            "Eu me sinto menos valioso/a quando me comparo com os outros.",
            "Sinto que não tenho nenhum valor."
          ]
        },
        {
          "title": "Perda de energia",
          "options": [
            "Tenho tanta energia como sempre.",
            "Tenho menos energia do que costumava ter.",
            "Não tenho energia suficiente para fazer muita coisa.",
            "Não tenho energia suficiente para fazer nada."
          ]
        },
        {
          "title": "Mudanças nos hábitos de sono",
          "options": [
            "Não percebi nenhuma mudança nos meus hábitos de sono.",
            "Durmo um pouco mais ou um pouco menos do que o habitual.",
            "Durmo muito mais ou muito menos do que o habitual.",
            "Durmo a maior parte do dia ou acordo 1-2 horas mais cedo e não consigo voltar a dormir."
          ]
        },
        {
          "title": "Irritabilidade",
          "options": [
            "Não estou mais irritável do que o habitual.",
            "Estou mais irritável do que o habitual.",
            "Estou muito mais irritável do que o habitual.",
            "Estou irritável o tempo todo."
          ]
        },
        {
          "title": "Mudanças no apetite",
          "options": [
            "Não percebi nenhuma mudança no meu apetite.",
            "Meu apetite está um pouco menor ou um pouco maior do que o habitual.",
            "Meu apetite está muito menor ou muito maior do que o habitual.",
            "Não tenho nenhum apetite ou tenho vontade de comer o tempo todo."
          ]
        },
        {
          "title": "Dificuldade de concentração",
          "options": [
            "Consigo me concentrar tão bem como sempre.",
            "Não consigo me concentrar tão bem como o habitual.",
            "É difícil manter a mente em algo por muito tempo.",
            "Não consigo me concentrar em nada."
          ]
        },
        {
          "title": "Cansaço ou fadiga",
          "options": [
            "Não estou mais cansado/a ou fatigado/a do que o habitual.",
            "Fico cansado/a ou fatigado/a mais facilmente do que o habitual.",
            "Estou cansado/a ou fatigado/a demais para fazer muitas das coisas que costumava fazer.",
            "Estou cansado/a ou fatigado/a demais para fazer a maioria das coisas que costumava fazer."
          ]
        },
        {
          "title": "Perda de interesse em sexo",
          "options": [
            "Não notei nenhuma mudança recente no meu interesse por sexo.",
            "Estou menos interessado/a em sexo do que costumava estar.",
            "Estou muito menos interessado/a em sexo agora.",
            "Perdi completamente o interesse em sexo."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "Sua pontuação sugere um nível mínimo de depressão. É normal experimentar altos e baixos emocionais." },
        "mild": { "label": "Leve", "desc": "Sua pontuação sugere sintomas depressivos leves. Considere conversar com um profissional se persistirem." },
        "moderate": { "label": "Moderada", "desc": "Sua pontuação sugere sintomas depressivos moderados. Recomenda-se consultar um profissional de saúde mental." },
        "severe": { "label": "Severa", "desc": "Sua pontuação sugere sintomas depressivos severos. É importante buscar ajuda profissional o mais rápido possível." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Inventário de Ansiedade de Beck",
      "desc": "Avalia a severidade dos sintomas de ansiedade durante a última semana.",
      "instructions": "Indique o quanto cada sintoma o/a incomodou durante a última semana, incluindo hoje.",
      "questions": [
        { "title": "Dormência ou formigamento" },
        { "title": "Sensação de calor" },
        { "title": "Tremor nas pernas" },
        { "title": "Incapaz de relaxar" },
        { "title": "Medo de que o pior aconteça" },
        { "title": "Tontura ou vertigem" },
        { "title": "Palpitação ou aceleração do coração" },
        { "title": "Sem equilíbrio" },
        { "title": "Aterrorizado/a ou com medo" },
        { "title": "Nervoso/a" },
        { "title": "Sensação de sufocação" },
        { "title": "Tremor nas mãos" },
        { "title": "Trêmulo/a ou cambaleante" },
        { "title": "Medo de perder o controle" },
        { "title": "Dificuldade de respirar" },
        { "title": "Medo de morrer" },
        { "title": "Assustado/a" },
        { "title": "Indigestão ou desconforto abdominal" },
        { "title": "Sensação de desmaio" },
        { "title": "Rosto afogueado" },
        { "title": "Suor frio ou quente" }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "Sua pontuação sugere um nível mínimo de ansiedade." },
        "mild": { "label": "Leve", "desc": "Sua pontuação sugere ansiedade leve. Monitore seus sintomas." },
        "moderate": { "label": "Moderada", "desc": "Sua pontuação sugere ansiedade moderada. Considere consultar um profissional." },
        "severe": { "label": "Severa", "desc": "Sua pontuação sugere ansiedade severa. Recomenda-se buscar ajuda profissional." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Escala de Transtorno de Ansiedade Generalizada-7",
      "desc": "Avalia a severidade da ansiedade generalizada nas últimas duas semanas.",
      "instructions": "Nas últimas 2 semanas, com que frequência você foi incomodado/a pelos seguintes problemas?",
      "questions": [
        { "title": "Sentir-se nervoso/a, ansioso/a ou muito tenso/a" },
        { "title": "Não ser capaz de impedir ou controlar as preocupações" },
        { "title": "Preocupar-se muito com diversas coisas" },
        { "title": "Dificuldade para relaxar" },
        { "title": "Ficar tão inquieto/a que é difícil permanecer sentado/a" },
        { "title": "Ficar facilmente aborrecido/a ou irritável" },
        { "title": "Sentir medo como se algo terrível pudesse acontecer" }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "Sua pontuação sugere um nível mínimo de ansiedade." },
        "mild": { "label": "Leve", "desc": "Sua pontuação sugere ansiedade leve." },
        "moderate": { "label": "Moderada", "desc": "Sua pontuação sugere ansiedade moderada. Considere consultar um profissional." },
        "severe": { "label": "Severa", "desc": "Sua pontuação sugere ansiedade severa. Recomenda-se buscar ajuda profissional." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "Instrumento de Rastreamento McLean para Transtorno de Personalidade Borderline",
      "desc": "Ferramenta de rastreamento de traços associados ao transtorno de personalidade borderline.",
      "instructions": "Responda sim ou não a cada uma das seguintes perguntas.",
      "questions": [
        { "title": "Você já se cortou, queimou ou machucou de propósito deliberadamente?" },
        { "title": "Você já tentou suicídio?" },
        { "title": "Você teve pelo menos dois relacionamentos (ou tentativas de relacionamento) que foram muito intensos, mas instáveis?" },
        { "title": "Sua noção de quem você é muda frequentemente de forma dramática?" },
        { "title": "Seu humor muda frequentemente de forma repentina?" },
        { "title": "Você frequentemente sente raiva intensa que é difícil de controlar?" },
        { "title": "Você frequentemente desconfia de outras pessoas?" },
        { "title": "Você frequentemente se sente irreal ou como se as coisas ao seu redor fossem irreais?" },
        { "title": "Você frequentemente se sente vazio/a?" },
        { "title": "Você frequentemente faz esforços desesperados para evitar ser abandonado/a por alguém?" }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "Sua pontuação sugere uma baixa presença de traços associados ao transtorno de personalidade borderline." },
        "moderate": { "label": "Moderada", "desc": "Sua pontuação sugere alguns traços associados ao transtorno borderline. Considere consultar um profissional." },
        "severe": {
          "label": "Significativa",
          "desc": "Sua pontuação sugere uma presença significativa de traços borderline. Recomenda-se uma avaliação profissional completa."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Escala de Estresse Percebido-10",
      "desc": "Avalia o grau em que as situações da vida são percebidas como estressantes no último mês.",
      "instructions": "As seguintes perguntas referem-se aos seus sentimentos e pensamentos durante o último mês. Indique com que frequência você se sentiu ou pensou de determinada maneira.",
      "questions": [
        { "title": "Com que frequência você ficou aborrecido/a por causa de algo que aconteceu inesperadamente?" },
        { "title": "Com que frequência você se sentiu incapaz de controlar as coisas importantes na sua vida?" },
        { "title": "Com que frequência você se sentiu nervoso/a e estressado/a?" },
        { "title": "Com que frequência você lidou com sucesso com os pequenos problemas irritantes do dia a dia?" },
        { "title": "Com que frequência você sentiu que enfrentou efetivamente mudanças importantes que estavam ocorrendo na sua vida?" },
        { "title": "Com que frequência você se sentiu confiante na sua capacidade de lidar com seus problemas pessoais?" },
        { "title": "Com que frequência você sentiu que as coisas estavam indo do seu jeito?" },
        { "title": "Com que frequência você sentiu que não conseguia lidar com todas as coisas que tinha que fazer?" },
        { "title": "Com que frequência você conseguiu controlar as irritações na sua vida?" },
        { "title": "Com que frequência você sentiu que tinha tudo sob controle?" }
      ],
      "results": {
        "minimal": { "label": "Baixo", "desc": "Seu nível de estresse percebido é baixo. Continue com suas estratégias de enfrentamento atuais." },
        "moderate": { "label": "Moderado", "desc": "Seu nível de estresse percebido é moderado. Considere incorporar técnicas de gerenciamento de estresse." },
        "severe": { "label": "Alto", "desc": "Seu nível de estresse percebido é alto. Recomenda-se buscar apoio profissional e técnicas de redução de estresse." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Escala de Autorrelato de TDAH em Adultos v1.1",
      "desc": "Ferramenta de rastreamento de sintomas de transtorno de déficit de atenção e hiperatividade em adultos.",
      "instructions": "Responda às seguintes perguntas pensando em como você se sentiu e se comportou nos últimos 6 meses.",
      "questions": [
        { "title": "Com que frequência você tem dificuldade para terminar os detalhes finais de um projeto, depois que as partes difíceis já foram feitas?" },
        { "title": "Com que frequência você tem dificuldade para colocar as coisas em ordem quando precisa fazer uma tarefa que requer organização?" },
        { "title": "Com que frequência você tem problemas para lembrar de compromissos ou obrigações?" },
        { "title": "Quando você tem uma tarefa que requer muita concentração, com que frequência você evita ou adia começá-la?" },
        { "title": "Com que frequência você mexe ou torce as mãos ou os pés quando precisa ficar sentado/a por muito tempo?" },
        { "title": "Com que frequência você se sente excessivamente ativo/a e compelido/a a fazer coisas, como se estivesse movido/a por um motor?" }
      ],
      "results": {
        "minimal": { "label": "Improvável", "desc": "Sua pontuação sugere baixa probabilidade de TDAH." },
        "moderate": { "label": "Possível", "desc": "Sua pontuação sugere alguns sintomas compatíveis com TDAH. Considere uma avaliação profissional." },
        "severe": { "label": "Provável", "desc": "Sua pontuação sugere uma alta probabilidade de sintomas de TDAH. Recomenda-se uma avaliação profissional completa." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Inventário Obsessivo-Compulsivo Revisado",
      "desc": "Avalia sintomas do transtorno obsessivo-compulsivo.",
      "instructions": "As seguintes afirmações referem-se a experiências que muitas pessoas têm no dia a dia. Indique em que grau o/a incomodaram durante o último mês.",
      "questions": [
        { "title": "Acumulei tantas coisas que elas atrapalham" },
        { "title": "Verifico as coisas mais do que o necessário" },
        { "title": "Fico incomodado/a quando os objetos não estão bem organizados" },
        { "title": "Sinto necessidade de contar enquanto faço coisas" },
        { "title": "Acho difícil tocar um objeto quando sei que foi tocado por desconhecidos ou certas pessoas" },
        { "title": "Acho difícil controlar meus próprios pensamentos" },
        { "title": "Acumulo coisas de que não preciso" },
        { "title": "Verifico repetidamente portas, janelas, gavetas, etc." },
        { "title": "Fico incomodado/a se os outros mudam a ordem em que coloquei as coisas" },
        { "title": "Sinto que devo repetir certos números" },
        { "title": "Às vezes tenho que me lavar ou me limpar simplesmente porque me sinto contaminado/a" },
        { "title": "Fico incomodado/a com pensamentos desagradáveis que vêm à minha mente contra a minha vontade" },
        { "title": "Evito jogar coisas fora porque tenho medo de precisar delas depois" },
        { "title": "Verifico repetidamente o gás, a água e as luzes depois de desligá-los" },
        { "title": "Preciso que as coisas estejam organizadas de uma maneira determinada" },
        { "title": "Sinto que existem números bons e maus" },
        { "title": "Lavo as mãos mais do que o necessário" },
        { "title": "Frequentemente tenho pensamentos horríveis e tenho dificuldade em me livrar deles" }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "Sua pontuação sugere um nível mínimo de sintomas obsessivo-compulsivos." },
        "moderate": { "label": "Moderada", "desc": "Sua pontuação sugere sintomas obsessivo-compulsivos moderados. Considere consultar um profissional." },
        "severe": { "label": "Significativa", "desc": "Sua pontuação sugere sintomas obsessivo-compulsivos significativos. Recomenda-se uma avaliação profissional." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "Lista de Verificação de Transtorno de Estresse Pós-Traumático para o DSM-5",
      "desc": "Avalia os sintomas de estresse pós-traumático no último mês.",
      "instructions": "Abaixo está uma lista de problemas que as pessoas às vezes têm em resposta a uma experiência muito estressante. Indique o quanto esse problema o/a incomodou no último mês.",
      "questions": [
        { "title": "Memórias repetidas, perturbadoras e involuntárias da experiência estressante" },
        { "title": "Sonhos repetidos e perturbadores sobre a experiência estressante" },
        { "title": "De repente sentir ou agir como se a experiência estressante estivesse acontecendo novamente" },
        { "title": "Sentir-se muito mal quando algo o/a faz lembrar da experiência estressante" },
        { "title": "Ter reações físicas fortes quando algo o/a faz lembrar da experiência estressante (por exemplo, coração acelerado, dificuldade para respirar, suor)" },
        { "title": "Evitar memórias, pensamentos ou sentimentos relacionados à experiência estressante" },
        { "title": "Evitar coisas externas que o/a fazem lembrar da experiência estressante (por exemplo, pessoas, lugares, conversas, atividades, objetos ou situações)" },
        { "title": "Dificuldade para lembrar de partes importantes da experiência estressante" },
        { "title": "Ter crenças negativas fortes sobre si mesmo/a, outras pessoas ou o mundo" },
        { "title": "Culpar a si mesmo/a ou outra pessoa pela experiência estressante ou pelo que aconteceu depois" },
        { "title": "Ter sentimentos negativos fortes como medo, horror, raiva, culpa ou vergonha" },
        { "title": "Perda de interesse em atividades de que costumava gostar" },
        { "title": "Sentir-se distante ou afastado/a de outras pessoas" },
        { "title": "Dificuldade para experimentar sentimentos positivos" },
        { "title": "Comportamento irritável, explosões de raiva ou agir de forma agressiva" },
        { "title": "Correr riscos demais ou fazer coisas que poderiam causar dano a si mesmo/a" },
        { "title": "Ficar superalerta, vigilante ou em guarda" },
        { "title": "Sentir-se sobressaltado/a ou assustar-se com facilidade" },
        { "title": "Ter dificuldade para se concentrar" },
        { "title": "Problemas para pegar no sono ou permanecer dormindo" }
      ],
      "results": {
        "minimal": { "label": "Mínima", "desc": "Sua pontuação sugere um nível baixo de sintomas de estresse pós-traumático." },
        "moderate": { "label": "Moderada", "desc": "Sua pontuação sugere sintomas moderados de estresse pós-traumático. Considere consultar um profissional." },
        "severe": { "label": "Significativa", "desc": "Sua pontuação sugere sintomas significativos de estresse pós-traumático. Recomenda-se buscar ajuda profissional." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Inventário dos Cinco Grandes Fatores de Personalidade",
      "desc": "Avalia cinco dimensões principais da personalidade: Extroversão, Amabilidade, Conscienciosidade, Neuroticismo e Abertura à experiência.",
      "instructions": "Eu me vejo como alguém que... Indique o quanto você concorda ou discorda de cada afirmação.",
      "questions": [
        { "title": "É falante" },
        { "title": "Tende a ser crítico/a" },
        { "title": "É minucioso/a no trabalho" },
        { "title": "É depressivo/a, melancólico/a" },
        { "title": "É original, tem ideias novas" },
        { "title": "É reservado/a" },
        { "title": "É generoso/a e ajuda os outros" },
        { "title": "Pode ser um pouco descuidado/a" },
        { "title": "É tranquilo/a, lida bem com o estresse" },
        { "title": "Tem curiosidade por muitas coisas diferentes" },
        { "title": "É cheio/a de energia" },
        { "title": "Inicia discussões com os outros" },
        { "title": "É um/a trabalhador/a confiável" },
        { "title": "Pode ficar tenso/a" },
        { "title": "É engenhoso/a, um/a pensador/a profundo/a" },
        { "title": "Gera muito entusiasmo" },
        { "title": "Tem tendência a perdoar" },
        { "title": "Tende a ser desorganizado/a" },
        { "title": "Preocupa-se muito" },
        { "title": "Tem uma imaginação ativa" },
        { "title": "Tende a ser calado/a" },
        { "title": "É geralmente confiável" },
        { "title": "Tende a ser preguiçoso/a" },
        { "title": "É emocionalmente estável, não se abala facilmente" },
        { "title": "É inventivo/a" },
        { "title": "Tem uma personalidade assertiva" },
        { "title": "Pode ser frio/a e distante" },
        { "title": "Persevera até terminar a tarefa" },
        { "title": "Pode ser temperamental" },
        { "title": "Valoriza experiências artísticas e estéticas" },
        { "title": "Às vezes é tímido/a, inibido/a" },
        { "title": "É atencioso/a e gentil com quase todos" },
        { "title": "Faz as coisas de maneira eficiente" },
        { "title": "Permanece calmo/a em situações tensas" },
        { "title": "Prefere um trabalho rotineiro" },
        { "title": "É sociável, extrovertido/a" },
        { "title": "Às vezes é grosseiro/a com os outros" },
        { "title": "Faz planos e os leva adiante" },
        { "title": "Fica nervoso/a com facilidade" },
        { "title": "Gosta de refletir, brincar com as ideias" },
        { "title": "Tem poucos interesses artísticos" },
        { "title": "Gosta de cooperar com os outros" },
        { "title": "Distrai-se facilmente" },
        { "title": "É sofisticado/a em arte, música ou literatura" }
      ],
      "dimensionNames": {
        "E": "Extroversão",
        "A": "Amabilidade",
        "C": "Conscienciosidade",
        "N": "Neuroticismo",
        "O": "Abertura à experiência"
      },
      "dimensionDescs": {
        "E": {
          "low": "Você tende a ser reservado/a, tranquilo/a e a preferir atividades solitárias.",
          "mid": "Você mostra um equilíbrio entre sociabilidade e necessidade de tempo sozinho/a.",
          "high": "Você tende a ser sociável, enérgico/a e a gostar de interagir com os outros."
        },
        "A": {
          "low": "Você tende a ser mais competitivo/a e direto/a em suas interações.",
          "mid": "Você mostra um equilíbrio entre cooperação e assertividade.",
          "high": "Você tende a ser cooperativo/a, compassivo/a e atencioso/a com os outros."
        },
        "C": {
          "low": "Você tende a ser mais flexível e espontâneo/a em sua abordagem.",
          "mid": "Você mostra um equilíbrio entre estrutura e flexibilidade.",
          "high": "Você tende a ser organizado/a, disciplinado/a e orientado/a a objetivos."
        },
        "N": {
          "low": "Você tende a ser emocionalmente estável e calmo/a diante de situações estressantes.",
          "mid": "Você experimenta uma gama normal de emoções positivas e negativas.",
          "high": "Você tende a experimentar mais emoções negativas e maior sensibilidade ao estresse."
        },
        "O": {
          "low": "Você tende a preferir o convencional e o prático.",
          "mid": "Você mostra um equilíbrio entre curiosidade e interesses práticos.",
          "high": "Você tende a ser criativo/a, curioso/a e aberto/a a novas experiências."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Indicador de Tipo de Personalidade Myers-Briggs",
      "desc": "Identifica preferências de personalidade em quatro dimensões: Energia, Percepção, Tomada de decisões e Estilo de vida.",
      "instructions": "Selecione a opção que melhor o/a descreve na maioria das situações. Não há respostas certas ou erradas.",
      "questions": [
        { "title": "Em reuniões sociais, você prefere interagir com muitas pessoas, incluindo desconhecidos" },
        { "title": "Você tende a ser mais realista do que imaginativo/a" },
        { "title": "É pior ser injusto do que impiedoso" },
        { "title": "Normalmente você prefere fazer as coisas de acordo com um plano estabelecido" },
        { "title": "Depois de passar tempo com um grupo, você se sente energizado/a" },
        { "title": "Você prefere focar nos detalhes específicos em vez do panorama geral" },
        { "title": "Ao tomar decisões, você considera primeiro os sentimentos das pessoas" },
        { "title": "Você gosta de ter as coisas decididas e resolvidas" },
        { "title": "Você prefere iniciar conversas com pessoas novas" },
        { "title": "Você confia mais na sua experiência do que na sua intuição" },
        { "title": "Você valoriza mais a compaixão do que a verdade objetiva" },
        { "title": "Você prefere seguir um horário rigoroso" },
        { "title": "Você acha fácil conversar com desconhecidos" },
        { "title": "Você presta mais atenção ao que é real e atual do que ao que poderia ser" },
        { "title": "Você se importa mais com a harmonia do grupo do que com resultados objetivos" },
        { "title": "Você prefere terminar um projeto antes de começar outro" },
        { "title": "Você precisa de tempo sozinho/a para recarregar as energias" },
        { "title": "Você gosta de pensar em conceitos abstratos e teorias" },
        { "title": "Ao resolver problemas, você prioriza a lógica sobre os sentimentos" },
        { "title": "Você prefere manter suas opções abertas em vez de se comprometer" },
        { "title": "No seu tempo livre, você prefere estar com amigos" },
        { "title": "Você se interessa mais pelas possibilidades futuras do que pelos fatos presentes" },
        { "title": "Você prefere tomar decisões baseadas em princípios lógicos" },
        { "title": "Você se sente mais confortável com estrutura e rotinas" },
        { "title": "Você é a alma da festa" },
        { "title": "Você se sente mais atraído/a por significados simbólicos do que por fatos literais" },
        { "title": "Em um conflito, você busca a solução mais justa mesmo que alguém fique chateado" },
        { "title": "Você gosta de planejar suas férias com antecedência e em detalhe" },
        { "title": "Você se sente confortável sendo o centro das atenções" },
        { "title": "Você gosta mais de explorar ideias novas do que de aplicar métodos comprovados" },
        { "title": "Você tende a decidir com a cabeça mais do que com o coração" },
        { "title": "Você prefere a espontaneidade ao planejamento" },
        { "title": "Você acha cansativo passar muito tempo sozinho/a" },
        { "title": "Você prefere aprender conceitos teóricos antes de ver exemplos práticos" },
        { "title": "Você considera que a diplomacia é mais importante do que a franqueza" },
        { "title": "Você se sente desconfortável quando os planos mudam de repente" },
        { "title": "Você fala mais do que escuta nas conversas" },
        { "title": "Você confia nos seus palpites e intuições" },
        { "title": "Você valoriza mais a eficiência do que a cooperação" },
        { "title": "Você gosta de improvisar e se adaptar conforme as coisas acontecem" }
      ],
      "typeDescriptions": {
        "ISTJ": "Responsável e confiável. Você valoriza a tradição, a lealdade e a ordem. É meticuloso/a e trabalha de maneira constante para cumprir com seus deveres.",
        "ISFJ": "Protetor/a e dedicado/a. Você é gentil, responsável e atento/a às necessidades dos outros. Valoriza a harmonia e a estabilidade.",
        "INFJ": "Idealista e visionário/a. Você tem uma compreensão profunda das pessoas e um forte desejo de ajudar os outros a alcançar seu potencial.",
        "INTJ": "Estrategista e independente. Você tem uma mente analítica e uma visão clara de como melhorar as coisas. Valoriza a competência e o conhecimento.",
        "ISTP": "Prático/a e observador/a. Você gosta de entender como as coisas funcionam e de resolver problemas de maneira eficiente.",
        "ISFP": "Artista e sensível. Você valoriza a autenticidade e a harmonia. Aprecia a beleza e tem um forte senso estético.",
        "INFP": "Idealista e empático/a. Você tem fortes valores pessoais e um desejo de tornar o mundo um lugar melhor.",
        "INTP": "Lógico/a e criativo/a. Você gosta de analisar sistemas complexos e gerar ideias inovadoras.",
        "ESTP": "Enérgico/a e pragmático/a. Você gosta de ação e vive no momento presente. É habilidoso/a em resolver problemas práticos.",
        "ESFP": "Espontâneo/a e entusiasta. Você aproveita a vida e contagia os outros com sua alegria. É generoso/a e otimista.",
        "ENFP": "Entusiasta e criativo/a. Você vê possibilidades em todos os lugares e tem uma energia contagiante para inspirar os outros.",
        "ENTP": "Inovador/a e desafiador/a. Você gosta de debates intelectuais e busca constantemente novas ideias e possibilidades.",
        "ESTJ": "Organizador/a e decidido/a. Você valoriza a eficiência e a ordem. É um/a líder e administrador/a nato/a.",
        "ESFJ": "Sociável e prestativo/a. Você se preocupa profundamente com os outros e trabalha para criar harmonia no seu ambiente.",
        "ENFJ": "Carismático/a e empático/a. Você inspira os outros e tem uma habilidade natural para liderar com compaixão.",
        "ENTJ": "Líder nato/a e estratégico/a. Você é decidido/a, eficiente e gosta de desafios organizacionais e de liderança."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Questionário de Saúde do Paciente-9",
      "desc": "Rastreamento rápido de depressão amplamente utilizado na atenção primária. 9 perguntas.",
      "instructions": "Nas últimas 2 semanas, com que frequência você foi incomodado/a pelos seguintes problemas?",
      "sharedOptions": ["Nunca","Vários dias","Mais da metade dos dias","Quase todos os dias"],
      "questions": [
        { "title": "Pouco interesse ou prazer em fazer as coisas" },
        { "title": "Sentir-se desanimado/a, deprimido/a ou sem esperança" },
        { "title": "Problemas para dormir ou dormir demais" },
        { "title": "Sentir-se cansado/a ou com pouca energia" },
        { "title": "Pouco apetite ou comer em excesso" },
        { "title": "Sentir-se mal consigo mesmo/a" },
        { "title": "Dificuldade para se concentrar" },
        { "title": "Mover-se ou falar tão lentamente que os outros notam, ou o contrário" },
        { "title": "Pensamentos de se machucar ou de que estaria melhor morto/a" }
      ],
      "results": {
        "minima": { "label": "Mínima", "desc": "Não são detectados sintomas significativos de depressão. Continue cuidando do seu bem-estar emocional." },
        "leve": { "label": "Leve", "desc": "São detectados sintomas leves de depressão. Considere monitorar seu humor e adotar hábitos saudáveis." },
        "moderada": { "label": "Moderada", "desc": "São detectados sintomas moderados de depressão. Recomenda-se consultar um profissional de saúde mental." },
        "moderadamente_grave": {
          "label": "Moderadamente grave",
          "desc": "São detectados sintomas moderadamente graves de depressão. É importante buscar ajuda profissional o mais rápido possível."
        },
        "grave": { "label": "Grave", "desc": "São detectados sintomas graves de depressão. Recomenda-se buscar atendimento profissional de forma urgente." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Teste de Identificação de Transtornos por Consumo de Álcool",
      "desc": "Desenvolvido pela OMS para detectar consumo problemático de álcool.",
      "instructions": "Responda às seguintes perguntas sobre seu consumo de álcool. Seja o mais honesto(a) possível.",
      "questions": [
        {
          "title": "Com que frequência você consome bebidas alcoólicas?",
          "options": ["Nunca","Uma ou menos vezes por mês","2 a 4 vezes por mês","2 a 3 vezes por semana","4 ou mais vezes por semana"]
        },
        {
          "title": "Quantas doses de bebidas alcoólicas você costuma consumir em um dia normal?",
          "options": ["1 ou 2","3 ou 4","5 ou 6","7 a 9","10 ou mais"]
        },
        {
          "title": "Com que frequência você bebe 6 ou mais doses de bebidas alcoólicas em uma única ocasião?",
          "options": ["Nunca","Menos de uma vez por mês","Mensalmente","Semanalmente","Diariamente ou quase diariamente"]
        },
        {
          "title": "Com que frequência no último ano você foi incapaz de parar de beber uma vez que havia começado?",
          "options": ["Nunca","Menos de uma vez por mês","Mensalmente","Semanalmente","Diariamente ou quase diariamente"]
        },
        {
          "title": "Com que frequência no último ano você não conseguiu fazer o que se esperava de você porque havia bebido?",
          "options": ["Nunca","Menos de uma vez por mês","Mensalmente","Semanalmente","Diariamente ou quase diariamente"]
        },
        {
          "title": "Com que frequência no último ano você precisou beber em jejum para se recuperar depois de ter bebido muito no dia anterior?",
          "options": ["Nunca","Menos de uma vez por mês","Mensalmente","Semanalmente","Diariamente ou quase diariamente"]
        },
        {
          "title": "Com que frequência no último ano você teve arrependimentos ou sentimentos de culpa depois de ter bebido?",
          "options": ["Nunca","Menos de uma vez por mês","Mensalmente","Semanalmente","Diariamente ou quase diariamente"]
        },
        {
          "title": "Com que frequência no último ano você não conseguiu se lembrar do que aconteceu na noite anterior porque havia bebido?",
          "options": ["Nunca","Menos de uma vez por mês","Mensalmente","Semanalmente","Diariamente ou quase diariamente"]
        },
        {
          "title": "Você ou outra pessoa se feriram porque você havia bebido?",
          "options": ["Não","Sim, mas não no último ano","Sim, no último ano"]
        },
        {
          "title": "Algum familiar, amigo, médico ou profissional de saúde demonstrou preocupação com seu consumo de álcool ou sugeriu que você parasse de beber?",
          "options": ["Não","Sim, mas não no último ano","Sim, no último ano"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Baixo risco", "desc": "Seu consumo de álcool está dentro dos limites de baixo risco. Mantenha hábitos saudáveis." },
        "riesgo_moderado": { "label": "Risco moderado", "desc": "Seu consumo de álcool apresenta um risco moderado. Considere reduzir seu consumo e consultar um profissional." },
        "riesgo_alto": { "label": "Risco alto", "desc": "Seu consumo de álcool apresenta um risco alto. Recomenda-se buscar orientação profissional para reduzir o consumo." },
        "posible_dependencia": {
          "label": "Possível dependência",
          "desc": "Os resultados sugerem uma possível dependência ao álcool. É importante buscar ajuda profissional especializada."
        }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Índice de Gravidade da Insônia",
      "desc": "Avalia a natureza, gravidade e impacto da insônia nas últimas duas semanas.",
      "instructions": "Avalie a gravidade dos seus problemas de sono nas últimas 2 semanas.",
      "questions": [
        {
          "title": "Dificuldade para adormecer",
          "options": ["Nenhuma","Leve","Moderada","Grave","Muito grave"]
        },
        {
          "title": "Dificuldade para manter o sono",
          "options": ["Nenhuma","Leve","Moderada","Grave","Muito grave"]
        },
        {
          "title": "Acordar muito cedo pela manhã",
          "options": ["Nenhuma","Leve","Moderada","Grave","Muito grave"]
        },
        {
          "title": "Quão satisfeito(a) você está com seu padrão de sono atual?",
          "options": ["Muito satisfeito(a)","Satisfeito(a)","Moderadamente satisfeito(a)","Insatisfeito(a)","Muito insatisfeito(a)"]
        },
        {
          "title": "Em que medida você percebe que seu problema de sono interfere no seu funcionamento diário?",
          "options": ["Nada","Um pouco","Algo","Muito","Muitíssimo"]
        },
        {
          "title": "Em que medida você acredita que os outros percebem seu problema de sono na sua qualidade de vida?",
          "options": ["Nada","Um pouco","Algo","Muito","Muitíssimo"]
        },
        {
          "title": "Quão preocupado(a) você está com seu problema de sono atual?",
          "options": ["Nada","Um pouco","Algo","Muito","Muitíssimo"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "Sem insônia clínica", "desc": "Não são detectados problemas clínicos de insônia. Seu sono parece estar dentro dos parâmetros normais." },
        "subclinico": {
          "label": "Insônia subclínica",
          "desc": "São detectados alguns sintomas de insônia que não atingem níveis clínicos. Considere melhorar sua higiene do sono."
        },
        "clinico_moderado": { "label": "Insônia clínica moderada", "desc": "É detectada insônia clínica de gravidade moderada. Recomenda-se consultar um profissional de saúde." },
        "clinico_grave": {
          "label": "Insônia clínica grave",
          "desc": "É detectada insônia clínica grave. É importante procurar atendimento profissional para tratar os problemas de sono."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Teste de Atitudes Alimentares-26",
      "desc": "Detecta atitudes e comportamentos característicos de transtornos alimentares.",
      "instructions": "Indique com que frequência você apresenta cada uma das seguintes atitudes ou comportamentos. Responda com honestidade.",
      "sharedOptions": ["Nunca","Raramente","Às vezes","Frequentemente","Muito frequentemente","Sempre"],
      "questions": [
        { "title": "Aterroriza-me a ideia de ter excesso de peso" },
        { "title": "Evito comer quando tenho fome" },
        { "title": "Preocupo-me com a comida" },
        { "title": "Tive episódios de compulsão alimentar nos quais sinto que não consigo parar" },
        { "title": "Corto minha comida em pedaços pequenos" },
        { "title": "Conheço as calorias dos alimentos que como" },
        { "title": "Evito especialmente alimentos ricos em carboidratos" },
        { "title": "Sinto que os outros prefeririam que eu comesse mais" },
        { "title": "Vomito depois de comer" },
        { "title": "Sinto-me muito culpado/a depois de comer" },
        { "title": "Preocupo-me com o desejo de ser mais magro/a" },
        { "title": "Penso em queimar calorias quando faço exercício" },
        { "title": "Os outros pensam que estou muito magro/a" },
        { "title": "Preocupo-me com a ideia de ter gordura no corpo" },
        { "title": "Demoro mais que os outros para comer" },
        { "title": "Evito alimentos que contenham açúcar" },
        { "title": "Como alimentos dietéticos" },
        { "title": "Sinto que a comida controla minha vida" },
        { "title": "Mostro autocontrole em relação à comida" },
        { "title": "Sinto que os outros me pressionam para que eu coma" },
        { "title": "Dedico muito tempo e pensamento à comida" },
        { "title": "Sinto-me desconfortável depois de comer doces" },
        { "title": "Estou fazendo dieta" },
        { "title": "Gosto de sentir o estômago vazio" },
        { "title": "Gosto de experimentar comidas novas e saborosas" },
        { "title": "Tenho o impulso de vomitar depois das refeições" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Baixo risco", "desc": "Não são detectadas atitudes alimentares de risco significativo. Mantenha uma relação saudável com a comida." },
        "riesgo_significativo": {
          "label": "Risco significativo",
          "desc": "São detectadas atitudes alimentares que poderiam indicar um transtorno alimentar. Recomenda-se consultar um profissional de saúde especializado."
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Questionário de Transtornos do Humor",
      "desc": "Ferramenta de rastreamento rápido para transtorno bipolar e espectro bipolar.",
      "instructions": "Responda às seguintes perguntas sobre experiências que você teve em algum momento da sua vida.",
      "questions": [
        {
          "title": "Você já teve um período em que se sentiu tão bem ou tão hiperativo/a que outras pessoas pensavam que você não era você?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que estava tão irritável que gritava com as pessoas ou iniciava brigas?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que se sentiu muito mais seguro/a de si mesmo/a do que o habitual?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que dormia muito menos do que o habitual e não sentia falta disso?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que era muito mais falante ou falava mais rápido do que o habitual?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que os pensamentos passavam rapidamente pela sua mente?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que se distraía tão facilmente que tinha dificuldade para se concentrar?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que tinha muito mais energia do que o habitual?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que era muito mais ativo/a ou fazia muito mais coisas do que o habitual?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que era muito mais sociável ou extrovertido/a do que o habitual?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que estava muito mais interessado/a em sexo do que o habitual?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que fazia coisas incomuns para você ou que outros consideravam excessivas ou arriscadas?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Você já teve um período em que gastava dinheiro de forma que lhe causou problemas ou à sua família?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Várias dessas experiências ocorreram durante o mesmo período de tempo?",
          "options": ["Não","Sim"]
        },
        {
          "title": "Se você respondeu SIM a alguma pergunta anterior, quanto problema elas lhe causaram?",
          "options": ["Nenhum problema","Problema menor","Problema moderado","Problema grave"]
        }
      ],
      "results": {
        "positive": {
          "label": "Rastreamento positivo para transtorno bipolar",
          "desc": "Suas respostas sugerem a possibilidade de um transtorno do espectro bipolar. Este resultado NÃO é um diagnóstico. Recomenda-se enfaticamente uma avaliação profissional completa com um psiquiatra."
        },
        "negative": {
          "label": "Rastreamento negativo",
          "desc": "Suas respostas não sugerem a presença de um transtorno do espectro bipolar de acordo com este instrumento de rastreamento. Lembre-se que este questionário é apenas uma ferramenta de rastreamento e não substitui uma avaliação profissional."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Inventário de Fobia Social",
      "desc": "Avalia a presença e a gravidade de sintomas de ansiedade social.",
      "instructions": "Indique o quanto os seguintes problemas te incomodaram na última semana.",
      "sharedOptions": ["Nada","Um pouco","Razoavelmente","Muito","Extremamente"],
      "questions": [
        { "title": "Tenho medo de pessoas com autoridade." },
        { "title": "Me incomoda corar na frente das pessoas." },
        { "title": "Festas e eventos sociais me assustam." },
        { "title": "Evito conversar com pessoas que não conheço." },
        { "title": "Tenho muito medo de ser criticado(a)." },
        { "title": "O medo de sentir vergonha me faz evitar fazer coisas ou conversar com pessoas." },
        { "title": "Suar na frente das pessoas me causa angústia." },
        { "title": "Evito ir a festas." },
        { "title": "Evito atividades em que sou o centro das atenções." },
        { "title": "Conversar com desconhecidos me assusta." },
        { "title": "Temo ter que falar em público." },
        { "title": "Faria qualquer coisa para evitar ser criticado(a)." },
        { "title": "Palpitações cardíacas me incomodam quando estou com pessoas." },
        { "title": "Tenho medo de fazer coisas quando as pessoas podem estar me observando." },
        { "title": "Meus maiores medos são passar vergonha ou fazer papel de ridículo." },
        { "title": "Evito conversar com qualquer pessoa com autoridade." },
        { "title": "Tremer ou me sacudir na frente de outros me causa angústia." }
      ],
      "results": {
        "low": { "label": "Ansiedade social baixa", "desc": "Sua pontuação indica um nível baixo de ansiedade social." },
        "mild": { "label": "Ansiedade social leve", "desc": "Sua pontuação sugere um nível leve de ansiedade social." },
        "moderate": {
          "label": "Ansiedade social moderada",
          "desc": "Sua pontuação indica um nível moderado de ansiedade social. Buscar apoio profissional pode ser benéfico."
        },
        "severe": { "label": "Ansiedade social grave", "desc": "Sua pontuação sugere um nível grave de ansiedade social. Recomenda-se buscar ajuda profissional." },
        "very_severe": {
          "label": "Ansiedade social muito grave",
          "desc": "Sua pontuação indica um nível muito grave de ansiedade social. Recomenda-se veementemente buscar ajuda profissional."
        }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "Índice de Bem-Estar WHO-5",
      "desc": "Medida breve de bem-estar emocional desenvolvida pela OMS. Apenas 5 perguntas.",
      "instructions": "Indique como você se sentiu nas últimas duas semanas.",
      "sharedOptions": [
        "Em nenhum momento",
        "De vez em quando",
        "Menos da metade do tempo",
        "Mais da metade do tempo",
        "A maior parte do tempo",
        "O tempo todo"
      ],
      "questions": [
        { "title": "Eu me senti alegre e de bom humor." },
        { "title": "Eu me senti tranquilo(a) e relaxado(a)." },
        { "title": "Eu me senti ativo(a) e com energia." },
        { "title": "Eu acordei me sentindo revigorado(a) e descansado(a)." },
        { "title": "Minha vida diária tem sido cheia de coisas que me interessam." }
      ],
      "results": {
        "low": { "label": "Bem-estar baixo", "desc": "Indica um nível baixo de bem-estar emocional. Recomenda-se buscar uma avaliação profissional." },
        "reduced": { "label": "Bem-estar reduzido", "desc": "Indica um bem-estar emocional reduzido. Considere conversar com um profissional de saúde mental." },
        "moderate": { "label": "Bem-estar moderado", "desc": "Indica um nível moderado de bem-estar emocional." },
        "high": { "label": "Bem-estar alto", "desc": "Indica um alto nível de bem-estar emocional." }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Escala de Autoestima de Rosenberg",
      "desc": "A medida mais utilizada de autoestima global. Avalia sentimentos de valor próprio.",
      "instructions": "Indique o seu grau de concordância com cada uma das seguintes afirmações.",
      "sharedOptions": ["Discordo totalmente","Discordo","Concordo","Concordo totalmente"],
      "questions": [
        { "title": "Sinto que sou uma pessoa digna de apreço, pelo menos tanto quanto os outros." },
        { "title": "Sinto que tenho qualidades positivas." },
        { "title": "Em geral, inclino-me a pensar que sou um/a fracassado/a." },
        { "title": "Sou capaz de fazer as coisas tão bem quanto a maioria das pessoas." },
        { "title": "Sinto que não tenho muito do que me orgulhar." },
        { "title": "Tenho uma atitude positiva em relação a mim mesmo/a." },
        { "title": "Em geral, estou satisfeito/a comigo mesmo/a." },
        { "title": "Gostaria de poder ter mais respeito por mim mesmo/a." },
        { "title": "Às vezes sinto-me verdadeiramente inútil." },
        { "title": "Às vezes penso que não sou bom/boa em nada." }
      ],
      "results": {
        "low": { "label": "Baixa autoestima", "desc": "Sua pontuação sugere um baixo nível de autoestima. Recomenda-se procurar apoio profissional." },
        "normal": { "label": "Autoestima normal", "desc": "Sua pontuação indica um nível normal e saudável de autoestima." },
        "high": { "label": "Alta autoestima", "desc": "Sua pontuação indica um alto nível de autoestima." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Quociente do Espectro Autista — 10 itens",
      "desc": "Breve triagem de traços associados ao espectro autista. Desenvolvido por Baron-Cohen et al.",
      "instructions": "Leia cada afirmação com atenção e indique seu grau de concordância ou discordância.",
      "sharedOptions": [
            "Concordo totalmente",
            "Concordo levemente",
            "Discordo levemente",
            "Discordo totalmente"
      ],
      "questions": [
            {
                  "title": "Frequentemente percebo sons pequenos que outros não notam"
            },
            {
                  "title": "Quando estou lendo uma história, tenho dificuldade em entender as intenções dos personagens"
            },
            {
                  "title": "Acho fácil 'ler nas entrelinhas' quando alguém está falando comigo"
            },
            {
                  "title": "Geralmente me concentro mais no cenário geral, em vez de nos pequenos detalhes"
            },
            {
                  "title": "Sei dizer quando alguém que está me ouvindo está ficando entediado"
            },
            {
                  "title": "Acho fácil fazer mais de uma coisa ao mesmo tempo"
            },
            {
                  "title": "Acho fácil entender o que alguém está pensando ou sentindo apenas olhando para o rosto dessa pessoa"
            },
            {
                  "title": "Se houver uma interrupção, consigo voltar rapidamente ao que estava fazendo"
            },
            {
                  "title": "Gosto de coletar informações sobre categorias de coisas"
            },
            {
                  "title": "Acho difícil entender as intenções das pessoas"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Poucos traços autistas",
                  "desc": "Sua pontuação não sugere traços significativos do espectro autista. No entanto, se tiver preocupações, consulte um profissional."
            },
            "moderado": {
                  "label": "Alguns traços autistas",
                  "desc": "Sua pontuação indica alguns traços associados ao espectro autista, embora abaixo do limiar de encaminhamento clínico (≥6)."
            },
            "alto": {
                  "label": "Traços autistas significativos",
                  "desc": "Sua pontuação excede o limiar de encaminhamento (≥6). Recomenda-se uma avaliação diagnóstica abrangente com um profissional especializado."
            },
            "muy_alto": {
                  "label": "Traços autistas muito significativos",
                  "desc": "Sua pontuação é alta. É fortemente recomendado buscar uma avaliação diagnóstica abrangente com um especialista em transtornos do espectro autista."
            }
      }
},
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Quociente do Espectro Autista — 50 itens",
      "desc": "Avaliação abrangente de traços do espectro autista em cinco domínios: habilidades sociais, mudança de atenção, atenção a detalhes, comunicação e imaginação.",
      "instructions": "Leia cada afirmação com atenção e indique seu grau de concordância ou discordância. Não há respostas certas ou erradas.",
      "questions": [
            {
                  "title": "Prefiro fazer coisas com outras pessoas em vez de sozinho"
            },
            {
                  "title": "Prefiro fazer as coisas sempre da mesma maneira"
            },
            {
                  "title": "Se tento imaginar algo, acho muito fácil criar uma imagem na minha mente"
            },
            {
                  "title": "Frequentemente fico tão absorvido em uma coisa que perco de vista outras coisas"
            },
            {
                  "title": "Frequentemente percebo sons pequenos que outros não notam"
            },
            {
                  "title": "Geralmente noto placas de carro ou sequências semelhantes de informações"
            },
            {
                  "title": "Outras pessoas frequentemente me dizem que o que falei foi indelicado, mesmo que eu ache que foi educado"
            },
            {
                  "title": "Quando estou lendo uma história, consigo imaginar facilmente como os personagens se parecem"
            },
            {
                  "title": "Sou fascinado por datas"
            },
            {
                  "title": "Em um grupo social, consigo acompanhar facilmente várias conversas diferentes"
            },
            {
                  "title": "Acho situações sociais fáceis"
            },
            {
                  "title": "Tendo a notar detalhes que outros não percebem"
            },
            {
                  "title": "Prefiro ir a uma biblioteca do que a uma festa"
            },
            {
                  "title": "Acho fácil inventar histórias"
            },
            {
                  "title": "Sinto-me mais atraído por pessoas do que por coisas"
            },
            {
                  "title": "Tendo a ter interesses muito fortes que me deixam chateado se não puder perseguir"
            },
            {
                  "title": "Gosto de bate-papo social"
            },
            {
                  "title": "Quando falo, nem sempre é fácil para os outros intervirem"
            },
            {
                  "title": "Sou fascinado por números"
            },
            {
                  "title": "Quando estou lendo uma história, tenho dificuldade em entender as intenções dos personagens"
            },
            {
                  "title": "Não gosto particularmente de ler ficção"
            },
            {
                  "title": "Acho difícil fazer novos amigos"
            },
            {
                  "title": "Noto padrões em coisas o tempo todo"
            },
            {
                  "title": "Prefiro ir ao teatro do que a um museu"
            },
            {
                  "title": "Não me incomoda se minha rotina diária for perturbada"
            },
            {
                  "title": "Frequentemente não sei como manter uma conversa"
            },
            {
                  "title": "Acho fácil 'ler nas entrelinhas' quando alguém está falando comigo"
            },
            {
                  "title": "Geralmente me concentro mais no cenário geral, em vez de nos pequenos detalhes"
            },
            {
                  "title": "Não sou muito bom em lembrar números de telefone"
            },
            {
                  "title": "Geralmente não noto pequenas mudanças em uma situação ou na aparência de uma pessoa"
            },
            {
                  "title": "Sei dizer quando alguém que está me ouvindo está ficando entediado"
            },
            {
                  "title": "Acho fácil fazer mais de uma coisa ao mesmo tempo"
            },
            {
                  "title": "Quando falo ao telefone, não tenho certeza quando é minha vez de falar"
            },
            {
                  "title": "Gosto de fazer coisas espontaneamente"
            },
            {
                  "title": "Frequentemente sou o último a entender a piada"
            },
            {
                  "title": "Acho fácil entender o que alguém está pensando ou sentindo apenas olhando para o rosto dessa pessoa"
            },
            {
                  "title": "Se houver uma interrupção, consigo voltar rapidamente ao que estava fazendo"
            },
            {
                  "title": "Sou bom em bate-papo social"
            },
            {
                  "title": "As pessoas frequentemente me dizem que fico repetindo a mesma coisa"
            },
            {
                  "title": "Quando era jovem, gostava de brincar de faz de conta com outras crianças"
            },
            {
                  "title": "Gosto de coletar informações sobre categorias de coisas"
            },
            {
                  "title": "Acho difícil imaginar como seria ser outra pessoa"
            },
            {
                  "title": "Gosto de planejar cuidadosamente qualquer atividade em que participo"
            },
            {
                  "title": "Gosto de ocasiões sociais"
            },
            {
                  "title": "Acho difícil entender as intenções das pessoas"
            },
            {
                  "title": "Novas situações me deixam ansioso"
            },
            {
                  "title": "Gosto de conhecer novas pessoas"
            },
            {
                  "title": "Sou um bom diplomata"
            },
            {
                  "title": "Não sou muito bom em lembrar datas de aniversário das pessoas"
            },
            {
                  "title": "Acho muito fácil brincar com crianças em jogos que envolvem faz de conta"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Poucos traços autistas",
                  "desc": "Sua pontuação está dentro da faixa típica da população em geral. Não são sugeridos traços significativos do espectro autista."
            },
            "leve": {
                  "label": "Traços autistas leves",
                  "desc": "Sua pontuação indica alguns traços do espectro autista, dentro da média. Muitas pessoas sem diagnóstico pontuam nessa faixa."
            },
            "moderado": {
                  "label": "Traços autistas moderados",
                  "desc": "Sua pontuação excede o limiar de 26 e sugere traços autistas acima da média. Considere consultar um profissional se enfrentar dificuldades."
            },
            "alto": {
                  "label": "Traços autistas significativos",
                  "desc": "Sua pontuação excede o limiar clínico de 32. 80% das pessoas diagnosticadas com autismo pontuam nessa faixa. Recomenda-se uma avaliação diagnóstica."
            },
            "muy_alto": {
                  "label": "Traços autistas muito significativos",
                  "desc": "Sua pontuação é muito alta e sugere fortemente a presença de traços do espectro autista. Uma avaliação diagnóstica abrangente é fortemente recomendada."
            }
      }
},
    "triage": {
      "name": "Guia",
      "abbr": "Guia",
      "fullName": "Questionário de Orientação Inicial",
      "desc": "Não sabe por onde começar? Este questionário rápido recomenda quais avaliações são mais relevantes para você.",
      "instructions": "Responda com honestidade às seguintes perguntas sobre como você se sentiu ultimamente. Ao final, você receberá recomendações personalizadas sobre quais avaliações realizar.",
      "sharedOptions": ["Nada","Um pouco","Moderadamente","Bastante","Muito"],
      "questions": [
        { "title": "Tenho me sentido triste, desanimado(a) ou sem esperança" },
        { "title": "Perdi o interesse ou prazer nas coisas que antes eu gostava" },
        { "title": "Sinto-me sem energia ou fatigado(a) na maior parte do tempo" },
        { "title": "Sinto-me nervoso(a), ansioso(a) ou com os nervos à flor da pele" },
        { "title": "Tenho preocupações excessivas que não consigo controlar" },
        { "title": "Experimento sintomas físicos de ansiedade (palpitações, sudorese, tremores)" },
        { "title": "Evito situações sociais por medo de ser julgado(a) ou fazer papel de bobo(a)" },
        { "title": "Tenho muita dificuldade em falar em público ou com desconhecidos" },
        { "title": "Sinto que as situações da minha vida me sobrecarregam" },
        { "title": "Tenho dificuldade em lidar com os problemas do dia a dia" },
        { "title": "Vivi uma experiência traumática que ainda me afeta" },
        { "title": "Tenho lembranças perturbadoras ou pesadelos sobre eventos passados" },
        { "title": "Tenho dificuldade em adormecer ou em manter o sono" },
        { "title": "A qualidade do meu sono afeta meu funcionamento diário" },
        { "title": "Preocupo-me excessivamente com meu peso ou com minha imagem corporal" },
        { "title": "Tenho uma relação problemática com a comida (restrições, compulsões, purgas)" },
        { "title": "Meu consumo de álcool me preocupa ou causou problemas" },
        { "title": "Tenho dificuldade em me concentrar, organizar tarefas ou terminar o que começo" },
        { "title": "Sou excessivamente inquieto(a) ou tenho dificuldade em ficar parado(a)" },
        { "title": "Tenho pensamentos intrusivos repetitivos que me causam angústia" },
        { "title": "Sinto a necessidade de repetir certas ações ou rituais" },
        { "title": "Tive períodos de euforia ou energia excessiva seguidos de períodos de depressão" },
        { "title": "Tive episódios em que me senti inusitadamente hiperativo(a) ou impulsivo(a)" },
        { "title": "Meus relacionamentos interpessoais são intensos e instáveis" },
        { "title": "Minhas emoções mudam rapidamente e tenho dificuldade em regulá-las" }
      ,
        { "title": "Tenho dificuldade em entender as intenções ou emoções dos outros" },
        { "title": "Prefiro rotinas e me sinto desconfortável quando elas são alteradas" }
      ],
      "domainNames": {
        "Estado de ánimo": "Humor",
        "Ansiedad": "Ansiedade",
        "Ansiedad social": "Ansiedade social",
        "Estrés": "Estresse",
        "Trauma": "Trauma",
        "Sueño": "Sono",
        "Alimentación": "Alimentação",
        "Alcohol": "Álcool",
        "Atención y concentración": "Atenção e concentração",
        "Obsesiones y compulsiones": "Obsessões e compulsões",
        "Cambios de ánimo": "Mudanças de humor",
        "Regulación emocional": "Regulação emocional"
      ,
        "Rasgos del espectro autista": "Traços do espectro autista"
      },
      "domainReasons": {
        "Estado de ánimo": "Pontuação elevada em indicadores de humor",
        "Ansiedad": "Pontuação elevada em indicadores de ansiedade",
        "Ansiedad social": "Pontuação elevada em indicadores de ansiedade social",
        "Estrés": "Pontuação elevada em indicadores de estresse percebido",
        "Trauma": "Pontuação elevada em indicadores de trauma e estresse pós-traumático",
        "Sueño": "Pontuação elevada em indicadores de problemas de sono",
        "Alimentación": "Pontuação elevada em indicadores de comportamento alimentar",
        "Alcohol": "Pontuação elevada em indicadores de consumo de álcool",
        "Atención y concentración": "Pontuação elevada em indicadores de desatenção e hiperatividade",
        "Obsesiones y compulsiones": "Pontuação elevada em indicadores obsessivo-compulsivos",
        "Cambios de ánimo": "Pontuação elevada em indicadores de mudanças de humor",
        "Regulación emocional": "Pontuação elevada em indicadores de instabilidade emocional e interpessoal"
      ,
        "Rasgos del espectro autista": "Pontuação alta em indicadores de traços do espectro autista"
      },
      "results": {
        "triage_label": "Suas avaliações recomendadas",
        "triage_desc": "Com base nas suas respostas, recomendamos as seguintes avaliações:",
        "suggested_wellbeing": "Avaliação geral de bem-estar recomendada para todos",
        "suggested_personality": "Avaliação de personalidade recomendada como complemento"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — Inventário de Personalidade de 300 itens",
      "desc": "A avaliação de personalidade mais completa disponível. Mede 30 facetas agrupadas nos 5 grandes traços com alta precisão.",
      "instructions": "Indique o quanto cada afirmação descreve com precisão como você geralmente é. Não há respostas certas ou erradas. Responda com honestidade.",
      "sharedOptions": ["Muito impreciso","Impreciso","Nem preciso nem impreciso","Preciso","Muito preciso"],
      "questions": [
        { "title": "Eu me preocupo com as coisas." },
        { "title": "Estou relaxado(a) a maior parte do tempo." },
        { "title": "Temo o pior em cada situação." },
        { "title": "Raramente me sinto ansioso(a)." },
        { "title": "Fico nervoso(a) com facilidade." },
        { "title": "Não me preocupo com coisas que já aconteceram." },
        { "title": "Fico inquieto(a) com o que pode dar errado." },
        { "title": "Mantenho a calma diante da incerteza." },
        { "title": "Sinto ansiedade com frequência." },
        { "title": "Não me assusto com facilidade." },
        { "title": "Fico irritado(a) com facilidade." },
        { "title": "Raramente perco a paciência." },
        { "title": "Fico com raiva quando as coisas não saem como eu quero." },
        { "title": "Sou difícil de provocar." },
        { "title": "Fico frustrado(a) facilmente." },
        { "title": "Mantenho a compostura em situações difíceis." },
        { "title": "Muitas coisas me incomodam." },
        { "title": "Não fico com raiva facilmente." },
        { "title": "Explodo quando me provocam." },
        { "title": "Controlo bem o meu temperamento." },
        { "title": "Frequentemente me sinto triste." },
        { "title": "Sinto-me confortável comigo mesmo(a)." },
        { "title": "Sinto-me desanimado(a) com frequência." },
        { "title": "Raramente me sinto abatido(a)." },
        { "title": "Sinto-me insatisfeito(a) com a minha vida." },
        { "title": "Geralmente me sinto contente." },
        { "title": "Às vezes me sinto vazio(a) por dentro." },
        { "title": "Não me deixo levar por pensamentos negativos." },
        { "title": "Tendo a ver o lado sombrio das coisas." },
        { "title": "Aproveito a vida como ela é." },
        { "title": "Fico envergonhado(a) facilmente." },
        { "title": "Sinto-me confortável em situações sociais." },
        { "title": "Preocupo-me com o que os outros pensam de mim." },
        { "title": "Não me importo em ser o centro das atenções." },
        { "title": "Sinto-me desconfortável quando me observam." },
        { "title": "Raramente me sinto constrangido(a)." },
        { "title": "Tenho dificuldade em falar diante de um grupo." },
        { "title": "Não me preocupo em fazer papel de bobo(a)." },
        { "title": "Fico vermelho(a) com facilidade." },
        { "title": "Comporto-me naturalmente diante de desconhecidos." },
        { "title": "Acho difícil resistir às tentações." },
        { "title": "Controlo bem os meus impulsos." },
        { "title": "Como ou bebo demais quando estou estressado(a)." },
        { "title": "Sei quando parar." },
        { "title": "Gasto dinheiro com coisas que não preciso." },
        { "title": "Resisto bem às tentações." },
        { "title": "Me deixo levar pelos meus desejos." },
        { "title": "Mantenho meus hábitos sob controle." },
        { "title": "Faço coisas das quais me arrependo depois." },
        { "title": "Não caio facilmente em excessos." },
        { "title": "Desmorono sob pressão." },
        { "title": "Lido bem com situações estressantes." },
        { "title": "Sinto-me sobrecarregado(a) pelas dificuldades." },
        { "title": "Não me deixo vencer pelos problemas." },
        { "title": "Fico paralisado(a) quando tenho muita pressão." },
        { "title": "Funciono bem mesmo sob estresse." },
        { "title": "Tenho dificuldade em me recuperar dos contratempos." },
        { "title": "Sou resiliente diante das adversidades." },
        { "title": "Perco o controle quando estou sob muita pressão." },
        { "title": "Enfrento os problemas com serenidade." },
        { "title": "Faço amizades facilmente." },
        { "title": "Tenho dificuldade em me aproximar dos outros." },
        { "title": "Sinto-me à vontade com as pessoas." },
        { "title": "Sou distante com desconhecidos." },
        { "title": "Conecto-me rapidamente com as pessoas." },
        { "title": "Mantenho distância dos outros." },
        { "title": "Trato todos com carinho." },
        { "title": "Tenho dificuldade em confiar em pessoas novas." },
        { "title": "Faço as pessoas se sentirem bem-vindas." },
        { "title": "Não sou uma pessoa muito calorosa." },
        { "title": "Gosto de estar rodeado(a) de pessoas." },
        { "title": "Prefiro ficar sozinho(a)." },
        { "title": "Gosto de ir a festas e reuniões." },
        { "title": "Evito multidões." },
        { "title": "Busco a companhia dos outros." },
        { "title": "Gosto da solidão." },
        { "title": "Sinto-me bem em grupos grandes." },
        { "title": "Prefiro atividades solitárias." },
        { "title": "Adoro socializar." },
        { "title": "Encontros sociais me esgotam." },
        { "title": "Assumo o comando das situações." },
        { "title": "Fico em segundo plano." },
        { "title": "Digo o que penso sem hesitar." },
        { "title": "Tenho dificuldade em expressar minhas opiniões." },
        { "title": "Assumo naturalmente o papel de líder." },
        { "title": "Deixo que outros tomem as decisões." },
        { "title": "Defendo minhas ideias com firmeza." },
        { "title": "Tenho dificuldade em dizer não." },
        { "title": "Tomo a iniciativa nas conversas." },
        { "title": "Evito impor meu ponto de vista." },
        { "title": "Estou sempre ocupado(a)." },
        { "title": "Levo as coisas com calma." },
        { "title": "Tenho um ritmo de vida acelerado." },
        { "title": "Gosto de levar meu tempo." },
        { "title": "Faço muitas coisas durante o dia." },
        { "title": "Prefiro um ritmo de vida tranquilo." },
        { "title": "Passo rapidamente de uma atividade para outra." },
        { "title": "Não gosto de me apressar." },
        { "title": "Sou uma pessoa muito ativa." },
        { "title": "Gosto de relaxar sem fazer nada." },
        { "title": "Busco aventura e emoções fortes." },
        { "title": "Prefiro o que é previsível e seguro." },
        { "title": "Adoro experiências emocionantes." },
        { "title": "Evito situações de risco." },
        { "title": "Gosto de experimentar coisas novas e arriscadas." },
        { "title": "Prefiro a rotina às surpresas." },
        { "title": "Curto velocidade e adrenalina." },
        { "title": "Não gosto de atividades perigosas." },
        { "title": "Fico entediado(a) se não há emoção." },
        { "title": "Contento-me com uma vida tranquila." },
        { "title": "Sou uma pessoa alegre." },
        { "title": "Raramente estou de bom humor." },
        { "title": "Irradio otimismo." },
        { "title": "Não sou uma pessoa especialmente alegre." },
        { "title": "Rio com facilidade." },
        { "title": "Tenho dificuldade em sentir entusiasmo." },
        { "title": "Vejo o lado positivo das coisas." },
        { "title": "Não me emociono com facilidade." },
        { "title": "Contagio os outros com minha alegria." },
        { "title": "Sou mais sério(a) do que a maioria." },
        { "title": "Tenho uma imaginação muito ativa." },
        { "title": "Raramente fantasio." },
        { "title": "Gosto de sonhar acordado(a)." },
        { "title": "Sou muito prático(a), não me perco em fantasias." },
        { "title": "Crio mundos imaginários na minha mente." },
        { "title": "Não perco tempo com a imaginação." },
        { "title": "Sou fascinado(a) pelo mundo das ideias." },
        { "title": "Prefiro fatos a fantasias." },
        { "title": "Minha mente está cheia de ideias criativas." },
        { "title": "Não tenho muita imaginação." },
        { "title": "Aprecio a arte e a beleza." },
        { "title": "Não me interessam as manifestações artísticas." },
        { "title": "A música me emociona." },
        { "title": "Não vejo sentido na arte abstrata." },
        { "title": "Gosto de visitar museus e galerias." },
        { "title": "A arte me parece entediante." },
        { "title": "Gosto de contemplar a natureza." },
        { "title": "Não presto atenção em detalhes estéticos." },
        { "title": "Valorizo a expressão artística em todas as suas formas." },
        { "title": "Prefiro o funcional ao belo." },
        { "title": "Sinto as emoções com muita intensidade." },
        { "title": "Raramente me comovo profundamente." },
        { "title": "Filmes e livros me afetam muito." },
        { "title": "Não sou uma pessoa especialmente emotiva." },
        { "title": "Posso chorar com uma canção bonita." },
        { "title": "Não me deixo levar pelas emoções." },
        { "title": "Sinto empatia profunda pelos outros." },
        { "title": "Controlo meus sentimentos com a razão." },
        { "title": "Minhas emoções são muito variadas e intensas." },
        { "title": "Sou uma pessoa emocionalmente reservada." },
        { "title": "Gosto de explorar lugares novos." },
        { "title": "Prefiro o familiar ao desconhecido." },
        { "title": "Gosto de experimentar comidas de outras culturas." },
        { "title": "Sinto-me confortável com minhas rotinas." },
        { "title": "Sou atraído(a) por viagens a lugares exóticos." },
        { "title": "Não gosto de sair da minha zona de conforto." },
        { "title": "Busco novas experiências constantemente." },
        { "title": "Prefiro fazer as coisas da maneira habitual." },
        { "title": "Adapto-me bem a situações novas." },
        { "title": "Mudanças me causam desconforto." },
        { "title": "Gosto de resolver problemas complexos." },
        { "title": "Evito discussões filosóficas." },
        { "title": "Gosto de refletir sobre ideias abstratas." },
        { "title": "Não me interessam debates intelectuais." },
        { "title": "Leio muito sobre assuntos variados." },
        { "title": "Prefiro atividades práticas às teóricas." },
        { "title": "Sou fascinado(a) por aprender coisas novas." },
        { "title": "Não me interesso por filosofia." },
        { "title": "Tenho curiosidade em entender como tudo funciona." },
        { "title": "Não gosto de enigmas nem de quebra-cabeças." },
        { "title": "Acredito que as leis devem se adaptar aos tempos." },
        { "title": "Respeito as tradições estabelecidas." },
        { "title": "Estou aberto(a) a reformulações sociais." },
        { "title": "Acredito que a sociedade funciona melhor com regras rígidas." },
        { "title": "Questiono as normas estabelecidas." },
        { "title": "Prefiro seguir as convenções sociais." },
        { "title": "Apoio mudanças sociais progressistas." },
        { "title": "Acho importante preservar os costumes." },
        { "title": "Acredito que o estabelecido deve ser desafiado." },
        { "title": "As tradições dão estabilidade à sociedade." },
        { "title": "Confio nos outros." },
        { "title": "Desconfio das intenções das pessoas." },
        { "title": "Acredito que a maioria das pessoas é honesta." },
        { "title": "Suspeito dos motivos ocultos dos outros." },
        { "title": "Dou o benefício da dúvida às pessoas." },
        { "title": "Acredito que as pessoas tentam se aproveitar de mim." },
        { "title": "Acredito na bondade das pessoas." },
        { "title": "Tenho dificuldade em confiar em alguém." },
        { "title": "Assumo que as pessoas têm boas intenções." },
        { "title": "Sou cético(a) em relação à gentileza de desconhecidos." },
        { "title": "Sou honesto(a) em todos os momentos." },
        { "title": "Às vezes manipulo os outros para conseguir o que quero." },
        { "title": "Não mentiria para obter uma vantagem." },
        { "title": "Uso truques para fazer as pessoas fazerem o que eu quero." },
        { "title": "Trato os outros com justiça." },
        { "title": "Às vezes finjo ser o que não sou." },
        { "title": "Digo a verdade mesmo que seja desconfortável." },
        { "title": "Nem sempre sou completamente sincero(a)." },
        { "title": "Ajo de acordo com meus princípios." },
        { "title": "Recorro à bajulação quando me convém." },
        { "title": "Gosto de ajudar os outros." },
        { "title": "Não me envolvo nos problemas dos outros." },
        { "title": "Sinto satisfação quando faço algo por alguém." },
        { "title": "Cuido primeiro dos meus próprios interesses." },
        { "title": "Preocupo-me com o bem-estar dos outros." },
        { "title": "Não gosto que me peçam favores." },
        { "title": "Ajudo quem precisa sem esperar nada em troca." },
        { "title": "Não me sinto obrigado(a) a ajudar os outros." },
        { "title": "Dou meu tempo generosamente." },
        { "title": "Prefiro não me meter em assuntos alheios." },
        { "title": "Evito conflitos." },
        { "title": "Não me importo em discutir com as pessoas." },
        { "title": "Busco concordância nas discussões." },
        { "title": "Gosto de um bom debate mesmo que fique tenso." },
        { "title": "Cedo para manter a paz." },
        { "title": "Insisto no meu ponto de vista mesmo que gere conflito." },
        { "title": "Prefiro a harmonia a ter razão." },
        { "title": "Não me incomodo em contradizer os outros." },
        { "title": "Tento encontrar soluções que satisfaçam a todos." },
        { "title": "Posso ser bastante teimoso(a) nas discussões." },
        { "title": "Não gosto de me exibir." },
        { "title": "Acredito que sou melhor do que a maioria." },
        { "title": "Sou uma pessoa humilde." },
        { "title": "Gosto de ser o centro das atenções." },
        { "title": "Não me considero especial." },
        { "title": "Acredito que mereço mais reconhecimento do que recebo." },
        { "title": "Minimizo minhas conquistas." },
        { "title": "Gosto de falar sobre meus sucessos." },
        { "title": "Não busco admiração." },
        { "title": "Sei que valho mais do que a maioria das pessoas." },
        { "title": "Fico comovido(a) com as pessoas que sofrem." },
        { "title": "Os problemas dos outros não me afetam muito." },
        { "title": "Sinto compaixão pelos menos afortunados." },
        { "title": "Acredito que cada um deve resolver seus próprios problemas." },
        { "title": "Preocupo-me com os que estão em desvantagem." },
        { "title": "Histórias tristes não me comovem facilmente." },
        { "title": "Acredito que a sociedade deve proteger os vulneráveis." },
        { "title": "As pessoas exageram seus problemas." },
        { "title": "Me dói ver animais sofrendo." },
        { "title": "Não sou muito sentimental com causas sociais." },
        { "title": "Sei que posso lidar com qualquer situação." },
        { "title": "Duvido das minhas capacidades." },
        { "title": "Completo as tarefas com sucesso." },
        { "title": "Não me sinto preparado(a) para os desafios." },
        { "title": "Confio na minha capacidade de resolver problemas." },
        { "title": "Sinto-me inseguro(a) diante de tarefas difíceis." },
        { "title": "Sei como fazer bem as coisas." },
        { "title": "Às vezes me sinto incompetente." },
        { "title": "Lido com as dificuldades com habilidade." },
        { "title": "Temo não estar à altura das expectativas." },
        { "title": "Mantenho minhas coisas organizadas." },
        { "title": "Deixo tudo bagunçado." },
        { "title": "Gosto que tudo esteja no seu lugar." },
        { "title": "Não me importo com a desordem." },
        { "title": "Sigo uma rotina organizada." },
        { "title": "Sou bastante desorganizado(a)." },
        { "title": "Limpo e organizo com frequência." },
        { "title": "Não me preocupo em manter as coisas em ordem." },
        { "title": "O caos ao meu redor me incomoda." },
        { "title": "Meu espaço de trabalho costuma ser bagunçado." },
        { "title": "Cumpro com minhas obrigações." },
        { "title": "Às vezes não sigo as regras." },
        { "title": "Cumpro minhas promessas." },
        { "title": "Nem sempre faço o que se espera de mim." },
        { "title": "Levo minhas responsabilidades a sério." },
        { "title": "Às vezes falho com meus compromissos." },
        { "title": "Faço o que digo que vou fazer." },
        { "title": "Não me preocupo muito com regras." },
        { "title": "Sou uma pessoa de palavra." },
        { "title": "Às vezes negligencio meus deveres." },
        { "title": "Trabalho duro para alcançar meus objetivos." },
        { "title": "Contento-me com o mínimo." },
        { "title": "Busco a excelência." },
        { "title": "Não me importo muito com o sucesso." },
        { "title": "Busco me superar constantemente." },
        { "title": "Não sou muito ambicioso(a)." },
        { "title": "Tenho metas claras e trabalho para alcançá-las." },
        { "title": "Faço apenas o necessário para me virar." },
        { "title": "Sou motivado(a) por alcançar grandes feitos." },
        { "title": "Não me esforço mais do que o necessário." },
        { "title": "Termino o que começo." },
        { "title": "Tenho dificuldade em manter a concentração." },
        { "title": "Persevero até completar a tarefa." },
        { "title": "Procrastino com frequência." },
        { "title": "Começo a trabalhar imediatamente." },
        { "title": "Me distraio com facilidade." },
        { "title": "Não deixo tarefas pela metade." },
        { "title": "Perco tempo com coisas sem importância." },
        { "title": "Mantenho o foco nos meus objetivos." },
        { "title": "Tenho dificuldade em começar tarefas difíceis." },
        { "title": "Penso antes de agir." },
        { "title": "Ajo sem pensar nas consequências." },
        { "title": "Considero todas as opções antes de decidir." },
        { "title": "Tomo decisões impulsivamente." },
        { "title": "Avalio os riscos cuidadosamente." },
        { "title": "Me lanço nas coisas sem planejar." },
        { "title": "Planejo antes de agir." },
        { "title": "Faço as coisas sem pensar muito." },
        { "title": "Reflito sobre as possíveis consequências." },
        { "title": "Digo coisas sem medir as consequências." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Inventário de Personalidade do DSM-5",
      "desc": "Avaliação abrangente de traços patológicos de personalidade segundo o modelo dimensional do DSM-5. Mede 25 facetas em 5 domínios.",
      "instructions": "Leia cada afirmação e selecione o quanto ela descreve você em geral, não apenas como você se sente agora.",
      "sharedOptions": [
        "Muito falso ou frequentemente falso",
        "Às vezes ou um pouco falso",
        "Às vezes ou um pouco verdadeiro",
        "Muito verdadeiro ou frequentemente verdadeiro"
      ],
      "questions": [
        { "title": "Minhas emoções mudam sem razão aparente." },
        { "title": "Meu humor muda drasticamente de um momento para outro." },
        { "title": "Passo rapidamente de me sentir feliz a me sentir triste sem motivo claro." },
        { "title": "Pessoas próximas me dizem que sou emocional demais." },
        { "title": "Tenho dificuldade em controlar minhas reações emocionais." },
        { "title": "Fico alterado/a facilmente em situações que os outros lidam sem problemas." },
        { "title": "Meus sentimentos são imprevisíveis, até para mim." },
        { "title": "Me preocupo com quase tudo." },
        { "title": "Estou sempre esperando que algo ruim aconteça." },
        { "title": "Fico nervoso/a com muita facilidade." },
        { "title": "Acho muito difícil parar de me preocupar com as coisas." },
        { "title": "Sinto uma ansiedade constante que não consigo explicar." },
        { "title": "Me preocupo excessivamente com coisas que provavelmente não vão acontecer." },
        { "title": "Pensamentos ansiosos invadem minha mente com frequência." },
        { "title": "Tenho medo de que as coisas deem errado em quase todas as situações." },
        { "title": "Me sinto tenso/a e nervoso/a na maior parte do tempo." },
        { "title": "A ideia de ficar sozinho/a me apavora." },
        { "title": "Me preocupo muito que as pessoas importantes na minha vida me abandonem." },
        { "title": "Preciso constantemente da proximidade das pessoas que amo." },
        { "title": "Me sinto desprotegido/a quando não estou perto de alguém que me importa." },
        { "title": "Me angustia muito me separar das pessoas a quem estou apegado/a." },
        { "title": "Faço tudo o que posso para evitar que as pessoas se afastem de mim." },
        { "title": "Quando estou longe de alguém importante para mim, tenho dificuldade em funcionar." },
        { "title": "Mudo minhas opiniões para concordar com as dos outros." },
        { "title": "Tenho muita dificuldade em dizer não, mesmo quando quero." },
        { "title": "Deixo os outros tomarem decisões por mim para evitar conflitos." },
        { "title": "Prefiro ceder aos outros do que defender minha posição." },
        { "title": "Me irrito facilmente com coisas pequenas." },
        { "title": "Frequentemente me sinto com raiva sem saber exatamente por quê." },
        { "title": "As pessoas me dizem que sou uma pessoa de mau humor." },
        { "title": "Perco a paciência com os outros mais do que deveria." },
        { "title": "Me incomoda quando as pessoas não fazem as coisas do meu jeito." },
        { "title": "Guardo ressentimento das pessoas que me magoaram." },
        { "title": "Tendo a reagir com raiva diante da menor provocação." },
        { "title": "Fico furioso/a quando as coisas não saem como eu quero." },
        { "title": "Sinto uma irritação constante que é difícil de controlar." },
        { "title": "Quando alguém me ofende, acho muito difícil deixar passar." },
        { "title": "Fico preso/a nos mesmos pensamentos repetidamente." },
        { "title": "Acho muito difícil parar de pensar nos meus problemas." },
        { "title": "Revejo mentalmente as mesmas situações sem conseguir parar." },
        { "title": "Fico obcecado/a com erros que cometi no passado." },
        { "title": "Quando algo me incomoda, não consigo parar de pensar nisso por dias." },
        { "title": "Meus pensamentos se repetem como um disco arranhado." },
        { "title": "Tenho dificuldade em largar um assunto mesmo quando sei que deveria." },
        { "title": "Continuo pensando nas mesmas coisas mesmo que não sirva para nada." },
        { "title": "As pessoas me dizem que eu penso demais nas coisas." },
        { "title": "Raramente mostro minhas emoções aos outros." },
        { "title": "As pessoas me dizem que pareço frio/a ou emocionalmente distante." },
        { "title": "Normalmente não sinto emoções fortes, nem positivas nem negativas." },
        { "title": "Acho difícil expressar o que sinto, mesmo com pessoas próximas." },
        { "title": "Situações que empolgam os outros me deixam indiferente." },
        { "title": "Não me comovo com histórias tristes nem filmes emocionantes." },
        { "title": "Prefiro não mostrar o que sinto porque considero uma fraqueza." },
        { "title": "Prefiro ficar sozinho/a a maior parte do tempo." },
        { "title": "Evito encontros sociais sempre que posso." },
        { "title": "Não tenho interesse em fazer novos amigos." },
        { "title": "Me sinto desconfortável quando tenho que interagir com outras pessoas." },
        { "title": "Prefiro fazer as coisas sozinho/a em vez de em grupo." },
        { "title": "Me isolo dos outros intencionalmente." },
        { "title": "Conversas com outras pessoas são cansativas para mim." },
        { "title": "Me sinto melhor quando não tenho que lidar com ninguém." },
        { "title": "Evito situações em que tenho que socializar." },
        { "title": "Não me importo em passar longos períodos sem contato social." },
        { "title": "Poucas coisas na vida me dão verdadeiro prazer." },
        { "title": "Perdi o interesse em atividades que antes eu curtia." },
        { "title": "Acho difícil encontrar algo que realmente me motive." },
        { "title": "A vida me parece vazia e sem sentido na maior parte do tempo." },
        { "title": "Não sinto alegria nem mesmo em ocasiões que deveriam ser felizes." },
        { "title": "Me sinto emocionalmente vazio/a quase sempre." },
        { "title": "Nada me entusiasma de verdade." },
        { "title": "Sinto que minhas emoções positivas se apagaram." },
        { "title": "Sinto que não valho nada como pessoa." },
        { "title": "Acredito que o mundo seria melhor sem mim." },
        { "title": "Me sinto sem esperança em relação ao futuro." },
        { "title": "Me critico constantemente por tudo o que faço." },
        { "title": "Sinto uma tristeza profunda que não vai embora." },
        { "title": "Me considero um fracasso em quase tudo o que tento." },
        { "title": "Acredito que as coisas nunca vão melhorar para mim." },
        { "title": "Me sinto culpado/a por coisas que não são realmente minha culpa." },
        { "title": "Tenho uma visão muito negativa de mim mesmo/a." },
        { "title": "Frequentemente penso que não mereço ser feliz." },
        { "title": "Me sinto inútil e incapaz de fazer algo bem." },
        { "title": "Choro com frequência ou sinto vontade de chorar." },
        { "title": "Me sinto completamente sozinho/a mesmo quando estou rodeado/a de pessoas." },
        { "title": "Sinto que minha vida não tem propósito nem direção." },
        { "title": "Evito relacionamentos amorosos porque me fazem sentir vulnerável." },
        { "title": "Não tenho interesse em ter um relacionamento íntimo com ninguém." },
        { "title": "A proximidade emocional com outra pessoa me deixa muito desconfortável." },
        { "title": "Prefiro manter as pessoas a uma distância emocional." },
        { "title": "Relacionamentos íntimos me parecem sufocantes." },
        { "title": "Não preciso de ninguém próximo na minha vida." },
        { "title": "Desconfio das intenções da maioria das pessoas." },
        { "title": "Acredito que as pessoas têm motivos ocultos na maioria das vezes." },
        { "title": "Suspeito que as pessoas falam mal de mim pelas costas." },
        { "title": "Acho difícil acreditar que alguém queira me ajudar sem esperar algo em troca." },
        { "title": "Estou sempre em alerta porque acredito que alguém pode tentar se aproveitar de mim." },
        { "title": "Duvido da sinceridade dos elogios que recebo." },
        { "title": "Sinto que não posso confiar plenamente em ninguém." },
        { "title": "Sou bom/boa em manipular as pessoas para conseguir o que quero." },
        { "title": "Uso bajulação para fazer as pessoas fazerem o que eu quero." },
        { "title": "Não me importo em usar os outros para alcançar meus objetivos." },
        { "title": "Sei exatamente o que dizer para influenciar as decisões dos outros." },
        { "title": "Gosto de controlar as pessoas de forma sutil." },
        { "title": "Minto com frequência se isso me beneficia." },
        { "title": "Não acho difícil enganar as pessoas." },
        { "title": "Invento histórias para conseguir o que quero." },
        { "title": "Às vezes finjo ser alguém que não sou para impressionar os outros." },
        { "title": "Exagero minhas conquistas para causar boa impressão." },
        { "title": "Omito informações importantes quando isso me beneficia." },
        { "title": "Sou capaz de agir de forma convincente mesmo quando estou mentindo." },
        { "title": "Ser desonesto/a não me incomoda se isso me ajuda." },
        { "title": "Já enganei ou trapaceei outros para obter algo que eu queria." },
        { "title": "Digo o que as pessoas querem ouvir, mesmo que não seja verdade." },
        { "title": "Mereço tratamento especial porque sou melhor que a maioria." },
        { "title": "Acredito que sou uma pessoa extraordinária e que os outros deveriam reconhecer isso." },
        { "title": "As pessoas não apreciam o quão valioso/a eu realmente sou." },
        { "title": "Acho difícil entender por que os outros não veem o quão especial eu sou." },
        { "title": "Sinto que estou acima das regras que se aplicam aos outros." },
        { "title": "Me comparo com os outros e quase sempre me considero superior." },
        { "title": "Preciso ser o centro das atenções em situações sociais." },
        { "title": "Faço coisas chamativas para que as pessoas me notem." },
        { "title": "Me incomoda quando a atenção não está voltada para mim." },
        { "title": "Busco constantemente a aprovação e admiração dos outros." },
        { "title": "Me esforço muito para impressionar as pessoas." },
        { "title": "Gosto de fazer grandes gestos para que os outros falem de mim." },
        { "title": "Exagero minhas emoções para obter reação dos outros." },
        { "title": "Me sinto vazio/a se não recebo atenção de outras pessoas." },
        { "title": "Não me importo se minhas ações machucam outras pessoas." },
        { "title": "As pessoas dizem que sou insensível ao sofrimento alheio." },
        { "title": "Não sinto remorso quando faço algo que magoa alguém." },
        { "title": "As lágrimas dos outros não me comovem." },
        { "title": "Acho difícil entender por que as pessoas se ofendem tão facilmente." },
        { "title": "Não me preocupo com os sentimentos dos outros se não me afetam diretamente." },
        { "title": "Posso ser cruel se a situação exigir." },
        { "title": "Não tenho interesse em consolar alguém que está sofrendo." },
        { "title": "Acho que as pessoas são sensíveis demais hoje em dia." },
        { "title": "Não perco o sono por ter tratado alguém mal." },
        { "title": "Já me disseram que sou uma pessoa dura e implacável." },
        { "title": "Considero a empatia uma fraqueza." },
        { "title": "Não me afeta ver os outros sofrerem as consequências de seus erros." },
        { "title": "Sempre coloco minhas necessidades em primeiro lugar, independentemente de como isso afeta os outros." },
        { "title": "Frequentemente não cumpro meus compromissos e obrigações." },
        { "title": "Sou descuidado/a com minhas responsabilidades financeiras." },
        { "title": "As pessoas não podem contar comigo para fazer o que digo que farei." },
        { "title": "Deixo tarefas importantes sem terminar com frequência." },
        { "title": "Não me preocupo em cumprir prazos." },
        { "title": "Tendo a deixar que os outros cuidem das minhas responsabilidades." },
        { "title": "Tenho dificuldade em manter um emprego ou seguir um plano de longo prazo." },
        { "title": "Ajo sem pensar nas consequências." },
        { "title": "Faço coisas impulsivamente das quais depois me arrependo." },
        { "title": "Acho muito difícil resistir aos meus impulsos." },
        { "title": "Tomo decisões apressadas sem considerar todas as opções." },
        { "title": "Digo coisas sem pensar e depois gostaria de não ter dito." },
        { "title": "Não consigo esperar pelas coisas; preciso de gratificação imediata." },
        { "title": "Me distraio com muita facilidade." },
        { "title": "Tenho dificuldade em me concentrar em uma tarefa por mais de alguns minutos." },
        { "title": "Perco o fio dos meus pensamentos constantemente." },
        { "title": "Começo muitas coisas, mas acho difícil terminá-las porque me distraio." },
        { "title": "Qualquer barulho ou estímulo externo desvia minha atenção." },
        { "title": "Acho difícil acompanhar uma conversa longa sem perder a concentração." },
        { "title": "Minha mente divaga quando deveria estar focado/a em algo." },
        { "title": "Frequentemente esqueço o que estava fazendo." },
        { "title": "Preciso que repitam as instruções porque não consigo retê-las." },
        { "title": "Gosto de fazer coisas perigosas." },
        { "title": "Busco emoções fortes mesmo que envolvam risco." },
        { "title": "Não me importo em me colocar em situações arriscadas." },
        { "title": "Me entedio facilmente se não há adrenalina envolvida." },
        { "title": "Já fiz coisas imprudentes que poderiam ter me causado dano." },
        { "title": "Atividades perigosas são empolgantes para mim." },
        { "title": "Dirijo mais rápido do que o permitido porque gosto de velocidade." },
        { "title": "Já usei substâncias sem me preocupar com as consequências." },
        { "title": "Ignoro sinais de alerta e continuo fazendo o que estou fazendo." },
        { "title": "Aceito desafios que a maioria consideraria arriscados demais." },
        { "title": "Preciso de experiências intensas para me sentir vivo/a." },
        { "title": "Me entedio com a rotina e busco fazer coisas novas e imprevisíveis." },
        { "title": "Não considero os perigos antes de agir." },
        { "title": "A ideia de fazer algo proibido me atrai." },
        { "title": "Tudo tem que estar perfeito ou não fico satisfeito/a." },
        { "title": "Acho impossível aceitar um trabalho que não seja impecável." },
        { "title": "Gasto tempo demais em detalhes insignificantes para ter certeza de que estão corretos." },
        { "title": "Meus padrões são tão altos que frequentemente não consigo alcançá-los." },
        { "title": "Insisto que as coisas sejam feitas exatamente do jeito que eu quero." },
        { "title": "Tenho dificuldade em delegar tarefas porque ninguém as faz tão bem quanto eu." },
        { "title": "Meu perfeccionismo interfere na minha capacidade de terminar as coisas no prazo." },
        { "title": "Me sinto muito mal comigo mesmo/a quando cometo o menor erro." },
        { "title": "Tenho regras muito rígidas sobre como as coisas devem ser feitas." },
        { "title": "Não tolero mediocridade, nem em mim nem nos outros." },
        { "title": "Acredito que tenho um sexto sentido que me permite saber coisas que os outros não sabem." },
        { "title": "Tive experiências que considero sobrenaturais ou paranormais." },
        { "title": "Acredito que posso influenciar eventos apenas pensando neles." },
        { "title": "Sinto que existem forças ocultas controlando o que acontece no mundo." },
        { "title": "Acredito que coincidências são mensagens do universo direcionadas a mim." },
        { "title": "Já senti que tenho poderes ou habilidades especiais que os outros não possuem." },
        { "title": "Acredito que meus pensamentos podem afetar diretamente a realidade." },
        { "title": "Sinto uma conexão especial com o sobrenatural ou o místico." },
        { "title": "As pessoas me consideram uma pessoa estranha ou excêntrica." },
        { "title": "Minha forma de pensar é muito diferente da maioria das pessoas." },
        { "title": "Tenho ideias que os outros consideram estranhas ou fora do comum." },
        { "title": "Meu comportamento faz as pessoas se sentirem desconfortáveis." },
        { "title": "Digo coisas que os outros consideram estranhas ou sem sentido." },
        { "title": "Tenho interesses ou hobbies que a maioria das pessoas acha muito peculiares." },
        { "title": "Me expresso de maneiras que os outros não entendem." },
        { "title": "Já me disseram que minha forma de ver o mundo é muito incomum." },
        { "title": "As pessoas me olham de forma estranha por causa do meu comportamento." },
        { "title": "Minhas reações diante das situações são diferentes das dos outros." },
        { "title": "Tenho um estilo pessoal que os outros consideram muito fora do normal." },
        { "title": "Frequentemente penso em coisas que a maioria das pessoas nem imaginaria." },
        { "title": "Me sinto fundamentalmente diferente de todas as outras pessoas." },
        { "title": "Às vezes sinto que as coisas ao meu redor não são reais." },
        { "title": "Já tive a sensação de estar fora do meu corpo." },
        { "title": "Às vezes vejo coisas que os outros não conseguem ver." },
        { "title": "Já ouvi vozes ou sons que os outros não ouviam." },
        { "title": "Às vezes sinto que meu corpo muda de forma ou tamanho." },
        { "title": "Tive experiências em que me senti separado/a de mim mesmo/a." },
        { "title": "Às vezes meu ambiente parece distorcido ou irreal." },
        { "title": "Já senti que meus pensamentos não me pertencem." },
        { "title": "Às vezes perco a noção de onde eu termino e o mundo exterior começa." },
        { "title": "Já tive sensações estranhas no meu corpo que não consigo explicar." },
        { "title": "Às vezes sinto que a realidade se fragmenta ao meu redor." },
        { "title": "Já tive momentos em que não reconheci meu próprio reflexo." }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Clínico",
      "abbr": "IPIP-Clínico",
      "fullName": "Escalas Clínicas IPIP (equivalentes às escalas MMPI)",
      "desc": "Avaliação clínica completa de personalidade usando itens de domínio público. Mede 10 escalas clínicas e 3 escalas de validade equivalentes às do MMPI.",
      "instructions": "Responda verdadeiro ou falso a cada afirmação conforme se aplica a você geralmente. Seja honesto(a); não há respostas certas nem erradas.",
      "sharedOptions": ["Falso","Verdadeiro"],
      "questions": [
        { "title": "Eu nunca disse uma mentira." },
        { "title": "Eu me preocupo muito com a minha saúde." },
        { "title": "Eu me sinto triste na maior parte do tempo." },
        { "title": "Acredito que as pessoas falam de mim pelas costas." },
        { "title": "Tenho mais energia do que a maioria das pessoas." },
        { "title": "Ouço vozes que outros não conseguem ouvir." },
        { "title": "Considero-me uma pessoa muito equilibrada." },
        { "title": "Às vezes tenho dores de cabeça sem causa aparente." },
        { "title": "As regras me parecem chatas e desnecessárias." },
        { "title": "Tenho muito interesse em atividades artísticas e culturais." },
        { "title": "Verifico as coisas várias vezes para ter certeza de que estão certas." },
        { "title": "Às vezes tenho pensamentos muito estranhos." },
        { "title": "Prefiro ficar sozinho(a) do que na companhia de outros." },
        { "title": "Sou sempre gentil com todas as pessoas que conheço." },
        { "title": "Sinto que meu estômago me incomoda com frequência." },
        { "title": "O futuro me parece sombrio e sem esperança." },
        { "title": "Sinto que me perseguem ou me vigiam." },
        { "title": "Tenho tendência a ignorar meus problemas até que desapareçam." },
        { "title": "Desconfio das intenções da maioria das pessoas." },
        { "title": "Inicio muitos projetos ao mesmo tempo sem terminá-los." },
        { "title": "Estou satisfeito(a) com minha vida como ela é." },
        { "title": "Tive problemas com pessoas em posição de autoridade." },
        { "title": "Considero-me uma pessoa muito sensível emocionalmente." },
        { "title": "Tenho muita dificuldade em tomar decisões importantes." },
        { "title": "Às vezes me sinto desconectado(a) da realidade." },
        { "title": "Tenho dificuldade em iniciar conversas com pessoas desconhecidas." },
        { "title": "Nunca me senti com raiva de ninguém." },
        { "title": "Frequentemente tenho dores em diferentes partes do meu corpo." },
        { "title": "Perdi o interesse em coisas que antes me davam prazer." },
        { "title": "Acredito que tenho poderes especiais que outros não têm." },
        { "title": "Meus relacionamentos familiares são muito bons." },
        { "title": "Às vezes sinto formigamentos ou dormência sem razão médica." },
        { "title": "Sinto que as pessoas próximas a mim conspiram contra mim." },
        { "title": "Sinto-me impulsionado(a) a estar sempre em movimento." },
        { "title": "Gosto de quebrar as regras quando posso." },
        { "title": "Gosto de ler poesia e literatura." },
        { "title": "Preocupo-me excessivamente com coisas pequenas." },
        { "title": "Às vezes sinto que meu corpo muda de forma ou tamanho." },
        { "title": "Sinto-me desconfortável em grandes reuniões sociais." },
        { "title": "Nunca peguei algo que não me pertencia." },
        { "title": "Preocupo-me com ter uma doença grave não diagnosticada." },
        { "title": "Choro com mais facilidade do que antes." },
        { "title": "Às vezes sinto que alguém controla meus pensamentos." },
        { "title": "Geralmente lido bem com situações difíceis." },
        { "title": "Quando tenho um conflito, prefiro não pensar nisso." },
        { "title": "Sinto que as pessoas me observam com más intenções." },
        { "title": "Minhas ideias mudam muito rapidamente de um assunto para outro." },
        { "title": "Frequentemente ajo sem pensar nas consequências." },
        { "title": "Emociono-me facilmente com histórias tristes." },
        { "title": "Preciso que tudo esteja perfeitamente organizado." },
        { "title": "Às vezes ouço meus próprios pensamentos como se fossem em voz alta." },
        { "title": "Evito situações em que tenho que falar em público." },
        { "title": "Sempre digo a verdade, sem exceção." },
        { "title": "Sinto que meu coração bate de forma irregular com frequência." },
        { "title": "Sinto-me cansado(a) e sem energia na maior parte do dia." },
        { "title": "Tive experiências sobrenaturais que não consigo explicar." },
        { "title": "Considero-me uma pessoa bastante competente." },
        { "title": "Às vezes sinto tonturas ou fraqueza sem motivo claro." },
        { "title": "Tenho certeza de que há pessoas que querem me fazer mal." },
        { "title": "Tenho dificuldade em ficar quieto(a) por muito tempo." },
        { "title": "Não me importo muito em seguir as normas sociais." },
        { "title": "Gosto de flores e da natureza mais do que a maioria das pessoas." },
        { "title": "Tenho pensamentos repetitivos que não consigo parar." },
        { "title": "Às vezes sinto que as coisas ao meu redor não são reais." },
        { "title": "Tenho dificuldade em fazer novos amigos." },
        { "title": "Nunca cheguei atrasado(a) a um compromisso." },
        { "title": "Consulto o médico com mais frequência do que a maioria." },
        { "title": "Sinto-me inútil ou como um fardo para os outros." },
        { "title": "Vejo coisas que outros não conseguem ver." },
        { "title": "Sinto que minha família me apoia em tudo." },
        { "title": "Às vezes perco a sensibilidade em partes do meu corpo." },
        { "title": "Acredito que alguém está tentando me envenenar ou me fazer mal." },
        { "title": "Durmo muito menos que outras pessoas e me sinto bem." },
        { "title": "Tive problemas legais por causa do meu comportamento." },
        { "title": "Tenho interesse em moda e decoração de interiores." },
        { "title": "Sinto uma ansiedade constante que não consigo explicar." },
        { "title": "Às vezes sinto que não sou eu mesmo(a)." },
        { "title": "Prefiro atividades solitárias como ler ou caminhar sozinho(a)." },
        { "title": "Nunca senti inveja de ninguém." },
        { "title": "Frequentemente sinto náuseas ou desconforto estomacal." },
        { "title": "Às vezes penso que seria melhor não estar vivo(a)." },
        { "title": "Sinto que posso prever o futuro." },
        { "title": "Considero-me uma pessoa emocionalmente estável." },
        { "title": "Tive desmaios ou episódios de perda de consciência." },
        { "title": "Acredito que meus colegas de trabalho falam mal de mim." },
        { "title": "Faço coisas arriscadas só pela emoção." },
        { "title": "A honestidade nem sempre é a melhor política." },
        { "title": "Gosto de cozinhar e preparar pratos elaborados." },
        { "title": "Sinto que algo ruim vai acontecer, mas não sei o quê." },
        { "title": "Meus pensamentos às vezes se misturam de maneira confusa." },
        { "title": "Fico nervoso(a) quando estou cercado(a) de muita gente." },
        { "title": "Nunca falei mal de outra pessoa." },
        { "title": "Preocupo-me com a possibilidade de meu corpo não funcionar corretamente." },
        { "title": "Tenho dificuldade em me concentrar no que estou fazendo." },
        { "title": "Senti a presença de seres que não estão lá." },
        { "title": "Não tenho problemas importantes na minha vida." },
        { "title": "Às vezes minhas costas doem muito sem motivo aparente." },
        { "title": "Acredito que há pessoas que me espionam." },
        { "title": "Tenho planos grandiosos para meu futuro que outros não entendem." },
        { "title": "Fico entediado(a) facilmente com rotinas e monotonia." },
        { "title": "Considero-me uma pessoa com grande sensibilidade artística." },
        { "title": "Lavo as mãos ou verifico fechaduras mais do que o necessário." },
        { "title": "Sinto que minha mente funciona de maneira diferente da dos outros." },
        { "title": "Evito festas e eventos sociais quando posso." },
        { "title": "Sempre cumpro absolutamente todas as minhas promessas." },
        { "title": "Presto muita atenção a qualquer mudança no meu corpo." },
        { "title": "Sinto-me culpado(a) por coisas que fiz no passado." },
        { "title": "Sinto que posso me comunicar com os mortos." },
        { "title": "Acredito que a maioria das pessoas é boa e confiável." },
        { "title": "Quando estou estressado(a), tenho fortes dores de cabeça." },
        { "title": "Sinto que as pessoas riem de mim quando não estou presente." },
        { "title": "Sinto-me capaz de fazer qualquer coisa que me proponha." },
        { "title": "Menti com frequência para sair de problemas." },
        { "title": "Gosto de assistir programas sobre arte, história ou cultura." },
        { "title": "Tenho medo de perder o controle das minhas ações." },
        { "title": "Às vezes sinto que outra pessoa controla meus movimentos." },
        { "title": "Prefiro trabalhar sozinho(a) do que em equipe." },
        { "title": "Nunca senti vontade de quebrar algo por frustração." },
        { "title": "Acredito que fico doente mais do que a maioria das pessoas." },
        { "title": "Não aprecio a comida como antes." },
        { "title": "Tive visões ou experiências místicas intensas." },
        { "title": "Meus amigos diriam que sou uma pessoa adaptável." },
        { "title": "Às vezes sinto um nó na garganta sem razão médica." },
        { "title": "Acredito que meus vizinhos me desejam mal." },
        { "title": "Falo muito rápido e às vezes as pessoas não me entendem." },
        { "title": "Tenho dificuldade em manter um emprego por muito tempo." },
        { "title": "Emociono-me facilmente ao ouvir música." },
        { "title": "Preciso verificar várias vezes se tranquei a porta." },
        { "title": "Sinto que há algo fundamentalmente diferente em mim." },
        { "title": "Sinto-me mais confortável em casa do que saindo." },
        { "title": "Nunca desobedeci uma regra ou norma." },
        { "title": "Sinto dores musculares frequentes sem causa conhecida." },
        { "title": "Meu sono é irregular; durmo muito ou muito pouco." },
        { "title": "Às vezes sinto que minha alma abandona meu corpo." },
        { "title": "Consigo resolver a maioria dos meus problemas sem ajuda." },
        { "title": "Tenho problemas de visão que os médicos não conseguem explicar." },
        { "title": "Sinto que há um complô organizado contra mim." },
        { "title": "Sinto-me cheio(a) de energia e vitalidade." },
        { "title": "Não me sinto culpado(a) quando faço algo errado." },
        { "title": "Gosto de cuidar dos outros e atender suas necessidades." },
        { "title": "Sinto um medo intenso sem saber exatamente do quê." },
        { "title": "Às vezes não reconheço minha própria imagem no espelho." },
        { "title": "Acho cansativo socializar por muito tempo." },
        { "title": "Nunca tive um pensamento inapropriado." },
        { "title": "Frequentemente sinto que me falta o ar." },
        { "title": "Tenho dificuldade em encontrar motivação para fazer as coisas." },
        { "title": "Senti que estou possuído(a) por uma força exterior." },
        { "title": "Sinto-me confortável comigo mesmo(a) na maior parte do tempo." },
        { "title": "Quando estou sob pressão, sinto tremores ou tiques." },
        { "title": "Acredito que certas pessoas me seguem ou me rastreiam." },
        { "title": "Fico impaciente facilmente quando as coisas vão devagar." },
        { "title": "Destruí propriedade alheia quando estava com raiva." },
        { "title": "Gosto de conversas profundas sobre emoções e sentimentos." },
        { "title": "Tenho dificuldade em relaxar; estou sempre tenso(a)." },
        { "title": "Tenho dificuldade em distinguir entre sonhos e realidade." },
        { "title": "Tenho dificuldade em olhar as pessoas nos olhos." },
        { "title": "Nunca senti preguiça nem evitei uma responsabilidade." },
        { "title": "Sinto que meus órgãos internos não funcionam bem." },
        { "title": "A vida não tem tido muito sentido para mim ultimamente." },
        { "title": "Recebi mensagens especiais pela televisão ou pelo rádio." },
        { "title": "Acredito que tenho bom senso para tomar decisões." },
        { "title": "Às vezes não consigo mover temporariamente alguma parte do meu corpo." },
        { "title": "Sinto que meus inimigos querem arruinar minha reputação." },
        { "title": "Frequentemente gasto dinheiro de forma impulsiva." },
        { "title": "Não me importo em ferir os sentimentos dos outros se for necessário." },
        { "title": "Gosto de explorar minhas próprias emoções e as dos outros." },
        { "title": "Tenho rituais ou costumes que devo seguir à risca." },
        { "title": "Às vezes sinto que não tenho identidade própria." },
        { "title": "Aprecio mais atividades tranquilas do que sociais." },
        { "title": "Nunca furei uma fila nem tomei um atalho indevido." },
        { "title": "Preocupo-me constantemente se tenho algum problema de saúde." },
        { "title": "Sinto que decepcionei as pessoas que me importam." },
        { "title": "Senti que minha mente é lida por outras pessoas." },
        { "title": "Adapto-me bem às mudanças na minha vida." },
        { "title": "Às vezes tenho episódios de dor intensa sem diagnóstico médico." },
        { "title": "Sinto que não posso confiar em ninguém completamente." },
        { "title": "Preciso estar constantemente ocupado(a) fazendo coisas." },
        { "title": "Usei outras pessoas para conseguir o que eu queria." },
        { "title": "Sinto que minhas dúvidas e medos às vezes me paralisam." },
        { "title": "Às vezes me sinto completamente isolado(a) do mundo ao meu redor." }
      ]
    }
  }
};
