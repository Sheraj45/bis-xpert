import { useEffect, useRef, useState } from "react";
import "./Consumer.css";

const translations = {
  English: {
    welcome: "Welcome to BIS Xpert",
    subtitle: "Your Indian Standards Assistant",
    description:
      "Ask a question about BIS standards, product safety, hallmarking, or consumer rights.",
    questionLabel: "What would you like to know?",
    placeholder: "Example: How can I identify a genuine BIS marked product?",
    askButton: "Ask BIS Xpert",
    voiceListening: "Listening...",
    voiceNotSupported: "Voice input is not supported in this browser.",
    examplesTitle: "Try asking",
    example1: "What is the BIS Standard Mark?",
    example2: "How can I identify a genuine BIS marked product?",
    example3: "What does the HUID on gold jewellery mean?",
    example4: "Why are BIS standards important for consumers?",
    analyzing: "Analyzing your question",
    analyzingDescription: "BIS Xpert is checking the relevant information.",
    step1: "Understanding your question",
    step2: "Finding relevant BIS information",
    step3: "Preparing your answer",
    backHome: "Back Home",
    answerFound: "Answer found",
    askAnother: "Ask another question",
    disclaimer:
      "Information provided by BIS Xpert is intended for general awareness. Always verify important information with official BIS sources.",
  },

  Telugu: {
    welcome: "BIS Xpert కు స్వాగతం",
    subtitle: "మీ Indian Standards Assistant",
    description:
      "BIS ప్రమాణాలు, ఉత్పత్తి భద్రత, హాల్‌మార్కింగ్ లేదా వినియోగదారుల హక్కుల గురించి ప్రశ్న అడగండి.",
    questionLabel: "మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
    placeholder: "ఉదాహరణ: అసలైన BIS గుర్తు ఉన్న ఉత్పత్తిని ఎలా గుర్తించాలి?",
    askButton: "BIS Xpert ను అడగండి",
    voiceListening: "వింటోంది...",
    voiceNotSupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ అందుబాటులో లేదు.",
    examplesTitle: "ఇలా అడగవచ్చు",
    example1: "BIS Standard Mark అంటే ఏమిటి?",
    example2: "అసలైన BIS గుర్తు ఉన్న ఉత్పత్తిని ఎలా గుర్తించాలి?",
    example3: "బంగారు ఆభరణాలపై HUID అంటే ఏమిటి?",
    example4: "వినియోగదారులకు BIS ప్రమాణాలు ఎందుకు ముఖ్యమైనవి?",
    analyzing: "మీ ప్రశ్నను విశ్లేషిస్తోంది",
    analyzingDescription: "BIS Xpert సంబంధిత సమాచారాన్ని పరిశీలిస్తోంది.",
    step1: "మీ ప్రశ్నను అర్థం చేసుకుంటోంది",
    step2: "సంబంధిత BIS సమాచారాన్ని కనుగొంటోంది",
    step3: "మీ సమాధానాన్ని సిద్ధం చేస్తోంది",
    backHome: "హోమ్‌కు తిరిగి వెళ్లండి",
    answerFound: "సమాధానం కనుగొనబడింది",
    askAnother: "మరో ప్రశ్న అడగండి",
    disclaimer:
      "BIS Xpert అందించే సమాచారం సాధారణ అవగాహన కోసం మాత్రమే. ముఖ్యమైన సమాచారాన్ని అధికారిక BIS వనరులతో ధృవీకరించండి.",
  },

  Hindi: {
    welcome: "BIS Xpert में आपका स्वागत है",
    subtitle: "आपका Indian Standards Assistant",
    description:
      "BIS मानकों, उत्पाद सुरक्षा, हॉलमार्किंग या उपभोक्ता अधिकारों के बारे में प्रश्न पूछें।",
    questionLabel: "आप क्या जानना चाहते हैं?",
    placeholder: "उदाहरण: असली BIS मार्क वाले उत्पाद की पहचान कैसे करें?",
    askButton: "BIS Xpert से पूछें",
    voiceListening: "सुन रहा है...",
    voiceNotSupported: "इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है।",
    examplesTitle: "यह पूछकर देखें",
    example1: "BIS Standard Mark क्या है?",
    example2: "असली BIS मार्क वाले उत्पाद की पहचान कैसे करें?",
    example3: "सोने के आभूषण पर HUID का क्या मतलब है?",
    example4: "उपभोक्ताओं के लिए BIS मानक क्यों महत्वपूर्ण हैं?",
    analyzing: "आपके प्रश्न का विश्लेषण किया जा रहा है",
    analyzingDescription: "BIS Xpert संबंधित जानकारी की जाँच कर रहा है।",
    step1: "आपके प्रश्न को समझना",
    step2: "संबंधित BIS जानकारी खोजना",
    step3: "आपका उत्तर तैयार करना",
    backHome: "होम पर वापस जाएँ",
    answerFound: "उत्तर मिल गया",
    askAnother: "एक और प्रश्न पूछें",
    disclaimer:
      "BIS Xpert द्वारा दी गई जानकारी सामान्य जागरूकता के लिए है। महत्वपूर्ण जानकारी को आधिकारिक BIS स्रोतों से सत्यापित करें।",
  },
};

