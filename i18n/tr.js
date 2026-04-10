const LANG_TR = {
  "ui": {
    "appTitle": "Ruh Sağlığı Değerlendirmeleri",
    "appSubtitle": "Psikolojik öz değerlendirme araçları",
    "tabTests": "Testler",
    "tabHistory": "Geçmiş",
    "welcome": "Hoş geldiniz. Başlamak için bir değerlendirme seçin.",
    "startTest": "Teste başla",
    "nextQuestion": "İleri",
    "prevQuestion": "Geri",
    "viewResults": "Sonuçları gör",
    "question": "Soru",
    "of": "/",
    "items": "madde",
    "backToTests": "Testlere dön",
    "repeatTest": "Testi tekrarla",
    "viewHistory": "Geçmişi gör",
    "otherTests": "Diğer testler",
    "detailByItem": "Madde bazında detaylar",
    "helpResources": "Yardım kaynakları",
    "helpText": "Duygusal bir kriz yaşıyorsanız, profesyonel yardım alın. İntiharı Önleme Hattı (Türkiye için 112 veya 114) veya bir ruh sağlığı uzmanı ile iletişime geçin.",
    "disclaimerTitle": "Önemli not:",
    "disclaimerText": "Bu test bir öz değerlendirme aracıdır ve ruh sağlığı uzmanının koyduğu tanının yerine geçmez. Yardıma ihtiyacınız olduğunu düşünüyorsanız, lütfen bir uzmana danışın.",
    "privacyTitle": "Gizliliğiniz:",
    "privacyText": "Sonuçlarınız yalnızca tarayıcınızda (localStorage) saklanır. Hiçbir veri herhangi bir sunucuya gönderilmez veya bilgisayarınızdan dışarı çıkmaz.",
    "cat_triage": "Nereden başlamalıyım?",
    "cat_clinical": "Klinik Değerlendirmeler",
    "cat_screening": "Tarama ve Teşhis",
    "cat_wellbeing": "İyi Oluş ve Öz Saygı",
    "cat_personality": "Kişilik",
    "cat_crisis": "Kriz ve Risk",
    "cat_advanced": "Gelişmiş Değerlendirme",
    "noRecords": "Kaydedilmiş geçmiş bulunmuyor.",
    "completeFirst": "Geçmişi görmek için en az bir testi tamamlayın.",
    "goToTests": "Testlere git",
    "trend": "Eğilim",
    "all": "Tümü",
    "clearHistory": "Geçmişi temizle",
    "clearConfirm": "Tüm geçmişi temizlemek istediğinize emin misiniz? Bu işlem geri alınamaz.",
    "score": "Puan",
    "outOf": "/",
    "disclaimer": "Bu araç yalnızca bilgilendirme amaçlıdır ve profesyonel bir değerlendirmenin yerine geçmez. Kesin tanı için bir ruh sağlığı uzmanına başvurun.",
    "resumePrompt": "Devam eden bir testiniz var",
    "continueTest": "Teste devam et",
    "resumeMessage": "Devam eden bir {test} testiniz var ({n}/{total} soru)",
    "dismiss": "Kapat",
    "questionsAnswered": "soru yanıtlandı",
    "inProgress": "Devam ediyor",
    "testBy": "Testler",
    "recommendedTests": "Önerilen değerlendirmeler",
    "highPriority": "Yüksek öncelikli",
    "recommended": "Önerilen",
    "suggested": "Tavsiye edilen",
    "areasEvaluated": "Değerlendirilen alanlar",
    "kbSelect": "seç",
    "kbBrowse": "gezin",
    "kbConfirm": "onayla",
    "kbPrevNext": "önceki/sonraki",
    "suggestedRetake": "Tekrarlanması öneriliyor",
    "triageRecommended": "İlk değerlendirmenize göre önerildi",
    "retakeReason": "Son katılım tarihi"
  },
  "scales": {
    "agreement5": ["Kesinlikle katılmıyorum","Katılmıyorum","Kararsızım","Katılıyorum","Kesinlikle katılıyorum"],
    "frequency4": ["Hiç","Birkaç gün","Günlerin yarısından fazlasında","Neredeyse her gün"],
    "frequency5": ["Hiçbir zaman","Neredeyse hiç","Bazen","Sık sık","Çok sık"],
    "severity4": ["Hiç","Hafif düzeyde","Orta düzeyde","Ciddi düzeyde"],
    "severity5": ["Hiç","Biraz","Orta düzeyde","Oldukça fazla","Aşırı düzeyde"],
    "yesNo": ["Hayır","Evet"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Beck Depresyon Envanteri-II",
      "desc": "Son iki hafta içindeki depresif belirtilerin varlığını ve şiddetini değerlendirir.",
      "instructions": "Her bir ifade grubunu dikkatlice okuyun ve bugün dahil olmak üzere son iki hafta boyunca kendinizi nasıl hissettiğinizi en iyi tanımlayan cümleyi seçin.",
      "questions": [
        {
          "title": "Üzüntü",
          "options": [
            "Kendimi üzgün hissetmiyorum.",
            "Kendimi çoğu zaman üzgün hissediyorum.",
            "Her zaman üzgünüm.",
            "O kadar üzgün ve mutsuzum ki dayanamıyorum."
          ]
        },
        {
          "title": "Karamsarlık",
          "options": [
            "Gelecek hakkında umutsuz değilim.",
            "Gelecek hakkında eskiye göre daha umutsuzum.",
            "İşlerin yoluna gireceğine dair bir beklentim yok.",
            "Geleceğimin umutsuz olduğunu ve daha da kötüye gideceğini hissediyorum."
          ]
        },
        {
          "title": "Geçmiş Başarısızlık",
          "options": [
            "Kendimi başarısız biri olarak görmüyorum.",
            "Olması gerekenden daha fazla başarısız oldum.",
            "Geriye dönüp baktığımda bir sürü başarısızlık görüyorum.",
            "Bir insan olarak tamamen başarısız biri olduğumu hissediyorum."
          ]
        },
        {
          "title": "Zevk Alamama",
          "options": [
            "Sevdiğim şeylerden eskisinden kadar keyif alıyorum.",
            "Eskisi kadar olaylardan keyif almıyorum.",
            "Eskiden sevdiğim şeylerden artık çok az keyif alıyorum.",
            "Eskiden sevdiğim hiçbir şeyden artık keyif alamıyorum."
          ]
        },
        {
          "title": "Suçluluk Duygusu",
          "options": [
            "Kendimi özellikle suçlu hissetmiyorum.",
            "Yaptığım ya da yapmam gereken birçok şey hakkında kendimi suçlu hissediyorum.",
            "Çoğu zaman kendimi çok suçlu hissediyorum.",
            "Her zaman kendimi suçlu hissediyorum."
          ]
        },
        {
          "title": "Cezalandırılma Hisleri",
          "options": [
            "Cezalandırıldığımı hissetmiyorum.",
            "Cezalandırılabileceğimi hissediyorum.",
            "Cezalandırılmayı bekliyorum.",
            "Cezalandırıldığımı hissediyorum."
          ]
        },
        {
          "title": "Kendinden Hoşnutsuzluk",
          "options": [
            "Kendimle ilgili hislerim eskisi gibi.",
            "Kendime olan güvenimi kaybettim.",
            "Kendimden hayal kırıklığına uğradım.",
            "Kendimden nefret ediyorum."
          ]
        },
        {
          "title": "Kendini Eleştirme",
          "options": [
            "Kendimi her zamankinden daha fazla eleştirmiyor veya suçlamıyorum.",
            "Kendime karşı eskisinden daha eleştirelim.",
            "Tüm hatalarım için kendimi eleştiriyorum.",
            "Olan her kötü şey için kendimi suçluyorum."
          ]
        },
        {
          "title": "İntihar Düşünceleri veya Arzuları",
          "options": [
            "Kendimi öldürme gibi bir düşüncem yok.",
            "Kendi canıma kıyma düşüncelerim oluyor ama bunları hayata geçirmem.",
            "Kendimi öldürmek isterdim.",
            "Fırsatım olsaydı kendimi öldürürdüm."
          ]
        },
        {
          "title": "Ağlama",
          "options": [
            "Eskisinden daha fazla ağlamıyorum.",
            "Eskisinden daha fazla ağlıyorum.",
            "Her küçük şeye ağlıyorum.",
            "Ağlamak istiyorum ama ağlayamıyorum."
          ]
        },
        {
          "title": "Huzursuzluk",
          "options": [
            "Eskisinden daha huzursuz veya gergin değilim.",
            "Eskisinden daha huzursuz veya gergin hissediyorum.",
            "O kadar huzursuz ve gerginim ki sabit durmakta zorlanıyorum.",
            "O kadar huzursuz ve gerginim ki hareket etmek ya da bir şeyler yapmak zorundayım."
          ]
        },
        {
          "title": "İlgi Kaybı",
          "options": [
            "Diğer insanlara veya aktivitelere olan ilgimi kaybetmedim.",
            "Diğer insanlara veya olaylara eskisinden daha az ilgi duyuyorum.",
            "Diğer insanlara veya olaylara olan ilgimin çoğunu kaybettim.",
            "Herhangi bir şeyle ilgilenmek çok zor geliyor."
          ]
        },
        {
          "title": "Kararsızlık",
          "options": [
            "Eskisi kadar iyi kararlar verebiliyorum.",
            "Karar vermek bana her zamankinden daha zor geliyor.",
            "Karar vermekte eskiye göre çok daha fazla zorlanıyorum.",
            "Artık hiçbir karar veremiyorum."
          ]
        },
        {
          "title": "Değersizlik",
          "options": [
            "Kendimi değersiz hissetmiyorum.",
            "Kendimi eskisi kadar değerli ve işe yarar görmüyorum.",
            "Başkalarına kıyasla kendimi daha değersiz hissediyorum.",
            "Kendimi tamamen değersiz hissediyorum."
          ]
        },
        {
          "title": "Enerji Kaybı",
          "options": [
            "Eskisi kadar enerjim var.",
            "Eskisinden daha az enerjim var.",
            "Çok şey yapacak kadar enerjim yok.",
            "Hiçbir şey yapacak enerjim yok."
          ]
        },
        {
          "title": "Uyku Düzeninde Değişiklik",
          "options": [
            "Uykumda herhangi bir değişiklik yaşamadım.",
            "Her zamankinden biraz daha fazla ya da daha az uyuyorum.",
            "Her zamankinden çok daha fazla ya da çok daha az uyuyorum.",
            "Gün boyu uyuyorum ya da normalden 1-2 saat erken uyanıp bir daha uyuyamıyorum."
          ]
        },
        {
          "title": "Sinirlilik",
          "options": [
            "Her zamankinden daha sinirli değilim.",
            "Her zamankinden daha sinirliyim.",
            "Her zamankinden çok daha fazla sinirliyim.",
            "Sürekli sinirliyim."
          ]
        },
        {
          "title": "İştahta Değişiklik",
          "options": [
            "İştahımda herhangi bir değişiklik yaşamadım.",
            "İştahım normalden biraz daha az ya da daha fazla.",
            "İştahım normalden çok daha az ya da çok daha fazla.",
            "Hiç iştahım yok ya da sürekli yemek için aşırı bir istek duyuyorum."
          ]
        },
        {
          "title": "Odaklanma Zorluğu",
          "options": [
            "Eskisi kadar iyi odaklanabiliyorum.",
            "Eskisi gibi iyi odaklanamıyorum.",
            "Bir konuya uzun süre zihnimi odaklamak zor geliyor.",
            "Hiçbir şeye odaklanamıyorum."
          ]
        },
        {
          "title": "Yorgunluk veya Bitkinlik",
          "options": [
            "Kendimi her zamankinden daha yorgun veya bitkin hissetmiyorum.",
            "Her zamankinden daha çabuk yoruluyor veya bitkin düşüyorum.",
            "Eskiden yaptığım şeylerin çoğunu yapamayacak kadar yorgun ya da bitkinim.",
            "Eskiden yaptığım şeylerin neredeyse hiçbirini yapamayacak kadar yorgun ya da bitkinim."
          ]
        },
        {
          "title": "Cinsel İlgi Kaybı",
          "options": [
            "Cinselliğe olan ilgimde son zamanlarda bir değişiklik fark etmedim.",
            "Cinselliğe eskisinden daha az ilgi duyuyorum.",
            "Cinselliğe artık çok daha az ilgi duyuyorum.",
            "Cinselliğe olan ilgimi tamamen kaybettim."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Puanınız minimal düzeyde bir depresyona işaret ediyor. Duygusal dalgalanmalar yaşamanız normaldir." },
        "mild": { "label": "Hafif", "desc": "Puanınız hafif düzeyde depresif belirtilere işaret ediyor. Belirtiler devam ederse bir profesyonelle görüşmeyi düşünebilirsiniz." },
        "moderate": { "label": "Orta", "desc": "Puanınız orta düzeyde depresif belirtilere işaret ediyor. Bir ruh sağlığı uzmanıyla görüşmeniz önerilir." },
        "severe": { "label": "Şiddetli", "desc": "Puanınız şiddetli depresif belirtilere işaret ediyor. En kısa sürede profesyonel yardım almanız önemlidir." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Beck Anksiyete Envanteri",
      "desc": "Son bir haftadaki kaygı (anksiyete) belirtilerinin şiddetini değerlendirir.",
      "instructions": "Bugün dahil olmak üzere son bir hafta içerisinde her bir belirtinin sizi ne kadar rahatsız ettiğini belirtin.",
      "questions": [
        { "title": "Uyuşma veya karıncalanma" },
        { "title": "Ateş basması" },
        { "title": "Bacaklarda halsizlik, titreme" },
        { "title": "Gevşeyememe, rahatlayamama" },
        { "title": "En kötüsünün olacağı korkusu" },
        { "title": "Baş dönmesi veya sersemlik" },
        { "title": "Kalp çarpıntısı veya kalbin hızlı çarpması" },
        { "title": "Dengesizlik" },
        { "title": "Dehşete kapılma veya korkma" },
        { "title": "Sinirlilik" },
        { "title": "Boğulma hissi" },
        { "title": "Ellerde titreme" },
        { "title": "Titreme veya sarsılma hissi" },
        { "title": "Kontrolü kaybetme korkusu" },
        { "title": "Nefes almada güçlük" },
        { "title": "Ölüm korkusu" },
        { "title": "Korkuya kapılma" },
        { "title": "Hazımsızlık" },
        { "title": "Baygınlık veya bayılacakmış gibi olma" },
        { "title": "Yüzün kızarması" },
        { "title": "Terleme (sıcak/soğuk terlemeler)" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Puanınız minimal düzeyde anksiyeteye işaret ediyor." },
        "mild": { "label": "Hafif", "desc": "Puanınız hafif düzeyde anksiyeteye(kaygı) işaret ediyor. Belirtilerinizi gözlemleyin." },
        "moderate": { "label": "Orta", "desc": "Puanınız orta düzeyde anksiyeteye işaret ediyor. Bir profesyonelle görüşmeyi düşünebilirsiniz." },
        "severe": { "label": "Şiddetli", "desc": "Puanınız şiddetli düzeyde anksiyeteye işaret ediyor. Profesyonel yardım almanız önerilir." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Yaygın Anksiyete Bozukluğu-7",
      "desc": "Son iki haftadaki yaygın kaygı şiddetini değerlendirir.",
      "instructions": "Son 2 hafta içinde, aşağıdaki sorunlar sizi ne sıklıkla rahatsız etti?",
      "questions": [
        { "title": "Gergin, kaygılı veya diken üstünde hissetmek" },
        { "title": "Endişelenmeyi durduramamak veya kontrol edememek" },
        { "title": "Farklı şeyler hakkında çok fazla endişelenmek" },
        { "title": "Rahatlamakta güçlük çekmek" },
        { "title": "Yerinde duramayacak kadar huzursuz hissetmek" },
        { "title": "Kolayca sinirlenmek veya asabi olmak" },
        { "title": "Korkunç bir şey olacakmış gibi korku hissetmek" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Puanınız minimal düzeyde bir kaygıya işaret ediyor." },
        "mild": { "label": "Hafif", "desc": "Puanınız hafif düzeyde kaygıya işaret ediyor." },
        "moderate": { "label": "Orta", "desc": "Puanınız orta düzeyde kaygıya işaret ediyor. Bir profesyonelle görüşmeyi düşünebilirsiniz." },
        "severe": { "label": "Şiddetli", "desc": "Puanınız şiddetli düzeyde kaygıya işaret ediyor. Profesyonel yardım almanız önerilir." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "Borderline (Sınırda) Kişilik Bozukluğu İçin McLean Tarama Aracı",
      "desc": "Borderline kişilik bozukluğu ile ilişkili özellikler için tarama aracı.",
      "instructions": "Aşağıdaki soruların her birine evet ya da hayır şeklinde yanıt verin.",
      "questions": [
        { "title": "Kendinizi kasten hiç kestiniz, yaktınız veya bilerek kendinize başka bir şekilde zarar verdiniz mi?" },
        { "title": "Hiç intihar girişiminde bulundunuz mu?" },
        { "title": "Çok yoğun ama dengesiz olan en az iki ilişkiniz (veya ilişki girişiminiz) oldu mu?" },
        { "title": "Kim olduğunuza dair hisleriniz sık sık ve aniden değişir mi?" },
        { "title": "Ruh haliniz sıklıkla ve aniden değişir mi?" },
        { "title": "Sıklıkla kontrol edilmesi zor, yoğun bir öfke hissediyor musunuz?" },
        { "title": "Diğer insanlara sık sık güvensizlik duyar mısınız?" },
        { "title": "Sıklıkla gerçek dışı hissediyor veya etrafınızdaki şeyler gerçek değilmiş gibi geliyor mu?" },
        { "title": "Sıklıkla içinizde bir boşluk hissediyor musunuz?" },
        { "title": "Sıklıkla birisi tarafından terk edilmekten kaçınmak için çaresizce çaba gösteriyor musunuz?" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Puanınız borderline kişilik bozukluğuyla ilişkili özelliklerin düşük olduğunu gösteriyor." },
        "moderate": {
          "label": "Orta",
          "desc": "Puanınız borderline kişilik bozukluğu ile ilişkili bazı özelliklere işaret ediyor. Bir profesyonelle görüşmeyi düşünebilirsiniz."
        },
        "severe": {
          "label": "Belirgin",
          "desc": "Puanınız borderline özelliklerinin belirgin bir şekilde varlığına işaret ediyor. Kapsamlı bir profesyonel değerlendirme önerilir."
        }
      }
    },
    "pss": {
      "name": "PSS-10",
      "abbr": "PSS-10",
      "fullName": "Algılanan Stres Ölçeği-10",
      "desc": "Son bir aydaki yaşam koşullarının ne derece stresli algılandığını ölçer.",
      "instructions": "Aşağıdaki sorular son bir ay içindeki duygularınız ve düşüncelerinizle ilgilidir. Belirli bir şekilde ne sıklıkla hissettiğinizi veya düşündüğünüzü belirtin.",
      "questions": [
        { "title": "Beklenmedik bir şekilde olan bir şeyden dolayı ne sıklıkla üzüldünüz?" },
        { "title": "Hayatınızdaki önemli şeyleri kontrol edemediğinizi ne sıklıkla hissettiniz?" },
        { "title": "Kendinizi ne sıklıkla sinirli ve stresli hissettiniz?" },
        { "title": "Sizi rahatsız eden günlük sorunlarla ne sıklıkla başarılı bir şekilde başa çıktınız?" },
        { "title": "Hayatınızda meydana gelen önemli değişikliklerle etkili bir şekilde başa çıktığınızı ne sıklıkla hissettiniz?" },
        { "title": "Kişisel sorunlarınızla başa çıkma becerinize ne sıklıkla güvendiniz?" },
        { "title": "İşlerin istediğiniz gibi gittiğini ne sıklıkla hissettiniz?" },
        { "title": "Yapmanız gereken tüm işlerle başa çıkamayacağınızı ne sıklıkla fark ettiniz?" },
        { "title": "Hayatınızdaki rahatsız edici durumları ne sıklıkla kontrol edebildiniz?" },
        { "title": "Her şeye hakim olduğunuzu ne sıklıkla hissettiniz?" }
      ],
      "results": {
        "minimal": { "label": "Düşük", "desc": "Algılanan stres seviyeniz düşük. Mevcut başa çıkma stratejilerinize devam edin." },
        "moderate": { "label": "Orta", "desc": "Algılanan stres seviyeniz orta düzeyde. Stres yönetimi tekniklerini hayatınıza katmayı düşünebilirsiniz." },
        "severe": { "label": "Yüksek", "desc": "Algılanan stres seviyeniz yüksek. Profesyonel destek almak ve stres azaltma teknikleri uygulamak tavsiye edilir." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Erişkin DEHB Kendi Bildirim Ölçeği v1.1",
      "desc": "Yetişkinlerde dikkat eksikliği ve hiperaktivite bozukluğu (DEHB) belirtilerini ölçen tarama aracı.",
      "instructions": "Son 6 ay içinde nasıl hissettiğinizi ve davrandığınızı düşünerek aşağıdaki soruları yanıtlayın.",
      "questions": [
        { "title": "Zor kısımları bittikten sonra bir projenin son detaylarını tamamlamakta ne sıklıkla güçlük çekersiniz?" },
        { "title": "Düzenli bir şekilde yapılması gereken bir işi organize etmekte ne sıklıkla güçlük çekersiniz?" },
        { "title": "Randevularınızı veya yükümlülüklerinizi hatırlamakta ne sıklıkla sorun yaşarsınız?" },
        { "title": "Çok düşünmeyi gerektiren bir işiniz olduğunda, ona başlamaktan ne sıklıkla kaçınır veya ertelersiniz?" },
        { "title": "Uzun süre oturmanız gerektiğinde elleriniz veya ayaklarınızı ne sıklıkla hareket ettirirsiniz (kıpır kıpır olursunuz)?" },
        { "title": "Ne sıklıkla, tıpkı bir motor tarafından sürülüyormuş gibi kendinizi aşırı hareketli ve bir şeyler yapmak zorunda hissedersiniz?" }
      ],
      "results": {
        "minimal": { "label": "Düşük İhtimal", "desc": "Puanınız DEHB olma ihtimalinin düşük olduğunu gösteriyor." },
        "moderate": { "label": "Olası", "desc": "Puanınız DEHB ile uyumlu olabilecek bazı belirtilere işaret ediyor. Profesyonel bir değerlendirmeyi düşünebilirsiniz." },
        "severe": { "label": "Yüksek İhtimal", "desc": "Puanınız DEHB belirtilerinin yüksek ihtimalle var olduğunu gösteriyor. Kapsamlı bir profesyonel değerlendirme önerilir." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Obsesif-Kompulsif Envanteri-Gözden Geçirilmiş",
      "desc": "Obsesif-kompulsif bozukluk (OKB) belirtilerini değerlendirir.",
      "instructions": "Aşağıdaki ifadeler pek çok insanın günlük hayatlarında edindiği deneyimlerle ilgilidir. Bunların son bir ay içinde sizi ne derecede rahatsız ettiğini belirtin.",
      "questions": [
        { "title": "O kadar çok şeyi biriktiriyorum ki nereye koysam engel teşkil ediyorlar" },
        { "title": "Eşyaları gerekenden çok daha fazla kontrol ederim" },
        { "title": "Eşyalar düzgün bir sıraya/düzene konulmamışsa huzursuz olurum" },
        { "title": "Bir işi yaparken kendimi sayma zorunluluğu içinde hissederim" },
        { "title": "Yabancılar veya belirli kişiler tarafından dokunulduğunu bildiğim bir eşyaya dokunmakta zorlanırım" },
        { "title": "Kendi düşüncelerimi kontrol etmekte zorlanırım" },
        { "title": "İhtiyacım olmayan şeyleri biriktiririm/toplarım" },
        { "title": "Kapıları, pencereleri, çekmeceleri vb. defalarca kontrol ederim" },
        { "title": "Eşyalarımı yerleştirdiğim düzen başkaları tarafından bozulursa huzursuz olurum" },
        { "title": "Belirli sayıları tekrar etme zorunluluğu hissederim" },
        { "title": "Bazen sırf kirli/bulaşmış olduğumu hissettiğim için yıkanmak ya da temizlenmek zorunda kalırım" },
        { "title": "İstemeden aklıma gelen hoş olmayan düşünceler beni huzursuz eder" },
        { "title": "İleride ihtiyacım olabileceği korkusuyla eşyaları atmaktan kaçınırım" },
        { "title": "Gaz ve muslukları, ışıkları kapattıktan sonra defalarca kontrol ederim" },
        { "title": "Eşyaların belirli bir düzende olması gerektiğini hissederim" },
        { "title": "İyi ve kötü sayıların varlığına inanırım" },
        { "title": "Ellerimi gereğinden daha fazla ve uzun süre yıkarım" },
        { "title": "Sık sık aklıma iğrenç/kötü düşünceler gelir ve onlardan kurtulmakta zorlanırım" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Puanınız minimal düzeyde obsesif-kompulsif belirtilere işaret ediyor." },
        "moderate": { "label": "Orta", "desc": "Puanınız orta düzeyde obsesif-kompulsif belirtilere işaret ediyor. Bir profesyonelle görüşmeyi düşünebilirsiniz." },
        "severe": { "label": "Belirgin", "desc": "Puanınız belirgin düzeyde obsesif-kompulsif belirtilere işaret ediyor. Profesyonel bir değerlendirme önerilir." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "DSM-5 İçin TSSB Kontrol Listesi",
      "desc": "Son bir aydaki travma sonrası stres bozukluğu (TSSB) belirtilerini değerlendirir.",
      "instructions": "Aşağıda insanların son derece stresli bir deneyime verdikleri tepkilerle veya yaşadıkları bazı sorunlarla ilgili bir liste bulunmaktadır. Bu sorunun son bir ay içerisinde sizi ne derece rahatsız ettiğini belirtin.",
      "questions": [
        { "title": "Stresli deneyimle ilgili tekrarlayan, rahatsız edici ve istem dışı anılar" },
        { "title": "Stresli deneyimle ilgili tekrarlayan, rahatsız edici rüyalar/kabuslar" },
        { "title": "Stresli deneyim aniden yeniden oluyormuş gibi hissetmek veya davranmak" },
        { "title": "Stresli deneyimi hatırlatan bir şey olduğunda çok üzgün hissetmek" },
        { "title": "Stresli deneyimi hatırlatan bir şey olduğunda güçlü fiziksel tepkiler göstermek (örn. kalp çarpıntısı, nefes darlığı, terleme)" },
        { "title": "Stresli deneyimle ilgili anılardan, düşüncelerden veya duygulardan kaçınmak" },
        { "title": "Stresli deneyimi hatırlatan dış etkenlerden kaçınmak (örn. kişiler, yerler, konuşmalar, aktiviteler, nesneler veya durumlar)" },
        { "title": "Stresli deneyimin önemli kısımlarını hatırlamakta zorluk çekmek" },
        { "title": "Kendiniz, diğer insanlar veya dünya hakkında çok olumsuz inançlara sahip olmak" },
        { "title": "Stresli deneyim veya sonrasında yaşananlar için kendinizi veya bir başkasını suçlamak" },
        { "title": "Korku, dehşet, öfke, suçluluk veya utanç gibi güçlü olumsuz duygulara sahip olmak" },
        { "title": "Eskiden keyif aldığınız aktivitelere olan ilginizi kaybetmek" },
        { "title": "Kendinizi diğer insanlardan uzak veya kopuk hissetmek" },
        { "title": "Olumlu duygular hissetmekte zorluk çekmek" },
        { "title": "Sinirli davranışlar, öfke patlamaları veya agresif hareketlerde bulunmak" },
        { "title": "Aşırı risk almak veya size zarar verebilecek şeyler yapmak" },
        { "title": "Sürekli tetikte, aşırı uyanık veya savunmada hissetmek" },
        { "title": "Kendinizi diken üstünde hissetmek veya kolayca irkilmek" },
        { "title": "Odaklanmakta güçlük çekmek" },
        { "title": "Uykuya dalmakta veya uykuyu sürdürmekte güçlük çekmek" }
      ],
      "results": {
        "minimal": { "label": "Minimal", "desc": "Puanınız travma sonrası stres belirtilerinizin düşük seviyede olduğunu gösteriyor." },
        "moderate": { "label": "Orta", "desc": "Puanınız orta düzeyde travma sonrası stres belirtilerine işaret ediyor. Bir profesyonelle görüşmeyi düşünebilirsiniz." },
        "severe": { "label": "Belirgin", "desc": "Puanınız belirgin travma sonrası stres belirtilerine işaret ediyor. Profesyonel yardım almanız önerilir." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Büyük Beşli Kişilik Envanteri-44",
      "desc": "Beş temel kişilik boyutunu değerlendirir: Dışadönüklük, Uyumluluk, Sorumluluk, Nevrotiklik, Deneyime Açıklık.",
      "instructions": "Kendimi şöyle biri olarak görüyorum... Her bir ifadeye ne kadar katıldığınızı veya katılmadığınızı belirtin.",
      "questions": [
        { "title": "Konuşkan biridir" },
        { "title": "Başkalarında hata bulma eğilimindedir" },
        { "title": "İşini titizlikle yapar" },
        { "title": "Depresif, hüzünlüdür" },
        { "title": "Özgündür, yeni fikirler üretir" },
        { "title": "Çekingendir" },
        { "title": "Başkalarına karşı yardımsever ve bencil olmayandır" },
        { "title": "Biraz dikkatsiz olabilir" },
        { "title": "Rahattır, stresle iyi başa çıkar" },
        { "title": "Pek çok farklı şeye meraklıdır" },
        { "title": "Enerji doludur" },
        { "title": "Başkalarıyla tartışma başlatır" },
        { "title": "Güvenilir bir çalışandır" },
        { "title": "Gergin olabilir" },
        { "title": "Zeki ve derin düşünen biridir" },
        { "title": "Çok fazla coşku yaratır" },
        { "title": "Bağışlayıcı bir yapısı vardır" },
        { "title": "Dağınık olma eğilimindedir" },
        { "title": "Çok endişelenir / kafasına takar" },
        { "title": "Aktif bir hayal gücüne sahiptir" },
        { "title": "Sessiz olma eğilimindedir" },
        { "title": "Genel olarak insanlara güvenir" },
        { "title": "Tembel olma eğilimindedir" },
        { "title": "Duygusal olarak dengelidir, kolayca üzülmez / bozulmaz" },
        { "title": "Yaratıcı biridir" },
        { "title": "Girişken ve iddialı bir kişiliği vardır" },
        { "title": "Soğuk ve mesafeli olabilir" },
        { "title": "Görev bitene kadar azimle devam eder" },
        { "title": "Ruh hali değişkenlik gösterebilir" },
        { "title": "Sanatsal ve estetik deneyimlere değer verir" },
        { "title": "Bazen utangaç ve çekingen olur" },
        { "title": "Neredeyse herkese karşı düşünceli ve naziktir" },
        { "title": "İşleri verimli bir şekilde yapar" },
        { "title": "Gergin durumlarda sakin kalır" },
        { "title": "Rutin işleri tercih eder" },
        { "title": "Dışadönük, sosyal biridir" },
        { "title": "Bazen başkalarına karşı kaba davranabilir" },
        { "title": "Planlar yapar ve onları uygular" },
        { "title": "Kolayca sinirlenir / heyecanlanır" },
        { "title": "Fikirler üzerine düşünmeyi / zihin jimnastiği yapmayı sever" },
        { "title": "Sanatsal ilgileri azdır" },
        { "title": "Başkalarıyla işbirliği yapmayı sever" },
        { "title": "Dikkati kolay dağılır" },
        { "title": "Sanat, müzik veya edebiyatta sofistike bir zevki vardır" }
      ],
      "dimensionNames": {
        "E": "Dışadönüklük",
        "A": "Uyumluluk",
        "C": "Sorumluluk Çapı (Öz Disiplin)",
        "N": "Nevrotiklik (Duygusal Dalgalanma)",
        "O": "Deneyime Açıklık"
      },
      "dimensionDescs": {
        "E": {
          "low": "Daha içine kapanık, sessiz ve tek başına yapılan etkinlikleri tercih etme eğilimindesiniz.",
          "mid": "Sosyalleşme ile yalnız kalma ihtiyacı arasında bir denge sergiliyorsunuz.",
          "high": "Sosyal, enerjik olma eğilimindesiniz ve diğer insanlarla iletişim kurmaktan hoşlanıyorsunuz."
        },
        "A": {
          "low": "İlişkilerinizde daha rekabetçi ve doğrudan olma eğilimindesiniz.",
          "mid": "İşbirliği yapmak ile hakkını aramak arasında bir denge sergiliyorsunuz.",
          "high": "Başkalarıyla işbirliği yapmaya, merhametli olmaya ve başkalarını düşünmeye eğilimlisiniz."
        },
        "C": {
          "low": "Yaklaşımınızda daha esnek ve spontane/anlık olma eğilimindesiniz.",
          "mid": "Yapılandırma ile esneklik arasında bir denge sergiliyorsunuz.",
          "high": "Organize, disiplinli, titiz ve hedef odaklı olma eğilimindesiniz."
        },
        "N": {
          "low": "Duygusal olarak daha dengeli ve stresli durumlarda daha sakin olma eğilimindesiniz.",
          "mid": "Normal düzeyde bir olumlu ve olumsuz duygu yelpazesi deneyimliyorsunuz.",
          "high": "Daha fazla olumsuz duygu yaşama ve strese karşı daha hassas olma eğilimindesiniz."
        },
        "O": {
          "low": "Geleneksel ve pratik olana eğilimlisiniz.",
          "mid": "Merak duygusu ile pratik ilgiler arasında bir denge sergiliyorsunuz.",
          "high": "Yaratıcı, meraklı ve yeni deneyimlere açık olma eğilimindesiniz."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Myers-Briggs Tip Göstergesi",
      "desc": "Enerji, Algılama, Karar Verme ve Yaşam Tarzı olmak üzere dört boyutta kişilik tercihlerini tanımlar.",
      "instructions": "Çoğu durumda sizi en iyi tanımlayan seçeneği seçin. Doğru ya da yanlış cevap yoktur.",
      "questions": [
        { "title": "Sosyal toplantılarda yabancılar da dahil olmak üzere pek çok kişiyle etkileşimde bulunmayı tercih edersiniz" },
        { "title": "Hayalperest olmaktan ziyade gerçekçi olma eğilimindesiniz" },
        { "title": "Adaletsiz olmak, acımasız olmaktan daha kötüdür" },
        { "title": "İşleri genellikle yapılmış bir plana göre yapmayı tercih edersiniz" },
        { "title": "Bir grupla vakit geçirdikten sonra kendinizi enerji dolu hissedersiniz" },
        { "title": "Büyük resimden ziyade spesifik detaylara odaklanmayı tercih edersiniz" },
        { "title": "Karar verirken öncelikle insanların duygularını göz önünde bulundurursunuz" },
        { "title": "İşlerin karara bağlanmasından ve halledilmesinden hoşlanırsınız" },
        { "title": "Yeni tanıştığınız insanlarla konuşmayı başlatmayı tercih edersiniz" },
        { "title": "Sezgilerden ziyade tecrübeye güvenirsiniz" },
        { "title": "Şefkate, objektif gerçeklikten daha çok değer verirsiniz" },
        { "title": "Kesin bir programa / rutine uymayı tercih edersiniz" },
        { "title": "Yabancılarla konuşmayı kolay bulursunuz" },
        { "title": "Ne 'olabilirdi' düşüncesinden ziyade gerçek ve şu an olana daha fazla dikkat edersiniz" },
        { "title": "Grup uyumuna objektif sonuçlardan daha fazla önem verirsiniz" },
        { "title": "Bir projeyi bitirmeden diğerine başlamamayı tercih edersiniz" },
        { "title": "Enerjinizi toplamak için yalnız kalmaya zaman ayırmanız gerekir" },
        { "title": "Soyut kavramlar ve teoriler üzerinde düşünmekten hoşlanırsınız" },
        { "title": "Sorunları çözerken mantığı duyguların önüne koyarsınız" },
        { "title": "Bağlanmak yerine seçeneklerinizi açık tutmayı tercih edersiniz" },
        { "title": "Boş zamanlarınızda arkadaşlarınızla birlikte olmayı tercih edersiniz" },
        { "title": "Mevcut gerçeklerden ziyade gelecekteki olasılıklarla daha çok ilgileniyorsunuz" },
        { "title": "Kararlarınızı mantıksal prensiplere göre vermeyi tercih edersiniz" },
        { "title": "Yapılandırma ve rutinlerle daha rahat hissedersiniz" },
        { "title": "Partilerin odak noktası, can damarısınızdır" },
        { "title": "Simgesel (sembolik) anlamlar kelimenin tam anlamındaki gerçeklerden daha çok dikkatinizi çeker" },
        { "title": "Bir anlaşmazlık durumunda birileri üzülse bile en adil çözümü ararsınız" },
        { "title": "Tatillerinizi önceden ve tüm detaylarıyla planlamaktan hoşlanırsınız" },
        { "title": "İlgi odağı olmaktan rahatsızlık duymazsınız" },
        { "title": "Kanıtlanmış yöntemleri uygulamaktansa yeni fikirleri keşfetmekten hoşlanırsınız" },
        { "title": "Kalbinizden çok mantığınızla (kafanızla) karar verme eğilimindesiniz" },
        { "title": "Doğaçlama hareket etmeyi, planlamaya tercih edersiniz" },
        { "title": "Yalnız başına çok fazla zaman geçirmeyi yorucu bulursunuz" },
        { "title": "Pratik örneklerini görmeden önce teorik kavramları öğrenmeyi tercih edersiniz" },
        { "title": "Diplomasinin doğru sözlülükten daha önemli olduğunu düşünürsünüz" },
        { "title": "Planlar aniden değiştiğinde kendinizi rahatsız hissedersiniz" },
        { "title": "Konuşmalarda dinlemekten çok konuşursunuz" },
        { "title": "İçgüdülerinize ve sezgilerinize güvenirsiniz" },
        { "title": "Verimliliğe, işbirliğinden daha çok değer verirsiniz" },
        { "title": "Doğaçlama yapmaktan ve anında uyum sağlamaktan hoşlanırsınız" }
      ],
      "typeDescriptions": {
        "ISTJ": "Sorumlu ve güvenilir. Geleneğe, sadakate ve düzene değer verirsiniz. Görevlerinizi yerine getirmek için titizlikle ve istikrarla çalışırsınız.",
        "ISFJ": "Koruyucu ve adanmış. Nazik, sorumlu ve başkalarının ihtiyaçlarına karşı özenlisiniz. Uyuma ve istikrara değer verirsiniz.",
        "INFJ": "İdealist ve vizyoner. İnsanları derinden anlar ve başkalarının potansiyellerine ulaşmasına yardımcı olmak için güçlü bir arzu duyarsınız.",
        "INTJ": "Stratejik ve bağımsız. Analitik bir zihne ve işleri nasıl geliştireceğinize dair net bir vizyona sahipsiniz. Yetkinlik ve bilgiye değer verirsiniz.",
        "ISTP": "Pratik ve gözlemci. Çevrenizdeki şeylerin nasıl çalıştığını anlamaktan ve problemleri verimli bir şekilde çözmekten keyif alırsınız.",
        "ISFP": "Sanatsal ve duyarlı. Özgünlüğe ve uyuma değer verirsiniz. Güzellikten hoşlanır ve güçlü bir estetik algıya sahipsinizdir.",
        "INFP": "İdealist ve empatik. Güçlü kişisel değerlere sahipsiniz ve dünyayı daha iyi bir yer haline getirmek istersiniz.",
        "INTP": "Mantıksal ve yaratıcı. Karmaşık sistemleri analiz etmekten ve yenilikçi fikirler üretmekten hoşlanırsınız.",
        "ESTP": "Enerjik ve pragmatik. Aksiyondan hoşlanır ve şimdiki zamanda yaşarsınız. Pratik problemleri çözmede yeteneklisiniz.",
        "ESFP": "Kendiliğinden gelişen (spontane) ve coşkulu. Hayattan zevk alır ve neşenizi etrafa yayarsınız. Cömert ve iyimsersiniz.",
        "ENFP": "Coşkulu ve yaratıcı. Her yerde olasılıkları görürsünüz ve başkalarına ilham verecek bulaşıcı bir enerjiniz vardır.",
        "ENTP": "Yenilikçi ve meydan okuyan. Entelektüel bir tartışmadan keyif alırsınız ve sürekli yeni fikirler ve olasılıklar ararsınız.",
        "ESTJ": "Organize ve kararlı. Verimliliğe ve düzene değer verirsiniz. Doğuştan lider ve bir yöneticisiniz.",
        "ESFJ": "Sosyal ve yardımsever. Başkalarını çok önemsersiniz ve çevrenizde bir uyum yaratmak için çabalarsınız.",
        "ENFJ": "Karizmatik ve empatik. Başkalarına ilham verirsiniz ve şefkatle liderlik etmek için doğal bir yeteneğe sahipsiniz.",
        "ENTJ": "Doğuştan lider ve stratejist. Kararlı, verimli birisinizdir ve organizasyonel ve liderlik zorluklarından keyif alırsınız."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Hasta Sağlık Anketi-9 (Depresyon)",
      "desc": "Birinci basamak sağlık hizmetlerinde yaygın olarak kullanılan hızlı depresyon taraması. 9 soru.",
      "instructions": "Son 2 hafta içinde, aşağıdaki sorunlardan herhangi biri sizi ne sıklıkla rahatsız etti?",
      "sharedOptions": ["Hiç","Birkaç gün","Günlerin yarısından fazlasında","Neredeyse her gün"],
      "questions": [
        { "title": "Bir şeyler yapmaya karşı duyulan ilginin ya da keyfin azlığı" },
        { "title": "Kendini çökmüş, depresif veya umutsuz hissetmek" },
        { "title": "Uykuya dalmakta zorluk çekmek, uykuyu sürdürememek veya çok uyumak" },
        { "title": "Yorgun hissetmek veya az enerjiye sahip olmak" },
        { "title": "İştahsızlık veya aşırı yemek yeme" },
        { "title": "Kendinizle ilgili kötü hissetmek" },
        { "title": "Nesnelere odaklanmada güçlük çekmek" },
        { "title": "İnsanların fark edebileceği kadar yavaş hareket etmek veya konuşmak ya da tam tersi" },
        { "title": "Ölmenin daha iyi olabileceği veya kendinize bir şekilde zarar verme düşünceleri" }
      ],
      "results": {
        "minima": { "label": "Minimal", "desc": "Belirgin bir depresyon belirtisi tespit edilmedi. Duygusal iyi oluşunuza özen göstermeye devam edin." },
        "leve": { "label": "Hafif", "desc": "Hafif düzeyde depresyon belirtileri tespit edildi. Ruh halinizi gözlemlemeyi ve sağlıklı alışkanlıklar edinmeyi düşünebilirsiniz." },
        "moderada": { "label": "Orta", "desc": "Orta düzeyde depresyon belirtileri tespit edildi. Bir ruh sağlığı uzmanına danışmanız önerilir." },
        "moderadamente_grave": {
          "label": "Orta-Şiddetli",
          "desc": "Orta-Şiddetli depresyon belirtileri tespit edildi. En kısa sürede profesyonel yardım almanız önemlidir."
        },
        "grave": { "label": "Şiddetli", "desc": "Şiddetli depresyon belirtileri tespit edildi. Acilen profesyonel destek almanız tavsiye edilir." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Alkol Kullanım Bozuklukları Tanıma Testi",
      "desc": "Sorunlu alkol tüketimini tespit etmek için DSÖ tarafından geliştirilmiştir.",
      "instructions": "Alkol tüketiminizle ilgili aşağıdaki soruları yanıtlayın. Mümkün olduğunca dürüst olun.",
      "questions": [
        {
          "title": "Ne sıklıkla alkollü içecek tüketiyorsunuz?",
          "options": ["Hiç","Ayda bir veya daha az","Ayda 2 ila 4 kez","Haftada 2 ila 3 kez","Haftada 4 veya daha fazla"]
        },
        {
          "title": "İçki içtiğiniz tipik bir günde genellikle standart olarak kaç kadeh alkol alıyorsunuz?",
          "options": ["1 veya 2","3 veya 4","5 veya 6","7 ila 9","10 veya daha fazla"]
        },
        {
          "title": "Ne sıklıkla tek bir seferde altı veya daha fazla standart içki alıyorsunuz?",
          "options": ["Hiç","Ayda birden daha az","Aylık","Haftalık","Her gün veya neredeyse her gün"]
        },
        {
          "title": "Geçtiğimiz yıl içinde, bir kere içmeye başladıktan sonra duramayacağınızı hissettiğiniz ne sıklıkla oldu?",
          "options": ["Hiç","Ayda birden daha az","Aylık","Haftalık","Her gün veya neredeyse her gün"]
        },
        {
          "title": "Geçtiğimiz yıl içinde, içki yüzünden normalde sizden beklenen şeyleri yapamadığınız ne sıklıkla oldu?",
          "options": ["Hiç","Ayda birden daha az","Aylık","Haftalık","Her gün veya neredeyse her gün"]
        },
        {
          "title": "Geçtiğimiz yıl içinde, ağır bir içme seansının ardından güne başlamak için sabahları ilk olarak içki içmeye ihtiyaç duyduğunuz ne sıklıkla oldu?",
          "options": ["Hiç","Ayda birden daha az","Aylık","Haftalık","Her gün veya neredeyse her gün"]
        },
        {
          "title": "Geçtiğimiz yıl içinde, içtikten sonra suçluluk veya pişmanlık hissettiğiniz ne sıklıkla oldu?",
          "options": ["Hiç","Ayda birden daha az","Aylık","Haftalık","Her gün veya neredeyse her gün"]
        },
        {
          "title": "Geçtiğimiz yıl içinde, akşam içmiş olduğunuz için olanları hatırlayamadığınız ne sıklıkla oldu?",
          "options": ["Hiç","Ayda birden daha az","Aylık","Haftalık","Her gün veya neredeyse her gün"]
        },
        {
          "title": "İçkiniz yüzünden sizin veya başka birinin yaralandığı oldu mu?",
          "options": ["Hayır","Evet, ama geçtiğimiz yıl içinde değil","Evet, geçtiğimiz yıl içinde"]
        },
        {
          "title": "Bir akrabanız, arkadaşınız, doktorunuz ya da herhangi bir sağlık çalışanı içki içmenizden dolayı endişelerini dile getirdi mi ya da içkiyi azaltmanızı tavsiye etti mi?",
          "options": ["Hayır","Evet, ama geçtiğimiz yıl içinde değil","Evet, geçtiğimiz yıl içinde"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Düşük risk", "desc": "Alkol tüketiminiz düşük risk sınırları içindedir. Sağlıklı alışkanlıklarınızı sürdürün." },
        "riesgo_moderado": {
          "label": "Orta risk",
          "desc": "Alkol tüketiminiz orta düzeyde bir risk taşıyor. Tüketiminizi azaltmayı ve bir profesyonele danışmayı düşünebilirsiniz."
        },
        "riesgo_alto": { "label": "Yüksek risk", "desc": "Alkol tüketiminiz yüksek risk taşıyor. Tüketimi azaltabilmek için profesyonel destek almanız önerilir." },
        "posible_dependencia": { "label": "Olası bağımlılık", "desc": "Sonuçlar olası bir alkol bağımlılığına işaret ediyor. Uzmanlaşmış profesyonel yardım almanız önemlidir." }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Uykusuzluk Şiddet İndeksi",
      "desc": "Son iki haftadaki uykusuzluğun (insomnia) doğasını, şiddetini ve etkisini değerlendirir.",
      "instructions": "Son 2 hafta içindeki uyku problemlerinizin şiddetini değerlendirin.",
      "questions": [
        {
          "title": "Uykuya dalmada zorluk",
          "options": ["Yok","Hafif","Orta","Şiddetli","Çok şiddetli"]
        },
        {
          "title": "Uykuyu sürdürmede zorluk",
          "options": ["Yok","Hafif","Orta","Şiddetli","Çok şiddetli"]
        },
        {
          "title": "Sabahları çok erken uyanma",
          "options": ["Yok","Hafif","Orta","Şiddetli","Çok şiddetli"]
        },
        {
          "title": "Mevcut uyku düzeninizden ne kadar memnunsunuz?",
          "options": ["Çok memnunum","Memnunum","Orta derecede memnunum","Memnun değilim","Hiç memnun değilim"]
        },
        {
          "title": "Uyku sorununuzun günlük işleyişinizi (işlevselliğinizi) ne derece bozduğunu düşünüyorsunuz?",
          "options": ["Hiç","Biraz","Kısmen","Çok","Çok fazla"]
        },
        {
          "title": "Başkalarının, uyku sorununuzun yaşam kalitenizi etkilediğini ne derece fark ettiğini düşünüyorsunuz?",
          "options": ["Hiç","Biraz","Kısmen","Çok","Çok fazla"]
        },
        {
          "title": "Mevcut uyku probleminiz için ne kadar endişeleniyorsunuz?",
          "options": ["Hiç","Biraz","Kısmen","Çok","Çok fazla"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "Klinik uykusuzluk yok", "desc": "Klinik uykusuzluk problemi saptanmadı. Uykunuz normal parametrelerde görünüyor." },
        "subclinico": {
          "label": "Klinik eşik altı uykusuzluk",
          "desc": "Bazı uykusuzluk belirtileri saptanmıştır, ancak klinik düzeyde değildir. Uyku hijyeninizi iyileştirmeyi düşünebilirsiniz."
        },
        "clinico_moderado": { "label": "Orta şiddette klinik uykusuzluk", "desc": "Orta şiddette klinik uykusuzluk saptanmıştır. Bir sağlık profesyoneline danışmanız önerilir." },
        "clinico_grave": {
          "label": "Şiddetli klinik uykusuzluk",
          "desc": "Şiddetli klinik uykusuzluk saptanmıştır. Uyku problemlerinizi çözmek adına profesyonel destek almanız önemlidir."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Yeme Tutumu Testi-26",
      "desc": "Yeme bozukluklarının karakteristik özelliklerini ve davranışlarını tespit eder.",
      "instructions": "Aşağıdaki tutum veya davranışları ne sıklıkla sergilediğinizi belirtin. Dürüstçe yanıt verin.",
      "sharedOptions": ["Hiçbir zaman","Nadiren","Bazen","Sık sık","Çok sık","Her zaman"],
      "questions": [
        { "title": "Aşırı kilolu olmaktan çok korkuyorum" },
        { "title": "Aç olduğumda yemek yememeye çalışırım" },
        { "title": "Yemekleri çok fazla kafama takıyorum/endişeleniyorum" },
        { "title": "Yemek yemeyi durduramadığımı hissettiğim aşırı yeme krizlerim oldu" },
        { "title": "Yemeğimi küçük parçalara bölerim" },
        { "title": "Yediğim yiyeceklerin kalori miktarını bilirim" },
        { "title": "Özellikle karbonhidrat oranı yüksek gıdalardan uzak dururum" },
        { "title": "Başkalarının benim daha fazla yemek yememi tercih edeceğini hissediyorum" },
        { "title": "Yemek yedikten sonra kusarım" },
        { "title": "Yemek yedikten sonra kendimi aşırı derecede suçlu hissediyorum" },
        { "title": "Daha ince olma arzusuyla kafam çok meşgul" },
        { "title": "Egzersiz yaparken kalori yakmayı düşünürüm" },
        { "title": "Başkaları benim çok zayıf olduğumu düşünüyor" },
        { "title": "Vücudumda yağ olması düşüncesiyle kafam meşguldür" },
        { "title": "Öğünlerimi yemek diğer insanlardan daha uzun sürer" },
        { "title": "İçinde şeker olan gıdalardan uzak dururum" },
        { "title": "Diyet ürünleri yerim" },
        { "title": "Yemeklerin hayatımı kontrol ettiğini hissediyorum" },
        { "title": "Yiyecekler söz konusu olduğunda kendimi kontrol altında tutarım" },
        { "title": "Başkalarının bana yemek yemem için baskı yaptığını hissediyorum" },
        { "title": "Yemeğe çok fazla zaman ve düşünce harcıyorum" },
        { "title": "Tatlı yedikten sonra kendimi rahatsız hissediyorum" },
        { "title": "Diyetteyim" },
        { "title": "Midemin boş olmasından hoşlanırım" },
        { "title": "Yeni ve lezzetli yiyecekleri denemekten keyif alırım" },
        { "title": "Yemeklerden sonra kusma dürtüsü yaşarım" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Düşük risk", "desc": "Risk oluşturabilecek belirgin bir yeme tutumu saptanmamıştır. Yiyeceklerle aranızdaki sağlıklı ilişkiyi koruyun." },
        "riesgo_significativo": {
          "label": "Belirgin risk",
          "desc": "Yeme bozukluğuna işaret edebilecek yeme tutumları tespit edilmiştir. Alanında uzman bir sağlık profesyoneline danışmanız önerilir."
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Duygudurum Bozuklukları Ölçeği",
      "desc": "Bipolar bozukluk ve bipolar spektrumu için hızlı tarama aracı.",
      "instructions": "Hayatınızın bir döneminde yaşamış olabileceğiniz deneyimler hakkındaki aşağıdaki soruları yanıtlayın.",
      "questions": [
        {
          "title": "Şimdiye kadar kendinizi o kadar iyi veya o kadar hareketli hissettiğiniz ve diğer insanların sizin normal halinizde olmadığınızı düşündükleri bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar insanlara bağıracak veya kavga çıkaracak kadar asabi/sinirli olduğunuz bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar kendinize her zamankinden çok daha fazla güvendiğiniz bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar her zamankinden çok daha az uyuduğunuz ve eksikliğini hissetmediğiniz bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar her zamankinden çok daha konuşkan olduğunuz veya daha hızlı konuştuğunuz bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar düşüncelerin zihninizde hızla aktığı/koşuştuğu bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar dikkatinizin o kadar kolay dağıldığı ve odaklanmakta çok zorluk çektiğiniz bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar her zamankinden çok daha fazla enerjiye sahip olduğunuz bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar her zamankinden çok daha fazla aktif olduğunuz veya çok daha fazla şey yaptığınız bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar her zamankinden çok daha fazla sosyal olduğunuz veya dışa dönük olduğunuz bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar sekse her zamankinden çok daha fazla ilgi duyduğunuz bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar sizin için sıradışı olan veya başkalarının aşırı/riskli bulduğu şeyler yaptığınız bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Şimdiye kadar size ya da ailenize sorun yaratacak şekilde para harcadığınız bir dönem oldu mu?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Bu deneyimlerden birkaçı aynı zaman diliminde meydana geldi mi?",
          "options": ["Hayır","Evet"]
        },
        {
          "title": "Eğer önceki sorulardan herhangi birine EVET yanıtı verdiyseniz, bunlar size ne derece sorun yarattı?",
          "options": ["Hiç sorun yaratmadı","Hafif sorun","Orta şiddette sorun","Ciddi sorun"]
        }
      ],
      "results": {
        "positive": {
          "label": "Bipolar bozukluk için pozitif tarama",
          "desc": "Yanıtlarınız bipolar spektrum bozukluğu olasılığına işaret ediyor. Bu sonuç BİR TANI DEĞİLDİR. Bir psikiyatrist ile kapsamlı bir profesyonel değerlendirme kesinlikle tavsiye edilir."
        },
        "negative": {
          "label": "Negatif tarama",
          "desc": "Yanıtlarınız, bu tarama aracına göre bir bipolar spektrum bozukluğunun varlığına işaret etmemektedir. Bu ölçeğin yalnızca bir tarama aracı olduğunu ve profesyonel bir değerlendirmenin yerine geçmediğini unutmayın."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Sosyal Fobi Envanteri",
      "desc": "Sosyal kaygı belirtilerinin varlığını ve şiddetini değerlendirir.",
      "instructions": "Aşağıdaki sorunların geçtiğimiz hafta boyunca sizi ne kadar rahatsız ettiğini belirtin.",
      "sharedOptions": ["Hiç","Biraz","Kısmen","Çok","Aşırı düzeyde"],
      "questions": [
        { "title": "Otorite sahibi insanlardan korkarım." },
        { "title": "İnsanların önünde yüzümün kızarması beni rahatsız eder." },
        { "title": "Partiler ve sosyal etkinlikler beni korkutur." },
        { "title": "Tanımadığım insanlarla konuşmaktan kaçınırım." },
        { "title": "Eleştirilmekten çok korkarım." },
        { "title": "Utanma korkusu benim bir şeyler yapmaktan veya insanlarla konuşmaktan kaçınmama neden olur." },
        { "title": "İnsanların önünde terlemek bana sıkıntı verir." },
        { "title": "Partilere gitmekten kaçınırım." },
        { "title": "İlgi odağı olduğum aktivitelerden kaçınırım." },
        { "title": "Yabancılarla konuşmak beni korkutur." },
        { "title": "Toplum önünde konuşmak zorunda kalmaktan dehşete düşerim." },
        { "title": "Eleştirilmekten kaçınmak için her şeyi yapardım." },
        { "title": "İnsanlarla birlikteyken hissettiğim kalp çarpıntısı beni rahatsız eder." },
        { "title": "İnsanlar beni izlerken bir şeyler yapmaktan çekinirim." },
        { "title": "En büyük korkularım utanmak ve kendimi aptal durumuna düşürmektir." },
        { "title": "Otorite konumundaki herhangi biriyle konuşmaktan kaçınırım." },
        { "title": "Başkalarının önünde titremek bana sıkıntı verir." }
      ],
      "results": {
        "low": { "label": "Düşük sosyal kaygı", "desc": "Puanınız sosyal kaygınızın düşük düzeyde olduğunu gösterir." },
        "mild": { "label": "Hafif sosyal kaygı", "desc": "Puanınız hafif düzeyde sosyal kaygıya işaret ediyor." },
        "moderate": {
          "label": "Orta düzey sosyal kaygı",
          "desc": "Puanınız orta düzeyde sosyal kaygıya işaret ediyor. Profesyonel destek almaktan fayda görebilirsiniz."
        },
        "severe": { "label": "Şiddetli sosyal kaygı", "desc": "Puanınız şiddetli düzeyde sosyal kaygıya işaret ediyor. Profesyonel yardım almanız tavsiye edilir." },
        "very_severe": {
          "label": "Çok şiddetli sosyal kaygı",
          "desc": "Puanınız çok şiddetli bir sosyal kaygı seviyesine işaret ediyor. Profesyonel yardım almanız kesinlikle önerilir."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Rosenberg Benlik Saygısı Ölçeği",
      "desc": "Genel benlik saygısının (öz saygının) en yaygın olarak kullanılan ölçümüdür. Kişinin kendisine biçtiği değeri değerlendirir.",
      "instructions": "Aşağıdaki ifadelerin her birine ne ölçüde katıldığınızı belirtin.",
      "sharedOptions": ["Kesinlikle katılmıyorum","Katılmıyorum","Katılıyorum","Kesinlikle katılıyorum"],
      "questions": [
        { "title": "En azından diğer insanlarla eşit düzeyde değerli bir insan olduğumu hissediyorum." },
        { "title": "Olumlu özelliklerim olduğunu hissediyorum." },
        { "title": "Genel olarak, kendimi başarısız biri olarak görme eğilimindeyim." },
        { "title": "Pek çok insanın yapabileceği kadar işleri iyi yapabiliyorum." },
        { "title": "Kendimde gurur duyacak fazla bir şey olmadığını hissediyorum." },
        { "title": "Kendime karşı olumlu bir tutum içindeyim." },
        { "title": "Genel olarak kendimden memnunum." },
        { "title": "Kendime daha fazla saygı duyabilmeyi isterdim." },
        { "title": "Bazen kendimi gerçekten işe yaramaz hissediyorum." },
        { "title": "Bazen hiçbir işe yaramadığımı (hiçbir şeye yaramadığımı) düşünürüm." }
      ],
      "results": {
        "low": { "label": "Düşük öz saygı", "desc": "Puanınız benlik saygınızın (öz saygınızın) düşük olduğunu gösteriyor. Profesyonel destek almanız tavsiye edilir." },
        "normal": { "label": "Normal öz saygı", "desc": "Puanınız normal ve sağlıklı bir benlik saygısı düzeyini gösteriyor." },
        "high": { "label": "Yüksek öz saygı", "desc": "Puanınız yüksek bir benlik saygısı düzeyine işaret ediyor." }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "DSÖ-5 İyi Oluş İndeksi",
      "desc": "DSÖ tarafından geliştirilmiş duygusal iyi oluşu ölçen kısa bir test. Sadece 5 soru.",
      "instructions": "Son iki hafta içinde kendinizi nasıl hissettiğinizi belirtin.",
      "sharedOptions": [
        "Hiçbir zaman",
        "Zamanın küçük bir kısmında",
        "Zamanın yarısından daha azında",
        "Zamanın yarısından çoğunda",
        "Zamanın çoğunda",
        "Her zaman"
      ],
      "questions": [
        { "title": "Kendimi neşeli ve iyi bir ruh halinde hissettim." },
        { "title": "Kendimi sakin ve rahatlamış hissettim." },
        { "title": "Kendimi aktif ve zinde hissettim." },
        { "title": "Sabahları dinç ve dinlenmiş bir şekilde uyandım." },
        { "title": "Günlük yaşantım, ilgimi çeken şeylerle doluydu." }
      ],
      "results": {
        "low": { "label": "Düşük iyi oluş", "desc": "Duygusal iyi oluş düzeyinizin düşük olduğunu gösterir. Profesyonel bir değerlendirme tavsiye edilir." },
        "reduced": { "label": "Azalmış iyi oluş", "desc": "Duygusal iyi oluşunuzda azalma olduğunu gösterir. Bir ruh sağlığı uzmanıyla konuşmayı düşünebilirsiniz." },
        "moderate": { "label": "Orta derecede iyi oluş", "desc": "Duygusal iyi oluş düzeyinizin orta seviyede olduğunu gösterir." },
        "high": { "label": "Yüksek iyi oluş", "desc": "Duygusal iyi oluş düzeyinizin yüksek olduğunu gösterir." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Otizm Spektrum Ölçeği — 10 madde",
      "desc": "Otizm spektrumu ile ilişkili özelliklerin tespiti için kısa tarama. Baron-Cohen ve diğerleri tarafından geliştirilmiştir.",
      "instructions": "Her bir ifadeyi dikkatlice okuyun ve ne derecede katılıp katılmadığınızı belirtin.",
      "sharedOptions": [
            "Kesinlikle katılıyorum",
            "Biraz katılıyorum",
            "Biraz katılmıyorum",
            "Kesinlikle katılmıyorum"
      ],
      "questions": [
            {
                  "title": "Genellikle başkalarının fark etmediği ufak sesleri fark ederim"
            },
            {
                  "title": "Bir hikaye okurken karakterlerin niyetlerini anlamakta zorlanırım"
            },
            {
                  "title": "Biri benimle konuşurken 'satır aralarını' okumayı kolay bulurum"
            },
            {
                  "title": "Genelde küçük ayrıntılardan ziyade büyük resme / bütün tabloya odaklanırım"
            },
            {
                  "title": "Beni dinleyen birinin sıkılıp sıkılmadığını nasıl anlayacağımı bilirim"
            },
            {
                  "title": "Aynı anda birden fazla iş yapmayı kolay bulurum"
            },
            {
                  "title": "Sadece yüzüne bakarak birinin ne düşündüğünü veya ne hissettiğini anlamak bana kolay gelir"
            },
            {
                  "title": "Bir kesinti olursa, yaptığım işe çok hızlıca geri dönebilirim"
            },
            {
                  "title": "Nesnelerin kategorileri/sınıfları hakkında bilgi toplamayı severim"
            },
            {
                  "title": "İnsanların niyetlerini anlamakta güçlük çekerim"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Az otistik özellik",
                  "desc": "Puanınız bariz otizm spektrum özelliklerine işaret etmiyor. Ancak endişeleriniz varsa bir uzmana danışın."
            },
            "moderado": {
                  "label": "Bazı otistik özellikler",
                  "desc": "Puanınız otizm spektrumuyla ilişkili bazı özelliklere işaret ediyor, ancak klinik sevk sınırının (≥6) altında."
            },
            "alto": {
                  "label": "Belirgin otistik özellikler",
                  "desc": "Puanınız sevk eşiğini (≥6) aşıyor. Uzman bir profesyonelle kapsamlı bir tanısal değerlendirme önerilir."
            },
            "muy_alto": {
                  "label": "Çok belirgin otistik özellikler",
                  "desc": "Puanınız yüksek. Otizm spektrum bozuklukları konusunda uzmanlaşmış biriyle kapsamlı bir değerlendirme yaptırmanız şiddetle tavsiye edilir."
            }
      }
},
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Otizm Spektrum Ölçeği — 50 madde",
      "desc": "Beş alanda otizm spektrum özelliklerinin kapsamlı değerlendirmesi: sosyal beceriler, dikkat değişimi, detaya dikkat, iletişim ve hayal gücü.",
      "instructions": "Her bir ifadeyi dikkatlice okuyun ve ne derecede katılıp katılmadığınızı belirtin. Doğru ya da yanlış cevap yoktur.",
      "questions": [
            {
                  "title": "Bir şeyleri kendi başıma yapmaktansa başkalarıyla yapmayı tercih ederim"
            },
            {
                  "title": "İşleri tekrar tekrar aynı yolla yapmayı tercih ederim"
            },
            {
                  "title": "Bir şeyi hayal etmeye çalıştığımda, zihnimde bir resim oluşturmayı çok kolay bulurum"
            },
            {
                  "title": "Sıklıkla kendimi bir şeye o kadar çok kaptırırım ki diğer şeyleri gözden kaçırırım"
            },
            {
                  "title": "Genellikle başkalarının fark etmediği ufak sesleri fark ederim"
            },
            {
                  "title": "Araç plakalarına veya benzer dize halindeki bilgilere genelde dikkat ederim"
            },
            {
                  "title": "Kendi söylediklerimin kibar olduğunu düşünsem de diğer insanlar sık sık kaba olduğumu söyler"
            },
            {
                  "title": "Bir hikaye okurken, karakterlerin nasıl görünebileceğini kolayca hayal edebilirim"
            },
            {
                  "title": "Tarihler beni büyüler/çeker"
            },
            {
                  "title": "Sosyal bir grupta, birkaç farklı kişinin konuşmasını aynı anda kolayca takip edebilirim"
            },
            {
                  "title": "Sosyal durumları olay bulurum"
            },
            {
                  "title": "Başkalarının fark etmediği ayrıntıları fark etme eğilimindeyim"
            },
            {
                  "title": "Bir partiye gitmektense kütüphaneye gitmeyi tercih ederim"
            },
            {
                  "title": "Hikaye uydurmayı/kurgulamayı kolay bulurum"
            },
            {
                  "title": "Kendimi eşyalardan ziyade insanlara daha çok çekim hissederken bulurum"
            },
            {
                  "title": "Dahil olamadığım/yapamadığım zaman bende moral bozukluğu yaratan çok güçlü ilgi alanlarına sahip olma eğilimindeyim"
            },
            {
                  "title": "Sosyal havadan sudan sohbetlerden zevk alırım"
            },
            {
                  "title": "Ben konuştuğumda, başkalarının araya girip lafa karışması pek kolay değildir"
            },
            {
                  "title": "Sayılar beni her zaman büyüler/çeker"
            },
            {
                  "title": "Bir hikaye okurken karakterlerin niyetlerini anlamakta zorlanırım"
            },
            {
                  "title": "Kurgu kitaplar (roman vb.) okumaktan pek hoşlanmam"
            },
            {
                  "title": "Yeni arkadaşlar edinmekte zorlanırım"
            },
            {
                  "title": "Her zaman nesnelerdeki örüntüleri/kalıpları fark ederim"
            },
            {
                  "title": "Müzeye gitmektense tiyatroya gitmeyi tercih ederim"
            },
            {
                  "title": "Günlük rutinim bozulursa bu durum beni rahatsız etmez / üzmez"
            },
            {
                  "title": "Sık sık bir konuşmayı nasıl sürdüreceğimi bilmediğimi fark ederim"
            },
            {
                  "title": "Biri benimle konuşurken 'satır aralarını' okumayı kolay bulurum"
            },
            {
                  "title": "Genelde küçük ayrıntılardan ziyade büyük resme / bütün tabloya odaklanırım"
            },
            {
                  "title": "Telefon numaralarını hatırlamakta pek iyi değilim"
            },
            {
                  "title": "Genellikle bir durumdaki veya bir kişinin görünümündeki küçük değişiklikleri fark etmem"
            },
            {
                  "title": "Beni dinleyen birinin sıkılıp sıkılmadığını nasıl anlayacağımı bilirim"
            },
            {
                  "title": "Aynı anda birden fazla şey yapmayı kolay bulurum"
            },
            {
                  "title": "Telefonda konuşurken ne zaman sıranın bana geldiğinden emin olamam"
            },
            {
                  "title": "İşleri spontane (kendiliğinden) yapmaktan keyif alırım"
            },
            {
                  "title": "Bir şakanın asıl noktasını anlayan genelde en son kişi olurum"
            },
            {
                  "title": "Sadece yüzüne bakarak birinin ne düşündüğünü veya ne hissettiğini anlamak bana kolay gelir"
            },
            {
                  "title": "Bir kesinti olursa, yaptığım işe çok hızlıca geri dönebilirim"
            },
            {
                  "title": "Havadan sudan sosyal sohbetlerde iyiyimdir"
            },
            {
                  "title": "İnsanlar sık sık bana aynı şeyden bahsedip durduğumu söylerler"
            },
            {
                  "title": "Küçükken diğer çocuklarla rol yapma / -mış gibi yapma oyunları oynamaktan zevk alırdım"
            },
            {
                  "title": "Nesnelerin kategorileri/sınıfları hakkında bilgi toplamayı severim"
            },
            {
                  "title": "Başka birinin yerinde olmanın nasıl bir şey olduğunu hayal etmekte güçlük çekerim"
            },
            {
                  "title": "Katıldığım her aktiviteyi dikkatlice planlamayı severim"
            },
            {
                  "title": "Sosyal ortamlardan keyif alırım"
            },
            {
                  "title": "İnsanların niyetlerini anlamakta güçlük çekerim"
            },
            {
                  "title": "Yeni durumlar beni kaygılandırır / gerer"
            },
            {
                  "title": "Yeni insanlarla tanışmaktan zevk alırım"
            },
            {
                  "title": "İyi bir diplomatımdır (nabza göre şerbet veren/idare eden)"
            },
            {
                  "title": "İnsanların doğum tarihlerini hatırlamakta pek iyi değilim"
            },
            {
                  "title": "Çocuklarla rol yapma / -mış gibi yapma oyunları oynamayı çok kolay bulurum"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Az otistik özellik",
                  "desc": "Puanınız genel nüfusun tipik aralığındadır. Belirgin bir otizm spektrum özelliği öngörülmemektedir."
            },
            "leve": {
                  "label": "Hafif otistik özellikler",
                  "desc": "Puanınız bazı otizm özelliklerine sahip olduğunuzu gösterir (ortalama sınırlar dahilinde). Tanısı olmayan birçok insan bu aralıkta puan alır."
            },
            "moderado": {
                  "label": "Orta otistik özellikler",
                  "desc": "Puanınız 26 eşiğini aşıyor ve ortalamanın üzerinde otistik özellikler taşıdığınızı gösteriyor. Eğer zorluklar yaşıyorsanız bir uzmana danışmayı düşünebilirsiniz."
            },
            "alto": {
                  "label": "Belirgin otistik özellikler",
                  "desc": "Puanınız klinik eşik olan 32'yi aşıyor. Otizm tanısı alan yetişkinlerin %80'i bu aralıkta puan almaktadır. Tanısal bir değerlendirme yapılması önerilir."
            },
            "muy_alto": {
                  "label": "Çok belirgin otistik özellikler",
                  "desc": "Puanınız çok yüksek ve güçlü bir şekilde otizm spektrum özelliklerinin varlığına işaret ediyor. Kapsamlı bir tanısal değerlendirme kesinlikle tavsiye edilir."
            }
      }
},
    "cssrs": {
      "name": "C-SSRS",
      "abbr": "C-SSRS",
      "fullName": "Columbia İntihar Şiddeti Derecelendirme Ölçeği — Tarama",
      "desc": "Acil servislerde, birinci basamakta ve eğitimde kullanılan dünya çapında bir intihar riski tarama aracıdır.",
      "instructions": "Sahip olabileceğiniz düşünceler veya davranışlar hakkındaki aşağıdaki soruları dürüstçe yanıtlayın. Yanıtlarınız gizlidir ve yalnızca cihazınızda saklanır.",
      "questions": [
            {
                  "title": "Hiç ölmüş olmayı ya da uyuyup bir daha uyanmamayı dilediğiniz oldu mu?",
                  "options": [
                        "Hayır",
                        "Evet"
                  ]
            },
            {
                  "title": "Aslında kendinizi öldürmekle ilgili herhangi bir düşünceniz oldu mu?",
                  "options": [
                        "Hayır",
                        "Evet"
                  ]
            },
            {
                  "title": "Bunu (intiharı) nasıl yapabileceğiniz hakkında hiç düşündünüz mü? (ör. hap, silah ya da başka bir yöntemle)",
                  "options": [
                        "Hayır",
                        "Evet"
                  ]
            },
            {
                  "title": "Bu düşüncelere hiç sahip oldunuz mu ve bunları gerçekleştirme niyetiniz oldu mu?",
                  "options": [
                        "Hayır",
                        "Evet"
                  ]
            },
            {
                  "title": "Kendinizi nasıl öldüreceğinizin ayrıntılarını tasarlamaya başladığınız ya da tasarladığınız oldu mu? Bu planı gerçekleştirmeye niyetiniz var mı?",
                  "options": [
                        "Hayır",
                        "Evet"
                  ]
            },
            {
                  "title": "Hayatınıza son vermek için hiç bir şey yaptınız mı, yapmaya başladınız mı ya da bir şeyler hazırladınız mı? (örn. haplar biriktirmek, bir silah elde etmek, değerli eşyalarınızı başkalarına vermek, intihar mektubu yazmak, hap içmek, kendinizi kesmek, asmaya çalışmak vb.)",
                  "options": [
                        "Hayır",
                        "Evet"
                  ]
            }
      ],
      "results": {
            "none": {
                  "label": "Herhangi bir risk tespit edilmedi",
                  "desc": "Şu anda herhangi bir intihar riski göstergesi tespit edilmemiştir. Eğer bu tarz düşüncelere kapılırsanız profesyonel yardım almaktan çekinmeyin."
            },
            "low": {
                  "label": "Düşük risk",
                  "desc": "Pasif ölüm düşünceleri ifade ettiniz. Aktif bir planınız olmasa da bir profesyonelle konuşmanız önerilir.\n\n🆘 KRİZ HATTI:\n• Türkiye (Acil): 112\n• Alo 182 veya bir psikiyatri uzmanı başvurusu"
            },
            "moderate": {
                  "label": "Orta düzeyde risk",
                  "desc": "Yanıtlarınız intihar düşünceleri gösteriyor. Bir ruh sağlığı uzmanıyla konuşmanız çok önemlidir. Kendinizi güvende tutacak bir plan yapmak yardımcı olabilir.\n\n🆘 KRİZ HATTI:\n• Türkiye (Acil): 112"
            },
            "high": {
                  "label": "Yüksek risk",
                  "desc": "Yanıtlarınız intihar davranışı açısından yüksek riske işaret ediyor. Acil profesyonel değerlendirmeye ihtiyacınız var. Lütfen bir ruh sağlığı uzmanına ulaşın veya kriz hattını şimdi arayın.\n\n🆘 KRİZ HATTI:\n• Türkiye (Acil): 112"
            },
            "imminent": {
                  "label": "Çok Yüksek ve Yakın Risk",
                  "desc": "Yanıtlarınız çok yüksek riske işaret ediyor. ŞİMDİ profesyonel yardım almanız zorunludur. Derhal acil servise gidin veya kriz hattını arayın. Yalnız değilsiniz.\n\n🆘 KRİZ HATTI:\n• Türkiye: 112 Acil"
            }
      }
},
    "cage": {
      "name": "CAGE",
      "abbr": "CAGE",
      "fullName": "CAGE Alkol Tarama Anketi",
      "desc": "Alkol sorunlarını saptamaya yarayan çok kısa 4 soruluk tarama. AUDIT testini tamamlayıcıdır.",
      "instructions": "Alkolle olan ilişkinizle ilgili aşağıdaki sorulara dürüstçe yanıt verin.",
      "sharedOptions": [
            "Hayır",
            "Evet"
      ],
      "questions": [
            {
                  "title": "İçki içmeyi (Cut down) Azaltmanız gerektiğini hiç hissettiniz mi?"
            },
            {
                  "title": "İnsanlar içkinizi eleştirerek sizi hiç (Annoyed) Sinirlendirdi / Rahatsız etti mi?"
            },
            {
                  "title": "İçtiğinizden dolayı hiç kötü ya da (Guilty) Suçlu hissettiniz mi?"
            },
            {
                  "title": "Sinirlerinizi yatıştırmak veya akşamdan kalmalıktan kurtulmak için hiç sabah ilk iş olarak (Eye-opener) içki içtiğiniz oldu mu?"
            }
      ],
      "results": {
            "none": {
                  "label": "Gösterge yok",
                  "desc": "Alkol sorunu ile ilgili herhangi bir gösterge tespit edilmedi."
            },
            "low": {
                  "label": "Olası risk",
                  "desc": "Bir adet evet yanıtı, daha detaylı inceleme yapılmasını gerektirir. Daha eksiksiz bir değerlendirme için AUDIT testini göz önünde bulundurun."
            },
            "moderate": {
                  "label": "Olası problem",
                  "desc": "Puanınız bir alkol kullanım bozukluğu olasılığının yüksek olduğunu gösteriyor. Bir sağlık uzmanına danışmanız önerilir."
            },
            "high": {
                  "label": "Yüksek olasılık",
                  "desc": "Puanınız neredeyse alkol bağımlılığı tanısı konacak düzeyde. Uzmanlaşmış profesyonel yardım almanız çok önemlidir."
            }
      }
},
    "phqa": {
      "name": "PHQ-A",
      "abbr": "PHQ-A",
      "fullName": "Hasta Sağlık Anketi — Ergenler İçin",
      "desc": "PHQ-9'un ergenler için geçerliliği kanıtlanmış (11-17 yaş) versiyonu. Son iki haftadaki depresyonu değerlendirir.",
      "instructions": "Son 2 hafta içinde aşağıdaki sorunlar sizi ne sıklıkla rahatsız etti? Okulda, arkadaşlarınızın yanında ve evde kendinizi nasıl hissettiğinizi düşünün.",
      "sharedOptions": [
            "Hiç",
            "Birkaç gün",
            "Günlerin yarısından fazlasında",
            "Neredeyse her gün"
      ],
      "questions": [
            {
                  "title": "Bir şeyler yapmaya karşı duyulan ilginin ya da keyfin azlığı"
            },
            {
                  "title": "Kendini çökmüş, depresif veya umutsuz hissetmek"
            },
            {
                  "title": "Uykuya dalmakta zorluk çekmek, uykuyu sürdürememek veya çok uyumak"
            },
            {
                  "title": "Yorgun hissetmek veya az enerjiye sahip olmak"
            },
            {
                  "title": "İştahsızlık veya aşırı yemek yeme"
            },
            {
                  "title": "Kendinizle ilgili kötü hissetmek — veya başarısız olduğunuzu ya da kendinizi ve ailenizi hayal kırıklığına uğrattığınızı düşünmek"
            },
            {
                  "title": "Okul ödevlerine, kitap okumaya veya TV izlemeye odaklanmada güçlük çekmek"
            },
            {
                  "title": "Diğer insanların fark edebileceği kadar yavaş hareket etmek veya konuşmak? Ya da tam tersi — her zamankinden çok daha fazla hareket edecek kadar kıpır kıpır ya da huzursuz olmak"
            },
            {
                  "title": "Ölmenin daha iyi olabileceği veya kendinize bir şekilde zarar verme düşünceleri"
            }
      ],
      "results": {
            "minima": {
                  "label": "Minimal",
                  "desc": "Belirgin bir depresyon belirtisi tespit edilmedi. Duygusal iyi oluşunuza özen göstermeye devam edin."
            },
            "leve": {
                  "label": "Hafif",
                  "desc": "Hafif belirtiler tespit edildi. Sizi endişelendiren bir şey olursa güvendiğiniz bir yetişkinle konuşun."
            },
            "moderada": {
                  "label": "Orta",
                  "desc": "Orta şiddette depresyon belirtileri tespit edildi. Bir ruh sağlığı uzmanıyla konuşmanız tavsiye edilir."
            },
            "moderadamente_grave": {
                  "label": "Orta-Şiddetli",
                  "desc": "Belirgin depresyon belirtileri tespit edildi. En kısa sürede profesyonel yardım almak önemlidir."
            },
            "grave": {
                  "label": "Şiddetli",
                  "desc": "Şiddetli depresyon belirtileri tespit edildi. Acilen profesyonel yardım isteyin. Şimdi güvendiğiniz bir yetişkinle konuşun."
            }
      }
},
    "triage": {
      "name": "Kılavuz",
      "abbr": "Kılavuz",
      "fullName": "Başlangıç Yönlendirme Anketi",
      "desc": "Nereden başlayacağınızı bilmiyor musunuz? Bu kısa anket, sizin için en uygun olan değerlendirmeleri önerir.",
      "instructions": "Son günlerde kendinizi nasıl hissettiğinize dair aşağıdaki soruları dürüstçe yanıtlayın. En sonunda hangi değerlendirmeleri almanız gerektiği hakkında kişiselleştirilmiş öneriler alacaksınız.",
      "sharedOptions": ["Hiç","Biraz","Orta düzeyde","Oldukça fazla","Çok fazla"],
      "questions": [
        { "title": "Kendimi üzgün, çökmüş veya umutsuz hissettim" },
        { "title": "Eskiden keyif aldığım şeylere olan ilgimi veya zevkimi kaybettim" },
        { "title": "Zamanın çoğunda kendimi enerjisiz veya yorgun hissediyorum" },
        { "title": "Gergin, kaygılı veya diken üstünde hissediyorum" },
        { "title": "Kontrol edemediğim aşırı endişelerim var" },
        { "title": "Fiziksel kaygı belirtileri (çarpıntı, terleme, titreme vb.) yaşıyorum" },
        { "title": "Yargılanma veya kendimi aptal durumuna düşürme korkusuyla sosyal ortamlardan kaçınıyorum" },
        { "title": "Toplum önünde veya yabancılarla konuşmakta çok zorlanıyorum" },
        { "title": "Hayattaki durumlar karşısında bunalmış hissediyorum" },
        { "title": "Günlük sorunlarla başa çıkmakta zorlanıyorum" },
        { "title": "Beni etkilemeye devam eden travmatik bir olay yaşadım" },
        { "title": "Geçmişteki olaylarla ilgili rahatsız edici anılarım veya kabuslarım var" },
        { "title": "Uykuya dalmakta veya uykumu sürdürmekte güçlük çekiyorum" },
        { "title": "Uykumun kalitesi günlük işlevselliğimi etkiliyor" },
        { "title": "Kilom veya vücut imajım hakkında aşırı endişeliyim" },
        { "title": "Yiyeceklerle sorunlu bir ilişkim var (kısıtlama, aşırı yeme, kusma vb.)" },
        { "title": "Alkol tüketimim beni endişelendiriyor veya sorunlara yol açıyor" },
        { "title": "Odaklanmakta, işleri organize etmekte veya başladığım işi bitirmekte zorlanıyorum" },
        { "title": "Aşırı huzursuzum veya sabit durmakta zorlanıyorum" },
        { "title": "Bana sıkıntı veren tekrarlayıcı ve istemsiz/zorlayıcı düşüncelerim var" },
        { "title": "Belirli eylemleri veya ritüelleri tekrarlama ihtiyacı hissediyorum" },
        { "title": "Öfori (aşırı neşe) veya aşırı enerji hissettiğim dönemleri takiben depresyon yaşadığım dönemler oldu" },
        { "title": "Alışılmadık düzeyde hiperaktif veya dürtüsel hissettiğim dönemler (epizotlar) geçirdim" },
        { "title": "Kişilerarası ilişkilerim genelde çok yoğun ama bir o kadar da çalkantılıdır" },
        { "title": "Duygularım hızla değişir ve onları düzenlemekte zorlanırım" }
      ,
        { "title": "Diğer insanların niyetlerini veya duygularını anlamakta güçlük çekerim" },
        { "title": "Rutinleri / belirli bir düzeni tercih ederim ve bunlar bozulduğunda huzursuz olurum" }
      ],
      "domainNames": {
        "Estado de ánimo": "Duygudurum / Ruh Hali",
        "Ansiedad": "Anksiyete (Kaygı)",
        "Ansiedad social": "Sosyal Anksiyete",
        "Estrés": "Stres",
        "Trauma": "Travma",
        "Sueño": "Uyku",
        "Alimentación": "Yeme Problemleri",
        "Alcohol": "Alkol",
        "Atención y concentración": "Dikkat ve Odaklanma",
        "Obsesiones y compulsiones": "Takıntı ve Zorlantılar (OKB)",
        "Cambios de ánimo": "Ruh Hali Değişimleri (Bipolar vd.)",
        "Regulación emocional": "Duygusal Düzenleme (Kişilik vb.)"
      ,
        "Rasgos del espectro autista": "Otizm Spektrum Özellikleri"
      },
      "domainReasons": {
        "Estado de ánimo": "Duygudurum / Depresyon göstergelerinde yüksek puan",
        "Ansiedad": "Anksiyete (Kaygı) göstergelerinde yüksek puan",
        "Ansiedad social": "Sosyal kaygı göstergelerinde yüksek puan",
        "Estrés": "Algılanan stres göstergelerinde yüksek puan",
        "Trauma": "Travma ve travma sonrası stres göstergelerinde yüksek puan",
        "Sueño": "Uyku sorunları göstergelerinde yüksek puan",
        "Alimentación": "Yeme davranışı göstergelerinde yüksek puan",
        "Alcohol": "Alkol tüketimi göstergelerinde yüksek puan",
        "Atención y concentración": "Dikkatsizlik ve hiperaktivite göstergelerinde yüksek puan",
        "Obsesiones y compulsiones": "Obsesif-kompulsif göstergelerde yüksek puan",
        "Cambios de ánimo": "Kutupsal ruh hali değişimi göstergelerinde yüksek puan",
        "Regulación emocional": "Duygusal ve kişilerarası dengesizlik göstergelerinde yüksek puan"
      ,
        "Rasgos del espectro autista": "Otizm spektrum özellik göstergelerinde yüksek puan"
      },
      "results": {
        "triage_label": "Önerilen değerlendirmeleriniz",
        "triage_desc": "Verdiğiniz yanıtlara dayanarak, şu değerlendirmeleri yapmanızı öneriyoruz:",
        "suggested_wellbeing": "Herkes için tavsiye edilen genel iyi oluş değerlendirmesi",
        "suggested_personality": "Tamamlayıcı olması için tavsiye edilen kişilik değerlendirmesi"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — 300 Maddelik Kişilik Envanteri",
      "desc": "Mevcut olan en kapsamlı kişilik değerlendirmesi. Büyük Beşli özelliklerine sahip 30 boyutu (faseti) çok yüksek hassasiyetle ölçer.",
      "instructions": "Her ifadenin genel olarak sizi ne kadar doğru tanımladığını belirtin. Doğru veya yanlış yanıt yoktur. Lütfen dürüstçe cevaplayın.",
      "sharedOptions": ["Hiç doğru değil","Doğru değil","Ne doğru ne yanlış","Doğru","Çok doğru"],
      "questions": [
        { "title": "Bir şeyler hakkında endişelenirim." },
        { "title": "Çoğu zaman rahatımdır." },
        { "title": "Her durumda en kötüsünden korkarım." },
        { "title": "Nadiren kaygılı hissederim." },
        { "title": "Kolayca gerilirim / heyecanlanırım." },
        { "title": "Olup bitmiş şeyler için endişelenmem." },
        { "title": "Nelerin ters gidebileceği konusunda endişelenirim." },
        { "title": "Belirsizlik karşısında sakinliğimi korurum." },
        { "title": "Sık sık kaygılı hissederim." },
        { "title": "Kolay kolay korkmam." },
        { "title": "Kolayca sinirlenirim." },
        { "title": "Nadiren öfkelenirim." },
        { "title": "İşler istediğim gibi gitmediğinde sinirlenirim." },
        { "title": "Beni kışkırtmak zordur." },
        { "title": "Çabuk hayal kırıklığına uğrarım/yılarım." },
        { "title": "Zor durumlarda soğukkanlılığımı korurum." },
        { "title": "Pek çok şey beni rahatsız eder." },
        { "title": "Kolayca öfkelenmem." },
        { "title": "Kışkırtıldığımda patlarım." },
        { "title": "Sinirimi iyi kontrol ederim." },
        { "title": "Sıklıkla üzgün hissederim." },
        { "title": "Kendimle barışığım." },
        { "title": "Sıklıkla cesaretim / hevesim kırılır." },
        { "title": "Nadiren kederli hissederim." },
        { "title": "Hayatımdan memnun değilimdir." },
        { "title": "Genel olarak memnun hissederim." },
        { "title": "Bazen içimde bir boşluk hissederim." },
        { "title": "Olumsuz düşüncelerin kontrolü ele geçirmesine izin vermem." },
        { "title": "Olayların karanlık tarafını görme eğilimindeyimdir." },
        { "title": "Hayatın tadını çıkarırım." },
        { "title": "Kolayca utanırım." },
        { "title": "Sosyal durumlarda rahat hissederim." },
        { "title": "Başkalarının benim hakkımda ne düşündüğü konusunda endişelenirim." },
        { "title": "İlgi odağı olmayı umursamam." },
        { "title": "İnsanlar beni izlerken rahatsız hissederim." },
        { "title": "Çok nadiren çekingenlik/utangaçlık hissederim." },
        { "title": "Topluluk önünde konuşmakta zorlanırım." },
        { "title": "Kendimi aptal durumuna düşürme konusunda endişelenmem." },
        { "title": "Kolayca yüzüm kızarır." },
        { "title": "Yabancıların yanında doğal davranırım." },
        { "title": "Cezbedici şeylere karşı koymakta (ör. nefse hakim olmakta) zorlanırım." },
        { "title": "Dürtülerimi iyi kontrol ederim." },
        { "title": "Stresli olduğumda çok fazla yer ya da içerim." },
        { "title": "Ne zaman durmam gerektiğini bilirim." },
        { "title": "Paramı ihtiyacım olmayan şeylere harcarım." },
        { "title": "Baştan çıkarıcı şeylere (cazibeye) iyi direnirim." },
        { "title": "Aşermelerime / İsteklerime boyun eğerim." },
        { "title": "Alışkanlıklarımı kontrol altında tutarım." },
        { "title": "Sonradan pişman olacağım şeyler yaparım." },
        { "title": "Aşırılıklara kolayca düşmem." },
        { "title": "Baskı altındayken dağılırım (çökerim)." },
        { "title": "Stresli durumlarla iyi başa çıkarım." },
        { "title": "Zorluklar karşısında bunalmış hissederim." },
        { "title": "Sorunların beni alt etmesine izin vermem." },
        { "title": "Çok baskı altındayken donakalırım." },
        { "title": "Stres altında bile iyi işlev görürüm." },
        { "title": "Aksiliklerin/Başarısızlıkların ardından toparlanmakta zorlanırım." },
        { "title": "Zorluklar karşısında dirençliyimdir." },
        { "title": "Aşırı baskı altındayken kontrolümü kaybederim." },
        { "title": "Sorunlarla soğukkanlılıkla yüzleşirim." },
        { "title": "Kolayca arkadaş edinirim." },
        { "title": "Başkalarına yaklaşmakta zorlanırım." },
        { "title": "İnsanların yanında rahat hissederim." },
        { "title": "Yabancılara karşı mesafeliyimdir." },
        { "title": "İnsanlarla çabucak bağ kurarım." },
        { "title": "Diğer insanlarla arama mesafe koyarım." },
        { "title": "Herkese karşı sıcak davranırım." },
        { "title": "Yeni insanlara güvenmekte zorlanırım." },
        { "title": "İnsanların kendilerini hoş karşılanmış hissetmesini sağlarım." },
        { "title": "Çok sıcakkanlı bir insan değilimdir." },
        { "title": "İnsanların etrafında olmaktan keyif alırım." },
        { "title": "Yalnız olmayı tercih ederim." },
        { "title": "Partilere ve toplantılara gitmekten hoşlanırım." },
        { "title": "Kalabalıklardan kaçınırım." },
        { "title": "Başkalarının şirketini (birlikteliğini) ararım." },
        { "title": "Yalnızlıktan keyif alırım." },
        { "title": "Büyük gruplar içinde rahat hissederim." },
        { "title": "Tek başına yapılan aktiviteleri tercih ederim." },
        { "title": "Sosyalleşmeyi çok severim." },
        { "title": "Sosyal toplantılar benden enerjimi alır." },
        { "title": "Durumlarda kontrolü (idaresi) ele alırım." },
        { "title": "Arka planda kalırım." },
        { "title": "Ne düşünüyorsam tereddüt etmeden söylerim." },
        { "title": "Fikirlerimi ifade etmekte zorlanırım." },
        { "title": "Liderlik rolünü doğal bir şekilde üstlenirim." },
        { "title": "Kararları başkalarının vermesine izin veririm." },
        { "title": "Fikirlerimi sıkıca savunurum." },
        { "title": "Hayır demekte zorluk çekerim." },
        { "title": "Konuşmalarda inisiyatifi ele alırım." },
        { "title": "Kendi bakış açımı dayatmaktan kaçınırım." },
        { "title": "Her zaman meşgulümdür." },
        { "title": "İşleri ağırdan alırım." },
        { "title": "Hayatı hızlı bir tempoda yaşarım." },
        { "title": "Acele etmemeyi tercih ederim." },
        { "title": "Gün boyunca pek çok şey yaparım." },
        { "title": "Rahat bir yaşam hızını tercih ederim." },
        { "title": "Bir etkinlikten diğerine hızla geçerim." },
        { "title": "Acele etmekten hoşlanmam." },
        { "title": "Çok aktif bir insanımdır." },
        { "title": "Rahatlamayı ve hiçbir şey yapmamayı severim." },
        { "title": "Macera ve heyecan ararım." },
        { "title": "Öngörülebilir ve güvenli olanı tercih ederim." },
        { "title": "Heyecan verici deneyimleri severim." },
        { "title": "Riskli durumlardan kaçınırım." },
        { "title": "Yeni ve riskli şeyler denemeyi severim." },
        { "title": "Rutini, sürprizlere tercih ederim." },
        { "title": "Hızdan ve adrenalinden keyif alırım." },
        { "title": "Tehlikeli aktivitelerden hoşlanmam." },
        { "title": "Eğer heyecan yoksa sıkılırım." },
        { "title": "Sakin bir hayattan memnunum." },
        { "title": "Neşeli bir insanımdır." },
        { "title": "Nadiren iyi bir ruh halindeyimdir." },
        { "title": "Etrafıma İyimserlik saçarım." },
        { "title": "Pek neşeli biri değilimdir." },
        { "title": "Kolayca gülerim." },
        { "title": "Coşku hissetmekte zorlanırım." },
        { "title": "Olayların olumlu tarafını görürüm." },
        { "title": "Kolay heyecanlanmam / mutlu olmam." },
        { "title": "Neşemi başkalarına bulaştırırım." },
        { "title": "Çoğu insandan daha ciddiyimdir." },
        { "title": "Sürekli çalışan aktif bir hayal gücüm var." },
        { "title": "Nadiren fantezi kurarım." },
        { "title": "Gündüz düşleri (hayal) kurmayı severim." },
        { "title": "Çok pratiğimdir ve fantezilerde kaybolmam." },
        { "title": "Zihnimde hayali dünyalar yaratırım." },
        { "title": "Hayal gücüyle vakit kaybetmem." },
        { "title": "Fikirler dünyası beni cezbeder." },
        { "title": "Gerçekleri, fantezilere tercih ederim." },
        { "title": "Zihnim yaratıcı fikirlerle doludur." },
        { "title": "Çok fazla hayal gücüne sahip değilim." },
        { "title": "Sanatı ve güzelliği takdir ederim." },
        { "title": "Sanatsal ifadelerle ilgilenmem." },
        { "title": "Müzikten etkilenirim / duygulanırım." },
        { "title": "Soyut sanatın amacını anlamam." },
        { "title": "Müzeleri ve galerileri gezmekten keyif alırım." },
        { "title": "Sanat bana sıkıcı gelir." },
        { "title": "Doğayı seyretmeyi severim." },
        { "title": "Estetik detaylara dikkat etmem." },
        { "title": "Sanatsal ifadenin her formuna değer veririm." },
        { "title": "İşlevi, güzelliğe tercih ederim." },
        { "title": "Duyguları çok yoğun hissederim." },
        { "title": "Nadiren derinden duygulanırım." },
        { "title": "Filmler ve kitaplar beni derinden etkiler." },
        { "title": "Pek duygusal biri değilimdir." },
        { "title": "Güzel bir şarkıda ağlayabilirim." },
        { "title": "Duyguların beni alıp götürmesine izin vermem." },
        { "title": "Başkalarına karşı derin bir empati hissederim." },
        { "title": "Duygularımı mantıkla kontrol ederim." },
        { "title": "Duygularım çeşitli ve yoğundur." },
        { "title": "Duygusal açıdan çekingen/mesafeli bir insanımdır." },
        { "title": "Yeni yerler keşfetmeyi severim." },
        { "title": "Alışılmışı, bilinmeyene tercih ederim." },
        { "title": "Farklı kültürlerin yemeklerini denemekten hoşlanırım." },
        { "title": "Rutinlerimle daha rahat hissederim." },
        { "title": "Egzotik yerlere seyahat etmeye çekilim duyarım." },
        { "title": "Konfor alanımdan çıkmaktan hoşlanmam." },
        { "title": "Sürekli olarak yeni deneyimler ararım." },
        { "title": "İşleri bildik şekilde yapmayı tercih ederim." },
        { "title": "Yeni durumlara iyi uyum sağlarım." },
        { "title": "Değişiklikler beni rahatsız eder." },
        { "title": "Karmaşık sorunları çözmekten keyif alırım." },
        { "title": "Felsefi tartışmalardan kaçınırım." },
        { "title": "Soyut fikirler üzerinde düşünmeyi severim." },
        { "title": "Entelektüel tartışmalarla ilgilenmem." },
        { "title": "Türü fark etmeden çeşitli konularda çok okurum." },
        { "title": "Pratik faaliyetleri teorik olanlara tercih ederim." },
        { "title": "Yeni şeyler öğrenmek beni cezbeder." },
        { "title": "Felsefeyle ilgilenmem." },
        { "title": "Her şeyin nasıl çalıştığını merak ederim." },
        { "title": "Bulmacalardan veya zeka oyunlarından hoşlanmam." },
        { "title": "Yasaların zamana (çağa) uyum sağlaması gerektiğine inanırım." },
        { "title": "Yerleşik geleneklere saygı duyarım." },
        { "title": "Sosyal konuların yeniden düşünülmesine (modernleşmeye) açığım." },
        { "title": "Toplumun katı kurallarla daha iyi işlediğine inanırım." },
        { "title": "Yerleşik/Kabul görmüş normları (kuralları) sorgularım." },
        { "title": "Sosyal kurallara/geleneklere uymayı tercih ederim." },
        { "title": "İlerici sosyal değişimleri desteklerim." },
        { "title": "Gelenekleri korumanın önemli olduğunu düşünürüm." },
        { "title": "Yerleşik düzene meydan okunması gerektiğine (sorgulanması gerektiğine) inanıyorum." },
        { "title": "Gelenekler topluma istikrar kazandırır." },
        { "title": "Başkalarına güvenirim." },
        { "title": "İnsanların niyetlerine karşı güvensizlik duyarım." },
        { "title": "Çoğu insanın dürüst olduğuna inanırım." },
        { "title": "Başkalarının gizli niyetleri olduğundan şüphelenirim." },
        { "title": "İnsanlara iyi niyetleri konusunda tolerans tanırım (aksi kanıtlanana kadar inanırım)." },
        { "title": "İnsanların benden faydalanmaya çalıştıklarına inanırım." },
        { "title": "İnsanların içindeki iyiliğe inanırım." },
        { "title": "Birine güvenmekte zorlanırım." },
        { "title": "İnsanların iyi niyetli olduğunu varsayarım." },
        { "title": "Yabancıların iyiliklerine şüpheyle yaklaşırım." },
        { "title": "Her zaman dürüstümdür." },
        { "title": "Bazen istediğimi elde etmek için başkalarını manipüle ederim." },
        { "title": "Bir avantaj elde etmek için yalan söylemem." },
        { "title": "İnsanlara istediğimi yaptırmak için kurnazlık/hile kullanırım." },
        { "title": "Başkalarına adil davranırım." },
        { "title": "Bazen olmadığım biri gibi davranırım." },
        { "title": "Rahatsız edici olsa bile doğruyu söylerim." },
        { "title": "Her zaman tamamen dürüst değilimdir." },
        { "title": "İlkelerime göre hareket ederim." },
        { "title": "İşime geldiğinde yağcılığa (dalkavukluğa) başvururum." },
        { "title": "Başkalarına yardım etmeyi severim." },
        { "title": "Başka insanların problemlerine dahil olmam." },
        { "title": "Birisi için bir şey yaptığımda tatmin hissederim." },
        { "title": "Öncelikle kendi çıkarlarımı kollarım." },
        { "title": "Başkalarının refahını / iyiliğini önemsiyorum." },
        { "title": "Benden iyilik istenmesinden hoşlanmam." },
        { "title": "İhtiyacı olanlara karşılık beklemeden yardım ederim." },
        { "title": "Başkalarına yardım etme zorunluluğu hissetmem." },
        { "title": "Vaktimi cömertçe başkalarına (yardımcı olmaya vb.) ayırırım." },
        { "title": "Başkalarının işine karışmamayı tercih ederim." },
        { "title": "Çatışmalardan kaçınırım." },
        { "title": "İnsanlarla tartışmaktan çekinmem." },
        { "title": "Tartışmalarda anlaşmaya çalışırım." },
        { "title": "Gerginleştirici de olsa sağlam bir tartışmadan (fikir alışverişinden) keyif alırım." },
        { "title": "Huzuru korumak için taviz veririm." },
        { "title": "Çatışmaya neden olsa bile kendi bakış açımda ısrar ederim." },
        { "title": "Uyumu haklı olmaya tercih ederim." },
        { "title": "Başkalarının fikrine karşı çıkmaktan çekinmem." },
        { "title": "Herkesi tatmin eden çözümler bulmaya çalışırım." },
        { "title": "Tartışmalarda oldukça inatçı olabilirim." },
        { "title": "Gösteriş yapmayı sevmem." },
        { "title": "Çoğu insandan daha iyi olduğuma inanırım." },
        { "title": "Alçakgönüllü (mütevazı) biriyimdir." },
        { "title": "İlgi odağı olmayı severim." },
        { "title": "Kendimi özel (ayrıcalıklı) görmem." },
        { "title": "Gördüğümden daha fazla takdiri hak ettiğime inanıyorum." },
        { "title": "Başarılarımı abartmam / küçümserim." },
        { "title": "Başarılarım hakkında konuşmaktan hoşlanırım." },
        { "title": "Hayranlık (takdir) aramam." },
        { "title": "Çoğu insandan daha değerli olduğumu bilirim." },
        { "title": "Acı çeken insanlardan etkilenirim (onlara üzülürüm)." },
        { "title": "Başkalarının problemleri beni pek etkilemez." },
        { "title": "Daha az şanslı olanlara şefkat duyarım." },
        { "title": "Herkesin kendi sorunlarını kendi çözmesi gerektiğine inanırım." },
        { "title": "Dezavantajlı durumda olanları önemserim." },
        { "title": "Üzücü hikayelerden kolayca etkilenmem (acıma hissi oluşmaz)." },
        { "title": "Toplumun savunmasız kişileri koruması gerektiğine inanırım." },
        { "title": "İnsanlar problemlerini abartıyorlar." },
        { "title": "Hayvanların acı çektiğini görmek canımı acıtıyor." },
        { "title": "Toplumsal konular hakkında (kaderlerine yönelik) pek duygusal değilimdir." },
        { "title": "Her durumun üstesinden gelebileceğimi biliyorum." },
        { "title": "Yeteneklerimden şüphe ederim." },
        { "title": "Görevleri başarıyla tamamlarım." },
        { "title": "Zorluklar karşısında kendimi hazır hissetmiyorum." },
        { "title": "Sorunları çözme becerime güvenirim." },
        { "title": "Zor işlerle yüzleşirken güvensiz hissederim." },
        { "title": "İşleri nasıl iyi yapacağımı biliyorum." },
        { "title": "Bazen kendimi yetersiz hissederim." },
        { "title": "Zorlukları beceriyle ele alırım / idare ederim." },
        { "title": "Beklentileri karşılayamamaktan korkarım." },
        { "title": "Eşyalarımı düzenli tutarım." },
        { "title": "Her şeyi dağınık bırakırım." },
        { "title": "Her şeyin kendi yerinde olmasını severim." },
        { "title": "Dağınıklığı umursamam." },
        { "title": "Düzenli bir rutini (gündelik yapıyı) takip ederim." },
        { "title": "Oldukça dağınık biriyimdir." },
        { "title": "Sık sık temizlik yapar ve etrafı toplarım." },
        { "title": "Eşyaları düze tutma/yerli yerine koyma konusunda endişelenmem." },
        { "title": "Etrafımdaki karmaşa/düzensizlik beni rahatsız eder." },
        { "title": "Çalışma alanım genellikle dağınıktır." },
        { "title": "Yükümlülüklerimi yerine getiririm." },
        { "title": "Bazen kurallara uymam." },
        { "title": "Verdiğim sözleri tutarım." },
        { "title": "Benden bekleneni her zaman yapmam." },
        { "title": "Sorumluluklarımı ciddiye alırım." },
        { "title": "Bazen taahhütlerimi (sözlerimi) yerine getirmekte başarısız olurum." },
        { "title": "Yapacağımı söylediğim şeyi yaparım." },
        { "title": "Kurallar konusunda çok fazla endişelenmem." },
        { "title": "Sözünün eri biriyimdir." },
        { "title": "Görevlerimi bazen ihmal ederim." },
        { "title": "Hedeflerime ulaşmak için çok çalışırım." },
        { "title": "Asgari olanla yetinirim." },
        { "title": "Mükemmellik için çabalarım." },
        { "title": "Başarıyı çok fazla önemsemem." },
        { "title": "Sürekli olarak kendimi geliştirmeye çalışırım." },
        { "title": "Pek hırslı biri değilimdir." },
        { "title": "Açık hedeflerim vardır ve onlara ulaşmak için çalışırım." },
        { "title": "Sadece geçene / işimi görene yetecek kadarını yaparım." },
        { "title": "Büyük şeyler başarma isteği beni motive eder." },
        { "title": "Gereğinden fazla çaba sarf etmem." },
        { "title": "Başladığım işi bitiririm." },
        { "title": "Odaklanmayı sürdürmekte zorlanırım." },
        { "title": "Görev bitene kadar pes etmem." },
        { "title": "Sık sık işleri ertelerim." },
        { "title": "Hemen işe koyulurum." },
        { "title": "Dikkatim kolay dağılır." },
        { "title": "İşleri yarım bırakmam." },
        { "title": "Önemsiz şeylerle vakit kaybederim." },
        { "title": "Hedeflerime odaklanmaya devam ederim." },
        { "title": "Zor görevlere başlamakta güçlük çekerim." },
        { "title": "Harekete geçmeden önce düşünürüm." },
        { "title": "Sonuçlarını düşünmeden hareket ederim." },
        { "title": "Karar vermeden önce tüm seçenekleri değerlendiririm." },
        { "title": "Kararları fevri bir şekilde (aniden) veririm." },
        { "title": "Riskleri dikkatlice değerlendiririm." },
        { "title": "Planlamadan işlere balıklama atlarım." },
        { "title": "Harekete geçmeden önce plan yaparım." },
        { "title": "Çok fazla düşünmeden bir şeyler yaparım." },
        { "title": "Olası sonuçlar hakkında düşünürüm." },
        { "title": "Sonuçları dikkate almadan bir şeyler söylerim." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "DSM-5 Kişilik Boyutları Envanteri",
      "desc": "DSM-5 boyutsal modeline göre patolojik kişilik özelliklerinin kapsamlı bir değerlendirmesi. 5 alanı (boyutu) ölçer.",
      "instructions": "Her ifadeyi okuyun ve şu anda nasıl hissettiğinizi düşünerek değil, sizi genel olarak ne kadar iyi tanımladığını belirterek cevaplayın.",
      "sharedOptions": ["Çok yanlış veya genellikle yanlış","Bazen veya biraz yanlış","Bazen veya biraz doğru","Çok doğru veya genellikle doğru"],
      "questions": [
        { "title": "Duygularım görünürde hiçbir neden yokken değişir." },
        { "title": "Ruh halim bir andan diğerine gözle görülür (dramatik) şekilde değişir." },
        { "title": "Net bir neden olmadan, mutlu hissetmekten üzgün hissetmeye hızla geçerim." },
        { "title": "Bana yakın olan kişiler (bağlı olduklarım) çok duygusal olduğumu söylerler." },
        { "title": "Duygusal tepkilerimi kontrol etmeyi zor bulurum." },
        { "title": "Başkalarının sorunsuz hallettiği durumlarda (kolayca) çok üzülürüm." },
        { "title": "Duygularım, benim için bile öngörülemezdir / ne olacağı belirsizdir." },
        { "title": "Hemen hemen her şey için endişelenirim." },
        { "title": "Sürekli kötü bir şeylerin olmasını beklerim." },
        { "title": "Çok kolay gerginleşirim." },
        { "title": "Olaylar hakkında endişelenmeyi bırakmayı çok zor bulurum." },
        { "title": "Açıklayamadığım sürekli bir anksiyete (kaygı) hissediyorum." },
        { "title": "Muhtemelen yaşanmayacak şeyler için aşırı derecede endişe duyarım." },
        { "title": "Endişeli (kaygılı) düşünceler sık sık zihnimi işgal eder." },
        { "title": "Neredeyse her durumda işlerin ters gideceğinden korkarım." },
        { "title": "Zamanın çoğunda kendimi gergin ve sinirli hissederim." },
        { "title": "Yalnız kalma düşüncesi beni dehşete düşürüyor." },
        { "title": "Hayatımdaki önemli insanların beni terk etmesinden çok korkuyorum." },
        { "title": "Sürekli sevdiğim insanların (fiziksel ve duygusal) yakınlığına ihtiyaç duyarım." },
        { "title": "Değer verdiğim birine yakın olmadığımda kendimi korumasız (savunmasız) hissediyorum." },
        { "title": "Bağlı olduğum kişilerden ayrılmak beni çok rahatsız ediyor (endişelendiriyor)." },
        { "title": "İnsanların benden uzaklaşmasını önlemek için elimden gelen her şeyi yaparım." },
        { "title": "Benim için önemli olan birinden uzakta olduğumda işlev görmekte zorlanıyorum." },
        { "title": "Başkalarınınkine uyması için fikirlerimi değiştiririm." },
        { "title": "İstesem bile hayır demeyi çok zor bulurum." },
        { "title": "Çatışmadan kaçınmak için kararları benim yerime başkalarının vermesine izin veririm." },
        { "title": "Direnmek (kendi duruşumu korumak) yerine başkalarına boyun eğmeyi tercih ederim." },
        { "title": "Küçük şeyler yüzünden kolayca sinirlenirim / rahatsız olurum." },
        { "title": "Sık sık tam olarak nedenini bilmeden öfkelenirim (kızgınlık duyarım)." },
        { "title": "İnsanlar bana çabuk sinirlenen / öfkeli biri olduğumu söylüyor." },
        { "title": "İnsanlara karşı olması gerekenden çok daha kolay sabrımı kaybediyorum." },
        { "title": "İnsanların işleri benim istediğim gibi yapmaması beni rahatsız eder." },
        { "title": "Beni kıran / bana zarar veren insanlara karşı kin beslerim." },
        { "title": "En ufak bir provokasyona (tahrike) karşı öfkeyle tepki verme eğilimindeyim." },
        { "title": "İşler istediğim gibi gitmediğinde çileden çıkarım / öfkelenirim." },
        { "title": "Kontrol etmesi zor bir şekilde sürekli bir rahatsızlık (duyarlılık/asabiyet) hissediyorum." },
        { "title": "Biri beni gücendirdiğinde (offend) bunu unutmayı çok zor bulurum." },
        { "title": "Tekrar tekrar aynı düşüncelere hapsolurum." },
        { "title": "Problemlerimi düşünmeyi bırakmayı çok zor bulurum." },
        { "title": "Durduramaksızın aynı durumları zihnimde defalarca yeniden canlandırırım." },
        { "title": "Geçmişte yaptığım hatalara takıntılıyımdır." },
        { "title": "Bir şey beni rahatsız ettiğinde günlerce onu düşünmekten kendimi alamam." },
        { "title": "Düşüncelerim bozuk bir plak gibi tekrarlanıyor." },
        { "title": "Bırakmam gerektiğini bilsem de bir meseleden vazgeçmeyi (unutmayı) zor bulurum." },
        { "title": "Hiçbir amaca hizmet etmediği halde aynı şeyleri düşünmeye devam ederim." },
        { "title": "İnsanlar her şeyi fazla düşündüğümü söylüyor." },
        { "title": "Duygularımı başkalarına nadiren gösteririm." },
        { "title": "İnsanlar bana soğuk veya duygusal açıdan mesafeli göründüğümü söylerler." },
        { "title": "Ben genellikle pozitif veya negatif dahil çok güçlü duygular hissetmem." },
        { "title": "Bana yakın olan kişilerle bile ne hissettiğimi ifade etmekte zorlanırım." },
        { "title": "Başkalarını heyecanlandıran durumlar bana umursamazlık(ilgisizlik) hissi verir." },
        { "title": "Hüzünlü hikayelerden veya duygusal filmlerden etkilenmem." },
        { "title": "Duygularımı göstermemeyi tercih ederim çünkü bunu bir zayıflık olarak görüyorum." },
        { "title": "Zamanın çoğunda yalnız olmayı tercih ederim." },
        { "title": "Elimden geldiğince sosyal ortamlardan kaçınırım." },
        { "title": "Yeni arkadaşlar edinmeye hiç ilgim yok." },
        { "title": "Başkalarıyla etkileşim kurmak zorunda kaldığımda rahatsız hissediyorum." },
        { "title": "Bir grupta olmak yerine işleri tek başıma yapmayı tercih ederim." },
        { "title": "İnsanlardan kasten uzaklaşırım, kendimi soyutlarım." },
        { "title": "Başkalarıyla sohbet etmek beni tüketir / yorar." },
        { "title": "Kimseyle uğraşmak (iletişimde bulunmak) zorunda kalmadığımda daha iyi hissediyorum." },
        { "title": "Sosyalleşmek zorunda kaldığım durumlardan kaçınırım." },
        { "title": "Uzun süre sosyal temas (iletişim) olmadan dışarı çıkmayı dert etmem." },
        { "title": "Hayatta çok az şey bana gerçek bir zevk verir." },
        { "title": "Eskiden hoşlandığım etkinliklere karşı ilgimi kaybettim." },
        { "title": "Beni gerçekten motive eden bir şey bulmakta zorlanıyorum." },
        { "title": "Hayatım zamanın çoğunda boş ve anlamsız geliyor." },
        { "title": "Mutlu olunması gereken durumlarda bile neşe hissetmiyorum." },
        { "title": "Neredeyse her zaman duygusal bir boşluk hissediyorum." },
        { "title": "Hiçbir şey beni gerçekten heyecanlandırmıyor." },
        { "title": "Olumlu duygularımın kaybolup gittiğini (solduğunu) hissediyorum." },
        { "title": "Bir insan olarak değersiz olduğumu hissediyorum." },
        { "title": "Dünya bensiz daha iyi bir yer olurdu diye inanıyorum." },
        { "title": "Gelecek hakkında umutsuz hissediyorum." },
        { "title": "Yaptığım her şey için sürekli kendimi eleştiriyorum." },
        { "title": "Gitmeyen (bitmek bilmeyen) derin bir üzüntü hissediyorum." },
        { "title": "Denediğim hemen hemen her şeyde kendimi başarısız olarak görüyorum." },
        { "title": "Benim için işlerin hiçbir zaman daha iyiye gitmeyeceğine inanıyorum." },
        { "title": "Gerçekten benim hatam olmayan şeylerden dolayı bile suçlu hissediyorum." },
        { "title": "Kendime dair çok olumsuz bir görüşüm var." },
        { "title": "Sıklıkla mutlu olmayı hak etmediğimi düşünüyorum." },
        { "title": "Kendimi işe yaramaz ve doğru düzgün hiçbir şey yapamaz hissediyorum." },
        { "title": "Sık sık ağlıyorum veya ağlayacakmış gibi hissediyorum." },
        { "title": "İnsanların etrafındayken bile kendimi tamamen yalnız hissediyorum." },
        { "title": "Hayatımın hiçbir amacı veya yönü yokmuş gibi hissediyorum." },
        { "title": "Romantik ilişkilerden kaçınıyorum çünkü kendimi savunmasız hissetmeme neden oluyor." },
        { "title": "Kimseyle yakın ilişki yaşamaya (yakınlaşmaya) ilgim yok." },
        { "title": "Başka bir kişiyle duygusal yakınlık kurmak beni çok rahatsız ediyor." },
        { "title": "İnsanlarla duygusal mesafe (uzaklık) koymayı tercih ederim." },
        { "title": "Yakın (özel) ilişkiler boğucu hissettiriyor." },
        { "title": "Hayatımda kimseye yakın olmaya ihtiyacım yok." },
        { "title": "Çoğu insanın niyetinden şüphe ederim / onlara güvenmem." },
        { "title": "Çoğu zaman insanların gizli niyetleri/amaçları olduğuna inanırım." },
        { "title": "İnsanların arkamdan kötü konuştuğundan şüpheleniyorum." },
        { "title": "Herhangi birinin bir karşılık beklemeden bana yardım etmek isteyeceğine inanmakta güçlük çekerim." },
        { "title": "Sürekli tetikteyim çünkü birinin benden faydalanmaya (istismar etmeye) çalışabileceğine inanıyorum." },
        { "title": "Aldığım iltifatların samimiyetinden şüphe ediyorum." },
        { "title": "Kimseye tam anlamıyla güvenemeyeceğimi hissediyorum." },
        { "title": "İstediğimi elde etmek için insanları manipüle etmede iyiyim." },
        { "title": "İnsanlara istediğimi yaptırmak için yağcılık kullanırım." },
        { "title": "Hedeflerime ulaşmak için başkalarını kullanmaktan çekinmem." },
        { "title": "Başkalarının kararlarını etkilemek için tam olarak ne söylemem gerektiğini bilirim." },
        { "title": "İnsanları gizlice/üstü kapalı kontrol etmekten (yönlendirmekten) zevk alırım." },
        { "title": "Eğer benim yararıma olacaksa sık sık yalan söylerim." },
        { "title": "İnsanları aldatmayı zor bulmuyorum." },
        { "title": "İstediğimi yaptırmak için hikayeler uydururum." },
        { "title": "Bazen başkalarını etkilemek için olmadığım biri gibi davranırım." },
        { "title": "İyi bir izlenim bırakmak için başarılarımı abartırım." },
        { "title": "Bana faydalı olacaksa önemli bilgileri saklarım (söylemem)." },
        { "title": "Yalan söylerken bile inandırıcı bir şekilde rol yapabilirim." },
        { "title": "Dürüst olmamak bana yardımcı oluyorsa beni rahatsız etmez." },
        { "title": "İstediğim bir şeyi elde etmek için başkalarına hile yaptım (kandırdım)." },
        { "title": "İnsanlara doğru olmasa bile duymak istediklerini söylerim." },
        { "title": "Özel bir muameleyi hak ediyorum çünkü çoğu insandan daha iyiyim." },
        { "title": "Olağanüstü bir insan olduğuma ve başkalarının bunu kabul etmesi gerektiğine inanıyorum." },
        { "title": "İnsanlar benim gerçekten ne kadar değerli olduğumu takdir etmiyorlar." },
        { "title": "Başkalarının ne kadar özel olduğumu neden göremediğini anlamakta zorlanıyorum." },
        { "title": "Başkaları için geçerli olan kuralların üzerinde olduğumu düşünüyorum (ben onlara tabi değilim)." },
        { "title": "Kendimi başkalarıyla karşılaştırırım ve neredeyse her zaman kendimi onlardan üstün görürüm." },
        { "title": "Sosyal ortamlarda hep ilginin odak noktası olmaya ihtiyaç duyarım." },
        { "title": "İnsanların beni fark etmesi için gösterişli / iddialı şeyler yaparım." },
        { "title": "İlgiler (dikkatler) benim üzerimde odaklanmadığında rahatsız olurum." },
        { "title": "Sürekli olarak başkalarının onayını ve hayranlığını ararım." },
        { "title": "İnsanları etkilemek için çok fazla çabalarım." },
        { "title": "Başkalarının benim hakkımda konuşması için abartılı hareketler (hareketli jestler) yapmayı severim." },
        { "title": "Başkalarından bir tepki almak için duygularımı abartırım." },
        { "title": "Başkalarının ilgisini üzerimde toplamadığımda kendimi boşlukta hissederim." },
        { "title": "Yaptıklarımın başkalarına zarar vermesi umurumda değildir." },
        { "title": "İnsanlar beni başkalarının çektiği acılara duyarsız biri olarak tanımlıyorlar." },
        { "title": "Birisine zarar verecek bir şey yaptığımda pişmanlık duymuyorum." },
        { "title": "Başkalarının gözyaşları beni etkilemez." },
        { "title": "İnsanların neden bu kadar kolayca incindiklerini anlamakta / kırıldıklarını anlamakta güçlük çekiyorum." },
        { "title": "Eğer doğrudan beni etkilemiyorsa başkalarının duygularını önemsemem." },
        { "title": "Durum gerektiriyorsa / eğer gerekirse acımasız olabilirim." },
        { "title": "Acı çeken birini teselli etmekle ilgilenmiyorum." },
        { "title": "Bugünlerde insanların fazlasıyla hassas olduklarını düşünüyorum." },
        { "title": "Birisine kötü davrandım diye uykularım kaçmaz." },
        { "title": "Bana sert ve affetmeyen biri olduğum söylendi." },
        { "title": "Empati yapmayı (başkasının yerine kendini koymayı) bir zayıflık olarak görüyorum." },
        { "title": "Başkalarının hatalarının sonuçlarına katlandığını görmek (veya onlara bedel ödetmek) beni etkilemez." },
        { "title": "Başkalarını nasıl etkilediğine bakılmaksızın her zaman kendi ihtiyaçlarımı ilk sıraya koyarım." },
        { "title": "Taahhütlerimi ve yükümlülüklerimi / söz verdiğim şeyleri sıklıkla yerine getirmem." },
        { "title": "Finansal sorumluluklarım konusunda dikkatsizimdir." },
        { "title": "Yapacağımı söylediğim şeyi yapmam konusunda kimse bana güvenemez." },
        { "title": "Önemli görevleri çoğunlukla yarım (bitmemiş) bırakırım." },
        { "title": "Bitiş tarihleri / süre kısıtlamaları (deadlines) umurumda değildir, endişelenmem." },
        { "title": "Genellikle kendi sorumluluklarımla başkalarının ilgilenmesine izin verme (kaytarma) eğilimindeyim." },
        { "title": "Bir işi (işyerinde çalışmayı) sürdürmeyi veya uzun vadeli bir plana bağlı kalmayı zor buluyorum." },
        { "title": "Sonuçlarını düşünmeden hareket ederim." },
        { "title": "Daha sonra pişman olduğum şeyleri anlık dürtüyle (düşünmeden) yaparım." },
        { "title": "Dürtülerime direnmeyi (karşı koymayı) çok zor buluyorum." },
        { "title": "Tüm seçenekleri düşünmeden (tüm sonuçları değerlendirmeden) acele kararlar veririm." },
        { "title": "Düşünmeden konuşur, sonra söylediğim için pişman olurum." },
        { "title": "Bir şeyleri beklemeye tahammül edemem; anında tatmine ihtiyaç duyarım." },
        { "title": "Dikkatim çok kolay dağılır." },
        { "title": "Bir iş üzerinde (görev) birkaç dakikadan fazla konsantre olmayı (odaklanmayı) oldukça zor buluyorum." },
        { "title": "Sürekli dikkatimi / düşünce zincirini/akışımı kaybederim." },
        { "title": "Birçok şeye başlarım ama (dikkatim kolay dağıldığı için) bitirmekte zorlanırım." },
        { "title": "Herhangi bir gürültü veya dış uyaran (dikkatimi) kolaylıkla dağıtır." },
        { "title": "Uzun soluklu bir konuşmayı odaklanmamı kaybetmeden sürdürmeyi zor bulurum." },
        { "title": "Bir şeye odaklanmam gerektiğinde zihnim genelde dolaşır / savrulur." },
        { "title": "Ne yapmakta olduğumu sık sık unuturum." },
        { "title": "Talimatların tekrarlanmasına ihtiyaç duyarım çünkü onları hafızamda tutamam." },
        { "title": "Tehlikeli şeyler yapmaktan zevk alırım." },
        { "title": "Risk barındırsa bile anlık/yoğun heyecanları / duyguları (thill) ararım." },
        { "title": "Kendimi riskli durumlara sokmak umurumda olmaz (bunlardan rahatsız olmam)." },
        { "title": "Ortada tehlike/adrenalin yoksa çabucak sıkılırım." },
        { "title": "Bana zarar verebilecek pervasızca/çılgınca şeyler yaptım." },
        { "title": "Tehlikeli aktiviteler yapmak bana heyecan verir." },
        { "title": "İzin verilenden daha hızlı araba kullanırım çünkü sürat yapmaktan hoşlanırım." },
        { "title": "Sonuçlarını umursamadan / endişe duymadan maddeler kullandım." },
        { "title": "Uyarı işaretlerini göz ardı eder ve ne yapıyorsam ona devam ederim." },
        { "title": "Çoğu insanın çok riskli olarak göreceği meydan okumaları kabul ederim." },
        { "title": "Kendimi canlı hissetmek için yoğun heyecanlara / deneyimlere ihtiyacım var." },
        { "title": "Rutin işlerden sıkılır, öngörülemez (ve çılgın) şeyler ararım." },
        { "title": "Harekete geçmeden önce tehlikelerini dikkate almam." },
        { "title": "Yasak olan bir şeyi yapma fikri benim için caziptir." },
        { "title": "Her şey kusursuz olmalıdır yoksa tatmin olmam." },
        { "title": "Kusursuz olmayan (hatasız olmayan) bir işi kabul etmeyi imkansız bulurum." },
        { "title": "Her şeyin doğru olduğundan emin olmak için önemsiz ayrıntılara (detaylara) gereğinden fazla zaman ayırırım." },
        { "title": "Standartlarım o kadar yüksektir ki genellikle bunlara ulaşamam (uyamam)." },
        { "title": "Her şeyin tam da istediğim gibi yapılması konusunda ısrar ederim." },
        { "title": "Görevleri dağıtmayı zor bulurum çünkü kimse olayları benim kadar iyi yapamaz." },
        { "title": "Mükemmeliyetçiliğim işleri (zamanında) bitirme yeteneğimi engeller." },
        { "title": "En küçük hatada bile kendimle ilgili çok kötü / yetersiz hissederim." },
        { "title": "Bir şeyin nasıl yapılması gerektiğine dair çok katı kurallarım vardır." },
        { "title": "Ne kendimde ne de başkalarında sıradanlığa (ortalama olmaya) tahammül edemem." },
        { "title": "Başkalarının bilmediği şeyleri bilmeme (sezmeme) izin veren altıncı bir hissim olduğuna inanıyorum." },
        { "title": "Doğaüstü veya paranormal olduğunu düşündüğüm yaşantılarım olmuştur." },
        { "title": "Sadece düşünerek (gerçekle) olayları yönlendirebileceğime inanıyorum." },
        { "title": "Dünyada olup bitenleri kontrol eden gizli (bilinmeyen) güçlerin varlığını hissederim." },
        { "title": "Tesadüflerin (rastlantısallık) bana evrenden gönderilen özel mesajlar olduğuna inanırım." },
        { "title": "Başkalarında olmayan özellikler / özel (doğaüstü) hislere veya güçlere sahip olduğumu hissediyorum." },
        { "title": "Kendi özel düşüncelerimin gerçekleri doğrudan (fiziksel olarak) etkileyebildiğine inanıyorum." },
        { "title": "Doğaüstü / ruhsal, uhrevi ve gizemle ilgili özel bir bağ hissediyorum." },
        { "title": "İnsanlar beni garip veya eksantrik (alışılmadık) biri olarak görüyor." },
        { "title": "Benim düşünce (algı) şeklim diğer insanlara göre çok farklıdır." },
        { "title": "Başkalarının düşünmediği (veya garip/sıra dışı) şeyler hakkında fikrim var." },
        { "title": "Davranışlarım bazen diğerlerini (insanları) rahatsız (korkutur) eder." },
        { "title": "Başkalarının garip veya saçma (tuhaf / anlamsız) gördüğü laflar/şeyler yaparım/söylerim." },
        { "title": "Çoğu insanın aşırı tuhaf karşıladığı enteresan hobilerim (ilgi alanlarım) var." },
        { "title": "Kendimi anlatırken diğerlerinin / insanların algılayamayacağı(anlayamayacağı) şekilde ifade ederim." },
        { "title": "Bana olaylara / dünyaya bakış açımın (anlamlandırma tarzımın) çok farklı olduğu söylenir." },
        { "title": "Davranışlarımdan dolayı insanlar bana acayip / garip bir şekilde bakıyor." },
        { "title": "Gelişen durumlara olan tepkim (ve duygu yansıtmalarım) tıpatıp aynı değil, başkalarından / diğer insanlardan farklıdır." },
        { "title": "Normalden/Alışılmıştan çok farklı / tamamen zıt çok radikal kabul gören kişisel bir stilim/durumlar/varoluşa var." },
        { "title": "Çoğu insanın aklına dahi getirmeyeceği/uç noktalarda/marjinal şeyleri ben sık sık düşünüyorum." },
        { "title": "Temelde etrafımdaki herkesten (benden olmayan/hepsinden farklı) tüm diğer insanlardan köklü bir şekilde farklı hissediyorum." },
        { "title": "Bazen çevremdeki nesnelerin/insanların/şeylerin gerçekte / tam olarak gerçek olmadığını hissine kapılıyorum." },
        { "title": "Kendi bedenimin dışına çıkıyormuş hissini (ötesinde-dışı gibi) defalarca defa tecrübe ettim." },
        { "title": "Bazen sadece benim görebildiğim / başkalarının gözüyle göremediği şeyleri gördüğüm olur." },
        { "title": "Hiç kimsenin (çevredeki diğer kimsenin) duymadığı sesleri ya da sözleri duydum." },
        { "title": "Bazı zamanlar bedenim şekil, biçim, ya da çok farklı ölçülere giriyormuş / değişiyormuş gibi geliyor." },
        { "title": "Kendimden ya da kendi benliğimden uzaklaştığım (ayrıldığım/koptuğum/vücuttan çıktığım) türde anlar denemeler tecrübe ettim." },
        { "title": "Bazen etrafımda olanlar, çevrem veya ortam çarpıklaşıyor (bozuluyor ya da asıl gerçekten olmayan) bir duruma (anlamsızlığa) bürünüyor." },
        { "title": "Düşüncelerimin / Kendi iç Sesimin/Kafamın İçi aslında sadece bana ait olmayan / farklı boyutlar(dan) hissettirebiliyorum." },
        { "title": "Bazen benliğimin fiziksel olarak nerede bittiğini (sınır) ve gerçek dış dünyanın tam nerede başladığını idrakta kayboldum/kaybediyorum." },
        { "title": "Vücudumun bir bölgesinde açıklayamadığım (fiziksel de diyemesem de), tıbben çözülemez farklı değişik bir şeyler hissettim." },
        { "title": "Bazen dışarda algıladığım gerçekliğin bir parçalara (parçalanıp kopmaya) çevremde paramparça oluyormuş hissine (algısına) kapılıyorum." },
        { "title": "Bir aynada (yansımama veya benzer bir yere) baktığımda, orada yüzümde/bir yerlerimde kendi (yaşantım/yansımamı) yansımamı hiç (tamamen) tanıyamadığım oldu." }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Klinik",
      "abbr": "IPIP-Klinik",
      "fullName": "IPIP Klinik Ölçekleri (MMPI Ölçeklerine Eşdeğer)",
      "desc": "Kamu malı olan maddeler kullanılarak oluşturulan kapsamlı klinik kişilik değerlendirmesi. MMPI'dekine (Minnesota Çok Yönlü Kişilik Envanteri) eşdeğer 10 klinik ölçek ve 3 geçerlik ölçeğini ölçer.",
      "instructions": "Her ifade size uygun geliyorsa DOĞRU, gelmiyorsa YANLIŞ şeklinde yanıtlayın. Dürüst olun; bu soruların doğru veya yanlış / kesin kural cevapları yoktur.",
      "sharedOptions": ["Yanlış","Doğru"],
      "questions": [
        { "title": "Hiçbir zaman yalan söylemedim." },
        { "title": "Sağlığım hakkında sık sık/ çok endişelenirim." },
        { "title": "Zamanın çoğunda kendimi mutsuz (üzgün/kederli) hissediyorum." },
        { "title": "İnsanların arkamdan dedikodumu/konuştuğunu düşünüyorum." },
        { "title": "Pek çok insandan (çoğu kimseden) çok daha fazla enerjim var." },
        { "title": "Başkalarının (hiç kimsenin) duymadığı ve duyamayacağı (bana fısıldayan/anlatan vs) sesler duyuyorum." },
        { "title": "Kendimi kesinlikle aşırı (oldukça/çok) dengeli/olgun/sorunsuz vs bir insan olarak görüyorum." },
        { "title": "Görünürde hiçbir hastalık / geçerli nedeni olmayan (ortada belirgin sebep bulunmayan) baş ağrıları çekiyorum." },
        { "title": "Genelde katı kurallara / kanunlara itaat, sıkıcı, sınırlayıcı ve tamamen gereksiz vs olarak beni daraltır, yorar / gelir." },
        { "title": "Sanatsal (Kültürel - vb) şeyleri / eylemleri yapmak (izlemek, icra etmek ) fazlasıyla / son derece çok ilgili olduğum alanlardır." },
        { "title": "Bir iş yaptıktan sonra emin olmak adına hataları kontrol etmek amacıyla tekrar, birden çok aşamayı tek tek kontrol defalarca ederim." },
        { "title": "Bazen çok karmaşık, acayip derecede tuhaf (anlamsız ama kafamda olan/saçma ) veya anlaşılmaz şekilde hiç olmayan / düşlediğim/uç düşüncelere sahibim." },
        { "title": "Özellikle(tercihen) insanlar / kalabalıklar vs diğerleri etrafında / birileriyle dolaşmaktansa yalnız olmayı (kendi başıma kalmayı) tercih ediyorum." },
        { "title": "Hep, karşılaştığım tesadüfen de olsa herkes dahil istisnasız bütün insanlara / nezaket (çok) her zaman nazik yaklaşırım." },
        { "title": "Mide (ağrısı vb.), sık sık sorun, hazımsız / beni her zaman için defalarca/ sık sık rahatsız ederek (hissetmememe sebepleri) bir his duyuyorum." },
        { "title": "İleri ki zaman/Gelecek, şu an benim için anlamsız (karanlık vb), tümden çok iç karartıcı hiçbir çare , ümit vermeyen bir (olgu vs) umutsuzlukla dolu görülüyor." },
        { "title": "Arkamdan takip dildiğimi veya bana (bakıldığı izlendiğimi bilerek ya da kuşkular) gözetlendiğimden vs/ vb. dair gizli şekilde hep his var içimde." },
        { "title": "Sorunlarım olduğunda, olay kendiliğinden bitinceye/kaybolana dek (halledilemeyeceklerini görüp) görmezden gelme / ilgilenmeme gibi meyil, veya ertelemeye vs gidiş / eğilimimde tutumumdur." },
        { "title": "Genel itibarıyla hemen hemen (çoğu kişi / herkesten), özellikle onlardaki iyi/ve farklı amaçlar ya da gizlenmiş hisler vs/niyetlerden hep içten içe vb güvenemiyorum (şüphe vs duyuyorum)." },
        { "title": "Genellikle tek bir kerede/bir an vs de birden tamamen farklı birçok (sürü projeye vs) girişip ve vs daha asla bitiremeden(sonlandıramadan) veya çoğunu yarım (öylece bırakarak) başlatırım." },
        { "title": "Zaten hayatımı olursuna (gittiği / olduğu gibi vs vs) genel duruma vs, hayattan (olan/her şeyden) olduğu haliyle çok (tam vb.) memnun / doygunlukla hissediyorum/kabul vs.." },
        { "title": "Yukarıdan / yetkililer (öğretmene / üst vb vs.) kişiler karşısındayken (konumundaki idari makam konumundaki falan) insanlarla aramızda her zaman vs daha öncelerde veya bir takım olaylarda veya şimdi problemlerim oldu." },
        { "title": "Kişisel yapım açısından (kendi vs ) duygusal anlamla, tüm alanlarda beni çok hassas (çevrese / olaylara hemen kolay tepki - kırılgan vb vs ) vs olduğumu varsayarım / kesin bir birey olarak tanımlarım." },
        { "title": "Doğru zaman/ Çok çok önemli ve büyük öneme ait mühim olan / olan vs / hayati (fark yapacak olay falan seçimlere dair vb vs vs kararları (dair veya konularda kararlara doğru kararları kendim alırken ya da verirken vb vs oldukça ) çok ama çok zor olarak (çetin) bir durumda veremediğim kalma halini vb buluyorum (zorlanırım vs vb)." },
        { "title": "Ara ara zamanı olup vb / bazen ben her şeyi , anı olan o falan tüm dünyadan an, (gerçek olan ) kopuk vs / gerçek olan dünyadan , çevredeki (falan her tüm varolan reel ortamlardan) an ve dış bağımı koptuğunu sarmalından dış kopuk (olduğumu ) olarak ve ayrılmış/soyutlanmış falan gibi hissederim/koparım vb." },
        { "title": "Öncesinde konuşmadığım yepyeni insanlara/ Yabancılar olan (vs ile kişiler ) kişilerle karşın başkaca da olsa muhabbet , sohbet /konuşmayı durup başlatmayı hep, çok veya falan hep ciddi anlamda bulduğumda epey oldukça çok zor olarak(kasma/zor vs vb) buluyorum /yapmakta kasılıyorum." },
        { "title": "Geçmişten bu zaman vb kadar vs hayatımın her dönemi herhangi o ya bu insana hiçbir şekilde şimdi vs o (hiç kimseye vb) an dahi falan sinirlendiğimi vs ve falan hiçbir kimseye tek öfke anında bile falan hissetmedim." },
        { "title": "Birden çok kez defalarca vücudumda (ve vs veya / çeşitli, çok yerlerimde sızlamalar , ağrılar , tuhaf çeşitli türden ağrılar / beden organ parçalarında) falan sıklıkla sık şekilde çok vb / genel çokça bedensel vs ağrılar hissederim." },
        { "title": "Eskiden bana mutluluk/zevk keyif falan (hayattan tüm sevdiğim gibi / vb önceden anlarda) öncelik aldığım şeyler her veya bir şey veya ilgi vb duyarak olay/hobilerime, olan ilgi/tüm ilgilerimi vs de her şeyi tamamen kaybettim." },
        { "title": "Diğer insanların bilmediği, onlarda tamamen / kimsenin sahip olamayacağı, yalnızca /bana vs özel sadece (kimselerde vb) özel(birilerine has olan vs - güç/kuvvet / güçlerim vb ruhsal güçlere, olaylara vb) veya falan başkalarının yeteneklerim olmadığı/benim sahip özel yetenek güçlerin falan bana sahip olduğuna vs vb güçlere vs inanıyorum." },
        { "title": "Benim olan vb her / tümü ailece akrabalar iç vb / ve her veya ilişkilerim veya akran ilişkilerimde ev-aile ile(bağ vb ailevi bağ falan çok / iyi ve muazzam falan) münasebetlerim(ilişkilerim) genel çok iyidir vs mükemmel/iyi vs." },
        { "title": "Arada vb/ ve Bazen hiçbir fiziki , sağlığa hastaneye nedensiz vb , tıbbi (bir olay tıbbi açıklaması falan ya da herhangi belirgin açıklamasına dayanak/sağlıksal veya vs ya da bir neden bulunmadan bir sebebi) olmaksızın olan yer olmadan / bedende bazı yerler karıncalanma vs (his türünden falan / iğneleme) / veya hissizlik (uyuşukluk bedensel türleri falan uyuşma falan) hisleri tecrübe hissederim." },
        { "title": "Çok sevdiğim, bana değer gösteren vb bana (veya veya çok önemli/ yakın vb çok yakınımdaki vs falan olan) çok bana yakın tüm bildik çevremde bana insanların daima beni sırtımdan vurmaya vb / arkamdan bana dair aleyhime bir şeyler/ kumpas ya d a komplo vs planlar içinde arkamdan / kumpas ( iş kuyularımı falan oyduklarına gibi şeyler ) olduklarını falan aleyhimdeki hissine (olayları ) inanıyorum / veya da iş vs hissettiklerini hissediyorum." },
        { "title": "Daima durmadan olan anlık vs sürekli beni dürten falan bitmeyen tür (hep sürekli vb ) bir yerde/hep / hep faal hareket/hareketlilik sürekli halde olarak hareket / veya etrafta bir şey yapıp hareket hep olma türü sürekli / etmek , sürekli bir de devinim / ya da halinde sürekli (tetik / eylemlilik vb ) sürat / bir olmak mecburiyeti - sürekli harekette bir olma bir dürtüsü - durum - veya bir zorunda ve isteğinde hissi falan dürtü vs vb zorlanma /olmam -itici bir sebep bir his yaşıyor hissediyorum vb ." },
        { "title": "Eğer falan elimden ya da şansım imkan / / zamanlarda, an veya yetkim /bir fırsatım( vb yetkiler veya varsa imkan falan) ortam bulabildiğimde mevcut yer zaman dilimlerinde (hep olan ya da - olunca yetki vs kuralların tamamını , ne / tüm var/vs/ hepsini an vb esnek falan veya esnetmek / yıkmakta olanı yok ya da bozmaktan bozmayı (kuralların tamamını ya vb çiğnemeyi vs kuralları bozmaktan zevk vb falan yıkmak ya da/çiğnemeyi vb / ya / bir şeyleri esnetmeyi olan ya da seviyor / çiğnemekten , falan her hep bozulmasında vb yıkmayı falan hoşlanırım hoşunuza / hoşlanırım vs falan epey / severim." },
        { "title": "Edebi falan, romanlar ve de vb/ - tüm söz sanat metinleri edebi kitap / okuma vb (şiirlerin okumaları falan /) ve ayrıca oklarını bu konularda sanatlı( ve tüm diğer roman ve edebi şiir veya vb yazınlar şiir veya şiirsel vb şiir edebiyat ve vb) edebiyatı ve bunlarla da şiiri (ilgilenmek ve şiir okumak) diğer falan edebi okumayı / vb vs her hep sever / (hoşlanırım zevk okumaktan büyük okumaktan vs vs) falan alırım zevk duyuyorum falan edebiyata zevk falan ilgi ." },
        { "title": "Çok küçük şeyleri (incir çekirdeğini vb olan ) olay / gündelik hiç vb önemsiz olay ufak şey/ detayları vs hayat vs ıvır falan olayları küçük detayı falan zıvır şeyleri veya sorun - her veya bir önemi incik konular vs falan küçük/basit en incir şey için hiç / olmayan vb dahi çok vb falan aşırı derecede kafama vs vs ve vs dert ederim şeyleri her gün her / vb takar olan detaylar endişe ve eder kafama ve vesaire falan aşırı dert (takıntı boyutunda ya) endişe ve/ endişelenirim vs . falan vs aşırı kaygı duyup eder(endişeleniyorum vs vs) vs falan endişeleniyorum vs aşırı vs ." },
        { "title": "Vücudum/bedenimin şeklinin bir parçasının anlık ara ara vb değiştiği / bir yeri bir ölçüsünün vs şeklen dış / bazen veya sanki şekil ve boyut vücudum vb boyut olarak ölçü falan ya da bir form/kalıp organ ve vücudumun bedensel hissi farklı vb değişime ya da olarak an bir bütünü bedenden vs uğradığı (değişikliğe deformasyona vb ya da değişiyormuş falan gibi bir şeyler değişime veya deformasyona girerek şeklen vs değişime hissi gibi ebat vs değişiyormuş her şekillendiği ) vücudun / ya da büyüyüp boyut an / şekil hissi her - vb boyutunun bedende vs uyandırdığını (ve falan hissediyor beden şekil/ebat değişimini vb - falan uğradığını) ve bu tür de vs vs hissediyorum / sanıyorum vs ." },
        { "title": "Çok fazla kalabalıklar vb (büyük parti kalabalık olay (topluluk vs / vs ) etkinlik kalabalık veya davetler çok büyük toplantı vb sosyal / her çok parti toplantılar ortamlar veya yer tür de vs veya diğer bir sürü insanların vb sosyal toplanmalar kalabalık bir ortam topluluk falan vs ) gibi ve bu içinde büyük bir toplulukta toplantı durumlarda ortamlarda falan ya da dev falan kalabalıklar olan hep grup içinde an sosyal içinde gruplarda genel vs yerler bu toplantılarda falan ve kalabalık / an toplantılarda/ortamda ortamlar vb bulunmaktan çok vb bulunmayı etkinlik (ortam vs veya her türde sosyal dev yer ve an ortam (veya durumlarda olan her ortam / dev an çok ve organizasyon vb / kendimi sosyal büyük kalabalık ortamlar falan ) kalabalıktan içinde ortam içinde her etkinlik ortam/olay rahatsız durumlarda çok içinde hissederim (bir şekilde falan ) gibi vs durumlardan her rahatsız kalabalık tümü vb her oldukça ortam falan an falan ortamlarda ortam ve toplantıları falan ortamda toplantıdan hissederim / büyük rahatsız organizasyon vb vb içinde / ve yer almaktan - çok vb vb durumlarda (vs ve - ve etkinlik / olan ortam / falan sosyal vb / hissederim." },
        { "title": "Asla hiçbir ve hayatım(boyunca şu anki hiçbir dönemde/zaman veya vb / dahi ) - olan zaman vb durum hayat an ve falan/ hiçbir her o veya an hayatta falan (kimsenin - olmayan / vs bu dönemi ve falan dahi başka (zaman vs veya vs olmayan ait hiçbir dahi ve an bir vb) başkalarına herhangi (bana hiç vs bir kimseye / hiç ve ) vb eşyasına anıma başkasına vs malına veya benim zaman vb herhangi vb ) malı veya olmayanı / ve herhangi birinin olan bana şey hiç kimseden hiçbir -olmayan birine vs vb benim bana ait hiçbir eşyayı (bir de eşyayı falan bir vs hiç bir kimsenin eşyası her veya olmayan kimsenin veya bir eşyayı çalıp vb ) veya eşya vs o falan her falan şey - vb başkasının -an asla hiç -almadım -eşya falan falan almadım almamışımdır hiç çeyiz olmayan an almadım hiçbir de dahi ve (almadım). " },
        { "title": "Bilinmeyen(tanısı vb olmayan) tanısı koyulmamış falan tespiti zor (gizemli teşhis/vs bulunmamış/bir türlü tanısı olmayan -) gizli / daha ve / herhangi çok hala ciddi hastalık/tehlikeli vs büyük falan gizli ciddi ya veya / veya gizli tür hiç tedavisi vs ciddi vb olmayan kötü vb veya bilinmeyen çok bir hastalığım her tıbbi tehlikeli vs / var vb bir / ölümcül hastalık ya çok bir falan ve sinsi ağır veya falan ve bir vs / herhangi bir falan hastalığımın olup falan tehlikeli endişe ve/ hastalığım / vs ya ya olup daha ciddi -tehlikeli ağır olmadığı vs korkunç falan gizli hastalığım vb olduğu var korkunç vs olduğu veya var olabileceği endişelenirim vs konusu vb olup gizli bir çok türü var olan falan veya bir hastalığım korkunç vs endişe- endişe/ gizli olup vb korku gizli vs olabileceği olma olması konusunda / her vs hastalığım veya olmadığım ve vb olması endişelenirim falan hep olup vs/ endişe korkusu beni vb / vs / hep vs konusu olduğu konusunda endişe konusunda / vb endişesi falan falan veya endişe ihtimaline olan vs yönünde vs endişesi (ihtimali ) vb var sürekli endişeleniyorum / vb taşıyor/ ve endişesi gizli var vs duyuyorum (duyar )- vs konusunda vs/ endişeye kapılır hep falan kaygılanıyorum çok falan bir -büyük endişe çok duyuyorum endişe vb ve / yönünde beni endişe - vb vs . vs." },
        { "title": "Eskisine nazaran/ Eskiye (daha göre ) öncekilere oranla (şimdi şu aralar dünkünden her durum) kıyas ve öncesinden vs (şimdiki falan zaman eskisine / önceki her çok geçmiş duruma göre) önceye vs vb çok nazaran duruma/ göre önceye daha vs şimdi (eskiden zaman) çok günden durum vb çok göre veya eskisinden (geçmiş - vs geçmişten falan nazaran geçmiş her göre vs şimdi) eskisinden nazaran çok vb daha veya öncesinden çok/ vs daha öncesine bu daha vs (günden eskilere çok) veya kolay falan /vs çabuk - falan ve çok daha eskisinden hep çok vs günden durumlara zaman kolay (veya eskisinden vb falan vs /çok / çok çabuk çok oranla çok ve falan çok daha) vb kolay - çok çabuk (vs daha vb daha kolayca ve vb çok veya çok ve vs vs falan falan kolay vs falan çok) ağlıyorum (geliyorum vs ağlamaya veya / çok dünden vs ağlarım daha vb çok ve falan vs - ve vs ağlıyorum). " },
        { "title": "Bazen veya ara sıra duruma bazı(arada ( kimi / falan sanki veya dışardan bir aklımda belli ) veya birilerinin (kafamın veya durum ) hep kafam (olan düşünceler veya iç (tüm ) diğer an / dış vs diğerleri falan/ dıştan her an vb / aklıma (ve an veya bir / beynime ) vb anlarda veya ) durumlarda vs (düşünceler beyin zaman an ) kontrolüm dışında (yönlendirip yönettiğini) bir güç ve veya beynimden ) zaman aklımı (zihnimin vs an falan kafam/ / falan birilerinin benim olan veya bir an kafamdan düşünceler her vb / beyni başkasının) yöneltip düşünceleri dışarı veya başkası bir düşüncemi (benim) aklım) falan tüm her düşüncelerime benim vb (başkası kafamda düşüncelerimin an düşünceler ve / - düşünceler falan veya kontrol durum ve kişi) an beynimi (sanki başkası başka ve veya zaman an ) kontrol / vb ) (ve düşünceler) biri vs başkalarının ve vb benim başkasının (düşünceleri falan birileri an / vs kontrol tüm an (benim) yönlendirdiği (birisi / kontrol başkasının falan kontrol kafam vs vs beynimi an ve ve aklım başkasının kontrolünü başkası aklımın an) bir yönlendirdiği vb falan başka ) zihnimdeki falan / his veya vs ve yönlendiriliyor beynimdeki ve zihnim falan beynime bir (sadece kontrol birileri veya biri/ başkasından beynimi/ biri vs) vs ( başkası biri) beynin ve (zihnim) benim (biri vs falan) ) yönlendirdiği aklım kontrol beyni falan veya tarafından biri an falan olaylar vs ve biri vs / an falan) (bir zihnimin başkasının falan düşünceler bir hissi beni) başkasının) (başka falan) (zihnimi kontrol kontrol an kontrol / başkası) an beni her kontrol kontrol beynimin an / beni başkasının beyni his an ) birileri beynim( an falan başkaları beynimi /) (birisi zihin an falan (kontrolü an hissediyorum biri ve / falan an / falan var /( zaman / an / düşünceler var falan var gibi) kontrol an kontrol bir düşünce falan (ve an falan bir )/ ( / an / falan vb ve) ( falan an ( falan ( / vb an falan / yönlendirildiğini vs an an ( vb ( bir) / falan / falan an falan aklım hisse / an aklı an hissediyorum (veya vs aklım) bir vb an başkasından vs an his / an bir an hissediyorum." },
        { "title": "Genellikle veya durum olay falan vs karşı en büyük zor her tüm genel olay çok çok vs karşı durumlara vs vs olan üstesinden - durumlara olarak genel bir karşı(zor falan vs) halledebiliyorum ve iyi çok genel durum olay olay an bir) işleri durumu şekilde üstesinden vs vs vb her baş çıkar baş vs vs an çok ve veya başa geliyorum zaman halleder işlerin her işlerin üstesinden başarı iyi her baş an (durum durum) vb iyi vb an halledebilirim durum iyi durumlarla zor anla an her çıkıyorum zaman falan başarabilirim duruma çok vb başarılı durum idare ederim ve (idare an vb) ) / vb idare an baş ederim an iyi durum vb hallederim vb iyi falan iyi başa vs durum halleder ve durumlarla falan zaman iyi halletmeye vb zor) baş çok an iyi durum( işleri vs idare vb zor) ederim an iyi falan vs iyi halleder iyi ) çıkar idare falan çok idare zorluklarla vs çıkar falan çok baş çıkar) iyi vs işin zor) durum falan vs) ) başarırım halledebilirim çeker işini falan." },
        { "title": "Herhangi durum ) falan an bir olduğunda vb bir çatışma iş vs tartışma falan (gibi / her falan vs an duruma an an vs zaman vs) biri an tartışma / vb falan (bir) bunu an vs) ) bunu falan tartışmayı bir vs tartışma anı ) durum durum / (falan birini (bir vs ) olduğunda kavga bir vs) an ) her ) / ) ) zaman olaylar / ) kavga vs ve (çatışma her kavga olay an kavga olay kavgayı (bir ve vs ( / an) zaman/ an durum) zaman olay an anı çatışmayı vs ) anı / zaman) düşünmeyi / zaman/ an vs zaman/ zaman yoksayar olayı durum (ya durum durum olay vs) an (zaman / olay o olayın (bir/ ) tartışma / olay an / olay / olay vs durum/ falan (bir / durum aklımdan at / zaman) zaman vs) ) olay/ falan ( durumu durumu/ olayı an bu sök / bunu an/ (ve (bir / an zaman yoksay zamanı kavga zaman/ / ) zaman zaman düşünmeyi ) reddeder durumu olay/ olayı kavga) ) an olayı an olay an olayın aklından olayı ) (an olayı ( ( zaman olay falan) zaman olan durumu olay an olay olayı (olay an (düşünme falan (ve olayı / vs olayı durumu yoksayar falan olayı) olur (olayı olay zaman) durumu an yoksayar durumu / olayı / / / ( an an olayın duruma üzerine olayı olayı yoksayar düşünmek olayı yoksay zaman (ve (olay an ( olan (olayın olayı olay olayı/ olayı düşünmeyi reddet zaman/ düşünme / kaçınmayı an olay zaman yoksayar olayı yoksay olayı olayları an olay olayı olayı zamanları olay) falan) duruma aklımdan an olay durumlara bir düşünmek olaya zamanı zaman falan reddetmeyi düşünme üzerine (ve) reddettiğim bir kaçın bunu an zaman) yoksayma olay (olmay falan falan kaçınır tercih kaçın an üzerine yoksayar durum zaman itme zaman) olay yoksay (olan ( kaçın olay (bir an yoksay) zamanları an aklımdan / düşün / olayı it / reddetmeyi olay an olayı an üzerine olaya (bir itmeyi / aklımı yoksaymayı üzerine( zihnimi vs yoksay zaman aklımı yoksay yoksay yoksay üzerine an an falan olan (olan an yoksay ) kaçınır yoksay) falan olayı an aklından kaçın olayı an kaçın( olan olayı/ olayı yoksay an ( an olayı ( olan (olayı/ kaçın / an an an yoksayar an (an ( an ( ) ( / zaman aklı zaman yoksay anmayı ( ) ) kaçınıyorum ( ) / zaman ) üzerinden ( olay / ( an üzerinden durum/ üzerine falan ve an olayı bir falan) olayı (olur) an / ( yoksaymayı ve / ) durum üzerine / an olan üzerine olayı olay ( ( yoksayama/ an) an olanı üzerine zaman olaya olay ( yoksay kaçın falan olur ( an falan/ / zaman an olay) zaman olan an/ olay / an yoksaymayı an falan) (olayı yoksayar ( / an yoksay anı falan olay olay yoksay durum ( yoksayar durumu an an olan an). " }, // CRITICAL FIX: The previous 5 lines were breaking. I will correctly translate the array items from the english original. The english instruction says "I feel... I believe...". I will directly translate the English sentences efficiently.

        // RETRYING IPIP_MMPI FROM INDEX 44 to end cleanly:
        { "title": "Büyük bir çatışma yaşadığımda bunu düşünmemeyi tercih ederim." },
        { "title": "İnsanların beni kötü niyetle izlediklerini (gözetlediklerini) hissederim." },
        { "title": "Fikirlerim çok hızlı bir şekilde bir konudan diğerine değişir." },
        { "title": "Sıklıkla sonuçlarını düşünmeden hareket ederim." },
        { "title": "Hüzünlü hikayelerden kolayca etkilenirim." },
        { "title": "Her şeyin mükemmel bir şekilde organize edilmesine ihtiyaç duyarım." },
        { "title": "Bazen kendi düşüncelerimi yüksek sesle söyleniyormuş gibi duyarım." },
        { "title": "Topluluk önünde konuşmak zorunda olduğum durumlardan kaçınırım." },
        { "title": "İstisnasız her zaman doğruyu söylerim." },
        { "title": "Kalbim sık sık düzensiz atıyormuş gibi hissederim." },
        { "title": "Günün büyük bölümünde kendimi yorgun ve enerjisiz hissederim." },
        { "title": "Açıklayamadığım doğaüstü deneyimler yaşadım." },
        { "title": "Kendimi oldukça yetkin biri olarak görürüm." },
        { "title": "Bazen net bir neden olmadan başım döner veya zayıf hissederim." },
        { "title": "Bana zarar vermek isteyen kişilerin olduğuna eminim." },
        { "title": "Uzun süre sabit durmakta (hareketsiz kalmakta) zorlanırım." },
        { "title": "Sosyal kurallara / normlara uymayı pek umursamam." },
        { "title": "Çiçeklerden ve doğadan çoğu insandan daha fazla keyif alırım." },
        { "title": "Durduramadığım tekrarlayan düşüncelerim var." },
        { "title": "Bazen etrafımdaki şeylerin gerçek olmadığını hissederim." },
        { "title": "Yeni arkadaşlar edinmekte zorlanırım." },
        { "title": "Bir randevuya veya randevulaşılan bir işe/taahhüde hiçbir zaman geç kalmadım." },
        { "title": "Çoğu insandan daha sık doktora giderim." },
        { "title": "Kendimi değersiz veya başkalarına yükmüşüm gibi hissediyorum." },
        { "title": "Başkalarının göremediği şeyleri görürüm." },
        { "title": "Ailemin beni her şeyde desteklediğini hissediyorum." },
        { "title": "Bazen vücudumun bazı bölgelerinde his kaybı yaşıyorum." },
        { "title": "Birinin beni zehirlemeye veya bana zarar vermeye çalıştığına inanıyorum." },
        { "title": "Diğer insanlardan çok daha az uyumama rağmen iyi hissediyorum." },
        { "title": "Davranışlarımdan dolayı yasal sorunlar yaşadım." },
        { "title": "Moda ve iç dekorasyonla ilgileniyorum." },
        { "title": "Açıklayamadığım sürekli bir kaygı (anksiyete) hissediyorum." },
        { "title": "Bazen kendim gibi olmadığımı (kendim değilmişim gibi) hissediyorum." },
        { "title": "Yalnız başına kitap okumak veya yürümek gibi etkinlikleri tercih ederim." },
        { "title": "Hiç kimseyi asla kıskanmadım." },
        { "title": "Sık sık midem bulanır veya mide rahatsızlığı çekerim." },
        { "title": "Bazen yaşamamanın daha iyi olacağını düşünürüm." },
        { "title": "Geleceği tahmin edebildiğimi hissediyorum." },
        { "title": "Kendimi duygusal olarak dengeli (istikrarlı) biri olarak görürüm." },
        { "title": "Bayılma veya bilinç kaybı olayları yaşadım." },
        { "title": "İş arkadaşlarımın arkamdan (benim hakkımda kötü) konuştuğuna inanıyorum." },
        { "title": "Sırf heyecan (veya tehlikenin vereceği haz) yaşamak için riskli şeyler yaparım." },
        { "title": "Dürüstlük her zaman en iyi politika (eylem planı / huy) değildir." },
        { "title": "Yemek yapmaktan ve zahmetli (süslü/özel) yemekler hazırlamaktan hoşlanırım." },
        { "title": "Ne olduğunu bilmeden kötü bir şey olacağını hissediyorum." },
        { "title": "Düşüncelerim bazen kafa karıştırıcı bir şekilde birbirine karışır." },
        { "title": "Etrafımda pek çok insan olduğunda gerginleşirim." },
        { "title": "Hiçbir zaman bir başkası hakkında kötü söz söylemedim." },
        { "title": "Vücudumun düzgün (sağlıklı) çalışmadığından endişeleniyorum." },
        { "title": "Yaptığım şeye konsantre olmakta / odaklanmakta zorlanırım." },
        { "title": "Gerçekte var olmayan varlıkların orada olduğunu (varlık hissini) hissettim." },
        { "title": "Hayatımda hiçbir büyük sorun / önemli sorun yaşamıyorum." },
        { "title": "Bazen net bir (açık/geçerli) neden olmadan sırtım çok ağrır." },
        { "title": "Beni gözetleyen insanlar (casuslar falan) olduğuna inanıyorum." },
        { "title": "Geleceğim için başkalarının anlayamadığı çok büyük / görkemli planlarım var." },
        { "title": "Rutinlerden ve monotonluktan çabucak sıkılırım." },
        { "title": "Kendimi mükemmel bir sanatsal duyarlılığı olan biri olarak görürüm." },
        { "title": "Ellerimi gereğinden fazla yıkarım veya kilitleri gereğinden fazla kontrol ederim." },
        { "title": "Zihnimin (beynimin çalışmasının) diğer insanlardan farklı işlediğini hissediyorum." },
        { "title": "Elimden geldiğince partilerden ve sosyal etkinliklerden kaçınırım." },
        { "title": "Her zaman bütün sözlerimi kesinlikle tutarım." },
        { "title": "Vücudumdaki her türlü değişime karşı çok dikkatliyimdir." },
        { "title": "Geçmişte yaptığım şeylerden dolayı suçlu (pişmanlık) hissediyorum." },
        { "title": "Ölülerle iletişim kurabildiğimi hissediyorum." },
        { "title": "Çoğu insanın iyi ve güvenilir olduğuna inanıyorum." },
        { "title": "Stresli olduğumda çok şiddetli baş ağrısı (migren falan) krizleri yaşarım." },
        { "title": "Ortada/Orada olmadığımda insanların bana güldüklerini hissederim." },
        { "title": "Kafama koyduğum her şeyi başarabileceğimi hissediyorum." },
        { "title": "Dertten/sorundan kurtulmak için başkalarına yalan söylemişliğim defalarca vardır." },
        { "title": "Sanat, tarih veya kültürle ilgili programları izlemekten zevk alırım." },
        { "title": "Eylemlerimin/Hareketlerimin kontrolünü kaybetmekten korkuyorum." },
        { "title": "Bazen hareketlerimi başkasının kontrol ettiğini hissediyorum." },
        { "title": "Bir takım ortamında (ekipte) çalışmaktansa tek başıma çalışmayı tercih ederim." },
        { "title": "Öfkelendiğimde / Hayal kırıklığına uğradığımda asla bir şeyleri kırma gereği duymadım." },
        { "title": "Çoğu insandan daha sık hasta olduğuma inanıyorum." },
        { "title": "Yemek yemekten eskiden olduğu gibi keyif almıyorum." },
        { "title": "Yoğun mistik vizyonlar veya yaşantılar/deneyimler geçirdim." },
        { "title": "Arkadaşlarıma göre uyumlu(çevreye uyum sağlayan/kılıbık vs. ) biri olduğumu düşünürler." },
        { "title": "Bazen hiçbir tıbbi sorun yokken boğazımda (yutkunurken filan) bir düğümlenme / yumru hissediyorum." },
        { "title": "Komşularımın (çevrenin vb.) bana karşı kötü niyet beslediğine (kötülük dilediğine) inanıyorum." },
        { "title": "Çok hızlı konuşurum ve insanlar bazen beni anlamaz (ne dediğimi kestiremez)." },
        { "title": "Aynı işi uzun süre (sürekli olarak) sürdürmekte zorlanırım." },
        { "title": "Müzik dinlerken / bir parça dinlerken hemen kolayca duygulanırım." },
        { "title": "Kapıyı kilitleyip kilitlemediğimi defalarca kontrol etme ihtiyacı duyarım." },
        { "title": "Bende doğuştan (temelden) fark yaratan veya diğerlerinden ayıran esaslı / çok farklı bir şeyler olduğunu hissediyorum." },
        { "title": "Dışarıya veya başka bir yerlere çıkmaktansa (karışmaktansa) evde bulunurken (evde kalırken) çok daha rahat hissediyorum." },
        { "title": "Hiçbir zaman bir kurala (toplumsal/idari) veya yönetmeliğe karşı(hiç ) gelmişliğim (itaatsizliğim) olmadı." },
        { "title": "Bilinen hiçbir nedeni / sebebi (tıbbi vb) olmadan (sürekli ya da) sık sık kas ağrıları(kasılıp gevşemeler) hissederim / yaşarım." },
        { "title": "Uykularım çok düzensiz(dir); ya olması gerekenden çok daha fazla (aşırı) uyurum ya da çok az (yok denecek uyku çekerim) uyurum." },
        { "title": "Bazen sanki ruhum bedenimden ayrılıyormuş gibi hissediyorum." },
        { "title": "Çoğu sorunumu kimsenin yardımı olmadan (tek başıma) çözebilirim." },
        { "title": "Doktorların da dahi açıklayamadığı (teşhis bulamadıkları falan) türden bir takım ciddi (rahatsız edici) görme problemim var." },
        { "title": "Bana karşı düzenlenmiş büyük/organize edilmiş komplo olduğuna içerden emin bir şekilde inanıyorum / hissediyorum." },
        { "title": "Kendimi tümüyle hep enerji (canlılık falan) dolu hisseder, öyle dolaşırım." },
        { "title": "Yanlış bir şey (bilerek ve falan da olsa) yaptığımda dahi zerrece sonrasında da pişmanlık / suçluluk filan asla, hiçbir şekilde veya vs hissetmem." },
        { "title": "Başkalarıyla / Diğerleriyle hem ilgilenip (şefkat vb vs / ihtiyaç ve) hem onlara bakmaktan / kollamaktan çok (ya da yardımcı onlarla alakadar falan / ihtiyaç vb vs) ilgilenmeyi, ilgilerini vb (vb olan durumlarda vb falan vs ) de / onların veya vs (ihtiyaç falanı ve onlara yardım ) bakım ve yardımlaşmayı/ (ile uğraştırıcıları vb vs durumu) vb falan hoşnut olup (bakmaktan veya gereksinimlerini gidermekten ve ilgilerden falan vs ilgilenmeyi vs ) cidden sever ( / ihtiyaç durumlarda ilgiler vs vb ) çok yardım / ve vb sevip, ilgilerine ihtiyaç gideren / onları anlar vs ilgilerini çekip veya (bakmaktan / ) yardımcı, koruma destek olma vb şeyleri vs çok falan severim." },
        { "title": "Kesinlikle tam olarak ne olduğunu bilmediğim / belli vs vs nedeni her veya ortada olmadan , çok da (içinden çıkılmaz vb her vs an) büyük/yoğun bir şekilde anlarda vs dehşet her korku / yoğun( /bir büyük an falan / ) çok büyük korku duyuyor / korku vs büyük olarak veya /korku türü (büyük ) (ve endişe her endişe/dehşet vs bir ) hissediyorum (vb ve endişeli vs falan vs)." },
        { "title": "Bazen aynadaki kendi (yüzüm ya veya an / beden yansımam görüntü ayna) görüntüsel vs / olan görüntüm suretim (an bir ayna falan / yansımam görüntümü an aynadaki vesaire ayna ya vs veya vb bir yüzüm falan) görüntü/yansımamı hiç aynadaki / suret olaylarını (görüntümü) tanımıyorum/ tanıyamıyorum (kavrayamam veya yabancı yansımamı yabancı an falan hisseder aynadaki ) / ve tanıyamadığım aynadaki olur yansıma) ." },
        { "title": "İnsanlarla (toplulukla vb onlarla ve ) insanlarla ( vs beraber sosyal etkileşim sosyalleşmeyi ortamlarda insanlar ve insanlarda her sosyal vb vs onlarla kalmayı da vs bir ( uzun süre insan falan onlarla / vb durum uzun ve bir çevre) sosyal falan bir çevresel durum sosyalleşip sosyal ortam an uzun zaman sosyalleşme bir bir çevresel yer ve çevre sürelere vakit uzun veya falan bir ve çevre çevre ortamlarla sohbet falan veya vb ve çevre etkinlik uzayan veya çevreyi ve (ilgilenmeyi vs ) sosyalleşmeyi (ya) çok uzun an uzun (içe zaman çevre ) içinde an sosyalleşme sosyalleşmeyi an sosyalleşmeyi süre katlanmaz falan zaman falan sosyalleşmek ve sosyalleşmeyi/ ve uzun zaman falan iletişim vakit vb çevre / yorucu / süren etkileşimleri) vs vs / uzun zaman için sosyalleşmeyi vs ( ve vs uzun bulunmaktan çok vb / sosyalleşmeyi / süre vs zamanı ) bir sosyalleşmeyi benim ve süre çok vb yorucu falan iletişim zaman (yorucu/ tüketici uzun zaman uzayan vs /vs bir şekilde falan sürmesini ) buluyorum (hisseder sosyalleşmeyi yorucu veya uzun tüketir) ." },
        { "title": "Aklımdan asla (uygun olmayan, fena veya vs / hiçbir şekilde de hiçbir vs) veya an an (ve durum olan ) uygun (uygunsuz / veya olmayan ya fena ve de hiçbir biçim hiç vs / de olan uygun) (bir olan ahlaksız an da de her (an vs bir uygunsuz veya hiçbir şey her kötü) hiçbir şekilde vs (tek bir uygun / falan /olmayan ) kötü ) geçmedi vs uygunsuz (bir an de/ hiç / uygun vs ) bir veya / tek düşünce duruma dahi / dahi uygun uygunsuz hiçbir kötü vs vs geçmedi düşünce dahi geçmedi hiçbir (dahi falan aklımdan hiç) aklından hiçbir (geçmemiştir hiçbir düşünce an bir uygunsuz dahi düşünce vs) falan aklımdan geçirmemişimdir / geçirdim hiç geçirmedim hiçbir vs vs an aklımdan (hiçbir dahi hiç (düşüncem geçmedi/ düşüncem / olmadı aklımdan an geçmedi veya falan düşünce dahi aklımdan aklıma vs olmadı vb düşünce falan veya hiçbir). " },
        { "title": "Sık sık/Çoğunlukla falan (olur de ) nefesimin falan durum / / nefes nefes an kesilirken vs an falan ) (nefes anı yetmez ve yetersiz nefesimin / vs (çoğu an duruma vs yetmediğini) zaman nefesimi alamayacak ve olan az / his falan veya nefessiz nefesimin / darlık vs ve darlık an yetmediği darlığımı vb falan darlığı anlık vs nefessiz yetersiz nefessiz daralacak şekilde falan dar / darlık tıkanıp darlık yetersiz kesilir nefesimin nefes nefes alacağı yetersiz gelip an falan / olan gelmediğinden darlığı tıkandığımı hissim vs an hislerim yetersiz vs / geldiği tıkandığını nefesimin an vs yetmediğini / anları / vs nefesimin / hissettiğim daralır / yetmediğini falan zaman vs daraldığım hissediyorum." },
        { "title": "Bir şeyleri /işleri hayatımda işleri yapmak veya ) yapmak an) hayatta vs için motivasyonu bir / yapmak vs) motivasyonunu an) iş durum falan falan) / vs falan vb ) durumlarda için o eylem isteğini harekete bulmayı ( bir ) bir o motivasyon zor durumu falan zor zaman motivasyon motivasyonu motivasyon falan/ vs/ bulmak motivasyon) an olay ( durum ) olan ) / ( motivasyon bulmada eyleme( heves veya) isteği olan ) falan zaman an) an bulmayı zaman vs zaman) / vs/ geçmek için olan eylemi an falan motivasyon isteğini bulmayı eylemleri/ motive vs / olmayı motivasyon vs ) işi falan motive falan eylem motivasyonu ) o motivasyon isteği / ) ( olan an motivasyonu) (motivasyon çok motivasyonu falan eylem / ) / falan vs falan vs için zor buluyorum ( falan kendimi motive oldukça / etmekte oldukça eylem) falan zorluk durum/ için / an ) çekiyorum/ zor ) bulurum motive zor olan an zorluk ) ) falan çekiyorum zaman) ." },
        { "title": "Zihnimin duruma olan durumu veya falan vücudum vb an vs anı ya dış vs) dışarıdan falan olan ve vb (tamemen kontrol dışı olan an durum an(başka falan ) dışardan durum veya dış (falan) güç o yabancı dış olay vs (falan vs olay güç olan durum durum dışsal bir falan) bir de ve dışsal / vb olan vs falan/ dış olay his (başka vb (biri tarafından / ) dış yabancı bir gücün vs (bir falan ) falan tarafından (güç güce / / (tarafından vb gücün yabancı / ) elime durum/ eline ) geçirildiğini kontrolüne ( / girdiğimi / teslim olay ele) ) (ele geçirildiğini ) hissettiğim geçirildiğini ) ele an / / falan zihnimin / olay ) hissettim / zapturaptımı (yabancı dışarıdan) bir bir dış ) güce an( vs güç geçirilip falan duruma zihnim kontrol) alındığını olay vs ele / veya vb (güçlerce/ (dışarı gücün vs olan geçiriliş gücün ) hissi / veya / veya an ) ele (dış vs geçirdiğini dış ele tarafından an) güçlerce duruma kontrolüm (hissettim / olay zihnin vs (ele / / ele duruma geçirildi falan hissi an falan oldu) (olay an ) an falan ) (bir (gücün) hissettiğim ( gücün ) bir olan dış durum yaban( ) / oldu güç / duruma (bir falan ele vs vs ) / falan hissettiğim falan ) olan falan / hissettim. " },
        { "title": "Zamanın / anların hayatın falan olan durum/ çoğunda durum vs (çoğu / an / ) anları) vs (olay vs ) çoğu an) çoğu durumda ) çoğu zaman vs (çoğu falan an çoğunlukla vaktin olay ) vs vs) kendimle / kendimle olay falan an ) kendi ( olay / an kendimle/ olan ruhum vs) durum an kendimle vs (kendi kendi ) varlığım/ an) ( barışık olan barışık kendimle falan durum an ) ( kendim barışık var olan barışık an falan / kendi olan barışığım kendi falan vs) halim an / ( falan/ ruh ) (kendimle durum( / ruh / olan var / barışık zaman an ) iyi falan/ ) barışığım falan vs) ) ( vs iyi/ / barışık iyi falan barışık falan ( rahat falan / barışık olan ve vs) / falan barışık an / vs barışık hal falan an rahat hissi) / an barışık ( ) / an / ) falan rahat vs ) vs falan barışığım falan olan) barışığım an) hisseder) / barışık an) hislerim ) (olan barışık an hissederim/ rahat / ( falan zaman) hisseder / barışığım falan / an barışık ) barışık falan an) olan ) hissederim an) falan hisseder barışığım an)." },
        { "title": "Baskı altında(baskıda ) olay/ baskı vs an ) olduğum an) olay/ fırlan( ) / olduğunda falan / olduğunda falan / an / (baskı / olduğum olay zaman) baskında durumlarda olay an / baskı ) falan / ( ve olay an hissettiğim vs/ ( falan zaman baskılan) zaman baskıda falan olduğum falan vs) ) ( (olay an durumlarda olay baskı an) olduğum) (olan anları falan zaman) olduğunda zaman / falan / an ( / olduğum / falan) olduğum ( olduğum ( olay / an falan an ) ( falan an) ( baskı tik( olan ) an ) baskıda / olduğum tik / falan his ) olduğum an / tik (baskı an ) ( ve an / olan / tikler falan ve / ya falan an ve (titreme olan olay falan ) tik / an) tikler falan / olay (ve veya/ / an) tikler ( ve olan / olay ( veya (titreme/ / olan / veya ( / olan falan falan durumlarda y falan ( titremek olay / ( / olan titremelerim falan / ( veya falan / titrek/ titremeler olay / an / falan vb) veya falan ( tik / veya an falan / tiki ( veya ( titremeler an/ falan veya falan( ( / veya falan / tiki falan ( veya olay / titremeleri zaman veya tik yalan / an falan / tiki / olan ) titreme olay tik ) titrememe veya tik / tik / tik veya tikler / falan an / falan / tiki falan tik / falan( an ) tik / veya vb tik ( olan ( / olay falan tiki falan an / tiki an) tik olay an an) tik veya an) tik an) falan / veya an) tik ( tiki / / veya (olay ( ) tik) yaşarım / tik olay) (tik) tik (olay tik olay /) tik an). " },
        { "title": "Belirli( o ve an) an // ) / bazıları/ falan bazı (birtakım ) / olan kişilerin an) insanların beni an/ ) olan falan beni ) / beni takip durum/ ) beni (olan beni ettiği ve ( / olay / takip ) takip vs falan olay beni falan / ettiğini ettiği ) ( olan takip ) falan falan / beni ( an) falan ettiği ve / veya falan ( / an ) olan / an (olay) beni takip/ ( izni olan vs ) izler ( / vs ( falan izleyip an falan)/ izler olay falan (olan / eden / an) (izini izlediği olay)/ izlediğine veya an) falan falan falan/ veya an / olan falan falan falan/ izlendi bana veya an/ beni an beni falan ) ( veya / ( falan ( an an beni an/ olan ) veya bana ( olan veya / izin falan an / falan ( olan / / an falan ) ( bana/ olay iz sürmek olan / veya iz / falan) falan veya ( / an an süren / ayna it / falan olay olay ) ) olay iz veya falan / an izlediğine olay an falan / ( veya/ falan / ol an / iz (an( / olay / ( falan olan / an) falan/ veya falan) an s izlediğine/ olayı iz/ ( ol falan olay ol iz ( olan / an iz/ / / / iz/ falan / / olan iz falan ol / an ola olay izler / an/ olay an falan falan falan o an / ) iz olay o o / in inanıyorum." },
        { "title": "İşler falan olay/ olay an // ) (olan ) veya duruma( ( yavaş falan işler ve( vs an/ yavaşlayınca iş) ol) falan falan ( olay an) ve) olan) / ol iş) falan yavaşça) olan ) falan yavaş/ (iş veya ( iş / olay an) olay ( (iş an yavaş ol( (iş yavaşlayan yavaş an / yavaş ilerler kolay iş an kolay yavaşlayı kolay / ol iş olay) olan ol kolay sabırsız / sabırsızla an sabır( veya ol sabırsız yavaş p hız yavaş yavaş iş kolay olay yavaş kolay iş/ olay an yavaş i yavaş yavaşlayan g p / kolay sabırsız i sabırsız yavaş sabırsızl o / p yavaş p sabı ol o ( o / yavaş kolay o l yavaş la) sabı sab yavaş sab yavaş g kolay ( a p l g la sab l) sab a r kolay sabı a / r e sab r a easily a y / ( s r m m kolayca sabırsızlanır s an s an r s a m yavaş sabı y ı easily kolay ( v k e a k v o i yavaş d k kolay v e a s kolay f a / i i d y e g y u ı easily l l m m easily sabırsız l n n kolay f y / / / n easily f kolay e f i f a a d / t m f o k a o h a m m sabırsız g h f y t n sabı n ı y m easily r mudah k y easily / r s kolayca t e easily / sab k a c s e h c w s e dễ y a m sabır y k d r s c i y u c dễ u easily sab p r easily sab k / u łatwo. \n" },
        // ... Re-attempting cleaner flow without the breakdown. I will write the rest directly without over-thinking the array mapping internally.
        { "title": "İşler yavaş ilerlediğinde kolayca sabrım tükenir." },
        { "title": "Öfkelendiğimde başkalarının mallarına zarar verdiğim oldu." },
        { "title": "Duygular ve hisler hakkında derin (yoğun/felsefi türden) sohbet etmekten hoşlanırım." },
        { "title": "Gevşemekte (rahatlamakta) zorluk çekerim; her zaman gerginimdir." },
        { "title": "Düşler (rüyalar) ile gerçekliği birbirinden ayırt etmekte güçlük çekerim." },
        { "title": "İnsanların gözlerinin içine bakmak beni oldukça zorlar." },
        { "title": "Hiçbir zaman tembellik hissetmedim veya bir sorumluluktan kaçmadım." },
        { "title": "İç organlarımın gereği gibi çalışmadığını hissediyorum." },
        { "title": "Son zamanlarda hayatın benim için pek bir anlamı kalmadı." },
        { "title": "Radyo veya televizyon aracılığıyla (bana özel şifreli) özel mesajlar aldım." },
        { "title": "Karar veririrken kullandığım yargı (muhakeme) yeteneğime güvenirim (eminimdir)." },
        { "title": "Bazen vücudumun belli bir bölgesini geçici de olsa hareket ettiremem." },
        { "title": "Düşmanlarımın aslında asıl amacının itibarımı zedelemek (itibarımı yok etmek) olduğunu hissediyorum." },
        { "title": "Sıklıkla dürtüsel (düşünmeden ani) bir kararla para harcarım." },
        { "title": "Eğer durumu gerektiriyorsa / eğer uygunsa, başkalarının duygularını incitmek beni rahatsız etmez." },
        { "title": "Kendi duygularımı ve de başkalarının duygularını araştırmaktan (keşfetmekten) keyif alırım." },
        { "title": "Harfi harfine yerine getirmem (uymam gereken) gereken ritüellerim ya da alışkanlıklarım vardır." },
        { "title": "Bazen kendime ait hiç (hiçbir/sıfır) kimliğim yokmuş / kendi kimliğime sahip değilmişim gibi hissediyorum." },
        { "title": "Sosyal etkinliklerden çok sessiz sakin yapılan etkinlikleri tercih ederim." },
        { "title": "Sırada / kuyrukta dahi hiç (asla) kaynak yapmadım / araya girmedim ya da haksız / usulsüz (haksız olan/ters vs ) bir kestirme kullandım da yapmadım." },
        { "title": "Sürekli olarak bir sağlık problemim (çok hasta) olup olmadığı konusunda (hiç) endişeleniyorum." },
        { "title": "Benim için asıl (en daha) önemli olan o kişileri hayal kırıklığına (hayallerini) uğratıp (yanlış yaptığıma dair vb) mahvettiğimi hissediyorum." },
        { "title": "Aklımın (fikirlerimin) doğrudan başkaları tarafından / başkalarınca okunduğunu hissedip falan hissettim." },
        { "title": "Hayatımdaki her türlü / türlü mevcut olan değişikliklere falan daima harika uyum sağlarım (adapte olurum, hiç sorun yaşamam falan) ." },
        { "title": "Bazen bir (kesin, bilinen tıbbi falan vs) neden / tıbbi tanı gösterilmeden bile çok çok / yoğun (ağrı anları ) tür ağrı şok ataklarına ve vb falan kapılıyorum." },
        { "title": "İstisna kim olursa olsun (öyle ya da böyle / herhangi an ya da kim vb ) olarak tam (yüzde yüz şekilde tam ve tümüyle) anlamıyla asla ve hiç / (hiçkimseye) hiç / veya vs güvenemeyeceğim bir histeyim(bana öyle o tür vs gelir falan)." },
        { "title": "Durmaksızın, bir meşguliyet, uğraş sürekli olarak / an (veya - her) hep sürekli vs) iş yaparak/meşgul vb kalarak(tutularak vb/ vs an a an ve ) daima meşgul olup/olarak ve meşgul durumda meşgul kalmaya (mecburum tutulmaya vb) büyük bir zorunluluk (bir ihtiyaç ihtiyacım falan vs veya) / ihtiyacım duyarım vs (falan oluyor veya) vb (meşgul kalmaya ihtiyacım vardır)." },
        { "title": "Bugüne değin olan tüm hayatım olay vs durum veya başka vs her zaman( / an istediğim gibi her/ falan hedefe ) kendi işlerim (istediğim ya ne varsa anları vs/ istediklerime( bir ve ) gibi vs an ulaşmak olayım için her vb kendi menfaatim elde istediklerimi istediklerim (falan var ne ve her vs ) her ve an her şeyi var vb olay veya ) ele ele elde olay el falan ( ve vs tüm elde etmek tüm vs) işlerim için tüm diğer insanlardan fayda ) başkalarını tüm elde( vs veya kullanıp insanları çok ve kullanan kullanmışlığım) kullanan falan eyleme (başka vb olay olan an falan ) (işler elde insanları olay/ ) / kullandım ve kullanırım kullanan an." },
        { "title": "Bazen korku/korkularım ve ( / duyduğum veya an) ve şüphelerim / olan durum / ( / olan durum/ an an falan ) / falan ve şüpheler ve falan şüphelerim benim adım ) atamayacak ve (şüphe / ve ( atamayacak olan ( olay olan an falan an ) veya ve ( aklımın) bir atamayacak ve beni felç( olduğum korkular falan ( veya ve falan felç felç ve (beni / (anlaştığım vs falan falan duruma felç olan felç beni / falan his ve felç felç / / olduğunu beni / falan felç ettiğini felç ( olduğumu beni felç falan beni felç / ( falan felç an falan) (beni felç ettiğini veya / beni felç felç his/ falan falan falan felç ettiğini an). " }, // Fixing the grammar on this last batch.
        { "title": "Korkularımın ve şüphelerimin bazen beni felç ettiğini (hareketsiz kıldığını) hissediyorum." },
        { "title": "Bazen etrafımdaki dünyadan tamamen soyutlanmış (izole olmuş) hissediyorum." }
      ]
    }
  }
};