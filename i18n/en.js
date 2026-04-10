const LANG_EN = {
  "ui": {
    "appTitle": "Mental Health Assessments",
    "appSubtitle": "Psychological self-assessment tools",
    "tabTests": "Tests",
    "tabHistory": "History",
    "welcome": "Welcome. Select an assessment to begin.",
    "startTest": "Start test",
    "nextQuestion": "Next",
    "prevQuestion": "Previous",
    "viewResults": "View results",
    "question": "Question",
    "of": "of",
    "items": "items",
    "backToTests": "Back to tests",
    "repeatTest": "Repeat test",
    "viewHistory": "View history",
    "otherTests": "Other tests",
    "detailByItem": "Detail by item",
    "helpResources": "Help resources",
    "helpText": "If you are going through an emotional crisis, seek professional help. National Suicide Prevention Lifeline: 988 (US) or contact a mental health professional.",
    "disclaimerTitle": "Important note:",
    "disclaimerText": "This test is a self-assessment tool and does not replace a mental health professional's diagnosis. If you feel you need help, please consult a specialist.",
    "privacyTitle": "Your privacy:",
    "privacyText": "Your results are stored only in your browser (localStorage). No data is sent to any server or leaves your computer.",
    "cat_triage": "Where to start?",
    "cat_clinical": "Clinical Assessments",
    "cat_screening": "Screening & Detection",
    "cat_wellbeing": "Wellbeing & Self-Esteem",
    "cat_personality": "Personality",
    "cat_advanced": "Advanced Assessment",
    "noRecords": "No saved records.",
    "completeFirst": "Complete at least one test to see the history.",
    "goToTests": "Go to tests",
    "trend": "Trend",
    "all": "All",
    "clearHistory": "Clear history",
    "clearConfirm": "Are you sure you want to clear all history? This action cannot be undone.",
    "score": "Score",
    "outOf": "of",
    "disclaimer": "This tool is for informational purposes only and does not replace a professional evaluation. Consult a mental health specialist for a proper diagnosis.",
    "resumePrompt": "You have a test in progress",
    "continueTest": "Continue test",
    "resumeMessage": "You have a {test} test in progress ({n}/{total} questions)",
    "dismiss": "Close",
    "questionsAnswered": "questions answered",
    "inProgress": "In progress",
    "testBy": "Tests",
    "recommendedTests": "Recommended assessments",
    "highPriority": "High priority",
    "recommended": "Recommended",
    "suggested": "Suggested",
    "areasEvaluated": "Areas evaluated",
    "kbSelect": "select",
    "kbBrowse": "browse",
    "kbConfirm": "confirm",
    "kbPrevNext": "prev/next",
    "prevQuestion": "Previous",
    "suggestedRetake": "Suggested to retake",
    "triageRecommended": "Recommended by your initial assessment",
    "retakeReason": "Last taken"
  },
  "scales": {
    "agreement5": ["Strongly disagree","Disagree","Neither agree nor disagree","Agree","Strongly agree"],
    "frequency4": ["Not at all","Several days","More than half the days","Nearly every day"],
    "frequency5": ["Never","Almost never","Sometimes","Fairly often","Very often"],
    "severity4": ["Not at all","Mildly","Moderately","Severely"],
    "severity5": ["Not at all","A little bit","Moderately","Quite a bit","Extremely"],
    "yesNo": ["No","Yes"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Beck Depression Inventory-II",
      "desc": "Assesses the presence and severity of depressive symptoms over the past two weeks.",
      "instructions": "Read each group of statements carefully and select the one that best describes how you have been feeling during the past two weeks, including today.",
      "questions": [
        {
          "title": "Sadness",
          "options": [
            "I do not feel sad.",
            "I feel sad much of the time.",
            "I am sad all the time.",
            "I am so sad or unhappy that I can't stand it."
          ]
        },
        {
          "title": "Pessimism",
          "options": [
            "I am not discouraged about my future.",
            "I feel more discouraged about my future than I used to.",
            "I do not expect things to work out for me.",
            "I feel my future is hopeless and will only get worse."
          ]
        },
        {
          "title": "Past failure",
          "options": [
            "I do not feel like a failure.",
            "I have failed more than I should have.",
            "As I look back, I see a lot of failures.",
            "I feel I am a total failure as a person."
          ]
        },
        {
          "title": "Loss of pleasure",
          "options": [
            "I get as much pleasure as I ever did from the things I enjoy.",
            "I don't enjoy things as much as I used to.",
            "I get very little pleasure from the things I used to enjoy.",
            "I can't get any pleasure from the things I used to enjoy."
          ]
        },
        {
          "title": "Guilty feelings",
          "options": [
            "I don't feel particularly guilty.",
            "I feel guilty over many things I have done or should have done.",
            "I feel quite guilty most of the time.",
            "I feel guilty all of the time."
          ]
        },
        {
          "title": "Punishment feelings",
          "options": [
            "I don't feel I am being punished.",
            "I feel I may be punished.",
            "I expect to be punished.",
            "I feel I am being punished."
          ]
        },
        {
          "title": "Self-dislike",
          "options": [
            "I feel the same about myself as ever.",
            "I have lost confidence in myself.",
            "I am disappointed in myself.",
            "I dislike myself."
          ]
        },
        {
          "title": "Self-criticalness",
          "options": [
            "I don't criticize or blame myself more than usual.",
            "I am more critical of myself than I used to be.",
            "I criticize myself for all of my faults.",
            "I blame myself for everything bad that happens."
          ]
        },
        {
          "title": "Suicidal thoughts or wishes",
          "options": [
            "I don't have any thoughts of killing myself.",
            "I have thoughts of killing myself, but I would not carry them out.",
            "I would like to kill myself.",
            "I would kill myself if I had the chance."
          ]
        },
        {
          "title": "Crying",
          "options": [
            "I don't cry any more than I used to.",
            "I cry more than I used to.",
            "I cry over every little thing.",
            "I feel like crying, but I can't."
          ]
        },
        {
          "title": "Agitation",
          "options": [
            "I am no more restless or wound up than usual.",
            "I feel more restless or wound up than usual.",
            "I am so restless or agitated that it's hard to stay still.",
            "I am so restless or agitated that I have to keep moving or doing something."
          ]
        },
        {
          "title": "Loss of interest",
          "options": [
            "I have not lost interest in other people or activities.",
            "I am less interested in other people or things than before.",
            "I have lost most of my interest in other people or things.",
            "It's hard to get interested in anything."
          ]
        },
        {
          "title": "Indecisiveness",
          "options": [
            "I make decisions about as well as ever.",
            "I find it more difficult to make decisions than usual.",
            "I have much greater difficulty in making decisions than I used to.",
            "I have trouble making any decisions."
          ]
        },
        {
          "title": "Worthlessness",
          "options": [
            "I do not feel I am worthless.",
            "I don't consider myself as worthwhile and useful as I used to.",
            "I feel more worthless as compared to others.",
            "I feel utterly worthless."
          ]
        },
        {
          "title": "Loss of energy",
          "options": [
            "I have as much energy as ever.",
            "I have less energy than I used to have.",
            "I don't have enough energy to do very much.",
            "I don't have enough energy to do anything."
          ]
        },
        {
          "title": "Changes in sleeping pattern",
          "options": [
            "I have not experienced any change in my sleeping.",
            "I sleep somewhat more or somewhat less than usual.",
            "I sleep a lot more or a lot less than usual.",
            "I sleep most of the day or I wake up 1-2 hours early and can't get back to sleep."
          ]
        },
        {
          "title": "Irritability",
          "options": [
            "I am not more irritable than usual.",
            "I am more irritable than usual.",
            "I am much more irritable than usual.",
            "I am irritable all the time."
          ]
        },
        {
          "title": "Changes in appetite",
          "options": [
            "I have not experienced any change in my appetite.",
            "My appetite is somewhat less or somewhat greater than usual.",
            "My appetite is much less or much greater than usual.",
            "I have no appetite at all or I crave food all the time."
          ]
        },
        {
          "title": "Concentration difficulty",
          "options": [
            "I can concentrate as well as ever.",
            "I can't concentrate as well as usual.",
            "It's hard to keep my mind on anything for very long.",
            "I find I can't concentrate on anything."
          ]
        },
        {
          "title": "Tiredness or fatigue",
          "options": [
            "I am no more tired or fatigued than usual.",
            "I get more tired or fatigued more easily than usual.",
            "I am too tired or fatigued to do a lot of the things I used to do.",
            "I am too tired or fatigued to do most of the things I used to do."
          ]
        },
        {
          "title": "Loss of interest in sex",
          "options": [
            "I have not noticed any recent change in my interest in sex.",
            "I am less interested in sex than I used to be.",
            "I am much less interested in sex now.",
            "I have lost interest in sex completely."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Your score suggests a minimal level of depression. It is normal to experience emotional ups and downs." },
        "mild": { "label": "Mild", "desc": "Your score suggests mild depressive symptoms. Consider talking to a professional if they persist." },
        "moderate": { "label": "Moderate", "desc": "Your score suggests moderate depressive symptoms. It is recommended to consult with a mental health professional." },
        "severe": { "label": "Severe", "desc": "Your score suggests severe depressive symptoms. It is important to seek professional help as soon as possible." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Beck Anxiety Inventory",
      "desc": "Assesses the severity of anxiety symptoms over the past week.",
      "instructions": "Indicate how much each symptom has bothered you during the past week, including today.",
      "questions": [
        { "title": "Numbness or tingling" },
        { "title": "Feeling hot" },
        { "title": "Wobbliness in legs" },
        { "title": "Unable to relax" },
        { "title": "Fear of worst happening" },
        { "title": "Dizzy or lightheaded" },
        { "title": "Heart pounding or racing" },
        { "title": "Unsteady" },
        { "title": "Terrified or afraid" },
        { "title": "Nervous" },
        { "title": "Feeling of choking" },
        { "title": "Hands trembling" },
        { "title": "Shaky or unsteady" },
        { "title": "Fear of losing control" },
        { "title": "Difficulty in breathing" },
        { "title": "Fear of dying" },
        { "title": "Scared" },
        { "title": "Indigestion" },
        { "title": "Faint or lightheaded" },
        { "title": "Face flushed" },
        { "title": "Hot/cold sweats" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Your score suggests a minimal level of anxiety." },
        "mild": { "label": "Mild", "desc": "Your score suggests mild anxiety. Monitor your symptoms." },
        "moderate": { "label": "Moderate", "desc": "Your score suggests moderate anxiety. Consider consulting with a professional." },
        "severe": { "label": "Severe", "desc": "Your score suggests severe anxiety. It is recommended to seek professional help." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Generalized Anxiety Disorder-7",
      "desc": "Assesses the severity of generalized anxiety over the past two weeks.",
      "instructions": "Over the last 2 weeks, how often have you been bothered by the following problems?",
      "questions": [
        { "title": "Feeling nervous, anxious, or on edge" },
        { "title": "Not being able to stop or control worrying" },
        { "title": "Worrying too much about different things" },
        { "title": "Trouble relaxing" },
        { "title": "Being so restless that it is hard to sit still" },
        { "title": "Becoming easily annoyed or irritable" },
        { "title": "Feeling afraid, as if something awful might happen" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Your score suggests a minimal level of anxiety." },
        "mild": { "label": "Mild", "desc": "Your score suggests mild anxiety." },
        "moderate": { "label": "Moderate", "desc": "Your score suggests moderate anxiety. Consider consulting with a professional." },
        "severe": { "label": "Severe", "desc": "Your score suggests severe anxiety. It is recommended to seek professional help." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "McLean Screening Instrument for Borderline Personality Disorder",
      "desc": "Screening tool for traits associated with borderline personality disorder.",
      "instructions": "Answer yes or no to each of the following questions.",
      "questions": [
        { "title": "Have you ever deliberately cut, burned, or otherwise hurt yourself on purpose?" },
        { "title": "Have you ever made a suicide attempt?" },
        { "title": "Have you had at least two relationships (or attempted relationships) that were very intense but unstable?" },
        { "title": "Does your sense of who you are often change dramatically?" },
        { "title": "Does your mood frequently change suddenly?" },
        { "title": "Do you often feel intense anger that is difficult to control?" },
        { "title": "Do you often distrust other people?" },
        { "title": "Do you frequently feel unreal or as if things around you are unreal?" },
        { "title": "Do you frequently feel empty?" },
        { "title": "Do you often make desperate efforts to avoid being abandoned by someone?" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Your score suggests a low presence of traits associated with borderline personality disorder." },
        "moderate": {
          "label": "Moderate",
          "desc": "Your score suggests some traits associated with borderline personality disorder. Consider consulting with a professional."
        },
        "severe": {
          "label": "Significant",
          "desc": "Your score suggests a significant presence of borderline traits. A comprehensive professional evaluation is recommended."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Perceived Stress Scale-10",
      "desc": "Measures the degree to which life situations are perceived as stressful over the past month.",
      "instructions": "The following questions ask about your feelings and thoughts during the last month. Indicate how often you felt or thought a certain way.",
      "questions": [
        { "title": "How often have you been upset because of something that happened unexpectedly?" },
        { "title": "How often have you felt that you were unable to control the important things in your life?" },
        { "title": "How often have you felt nervous and stressed?" },
        { "title": "How often have you dealt successfully with irritating life hassles?" },
        { "title": "How often have you felt that you were effectively coping with important changes that were occurring in your life?" },
        { "title": "How often have you felt confident about your ability to handle your personal problems?" },
        { "title": "How often have you felt that things were going your way?" },
        { "title": "How often have you found that you could not cope with all the things that you had to do?" },
        { "title": "How often have you been able to control irritations in your life?" },
        { "title": "How often have you felt that you were on top of things?" }
      ],
      "results": {
        "minimal": { "label": "Low", "desc": "Your perceived stress level is low. Continue with your current coping strategies." },
        "moderate": { "label": "Moderate", "desc": "Your perceived stress level is moderate. Consider incorporating stress management techniques." },
        "severe": { "label": "High", "desc": "Your perceived stress level is high. It is recommended to seek professional support and stress reduction techniques." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Adult ADHD Self-Report Scale v1.1",
      "desc": "Screening tool for attention deficit hyperactivity disorder symptoms in adults.",
      "instructions": "Answer the following questions thinking about how you have felt and behaved over the past 6 months.",
      "questions": [
        { "title": "How often do you have difficulty finishing the final details of a project, once the challenging parts have been done?" },
        { "title": "How often do you have difficulty getting things in order when you have to do a task that requires organization?" },
        { "title": "How often do you have problems remembering appointments or obligations?" },
        { "title": "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?" },
        { "title": "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?" },
        { "title": "How often do you feel overly active and compelled to do things, as if you were driven by a motor?" }
      ],
      "results": {
        "minimal": { "label": "Unlikely", "desc": "Your score suggests a low likelihood of ADHD." },
        "moderate": { "label": "Possible", "desc": "Your score suggests some symptoms consistent with ADHD. Consider a professional evaluation." },
        "severe": { "label": "Likely", "desc": "Your score suggests a high likelihood of ADHD symptoms. A comprehensive professional evaluation is recommended." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Obsessive-Compulsive Inventory-Revised",
      "desc": "Assesses symptoms of obsessive-compulsive disorder.",
      "instructions": "The following statements refer to experiences that many people have in their everyday lives. Indicate to what degree they have bothered you during the past month.",
      "questions": [
        { "title": "I have saved up so many things that they get in the way" },
        { "title": "I check things more often than necessary" },
        { "title": "I get upset if objects are not arranged properly" },
        { "title": "I feel compelled to count while I am doing things" },
        { "title": "I find it difficult to touch an object when I know it has been touched by strangers or certain people" },
        { "title": "I find it difficult to control my own thoughts" },
        { "title": "I collect things I don't need" },
        { "title": "I repeatedly check doors, windows, drawers, etc." },
        { "title": "I get upset if others change the way I have arranged things" },
        { "title": "I feel I have to repeat certain numbers" },
        { "title": "I sometimes have to wash or clean myself simply because I feel contaminated" },
        { "title": "I am upset by unpleasant thoughts that come into my mind against my will" },
        { "title": "I avoid throwing things away because I am afraid I might need them later" },
        { "title": "I repeatedly check gas and water taps and light switches after turning them off" },
        { "title": "I need things to be arranged in a particular way" },
        { "title": "I feel that there are good and bad numbers" },
        { "title": "I wash my hands more often and longer than necessary" },
        { "title": "I frequently get nasty thoughts and have difficulty in getting rid of them" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Your score suggests a minimal level of obsessive-compulsive symptoms." },
        "moderate": { "label": "Moderate", "desc": "Your score suggests moderate obsessive-compulsive symptoms. Consider consulting with a professional." },
        "severe": { "label": "Significant", "desc": "Your score suggests significant obsessive-compulsive symptoms. A professional evaluation is recommended." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "PTSD Checklist for DSM-5",
      "desc": "Assesses post-traumatic stress disorder symptoms over the past month.",
      "instructions": "Below is a list of problems that people sometimes have in response to a very stressful experience. Indicate how much you have been bothered by that problem in the past month.",
      "questions": [
        { "title": "Repeated, disturbing, and unwanted memories of the stressful experience" },
        { "title": "Repeated, disturbing dreams of the stressful experience" },
        { "title": "Suddenly feeling or acting as if the stressful experience were actually happening again" },
        { "title": "Feeling very upset when something reminded you of the stressful experience" },
        { "title": "Having strong physical reactions when something reminded you of the stressful experience (e.g., heart pounding, trouble breathing, sweating)" },
        { "title": "Avoiding memories, thoughts, or feelings related to the stressful experience" },
        { "title": "Avoiding external reminders of the stressful experience (e.g., people, places, conversations, activities, objects, or situations)" },
        { "title": "Trouble remembering important parts of the stressful experience" },
        { "title": "Having strong negative beliefs about yourself, other people, or the world" },
        { "title": "Blaming yourself or someone else for the stressful experience or what happened after it" },
        { "title": "Having strong negative feelings such as fear, horror, anger, guilt, or shame" },
        { "title": "Loss of interest in activities that you used to enjoy" },
        { "title": "Feeling distant or cut off from other people" },
        { "title": "Trouble experiencing positive feelings" },
        { "title": "Irritable behavior, angry outbursts, or acting aggressively" },
        { "title": "Taking too many risks or doing things that could cause you harm" },
        { "title": "Being superalert or watchful or on guard" },
        { "title": "Feeling jumpy or easily startled" },
        { "title": "Having difficulty concentrating" },
        { "title": "Trouble falling or staying asleep" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Your score suggests a low level of post-traumatic stress symptoms." },
        "moderate": { "label": "Moderate", "desc": "Your score suggests moderate post-traumatic stress symptoms. Consider consulting with a professional." },
        "severe": { "label": "Significant", "desc": "Your score suggests significant post-traumatic stress symptoms. It is recommended to seek professional help." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Big Five Inventory-44",
      "desc": "Assesses five major personality dimensions: Extraversion, Agreeableness, Conscientiousness, Neuroticism, and Openness to Experience.",
      "instructions": "I see myself as someone who... Indicate how much you agree or disagree with each statement.",
      "questions": [
        { "title": "Is talkative" },
        { "title": "Tends to find fault with others" },
        { "title": "Does a thorough job" },
        { "title": "Is depressed, blue" },
        { "title": "Is original, comes up with new ideas" },
        { "title": "Is reserved" },
        { "title": "Is helpful and unselfish with others" },
        { "title": "Can be somewhat careless" },
        { "title": "Is relaxed, handles stress well" },
        { "title": "Is curious about many different things" },
        { "title": "Is full of energy" },
        { "title": "Starts quarrels with others" },
        { "title": "Is a reliable worker" },
        { "title": "Can be tense" },
        { "title": "Is ingenious, a deep thinker" },
        { "title": "Generates a lot of enthusiasm" },
        { "title": "Has a forgiving nature" },
        { "title": "Tends to be disorganized" },
        { "title": "Worries a lot" },
        { "title": "Has an active imagination" },
        { "title": "Tends to be quiet" },
        { "title": "Is generally trusting" },
        { "title": "Tends to be lazy" },
        { "title": "Is emotionally stable, not easily upset" },
        { "title": "Is inventive" },
        { "title": "Has an assertive personality" },
        { "title": "Can be cold and aloof" },
        { "title": "Perseveres until the task is finished" },
        { "title": "Can be moody" },
        { "title": "Values artistic, aesthetic experiences" },
        { "title": "Is sometimes shy, inhibited" },
        { "title": "Is considerate and kind to almost everyone" },
        { "title": "Does things efficiently" },
        { "title": "Remains calm in tense situations" },
        { "title": "Prefers work that is routine" },
        { "title": "Is outgoing, sociable" },
        { "title": "Is sometimes rude to others" },
        { "title": "Makes plans and follows through with them" },
        { "title": "Gets nervous easily" },
        { "title": "Likes to reflect, play with ideas" },
        { "title": "Has few artistic interests" },
        { "title": "Likes to cooperate with others" },
        { "title": "Is easily distracted" },
        { "title": "Is sophisticated in art, music, or literature" }
      ],
      "dimensionNames": {
        "E": "Extraversion",
        "A": "Agreeableness",
        "C": "Conscientiousness",
        "N": "Neuroticism",
        "O": "Openness to Experience"
      },
      "dimensionDescs": {
        "E": {
          "low": "You tend to be reserved, quiet, and prefer solitary activities.",
          "mid": "You show a balance between sociability and the need for alone time.",
          "high": "You tend to be sociable, energetic, and enjoy interacting with others."
        },
        "A": {
          "low": "You tend to be more competitive and direct in your interactions.",
          "mid": "You show a balance between cooperation and assertiveness.",
          "high": "You tend to be cooperative, compassionate, and considerate of others."
        },
        "C": {
          "low": "You tend to be more flexible and spontaneous in your approach.",
          "mid": "You show a balance between structure and flexibility.",
          "high": "You tend to be organized, disciplined, and goal-oriented."
        },
        "N": {
          "low": "You tend to be emotionally stable and calm under stressful situations.",
          "mid": "You experience a normal range of positive and negative emotions.",
          "high": "You tend to experience more negative emotions and greater sensitivity to stress."
        },
        "O": {
          "low": "You tend to prefer the conventional and practical.",
          "mid": "You show a balance between curiosity and practical interests.",
          "high": "You tend to be creative, curious, and open to new experiences."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Myers-Briggs Type Indicator",
      "desc": "Identifies personality preferences across four dimensions: Energy, Perception, Decision-making, and Lifestyle.",
      "instructions": "Select the option that best describes you in most situations. There are no right or wrong answers.",
      "questions": [
        { "title": "At social gatherings, you prefer to interact with many people, including strangers" },
        { "title": "You tend to be more realistic than imaginative" },
        { "title": "It is worse to be unjust than to be merciless" },
        { "title": "You usually prefer to do things according to an established plan" },
        { "title": "After spending time with a group, you feel energized" },
        { "title": "You prefer to focus on specific details rather than the big picture" },
        { "title": "When making decisions, you consider people's feelings first" },
        { "title": "You like to have things decided and settled" },
        { "title": "You prefer to initiate conversations with new people" },
        { "title": "You trust experience more than intuition" },
        { "title": "You value compassion more than objective truth" },
        { "title": "You prefer to follow a strict schedule" },
        { "title": "You find it easy to talk to strangers" },
        { "title": "You pay more attention to what is real and present than to what might be" },
        { "title": "You care more about group harmony than objective results" },
        { "title": "You prefer to finish one project before starting another" },
        { "title": "You need time alone to recharge your energy" },
        { "title": "You enjoy thinking about abstract concepts and theories" },
        { "title": "When solving problems, you prioritize logic over feelings" },
        { "title": "You prefer to keep your options open rather than commit" },
        { "title": "In your free time, you prefer to be with friends" },
        { "title": "You are more interested in future possibilities than present facts" },
        { "title": "You prefer to make decisions based on logical principles" },
        { "title": "You feel more comfortable with structure and routines" },
        { "title": "You are the life of the party" },
        { "title": "You are more drawn to symbolic meanings than literal facts" },
        { "title": "In a conflict, you seek the fairest solution even if someone gets upset" },
        { "title": "You like to plan your vacations in advance and in detail" },
        { "title": "You feel comfortable being the center of attention" },
        { "title": "You enjoy exploring new ideas more than applying proven methods" },
        { "title": "You tend to decide with your head rather than your heart" },
        { "title": "You prefer spontaneity over planning" },
        { "title": "You find it exhausting to spend a lot of time alone" },
        { "title": "You prefer learning theoretical concepts before seeing practical examples" },
        { "title": "You consider diplomacy more important than frankness" },
        { "title": "You feel uncomfortable when plans change suddenly" },
        { "title": "You talk more than you listen in conversations" },
        { "title": "You trust your hunches and intuitions" },
        { "title": "You value efficiency more than cooperation" },
        { "title": "You enjoy improvisation and adapting on the fly" }
      ],
      "typeDescriptions": {
        "ISTJ": "Responsible and reliable. You value tradition, loyalty, and order. You are thorough and work steadily to fulfill your duties.",
        "ISFJ": "Protective and dedicated. You are kind, responsible, and attentive to others' needs. You value harmony and stability.",
        "INFJ": "Idealistic and visionary. You have a deep understanding of people and a strong desire to help others reach their potential.",
        "INTJ": "Strategic and independent. You have an analytical mind and a clear vision of how to improve things. You value competence and knowledge.",
        "ISTP": "Practical and observant. You enjoy understanding how things work and solving problems efficiently.",
        "ISFP": "Artistic and sensitive. You value authenticity and harmony. You enjoy beauty and have a strong aesthetic sense.",
        "INFP": "Idealistic and empathetic. You have strong personal values and a desire to make the world a better place.",
        "INTP": "Logical and creative. You enjoy analyzing complex systems and generating innovative ideas.",
        "ESTP": "Energetic and pragmatic. You enjoy action and live in the present moment. You are skilled at solving practical problems.",
        "ESFP": "Spontaneous and enthusiastic. You enjoy life and spread your joy to others. You are generous and optimistic.",
        "ENFP": "Enthusiastic and creative. You see possibilities everywhere and have a contagious energy to inspire others.",
        "ENTP": "Innovative and challenging. You enjoy intellectual debate and constantly seek new ideas and possibilities.",
        "ESTJ": "Organized and decisive. You value efficiency and order. You are a natural leader and administrator.",
        "ESFJ": "Sociable and helpful. You care deeply about others and work to create harmony in your environment.",
        "ENFJ": "Charismatic and empathetic. You inspire others and have a natural ability to lead with compassion.",
        "ENTJ": "Born leader and strategist. You are decisive, efficient, and enjoy organizational and leadership challenges."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Patient Health Questionnaire-9",
      "desc": "Rapid depression screening widely used in primary care. 9 questions.",
      "instructions": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
      "sharedOptions": ["Not at all","Several days","More than half the days","Nearly every day"],
      "questions": [
        { "title": "Little interest or pleasure in doing things" },
        { "title": "Feeling down, depressed, or hopeless" },
        { "title": "Trouble falling or staying asleep, or sleeping too much" },
        { "title": "Feeling tired or having little energy" },
        { "title": "Poor appetite or overeating" },
        { "title": "Feeling bad about yourself" },
        { "title": "Trouble concentrating on things" },
        { "title": "Moving or speaking so slowly that others notice, or the opposite" },
        { "title": "Thoughts that you would be better off dead, or of hurting yourself in some way" }
      ],
      "results": {
        "minima": { "label": "Minimal", "desc": "No significant symptoms of depression detected. Continue to take care of your emotional well-being." },
        "leve": { "label": "Mild", "desc": "Mild symptoms of depression detected. Consider monitoring your mood and adopting healthy habits." },
        "moderada": { "label": "Moderate", "desc": "Moderate symptoms of depression detected. Consulting with a mental health professional is recommended." },
        "moderadamente_grave": {
          "label": "Moderately severe",
          "desc": "Moderately severe symptoms of depression detected. It is important to seek professional help as soon as possible."
        },
        "grave": { "label": "Severe", "desc": "Severe symptoms of depression detected. Seeking urgent professional attention is recommended." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Alcohol Use Disorders Identification Test",
      "desc": "Developed by the WHO to detect problematic alcohol consumption.",
      "instructions": "Answer the following questions about your alcohol consumption. Be as honest as possible.",
      "questions": [
        {
          "title": "How often do you consume alcoholic beverages?",
          "options": ["Never","Once a month or less","2 to 4 times a month","2 to 3 times a week","4 or more times a week"]
        },
        {
          "title": "How many standard drinks containing alcohol do you typically have on a typical day when you are drinking?",
          "options": ["1 or 2","3 or 4","5 or 6","7 to 9","10 or more"]
        },
        {
          "title": "How often do you have six or more standard drinks on one occasion?",
          "options": ["Never","Less than monthly","Monthly","Weekly","Daily or almost daily"]
        },
        {
          "title": "How often in the last year have you found that you were unable to stop drinking once you had started?",
          "options": ["Never","Less than monthly","Monthly","Weekly","Daily or almost daily"]
        },
        {
          "title": "How often in the last year have you failed to do what was normally expected from you because of drinking?",
          "options": ["Never","Less than monthly","Monthly","Weekly","Daily or almost daily"]
        },
        {
          "title": "How often in the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
          "options": ["Never","Less than monthly","Monthly","Weekly","Daily or almost daily"]
        },
        {
          "title": "How often in the last year have you had a feeling of guilt or remorse after drinking?",
          "options": ["Never","Less than monthly","Monthly","Weekly","Daily or almost daily"]
        },
        {
          "title": "How often in the last year have you been unable to remember what happened the night before because you had been drinking?",
          "options": ["Never","Less than monthly","Monthly","Weekly","Daily or almost daily"]
        },
        {
          "title": "Have you or someone else been injured because of your drinking?",
          "options": ["No","Yes, but not in the last year","Yes, in the last year"]
        },
        {
          "title": "Has a relative, friend, doctor, or other health worker been concerned about your drinking or suggested you cut down?",
          "options": ["No","Yes, but not in the last year","Yes, in the last year"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Low risk", "desc": "Your alcohol consumption is within low-risk limits. Maintain healthy habits." },
        "riesgo_moderado": {
          "label": "Moderate risk",
          "desc": "Your alcohol consumption presents a moderate risk. Consider reducing your consumption and consulting with a professional."
        },
        "riesgo_alto": { "label": "High risk", "desc": "Your alcohol consumption presents a high risk. It is recommended to seek professional guidance to reduce consumption." },
        "posible_dependencia": { "label": "Possible dependence", "desc": "The results suggest a possible alcohol dependence. It is important to seek specialized professional help." }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Insomnia Severity Index",
      "desc": "Evaluates the nature, severity, and impact of insomnia over the last two weeks.",
      "instructions": "Assess the severity of your sleep problems over the last 2 weeks.",
      "questions": [
        {
          "title": "Difficulty falling asleep",
          "options": ["None","Mild","Moderate","Severe","Very severe"]
        },
        {
          "title": "Difficulty staying asleep",
          "options": ["None","Mild","Moderate","Severe","Very severe"]
        },
        {
          "title": "Waking up too early in the morning",
          "options": ["None","Mild","Moderate","Severe","Very severe"]
        },
        {
          "title": "How satisfied are you with your current sleep pattern?",
          "options": ["Very satisfied","Satisfied","Moderately satisfied","Dissatisfied","Very dissatisfied"]
        },
        {
          "title": "To what extent do you notice your sleep problem interfering with your daily functioning?",
          "options": ["Not at all","A little","Somewhat","Much","Very much"]
        },
        {
          "title": "To what extent do you think others notice your sleep problem affecting your quality of life?",
          "options": ["Not at all","A little","Somewhat","Much","Very much"]
        },
        {
          "title": "How worried are you about your current sleep problem?",
          "options": ["Not at all","A little","Somewhat","Much","Very much"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "No clinical insomnia", "desc": "No clinical insomnia problems detected. Your sleep appears to be within normal parameters." },
        "subclinico": {
          "label": "Subclinical insomnia",
          "desc": "Some insomnia symptoms are detected, but they do not reach clinical levels. Consider improving your sleep hygiene."
        },
        "clinico_moderado": { "label": "Moderate clinical insomnia", "desc": "Moderate severity clinical insomnia is detected. Consulting a healthcare professional is recommended." },
        "clinico_grave": {
          "label": "Severe clinical insomnia",
          "desc": "Severe clinical insomnia is detected. It is important to seek professional care to address sleep problems."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Eating Attitudes Test-26",
      "desc": "Detects attitudes and behaviors characteristic of eating disorders.",
      "instructions": "Indicate how often you exhibit each of the following attitudes or behaviors. Answer honestly.",
      "sharedOptions": ["Never","Rarely","Sometimes","Often","Very often","Always"],
      "questions": [
        { "title": "I am terrified about being overweight" },
        { "title": "I avoid eating when I am hungry" },
        { "title": "I worry about food" },
        { "title": "I have had binges where I feel I cannot stop eating" },
        { "title": "I cut my food into small pieces" },
        { "title": "I know the calorie content of the foods I eat" },
        { "title": "I specifically avoid foods high in carbohydrates" },
        { "title": "I feel that others would prefer me to eat more" },
        { "title": "I vomit after I have eaten" },
        { "title": "I feel extremely guilty after eating" },
        { "title": "I am preoccupied with the desire to be thinner" },
        { "title": "I think about burning off calories when I exercise" },
        { "title": "Others think I am too thin" },
        { "title": "I am preoccupied with the thought of having fat on my body" },
        { "title": "I take longer than others to eat my meals" },
        { "title": "I avoid foods with sugar in them" },
        { "title": "I eat diet foods" },
        { "title": "I feel that food controls my life" },
        { "title": "I display self-control around food" },
        { "title": "I feel that others pressure me to eat" },
        { "title": "I spend too much time and thought on food" },
        { "title": "I feel uncomfortable after eating sweets" },
        { "title": "I am on a diet" },
        { "title": "I like my stomach to be empty" },
        { "title": "I enjoy trying new and rich foods" },
        { "title": "I have the impulse to vomit after meals" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Low risk", "desc": "No significant at-risk eating attitudes detected. Maintain a healthy relationship with food." },
        "riesgo_significativo": {
          "label": "Significant risk",
          "desc": "Eating attitudes that could indicate an eating disorder are detected. Consulting with a specialized healthcare professional is recommended."
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Mood Disorder Questionnaire",
      "desc": "Rapid screening tool for bipolar disorder and bipolar spectrum.",
      "instructions": "Answer the following questions about experiences you may have had at some point in your life.",
      "questions": [
        {
          "title": "Have you ever had a period when you felt so good or so hyper that other people thought you weren't yourself?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you were so irritable that you yelled at people or started fights?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you felt much more self-confident than usual?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you slept much less than usual and didn't miss it?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you were much more talkative or spoke faster than usual?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when thoughts raced through your mind?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you were so easily distracted that you had difficulty concentrating?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you had much more energy than usual?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you were much more active or did many more things than usual?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you were much more social or outgoing than usual?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you were much more interested in sex than usual?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you did things that were unusual for you or that others considered excessive or risky?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have you ever had a period when you spent money in a way that caused problems for you or your family?",
          "options": ["No","Yes"]
        },
        {
          "title": "Have several of these experiences occurred during the same period of time?",
          "options": ["No","Yes"]
        },
        {
          "title": "If you answered YES to any previous question, how much of a problem did they cause you?",
          "options": ["No problem","Minor problem","Moderate problem","Severe problem"]
        }
      ],
      "results": {
        "positive": {
          "label": "Positive screening for bipolar disorder",
          "desc": "Your responses suggest the possibility of a bipolar spectrum disorder. This result is NOT a diagnosis. A comprehensive professional evaluation with a psychiatrist is strongly recommended."
        },
        "negative": {
          "label": "Negative screening",
          "desc": "Your responses do not suggest the presence of a bipolar spectrum disorder according to this screening instrument. Remember that this questionnaire is only a screening tool and does not replace a professional evaluation."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Social Phobia Inventory",
      "desc": "Evaluates the presence and severity of social anxiety symptoms.",
      "instructions": "Indicate how much the following problems have bothered you during the last week.",
      "sharedOptions": ["Not at all","A little bit","Somewhat","Much","Extremely"],
      "questions": [
        { "title": "I am afraid of people in authority." },
        { "title": "Blushing in front of people bothers me." },
        { "title": "Parties and social events frighten me." },
        { "title": "I avoid talking to people I don't know." },
        { "title": "I am very afraid of being criticized." },
        { "title": "The fear of feeling embarrassed makes me avoid doing things or talking to people." },
        { "title": "Sweating in front of people causes me distress." },
        { "title": "I avoid going to parties." },
        { "title": "I avoid activities where I am the center of attention." },
        { "title": "Talking to strangers frightens me." },
        { "title": "I dread having to speak in public." },
        { "title": "I would do anything to avoid being criticized." },
        { "title": "Heart palpitations bother me when I am with people." },
        { "title": "I am afraid to do things when people might be watching me." },
        { "title": "My biggest fears are being embarrassed or making a fool of myself." },
        { "title": "I avoid talking to anyone in authority." },
        { "title": "Trembling or shaking in front of others causes me distress." }
      ],
      "results": {
        "low": { "label": "Low social anxiety", "desc": "Your score indicates a low level of social anxiety." },
        "mild": { "label": "Mild social anxiety", "desc": "Your score suggests a mild level of social anxiety." },
        "moderate": {
          "label": "Moderate social anxiety",
          "desc": "Your score indicates a moderate level of social anxiety. You might benefit from seeking professional support."
        },
        "severe": { "label": "Severe social anxiety", "desc": "Your score suggests a severe level of social anxiety. Seeking professional help is recommended." },
        "very_severe": {
          "label": "Very severe social anxiety",
          "desc": "Your score indicates a very severe level of social anxiety. Seeking professional help is strongly recommended."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Rosenberg Self-Esteem Scale",
      "desc": "The most widely used measure of global self-esteem. It assesses feelings of self-worth.",
      "instructions": "Indicate your degree of agreement with each of the following statements.",
      "sharedOptions": ["Strongly disagree","Disagree","Agree","Strongly agree"],
      "questions": [
        { "title": "I feel that I am a person of worth, at least on an equal plane with others." },
        { "title": "I feel that I have positive qualities." },
        { "title": "All in all, I am inclined to feel that I am a failure." },
        { "title": "I am able to do things as well as most other people." },
        { "title": "I feel I do not have much to be proud of." },
        { "title": "I take a positive attitude toward myself." },
        { "title": "On the whole, I am satisfied with myself." },
        { "title": "I wish I could have more respect for myself." },
        { "title": "At times I feel truly useless." },
        { "title": "At times I think I am good for nothing." }
      ],
      "results": {
        "low": { "label": "Low self-esteem", "desc": "Your score suggests a low level of self-esteem. Professional support is recommended." },
        "normal": { "label": "Normal self-esteem", "desc": "Your score indicates a normal and healthy level of self-esteem." },
        "high": { "label": "High self-esteem", "desc": "Your score indicates a high level of self-esteem." }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "WHO-5 Well-Being Index",
      "desc": "A brief measure of emotional well-being developed by the WHO. Only 5 questions.",
      "instructions": "Indicate how you have felt over the last two weeks.",
      "sharedOptions": [
        "At no time",
        "Some of the time",
        "Less than half of the time",
        "More than half of the time",
        "Most of the time",
        "All of the time"
      ],
      "questions": [
        { "title": "I have felt cheerful and in good spirits." },
        { "title": "I have felt calm and relaxed." },
        { "title": "I have felt active and vigorous." },
        { "title": "I have woken up feeling fresh and rested." },
        { "title": "My daily life has been full of things that interest me." }
      ],
      "results": {
        "low": { "label": "Low well-being", "desc": "Indicates a low level of emotional well-being. Professional evaluation is recommended." },
        "reduced": { "label": "Reduced well-being", "desc": "Indicates reduced emotional well-being. Consider speaking with a mental health professional." },
        "moderate": { "label": "Moderate well-being", "desc": "Indicates a moderate level of emotional well-being." },
        "high": { "label": "High well-being", "desc": "Indicates a high level of emotional well-being." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Autism Spectrum Quotient — 10 items",
      "desc": "Brief screening for traits associated with the autism spectrum. Developed by Baron-Cohen et al.",
      "instructions": "Read each statement carefully and indicate your degree of agreement or disagreement.",
      "sharedOptions": [
            "Definitely agree",
            "Slightly agree",
            "Slightly disagree",
            "Definitely disagree"
      ],
      "questions": [
            {
                  "title": "I often notice small sounds when others do not"
            },
            {
                  "title": "When I'm reading a story, I find it difficult to work out the characters' intentions"
            },
            {
                  "title": "I find it easy to 'read between the lines' when someone is talking to me"
            },
            {
                  "title": "I usually concentrate more on the whole picture, rather than the small details"
            },
            {
                  "title": "I know how to tell if someone listening to me is getting bored"
            },
            {
                  "title": "I find it easy to do more than one thing at once"
            },
            {
                  "title": "I find it easy to work out what someone is thinking or feeling just by looking at their face"
            },
            {
                  "title": "If there is an interruption, I can switch back to what I was doing very quickly"
            },
            {
                  "title": "I like to collect information about categories of things"
            },
            {
                  "title": "I find it difficult to work out people's intentions"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Few autistic traits",
                  "desc": "Your score does not suggest significant autism spectrum traits. However, if you have concerns, consult a professional."
            },
            "moderado": {
                  "label": "Some autistic traits",
                  "desc": "Your score indicates some traits associated with the autism spectrum, though below the clinical referral threshold (≥6)."
            },
            "alto": {
                  "label": "Significant autistic traits",
                  "desc": "Your score exceeds the referral threshold (≥6). A comprehensive diagnostic evaluation with a specialized professional is recommended."
            },
            "muy_alto": {
                  "label": "Very significant autistic traits",
                  "desc": "Your score is high. It is strongly recommended to seek a comprehensive diagnostic evaluation with a specialist in autism spectrum disorders."
            }
      }
},
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Autism Spectrum Quotient — 50 items",
      "desc": "Comprehensive assessment of autism spectrum traits across five domains: social skills, attention switching, attention to detail, communication, and imagination.",
      "instructions": "Read each statement carefully and indicate your degree of agreement or disagreement. There are no right or wrong answers.",
      "questions": [
            {
                  "title": "I prefer to do things with others rather than on my own"
            },
            {
                  "title": "I prefer to do things the same way over and over again"
            },
            {
                  "title": "If I try to imagine something, I find it very easy to create a picture in my mind"
            },
            {
                  "title": "I frequently get so strongly absorbed in one thing that I lose sight of other things"
            },
            {
                  "title": "I often notice small sounds when others do not"
            },
            {
                  "title": "I usually notice car number plates or similar strings of information"
            },
            {
                  "title": "Other people frequently tell me that what I've said is impolite, even though I think it is polite"
            },
            {
                  "title": "When I'm reading a story, I can easily imagine what the characters might look like"
            },
            {
                  "title": "I am fascinated by dates"
            },
            {
                  "title": "In a social group, I can easily keep track of several different people's conversations"
            },
            {
                  "title": "I find social situations easy"
            },
            {
                  "title": "I tend to notice details that others do not"
            },
            {
                  "title": "I would rather go to a library than a party"
            },
            {
                  "title": "I find making up stories easy"
            },
            {
                  "title": "I find myself drawn more strongly to people than to things"
            },
            {
                  "title": "I tend to have very strong interests which I get upset about if I can't pursue"
            },
            {
                  "title": "I enjoy social chit-chat"
            },
            {
                  "title": "When I talk, it isn't always easy for others to get a word in edgeways"
            },
            {
                  "title": "I am fascinated by numbers"
            },
            {
                  "title": "When I'm reading a story, I find it difficult to work out the characters' intentions"
            },
            {
                  "title": "I don't particularly enjoy reading fiction"
            },
            {
                  "title": "I find it hard to make new friends"
            },
            {
                  "title": "I notice patterns in things all the time"
            },
            {
                  "title": "I would rather go to the theatre than a museum"
            },
            {
                  "title": "It does not upset me if my daily routine is disturbed"
            },
            {
                  "title": "I frequently find that I don't know how to keep a conversation going"
            },
            {
                  "title": "I find it easy to 'read between the lines' when someone is talking to me"
            },
            {
                  "title": "I usually concentrate more on the whole picture, rather than the small details"
            },
            {
                  "title": "I am not very good at remembering phone numbers"
            },
            {
                  "title": "I don't usually notice small changes in a situation, or a person's appearance"
            },
            {
                  "title": "I know how to tell if someone listening to me is getting bored"
            },
            {
                  "title": "I find it easy to do more than one thing at once"
            },
            {
                  "title": "When I talk on the phone, I'm not sure when it's my turn to speak"
            },
            {
                  "title": "I enjoy doing things spontaneously"
            },
            {
                  "title": "I am often the last to understand the point of a joke"
            },
            {
                  "title": "I find it easy to work out what someone is thinking or feeling just by looking at their face"
            },
            {
                  "title": "If there is an interruption, I can switch back to what I was doing very quickly"
            },
            {
                  "title": "I am good at social chit-chat"
            },
            {
                  "title": "People often tell me that I keep going on and on about the same thing"
            },
            {
                  "title": "When I was young, I used to enjoy playing games involving pretending with other children"
            },
            {
                  "title": "I like to collect information about categories of things"
            },
            {
                  "title": "I find it difficult to imagine what it would be like to be someone else"
            },
            {
                  "title": "I like to plan any activities I participate in carefully"
            },
            {
                  "title": "I enjoy social occasions"
            },
            {
                  "title": "I find it difficult to work out people's intentions"
            },
            {
                  "title": "New situations make me anxious"
            },
            {
                  "title": "I enjoy meeting new people"
            },
            {
                  "title": "I am a good diplomat"
            },
            {
                  "title": "I am not very good at remembering people's date of birth"
            },
            {
                  "title": "I find it very easy to play games with children that involve pretending"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Few autistic traits",
                  "desc": "Your score falls within the typical range of the general population. No significant autism spectrum traits are suggested."
            },
            "leve": {
                  "label": "Mild autistic traits",
                  "desc": "Your score indicates some autism spectrum traits, within the average range. Many people without a diagnosis score in this range."
            },
            "moderado": {
                  "label": "Moderate autistic traits",
                  "desc": "Your score exceeds the threshold of 26 and suggests above-average autistic traits. Consider consulting a professional if you experience difficulties."
            },
            "alto": {
                  "label": "Significant autistic traits",
                  "desc": "Your score exceeds the clinical threshold of 32. 80% of people diagnosed with autism score in this range. A diagnostic evaluation is recommended."
            },
            "muy_alto": {
                  "label": "Very significant autistic traits",
                  "desc": "Your score is very high and strongly suggests the presence of autism spectrum traits. A comprehensive diagnostic evaluation is strongly recommended."
            }
      }
},
    "triage": {
      "name": "Guide",
      "abbr": "Guide",
      "fullName": "Initial Orientation Questionnaire",
      "desc": "Don't know where to start? This brief questionnaire recommends which assessments are most relevant for you.",
      "instructions": "Answer the following questions honestly about how you have been feeling lately. At the end, you will receive personalized recommendations on which assessments to take.",
      "sharedOptions": ["Not at all","A little","Moderately","Quite a bit","Very much"],
      "questions": [
        { "title": "I have felt sad, down, or hopeless" },
        { "title": "I have lost interest or pleasure in things I used to enjoy" },
        { "title": "I feel without energy or fatigued most of the time" },
        { "title": "I feel nervous, anxious, or on edge" },
        { "title": "I have excessive worries that I cannot control" },
        { "title": "I experience physical symptoms of anxiety (palpitations, sweating, tremors)" },
        { "title": "I avoid social situations for fear of being judged or making a fool of myself" },
        { "title": "I find it very difficult to speak in public or with strangers" },
        { "title": "I feel overwhelmed by life situations" },
        { "title": "I have difficulty managing daily problems" },
        { "title": "I have lived through a traumatic experience that continues to affect me" },
        { "title": "I have disturbing memories or nightmares about past events" },
        { "title": "I have difficulty falling asleep or staying asleep" },
        { "title": "My sleep quality affects my daily functioning" },
        { "title": "I am excessively worried about my weight or body image" },
        { "title": "I have a problematic relationship with food (restrictions, binge eating, purging)" },
        { "title": "My alcohol consumption worries me or has caused problems" },
        { "title": "I find it difficult to concentrate, organize tasks, or finish what I start" },
        { "title": "I am excessively restless or find it difficult to stay still" },
        { "title": "I have repetitive intrusive thoughts that cause me distress" },
        { "title": "I feel the need to repeat certain actions or rituals" },
        { "title": "I have had periods of euphoria or excessive energy followed by periods of depression" },
        { "title": "I have had episodes where I felt unusually hyperactive or impulsive" },
        { "title": "My interpersonal relationships are intense and unstable" },
        { "title": "My emotions change rapidly and I find it difficult to regulate them" }
      ,
        { "title": "I find it difficult to understand other people's intentions or emotions" },
        { "title": "I prefer routines and feel uncomfortable when they are disrupted" }
      ],
      "domainNames": {
        "Estado de ánimo": "Mood",
        "Ansiedad": "Anxiety",
        "Ansiedad social": "Social Anxiety",
        "Estrés": "Stress",
        "Trauma": "Trauma",
        "Sueño": "Sleep",
        "Alimentación": "Eating",
        "Alcohol": "Alcohol",
        "Atención y concentración": "Attention and Concentration",
        "Obsesiones y compulsiones": "Obsessions and Compulsions",
        "Cambios de ánimo": "Mood Swings",
        "Regulación emocional": "Emotional Regulation"
      ,
        "Rasgos del espectro autista": "Autism Spectrum Traits"
      },
      "domainReasons": {
        "Estado de ánimo": "High score on mood indicators",
        "Ansiedad": "High score on anxiety indicators",
        "Ansiedad social": "High score on social anxiety indicators",
        "Estrés": "High score on perceived stress indicators",
        "Trauma": "High score on trauma and post-traumatic stress indicators",
        "Sueño": "High score on sleep problem indicators",
        "Alimentación": "High score on eating behavior indicators",
        "Alcohol": "High score on alcohol consumption indicators",
        "Atención y concentración": "High score on inattention and hyperactivity indicators",
        "Obsesiones y compulsiones": "High score on obsessive-compulsive indicators",
        "Cambios de ánimo": "High score on mood change indicators",
        "Regulación emocional": "High score on emotional and interpersonal instability indicators"
      ,
        "Rasgos del espectro autista": "High score on autism spectrum trait indicators"
      },
      "results": {
        "triage_label": "Your recommended assessments",
        "triage_desc": "Based on your responses, we recommend the following assessments:",
        "suggested_wellbeing": "General wellbeing assessment recommended for everyone",
        "suggested_personality": "Personality assessment recommended as complement"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — 300-Item Personality Inventory",
      "desc": "The most comprehensive personality assessment available. Measures 30 facets grouped into the Big Five traits with high precision.",
      "instructions": "Indicate how accurately each statement describes you in general. There are no right or wrong answers. Please respond honestly.",
      "sharedOptions": ["Very inaccurate","Inaccurate","Neither accurate nor inaccurate","Accurate","Very accurate"],
      "questions": [
        { "title": "I worry about things." },
        { "title": "I am relaxed most of the time." },
        { "title": "I fear the worst in every situation." },
        { "title": "I seldom feel anxious." },
        { "title": "I get nervous easily." },
        { "title": "I don't worry about things that have already happened." },
        { "title": "I worry about what might go wrong." },
        { "title": "I remain calm in the face of uncertainty." },
        { "title": "I feel anxious frequently." },
        { "title": "I am not easily frightened." },
        { "title": "I get irritated easily." },
        { "title": "I seldom lose my temper." },
        { "title": "I get angry when things don't go my way." },
        { "title": "I am hard to provoke." },
        { "title": "I get frustrated easily." },
        { "title": "I keep my composure in difficult situations." },
        { "title": "Many things bother me." },
        { "title": "I don't get angry easily." },
        { "title": "I explode when provoked." },
        { "title": "I control my temper well." },
        { "title": "I often feel sad." },
        { "title": "I feel comfortable with myself." },
        { "title": "I feel discouraged frequently." },
        { "title": "I seldom feel down." },
        { "title": "I feel dissatisfied with my life." },
        { "title": "I generally feel content." },
        { "title": "I sometimes feel empty inside." },
        { "title": "I don't let negative thoughts take over." },
        { "title": "I tend to see the dark side of things." },
        { "title": "I enjoy life as it is." },
        { "title": "I get embarrassed easily." },
        { "title": "I feel comfortable in social situations." },
        { "title": "I worry about what others think of me." },
        { "title": "I don't mind being the center of attention." },
        { "title": "I feel uncomfortable when people are watching me." },
        { "title": "I seldom feel self-conscious." },
        { "title": "I find it hard to speak in front of a group." },
        { "title": "I don't worry about making a fool of myself." },
        { "title": "I blush easily." },
        { "title": "I act naturally around strangers." },
        { "title": "I find it hard to resist temptations." },
        { "title": "I control my impulses well." },
        { "title": "I eat or drink too much when I'm stressed." },
        { "title": "I know when to stop." },
        { "title": "I spend money on things I don't need." },
        { "title": "I resist temptations well." },
        { "title": "I give in to my cravings." },
        { "title": "I keep my habits under control." },
        { "title": "I do things I later regret." },
        { "title": "I don't easily fall into excess." },
        { "title": "I fall apart under pressure." },
        { "title": "I handle stressful situations well." },
        { "title": "I feel overwhelmed by difficulties." },
        { "title": "I don't let problems defeat me." },
        { "title": "I freeze when under a lot of pressure." },
        { "title": "I function well even under stress." },
        { "title": "I find it hard to recover from setbacks." },
        { "title": "I am resilient in the face of adversity." },
        { "title": "I lose control when under a lot of pressure." },
        { "title": "I face problems with composure." },
        { "title": "I make friends easily." },
        { "title": "I find it hard to approach others." },
        { "title": "I feel at ease with people." },
        { "title": "I am distant with strangers." },
        { "title": "I connect quickly with people." },
        { "title": "I keep my distance from others." },
        { "title": "I treat everyone with warmth." },
        { "title": "I find it hard to trust new people." },
        { "title": "I make people feel welcome." },
        { "title": "I am not a very warm person." },
        { "title": "I enjoy being around people." },
        { "title": "I prefer to be alone." },
        { "title": "I like going to parties and gatherings." },
        { "title": "I avoid crowds." },
        { "title": "I seek the company of others." },
        { "title": "I enjoy solitude." },
        { "title": "I feel comfortable in large groups." },
        { "title": "I prefer solitary activities." },
        { "title": "I love socializing." },
        { "title": "Social gatherings drain me." },
        { "title": "I take charge of situations." },
        { "title": "I stay in the background." },
        { "title": "I say what I think without hesitation." },
        { "title": "I find it hard to express my opinions." },
        { "title": "I naturally assume the role of leader." },
        { "title": "I let others make the decisions." },
        { "title": "I defend my ideas firmly." },
        { "title": "I find it hard to say no." },
        { "title": "I take the initiative in conversations." },
        { "title": "I avoid imposing my point of view." },
        { "title": "I am always busy." },
        { "title": "I take things easy." },
        { "title": "I live life at a fast pace." },
        { "title": "I like to take my time." },
        { "title": "I do many things during the day." },
        { "title": "I prefer a relaxed pace of life." },
        { "title": "I move quickly from one activity to another." },
        { "title": "I don't like to rush." },
        { "title": "I am a very active person." },
        { "title": "I like to relax and do nothing." },
        { "title": "I seek adventure and thrills." },
        { "title": "I prefer what is predictable and safe." },
        { "title": "I love exciting experiences." },
        { "title": "I avoid risky situations." },
        { "title": "I like trying new and risky things." },
        { "title": "I prefer routine over surprises." },
        { "title": "I enjoy speed and adrenaline." },
        { "title": "I don't like dangerous activities." },
        { "title": "I get bored if there's no excitement." },
        { "title": "I am content with a quiet life." },
        { "title": "I am a cheerful person." },
        { "title": "I am seldom in a good mood." },
        { "title": "I radiate optimism." },
        { "title": "I am not a particularly cheerful person." },
        { "title": "I laugh easily." },
        { "title": "I find it hard to feel enthusiastic." },
        { "title": "I see the positive side of things." },
        { "title": "I don't get excited easily." },
        { "title": "I spread my joy to others." },
        { "title": "I am more serious than most people." },
        { "title": "I have a very active imagination." },
        { "title": "I seldom fantasize." },
        { "title": "I like to daydream." },
        { "title": "I am very practical and don't get lost in fantasies." },
        { "title": "I create imaginary worlds in my mind." },
        { "title": "I don't waste time on imagination." },
        { "title": "I am fascinated by the world of ideas." },
        { "title": "I prefer facts over fantasies." },
        { "title": "My mind is full of creative ideas." },
        { "title": "I don't have much imagination." },
        { "title": "I appreciate art and beauty." },
        { "title": "I am not interested in artistic expressions." },
        { "title": "I am moved by music." },
        { "title": "I don't see the point of abstract art." },
        { "title": "I enjoy visiting museums and galleries." },
        { "title": "Art bores me." },
        { "title": "I like contemplating nature." },
        { "title": "I don't pay attention to aesthetic details." },
        { "title": "I value artistic expression in all its forms." },
        { "title": "I prefer function over beauty." },
        { "title": "I feel emotions very intensely." },
        { "title": "I am seldom deeply moved." },
        { "title": "Movies and books affect me deeply." },
        { "title": "I am not a particularly emotional person." },
        { "title": "I can cry at a beautiful song." },
        { "title": "I don't let emotions carry me away." },
        { "title": "I feel deep empathy for others." },
        { "title": "I control my feelings with reason." },
        { "title": "My emotions are varied and intense." },
        { "title": "I am an emotionally reserved person." },
        { "title": "I like exploring new places." },
        { "title": "I prefer the familiar over the unknown." },
        { "title": "I enjoy trying foods from other cultures." },
        { "title": "I feel comfortable with my routines." },
        { "title": "I am drawn to traveling to exotic places." },
        { "title": "I don't like leaving my comfort zone." },
        { "title": "I constantly seek new experiences." },
        { "title": "I prefer doing things the usual way." },
        { "title": "I adapt well to new situations." },
        { "title": "Changes make me uncomfortable." },
        { "title": "I enjoy solving complex problems." },
        { "title": "I avoid philosophical discussions." },
        { "title": "I like reflecting on abstract ideas." },
        { "title": "I am not interested in intellectual debates." },
        { "title": "I read a lot on varied topics." },
        { "title": "I prefer practical activities over theoretical ones." },
        { "title": "I am fascinated by learning new things." },
        { "title": "I am not interested in philosophy." },
        { "title": "I am curious about how everything works." },
        { "title": "I don't like puzzles or brainteasers." },
        { "title": "I believe laws should adapt to the times." },
        { "title": "I respect established traditions." },
        { "title": "I am open to social rethinking." },
        { "title": "I believe society works better with strict rules." },
        { "title": "I question established norms." },
        { "title": "I prefer to follow social conventions." },
        { "title": "I support progressive social changes." },
        { "title": "I think it is important to preserve customs." },
        { "title": "I believe the established order should be challenged." },
        { "title": "Traditions give stability to society." },
        { "title": "I trust others." },
        { "title": "I distrust people's intentions." },
        { "title": "I believe most people are honest." },
        { "title": "I suspect others of having hidden motives." },
        { "title": "I give people the benefit of the doubt." },
        { "title": "I believe people try to take advantage of me." },
        { "title": "I believe in the goodness of people." },
        { "title": "I find it hard to trust someone." },
        { "title": "I assume people have good intentions." },
        { "title": "I am skeptical of strangers' kindness." },
        { "title": "I am honest at all times." },
        { "title": "I sometimes manipulate others to get what I want." },
        { "title": "I would not lie to gain an advantage." },
        { "title": "I use tricks to get people to do what I want." },
        { "title": "I treat others fairly." },
        { "title": "I sometimes pretend to be what I am not." },
        { "title": "I tell the truth even when it's uncomfortable." },
        { "title": "I am not always completely honest." },
        { "title": "I act according to my principles." },
        { "title": "I resort to flattery when it suits me." },
        { "title": "I like helping others." },
        { "title": "I don't get involved in other people's problems." },
        { "title": "I feel satisfaction when I do something for someone." },
        { "title": "I look out for my own interests first." },
        { "title": "I care about the well-being of others." },
        { "title": "I don't like being asked for favors." },
        { "title": "I help those in need without expecting anything in return." },
        { "title": "I don't feel obligated to help others." },
        { "title": "I give my time generously." },
        { "title": "I prefer not to get involved in other people's affairs." },
        { "title": "I avoid conflicts." },
        { "title": "I don't mind arguing with people." },
        { "title": "I seek agreement in discussions." },
        { "title": "I enjoy a good debate even if it gets tense." },
        { "title": "I give in to keep the peace." },
        { "title": "I insist on my point of view even if it causes conflict." },
        { "title": "I prefer harmony over being right." },
        { "title": "I don't mind contradicting others." },
        { "title": "I try to find solutions that satisfy everyone." },
        { "title": "I can be quite stubborn in discussions." },
        { "title": "I don't like to show off." },
        { "title": "I believe I am better than most people." },
        { "title": "I am a humble person." },
        { "title": "I like being the center of attention." },
        { "title": "I don't consider myself special." },
        { "title": "I believe I deserve more recognition than I receive." },
        { "title": "I downplay my achievements." },
        { "title": "I like talking about my successes." },
        { "title": "I don't seek admiration." },
        { "title": "I know I am worth more than most people." },
        { "title": "I am moved by people who suffer." },
        { "title": "Other people's problems don't affect me much." },
        { "title": "I feel compassion for the less fortunate." },
        { "title": "I believe everyone should solve their own problems." },
        { "title": "I care about those who are disadvantaged." },
        { "title": "Sad stories don't easily move me." },
        { "title": "I believe society should protect the vulnerable." },
        { "title": "People exaggerate their problems." },
        { "title": "It hurts me to see animals suffer." },
        { "title": "I am not very sentimental about social causes." },
        { "title": "I know I can handle any situation." },
        { "title": "I doubt my abilities." },
        { "title": "I complete tasks successfully." },
        { "title": "I don't feel prepared for challenges." },
        { "title": "I trust my ability to solve problems." },
        { "title": "I feel insecure when facing difficult tasks." },
        { "title": "I know how to do things well." },
        { "title": "I sometimes feel incompetent." },
        { "title": "I handle difficulties skillfully." },
        { "title": "I fear not living up to expectations." },
        { "title": "I keep my things organized." },
        { "title": "I leave everything messy." },
        { "title": "I like everything to be in its place." },
        { "title": "I don't mind disorder." },
        { "title": "I follow an organized routine." },
        { "title": "I am quite disorganized." },
        { "title": "I clean and tidy up often." },
        { "title": "I don't worry about keeping things in order." },
        { "title": "I am bothered by chaos around me." },
        { "title": "My workspace is usually messy." },
        { "title": "I fulfill my obligations." },
        { "title": "I sometimes don't follow the rules." },
        { "title": "I keep my promises." },
        { "title": "I don't always do what is expected of me." },
        { "title": "I take my responsibilities seriously." },
        { "title": "I sometimes fail to meet my commitments." },
        { "title": "I do what I say I'm going to do." },
        { "title": "I don't worry much about rules." },
        { "title": "I am a person of my word." },
        { "title": "I sometimes neglect my duties." },
        { "title": "I work hard to achieve my goals." },
        { "title": "I settle for the minimum." },
        { "title": "I strive for excellence." },
        { "title": "I don't care much about success." },
        { "title": "I constantly seek to improve myself." },
        { "title": "I am not very ambitious." },
        { "title": "I have clear goals and work to achieve them." },
        { "title": "I do only what's necessary to get by." },
        { "title": "I am motivated by achieving great things." },
        { "title": "I don't put in more effort than necessary." },
        { "title": "I finish what I start." },
        { "title": "I find it hard to stay focused." },
        { "title": "I persevere until the task is complete." },
        { "title": "I procrastinate often." },
        { "title": "I get to work right away." },
        { "title": "I get distracted easily." },
        { "title": "I don't leave tasks half-done." },
        { "title": "I waste time on unimportant things." },
        { "title": "I stay focused on my goals." },
        { "title": "I find it hard to start difficult tasks." },
        { "title": "I think before I act." },
        { "title": "I act without thinking about the consequences." },
        { "title": "I consider all options before deciding." },
        { "title": "I make decisions impulsively." },
        { "title": "I evaluate risks carefully." },
        { "title": "I jump into things without planning." },
        { "title": "I plan before I act." },
        { "title": "I do things without thinking much." },
        { "title": "I reflect on the possible consequences." },
        { "title": "I say things without considering the consequences." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Personality Inventory for DSM-5",
      "desc": "Comprehensive assessment of pathological personality traits according to the DSM-5 dimensional model. Measures 25 facets across 5 domains.",
      "instructions": "Read each statement and select how well it describes you in general, not just how you feel right now.",
      "sharedOptions": ["Very false or often false","Sometimes or somewhat false","Sometimes or somewhat true","Very true or often true"],
      "questions": [
        { "title": "My emotions change without any apparent reason." },
        { "title": "My moods change drastically from one moment to the next." },
        { "title": "I go quickly from feeling happy to feeling sad without a clear reason." },
        { "title": "People close to me tell me I am too emotional." },
        { "title": "I find it difficult to control my emotional reactions." },
        { "title": "I get upset easily in situations that others handle without a problem." },
        { "title": "My feelings are unpredictable, even to me." },
        { "title": "I worry about almost everything." },
        { "title": "I am always expecting something bad to happen." },
        { "title": "I get nervous very easily." },
        { "title": "I find it very hard to stop worrying about things." },
        { "title": "I feel a constant anxiety that I cannot explain." },
        { "title": "I worry excessively about things that probably will not happen." },
        { "title": "Anxious thoughts invade my mind frequently." },
        { "title": "I am afraid that things will go wrong in almost every situation." },
        { "title": "I feel tense and nervous most of the time." },
        { "title": "The idea of being alone terrifies me." },
        { "title": "I worry a lot that the important people in my life will abandon me." },
        { "title": "I constantly need the closeness of the people I love." },
        { "title": "I feel unprotected when I am not close to someone I care about." },
        { "title": "It distresses me greatly to be separated from the people I am attached to." },
        { "title": "I do everything I can to prevent people from pulling away from me." },
        { "title": "When I am away from someone important to me, I find it hard to function." },
        { "title": "I change my opinions to match those of others." },
        { "title": "I find it very hard to say no, even when I want to." },
        { "title": "I let others make decisions for me to avoid conflict." },
        { "title": "I prefer to give in to others rather than stand my ground." },
        { "title": "I get irritated easily over small things." },
        { "title": "I frequently feel angry without knowing exactly why." },
        { "title": "People tell me I am a bad-tempered person." },
        { "title": "I lose patience with others more than I should." },
        { "title": "It bothers me when people do not do things my way." },
        { "title": "I hold resentment toward people who have hurt me." },
        { "title": "I tend to react with anger at the slightest provocation." },
        { "title": "I become furious when things do not go the way I want." },
        { "title": "I feel a constant irritation that is hard to control." },
        { "title": "When someone offends me, I find it very hard to let it go." },
        { "title": "I get trapped in the same thoughts over and over again." },
        { "title": "I find it very hard to stop thinking about my problems." },
        { "title": "I mentally replay the same situations without being able to stop." },
        { "title": "I obsess over mistakes I have made in the past." },
        { "title": "When something bothers me, I cannot stop thinking about it for days." },
        { "title": "My thoughts repeat like a broken record." },
        { "title": "I find it hard to let go of an issue even when I know I should." },
        { "title": "I keep thinking about the same things even though it serves no purpose." },
        { "title": "People tell me I overthink things." },
        { "title": "I rarely show my emotions to others." },
        { "title": "People tell me I seem cold or emotionally distant." },
        { "title": "I do not usually feel strong emotions, neither positive nor negative." },
        { "title": "I find it hard to express what I feel, even with people close to me." },
        { "title": "Situations that excite others leave me indifferent." },
        { "title": "I am not moved by sad stories or emotional movies." },
        { "title": "I prefer not to show what I feel because I consider it a weakness." },
        { "title": "I prefer to be alone most of the time." },
        { "title": "I avoid social gatherings whenever I can." },
        { "title": "I have no interest in making new friends." },
        { "title": "I feel uncomfortable when I have to interact with other people." },
        { "title": "I prefer to do things alone rather than in a group." },
        { "title": "I isolate myself from others intentionally." },
        { "title": "Conversations with other people are exhausting for me." },
        { "title": "I feel better when I do not have to deal with anyone." },
        { "title": "I avoid situations where I have to socialize." },
        { "title": "I do not mind going long periods without social contact." },
        { "title": "Few things in life give me real pleasure." },
        { "title": "I have lost interest in activities I used to enjoy." },
        { "title": "I find it hard to find something that truly motivates me." },
        { "title": "Life seems empty and meaningless most of the time." },
        { "title": "I do not experience joy even on occasions that should be happy." },
        { "title": "I feel emotionally empty almost all the time." },
        { "title": "Nothing truly excites me." },
        { "title": "I feel like my positive emotions have faded away." },
        { "title": "I feel worthless as a person." },
        { "title": "I believe the world would be better off without me." },
        { "title": "I feel hopeless about the future." },
        { "title": "I constantly criticize myself for everything I do." },
        { "title": "I feel a deep sadness that will not go away." },
        { "title": "I consider myself a failure in almost everything I try." },
        { "title": "I believe things are never going to get better for me." },
        { "title": "I feel guilty about things that are not really my fault." },
        { "title": "I have a very negative view of myself." },
        { "title": "I frequently think I do not deserve to be happy." },
        { "title": "I feel useless and incapable of doing anything right." },
        { "title": "I cry frequently or feel like crying." },
        { "title": "I feel completely alone even when I am surrounded by people." },
        { "title": "I feel like my life has no purpose or direction." },
        { "title": "I avoid romantic relationships because they make me feel vulnerable." },
        { "title": "I am not interested in having an intimate relationship with anyone." },
        { "title": "Emotional closeness with another person makes me very uncomfortable." },
        { "title": "I prefer to keep people at an emotional distance." },
        { "title": "Intimate relationships feel suffocating to me." },
        { "title": "I do not need anyone close in my life." },
        { "title": "I distrust the intentions of most people." },
        { "title": "I believe people have hidden motives most of the time." },
        { "title": "I suspect that people talk badly about me behind my back." },
        { "title": "I find it hard to believe that anyone would want to help me without expecting something in return." },
        { "title": "I am always on guard because I believe someone might try to take advantage of me." },
        { "title": "I doubt the sincerity of compliments or praise I receive." },
        { "title": "I feel that I cannot fully trust anyone." },
        { "title": "I am good at manipulating people to get what I want." },
        { "title": "I use flattery to get people to do what I want." },
        { "title": "I do not mind using others to achieve my goals." },
        { "title": "I know exactly what to say to influence other people's decisions." },
        { "title": "I enjoy subtly controlling people." },
        { "title": "I lie frequently if it benefits me." },
        { "title": "I do not find it difficult to deceive people." },
        { "title": "I make up stories to get my way." },
        { "title": "Sometimes I pretend to be someone I am not to impress others." },
        { "title": "I exaggerate my achievements to make a good impression." },
        { "title": "I withhold important information when it benefits me." },
        { "title": "I am able to act convincingly even when I am lying." },
        { "title": "Being dishonest does not bother me if it helps me." },
        { "title": "I have cheated or deceived others to get something I wanted." },
        { "title": "I say what people want to hear, even if it is not true." },
        { "title": "I deserve special treatment because I am better than most people." },
        { "title": "I believe I am an extraordinary person and that others should recognize it." },
        { "title": "People do not appreciate how valuable I really am." },
        { "title": "I find it hard to understand why others do not see how special I am." },
        { "title": "I feel that I am above the rules that apply to others." },
        { "title": "I compare myself with others and almost always consider myself superior." },
        { "title": "I need to be the center of attention in social situations." },
        { "title": "I do flashy things so that people notice me." },
        { "title": "It bothers me when the attention is not focused on me." },
        { "title": "I constantly seek the approval and admiration of others." },
        { "title": "I try very hard to impress people." },
        { "title": "I like making grand gestures so that others talk about me." },
        { "title": "I exaggerate my emotions to get a reaction from others." },
        { "title": "I feel empty if I do not receive attention from other people." },
        { "title": "I do not care if my actions hurt other people." },
        { "title": "People say I am insensitive to the suffering of others." },
        { "title": "I do not feel remorse when I do something that hurts someone." },
        { "title": "Other people's tears do not move me." },
        { "title": "I find it hard to understand why people get offended so easily." },
        { "title": "I do not worry about other people's feelings if they do not affect me directly." },
        { "title": "I can be cruel if the situation calls for it." },
        { "title": "I am not interested in comforting someone who is suffering." },
        { "title": "I think people are too sensitive nowadays." },
        { "title": "I do not lose sleep over having treated someone badly." },
        { "title": "I have been told I am a harsh and unforgiving person." },
        { "title": "I consider empathy to be a weakness." },
        { "title": "It does not affect me to see others suffer the consequences of their mistakes." },
        { "title": "I always put my own needs first regardless of how it affects others." },
        { "title": "I frequently fail to keep my commitments and obligations." },
        { "title": "I am careless with my financial responsibilities." },
        { "title": "People cannot count on me to do what I say I will do." },
        { "title": "I leave important tasks unfinished frequently." },
        { "title": "I do not worry about meeting deadlines." },
        { "title": "I tend to let others take care of my responsibilities." },
        { "title": "I find it hard to keep a job or follow a long-term plan." },
        { "title": "I act without thinking about the consequences." },
        { "title": "I do things impulsively that I later regret." },
        { "title": "I find it very hard to resist my impulses." },
        { "title": "I make hasty decisions without considering all the options." },
        { "title": "I say things without thinking and then wish I had not said them." },
        { "title": "I cannot wait for things; I need immediate gratification." },
        { "title": "I get distracted very easily." },
        { "title": "I find it hard to concentrate on a task for more than a few minutes." },
        { "title": "I constantly lose my train of thought." },
        { "title": "I start many things but find it hard to finish them because I get distracted." },
        { "title": "Any noise or external stimulus diverts my attention." },
        { "title": "I find it hard to follow a long conversation without losing focus." },
        { "title": "My mind wanders when I should be focused on something." },
        { "title": "I frequently forget what I was doing." },
        { "title": "I need instructions to be repeated because I cannot retain them." },
        { "title": "I enjoy doing dangerous things." },
        { "title": "I seek intense thrills even if they involve risk." },
        { "title": "I do not mind putting myself in risky situations." },
        { "title": "I get bored easily if there is no adrenaline involved." },
        { "title": "I have done reckless things that could have caused me harm." },
        { "title": "Dangerous activities are exciting to me." },
        { "title": "I drive faster than allowed because I like the speed." },
        { "title": "I have used substances without worrying about the consequences." },
        { "title": "I ignore warning signs and continue with what I am doing." },
        { "title": "I accept challenges that most people would consider too risky." },
        { "title": "I need intense experiences to feel alive." },
        { "title": "I get bored with routine and seek new and unpredictable things to do." },
        { "title": "I do not consider the dangers before acting." },
        { "title": "The idea of doing something forbidden is appealing to me." },
        { "title": "Everything has to be perfect or I am not satisfied." },
        { "title": "I find it impossible to accept work that is not flawless." },
        { "title": "I spend too much time on insignificant details to make sure they are right." },
        { "title": "My standards are so high that I often fail to meet them." },
        { "title": "I insist that things be done exactly the way I want." },
        { "title": "I find it hard to delegate tasks because no one does them as well as I do." },
        { "title": "My perfectionism interferes with my ability to finish things on time." },
        { "title": "I feel very bad about myself when I make the slightest mistake." },
        { "title": "I have very strict rules about how things should be done." },
        { "title": "I do not tolerate mediocrity, either in myself or in others." },
        { "title": "I believe I have a sixth sense that allows me to know things others do not know." },
        { "title": "I have had experiences that I consider supernatural or paranormal." },
        { "title": "I believe I can influence events just by thinking about them." },
        { "title": "I feel that there are hidden forces controlling what happens in the world." },
        { "title": "I believe coincidences are messages from the universe directed at me." },
        { "title": "I have felt that I have special powers or abilities that others do not possess." },
        { "title": "I believe my thoughts can directly affect reality." },
        { "title": "I feel a special connection with the supernatural or the mystical." },
        { "title": "People consider me a strange or eccentric person." },
        { "title": "My way of thinking is very different from most people's." },
        { "title": "I have ideas that others consider strange or out of the ordinary." },
        { "title": "My behavior makes people uncomfortable." },
        { "title": "I say things that others consider weird or nonsensical." },
        { "title": "I have interests or hobbies that most people find very peculiar." },
        { "title": "I express myself in ways that others do not understand." },
        { "title": "I have been told that my way of seeing the world is very unusual." },
        { "title": "People look at me strangely because of how I behave." },
        { "title": "My reactions to situations are different from those of other people." },
        { "title": "I have a personal style that others consider very out of the norm." },
        { "title": "I often think about things that most people would never even imagine." },
        { "title": "I feel fundamentally different from all other people." },
        { "title": "Sometimes I feel that the things around me are not real." },
        { "title": "I have had the sensation of being outside my body." },
        { "title": "Sometimes I see things that others cannot see." },
        { "title": "I have heard voices or sounds that others did not hear." },
        { "title": "Sometimes I feel like my body changes shape or size." },
        { "title": "I have had experiences in which I felt separated from myself." },
        { "title": "Sometimes my surroundings seem distorted or unreal." },
        { "title": "I have felt that my thoughts do not belong to me." },
        { "title": "Sometimes I lose the sense of where I end and the outside world begins." },
        { "title": "I have had strange sensations in my body that I cannot explain." },
        { "title": "Sometimes I feel like reality is fragmenting around me." },
        { "title": "I have experienced moments in which I did not recognize my own reflection." }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Clinical",
      "abbr": "IPIP-Clinical",
      "fullName": "IPIP Clinical Scales (equivalent to MMPI scales)",
      "desc": "Comprehensive clinical personality assessment using public domain items. Measures 10 clinical scales and 3 validity scales equivalent to those of the MMPI.",
      "instructions": "Respond true or false to each statement as it generally applies to you. Be honest; there are no right or wrong answers.",
      "sharedOptions": ["False","True"],
      "questions": [
        { "title": "I have never told a lie." },
        { "title": "I worry a lot about my health." },
        { "title": "I feel sad most of the time." },
        { "title": "I believe people talk about me behind my back." },
        { "title": "I have more energy than most people." },
        { "title": "I hear voices that others cannot hear." },
        { "title": "I consider myself a very well-balanced person." },
        { "title": "Sometimes I get headaches for no apparent reason." },
        { "title": "Rules seem boring and unnecessary to me." },
        { "title": "I am very interested in artistic and cultural activities." },
        { "title": "I check things several times to make sure they are right." },
        { "title": "Sometimes I have very strange thoughts." },
        { "title": "I prefer being alone rather than in the company of others." },
        { "title": "I am always kind to every person I meet." },
        { "title": "I feel that my stomach bothers me frequently." },
        { "title": "The future seems dark and hopeless to me." },
        { "title": "I feel that I am being followed or watched." },
        { "title": "I tend to ignore my problems until they go away." },
        { "title": "I distrust the intentions of most people." },
        { "title": "I start many projects at once without finishing them." },
        { "title": "I am satisfied with my life as it is." },
        { "title": "I have had problems with people in positions of authority." },
        { "title": "I consider myself a very emotionally sensitive person." },
        { "title": "I find it very hard to make important decisions." },
        { "title": "Sometimes I feel disconnected from reality." },
        { "title": "I find it hard to start conversations with strangers." },
        { "title": "I have never felt angry at anyone." },
        { "title": "I frequently have pains in different parts of my body." },
        { "title": "I have lost interest in things I used to enjoy." },
        { "title": "I believe I have special powers that others do not have." },
        { "title": "My family relationships are very good." },
        { "title": "Sometimes I feel tingling or numbness for no medical reason." },
        { "title": "I feel that the people close to me are conspiring against me." },
        { "title": "I feel driven to always be on the move." },
        { "title": "I like to break the rules when I can." },
        { "title": "I enjoy reading poetry and literature." },
        { "title": "I worry excessively about small things." },
        { "title": "Sometimes I feel that my body changes in shape or size." },
        { "title": "I feel uncomfortable at large social gatherings." },
        { "title": "I have never taken something that did not belong to me." },
        { "title": "I worry about having a serious undiagnosed illness." },
        { "title": "I cry more easily than before." },
        { "title": "Sometimes I feel that someone controls my thoughts." },
        { "title": "I generally handle difficult situations well." },
        { "title": "When I have a conflict, I prefer not to think about it." },
        { "title": "I feel that people watch me with bad intentions." },
        { "title": "My ideas change very quickly from one topic to another." },
        { "title": "I often act without thinking about the consequences." },
        { "title": "I am easily moved by sad stories." },
        { "title": "I need everything to be perfectly organized." },
        { "title": "Sometimes I hear my own thoughts as if they were spoken aloud." },
        { "title": "I avoid situations where I have to speak in public." },
        { "title": "I always tell the truth, without exception." },
        { "title": "I feel that my heart beats irregularly frequently." },
        { "title": "I feel tired and without energy most of the day." },
        { "title": "I have had supernatural experiences that I cannot explain." },
        { "title": "I consider myself a fairly competent person." },
        { "title": "Sometimes I feel dizzy or weak for no clear reason." },
        { "title": "I am sure there are people who want to harm me." },
        { "title": "I find it hard to stay still for a long time." },
        { "title": "I do not care much about following social norms." },
        { "title": "I enjoy flowers and nature more than most people." },
        { "title": "I have repetitive thoughts that I cannot stop." },
        { "title": "Sometimes I feel that the things around me are not real." },
        { "title": "I find it hard to make new friends." },
        { "title": "I have never been late for an appointment or commitment." },
        { "title": "I see the doctor more frequently than most people." },
        { "title": "I feel worthless or like a burden to others." },
        { "title": "I see things that others cannot see." },
        { "title": "I feel that my family supports me in everything." },
        { "title": "Sometimes I lose sensation in parts of my body." },
        { "title": "I believe someone is trying to poison me or harm me." },
        { "title": "I sleep much less than other people and feel fine." },
        { "title": "I have had legal problems because of my behavior." },
        { "title": "I am interested in fashion and interior decorating." },
        { "title": "I feel a constant anxiety that I cannot explain." },
        { "title": "Sometimes I feel that I am not myself." },
        { "title": "I prefer solitary activities like reading or walking alone." },
        { "title": "I have never felt envious of anyone." },
        { "title": "I frequently feel nauseous or have an upset stomach." },
        { "title": "Sometimes I think it would be better not to be alive." },
        { "title": "I feel that I can predict the future." },
        { "title": "I consider myself an emotionally stable person." },
        { "title": "I have had fainting spells or episodes of loss of consciousness." },
        { "title": "I believe my coworkers speak badly about me." },
        { "title": "I do risky things just for the thrill." },
        { "title": "Honesty is not always the best policy." },
        { "title": "I enjoy cooking and preparing elaborate dishes." },
        { "title": "I feel that something bad is going to happen, but I do not know what." },
        { "title": "My thoughts sometimes get mixed up in a confusing way." },
        { "title": "I get nervous when I am surrounded by many people." },
        { "title": "I have never spoken badly about another person." },
        { "title": "I worry that my body is not functioning properly." },
        { "title": "I find it hard to concentrate on what I am doing." },
        { "title": "I have felt the presence of beings that are not there." },
        { "title": "I do not have any major problems in my life." },
        { "title": "Sometimes my back hurts a lot for no apparent reason." },
        { "title": "I believe there are people who spy on me." },
        { "title": "I have grand plans for my future that others do not understand." },
        { "title": "I get bored easily with routines and monotony." },
        { "title": "I consider myself a person with great artistic sensitivity." },
        { "title": "I wash my hands or check locks more than necessary." },
        { "title": "I feel that my mind works differently from other people's." },
        { "title": "I avoid parties and social events when I can." },
        { "title": "I always keep absolutely all of my promises." },
        { "title": "I pay close attention to any changes in my body." },
        { "title": "I feel guilty about things I have done in the past." },
        { "title": "I feel that I can communicate with the dead." },
        { "title": "I believe that most people are good and trustworthy." },
        { "title": "When I am stressed, I get severe headaches." },
        { "title": "I feel that people laugh at me when I am not present." },
        { "title": "I feel capable of doing anything I set my mind to." },
        { "title": "I have frequently lied to get out of trouble." },
        { "title": "I enjoy watching programs about art, history, or culture." },
        { "title": "I am afraid of losing control of my actions." },
        { "title": "Sometimes I feel that someone else controls my movements." },
        { "title": "I prefer working alone rather than in a team." },
        { "title": "I have never felt the desire to break something out of frustration." },
        { "title": "I believe I get sick more often than most people." },
        { "title": "I do not enjoy food the way I used to." },
        { "title": "I have had intense mystical visions or experiences." },
        { "title": "My friends would say I am an adaptable person." },
        { "title": "Sometimes I feel a lump in my throat for no medical reason." },
        { "title": "I believe my neighbors wish me ill." },
        { "title": "I speak very fast and people sometimes do not understand me." },
        { "title": "I find it hard to keep a job for a long time." },
        { "title": "I get emotional easily when listening to music." },
        { "title": "I need to check several times whether I locked the door." },
        { "title": "I feel that there is something fundamentally different about me." },
        { "title": "I feel more comfortable being at home than going out." },
        { "title": "I have never disobeyed a rule or regulation." },
        { "title": "I have frequent muscle pains with no known cause." },
        { "title": "My sleep is irregular; I sleep too much or too little." },
        { "title": "Sometimes I feel that my soul leaves my body." },
        { "title": "I can solve most of my problems without help." },
        { "title": "I have vision problems that doctors cannot explain." },
        { "title": "I feel there is an organized plot against me." },
        { "title": "I feel full of energy and vitality." },
        { "title": "I do not feel guilty when I do something wrong." },
        { "title": "I like taking care of others and attending to their needs." },
        { "title": "I feel intense fear without knowing exactly what of." },
        { "title": "Sometimes I do not recognize my own image in the mirror." },
        { "title": "I find it exhausting to socialize for a long time." },
        { "title": "I have never had an inappropriate thought." },
        { "title": "I frequently feel that I am short of breath." },
        { "title": "I find it hard to find the motivation to do things." },
        { "title": "I have felt that I am possessed by an external force." },
        { "title": "I feel comfortable with myself most of the time." },
        { "title": "When I am under pressure, I experience tremors or tics." },
        { "title": "I believe certain people follow me or track me." },
        { "title": "I get impatient easily when things go slowly." },
        { "title": "I have destroyed other people's property when I was angry." },
        { "title": "I enjoy deep conversations about emotions and feelings." },
        { "title": "I find it hard to relax; I am always tense." },
        { "title": "I have difficulty distinguishing between dreams and reality." },
        { "title": "I find it hard to look people in the eye." },
        { "title": "I have never felt lazy or avoided a responsibility." },
        { "title": "I feel that my internal organs are not working properly." },
        { "title": "Life has not had much meaning for me lately." },
        { "title": "I have received special messages through television or radio." },
        { "title": "I believe I have good judgment for making decisions." },
        { "title": "Sometimes I temporarily cannot move some part of my body." },
        { "title": "I feel that my enemies want to ruin my reputation." },
        { "title": "I often spend money impulsively." },
        { "title": "I do not mind hurting other people's feelings if it is necessary." },
        { "title": "I like exploring my own emotions and those of others." },
        { "title": "I have rituals or habits that I must follow to the letter." },
        { "title": "Sometimes I feel that I have no identity of my own." },
        { "title": "I enjoy quiet activities more than social ones." },
        { "title": "I have never cut in line or taken an improper shortcut." },
        { "title": "I constantly worry about whether I have a health problem." },
        { "title": "I feel that I have disappointed the people who matter to me." },
        { "title": "I have felt that my mind is being read by other people." },
        { "title": "I adapt well to changes in my life." },
        { "title": "Sometimes I have episodes of intense pain with no medical diagnosis." },
        { "title": "I feel that I cannot completely trust anyone." },
        { "title": "I need to be constantly busy doing things." },
        { "title": "I have used other people to get what I want." },
        { "title": "I feel that my doubts and fears sometimes paralyze me." },
        { "title": "Sometimes I feel completely isolated from the world around me." }
      ]
    }
  }
};