const answerContent = {
  bisMark: {
    English: {
      title: "What is the BIS Standard Mark?",
      answer:
        "The BIS Standard Mark shows that a product conforms to the applicable Indian Standard and has been certified under the BIS conformity assessment system. It helps consumers identify products that meet specified quality and safety requirements.",
      points: [
        "Look for the BIS Standard Mark on the product or packaging.",
        "Check the relevant licence or certification details where applicable.",
        "For important purchases, verify the details through official BIS sources.",
      ],
    },
    Telugu: {
      title: "BIS Standard Mark అంటే ఏమిటి?",
      answer:
        "BIS Standard Mark అనేది ఒక ఉత్పత్తి సంబంధిత భారతీయ ప్రమాణానికి అనుగుణంగా ఉందని సూచించే గుర్తు. ఇది నిర్దిష్ట నాణ్యత మరియు భద్రతా అవసరాలను ఉత్పత్తి పూర్తి చేసిందని వినియోగదారులకు గుర్తించడంలో సహాయపడుతుంది.",
      points: [
        "ఉత్పత్తి లేదా ప్యాకేజింగ్‌పై BIS Standard Mark కోసం చూడండి.",
        "అవసరమైనప్పుడు లైసెన్స్ లేదా సర్టిఫికేషన్ వివరాలను పరిశీలించండి.",
        "ముఖ్యమైన కొనుగోళ్లలో అధికారిక BIS వనరుల ద్వారా వివరాలను ధృవీకరించండి.",
      ],
    },
    Hindi: {
      title: "BIS Standard Mark क्या है?",
      answer:
        "BIS Standard Mark यह दर्शाता है कि कोई उत्पाद संबंधित भारतीय मानक के अनुरूप है और BIS की अनुरूपता मूल्यांकन प्रणाली के तहत प्रमाणित किया गया है। यह उपभोक्ताओं को निर्धारित गुणवत्ता और सुरक्षा आवश्यकताओं को पूरा करने वाले उत्पादों की पहचान करने में मदद करता है।",
      points: [
        "उत्पाद या पैकेजिंग पर BIS Standard Mark देखें।",
        "जहाँ लागू हो, लाइसेंस या प्रमाणन विवरण जाँचें।",
        "महत्वपूर्ण खरीदारी के लिए आधिकारिक BIS स्रोतों से विवरण सत्यापित करें।",
      ],
    },
  },

  genuine: {
    English: {
      title: "How can I identify a genuine BIS marked product?",
      answer:
        "A BIS mark alone should not be treated as the only verification step. Consumers should check the applicable certification or licence details and verify them through official BIS information whenever possible.",
      points: [
        "Check whether the BIS mark is clearly displayed.",
        "Look for applicable licence or registration information.",
        "Be cautious of unclear, altered, or suspicious markings.",
        "Verify certification information using official BIS resources.",
      ],
    },
    Telugu: {
      title: "అసలైన BIS గుర్తు ఉన్న ఉత్పత్తిని ఎలా గుర్తించాలి?",
      answer:
        "BIS గుర్తు మాత్రమే చూసి ఉత్పత్తి నిజమైనదని నిర్ణయించకండి. అవసరమైన సర్టిఫికేషన్ లేదా లైసెన్స్ వివరాలను పరిశీలించి, వీలైనప్పుడు అధికారిక BIS సమాచారంతో ధృవీకరించండి.",
      points: [
        "BIS గుర్తు స్పష్టంగా ఉందో చూడండి.",
        "అవసరమైన లైసెన్స్ లేదా రిజిస్ట్రేషన్ వివరాలను పరిశీలించండి.",
        "సందేహాస్పదంగా లేదా మార్చినట్లు కనిపించే గుర్తుల విషయంలో జాగ్రత్తగా ఉండండి.",
        "అధికారిక BIS వనరుల ద్వారా వివరాలను ధృవీకరించండి.",
      ],
    },
    Hindi: {
      title: "असली BIS मार्क वाले उत्पाद की पहचान कैसे करें?",
      answer:
        "केवल BIS मार्क देखकर उत्पाद को वास्तविक न मानें। लागू प्रमाणन या लाइसेंस विवरण की जाँच करें और जहाँ संभव हो, आधिकारिक BIS जानकारी से उसे सत्यापित करें।",
      points: [
        "देखें कि BIS मार्क स्पष्ट रूप से दिखाई दे रहा है।",
        "लागू लाइसेंस या पंजीकरण विवरण जाँचें।",
        "संदिग्ध या बदले हुए मार्किंग से सावधान रहें।",
        "आधिकारिक BIS स्रोतों से प्रमाणन जानकारी सत्यापित करें।",
      ],
    },
  },

  hallmarking: {
    English: {
      title: "What does the HUID on gold jewellery mean?",
      answer:
        "HUID stands for Hallmark Unique Identification. It is a unique identification number associated with hallmarked gold jewellery and helps consumers verify hallmark-related information.",
      points: [
        "HUID is associated with hallmarked gold jewellery.",
        "It provides a unique identification reference.",
        "Consumers can use official BIS verification facilities where applicable.",
      ],
    },
    Telugu: {
      title: "బంగారు ఆభరణాలపై HUID అంటే ఏమిటి?",
      answer:
        "HUID అంటే Hallmark Unique Identification. ఇది హాల్‌మార్క్ చేసిన బంగారు ఆభరణాలకు సంబంధించిన ప్రత్యేక గుర్తింపు సంఖ్య. ఇది హాల్‌మార్క్ సమాచారాన్ని ధృవీకరించడంలో వినియోగదారులకు సహాయపడుతుంది.",
      points: [
        "HUID హాల్‌మార్క్ చేసిన బంగారు ఆభరణాలకు సంబంధించినది.",
        "ఇది ప్రత్యేక గుర్తింపు సంఖ్యగా పనిచేస్తుంది.",
        "అవసరమైనప్పుడు అధికారిక BIS ధృవీకరణ సదుపాయాలను ఉపయోగించవచ్చు.",
      ],
    },
    Hindi: {
      title: "सोने के आभूषण पर HUID का क्या मतलब है?",
      answer:
        "HUID का अर्थ Hallmark Unique Identification है। यह हॉलमार्क वाले सोने के आभूषण से जुड़ी एक विशिष्ट पहचान संख्या है और हॉलमार्क संबंधी जानकारी को सत्यापित करने में उपभोक्ताओं की मदद करती है।",
      points: [
        "HUID हॉलमार्क वाले सोने के आभूषण से जुड़ा होता है।",
        "यह एक विशिष्ट पहचान संदर्भ प्रदान करता है।",
        "जहाँ लागू हो, आधिकारिक BIS सत्यापन सुविधाओं का उपयोग किया जा सकता है।",
      ],
    },
  },

  safety: {
    English: {
      title: "Why are BIS standards important for consumers?",
      answer:
        "BIS standards define requirements for quality, safety, performance, or other characteristics of products and services. They help create a common benchmark that manufacturers can follow and consumers can use when making informed choices.",
      points: [
        "Standards can help improve product quality and safety.",
        "They provide consistent requirements for applicable products.",
        "They help consumers make more informed purchasing decisions.",
      ],
    },
    Telugu: {
      title: "వినియోగదారులకు BIS ప్రమాణాలు ఎందుకు ముఖ్యమైనవి?",
      answer:
        "BIS ప్రమాణాలు ఉత్పత్తులు మరియు సేవలకు నాణ్యత, భద్రత, పనితీరు వంటి అవసరాలను నిర్వచిస్తాయి. ఇవి తయారీదారులకు అనుసరించడానికి మరియు వినియోగదారులకు సరైన నిర్ణయాలు తీసుకోవడానికి ఒక సాధారణ ప్రమాణాన్ని అందిస్తాయి.",
      points: [
        "ప్రమాణాలు ఉత్పత్తి నాణ్యత మరియు భద్రతను మెరుగుపరచడంలో సహాయపడతాయి.",
        "అనువైన ఉత్పత్తులకు స్థిరమైన అవసరాలను అందిస్తాయి.",
        "వినియోగదారులు మెరుగైన కొనుగోలు నిర్ణయాలు తీసుకోవడానికి సహాయపడతాయి.",
      ],
    },
    Hindi: {
      title: "उपभोक्ताओं के लिए BIS मानक क्यों महत्वपूर्ण हैं?",
      answer:
        "BIS मानक उत्पादों और सेवाओं के लिए गुणवत्ता, सुरक्षा, प्रदर्शन और अन्य विशेषताओं से संबंधित आवश्यकताओं को निर्धारित करते हैं। वे निर्माताओं के लिए एक सामान्य मानक और उपभोक्ताओं के लिए बेहतर निर्णय लेने का आधार प्रदान करते हैं।",
      points: [
        "मानक उत्पाद की गुणवत्ता और सुरक्षा को बेहतर बनाने में मदद कर सकते हैं।",
        "लागू उत्पादों के लिए समान आवश्यकताएँ प्रदान करते हैं।",
        "उपभोक्ताओं को अधिक जानकारी के साथ खरीदारी का निर्णय लेने में मदद करते हैं।",
      ],
    },
  },

  general: {
    English: {
      title: "About BIS and consumer awareness",
      answer:
        "BIS Xpert can help you understand BIS standards, certification, product safety, hallmarking, and related consumer information. For questions involving a specific product, check its applicable standard and certification details.",
      points: [
        "Ask about BIS marks and certification.",
        "Ask about product safety and standards.",
        "Ask about gold hallmarking and HUID.",
        "Verify important information through official BIS sources.",
      ],
    },
    Telugu: {
      title: "BIS మరియు వినియోగదారుల అవగాహన గురించి",
      answer:
        "BIS ప్రమాణాలు, సర్టిఫికేషన్, ఉత్పత్తి భద్రత, హాల్‌మార్కింగ్ మరియు సంబంధిత వినియోగదారుల సమాచారాన్ని అర్థం చేసుకోవడంలో BIS Xpert సహాయపడుతుంది. నిర్దిష్ట ఉత్పత్తి గురించి ప్రశ్న ఉంటే, దానికి వర్తించే ప్రమాణం మరియు సర్టిఫికేషన్ వివరాలను పరిశీలించండి.",
      points: [
        "BIS గుర్తులు మరియు సర్టిఫికేషన్ గురించి అడగండి.",
        "ఉత్పత్తి భద్రత మరియు ప్రమాణాల గురించి అడగండి.",
        "బంగారు హాల్‌మార్కింగ్ మరియు HUID గురించి అడగండి.",
        "ముఖ్యమైన సమాచారాన్ని అధికారిక BIS వనరులతో ధృవీకరించండి.",
      ],
    },
    Hindi: {
      title: "BIS और उपभोक्ता जागरूकता के बारे में",
      answer:
        "BIS मानकों, प्रमाणन, उत्पाद सुरक्षा, हॉलमार्किंग और संबंधित उपभोक्ता जानकारी को समझने में BIS Xpert आपकी मदद कर सकता है। किसी विशेष उत्पाद के बारे में प्रश्न होने पर उसके लागू मानक और प्रमाणन विवरण की जाँच करें।",
      points: [
        "BIS मार्क और प्रमाणन के बारे में पूछें।",
        "उत्पाद सुरक्षा और मानकों के बारे में पूछें।",
        "सोने की हॉलमार्किंग और HUID के बारे में पूछें।",
        "महत्वपूर्ण जानकारी को आधिकारिक BIS स्रोतों से सत्यापित करें।",
      ],
    },
  },
};

