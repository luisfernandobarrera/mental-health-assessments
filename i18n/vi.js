const LANG_VI = {
  "ui": {
    "appTitle": "Đánh Giá Sức Khỏe Tâm Thần",
    "appSubtitle": "Công cụ tự đánh giá tâm lý",
    "tabTests": "Bài kiểm tra",
    "tabHistory": "Lịch sử",
    "welcome": "Chào mừng. Chọn một bài đánh giá để bắt đầu.",
    "startTest": "Bắt đầu kiểm tra",
    "nextQuestion": "Tiếp theo",
    "prevQuestion": "Trước đó",
    "viewResults": "Xem kết quả",
    "question": "Câu hỏi",
    "of": "trên",
    "items": "mục",
    "backToTests": "Quay lại bài kiểm tra",
    "repeatTest": "Làm lại bài kiểm tra",
    "viewHistory": "Xem lịch sử",
    "otherTests": "Các bài kiểm tra khác",
    "detailByItem": "Chi tiết theo mục",
    "helpResources": "Nguồn trợ giúp",
    "helpText": "Nếu bạn đang trải qua một khủng hoảng cảm xúc, hãy tìm kiếm sự giúp đỡ chuyên nghiệp. Đường dây Ngăn chặn Tự tử Quốc gia: 988 (Mỹ) hoặc liên hệ với chuyên gia sức khỏe tâm thần.",
    "disclaimerTitle": "Lưu ý quan trọng:",
    "disclaimerText": "Bài kiểm tra này là công cụ tự đánh giá và không thay thế chẩn đoán của chuyên gia sức khỏe tâm thần. Nếu bạn cảm thấy cần giúp đỡ, hãy tham khảo ý kiến chuyên gia.",
    "privacyTitle": "Quyền riêng tư của bạn:",
    "privacyText": "Kết quả của bạn chỉ được lưu trong trình duyệt của bạn (localStorage). Không có dữ liệu nào được gửi đến máy chủ hoặc rời khỏi máy tính của bạn.",
    "cat_triage": "Nên bắt đầu từ đâu?",
    "cat_clinical": "Đánh Giá Lâm Sàng",
    "cat_screening": "Sàng lọc & Phát hiện",
    "cat_wellbeing": "Hạnh phúc & Lòng tự trọng",
    "cat_personality": "Tính cách",
    "cat_crisis": "Khủng hoảng & Rủi ro",
    "cat_advanced": "Đánh Giá Nâng Cao",
    "noRecords": "Không có bản ghi nào được lưu.",
    "completeFirst": "Hoàn thành ít nhất một bài kiểm tra để xem lịch sử.",
    "goToTests": "Đi tới bài kiểm tra",
    "trend": "Xu hướng",
    "all": "Tất cả",
    "clearHistory": "Xóa lịch sử",
    "clearConfirm": "Bạn có chắc chắn muốn xóa toàn bộ lịch sử? Hành động này không thể hoàn tác.",
    "score": "Điểm số",
    "outOf": "trên",
    "disclaimer": "Công cụ này chỉ nhằm mục đích thông tin và không thay thế đánh giá chuyên nghiệp. Tham khảo ý kiến chuyên gia sức khỏe tâm thần để có chẩn đoán phù hợp.",
    "resumePrompt": "Bạn có một bài kiểm tra đang thực hiện",
    "continueTest": "Tiếp tục bài kiểm tra",
    "resumeMessage": "Bạn có bài kiểm tra {test} đang thực hiện ({n}/{total} câu hỏi)",
    "dismiss": "Đóng",
    "questionsAnswered": "câu hỏi đã trả lời",
    "inProgress": "Đang thực hiện",
    "testBy": "Bài kiểm tra",
    "recommendedTests": "Bài đánh giá được đề xuất",
    "highPriority": "Ưu tiên cao",
    "recommended": "Được đề xuất",
    "suggested": "Đề xuất",
    "areasEvaluated": "Các lĩnh vực được đánh giá",
    "kbSelect": "chọn",
    "kbBrowse": "duyệt",
    "kbConfirm": "xác nhận",
    "kbPrevNext": "trước/sau",
    "suggestedRetake": "Đề xuất làm lại",
    "triageRecommended": "Được đề xuất bởi đánh giá ban đầu của bạn",
    "retakeReason": "Lần làm cuối cùng"
  },
  "scales": {
    "agreement5": ["Hoàn toàn không đồng ý","Không đồng ý","Không đồng ý cũng không không đồng ý","Đồng ý","Hoàn toàn đồng ý"],
    "frequency4": ["Không hề","Một vài ngày","Hơn một nửa số ngày","Gần như mỗi ngày"],
    "frequency5": ["Không bao giờ","Hầu như không bao giờ","Đôi khi","Khá thường xuyên","Rất thường xuyên"],
    "severity4": ["Không hề","Nhẹ","Trung bình","Nặng"],
    "severity5": ["Không hề","Một chút","Trung bình","Khá nhiều","Cực kỳ"],
    "yesNo": ["Không","Có"]
  },
  "tests": {
    "bdi": {
      "name": "BDI-II",
      "abbr": "BDI-II",
      "fullName": "Bảng kiểm tra Trầm cảm Beck-II",
      "desc": "Đánh giá sự hiện diện và mức độ nghiêm trọng của các triệu chứng trầm cảm trong hai tuần qua.",
      "instructions": "Đọc kỹ từng nhóm câu và chọn một câu mô tả chính xác nhất cảm giác của bạn trong hai tuần qua, bao gồm hôm nay.",
      "questions": [
        {
          "title": "Buồn bã",
          "options": [
            "Tôi không cảm thấy buồn.",
            "Tôi thường xuyên cảm thấy buồn.",
            "Tôi lúc nào cũng buồn.",
            "Tôi buồn hoặc không hạnh phúc đến mức không chịu nổi."
          ]
        },
        {
          "title": "Bi quan",
          "options": [
            "Tôi không nản lòng về tương lai của mình.",
            "Tôi cảm thấy nản lòng về tương lai hơn trước đây.",
            "Tôi không kỳ vọng mọi việc sẽ ổn thỏa.",
            "Tôi cảm thấy tương lai của mình vô vọng và sẽ chỉ tồi tệ hơn."
          ]
        },
        {
          "title": "Thất bại trong quá khứ",
          "options": [
            "Tôi không cảm thấy mình là kẻ thất bại.",
            "Tôi đã thất bại nhiều hơn mức lẽ ra nên có.",
            "Nhìn lại, tôi thấy rất nhiều thất bại.",
            "Tôi cảm thấy mình là một con người thất bại hoàn toàn."
          ]
        },
        {
          "title": "Mất đi niềm vui",
          "options": [
            "Tôi nhận được nhiều niềm vui như trước đây từ những điều tôi thích.",
            "Tôi không còn thích thú nhiều như trước đây.",
            "Tôi nhận được rất ít niềm vui từ những điều trước đây tôi từng thích.",
            "Tôi không thể nhận được bất kỳ niềm vui nào từ những điều trước đây tôi từng thích."
          ]
        },
        {
          "title": "Cảm giác tội lỗi",
          "options": [
            "Tôi không cảm thấy đặc biệt tội lỗi.",
            "Tôi cảm thấy tội lỗi về nhiều việc tôi đã làm hoặc lẽ ra nên làm.",
            "Tôi cảm thấy khá tội lỗi hầu hết thời gian.",
            "Tôi lúc nào cũng cảm thấy tội lỗi."
          ]
        },
        {
          "title": "Cảm giác bị trừng phạt",
          "options": [
            "Tôi không cảm thấy mình đang bị trừng phạt.",
            "Tôi cảm thấy mình có thể bị trừng phạt.",
            "Tôi kỳ vọng sẽ bị trừng phạt.",
            "Tôi cảm thấy mình đang bị trừng phạt."
          ]
        },
        {
          "title": "Tự ghét bản thân",
          "options": [
            "Tôi cảm thấy về bản thân như cũ.",
            "Tôi đã mất tự tin vào bản thân.",
            "Tôi thất vọng về bản thân.",
            "Tôi ghét bản thân."
          ]
        },
        {
          "title": "Tự chỉ trích",
          "options": [
            "Tôi không chỉ trích hoặc đổ lỗi cho bản thân nhiều hơn bình thường.",
            "Tôi chỉ trích bản thân nhiều hơn trước đây.",
            "Tôi chỉ trích bản thân vì tất cả lỗi lầm của mình.",
            "Tôi đổ lỗi cho bản thân về mọi điều xấu xảy ra."
          ]
        },
        {
          "title": "Suy nghĩ hoặc mong muốn tự tử",
          "options": [
            "Tôi không có bất kỳ suy nghĩ nào về việc tự tử.",
            "Tôi có suy nghĩ tự tử, nhưng tôi sẽ không thực hiện.",
            "Tôi muốn tự tử.",
            "Tôi sẽ tự tử nếu có cơ hội."
          ]
        },
        {
          "title": "Khóc",
          "options": [
            "Tôi không khóc nhiều hơn trước đây.",
            "Tôi khóc nhiều hơn trước đây.",
            "Tôi khóc vì mọi chuyện nhỏ nhặt.",
            "Tôi muốn khóc, nhưng không thể."
          ]
        },
        {
          "title": "Kích động",
          "options": [
            "Tôi không bồn chồn hoặc căng thẳng hơn bình thường.",
            "Tôi cảm thấy bồn chồn hoặc căng thẳng hơn bình thường.",
            "Tôi bồn chồn hoặc kích động đến mức khó ngồi yên.",
            "Tôi bồn chồn hoặc kích động đến mức phải di chuyển hoặc làm gì đó liên tục."
          ]
        },
        {
          "title": "Mất hứng thú",
          "options": [
            "Tôi không mất hứng thú với người khác hoặc hoạt động.",
            "Tôi ít quan tâm đến người khác hoặc sự việc hơn trước.",
            "Tôi đã mất hầu hết hứng thú với người khác hoặc sự việc.",
            "Thật khó để thấy hứng thú với bất cứ điều gì."
          ]
        },
        {
          "title": "Không quyết đoán",
          "options": [
            "Tôi đưa ra quyết định tốt như trước.",
            "Tôi thấy khó đưa ra quyết định hơn bình thường.",
            "Tôi gặp khó khăn lớn hơn nhiều trong việc đưa ra quyết định so với trước.",
            "Tôi gặp khó khăn khi đưa ra bất kỳ quyết định nào."
          ]
        },
        {
          "title": "Vô giá trị",
          "options": [
            "Tôi không cảm thấy mình vô giá trị.",
            "Tôi không còn coi mình có giá trị và hữu ích như trước.",
            "Tôi cảm thấy vô giá trị hơn so với người khác.",
            "Tôi cảm thấy hoàn toàn vô giá trị."
          ]
        },
        {
          "title": "Mất năng lượng",
          "options": [
            "Tôi có nhiều năng lượng như trước.",
            "Tôi có ít năng lượng hơn trước đây.",
            "Tôi không có đủ năng lượng để làm nhiều việc.",
            "Tôi không có đủ năng lượng để làm bất cứ điều gì."
          ]
        },
        {
          "title": "Thay đổi trong giấc ngủ",
          "options": [
            "Tôi không trải qua bất kỳ thay đổi nào trong giấc ngủ.",
            "Tôi ngủ nhiều hơn hoặc ít hơn một chút so với bình thường.",
            "Tôi ngủ nhiều hơn hoặc ít hơn rất nhiều so với bình thường.",
            "Tôi ngủ hầu hết cả ngày hoặc tôi thức dậy sớm 1-2 giờ và không thể ngủ lại."
          ]
        },
        {
          "title": "Cáu kỉnh",
          "options": [
            "Tôi không cáu kỉnh hơn bình thường.",
            "Tôi cáu kỉnh hơn bình thường.",
            "Tôi cáu kỉnh hơn rất nhiều so với bình thường.",
            "Tôi lúc nào cũng cáu kỉnh."
          ]
        },
        {
          "title": "Thay đổi khẩu vị",
          "options": [
            "Tôi không trải qua bất kỳ thay đổi nào trong khẩu vị.",
            "Khẩu vị của tôi hơi kém hoặc hơi tăng so với bình thường.",
            "Khẩu vị của tôi kém hơn hoặc tăng hơn rất nhiều so với bình thường.",
            "Tôi hoàn toàn không có khẩu vị hoặc tôi thèm ăn suốt ngày."
          ]
        },
        {
          "title": "Khó tập trung",
          "options": [
            "Tôi có thể tập trung tốt như trước.",
            "Tôi không thể tập trung tốt như bình thường.",
            "Thật khó để giữ tâm trí vào bất cứ điều gì trong thời gian dài.",
            "Tôi thấy mình không thể tập trung vào bất cứ điều gì."
          ]
        },
        {
          "title": "Mệt mỏi",
          "options": [
            "Tôi không mệt hoặc mỏi hơn bình thường.",
            "Tôi dễ mệt hoặc mỏi hơn bình thường.",
            "Tôi quá mệt hoặc mỏi để làm nhiều việc trước đây tôi từng làm.",
            "Tôi quá mệt hoặc mỏi để làm hầu hết việc trước đây tôi từng làm."
          ]
        },
        {
          "title": "Mất hứng thú với tình dục",
          "options": [
            "Tôi không nhận thấy bất kỳ thay đổi nào gần đây trong hứng thú tình dục.",
            "Tôi ít quan tâm đến tình dục hơn trước đây.",
            "Bây giờ tôi ít quan tâm đến tình dục hơn rất nhiều.",
            "Tôi đã hoàn toàn mất hứng thú với tình dục."
          ]
        }
      ],
      "results": {
        "minimal": { "label": "Tối thiểu", "desc": "Điểm số của bạn cho thấy mức độ trầm cảm tối thiểu. Trải qua những thăng trầm cảm xúc là điều bình thường." },
        "mild": { "label": "Nhẹ", "desc": "Điểm số của bạn cho thấy các triệu chứng trầm cảm nhẹ. Hãy cân nhắc nói chuyện với chuyên gia nếu chúng kéo dài." },
        "moderate": { "label": "Trung bình", "desc": "Điểm số của bạn cho thấy các triệu chứng trầm cảm trung bình. Khuyến nghị tham khảo ý kiến chuyên gia sức khỏe tâm thần." },
        "severe": { "label": "Nặng", "desc": "Điểm số của bạn cho thấy các triệu chứng trầm cảm nặng. Điều quan trọng là tìm kiếm sự giúp đỡ chuyên nghiệp càng sớm càng tốt." }
      }
    },
    "bai": {
      "name": "BAI",
      "abbr": "BAI",
      "fullName": "Bảng kiểm tra Lo âu Beck",
      "desc": "Đánh giá mức độ nghiêm trọng của các triệu chứng lo âu trong tuần qua.",
      "instructions": "Cho biết mỗi triệu chứng đã làm phiền bạn bao nhiêu trong tuần qua, bao gồm hôm nay.",
      "questions": [
        { "title": "Tê hoặc ngứa ran" },
        { "title": "Cảm thấy nóng" },
        { "title": "Chân run rẩy" },
        { "title": "Không thể thư giãn" },
        { "title": "Sợ điều tồi tệ nhất xảy ra" },
        { "title": "Chóng mặt hoặc choáng váng" },
        { "title": "Tim đập mạnh hoặc nhanh" },
        { "title": "Không vững vàng" },
        { "title": "Hoảng sợ hoặc sợ hãi" },
        { "title": "Lo lắng" },
        { "title": "Cảm giác nghẹn thở" },
        { "title": "Tay run" },
        { "title": "Run rẩy hoặc không vững" },
        { "title": "Sợ mất kiểm soát" },
        { "title": "Khó thở" },
        { "title": "Sợ chết" },
        { "title": "Sợ hãi" },
        { "title": "Khó tiêu" },
        { "title": "Ngất xỉu hoặc choáng váng" },
        { "title": "Mặt đỏ bừng" },
        { "title": "Đổ mồ hôi nóng/lạnh" }
      ],
      "results": {
        "minimal": { "label": "Tối thiểu", "desc": "Điểm số của bạn cho thấy mức độ lo âu tối thiểu." },
        "mild": { "label": "Nhẹ", "desc": "Điểm số của bạn cho thấy lo âu nhẹ. Theo dõi các triệu chứng của bạn." },
        "moderate": { "label": "Trung bình", "desc": "Điểm số của bạn cho thấy lo âu trung bình. Cân nhắc tham khảo ý kiến chuyên gia." },
        "severe": { "label": "Nặng", "desc": "Điểm số của bạn cho thấy lo âu nặng. Khuyến nghị tìm kiếm sự giúp đỡ chuyên nghiệp." }
      }
    },
    "gad7": {
      "name": "GAD-7",
      "abbr": "GAD-7",
      "fullName": "Rối loạn Lo âu Tổng quát-7",
      "desc": "Đánh giá mức độ nghiêm trọng của lo âu tổng quát trong hai tuần qua.",
      "instructions": "Trong 2 tuần qua, bạn thường xuyên bị làm phiền bởi các vấn đề sau đây như thế nào?",
      "questions": [
        { "title": "Cảm thấy lo lắng, bồn chồn hoặc căng thẳng" },
        { "title": "Không thể ngừng hoặc kiểm soát lo lắng" },
        { "title": "Lo lắng quá nhiều về các việc khác nhau" },
        { "title": "Khó thư giãn" },
        { "title": "Bồn chồn đến mức khó ngồi yên" },
        { "title": "Dễ bực bội hoặc cáu kỉnh" },
        { "title": "Cảm thấy sợ hãi, như thể điều gì tồi tệ có thể xảy ra" }
      ],
      "results": {
        "minimal": { "label": "Tối thiểu", "desc": "Điểm số của bạn cho thấy mức độ lo âu tối thiểu." },
        "mild": { "label": "Nhẹ", "desc": "Điểm số của bạn cho thấy lo âu nhẹ." },
        "moderate": { "label": "Trung bình", "desc": "Điểm số của bạn cho thấy lo âu trung bình. Cân nhắc tham khảo ý kiến chuyên gia." },
        "severe": { "label": "Nặng", "desc": "Điểm số của bạn cho thấy lo âu nặng. Khuyến nghị tìm kiếm sự giúp đỡ chuyên nghiệp." }
      }
    },
    "msibpd": {
      "name": "MSI-BPD",
      "abbr": "MSI-BPD",
      "fullName": "Công cụ Sàng lọc McLean cho Rối loạn Nhân cách Ranh giới",
      "desc": "Công cụ sàng lọc các đặc điểm liên quan đến rối loạn nhân cách ranh giới.",
      "instructions": "Trả lời có hoặc không cho mỗi câu hỏi sau.",
      "questions": [
        { "title": "Bạn đã bao giờ cố ý cắt, đốt hoặc làm hại bản thân một cách cố tình chưa?" },
        { "title": "Bạn đã bao giờ cố gắng tự tử chưa?" },
        { "title": "Bạn đã có ít nhất hai mối quan hệ (hoặc cố gắng có quan hệ) rất mãnh liệt nhưng không ổn định chưa?" },
        { "title": "Cảm giác về bản thân bạn có thường thay đổi đột ngột không?" },
        { "title": "Tâm trạng của bạn có thường thay đổi đột ngột không?" },
        { "title": "Bạn có thường cảm thấy cơn giận dữ mãnh liệt khó kiểm soát không?" },
        { "title": "Bạn có thường không tin tưởng người khác không?" },
        { "title": "Bạn có thường cảm thấy không thật hoặc như những thứ xung quanh bạn không thật không?" },
        { "title": "Bạn có thường cảm thấy trống rỗng không?" },
        { "title": "Bạn có thường nỗ lực tuyệt vọng để tránh bị ai đó bỏ rơi không?" }
      ],
      "results": {
        "minimal": { "label": "Tối thiểu", "desc": "Điểm số của bạn cho thấy sự hiện diện thấp của các đặc điểm liên quan đến rối loạn nhân cách ranh giới." },
        "moderate": {
          "label": "Trung bình",
          "desc": "Điểm số của bạn cho thấy một số đặc điểm liên quan đến rối loạn nhân cách ranh giới. Cân nhắc tham khảo ý kiến chuyên gia."
        },
        "severe": {
          "label": "Đáng kể",
          "desc": "Điểm số của bạn cho thấy sự hiện diện đáng kể của các đặc điểm ranh giới. Khuyến nghị đánh giá chuyên sâu bởi chuyên gia."
        }
      }
    },
    "pss": {
      "name": "PSS,10",
      "abbr": "PSS-10",
      "fullName": "Thang đo Mức độ Căng thẳng Nhận thức-10",
      "desc": "Đo lường mức độ các tình huống cuộc sống được nhận thức là căng thẳng trong tháng qua.",
      "instructions": "Các câu hỏi sau đây hỏi về cảm xúc và suy nghĩ của bạn trong tháng qua. Cho biết bạn cảm thấy hoặc nghĩ như vậy thường xuyên như thế nào.",
      "questions": [
        { "title": "Bạn thường xuyên cảm thấy khó chịu vì điều gì đó xảy ra bất ngờ như thế nào?" },
        { "title": "Bạn thường xuyên cảm thấy không thể kiểm soát những điều quan trọng trong cuộc sống như thế nào?" },
        { "title": "Bạn thường xuyên cảm thấy lo lắng và căng thẳng như thế nào?" },
        { "title": "Bạn thường xuyên đối phó thành công với những phiền toái trong cuộc sống như thế nào?" },
        { "title": "Bạn thường xuyên cảm thấy mình đang đối phó hiệu quả với những thay đổi quan trọng đang xảy ra trong cuộc sống như thế nào?" },
        { "title": "Bạn thường xuyên cảm thấy tự tin về khả năng xử lý các vấn đề cá nhân của mình như thế nào?" },
        { "title": "Bạn thường xuyên cảm thấy mọi việc diễn ra theo ý mình như thế nào?" },
        { "title": "Bạn thường xuyên thấy mình không thể đối phó với tất cả những việc bạn phải làm như thế nào?" },
        { "title": "Bạn thường xuyên có thể kiểm soát những điều khó chịu trong cuộc sống như thế nào?" },
        { "title": "Bạn thường xuyên cảm thấy mình đang kiểm soát mọi việc như thế nào?" }
      ],
      "results": {
        "minimal": { "label": "Thấp", "desc": "Mức độ căng thẳng nhận thức của bạn thấp. Tiếp tục với các chiến lược đối phó hiện tại của bạn." },
        "moderate": { "label": "Trung bình", "desc": "Mức độ căng thẳng nhận thức của bạn ở mức trung bình. Cân nhắc kết hợp các kỹ thuật quản lý căng thẳng." },
        "severe": { "label": "Cao", "desc": "Mức độ căng thẳng nhận thức của bạn cao. Khuyến nghị tìm kiếm hỗ trợ chuyên nghiệp và các kỹ thuật giảm căng thẳng." }
      }
    },
    "asrs": {
      "name": "ASRS v1.1",
      "abbr": "ASRS-v1.1",
      "fullName": "Thang đo Tự báo cáo ADHD Người lớn v1.1",
      "desc": "Công cụ sàng lọc các triệu chứng rối loạn tăng động giảm chú ý ở người lớn.",
      "instructions": "Trả lời các câu hỏi sau đây và nghĩ về cảm giác và hành vi của bạn trong 6 tháng qua.",
      "questions": [
        { "title": "Bạn thường khó hoàn thành các chi tiết cuối cùng của một dự án như thế nào, một khi các phần khó khăn đã được hoàn thành?" },
        { "title": "Bạn thường khó sắp xếp mọi thứ khi phải làm một nhiệm vụ đòi hỏi tổ chức như thế nào?" },
        { "title": "Bạn thường có vấn đề về việc nhớ các cuộc hẹn hoặc nghĩa vụ như thế nào?" },
        { "title": "Khi bạn có một nhiệm vụ đòi hỏi nhiều suy nghĩ, bạn thường tránh hoặc trì hoãn bắt đầu như thế nào?" },
        { "title": "Bạn thường ngọ nguậy hoặc cựa quậy tay chân khi phải ngồi lâu như thế nào?" },
        { "title": "Bạn thường cảm thấy quá hiếu động và bắt buộc phải làm việc, như thể bạn bị một động cơ thúc đẩy như thế nào?" }
      ],
      "results": {
        "minimal": { "label": "Không có khả năng", "desc": "Điểm số của bạn cho thấy khả năng thấp mắc ADHD." },
        "moderate": { "label": "Có thể", "desc": "Điểm số của bạn cho thấy một số triệu chứng phù hợp với ADHD. Cân nhắc đánh giá chuyên nghiệp." },
        "severe": { "label": "Có khả năng cao", "desc": "Điểm số của bạn cho thấy khả năng cao có các triệu chứng ADHD. Khuyến nghị đánh giá chuyên sâu bởi chuyên gia." }
      }
    },
    "ocir": {
      "name": "OCI-R",
      "abbr": "OCI-R",
      "fullName": "Bảng kiểm tra Ám ảnh-Cưỡng chế đã sửa đổi",
      "desc": "Đánh giá các triệu chứng của rối loạn ám ảnh cưỡng chế.",
      "instructions": "Các câu sau đây đề cập đến những trải nghiệm mà nhiều người có trong cuộc sống hàng ngày. Cho biết mức độ chúng đã làm phiền bạn trong tháng qua.",
      "questions": [
        { "title": "Tôi đã tích trữ quá nhiều thứ đến mức chúng cản trở" },
        { "title": "Tôi kiểm tra mọi thứ nhiều hơn mức cần thiết" },
        { "title": "Tôi khó chịu nếu đồ vật không được sắp xếp đúng cách" },
        { "title": "Tôi cảm thấy bị ép buộc phải đếm khi đang làm việc" },
        { "title": "Tôi thấy khó chạm vào một đồ vật khi biết nó đã được người lạ hoặc một số người nhất định chạm vào" },
        { "title": "Tôi thấy khó kiểm soát suy nghĩ của mình" },
        { "title": "Tôi thu thập những thứ tôi không cần" },
        { "title": "Tôi liên tục kiểm tra cửa, cửa sổ, ngăn kéo, v.v." },
        { "title": "Tôi khó chịu nếu người khác thay đổi cách tôi đã sắp xếp mọi thứ" },
        { "title": "Tôi cảm thấy mình phải lặp lại một số con số nhất định" },
        { "title": "Đôi khi tôi phải rửa hoặc làm sạch bản thân chỉ vì tôi cảm thấy bị nhiễm bẩn" },
        { "title": "Tôi bị khó chịu bởi những suy nghĩ khó chịu xâm nhập vào tâm trí tôi trái với ý muốn" },
        { "title": "Tôi tránh vứt bỏ mọi thứ vì sợ sau này tôi có thể cần đến chúng" },
        { "title": "Tôi liên tục kiểm tra ga, vòi nước và công tắc đèn sau khi đã tắt chúng" },
        { "title": "Tôi cần mọi thứ được sắp xếp theo một cách cụ thể" },
        { "title": "Tôi cảm thấy có những con số tốt và xấu" },
        { "title": "Tôi rửa tay thường xuyên và lâu hơn mức cần thiết" },
        { "title": "Tôi thường xuyên có những suy nghĩ tồi tệ và khó loại bỏ chúng" }
      ],
      "results": {
        "minimal": { "label": "Tối thiểu", "desc": "Điểm số của bạn cho thấy mức độ triệu chứng ám ảnh cưỡng chế tối thiểu." },
        "moderate": { "label": "Trung bình", "desc": "Điểm số của bạn cho thấy các triệu chứng ám ảnh cưỡng chế trung bình. Cân nhắc tham khảo ý kiến chuyên gia." },
        "severe": { "label": "Đáng kể", "desc": "Điểm số của bạn cho thấy các triệu chứng ám ảnh cưỡng chế đáng kể. Khuyến nghị đánh giá chuyên nghiệp." }
      }
    },
    "pcl5": {
      "name": "PCL-5",
      "abbr": "PCL-5",
      "fullName": "Danh sách kiểm tra PTSD cho DSM-5",
      "desc": "Đánh giá các triệu chứng rối loạn căng thẳng sau sang chấn trong tháng qua.",
      "instructions": "Dưới đây là danh sách các vấn đề mà đôi khi mọi người gặp phải để phản ứng với một trải nghiệm rất căng thẳng. Cho biết bạn đã bị làm phiền bởi vấn đề đó bao nhiêu trong tháng qua.",
      "questions": [
        { "title": "Những ký ức lặp đi lặp lại, gây phiền nhiễu và không mong muốn về trải nghiệm căng thẳng" },
        { "title": "Những giấc mơ lặp đi lặp lại, gây phiền nhiễu về trải nghiệm căng thẳng" },
        { "title": "Đột nhiên cảm thấy hoặc hành động như thể trải nghiệm căng thẳng đang thực sự xảy ra lại" },
        { "title": "Cảm thấy rất khó chịu khi có điều gì đó nhắc bạn về trải nghiệm căng thẳng" },
        { "title": "Có phản ứng cơ thể mạnh mẽ khi có điều gì đó nhắc bạn về trải nghiệm căng thẳng (ví dụ: tim đập mạnh, khó thở, đổ mồ hôi)" },
        { "title": "Tránh những ký ức, suy nghĩ hoặc cảm xúc liên quan đến trải nghiệm căng thẳng" },
        { "title": "Tránh những gợi nhớ bên ngoài về trải nghiệm căng thẳng (ví dụ: con người, địa điểm, cuộc trò chuyện, hoạt động, đồ vật hoặc tình huống)" },
        { "title": "Khó nhớ các phần quan trọng của trải nghiệm căng thẳng" },
        { "title": "Có niềm tin tiêu cực mạnh mẽ về bản thân, người khác hoặc thế giới" },
        { "title": "Đổ lỗi cho bản thân hoặc ai đó về trải nghiệm căng thẳng hoặc những gì xảy ra sau đó" },
        { "title": "Có cảm xúc tiêu cực mạnh mẽ như sợ hãi, kinh hoàng, tức giận, tội lỗi hoặc xấu hổ" },
        { "title": "Mất hứng thú với các hoạt động bạn từng thích" },
        { "title": "Cảm thấy xa cách hoặc tách biệt với người khác" },
        { "title": "Khó trải nghiệm cảm xúc tích cực" },
        { "title": "Hành vi cáu kỉnh, bùng nổ tức giận hoặc hành động hung hăng" },
        { "title": "Chấp nhận quá nhiều rủi ro hoặc làm những việc có thể gây hại cho bạn" },
        { "title": "Cực kỳ cảnh giác hoặc đề phòng hoặc cảnh giác" },
        { "title": "Cảm thấy giật mình hoặc dễ bị giật mình" },
        { "title": "Khó tập trung" },
        { "title": "Khó ngủ hoặc khó duy trì giấc ngủ" }
      ],
      "results": {
        "minimal": { "label": "Tối thiểu", "desc": "Điểm số của bạn cho thấy mức độ thấp các triệu chứng căng thẳng sau sang chấn." },
        "moderate": { "label": "Trung bình", "desc": "Điểm số của bạn cho thấy các triệu chứng căng thẳng sau sang chấn trung bình. Cân nhắc tham khảo ý kiến chuyên gia." },
        "severe": { "label": "Đáng kể", "desc": "Điểm số của bạn cho thấy các triệu chứng căng thẳng sau sang chấn đáng kể. Khuyến nghị tìm kiếm sự giúp đỡ chuyên nghiệp." }
      }
    },
    "bfi44": {
      "name": "BFI-44",
      "abbr": "BFI-44",
      "fullName": "Bảng kiểm tra Big Five-44",
      "desc": "Đánh giá năm chiều kích tính cách chính: Hướng ngoại, Dễ chịu, Tận tâm, Bất ổn cảm xúc và Cởi mở với Trải nghiệm.",
      "instructions": "Tôi thấy bản thân mình là người... Cho biết mức độ bạn đồng ý hoặc không đồng ý với từng câu.",
      "questions": [
        { "title": "Nói nhiều" },
        { "title": "Có xu hướng tìm lỗi ở người khác" },
        { "title": "Làm việc kỹ lưỡng" },
        { "title": "Trầm cảm, buồn bã" },
        { "title": "Độc đáo, có những ý tưởng mới" },
        { "title": "Kín đáo" },
        { "title": "Hữu ích và không ích kỷ với người khác" },
        { "title": "Có thể hơi cẩu thả" },
        { "title": "Thư giãn, xử lý căng thẳng tốt" },
        { "title": "Tò mò về nhiều thứ khác nhau" },
        { "title": "Tràn đầy năng lượng" },
        { "title": "Bắt đầu tranh cãi với người khác" },
        { "title": "Là một người lao động đáng tin cậy" },
        { "title": "Có thể căng thẳng" },
        { "title": "Khéo léo, một người suy nghĩ sâu sắc" },
        { "title": "Tạo ra nhiều nhiệt huyết" },
        { "title": "Có bản chất khoan dung" },
        { "title": "Có xu hướng thiếu tổ chức" },
        { "title": "Lo lắng nhiều" },
        { "title": "Có trí tưởng tượng tích cực" },
        { "title": "Có xu hướng trầm lặng" },
        { "title": "Nói chung là tin tưởng" },
        { "title": "Có xu hướng lười biếng" },
        { "title": "Ổn định cảm xúc, không dễ bị khó chịu" },
        { "title": "Sáng tạo" },
        { "title": "Có tính cách quả quyết" },
        { "title": "Có thể lạnh lùng và xa cách" },
        { "title": "Kiên trì cho đến khi nhiệm vụ hoàn thành" },
        { "title": "Có thể thay đổi tâm trạng" },
        { "title": "Đánh giá cao các trải nghiệm nghệ thuật, thẩm mỹ" },
        { "title": "Đôi khi nhút nhát, ức chế" },
        { "title": "Quan tâm và tử tế với hầu hết mọi người" },
        { "title": "Làm việc hiệu quả" },
        { "title": "Giữ bình tĩnh trong các tình huống căng thẳng" },
        { "title": "Thích công việc thường lệ" },
        { "title": "Hướng ngoại, hòa đồng" },
        { "title": "Đôi khi thô lỗ với người khác" },
        { "title": "Lập kế hoạch và thực hiện theo kế hoạch" },
        { "title": "Dễ dàng căng thẳng" },
        { "title": "Thích suy ngẫm, chơi với ý tưởng" },
        { "title": "Có ít sở thích nghệ thuật" },
        { "title": "Thích hợp tác với người khác" },
        { "title": "Dễ bị phân tâm" },
        { "title": "Tinh tế trong nghệ thuật, âm nhạc hoặc văn học" }
      ],
      "dimensionNames": {
        "E": "Hướng ngoại",
        "A": "Dễ chịu",
        "C": "Tận tâm",
        "N": "Bất ổn cảm xúc",
        "O": "Cởi mở với Trải nghiệm"
      },
      "dimensionDescs": {
        "E": {
          "low": "Bạn có xu hướng kín đáo, trầm lặng và thích các hoạt động đơn độc.",
          "mid": "Bạn thể hiện sự cân bằng giữa tính hòa đồng và nhu cầu ở một mình.",
          "high": "Bạn có xu hướng hòa đồng, tràn đầy năng lượng và thích tương tác với người khác."
        },
        "A": {
          "low": "Bạn có xu hướng cạnh tranh hơn và trực tiếp trong các tương tác của mình.",
          "mid": "Bạn thể hiện sự cân bằng giữa hợp tác và quả quyết.",
          "high": "Bạn có xu hướng hợp tác, nhân ái và quan tâm đến người khác."
        },
        "C": {
          "low": "Bạn có xu hướng linh hoạt và tự phát hơn trong cách tiếp cận của mình.",
          "mid": "Bạn thể hiện sự cân bằng giữa cấu trúc và linh hoạt.",
          "high": "Bạn có xu hướng có tổ chức, kỷ luật và hướng đến mục tiêu."
        },
        "N": {
          "low": "Bạn có xu hướng ổn định cảm xúc và bình tĩnh trong các tình huống căng thẳng.",
          "mid": "Bạn trải nghiệm một phạm vi cảm xúc tích cực và tiêu cực bình thường.",
          "high": "Bạn có xu hướng trải nghiệm nhiều cảm xúc tiêu cực hơn và nhạy cảm hơn với căng thẳng."
        },
        "O": {
          "low": "Bạn có xu hướng thích những điều thông thường và thực tế.",
          "mid": "Bạn thể hiện sự cân bằng giữa sự tò mò và sở thích thực tế.",
          "high": "Bạn có xu hướng sáng tạo, tò mò và cởi mở với những trải nghiệm mới."
        }
      }
    },
    "mbti": {
      "name": "MBTI",
      "abbr": "16P",
      "fullName": "Chỉ số tính cách Myers-Briggs",
      "desc": "Xác định các sở thích tính cách trên bốn chiều kích: Năng lượng, Nhận thức, Ra quyết định và Lối sống.",
      "instructions": "Chọn lựa chọn mô tả bạn nhất trong hầu hết các tình huống. Không có câu trả lời đúng hay sai.",
      "questions": [
        { "title": "Ở các buổi tụ tập xã hội, bạn thích tương tác với nhiều người, bao gồm cả người lạ" },
        { "title": "Bạn có xu hướng thực tế hơn là tưởng tượng" },
        { "title": "Tệ hơn là bất công hơn là nhẫn tâm" },
        { "title": "Bạn thường thích làm mọi thứ theo một kế hoạch đã được thiết lập" },
        { "title": "Sau khi dành thời gian với một nhóm, bạn cảm thấy tràn đầy năng lượng" },
        { "title": "Bạn thích tập trung vào các chi tiết cụ thể hơn là bức tranh lớn" },
        { "title": "Khi đưa ra quyết định, bạn xem xét cảm xúc của mọi người trước tiên" },
        { "title": "Bạn thích có mọi thứ đã được quyết định và ổn định" },
        { "title": "Bạn thích bắt đầu cuộc trò chuyện với người mới" },
        { "title": "Bạn tin tưởng kinh nghiệm hơn trực giác" },
        { "title": "Bạn coi trọng lòng trắc ẩn hơn sự thật khách quan" },
        { "title": "Bạn thích tuân theo một lịch trình nghiêm ngặt" },
        { "title": "Bạn thấy dễ dàng nói chuyện với người lạ" },
        { "title": "Bạn chú ý nhiều hơn đến những gì thực tế và hiện tại hơn là những gì có thể xảy ra" },
        { "title": "Bạn quan tâm đến sự hài hòa nhóm hơn là kết quả khách quan" },
        { "title": "Bạn thích hoàn thành một dự án trước khi bắt đầu một dự án khác" },
        { "title": "Bạn cần thời gian một mình để nạp lại năng lượng" },
        { "title": "Bạn thích suy nghĩ về các khái niệm và lý thuyết trừu tượng" },
        { "title": "Khi giải quyết vấn đề, bạn ưu tiên logic hơn cảm xúc" },
        { "title": "Bạn thích giữ các lựa chọn mở hơn là cam kết" },
        { "title": "Trong thời gian rảnh, bạn thích ở bên bạn bè" },
        { "title": "Bạn quan tâm đến các khả năng tương lai hơn là các sự kiện hiện tại" },
        { "title": "Bạn thích đưa ra quyết định dựa trên nguyên tắc logic" },
        { "title": "Bạn cảm thấy thoải mái hơn với cấu trúc và thói quen" },
        { "title": "Bạn là linh hồn của bữa tiệc" },
        { "title": "Bạn bị thu hút nhiều hơn bởi ý nghĩa biểu tượng hơn là sự thật theo nghĩa đen" },
        { "title": "Trong một xung đột, bạn tìm kiếm giải pháp công bằng nhất ngay cả khi ai đó bị khó chịu" },
        { "title": "Bạn thích lên kế hoạch cho kỳ nghỉ của mình trước và chi tiết" },
        { "title": "Bạn cảm thấy thoải mái khi là trung tâm của sự chú ý" },
        { "title": "Bạn thích khám phá ý tưởng mới hơn là áp dụng các phương pháp đã được chứng minh" },
        { "title": "Bạn có xu hướng quyết định bằng đầu thay vì bằng trái tim" },
        { "title": "Bạn thích sự tự phát hơn lập kế hoạch" },
        { "title": "Bạn thấy kiệt sức khi dành nhiều thời gian ở một mình" },
        { "title": "Bạn thích học các khái niệm lý thuyết trước khi xem các ví dụ thực tế" },
        { "title": "Bạn coi trọng ngoại giao hơn là sự thẳng thắn" },
        { "title": "Bạn cảm thấy không thoải mái khi kế hoạch thay đổi đột ngột" },
        { "title": "Bạn nói nhiều hơn nghe trong các cuộc trò chuyện" },
        { "title": "Bạn tin tưởng vào linh cảm và trực giác của mình" },
        { "title": "Bạn coi trọng hiệu quả hơn hợp tác" },
        { "title": "Bạn thích ứng biến và thích nghi ngay lập tức" }
      ],
      "typeDescriptions": {
        "ISTJ": "Trách nhiệm và đáng tin cậy. Bạn coi trọng truyền thống, lòng trung thành và trật tự. Bạn kỹ lưỡng và làm việc ổn định để hoàn thành nhiệm vụ.",
        "ISFJ": "Bảo vệ và tận tụy. Bạn tốt bụng, có trách nhiệm và chú ý đến nhu cầu của người khác. Bạn coi trọng sự hài hòa và ổn định.",
        "INFJ": "Lý tưởng và có tầm nhìn. Bạn có hiểu biết sâu sắc về con người và mong muốn mạnh mẽ giúp người khác đạt được tiềm năng của họ.",
        "INTJ": "Chiến lược và độc lập. Bạn có tư duy phân tích và tầm nhìn rõ ràng về cách cải thiện mọi việc. Bạn coi trọng năng lực và kiến thức.",
        "ISTP": "Thực tế và quan sát. Bạn thích hiểu cách mọi thứ hoạt động và giải quyết vấn đề hiệu quả.",
        "ISFP": "Nghệ thuật và nhạy cảm. Bạn coi trọng sự chân thật và hài hòa. Bạn thích cái đẹp và có cảm nhận thẩm mỹ mạnh mẽ.",
        "INFP": "Lý tưởng và đồng cảm. Bạn có giá trị cá nhân mạnh mẽ và mong muốn làm cho thế giới tốt đẹp hơn.",
        "INTP": "Logic và sáng tạo. Bạn thích phân tích các hệ thống phức tạp và tạo ra những ý tưởng đổi mới.",
        "ESTP": "Tràn đầy năng lượng và thực tế. Bạn thích hành động và sống trong hiện tại. Bạn giỏi giải quyết các vấn đề thực tế.",
        "ESFP": "Tự phát và nhiệt tình. Bạn thích cuộc sống và lan tỏa niềm vui của bạn cho người khác. Bạn hào phóng và lạc quan.",
        "ENFP": "Nhiệt tình và sáng tạo. Bạn nhìn thấy khả năng ở khắp mọi nơi và có năng lượng truyền cảm hứng cho người khác.",
        "ENTP": "Đổi mới và thách thức. Bạn thích tranh luận trí tuệ và không ngừng tìm kiếm ý tưởng và khả năng mới.",
        "ESTJ": "Có tổ chức và quyết đoán. Bạn coi trọng hiệu quả và trật tự. Bạn là một nhà lãnh đạo và quản lý tự nhiên.",
        "ESFJ": "Hòa đồng và hữu ích. Bạn quan tâm sâu sắc đến người khác và làm việc để tạo ra sự hài hòa trong môi trường của bạn.",
        "ENFJ": "Lôi cuốn và đồng cảm. Bạn truyền cảm hứng cho người khác và có khả năng lãnh đạo tự nhiên với lòng trắc ẩn.",
        "ENTJ": "Nhà lãnh đạo và chiến lược gia bẩm sinh. Bạn quyết đoán, hiệu quả và thích các thách thức tổ chức và lãnh đạo."
      }
    },
    "phq9": {
      "name": "PHQ-9",
      "abbr": "PHQ-9",
      "fullName": "Bảng câu hỏi sức khỏe bệnh nhân-9",
      "desc": "Sàng lọc trầm cảm nhanh được sử dụng rộng rãi trong chăm sóc ban đầu. 9 câu hỏi.",
      "instructions": "Trong 2 tuần qua, bạn thường bị làm phiền bởi bất kỳ vấn đề nào sau đây như thế nào?",
      "sharedOptions": ["Không hề","Một vài ngày","Hơn một nửa số ngày","Gần như mỗi ngày"],
      "questions": [
        { "title": "Ít hứng thú hoặc niềm vui khi làm việc" },
        { "title": "Cảm thấy chán nản, trầm cảm hoặc vô vọng" },
        { "title": "Khó ngủ hoặc khó duy trì giấc ngủ, hoặc ngủ quá nhiều" },
        { "title": "Cảm thấy mệt mỏi hoặc có ít năng lượng" },
        { "title": "Ăn kém ngon miệng hoặc ăn quá nhiều" },
        { "title": "Cảm thấy tồi tệ về bản thân" },
        { "title": "Khó tập trung vào mọi thứ" },
        { "title": "Di chuyển hoặc nói chậm đến mức người khác chú ý, hoặc ngược lại" },
        { "title": "Suy nghĩ rằng bạn sẽ tốt hơn nếu chết, hoặc làm hại bản thân bằng cách nào đó" }
      ],
      "results": {
        "minima": { "label": "Tối thiểu", "desc": "Không phát hiện triệu chứng trầm cảm đáng kể. Tiếp tục chăm sóc sức khỏe cảm xúc của bạn." },
        "leve": { "label": "Nhẹ", "desc": "Phát hiện các triệu chứng trầm cảm nhẹ. Cân nhắc theo dõi tâm trạng và áp dụng thói quen lành mạnh." },
        "moderada": { "label": "Trung bình", "desc": "Phát hiện các triệu chứng trầm cảm trung bình. Khuyến nghị tham khảo ý kiến chuyên gia sức khỏe tâm thần." },
        "moderadamente_grave": {
          "label": "Trung bình nặng",
          "desc": "Phát hiện các triệu chứng trầm cảm trung bình nặng. Điều quan trọng là tìm kiếm sự giúp đỡ chuyên nghiệp càng sớm càng tốt."
        },
        "grave": { "label": "Nặng", "desc": "Phát hiện các triệu chứng trầm cảm nặng. Khuyến nghị tìm kiếm sự chú ý chuyên nghiệp khẩn cấp." }
      }
    },
    "audit": {
      "name": "AUDIT",
      "abbr": "AUDIT",
      "fullName": "Bài kiểm tra nhận dạng rối loạn sử dụng rượu",
      "desc": "Được phát triển bởi WHO để phát hiện tiêu thụ rượu có vấn đề.",
      "instructions": "Trả lời các câu hỏi sau về mức tiêu thụ rượu của bạn. Hãy trung thực nhất có thể.",
      "questions": [
        {
          "title": "Bạn thường xuyên uống đồ uống có cồn như thế nào?",
          "options": ["Không bao giờ","Một lần một tháng hoặc ít hơn","2 đến 4 lần một tháng","2 đến办公3 lần một tuần","4 lần trở lên một tuần"]
        },
        {
          "title": "Bạn thường uống bao nhiêu ly tiêu chuẩn có chứa cồn vào một ngày điển hình khi bạn uống rượu?",
          "options": ["1 hoặc 2","3 hoặc 4","5 hoặc 6","7 đến 9","10 trở lên"]
        },
        {
          "title": "Bạn thường xuyên uống sáu ly tiêu chuẩn trở lên trong một dịp như thế nào?",
          "options": ["Không bao giờ","Ít hơn hàng tháng","Hàng tháng","Hàng tuần","Hàng ngày hoặc gần như hàng ngày"]
        },
        {
          "title": "Trong năm qua, bạn thường thấy mình không thể ngừng uống một khi đã bắt đầu như thế nào?",
          "options": ["Không bao giờ","Ít hơn hàng tháng","Hàng tháng","Hàng tuần","Hàng ngày hoặc gần như hàng ngày"]
        },
        {
          "title": "Trong năm qua, bạn thường thất bại trong việc thực hiện những gì bình thường được mong đợi từ bạn do uống rượu như thế nào?",
          "options": ["Không bao giờ","Ít hơn hàng tháng","Hàng tháng","Hàng tuần","Hàng ngày hoặc gần như hàng ngày"]
        },
        {
          "title": "Trong năm qua, bạn thường cần một ly rượu đầu tiên vào buổi sáng để bắt đầu sau một buổi uống nặng như thế nào?",
          "options": ["Không bao giờ","Ít hơn hàng tháng","Hàng tháng","Hàng tuần","Hàng ngày hoặc gần như hàng ngày"]
        },
        {
          "title": "Trong năm qua, bạn thường có cảm giác tội lỗi hoặc hối hận sau khi uống rượu như thế nào?",
          "options": ["Không bao giờ","Ít hơn hàng tháng","Hàng tháng","Hàng tuần","Hàng ngày hoặc gần như hàng ngày"]
        },
        {
          "title": "Trong năm qua, bạn thường không thể nhớ chuyện gì đã xảy ra đêm trước vì bạn đã uống rượu như thế nào?",
          "options": ["Không bao giờ","Ít hơn hàng tháng","Hàng tháng","Hàng tuần","Hàng ngày hoặc gần như hàng ngày"]
        },
        {
          "title": "Bạn hoặc người khác đã từng bị thương vì bạn uống rượu?",
          "options": ["Không","Có, nhưng không phải trong năm qua","Có, trong năm qua"]
        },
        {
          "title": "Một người thân, bạn bè, bác sĩ hoặc nhân viên y tế khác đã từng lo lắng về việc uống rượu của bạn hoặc đề nghị bạn cắt giảm?",
          "options": ["Không","Có, nhưng không phải trong năm qua","Có, trong năm qua"]
        }
      ],
      "results": {
        "bajo_riesgo": { "label": "Rủi ro thấp", "desc": "Mức tiêu thụ rượu của bạn nằm trong giới hạn rủi ro thấp. Duy trì thói quen lành mạnh." },
        "riesgo_moderado": {
          "label": "Rủi ro trung bình",
          "desc": "Mức tiêu thụ rượu của bạn thể hiện một rủi ro trung bình. Cân nhắc giảm mức tiêu thụ và tham khảo ý kiến chuyên gia."
        },
        "riesgo_alto": { "label": "Rủi ro cao", "desc": "Mức tiêu thụ rượu của bạn thể hiện một rủi ro cao. Khuyến nghị tìm kiếm hướng dẫn chuyên nghiệp để giảm tiêu thụ." },
        "posible_dependencia": { "label": "Có thể phụ thuộc", "desc": "Kết quả gợi ý một sự phụ thuộc rượu có thể. Điều quan trọng là tìm kiếm sự giúp đỡ chuyên nghiệp chuyên sâu." }
      }
    },
    "isi": {
      "name": "ISI",
      "abbr": "ISI",
      "fullName": "Chỉ số mức độ nghiêm trọng mất ngủ",
      "desc": "Đánh giá bản chất, mức độ nghiêm trọng và tác động của mất ngủ trong hai tuần qua.",
      "instructions": "Đánh giá mức độ nghiêm trọng của các vấn đề giấc ngủ của bạn trong 2 tuần qua.",
      "questions": [
        {
          "title": "Khó ngủ",
          "options": ["Không","Nhẹ","Trung bình","Nặng","Rất nặng"]
        },
        {
          "title": "Khó duy trì giấc ngủ",
          "options": ["Không","Nhẹ","Trung bình","Nặng","Rất nặng"]
        },
        {
          "title": "Thức dậy quá sớm vào buổi sáng",
          "options": ["Không","Nhẹ","Trung bình","Nặng","Rất nặng"]
        },
        {
          "title": "Bạn hài lòng với kiểu ngủ hiện tại của mình như thế nào?",
          "options": ["Rất hài lòng","Hài lòng","Hài lòng vừa phải","Không hài lòng","Rất không hài lòng"]
        },
        {
          "title": "Mức độ bạn nhận thấy vấn đề giấc ngủ của mình ảnh hưởng đến hoạt động hàng ngày của bạn như thế nào?",
          "options": ["Không hề","Một chút","Ở mức độ nào đó","Nhiều","Rất nhiều"]
        },
        {
          "title": "Mức độ bạn nghĩ người khác nhận thấy vấn đề giấc ngủ của bạn ảnh hưởng đến chất lượng cuộc sống của bạn như thế nào?",
          "options": ["Không hề","Một chút","Ở mức độ nào đó","Nhiều","Rất nhiều"]
        },
        {
          "title": "Bạn lo lắng về vấn đề giấc ngủ hiện tại của mình như thế nào?",
          "options": ["Không hề","Một chút","Ở mức độ nào đó","Nhiều","Rất nhiều"]
        }
      ],
      "results": {
        "sin_insomnio": { "label": "Không mất ngủ lâm sàng", "desc": "Không phát hiện vấn đề mất ngủ lâm sàng. Giấc ngủ của bạn dường như trong thông số bình thường." },
        "subclinico": {
          "label": "Mất ngủ cận lâm sàng",
          "desc": "Phát hiện một số triệu chứng mất ngủ, nhưng chúng không đạt mức lâm sàng. Cân nhắc cải thiện vệ sinh giấc ngủ của bạn."
        },
        "clinico_moderado": { "label": "Mất ngủ lâm sàng trung bình", "desc": "Phát hiện mất ngủ lâm sàng mức độ trung bình. Khuyến nghị tham khảo ý kiến chuyên gia chăm sóc sức khỏe." },
        "clinico_grave": {
          "label": "Mất ngủ lâm sàng nặng",
          "desc": "Phát hiện mất ngủ lâm sàng nặng. Điều quan trọng là tìm kiếm sự chăm sóc chuyên nghiệp để giải quyết các vấn đề giấc ngủ."
        }
      }
    },
    "eat26": {
      "name": "EAT-26",
      "abbr": "EAT-26",
      "fullName": "Bài kiểm tra thái độ ăn uống-26",
      "desc": "Phát hiện thái độ và hành vi đặc trưng của rối loạn ăn uống.",
      "instructions": "Cho biết bạn thường xuyên thể hiện mỗi thái độ hoặc hành vi sau đây như thế nào. Trả lời trung thực.",
      "sharedOptions": ["Không bao giờ","Hiếm khi","Đôi khi","Thường xuyên","Rất thường xuyên","Luôn luôn"],
      "questions": [
        { "title": "Tôi hoảng sợ về việc thừa cân" },
        { "title": "Tôi tránh ăn khi tôi đói" },
        { "title": "Tôi lo lắng về thức ăn" },
        { "title": "Tôi đã có những lần ăn uống mất kiểm soát mà tôi cảm thấy không thể ngừng ăn" },
        { "title": "Tôi cắt thức ăn thành những miếng nhỏ" },
        { "title": "Tôi biết lượng calo của các thực phẩm tôi ăn" },
        { "title": "Tôi đặc biệt tránh các thực phẩm nhiều carbohydrate" },
        { "title": "Tôi cảm thấy người khác muốn tôi ăn nhiều hơn" },
        { "title": "Tôi nôn sau khi ăn" },
        { "title": "Tôi cảm thấy cực kỳ tội lỗi sau khi ăn" },
        { "title": "Tôi bận tâm với mong muốn gầy hơn" },
        { "title": "Tôi nghĩ về việc đốt cháy calo khi tập thể dục" },
        { "title": "Người khác nghĩ tôi quá gầy" },
        { "title": "Tôi bận tâm với suy nghĩ có mỡ trên cơ thể" },
        { "title": "Tôi mất nhiều thời gian hơn người khác để ăn bữa của mình" },
        { "title": "Tôi tránh thực phẩm có đường" },
        { "title": "Tôi ăn thực phẩm ăn kiêng" },
        { "title": "Tôi cảm thấy thức ăn kiểm soát cuộc sống của tôi" },
        { "title": "Tôi thể hiện sự tự kiểm soát xung quanh thức ăn" },
        { "title": "Tôi cảm thấy người khác gây áp lực cho tôi ăn" },
        { "title": "Tôi dành quá nhiều thời gian và suy nghĩ cho thức ăn" },
        { "title": "Tôi cảm thấy không thoải mái sau khi ăn đồ ngọt" },
        { "title": "Tôi đang ăn kiêng" },
        { "title": "Tôi thích bụng mình trống rỗng" },
        { "title": "Tôi thích thử các món ăn mới và phong phú" },
        { "title": "Tôi có sự thôi thúc nôn sau bữa ăn" }
      ],
      "results": {
        "bajo_riesgo": { "label": "Rủi ro thấp", "desc": "Không phát hiện thái độ ăn uống có nguy cơ đáng kể. Duy trì mối quan hệ lành mạnh với thức ăn." },
        "riesgo_significativo": {
          "label": "Rủi ro đáng kể",
          "desc": "Phát hiện các thái độ ăn uống có thể chỉ ra một rối loạn ăn uống. Khuyến nghị tham khảo ý kiến chuyên gia chăm sóc sức khỏe chuyên sâu."
        }
      }
    },
    "mdq": {
      "name": "MDQ",
      "abbr": "MDQ",
      "fullName": "Bảng câu hỏi rối loạn tâm trạng",
      "desc": "Công cụ sàng lọc nhanh cho rối loạn lưỡng cực và phổ lưỡng cực.",
      "instructions": "Trả lời các câu hỏi sau về trải nghiệm bạn có thể đã có tại một thời điểm nào đó trong cuộc đời.",
      "questions": [
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn cảm thấy tốt hoặc phấn khích đến mức người khác nghĩ bạn không phải là chính mình?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn cáu kỉnh đến mức bạn hét vào mặt người khác hoặc bắt đầu gây gổ?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn cảm thấy tự tin hơn nhiều so với bình thường?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn ngủ ít hơn nhiều so với bình thường và không cảm thấy thiếu?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn nói nhiều hơn hoặc nói nhanh hơn bình thường?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà suy nghĩ chạy đua trong tâm trí bạn?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn dễ bị phân tâm đến mức khó tập trung?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn có nhiều năng lượng hơn nhiều so với bình thường?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn hoạt động nhiều hơn hoặc làm nhiều việc hơn bình thường?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn hòa đồng hơn nhiều so với bình thường?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn quan tâm đến tình dục nhiều hơn nhiều so với bình thường?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn làm những việc không bình thường đối với bạn hoặc mà người khác coi là quá mức hoặc rủi ro?",
          "options": ["Không","Có"]
        },
        {
          "title": "Bạn đã bao giờ có một giai đoạn mà bạn tiêu tiền theo cách gây ra vấn đề cho bạn hoặc gia đình bạn?",
          "options": ["Không","Có"]
        },
        {
          "title": "Một số trong những trải nghiệm này đã xảy ra trong cùng một khoảng thời gian?",
          "options": ["Không","Có"]
        },
        {
          "title": "Nếu bạn trả lời CÓ cho bất kỳ câu hỏi nào trước đó, chúng gây ra vấn đề cho bạn như thế nào?",
          "options": ["Không có vấn đề","Vấn đề nhỏ","Vấn đề trung bình","Vấn đề nặng"]
        }
      ],
      "results": {
        "positive": {
          "label": "Sàng lọc dương tính cho rối loạn lưỡng cực",
          "desc": "Phản ứng của bạn gợi ý khả năng của một rối loạn phổ lưỡng cực. Kết quả này KHÔNG phải là chẩn đoán. Đánh giá chuyên sâu bởi bác sĩ tâm thần được khuyến nghị mạnh mẽ."
        },
        "negative": {
          "label": "Sàng lọc âm tính",
          "desc": "Phản ứng của bạn không gợi ý sự hiện diện của một rối loạn phổ lưỡng cực theo công cụ sàng lọc này. Hãy nhớ rằng bảng câu hỏi này chỉ là công cụ sàng lọc và không thay thế đánh giá chuyên nghiệp."
        }
      }
    },
    "spin": {
      "name": "SPIN",
      "abbr": "SPIN",
      "fullName": "Bảng kiểm tra ám ảnh xã hội",
      "desc": "Đánh giá sự hiện diện và mức độ nghiêm trọng của các triệu chứng lo âu xã hội.",
      "instructions": "Cho biết các vấn đề sau đây đã làm phiền bạn bao nhiêu trong tuần qua.",
      "sharedOptions": ["Không hề","Một chút","Ở mức độ nào đó","Nhiều","Cực kỳ"],
      "questions": [
        { "title": "Tôi sợ người có quyền lực." },
        { "title": "Đỏ mặt trước mặt người khác làm tôi phiền lòng." },
        { "title": "Tiệc tùng và sự kiện xã hội làm tôi sợ hãi." },
        { "title": "Tôi tránh nói chuyện với người lạ." },
        { "title": "Tôi rất sợ bị chỉ trích." },
        { "title": "Nỗi sợ cảm thấy xấu hổ làm tôi tránh làm việc hoặc nói chuyện với mọi người." },
        { "title": "Đổ mồ hôi trước mặt người khác gây ra đau khổ cho tôi." },
        { "title": "Tôi tránh đi dự tiệc." },
        { "title": "Tôi tránh các hoạt động nơi tôi là trung tâm của sự chú ý." },
        { "title": "Nói chuyện với người lạ làm tôi sợ hãi." },
        { "title": "Tôi sợ phải nói trước công chúng." },
        { "title": "Tôi sẽ làm bất cứ điều gì để tránh bị chỉ trích." },
        { "title": "Tim đập nhanh làm tôi phiền lòng khi ở bên người." },
        { "title": "Tôi sợ làm việc khi mọi người có thể đang quan sát tôi." },
        { "title": "Nỗi sợ lớn nhất của tôi là bị xấu hổ hoặc làm mình trông ngu ngốc." },
        { "title": "Tôi tránh nói chuyện với bất cứ ai có quyền lực." },
        { "title": "Run rẩy hoặc rung lắc trước mặt người khác gây ra đau khổ cho tôi." }
      ],
      "results": {
        "low": { "label": "Lo âu xã hội thấp", "desc": "Điểm số của bạn chỉ ra mức độ lo âu xã hội thấp." },
        "mild": { "label": "Lo âu xã hội nhẹ", "desc": "Điểm số của bạn gợi ý mức độ lo âu xã hội nhẹ." },
        "moderate": {
          "label": "Lo âu xã hội trung bình",
          "desc": "Điểm số của bạn chỉ ra mức độ lo âu xã hội trung bình. Bạn có thể được hưởng lợi từ việc tìm kiếm hỗ trợ chuyên nghiệp."
        },
        "severe": { "label": "Lo âu xã hội nặng", "desc": "Điểm số của bạn gợi ý mức độ lo âu xã hội nặng. Khuyến nghị tìm kiếm sự giúp đỡ chuyên nghiệp." },
        "very_severe": {
          "label": "Lo âu xã hội rất nặng",
          "desc": "Điểm số của bạn chỉ ra mức độ lo âu xã hội rất nặng. Khuyến nghị mạnh mẽ tìm kiếm sự giúp đỡ chuyên nghiệp."
        }
      }
    },
    "rosenberg": {
      "name": "RSE",
      "abbr": "RSE",
      "fullName": "Thang đo Lòng tự trọng Rosenberg",
      "desc": "Phép đo lòng tự trọng toàn cầu được sử dụng rộng rãi nhất. Nó đánh giá cảm giác về giá trị bản thân.",
      "instructions": "Cho biết mức độ đồng ý của bạn với từng câu sau đây.",
      "sharedOptions": ["Hoàn toàn không đồng ý","Không đồng ý","Đồng ý","Hoàn toàn đồng ý"],
      "questions": [
        { "title": "Tôi cảm thấy mình là một người có giá trị, ít nhất là ngang bằng với người khác." },
        { "title": "Tôi cảm thấy mình có những phẩm chất tích cực." },
        { "title": "Nhìn chung, tôi có xu hướng cảm thấy mình là một kẻ thất bại." },
        { "title": "Tôi có thể làm mọi việc tốt như hầu hết người khác." },
        { "title": "Tôi cảm thấy tôi không có nhiều điều để tự hào." },
        { "title": "Tôi có thái độ tích cực đối với bản thân." },
        { "title": "Nhìn chung, tôi hài lòng với bản thân." },
        { "title": "Tôi ước tôi có thể tôn trọng bản thân nhiều hơn." },
        { "title": "Đôi khi tôi cảm thấy thực sự vô dụng." },
        { "title": "Đôi khi tôi nghĩ tôi chẳng tốt đẹp gì." }
      ],
      "results": {
        "low": { "label": "Lòng tự trọng thấp", "desc": "Điểm số của bạn gợi ý mức độ lòng tự trọng thấp. Hỗ trợ chuyên nghiệp được khuyến nghị." },
        "normal": { "label": "Lòng tự trọng bình thường", "desc": "Điểm số của bạn chỉ ra mức độ lòng tự trọng bình thường và lành mạnh." },
        "high": { "label": "Lòng tự trọng cao", "desc": "Điểm số của bạn chỉ ra mức độ lòng tự trọng cao." }
      }
    },
    "who5": {
      "name": "WHO-5",
      "abbr": "WHO-5",
      "fullName": "Chỉ số hạnh phúc WHO-5",
      "desc": "Một phép đo ngắn về hạnh phúc cảm xúc được phát triển bởi WHO. Chỉ 5 câu hỏi.",
      "instructions": "Cho biết bạn đã cảm thấy như thế nào trong hai tuần qua.",
      "sharedOptions": [
        "Không lúc nào",
        "Một số thời gian",
        "Ít hơn một nửa thời gian",
        "Hơn một nửa thời gian",
        "Hầu hết thời gian",
        "Tất cả thời gian"
      ],
      "questions": [
        { "title": "Tôi đã cảm thấy vui vẻ và tinh thần tốt." },
        { "title": "Tôi đã cảm thấy bình tĩnh và thư giãn." },
        { "title": "Tôi đã cảm thấy năng động và tràn đầy sinh lực." },
        { "title": "Tôi đã thức dậy cảm thấy tươi mới và nghỉ ngơi." },
        { "title": "Cuộc sống hàng ngày của tôi đã đầy những thứ khiến tôi quan tâm." }
      ],
      "results": {
        "low": { "label": "Hạnh phúc thấp", "desc": "Chỉ ra mức độ hạnh phúc cảm xúc thấp. Đánh giá chuyên nghiệp được khuyến nghị." },
        "reduced": { "label": "Hạnh phúc giảm", "desc": "Chỉ ra hạnh phúc cảm xúc bị giảm. Cân nhắc nói chuyện với chuyên gia sức khỏe tâm thần." },
        "moderate": { "label": "Hạnh phúc trung bình", "desc": "Chỉ ra mức độ hạnh phúc cảm xúc trung bình." },
        "high": { "label": "Hạnh phúc cao", "desc": "Chỉ ra mức độ hạnh phúc cảm xúc cao." }
      }
    },
    "aq10": {
      "name": "AQ-10",
      "abbr": "AQ-10",
      "fullName": "Chỉ số Phổ Tự kỷ — 10 mục",
      "desc": "Sàng lọc ngắn cho các đặc điểm liên quan đến phổ tự kỷ. Được phát triển bởi Baron-Cohen và cộng sự.",
      "instructions": "Đọc kỹ từng câu và cho biết mức độ đồng ý hoặc không đồng ý của bạn.",
      "sharedOptions": [
            "Chắc chắn đồng ý",
            "Hơi đồng ý",
            "Hơi không đồng ý",
            "Chắc chắn không đồng ý"
      ],
      "questions": [
            {
                  "title": "Tôi thường nhận thấy những âm thanh nhỏ khi người khác không"
            },
            {
                  "title": "Khi đọc một câu chuyện, tôi thấy khó hiểu ý định của các nhân vật"
            },
            {
                  "title": "Tôi thấy dễ 'đọc giữa các dòng' khi ai đó nói chuyện với tôi"
            },
            {
                  "title": "Tôi thường tập trung vào bức tranh tổng thể hơn là các chi tiết nhỏ"
            },
            {
                  "title": "Tôi biết cách nhận biết liệu người nghe tôi có đang chán không"
            },
            {
                  "title": "Tôi thấy dễ làm nhiều hơn một việc cùng lúc"
            },
            {
                  "title": "Tôi thấy dễ hiểu ai đó đang nghĩ hoặc cảm thấy gì chỉ bằng cách nhìn vào mặt họ"
            },
            {
                  "title": "Nếu có gián đoạn, tôi có thể quay lại việc đang làm rất nhanh"
            },
            {
                  "title": "Tôi thích thu thập thông tin về các loại sự vật"
            },
            {
                  "title": "Tôi thấy khó hiểu ý định của mọi người"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Ít đặc điểm tự kỷ",
                  "desc": "Điểm số của bạn không gợi ý các đặc điểm phổ tự kỷ đáng kể. Tuy nhiên, nếu bạn có lo ngại, hãy tham khảo ý kiến chuyên gia."
            },
            "moderado": {
                  "label": "Một số đặc điểm tự kỷ",
                  "desc": "Điểm số của bạn chỉ ra một số đặc điểm liên quan đến phổ tự kỷ, mặc dù dưới ngưỡng giới thiệu lâm sàng (≥6)."
            },
            "alto": {
                  "label": "Đặc điểm tự kỷ đáng kể",
                  "desc": "Điểm số của bạn vượt quá ngưỡng giới thiệu (≥6). Khuyến nghị đánh giá chẩn đoán toàn diện với chuyên gia chuyên sâu."
            },
            "muy_alto": {
                  "label": "Đặc điểm tự kỷ rất đáng kể",
                  "desc": "Điểm số của bạn cao. Khuyến nghị mạnh mẽ tìm kiếm đánh giá chẩn đoán toàn diện với chuyên gia về rối loạn phổ tự kỷ."
            }
      }
},
    "aq50": {
      "name": "AQ-50",
      "abbr": "AQ-50",
      "fullName": "Chỉ số Phổ Tự kỷ — 50 mục",
      "desc": "Đánh giá toàn diện về các đặc điểm phổ tự kỷ trên năm lĩnh vực: kỹ năng xã hội, chuyển sự chú ý, chú ý chi tiết, giao tiếp và trí tưởng tượng.",
      "instructions": "Đọc kỹ từng câu và cho biết mức độ đồng ý hoặc không đồng ý của bạn. Không có câu trả lời đúng hay sai.",
      "questions": [
            {
                  "title": "Tôi thích làm mọi việc với người khác hơn là một mình"
            },
            {
                  "title": "Tôi thích làm mọi việc theo cùng một cách lặp đi lặp lại"
            },
            {
                  "title": "Nếu cố tưởng tượng điều gì đó, tôi thấy rất dễ tạo ra một hình ảnh trong tâm trí"
            },
            {
                  "title": "Tôi thường bị thu hút mạnh mẽ vào một việc đến mức mất tầm nhìn về những việc khác"
            },
            {
                  "title": "Tôi thường nhận thấy những âm thanh nhỏ khi người khác không"
            },
            {
                  "title": "Tôi thường chú ý đến biển số xe hoặc các chuỗi thông tin tương tự"
            },
            {
                  "title": "Người khác thường nói với tôi rằng những gì tôi nói là bất lịch sự, mặc dù tôi nghĩ nó là lịch sự"
            },
            {
                  "title": "Khi đọc một câu chuyện, tôi có thể dễ dàng tưởng tượng các nhân vật có thể trông như thế nào"
            },
            {
                  "title": "Tôi bị mê hoặc bởi ngày tháng"
            },
            {
                  "title": "Trong một nhóm xã hội, tôi có thể dễ dàng theo dõi nhiều cuộc trò chuyện của những người khác nhau"
            },
            {
                  "title": "Tôi thấy các tình huống xã hội dễ dàng"
            },
            {
                  "title": "Tôi có xu hướng chú ý đến các chi tiết mà người khác không"
            },
            {
                  "title": "Tôi thà đến thư viện hơn là một bữa tiệc"
            },
            {
                  "title": "Tôi thấy dễ dàng tạo ra những câu chuyện"
            },
            {
                  "title": "Tôi thấy mình bị thu hút mạnh mẽ hơn bởi con người hơn là đồ vật"
            },
            {
                  "title": "Tôi có xu hướng có những sở thích rất mạnh mẽ mà tôi thấy khó chịu nếu không thể theo đuổi"
            },
            {
                  "title": "Tôi thích tán gẫu xã hội"
            },
            {
                  "title": "Khi tôi nói, không phải lúc nào cũng dễ dàng để người khác chen vào lời"
            },
            {
                  "title": "Tôi bị mê hoặc bởi các con số"
            },
            {
                  "title": "Khi đọc một câu chuyện, tôi thấy khó hiểu ý định của các nhân vật"
            },
            {
                  "title": "Tôi không đặc biệt thích đọc tiểu thuyết"
            },
            {
                  "title": "Tôi thấy khó kết bạn mới"
            },
            {
                  "title": "Tôi nhận thấy các mẫu trong mọi thứ suốt thời gian"
            },
            {
                  "title": "Tôi thà đến nhà hát hơn là viện bảo tàng"
            },
            {
                  "title": "Tôi không khó chịu nếu thói quen hàng ngày của tôi bị xáo trộn"
            },
            {
                  "title": "Tôi thường thấy mình không biết cách duy trì cuộc trò chuyện"
            },
            {
                  "title": "Tôi thấy dễ 'đọc giữa các dòng' khi ai đó nói chuyện với tôi"
            },
            {
                  "title": "Tôi thường tập trung vào bức tranh tổng thể hơn là các chi tiết nhỏ"
            },
            {
                  "title": "Tôi không giỏi nhớ số điện thoại"
            },
            {
                  "title": "Tôi không thường chú ý đến những thay đổi nhỏ trong một tình huống hoặc diện mạo của một người"
            },
            {
                  "title": "Tôi biết cách nhận biết liệu người nghe tôi có đang chán không"
            },
            {
                  "title": "Tôi thấy dễ làm nhiều hơn một việc cùng lúc"
            },
            {
                  "title": "Khi nói chuyện điện thoại, tôi không chắc khi nào đến lượt tôi nói"
            },
            {
                  "title": "Tôi thích làm mọi việc một cách tự phát"
            },
            {
                  "title": "Tôi thường là người cuối cùng hiểu điểm mấu chốc của một trò đùa"
            },
            {
                  "title": "Tôi thấy dễ hiểu ai đó đang nghĩ hoặc cảm thấy gì chỉ bằng cách nhìn vào mặt họ"
            },
            {
                  "title": "Nếu có gián đoạn, tôi có thể quay lại việc đang làm rất nhanh"
            },
            {
                  "title": "Tôi giỏi tán gẫu xã hội"
            },
            {
                  "title": "Mọi người thường nói với tôi rằng tôi cứ tiếp tục về cùng một chủ đề"
            },
            {
                  "title": "Khi còn trẻ, tôi từng thích chơi các trò chơi liên quan đến giả vờ với những đứa trẻ khác"
            },
            {
                  "title": "Tôi thích thu thập thông tin về các loại sự vật"
            },
            {
                  "title": "Tôi thấy khó tưởng tượng mình sẽ như thế nào nếu là người khác"
            },
            {
                  "title": "Tôi thích lên kế hoạch cẩn thận cho bất kỳ hoạt động nào tôi tham gia"
            },
            {
                  "title": "Tôi thích các dịp xã hội"
            },
            {
                  "title": "Tôi thấy khó hiểu ý định của mọi người"
            },
            {
                  "title": "Các tình huống mới làm tôi lo lắng"
            },
            {
                  "title": "Tôi thích gặp gỡ người mới"
            },
            {
                  "title": "Tôi là một nhà ngoại giao giỏi"
            },
            {
                  "title": "Tôi không giỏi nhớ ngày sinh của mọi người"
            },
            {
                  "title": "Tôi thấy rất dễ chơi các trò chơi với trẻ em liên quan đến giả vờ"
            }
      ],
      "results": {
            "bajo": {
                  "label": "Ít đặc điểm tự kỷ",
                  "desc": "Điểm số của bạn nằm trong phạm vi điển hình của dân số chung. Không gợi ý các đặc điểm phổ tự kỷ đáng kể."
            },
            "leve": {
                  "label": "Đặc điểm tự kỷ nhẹ",
                  "desc": "Điểm số của bạn chỉ ra một số đặc điểm phổ tự kỷ, trong phạm vi trung bình. Nhiều người không có chẩn đoán ghi điểm trong phạm vi này."
            },
            "moderado": {
                  "label": "Đặc điểm tự kỷ trung bình",
                  "desc": "Điểm số của bạn vượt quá ngưỡng 26 và gợi ý các đặc điểm tự kỷ trên mức trung bình. Cân nhắc tham khảo ý kiến chuyên gia nếu bạn gặp khó khăn."
            },
            "alto": {
                  "label": "Đặc điểm tự kỷ đáng kể",
                  "desc": "Điểm số của bạn vượt quá ngưỡng lâm sàng 32. 80% người được chẩn đoán tự kỷ ghi điểm trong phạm vi này. Đánh giá chẩn đoán được khuyến nghị."
            },
            "muy_alto": {
                  "label": "Đặc điểm tự kỷ rất đáng kể",
                  "desc": "Điểm số của bạn rất cao và mạnh mẽ gợi ý sự hiện diện của các đặc điểm phổ tự kỷ. Đánh giá chẩn đoán toàn diện được khuyến nghị mạnh mẽ."
            }
      }
},
    "cssrs": {
      "name": "C-SSRS",
      "abbr": "C-SSRS",
      "fullName": "Thang đo Mức độ Nghiêm trọng Tự tử Columbia — Bộ sàng lọc",
      "desc": "Công cụ sàng lọc rủi ro tự tử toàn cầu được sử dụng trong khoa cấp cứu, chăm sóc ban đầu và giáo dục. Nếu bạn đang khủng hoảng, hãy gọi 988 (Mỹ) hoặc 116 123 (Anh).",
      "instructions": "Trả lời trung thực các câu hỏi sau về những suy nghĩ hoặc hành vi bạn có thể đã có. Câu trả lời của bạn được bảo mật và chỉ được lưu trên thiết bị của bạn.",
      "questions": [
            {
                  "title": "Bạn đã bao giờ ước mình chết hoặc ước mình có thể đi ngủ và không thức dậy chưa?",
                  "options": [
                        "Không",
                        "Có"
                  ]
            },
            {
                  "title": "Bạn đã thực sự có bất kỳ suy nghĩ nào về việc tự tử chưa?",
                  "options": [
                        "Không",
                        "Có"
                  ]
            },
            {
                  "title": "Bạn đã từng nghĩ về cách bạn có thể làm điều này chưa? (ví dụ: nghĩ về một phương pháp như thuốc, súng hoặc cách khác)",
                  "options": [
                        "Không",
                        "Có"
                  ]
            },
            {
                  "title": "Bạn đã có những suy nghĩ này và có một số ý định hành động theo chúng chưa?",
                  "options": [
                        "Không",
                        "Có"
                  ]
            },
            {
                  "title": "Bạn đã bắt đầu tính toán hoặc tính toán chi tiết về cách tự tử chưa? Bạn có dự định thực hiện kế hoạch này không?",
                  "options": [
                        "Không",
                        "Có"
                  ]
            },
            {
                  "title": "Bạn đã bao giờ làm bất cứ điều gì, bắt đầu làm bất cứ điều gì, hoặc chuẩn bị làm bất cứ điều gì để kết thúc cuộc sống của mình chưa? (ví dụ: thu thập thuốc, lấy súng, cho đi đồ có giá trị, viết thư tự tử, uống thuốc, cắt mình, cố gắng treo cổ, v.v.)",
                  "options": [
                        "Không",
                        "Có"
                  ]
            }
      ],
      "results": {
            "none": {
                  "label": "Không xác định rủi ro",
                  "desc": "Không xác định các chỉ số rủi ro tự tử tại thời điểm này. Nếu bạn từng có những suy nghĩ này, đừng ngần ngại tìm kiếm sự giúp đỡ chuyên nghiệp."
            },
            "low": {
                  "label": "Rủi ro thấp",
                  "desc": "Bạn đã bày tỏ mong muốn chết thụ động. Trong khi bạn không chỉ ra các kế hoạch chủ động, khuyến nghị nói chuyện với chuyên gia.\n\n🆘 ĐƯỜNG DÂY KHỦNG HOẢNG:\n• Mỹ: 988\n• Anh: 116 123\n• Quốc tế: befrienders.org"
            },
            "moderate": {
                  "label": "Rủi ro trung bình",
                  "desc": "Phản ứng của bạn chỉ ra các suy nghĩ tự tử. Rất quan trọng để nói chuyện với chuyên gia sức khỏe tâm thần. Một kế hoạch an toàn có thể giúp ích.\n\n🆘 ĐƯỜNG DÂY KHỦNG HOẢNG:\n• Mỹ: 988\n• Anh: 116 123\n• Quốc tế: befrienders.org"
            },
            "high": {
                  "label": "Rủi ro cao",
                  "desc": "Phản ứng của bạn chỉ ra rủi ro cao về hành vi tự tử. Bạn cần một đánh giá chuyên nghiệp khẩn cấp. Vui lòng liên hệ chuyên gia sức khỏe tâm thần hoặc gọi đường dây khủng hoảng ngay bây giờ.\n\n🆘 ĐƯỜNG DÂY KHỦNG HOẢNG:\n• Mỹ: 988\n• Anh: 116 123\n• Quốc tế: befrienders.org"
            },
            "imminent": {
                  "label": "Rủi ro sắp xảy ra",
                  "desc": "Phản ứng của bạn chỉ ra rủi ro rất cao. Điều thiết yếu là bạn tìm kiếm sự giúp đỡ chuyên nghiệp NGAY BÂY GIỜ. Đến phòng cấp cứu hoặc gọi đường dây khủng hoảng ngay lập tức. Bạn không cô đơn.\n\n🆘 ĐƯỜNG DÂY KHỦNG HOẢNG:\n• Mỹ: 988\n• Anh: 116 123\n• Quốc tế: befrienders.org"
            }
      }
},
    "cage": {
      "name": "CAGE",
      "abbr": "CAGE",
      "fullName": "Bảng câu hỏi Sàng lọc Rượu CAGE",
      "desc": "Sàng lọc siêu ngắn 4 câu hỏi để phát hiện các vấn đề về rượu. Bổ sung cho AUDIT.",
      "instructions": "Trả lời trung thực các câu hỏi sau về mối quan hệ của bạn với rượu.",
      "sharedOptions": [
            "Không",
            "Có"
      ],
      "questions": [
            {
                  "title": "Bạn đã bao giờ cảm thấy bạn nên Cắt giảm (Cut down) việc uống rượu của mình chưa?"
            },
            {
                  "title": "Mọi người có từng Làm phiền (Annoyed) bạn bằng cách chỉ trích việc uống rượu của bạn chưa?"
            },
            {
                  "title": "Bạn đã bao giờ cảm thấy Tội lỗi (Guilty) về việc uống rượu của mình chưa?"
            },
            {
                  "title": "Bạn đã bao giờ uống một ly rượu đầu tiên vào buổi sáng để ổn định thần kinh hoặc để thoát khỏi cơn nôn nao (Eye-opener) chưa?"
            }
      ],
      "results": {
            "none": {
                  "label": "Không có chỉ số",
                  "desc": "Không phát hiện các chỉ số về vấn đề rượu."
            },
            "low": {
                  "label": "Rủi ro có thể",
                  "desc": "Một câu trả lời tích cực đòi hỏi khám phá thêm. Cân nhắc làm bài kiểm tra AUDIT để đánh giá toàn diện hơn."
            },
            "moderate": {
                  "label": "Vấn đề có thể xảy ra",
                  "desc": "Điểm số của bạn gợi ý khả năng cao của một rối loạn sử dụng rượu. Khuyến nghị tham khảo ý kiến chuyên gia sức khỏe."
            },
            "high": {
                  "label": "Khả năng cao",
                  "desc": "Điểm số của bạn gần như chẩn đoán sự phụ thuộc rượu. Rất quan trọng để tìm kiếm sự giúp đỡ chuyên nghiệp chuyên sâu."
            }
      }
},
    "phqa": {
      "name": "PHQ-A",
      "abbr": "PHQ-A",
      "fullName": "Bảng câu hỏi sức khỏe bệnh nhân — Thanh thiếu niên",
      "desc": "Phiên bản PHQ-9 được xác nhận cho thanh thiếu niên (tuổi 11-17). Đánh giá trầm cảm trong hai tuần qua.",
      "instructions": "Trong 2 tuần qua, bạn thường bị làm phiền bởi các vấn đề sau đây như thế nào? Hãy nghĩ về cảm giác của bạn ở trường, với bạn bè và ở nhà.",
      "sharedOptions": [
            "Không hề",
            "Một vài ngày",
            "Hơn một nửa số ngày",
            "Gần như mỗi ngày"
      ],
      "questions": [
            {
                  "title": "Ít hứng thú hoặc niềm vui khi làm việc"
            },
            {
                  "title": "Cảm thấy chán nản, trầm cảm hoặc vô vọng"
            },
            {
                  "title": "Khó ngủ hoặc khó duy trì giấc ngủ, hoặc ngủ quá nhiều"
            },
            {
                  "title": "Cảm thấy mệt mỏi hoặc có ít năng lượng"
            },
            {
                  "title": "Ăn kém ngon miệng hoặc ăn quá nhiều"
            },
            {
                  "title": "Cảm thấy tồi tệ về bản thân — hoặc rằng bạn là một kẻ thất bại hoặc đã làm thất vọng bản thân hoặc gia đình bạn"
            },
            {
                  "title": "Khó tập trung vào mọi thứ, chẳng hạn như bài tập ở trường, đọc sách hoặc xem TV"
            },
            {
                  "title": "Di chuyển hoặc nói chậm đến mức người khác có thể đã nhận thấy? Hoặc ngược lại — bồn chồn hoặc bất an đến mức bạn đã di chuyển nhiều hơn bình thường"
            },
            {
                  "title": "Suy nghĩ rằng bạn sẽ tốt hơn nếu chết hoặc làm hại bản thân bằng cách nào đó"
            }
      ],
      "results": {
            "minima": {
                  "label": "Tối thiểu",
                  "desc": "Không phát hiện triệu chứng trầm cảm đáng kể. Tiếp tục chăm sóc sức khỏe cảm xúc của bạn."
            },
            "leve": {
                  "label": "Nhẹ",
                  "desc": "Phát hiện các triệu chứng nhẹ. Nói chuyện với người lớn đáng tin cậy nếu có điều gì đó làm bạn lo lắng."
            },
            "moderada": {
                  "label": "Trung bình",
                  "desc": "Phát hiện các triệu chứng trầm cảm trung bình. Khuyến nghị nói chuyện với chuyên gia sức khỏe tâm thần."
            },
            "moderadamente_grave": {
                  "label": "Trung bình nặng",
                  "desc": "Phát hiện các triệu chứng trầm cảm đáng kể. Điều quan trọng là tìm kiếm sự giúp đỡ chuyên nghiệp sớm."
            },
            "grave": {
                  "label": "Nặng",
                  "desc": "Phát hiện các triệu chứng trầm cảm nặng. Tìm kiếm sự giúp đỡ chuyên nghiệp khẩn cấp. Nói chuyện với người lớn đáng tin cậy ngay bây giờ."
            }
      }
},
    "triage": {
      "name": "Hướng dẫn",
      "abbr": "Hướng dẫn",
      "fullName": "Bảng câu hỏi Định hướng Ban đầu",
      "desc": "Không biết bắt đầu từ đâu? Bảng câu hỏi ngắn này đề xuất những đánh giá nào phù hợp nhất với bạn.",
      "instructions": "Trả lời trung thực các câu hỏi sau về cảm giác của bạn gần đây. Cuối cùng, bạn sẽ nhận được các đề xuất cá nhân hóa về những đánh giá nên làm.",
      "sharedOptions": ["Không hề","Một chút","Trung bình","Khá nhiều","Rất nhiều"],
      "questions": [
        { "title": "Tôi đã cảm thấy buồn, chán nản hoặc vô vọng" },
        { "title": "Tôi đã mất hứng thú hoặc niềm vui với những thứ tôi từng thích" },
        { "title": "Tôi cảm thấy không có năng lượng hoặc mệt mỏi hầu hết thời gian" },
        { "title": "Tôi cảm thấy lo lắng, bồn chồn hoặc căng thẳng" },
        { "title": "Tôi có những lo lắng quá mức mà tôi không thể kiểm soát" },
        { "title": "Tôi trải qua các triệu chứng cơ thể của lo âu (tim đập nhanh, đổ mồ hôi, run rẩy)" },
        { "title": "Tôi tránh các tình huống xã hội vì sợ bị đánh giá hoặc làm mình trông ngu ngốc" },
        { "title": "Tôi thấy rất khó nói trước công chúng hoặc với người lạ" },
        { "title": "Tôi cảm thấy choáng ngợp bởi các tình huống cuộc sống" },
        { "title": "Tôi gặp khó khăn quản lý các vấn đề hàng ngày" },
        { "title": "Tôi đã sống qua một trải nghiệm sang chấn tiếp tục ảnh hưởng đến tôi" },
        { "title": "Tôi có những ký ức hoặc ác mộng gây phiền nhiễu về các sự kiện trong quá khứ" },
        { "title": "Tôi khó ngủ hoặc khó duy trì giấc ngủ" },
        { "title": "Chất lượng giấc ngủ của tôi ảnh hưởng đến hoạt động hàng ngày của tôi" },
        { "title": "Tôi lo lắng quá mức về cân nặng hoặc hình ảnh cơ thể của mình" },
        { "title": "Tôi có một mối quan hệ có vấn đề với thức ăn (hạn chế, ăn uống mất kiểm soát, thanh lọc)" },
        { "title": "Mức tiêu thụ rượu của tôi làm tôi lo lắng hoặc đã gây ra vấn đề" },
        { "title": "Tôi thấy khó tập trung, tổ chức nhiệm vụ hoặc hoàn thành những gì tôi bắt đầu" },
        { "title": "Tôi quá bồn chồn hoặc thấy khó ngồi yên" },
        { "title": "Tôi có những suy nghĩ xâm nhập lặp đi lặp lại gây ra đau khổ cho tôi" },
        { "title": "Tôi cảm thấy cần phải lặp lại các hành động hoặc nghi thức nhất định" },
        { "title": "Tôi đã có những giai đoạn hưng phấn hoặc năng lượng quá mức sau đó là các giai đoạn trầm cảm" },
        { "title": "Tôi đã có những đợt mà tôi cảm thấy hiếu động hoặc bốc đồng bất thường" },
        { "title": "Các mối quan hệ giữa cá nhân của tôi mãnh liệt và không ổn định" },
        { "title": "Cảm xúc của tôi thay đổi nhanh chóng và tôi thấy khó điều chỉnh chúng" },
        { "title": "Tôi thấy khó hiểu ý định hoặc cảm xúc của người khác" },
        { "title": "Tôi thích các thói quen và cảm thấy không thoải mái khi chúng bị gián đoạn" }
      ],
      "domainNames": {
        "Estado de ánimo": "Tâm trạng",
        "Ansiedad": "Lo âu",
        "Ansiedad social": "Lo âu xã hội",
        "Estrés": "Căng thẳng",
        "Trauma": "Sang chấn",
        "Sueño": "Giấc ngủ",
        "Alimentación": "Ăn uống",
        "Alcohol": "Rượu",
        "Atención y concentración": "Chú ý và Tập trung",
        "Obsesiones y compulsiones": "Ám ảnh và Cưỡng chế",
        "Cambios de ánimo": "Thay đổi tâm trạng",
        "Regulación emocional": "Điều chỉnh cảm xúc",
        "Rasgos del espectro autista": "Đặc điểm Phổ Tự kỷ"
      },
      "domainReasons": {
        "Estado de ánimo": "Điểm cao về các chỉ số tâm trạng",
        "Ansiedad": "Điểm cao về các chỉ số lo âu",
        "Ansiedad social": "Điểm cao về các chỉ số lo âu xã hội",
        "Estrés": "Điểm cao về các chỉ số căng thẳng nhận thức",
        "Trauma": "Điểm cao về các chỉ số sang chấn và căng thẳng sau sang chấn",
        "Sueño": "Điểm cao về các chỉ số vấn đề giấc ngủ",
        "Alimentación": "Điểm cao về các chỉ số hành vi ăn uống",
        "Alcohol": "Điểm cao về các chỉ số tiêu thụ rượu",
        "Atención y concentración": "Điểm cao về các chỉ số thiếu chú ý và tăng động",
        "Obsesiones y compulsiones": "Điểm cao về các chỉ số ám ảnh cưỡng chế",
        "Cambios de ánimo": "Điểm cao về các chỉ số thay đổi tâm trạng",
        "Regulación emocional": "Điểm cao về các chỉ số bất ổn cảm xúc và giữa cá nhân",
        "Rasgos del espectro autista": "Điểm cao về các chỉ số đặc điểm phổ tự kỷ"
      },
      "results": {
        "triage_label": "Các đánh giá được đề xuất của bạn",
        "triage_desc": "Dựa trên phản ứng của bạn, chúng tôi đề xuất các đánh giá sau:",
        "suggested_wellbeing": "Đánh giá hạnh phúc chung được đề xuất cho mọi người",
        "suggested_personality": "Đánh giá tính cách được đề xuất như bổ sung"
      }
    },
    "ipip300": {
      "name": "IPIP-300",
      "abbr": "IPIP-300",
      "fullName": "IPIP-NEO-300 — Bảng kiểm tra Tính cách 300 mục",
      "desc": "Đánh giá tính cách toàn diện nhất hiện có. Đo lường 30 khía cạnh được nhóm thành các đặc điểm Big Five với độ chính xác cao.",
      "instructions": "Cho biết mỗi câu mô tả bạn nói chung một cách chính xác như thế nào. Không có câu trả lời đúng hay sai. Vui lòng phản hồi trung thực.",
      "sharedOptions": ["Rất không chính xác","Không chính xác","Không chính xác cũng không không chính xác","Chính xác","Rất chính xác"],
      "questions": [
        { "title": "Tôi lo lắng về mọi thứ." },
        { "title": "Tôi thư giãn hầu hết thời gian." },
        { "title": "Tôi sợ điều tồi tệ nhất trong mọi tình huống." },
        { "title": "Tôi hiếm khi cảm thấy lo âu." },
        { "title": "Tôi dễ dàng căng thẳng." },
        { "title": "Tôi không lo lắng về những chuyện đã xảy ra." },
        { "title": "Tôi lo lắng về những gì có thể sai." },
        { "title": "Tôi giữ bình tĩnh trước sự không chắc chắn." },
        { "title": "Tôi thường xuyên cảm thấy lo âu." },
        { "title": "Tôi không dễ bị sợ hãi." },
        { "title": "Tôi dễ bị kích thích." },
        { "title": "Tôi hiếm khi mất bình tĩnh." },
        { "title": "Tôi tức giận khi mọi việc không theo ý tôi." },
        { "title": "Tôi khó bị khiêu khích." },
        { "title": "Tôi dễ dàng thất vọng." },
        { "title": "Tôi giữ bình tĩnh trong các tình huống khó khăn." },
        { "title": "Nhiều thứ làm tôi phiền lòng." },
        { "title": "Tôi không dễ tức giận." },
        { "title": "Tôi bùng nổ khi bị khiêu khích." },
        { "title": "Tôi kiểm soát tính khí tốt." },
        { "title": "Tôi thường cảm thấy buồn." },
        { "title": "Tôi cảm thấy thoải mái với bản thân." },
        { "title": "Tôi thường cảm thấy nản lòng." },
        { "title": "Tôi hiếm khi cảm thấy chán nản." },
        { "title": "Tôi cảm thấy không hài lòng với cuộc sống của mình." },
        { "title": "Tôi nói chung cảm thấy hài lòng." },
        { "title": "Đôi khi tôi cảm thấy trống rỗng bên trong." },
        { "title": "Tôi không để những suy nghĩ tiêu cực chiếm lấy." },
        { "title": "Tôi có xu hướng nhìn thấy mặt tối của sự việc." },
        { "title": "Tôi tận hưởng cuộc sống như nó vốn có." }
      ]
    },
    "pid5": {
      "name": "PID-5",
      "abbr": "PID-5",
      "fullName": "Bảng kiểm tra Tính cách cho DSM-5",
      "desc": "Đánh giá toàn diện về các đặc điểm tính cách bệnh lý theo mô hình chiều kích DSM-5. Đo lường 25 khía cạnh trên 5 lĩnh vực.",
      "instructions": "Đọc từng câu và chọn mức độ nó mô tả bạn nói chung, không chỉ là cảm giác của bạn ngay lúc này.",
      "sharedOptions": ["Rất sai hoặc thường sai","Đôi khi hoặc hơi sai","Đôi khi hoặc hơi đúng","Rất đúng hoặc thường đúng"],
      "questions": [
        { "title": "Cảm xúc của tôi thay đổi mà không có lý do rõ ràng." },
        { "title": "Tâm trạng của tôi thay đổi đột ngột từ khoảnh khắc này sang khoảnh khắc khác." },
        { "title": "Tôi chuyển nhanh từ cảm thấy hạnh phúc sang cảm thấy buồn mà không có lý do rõ ràng." },
        { "title": "Những người thân thiết nói với tôi rằng tôi quá cảm xúc." },
        { "title": "Tôi thấy khó kiểm soát phản ứng cảm xúc của mình." },
        { "title": "Tôi dễ dàng khó chịu trong các tình huống mà người khác xử lý không có vấn đề." },
        { "title": "Cảm xúc của tôi không thể đoán trước, ngay cả với tôi." }
      ]
    },
    "ipip_mmpi": {
      "name": "IPIP-Lâm sàng",
      "abbr": "IPIP-Lâm sàng",
      "fullName": "Thang đo Lâm sàng IPIP (tương đương với thang đo MMPI)",
      "desc": "Đánh giá tính cách lâm sàng toàn diện sử dụng các mục miền công cộng. Đo lường 10 thang đo lâm sàng và 3 thang đo hiệu lực tương đương với các thang đo của MMPI.",
      "instructions": "Trả lời đúng hoặc sai cho từng câu như nó thường áp dụng cho bạn. Hãy trung thực; không có câu trả lời đúng hay sai.",
      "sharedOptions": ["Sai","Đúng"],
      "questions": [
        { "title": "Tôi chưa bao giờ nói dối." },
        { "title": "Tôi lo lắng rất nhiều về sức khỏe của mình." },
        { "title": "Tôi cảm thấy buồn hầu hết thời gian." },
        { "title": "Tôi tin rằng mọi người nói về tôi sau lưng." },
        { "title": "Tôi có nhiều năng lượng hơn hầu hết mọi người." },
        { "title": "Tôi nghe thấy những giọng nói mà người khác không thể nghe." },
        { "title": "Tôi coi mình là một người rất cân bằng." }
      ]
    }
  }
};