const LANG_EN = {
  ui: {
    appTitle: "Mental Health Assessments",
    appSubtitle: "Psychological self-assessment tools",
    tabTests: "Tests",
    tabHistory: "History",
    welcome: "Welcome. Select an assessment to begin.",
    startTest: "Start test",
    nextQuestion: "Next",
    prevQuestion: "Previous",
    viewResults: "View results",
    question: "Question",
    of: "of",
    items: "items",
    backToTests: "Back to tests",
    repeatTest: "Repeat test",
    viewHistory: "View history",
    otherTests: "Other tests",
    detailByItem: "Detail by item",
    helpResources: "Help resources",
    helpText: "If you are going through an emotional crisis, seek professional help. National Suicide Prevention Lifeline: 988 (US) or contact a mental health professional.",
    noRecords: "No saved records.",
    completeFirst: "Complete at least one test to see the history.",
    goToTests: "Go to tests",
    trend: "Trend",
    all: "All",
    clearHistory: "Clear history",
    clearConfirm: "Are you sure you want to clear all history? This action cannot be undone.",
    score: "Score",
    outOf: "of",
    disclaimer: "This tool is for informational purposes only and does not replace a professional evaluation. Consult a mental health specialist for a proper diagnosis.",
    resumePrompt: "You have a test in progress",
    continueTest: "Continue test",
    questionsAnswered: "questions answered",
    inProgress: "In progress",
    testBy: "Tests",
  },

  scales: {
    agreement5: [
      "Strongly disagree",
      "Disagree",
      "Neither agree nor disagree",
      "Agree",
      "Strongly agree"
    ],
    frequency4: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day"
    ],
    frequency5: [
      "Never",
      "Almost never",
      "Sometimes",
      "Fairly often",
      "Very often"
    ],
    severity4: [
      "Not at all",
      "Mildly",
      "Moderately",
      "Severely"
    ],
    severity5: [
      "Not at all",
      "A little bit",
      "Moderately",
      "Quite a bit",
      "Extremely"
    ],
    yesNo: ["No", "Yes"],
  },

  tests: {
    bdi: {
      name: "BDI-II",
      fullName: "Beck Depression Inventory-II",
      desc: "Assesses the presence and severity of depressive symptoms over the past two weeks.",
      instructions: "Read each group of statements carefully and select the one that best describes how you have been feeling during the past two weeks, including today.",
      questions: [
        {
          title: "Sadness",
          options: [
            "I do not feel sad.",
            "I feel sad much of the time.",
            "I am sad all the time.",
            "I am so sad or unhappy that I can't stand it."
          ]
        },
        {
          title: "Pessimism",
          options: [
            "I am not discouraged about my future.",
            "I feel more discouraged about my future than I used to.",
            "I do not expect things to work out for me.",
            "I feel my future is hopeless and will only get worse."
          ]
        },
        {
          title: "Past failure",
          options: [
            "I do not feel like a failure.",
            "I have failed more than I should have.",
            "As I look back, I see a lot of failures.",
            "I feel I am a total failure as a person."
          ]
        },
        {
          title: "Loss of pleasure",
          options: [
            "I get as much pleasure as I ever did from the things I enjoy.",
            "I don't enjoy things as much as I used to.",
            "I get very little pleasure from the things I used to enjoy.",
            "I can't get any pleasure from the things I used to enjoy."
          ]
        },
        {
          title: "Guilty feelings",
          options: [
            "I don't feel particularly guilty.",
            "I feel guilty over many things I have done or should have done.",
            "I feel quite guilty most of the time.",
            "I feel guilty all of the time."
          ]
        },
        {
          title: "Punishment feelings",
          options: [
            "I don't feel I am being punished.",
            "I feel I may be punished.",
            "I expect to be punished.",
            "I feel I am being punished."
          ]
        },
        {
          title: "Self-dislike",
          options: [
            "I feel the same about myself as ever.",
            "I have lost confidence in myself.",
            "I am disappointed in myself.",
            "I dislike myself."
          ]
        },
        {
          title: "Self-criticalness",
          options: [
            "I don't criticize or blame myself more than usual.",
            "I am more critical of myself than I used to be.",
            "I criticize myself for all of my faults.",
            "I blame myself for everything bad that happens."
          ]
        },
        {
          title: "Suicidal thoughts or wishes",
          options: [
            "I don't have any thoughts of killing myself.",
            "I have thoughts of killing myself, but I would not carry them out.",
            "I would like to kill myself.",
            "I would kill myself if I had the chance."
          ]
        },
        {
          title: "Crying",
          options: [
            "I don't cry any more than I used to.",
            "I cry more than I used to.",
            "I cry over every little thing.",
            "I feel like crying, but I can't."
          ]
        },
        {
          title: "Agitation",
          options: [
            "I am no more restless or wound up than usual.",
            "I feel more restless or wound up than usual.",
            "I am so restless or agitated that it's hard to stay still.",
            "I am so restless or agitated that I have to keep moving or doing something."
          ]
        },
        {
          title: "Loss of interest",
          options: [
            "I have not lost interest in other people or activities.",
            "I am less interested in other people or things than before.",
            "I have lost most of my interest in other people or things.",
            "It's hard to get interested in anything."
          ]
        },
        {
          title: "Indecisiveness",
          options: [
            "I make decisions about as well as ever.",
            "I find it more difficult to make decisions than usual.",
            "I have much greater difficulty in making decisions than I used to.",
            "I have trouble making any decisions."
          ]
        },
        {
          title: "Worthlessness",
          options: [
            "I do not feel I am worthless.",
            "I don't consider myself as worthwhile and useful as I used to.",
            "I feel more worthless as compared to others.",
            "I feel utterly worthless."
          ]
        },
        {
          title: "Loss of energy",
          options: [
            "I have as much energy as ever.",
            "I have less energy than I used to have.",
            "I don't have enough energy to do very much.",
            "I don't have enough energy to do anything."
          ]
        },
        {
          title: "Changes in sleeping pattern",
          options: [
            "I have not experienced any change in my sleeping.",
            "I sleep somewhat more or somewhat less than usual.",
            "I sleep a lot more or a lot less than usual.",
            "I sleep most of the day or I wake up 1-2 hours early and can't get back to sleep."
          ]
        },
        {
          title: "Irritability",
          options: [
            "I am not more irritable than usual.",
            "I am more irritable than usual.",
            "I am much more irritable than usual.",
            "I am irritable all the time."
          ]
        },
        {
          title: "Changes in appetite",
          options: [
            "I have not experienced any change in my appetite.",
            "My appetite is somewhat less or somewhat greater than usual.",
            "My appetite is much less or much greater than usual.",
            "I have no appetite at all or I crave food all the time."
          ]
        },
        {
          title: "Concentration difficulty",
          options: [
            "I can concentrate as well as ever.",
            "I can't concentrate as well as usual.",
            "It's hard to keep my mind on anything for very long.",
            "I find I can't concentrate on anything."
          ]
        },
        {
          title: "Tiredness or fatigue",
          options: [
            "I am no more tired or fatigued than usual.",
            "I get more tired or fatigued more easily than usual.",
            "I am too tired or fatigued to do a lot of the things I used to do.",
            "I am too tired or fatigued to do most of the things I used to do."
          ]
        },
        {
          title: "Loss of interest in sex",
          options: [
            "I have not noticed any recent change in my interest in sex.",
            "I am less interested in sex than I used to be.",
            "I am much less interested in sex now.",
            "I have lost interest in sex completely."
          ]
        }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Your score suggests a minimal level of depression. It is normal to experience emotional ups and downs."
        },
        mild: {
          label: "Mild",
          desc: "Your score suggests mild depressive symptoms. Consider talking to a professional if they persist."
        },
        moderate: {
          label: "Moderate",
          desc: "Your score suggests moderate depressive symptoms. It is recommended to consult with a mental health professional."
        },
        severe: {
          label: "Severe",
          desc: "Your score suggests severe depressive symptoms. It is important to seek professional help as soon as possible."
        }
      }
    },

    bai: {
      name: "BAI",
      fullName: "Beck Anxiety Inventory",
      desc: "Assesses the severity of anxiety symptoms over the past week.",
      instructions: "Indicate how much each symptom has bothered you during the past week, including today.",
      questions: [
        { title: "Numbness or tingling" },
        { title: "Feeling hot" },
        { title: "Wobbliness in legs" },
        { title: "Unable to relax" },
        { title: "Fear of worst happening" },
        { title: "Dizzy or lightheaded" },
        { title: "Heart pounding or racing" },
        { title: "Unsteady" },
        { title: "Terrified or afraid" },
        { title: "Nervous" },
        { title: "Feeling of choking" },
        { title: "Hands trembling" },
        { title: "Shaky or unsteady" },
        { title: "Fear of losing control" },
        { title: "Difficulty in breathing" },
        { title: "Fear of dying" },
        { title: "Scared" },
        { title: "Indigestion" },
        { title: "Faint or lightheaded" },
        { title: "Face flushed" },
        { title: "Hot/cold sweats" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Your score suggests a minimal level of anxiety."
        },
        mild: {
          label: "Mild",
          desc: "Your score suggests mild anxiety. Monitor your symptoms."
        },
        moderate: {
          label: "Moderate",
          desc: "Your score suggests moderate anxiety. Consider consulting with a professional."
        },
        severe: {
          label: "Severe",
          desc: "Your score suggests severe anxiety. It is recommended to seek professional help."
        }
      }
    },

    gad7: {
      name: "GAD-7",
      fullName: "Generalized Anxiety Disorder-7",
      desc: "Assesses the severity of generalized anxiety over the past two weeks.",
      instructions: "Over the last 2 weeks, how often have you been bothered by the following problems?",
      questions: [
        { title: "Feeling nervous, anxious, or on edge" },
        { title: "Not being able to stop or control worrying" },
        { title: "Worrying too much about different things" },
        { title: "Trouble relaxing" },
        { title: "Being so restless that it is hard to sit still" },
        { title: "Becoming easily annoyed or irritable" },
        { title: "Feeling afraid, as if something awful might happen" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Your score suggests a minimal level of anxiety."
        },
        mild: {
          label: "Mild",
          desc: "Your score suggests mild anxiety."
        },
        moderate: {
          label: "Moderate",
          desc: "Your score suggests moderate anxiety. Consider consulting with a professional."
        },
        severe: {
          label: "Severe",
          desc: "Your score suggests severe anxiety. It is recommended to seek professional help."
        }
      }
    },

    msibpd: {
      name: "MSI-BPD",
      fullName: "McLean Screening Instrument for Borderline Personality Disorder",
      desc: "Screening tool for traits associated with borderline personality disorder.",
      instructions: "Answer yes or no to each of the following questions.",
      questions: [
        { title: "Have you ever deliberately cut, burned, or otherwise hurt yourself on purpose?" },
        { title: "Have you ever made a suicide attempt?" },
        { title: "Have you had at least two relationships (or attempted relationships) that were very intense but unstable?" },
        { title: "Does your sense of who you are often change dramatically?" },
        { title: "Does your mood frequently change suddenly?" },
        { title: "Do you often feel intense anger that is difficult to control?" },
        { title: "Do you often distrust other people?" },
        { title: "Do you frequently feel unreal or as if things around you are unreal?" },
        { title: "Do you frequently feel empty?" },
        { title: "Do you often make desperate efforts to avoid being abandoned by someone?" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Your score suggests a low presence of traits associated with borderline personality disorder."
        },
        moderate: {
          label: "Moderate",
          desc: "Your score suggests some traits associated with borderline personality disorder. Consider consulting with a professional."
        },
        severe: {
          label: "Significant",
          desc: "Your score suggests a significant presence of borderline traits. A comprehensive professional evaluation is recommended."
        }
      }
    },

    pss: {
      name: "PSS-10",
      fullName: "Perceived Stress Scale-10",
      desc: "Measures the degree to which life situations are perceived as stressful over the past month.",
      instructions: "The following questions ask about your feelings and thoughts during the last month. Indicate how often you felt or thought a certain way.",
      questions: [
        { title: "How often have you been upset because of something that happened unexpectedly?" },
        { title: "How often have you felt that you were unable to control the important things in your life?" },
        { title: "How often have you felt nervous and stressed?" },
        { title: "How often have you dealt successfully with irritating life hassles?" },
        { title: "How often have you felt that you were effectively coping with important changes that were occurring in your life?" },
        { title: "How often have you felt confident about your ability to handle your personal problems?" },
        { title: "How often have you felt that things were going your way?" },
        { title: "How often have you found that you could not cope with all the things that you had to do?" },
        { title: "How often have you been able to control irritations in your life?" },
        { title: "How often have you felt that you were on top of things?" }
      ],
      results: {
        minimal: {
          label: "Low",
          desc: "Your perceived stress level is low. Continue with your current coping strategies."
        },
        moderate: {
          label: "Moderate",
          desc: "Your perceived stress level is moderate. Consider incorporating stress management techniques."
        },
        severe: {
          label: "High",
          desc: "Your perceived stress level is high. It is recommended to seek professional support and stress reduction techniques."
        }
      }
    },

    asrs: {
      name: "ASRS v1.1",
      fullName: "Adult ADHD Self-Report Scale v1.1",
      desc: "Screening tool for attention deficit hyperactivity disorder symptoms in adults.",
      instructions: "Answer the following questions thinking about how you have felt and behaved over the past 6 months.",
      questions: [
        { title: "How often do you have difficulty finishing the final details of a project, once the challenging parts have been done?" },
        { title: "How often do you have difficulty getting things in order when you have to do a task that requires organization?" },
        { title: "How often do you have problems remembering appointments or obligations?" },
        { title: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?" },
        { title: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?" },
        { title: "How often do you feel overly active and compelled to do things, as if you were driven by a motor?" }
      ],
      results: {
        minimal: {
          label: "Unlikely",
          desc: "Your score suggests a low likelihood of ADHD."
        },
        moderate: {
          label: "Possible",
          desc: "Your score suggests some symptoms consistent with ADHD. Consider a professional evaluation."
        },
        severe: {
          label: "Likely",
          desc: "Your score suggests a high likelihood of ADHD symptoms. A comprehensive professional evaluation is recommended."
        }
      }
    },

    ocir: {
      name: "OCI-R",
      fullName: "Obsessive-Compulsive Inventory-Revised",
      desc: "Assesses symptoms of obsessive-compulsive disorder.",
      instructions: "The following statements refer to experiences that many people have in their everyday lives. Indicate to what degree they have bothered you during the past month.",
      questions: [
        { title: "I have saved up so many things that they get in the way" },
        { title: "I check things more often than necessary" },
        { title: "I get upset if objects are not arranged properly" },
        { title: "I feel compelled to count while I am doing things" },
        { title: "I find it difficult to touch an object when I know it has been touched by strangers or certain people" },
        { title: "I find it difficult to control my own thoughts" },
        { title: "I collect things I don't need" },
        { title: "I repeatedly check doors, windows, drawers, etc." },
        { title: "I get upset if others change the way I have arranged things" },
        { title: "I feel I have to repeat certain numbers" },
        { title: "I sometimes have to wash or clean myself simply because I feel contaminated" },
        { title: "I am upset by unpleasant thoughts that come into my mind against my will" },
        { title: "I avoid throwing things away because I am afraid I might need them later" },
        { title: "I repeatedly check gas and water taps and light switches after turning them off" },
        { title: "I need things to be arranged in a particular way" },
        { title: "I feel that there are good and bad numbers" },
        { title: "I wash my hands more often and longer than necessary" },
        { title: "I frequently get nasty thoughts and have difficulty in getting rid of them" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Your score suggests a minimal level of obsessive-compulsive symptoms."
        },
        moderate: {
          label: "Moderate",
          desc: "Your score suggests moderate obsessive-compulsive symptoms. Consider consulting with a professional."
        },
        severe: {
          label: "Significant",
          desc: "Your score suggests significant obsessive-compulsive symptoms. A professional evaluation is recommended."
        }
      }
    },

    pcl5: {
      name: "PCL-5",
      fullName: "PTSD Checklist for DSM-5",
      desc: "Assesses post-traumatic stress disorder symptoms over the past month.",
      instructions: "Below is a list of problems that people sometimes have in response to a very stressful experience. Indicate how much you have been bothered by that problem in the past month.",
      questions: [
        { title: "Repeated, disturbing, and unwanted memories of the stressful experience" },
        { title: "Repeated, disturbing dreams of the stressful experience" },
        { title: "Suddenly feeling or acting as if the stressful experience were actually happening again" },
        { title: "Feeling very upset when something reminded you of the stressful experience" },
        { title: "Having strong physical reactions when something reminded you of the stressful experience (e.g., heart pounding, trouble breathing, sweating)" },
        { title: "Avoiding memories, thoughts, or feelings related to the stressful experience" },
        { title: "Avoiding external reminders of the stressful experience (e.g., people, places, conversations, activities, objects, or situations)" },
        { title: "Trouble remembering important parts of the stressful experience" },
        { title: "Having strong negative beliefs about yourself, other people, or the world" },
        { title: "Blaming yourself or someone else for the stressful experience or what happened after it" },
        { title: "Having strong negative feelings such as fear, horror, anger, guilt, or shame" },
        { title: "Loss of interest in activities that you used to enjoy" },
        { title: "Feeling distant or cut off from other people" },
        { title: "Trouble experiencing positive feelings" },
        { title: "Irritable behavior, angry outbursts, or acting aggressively" },
        { title: "Taking too many risks or doing things that could cause you harm" },
        { title: "Being superalert or watchful or on guard" },
        { title: "Feeling jumpy or easily startled" },
        { title: "Having difficulty concentrating" },
        { title: "Trouble falling or staying asleep" }
      ],
      results: {
        minimal: {
          label: "Minimal",
          desc: "Your score suggests a low level of post-traumatic stress symptoms."
        },
        moderate: {
          label: "Moderate",
          desc: "Your score suggests moderate post-traumatic stress symptoms. Consider consulting with a professional."
        },
        severe: {
          label: "Significant",
          desc: "Your score suggests significant post-traumatic stress symptoms. It is recommended to seek professional help."
        }
      }
    },

    bfi44: {
      name: "BFI-44",
      fullName: "Big Five Inventory-44",
      desc: "Assesses five major personality dimensions: Extraversion, Agreeableness, Conscientiousness, Neuroticism, and Openness to Experience.",
      instructions: "I see myself as someone who... Indicate how much you agree or disagree with each statement.",
      questions: [
        { title: "Is talkative" },
        { title: "Tends to find fault with others" },
        { title: "Does a thorough job" },
        { title: "Is depressed, blue" },
        { title: "Is original, comes up with new ideas" },
        { title: "Is reserved" },
        { title: "Is helpful and unselfish with others" },
        { title: "Can be somewhat careless" },
        { title: "Is relaxed, handles stress well" },
        { title: "Is curious about many different things" },
        { title: "Is full of energy" },
        { title: "Starts quarrels with others" },
        { title: "Is a reliable worker" },
        { title: "Can be tense" },
        { title: "Is ingenious, a deep thinker" },
        { title: "Generates a lot of enthusiasm" },
        { title: "Has a forgiving nature" },
        { title: "Tends to be disorganized" },
        { title: "Worries a lot" },
        { title: "Has an active imagination" },
        { title: "Tends to be quiet" },
        { title: "Is generally trusting" },
        { title: "Tends to be lazy" },
        { title: "Is emotionally stable, not easily upset" },
        { title: "Is inventive" },
        { title: "Has an assertive personality" },
        { title: "Can be cold and aloof" },
        { title: "Perseveres until the task is finished" },
        { title: "Can be moody" },
        { title: "Values artistic, aesthetic experiences" },
        { title: "Is sometimes shy, inhibited" },
        { title: "Is considerate and kind to almost everyone" },
        { title: "Does things efficiently" },
        { title: "Remains calm in tense situations" },
        { title: "Prefers work that is routine" },
        { title: "Is outgoing, sociable" },
        { title: "Is sometimes rude to others" },
        { title: "Makes plans and follows through with them" },
        { title: "Gets nervous easily" },
        { title: "Likes to reflect, play with ideas" },
        { title: "Has few artistic interests" },
        { title: "Likes to cooperate with others" },
        { title: "Is easily distracted" },
        { title: "Is sophisticated in art, music, or literature" }
      ],
      dimensionNames: {
        E: "Extraversion",
        A: "Agreeableness",
        C: "Conscientiousness",
        N: "Neuroticism",
        O: "Openness to Experience"
      },
      dimensionDescs: {
        E: {
          low: "You tend to be reserved, quiet, and prefer solitary activities.",
          mid: "You show a balance between sociability and the need for alone time.",
          high: "You tend to be sociable, energetic, and enjoy interacting with others."
        },
        A: {
          low: "You tend to be more competitive and direct in your interactions.",
          mid: "You show a balance between cooperation and assertiveness.",
          high: "You tend to be cooperative, compassionate, and considerate of others."
        },
        C: {
          low: "You tend to be more flexible and spontaneous in your approach.",
          mid: "You show a balance between structure and flexibility.",
          high: "You tend to be organized, disciplined, and goal-oriented."
        },
        N: {
          low: "You tend to be emotionally stable and calm under stressful situations.",
          mid: "You experience a normal range of positive and negative emotions.",
          high: "You tend to experience more negative emotions and greater sensitivity to stress."
        },
        O: {
          low: "You tend to prefer the conventional and practical.",
          mid: "You show a balance between curiosity and practical interests.",
          high: "You tend to be creative, curious, and open to new experiences."
        }
      }
    },

    mbti: {
      name: "MBTI",
      fullName: "Myers-Briggs Type Indicator",
      desc: "Identifies personality preferences across four dimensions: Energy, Perception, Decision-making, and Lifestyle.",
      instructions: "Select the option that best describes you in most situations. There are no right or wrong answers.",
      questions: [
        { title: "At social gatherings, you prefer to interact with many people, including strangers" },
        { title: "You tend to be more realistic than imaginative" },
        { title: "It is worse to be unjust than to be merciless" },
        { title: "You usually prefer to do things according to an established plan" },
        { title: "After spending time with a group, you feel energized" },
        { title: "You prefer to focus on specific details rather than the big picture" },
        { title: "When making decisions, you consider people's feelings first" },
        { title: "You like to have things decided and settled" },
        { title: "You prefer to initiate conversations with new people" },
        { title: "You trust experience more than intuition" },
        { title: "You value compassion more than objective truth" },
        { title: "You prefer to follow a strict schedule" },
        { title: "You find it easy to talk to strangers" },
        { title: "You pay more attention to what is real and present than to what might be" },
        { title: "You care more about group harmony than objective results" },
        { title: "You prefer to finish one project before starting another" },
        { title: "You need time alone to recharge your energy" },
        { title: "You enjoy thinking about abstract concepts and theories" },
        { title: "When solving problems, you prioritize logic over feelings" },
        { title: "You prefer to keep your options open rather than commit" },
        { title: "In your free time, you prefer to be with friends" },
        { title: "You are more interested in future possibilities than present facts" },
        { title: "You prefer to make decisions based on logical principles" },
        { title: "You feel more comfortable with structure and routines" },
        { title: "You are the life of the party" },
        { title: "You are more drawn to symbolic meanings than literal facts" },
        { title: "In a conflict, you seek the fairest solution even if someone gets upset" },
        { title: "You like to plan your vacations in advance and in detail" },
        { title: "You feel comfortable being the center of attention" },
        { title: "You enjoy exploring new ideas more than applying proven methods" },
        { title: "You tend to decide with your head rather than your heart" },
        { title: "You prefer spontaneity over planning" },
        { title: "You find it exhausting to spend a lot of time alone" },
        { title: "You prefer learning theoretical concepts before seeing practical examples" },
        { title: "You consider diplomacy more important than frankness" },
        { title: "You feel uncomfortable when plans change suddenly" },
        { title: "You talk more than you listen in conversations" },
        { title: "You trust your hunches and intuitions" },
        { title: "You value efficiency more than cooperation" },
        { title: "You enjoy improvisation and adapting on the fly" }
      ],
      typeDescriptions: {
        ISTJ: "Responsible and reliable. You value tradition, loyalty, and order. You are thorough and work steadily to fulfill your duties.",
        ISFJ: "Protective and dedicated. You are kind, responsible, and attentive to others' needs. You value harmony and stability.",
        INFJ: "Idealistic and visionary. You have a deep understanding of people and a strong desire to help others reach their potential.",
        INTJ: "Strategic and independent. You have an analytical mind and a clear vision of how to improve things. You value competence and knowledge.",
        ISTP: "Practical and observant. You enjoy understanding how things work and solving problems efficiently.",
        ISFP: "Artistic and sensitive. You value authenticity and harmony. You enjoy beauty and have a strong aesthetic sense.",
        INFP: "Idealistic and empathetic. You have strong personal values and a desire to make the world a better place.",
        INTP: "Logical and creative. You enjoy analyzing complex systems and generating innovative ideas.",
        ESTP: "Energetic and pragmatic. You enjoy action and live in the present moment. You are skilled at solving practical problems.",
        ESFP: "Spontaneous and enthusiastic. You enjoy life and spread your joy to others. You are generous and optimistic.",
        ENFP: "Enthusiastic and creative. You see possibilities everywhere and have a contagious energy to inspire others.",
        ENTP: "Innovative and challenging. You enjoy intellectual debate and constantly seek new ideas and possibilities.",
        ESTJ: "Organized and decisive. You value efficiency and order. You are a natural leader and administrator.",
        ESFJ: "Sociable and helpful. You care deeply about others and work to create harmony in your environment.",
        ENFJ: "Charismatic and empathetic. You inspire others and have a natural ability to lead with compassion.",
        ENTJ: "Born leader and strategist. You are decisive, efficient, and enjoy organizational and leadership challenges."
      }
    }
  }
};