function Consumer({ onBack }) {
  const [language, setLanguage] = useState("English");
  const [query, setQuery] = useState("");
  const [screen, setScreen] = useState("home");
  const [answerData, setAnswerData] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // Complaint state
  const [showComplaint, setShowComplaint] = useState(false);
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      recognitionRef.current = null;
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang =
      language === "Telugu"
        ? "te-IN"
        : language === "Hindi"
          ? "hi-IN"
          : "en-IN";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
    };

    recognitionRef.current = recognition;

    return () => {
      try {
        recognition.stop();
      } catch {
        // Recognition may already be stopped.
      }
    };
  }, [language]);

  const startVoiceInput = () => {
    if (!recognitionRef.current) {
      alert(t.voiceNotSupported);
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      return;
    }

    try {
      recognitionRef.current.start();
    } catch {
      setIsListening(false);
    }
  };

  const getAnswerType = (question) => {
    const text = question.toLowerCase();

    if (
      text.includes("bis mark") ||
      text.includes("standard mark") ||
      text.includes("isi mark") ||
      text.includes("isi")
    ) {
      return "bisMark";
    }

    if (
      text.includes("genuine") ||
      text.includes("original") ||
      text.includes("fake") ||
      text.includes("real")
    ) {
      return "genuine";
    }

    if (
      text.includes("huid") ||
      text.includes("hallmark") ||
      text.includes("gold") ||
      text.includes("jewellery") ||
      text.includes("jewelry")
    ) {
      return "hallmarking";
    }

    if (
      text.includes("safety") ||
      text.includes("safe") ||
      text.includes("consumer") ||
      text.includes("important") ||
      text.includes("standards")
    ) {
      return "safety";
    }

    return "general";
  };

  const handleSubmit = () => {
    const trimmed = query.trim();

    if (!trimmed) return;

    const type = getAnswerType(trimmed);

    setAnswerData({
      type,
      question: trimmed,
    });

    setScreen("analysis");

    setTimeout(() => {
      setScreen("result");
    }, 2500);
  };

  const handleExample = (question) => {
    setQuery(question);
  };

  const goHome = () => {
    setScreen("home");
    setQuery("");
    setAnswerData(null);
  };

  // Complaint handlers
  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    setComplaintSubmitted(true);
  };

  const closeComplaint = () => {
    setShowComplaint(false);
    setComplaintSubmitted(false);
  };

  const answer =
    answerData && answerContent[answerData.type]
      ? answerContent[answerData.type][language]
      : null;

  // =========================================================
  // SPLASH SCREEN
  // =========================================================

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <h1>BIS Xpert</h1>
          <p>Indian Standards Assistant</p>

          <div className="splash-loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // HOME SCREEN
  // =========================================================

  if (screen === "home") {
    return (
      <div className="app app-visible">
        <nav className="navbar">
          <div className="brand">
            <div className="brand-icon">BX</div>

            <div>
              <strong>BIS Xpert</strong>
              <span>Indian Standards Assistant</span>
            </div>
          </div>

          <div className="nav-actions">
            <button className="role-back-button" onClick={onBack}>
              ← Change User
            </button>

            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="English">English</option>
              <option value="Telugu">తెలుగు</option>
              <option value="Hindi">हिन्दీ</option>
            </select>
          </div>
        </nav>

        <main className="home">
          <section className="hero">
            <div className="welcome">
              <span>CONSUMER ASSISTANCE</span>
            </div>

            <h1>
              {t.welcome} <span>👋</span>
            </h1>

            <p>{t.description}</p>

            <div className="input-card">
              <label>{t.questionLabel}</label>

              <div className="input-wrapper">
                <textarea
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t.placeholder}
                  rows="4"
                />

                <button
                  type="button"
                  className={`voice-button ${isListening ? "listening" : ""}`}
                  onClick={startVoiceInput}
                  aria-label="Voice input"
                >
                  🎙️
                </button>
              </div>

              {isListening && (
                <div className="voice-status">{t.voiceListening}</div>
              )}

              <button
                className="primary-button"
                onClick={handleSubmit}
                disabled={!query.trim()}
              >
                {t.askButton} →
              </button>
            </div>

            <div className="examples">
              <h3>{t.examplesTitle}</h3>

              <div className="example-buttons">
                <button onClick={() => handleExample(t.example1)}>
                  {t.example1}
                </button>

                <button onClick={() => handleExample(t.example2)}>
                  {t.example2}
                </button>

                <button onClick={() => handleExample(t.example3)}>
                  {t.example3}
                </button>

                <button onClick={() => handleExample(t.example4)}>
                  {t.example4}
                </button>
              </div>
            </div>
          </section>

          <footer className="home-footer">
            <p>BIS Xpert • Making Indian Standards easier to understand</p>
          </footer>
        </main>

        {/* =====================================================
            FLOATING COMPLAINT FEATURE
        ===================================================== */}

        <button
          className="floating-complaint-button"
          onClick={() => {
            setShowComplaint(true);
            setComplaintSubmitted(false);
          }}
          aria-label="Raise a complaint"
          title="Raise a complaint"
        >
          ⚠
        </button>

        {showComplaint && (
          <div className="complaint-overlay">
            <div
              className="complaint-modal"
              onClick={(event) => event.stopPropagation()}
            >
              {!complaintSubmitted ? (
                <>
                  <div className="complaint-modal-header">
                    <div>
                      <span className="complaint-label">CONSUMER SUPPORT</span>

                      <h3>Raise a Complaint</h3>
                    </div>

                    <button
                      className="complaint-close"
                      onClick={closeComplaint}
                      aria-label="Close"
                    >
                      ×
                    </button>
                  </div>

                  <form onSubmit={handleComplaintSubmit}>
                    <label>
                      Complaint Category
                      <select required>
                        <option value="">Select category</option>
                        <option>Product</option>
                        <option>BIS Certification</option>
                        <option>Hallmarking</option>
                        <option>Consumer Service</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <label>
                      Product / Service
                      <input
                        type="text"
                        placeholder="Enter product or service"
                        required
                      />
                    </label>

                    <label>
                      Describe your complaint
                      <textarea
                        rows="4"
                        placeholder="Describe the issue..."
                        required
                      />
                    </label>

                    <div className="complaint-actions">
                      <button
                        type="button"
                        className="complaint-cancel"
                        onClick={closeComplaint}
                      >
                        Cancel
                      </button>

                      <button type="submit" className="complaint-submit">
                        Submit Complaint
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="complaint-success">
                  <div className="success-icon">✓</div>

                  <h3>Complaint submitted successfully</h3>

                  <p>Thank you for bringing this issue to our attention.</p>

                  <button className="complaint-submit" onClick={closeComplaint}>
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================
  // ANALYSIS SCREEN
  // =========================================================

  if (screen === "analysis") {
    return (
      <div className="app app-visible">
        <nav className="navbar">
          <div className="brand">
            <div className="brand-icon">BX</div>

            <div>
              <strong>BIS Xpert</strong>
              <span>Indian Standards Assistant</span>
            </div>
          </div>

          <div className="nav-actions">
            <button className="role-back-button" onClick={goHome}>
              ← {t.backHome}
            </button>

            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="English">English</option>
              <option value="Telugu">తెలుగు</option>
              <option value="Hindi">हिन्दी</option>
            </select>
          </div>
        </nav>

        <div className="analysis-screen">
          <div className="analysis-box">
            <div className="loading-icon">
              ✦<span></span>
              <span></span>
              <span></span>
            </div>

            <h2>{t.analyzing}</h2>
            <p>{t.analyzingDescription}</p>

            <div className="progress-list">
              <div className="progress-item">
                <span className="loading-dot"></span>
                {t.step1}
              </div>

              <div className="progress-item">
                <span className="loading-dot"></span>
                {t.step2}
              </div>

              <div className="progress-item">
                <span className="loading-dot"></span>
                {t.step3}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // RESULT SCREEN
  // =========================================================

  if (screen === "result" && answer) {
    return (
      <div className="app app-visible">
        <div className="result-screen">
          <div className="result-header">
            <button className="back-button" onClick={goHome}>
              ← {t.backHome}
            </button>

            <div className="brand">
              <div className="brand-icon">BX</div>

              <div>
                <strong>BIS Xpert</strong>
                <span>Indian Standards Assistant</span>
              </div>
            </div>

            <div></div>
          </div>

          <main className="result-container">
            <div className="result-intro">
              <span className="success-label">✓ {t.answerFound}</span>

              <h1>{answer.title}</h1>

              <p className="result-question">“{answerData.question}”</p>
            </div>

            <div className="standard-card">
              <div className="standard-card-top">
                <span>Consumer Information</span>
                <span className="match">BIS Xpert</span>
              </div>

              <h2>{answer.title}</h2>

              <p>{answer.answer}</p>
            </div>

            <div className="next-section">
              <h2>Key Points</h2>

              <div className="progress-list">
                {answer.points.map((point, index) => (
                  <div className="progress-item" key={index}>
                    <span className="loading-dot"></span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="ask-card">
              <div className="ask-card-content">
                <h3>{t.askAnother}</h3>

                <p>
                  Ask another question about BIS standards, certification,
                  safety, or hallmarking.
                </p>
              </div>

              <button onClick={goHome}>{t.askAnother} →</button>
            </div>

            <div className="disclaimer">
              <strong>Note:</strong> {t.disclaimer}
            </div>
          </main>
        </div>
      </div>
    );
  }

  return null;
}

export default Consumer;
