import { useEffect, useRef, useState } from "react";
import "./Manufacturer.css";

/* =========================
   DEFAULT PRODUCT
========================= */

const defaultProduct = {
  title: "Stainless Steel Water Bottle",
  category: "Household / Consumer Product",
  material: "Stainless Steel",
  capacity: "1 Litre",
  standard: "IS 17803:2022",
  standardTitle: "Stainless Steel Utensils — Specification",
  applicability:
    "This standard specifies requirements for stainless steel utensils intended for food and domestic use.",
  confidence: 94,
  sourceLabel: "BIS Product Manual",
  sourceUrl:
    "https://www.bis.gov.in/wp-content/uploads/2024/12/PM-IS-17803-1.pdf",
  tests: [
    "Material Composition Test",
    "Corrosion Resistance Test",
    "Dimensional Requirements",
    "Leakage Test",
    "Surface Finish Inspection",
  ],
};

/* =========================
   TRANSLATIONS
========================= */

const translations = {
  English: {
    welcome: "Welcome to BIS Xpert",
    title1: "Understand Indian Standards.",
    title2: "Without the complexity.",
    description:
      "Describe your product and BIS Xpert helps you understand the applicable Indian Standard, testing requirements, certification pathway, and laboratory information.",
    productLabel: "Describe your product",
    placeholder:
      "Example: I manufacture stainless steel water bottles for domestic use...",
    getHelp: "Get Help",
    examples: "Try an example",
    waterBottle: "Water Bottle",
    pressureCooker: "Pressure Cooker",
    cement: "Cement",
    safetyHelmet: "Safety Helmet",
    electricalSwitch: "Electrical Switch",
    ledLamp: "LED Lamp",
    footer: "Powered by BIS Xpert",
    analysisTitle: "Analyzing your product",
    analysisText:
      "We're identifying the relevant Indian Standard and requirements.",
    step1: "Understanding product description",
    step2: "Identifying applicable standard",
    step3: "Preparing requirements",
    resultLabel: "STANDARD IDENTIFIED",
    applicable: "Applicable Indian Standard",
    actionsTitle: "What would you like to know?",
    testing: "Testing Requirements",
    testingDesc: "See the tests relevant to this product.",
    certification: "Certification",
    certificationDesc: "Understand the general BIS certification pathway.",
    laboratory: "Laboratory",
    laboratoryDesc: "Find relevant BIS laboratory information.",
    askTitle: "Have another question?",
    askDesc: "Ask BIS Xpert about this product.",
    askButton: "Ask BIS Xpert",
    disclaimer:
      "Prototype demonstration. Production results would be grounded in verified BIS sources and applicable requirements.",
    detailsLabel: "TESTING REQUIREMENTS",
    detailsTitle: "Tests for this product",
    detailsText:
      "These are representative requirements associated with the identified standard.",
    certificationLabel: "CERTIFICATION",
    certificationTitle: "BIS Certification Pathway",
    certificationText:
      "The exact certification process depends on the applicable product standard and scheme.",
    stepApplication: "Application",
    stepApplicationDesc:
      "Submit the required application and product information through the applicable BIS process.",
    stepTesting: "Product Testing",
    stepTestingDesc:
      "The product is tested against the requirements of the applicable Indian Standard.",
    stepAssessment: "Assessment",
    stepAssessmentDesc:
      "BIS evaluates the application, test results and other required documentation.",
    stepLicence: "Licence / Certification",
    stepLicenceDesc:
      "If requirements are satisfied, the applicable BIS certification or licence process can proceed.",
    labLabel: "LABORATORY INFORMATION",
    labTitle: "Find a relevant BIS laboratory",
    labText:
      "Use the BIS laboratory search to identify laboratories and available testing scopes for the selected standard.",
    openLab: "Open BIS Laboratory Search",
    noteTitle: "Important",
    noteText:
      "Laboratory availability and scope should be verified directly through current BIS information before testing.",
    backResult: "← Back to Result",
    chatTitle: "BIS Xpert",
    chatSubtitle: "Ask about your product",
    chatPlaceholder: "Type your question...",
    backHome: "← Start Again",
    source: "Source",
    prototypeMatch: "Prototype match",
  },

  Telugu: {
    welcome: "BIS Xpert కు స్వాగతం",
    title1: "భారతీయ ప్రమాణాలను అర్థం చేసుకోండి.",
    title2: "సంక్లిష్టత లేకుండా.",
    description:
      "మీ ఉత్పత్తిని వివరించండి. BIS Xpert వర్తించే భారతీయ ప్రమాణం, పరీక్షలు, సర్టిఫికేషన్ మరియు ప్రయోగశాల సమాచారాన్ని అర్థం చేసుకోవడంలో సహాయపడుతుంది.",
    productLabel: "మీ ఉత్పత్తిని వివరించండి",
    placeholder:
      "ఉదాహరణ: నేను గృహ వినియోగం కోసం స్టెయిన్‌లెస్ స్టీల్ వాటర్ బాటిల్స్ తయారు చేస్తున్నాను...",
    getHelp: "సహాయం పొందండి",
    examples: "ఉదాహరణ ప్రయత్నించండి",
    waterBottle: "వాటర్ బాటిల్",
    pressureCooker: "ప్రెషర్ కుక్కర్",
    cement: "సిమెంట్",
    safetyHelmet: "సేఫ్టీ హెల్మెట్",
    electricalSwitch: "ఎలక్ట్రికల్ స్విచ్",
    ledLamp: "LED ల్యాంప్",
    footer: "BIS Xpert ద్వారా",
    analysisTitle: "మీ ఉత్పత్తిని విశ్లేషిస్తున్నాము",
    analysisText: "సంబంధిత భారతీయ ప్రమాణం మరియు అవసరాలను గుర్తిస్తున్నాము.",
    step1: "ఉత్పత్తి వివరణను అర్థం చేసుకుంటున్నాము",
    step2: "వర్తించే ప్రమాణాన్ని గుర్తిస్తున్నాము",
    step3: "అవసరాలను సిద్ధం చేస్తున్నాము",
    resultLabel: "ప్రమాణం గుర్తించబడింది",
    applicable: "వర్తించే భారతీయ ప్రమాణం",
    actionsTitle: "మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
    testing: "పరీక్ష అవసరాలు",
    testingDesc: "ఈ ఉత్పత్తికి సంబంధించిన పరీక్షలను చూడండి.",
    certification: "సర్టిఫికేషన్",
    certificationDesc: "సాధారణ BIS సర్టిఫికేషన్ విధానాన్ని అర్థం చేసుకోండి.",
    laboratory: "ప్రయోగశాల",
    laboratoryDesc: "సంబంధిత BIS ప్రయోగశాల సమాచారాన్ని కనుగొనండి.",
    askTitle: "మరొక ప్రశ్న ఉందా?",
    askDesc: "ఈ ఉత్పత్తి గురించి BIS Xpert ను అడగండి.",
    askButton: "BIS Xpert ను అడగండి",
    disclaimer:
      "ప్రోటోటైప్ డెమో. ప్రొడక్షన్‌లో ఫలితాలు ధృవీకరించబడిన BIS వనరుల ఆధారంగా ఉంటాయి.",
    detailsLabel: "పరీక్ష అవసరాలు",
    detailsTitle: "ఈ ఉత్పత్తికి పరీక్షలు",
    detailsText:
      "గుర్తించిన ప్రమాణానికి సంబంధించిన ప్రతినిధి పరీక్ష అవసరాలు ఇవి.",
    certificationLabel: "సర్టిఫికేషన్",
    certificationTitle: "BIS సర్టిఫికేషన్ విధానం",
    certificationText:
      "ఖచ్చితమైన సర్టిఫికేషన్ విధానం వర్తించే ఉత్పత్తి ప్రమాణం మరియు పథకంపై ఆధారపడి ఉంటుంది.",
    stepApplication: "దరఖాస్తు",
    stepApplicationDesc:
      "వర్తించే BIS ప్రక్రియ ద్వారా అవసరమైన దరఖాస్తు మరియు ఉత్పత్తి సమాచారాన్ని సమర్పించాలి.",
    stepTesting: "ఉత్పత్తి పరీక్ష",
    stepTestingDesc:
      "వర్తించే భారతీయ ప్రమాణం ప్రకారం ఉత్పత్తిని పరీక్షిస్తారు.",
    stepAssessment: "మూల్యాంకనం",
    stepAssessmentDesc:
      "BIS దరఖాస్తు, పరీక్ష ఫలితాలు మరియు అవసరమైన పత్రాలను పరిశీలిస్తుంది.",
    stepLicence: "లైసెన్స్ / సర్టిఫికేషన్",
    stepLicenceDesc:
      "అవసరాలు పూర్తి అయితే సంబంధిత BIS సర్టిఫికేషన్ ప్రక్రియ కొనసాగుతుంది.",
    labLabel: "ప్రయోగశాల సమాచారం",
    labTitle: "సంబంధిత BIS ప్రయోగశాలను కనుగొనండి",
    labText:
      "ఎంచుకున్న ప్రమాణానికి సంబంధించిన ప్రయోగశాలలు మరియు పరీక్ష పరిధిని BIS ప్రయోగశాల శోధన ద్వారా చూడండి.",
    openLab: "BIS ప్రయోగశాల శోధనను తెరవండి",
    noteTitle: "ముఖ్యమైనది",
    noteText:
      "పరీక్షకు ముందు ప్రయోగశాల అందుబాటు మరియు పరీక్ష పరిధిని ప్రస్తుత BIS సమాచారంతో ధృవీకరించండి.",
    backResult: "← ఫలితానికి తిరిగి వెళ్లండి",
    chatTitle: "BIS Xpert",
    chatSubtitle: "మీ ఉత్పత్తి గురించి అడగండి",
    chatPlaceholder: "మీ ప్రశ్నను టైప్ చేయండి...",
    backHome: "← మళ్లీ ప్రారంభించండి",
    source: "మూలం",
    prototypeMatch: "ప్రోటోటైప్ మ్యాచ్",
  },

  Hindi: {
    welcome: "BIS Xpert में आपका स्वागत है",
    title1: "भारतीय मानकों को समझें।",
    title2: "बिना जटिलता के।",
    description:
      "अपने उत्पाद का विवरण दें। BIS Xpert लागू भारतीय मानक, परीक्षण आवश्यकताओं, प्रमाणन प्रक्रिया और प्रयोगशाला जानकारी को समझने में मदद करता है।",
    productLabel: "अपने उत्पाद का विवरण दें",
    placeholder:
      "उदाहरण: मैं घरेलू उपयोग के लिए स्टेनलेस स्टील की पानी की बोतल बनाता हूँ...",
    getHelp: "सहायता प्राप्त करें",
    examples: "एक उदाहरण आज़माएँ",
    waterBottle: "पानी की बोतल",
    pressureCooker: "प्रेशर कुकर",
    cement: "सीमेंट",
    safetyHelmet: "सुरक्षा हेलमेट",
    electricalSwitch: "इलेक्ट्रिकल स्विच",
    ledLamp: "LED लैम्प",
    footer: "BIS Xpert द्वारा संचालित",
    analysisTitle: "आपके उत्पाद का विश्लेषण हो रहा है",
    analysisText: "हम संबंधित भारतीय मानक और आवश्यकताओं की पहचान कर रहे हैं।",
    step1: "उत्पाद विवरण को समझना",
    step2: "लागू मानक की पहचान करना",
    step3: "आवश्यकताओं को तैयार करना",
    resultLabel: "मानक की पहचान हुई",
    applicable: "लागू भारतीय मानक",
    actionsTitle: "आप क्या जानना चाहते हैं?",
    testing: "परीक्षण आवश्यकताएँ",
    testingDesc: "इस उत्पाद से संबंधित परीक्षण देखें।",
    certification: "प्रमाणन",
    certificationDesc: "सामान्य BIS प्रमाणन प्रक्रिया समझें।",
    laboratory: "प्रयोगशाला",
    laboratoryDesc: "संबंधित BIS प्रयोगशाला जानकारी खोजें।",
    askTitle: "कोई और प्रश्न है?",
    askDesc: "इस उत्पाद के बारे में BIS Xpert से पूछें।",
    askButton: "BIS Xpert से पूछें",
    disclaimer:
      "प्रोटोटाइप प्रदर्शन। उत्पादन संस्करण में परिणाम सत्यापित BIS स्रोतों पर आधारित होंगे।",
    detailsLabel: "परीक्षण आवश्यकताएँ",
    detailsTitle: "इस उत्पाद के परीक्षण",
    detailsText: "ये पहचाने गए मानक से जुड़े प्रतिनिधि परीक्षण हैं।",
    certificationLabel: "प्रमाणन",
    certificationTitle: "BIS प्रमाणन प्रक्रिया",
    certificationText:
      "सटीक प्रमाणन प्रक्रिया लागू उत्पाद मानक और योजना पर निर्भर करती है।",
    stepApplication: "आवेदन",
    stepApplicationDesc:
      "लागू BIS प्रक्रिया के माध्यम से आवश्यक आवेदन और उत्पाद जानकारी जमा करें।",
    stepTesting: "उत्पाद परीक्षण",
    stepTestingDesc:
      "उत्पाद का परीक्षण लागू भारतीय मानक की आवश्यकताओं के अनुसार किया जाता है।",
    stepAssessment: "मूल्यांकन",
    stepAssessmentDesc:
      "BIS आवेदन, परीक्षण परिणाम और आवश्यक दस्तावेजों का मूल्यांकन करता है।",
    stepLicence: "लाइसेंस / प्रमाणन",
    stepLicenceDesc:
      "आवश्यकताएँ पूरी होने पर संबंधित BIS प्रमाणन प्रक्रिया आगे बढ़ सकती है।",
    labLabel: "प्रयोगशाला जानकारी",
    labTitle: "संबंधित BIS प्रयोगशाला खोजें",
    labText:
      "चयनित मानक के लिए प्रयोगशालाओं और उपलब्ध परीक्षण दायरे की जानकारी BIS प्रयोगशाला खोज से प्राप्त करें।",
    openLab: "BIS प्रयोगशाला खोज खोलें",
    noteTitle: "महत्वपूर्ण",
    noteText:
      "परीक्षण से पहले प्रयोगशाला की उपलब्धता और दायरे को वर्तमान BIS जानकारी से सत्यापित करें।",
    backResult: "← परिणाम पर वापस जाएँ",
    chatTitle: "BIS Xpert",
    chatSubtitle: "अपने उत्पाद के बारे में पूछें",
    chatPlaceholder: "अपना प्रश्न लिखें...",
    backHome: "← फिर से शुरू करें",
    source: "स्रोत",
    prototypeMatch: "प्रोटोटाइप मैच",
  },
};

/* =========================
   MANUFACTURER
========================= */

function Manufacturer({ onBack }) {
  const [language, setLanguage] = useState("English");
  const [query, setQuery] = useState("");
  const [screen, setScreen] = useState("home");
  const [productData, setProductData] = useState(defaultProduct);

  const [showSplash, setShowSplash] = useState(true);

  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const t = translations[language];

  /* =========================
     SPLASH
  ========================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /* =========================
     VOICE INPUT
  ========================= */

  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Voice input is not supported in this browser. Please use Google Chrome or Microsoft Edge.",
      );
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang =
      language === "Telugu"
        ? "te-IN"
        : language === "Hindi"
          ? "hi-IN"
          : "en-IN";

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setQuery((previous) => {
        if (!previous.trim()) {
          return transcript;
        }

        return `${previous} ${transcript}`;
      });
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  /* =========================
     ANALYSIS
  ========================= */

  const startAnalysis = () => {
    if (!query.trim()) return;

    const userQuery = query.toLowerCase();

    let result;

    if (
      userQuery.includes("pressure cooker") ||
      userQuery.includes("cooker") ||
      userQuery.includes("प्रेशर कुकर") ||
      userQuery.includes("ప్రెషర్ కుక్కర్")
    ) {
      result = {
        title: "Domestic Pressure Cooker",
        category: "Household / Kitchen Product",
        material: "Aluminium / Stainless Steel",
        capacity: "Domestic Use",
        standard: "IS 2347:2023",
        standardTitle: "Domestic Pressure Cooker — Specification",
        applicability:
          "This standard specifies requirements for domestic pressure cookers, including construction, safety and performance requirements.",
        confidence: 91,
        sourceLabel: "BIS Standard Details",
        sourceUrl:
          "https://standards.bis.gov.in/website/standard-details?encryptedId=eyJpdiI6ImNmMTN4Wk1aU2NicjNKbXo0ejU1dmc9PSIsInZhbHVlIjoiaU1EOW8ySFpZMnJhNnJta2hqdFhYdz09IiwibWFjIjoiOGY3MTk3ZTFiZjI2NWViZDA0NTRkMWUxNWQ4MzQwNjk5YzE0OWU4MGI1ZWFjZWMwMmEzMGE4NTUxZjA2OThiNiIsInRhZyI6IiJ9",
        tests: [
          "Air Pressure Test",
          "Proof Pressure Test",
          "Safety Relief Device Test",
          "Bursting Pressure Test",
          "Handle Testing",
        ],
      };
    } else if (
      userQuery.includes("cement") ||
      userQuery.includes("portland") ||
      userQuery.includes("सीमेंट") ||
      userQuery.includes("సిమెంట్")
    ) {
      result = {
        title: "Ordinary Portland Cement",
        category: "Construction Material",
        material: "Cement",
        capacity: "Construction Use",
        standard: "IS 269:2015",
        standardTitle: "Ordinary Portland Cement — Specification",
        applicability:
          "This standard specifies requirements for ordinary Portland cement used in construction.",
        confidence: 93,
        sourceLabel: "BIS Standard",
        sourceUrl: "https://www.bis.gov.in/is-269-2015/?lang=en",
        tests: [
          "Fineness Test",
          "Setting Time Test",
          "Soundness Test",
          "Compressive Strength",
          "Chemical Analysis",
        ],
      };
    } else if (
      userQuery.includes("safety helmet") ||
      userQuery.includes("industrial helmet") ||
      userQuery.includes("helmet") ||
      userQuery.includes("सुरक्षा हेलमेट") ||
      userQuery.includes("సేఫ్టీ హెల్మెట్")
    ) {
      result = {
        title: "Industrial Safety Helmet",
        category: "Safety Equipment",
        material: "Protective Helmet",
        capacity: "Industrial Use",
        standard: "IS 2925:1984",
        standardTitle: "Specification for Industrial Safety Helmets",
        applicability:
          "This standard covers industrial safety helmets and specifies requirements related to construction, materials and performance.",
        confidence: 92,
        sourceLabel: "BIS Product Manual",
        sourceUrl:
          "https://www.bis.gov.in/wp-content/uploads/IS-2925-Product-Manual.pdf",
        tests: [
          "Shock Absorption Resistance",
          "Penetration Resistance",
          "Flammability Resistance",
          "Electrical Resistance",
          "Water Absorption",
          "Heat Resistance",
        ],
      };
    } else if (
      userQuery.includes("electrical switch") ||
      userQuery.includes("electric switch") ||
      userQuery.includes("switch") ||
      userQuery.includes("इलेक्ट्रिकल स्विच") ||
      userQuery.includes("ఎలక్ట్రికల్ స్విచ్")
    ) {
      result = {
        title: "Domestic Electrical Switch",
        category: "Electrical Product",
        material: "Electrical Switch",
        capacity: "Domestic Use",
        standard: "IS 3854:2023",
        standardTitle:
          "Switches for Domestic and Similar Purposes — Specification",
        applicability:
          "This standard specifies requirements for switches intended for domestic and similar purposes.",
        confidence: 93,
        sourceLabel: "BIS Standard",
        sourceUrl: "https://www.bis.gov.in/is-3854-2023/?lang=en",
        tests: [
          "Insulation Resistance Test",
          "Electric Strength Test",
          "Temperature Rise Test",
          "Mechanical Strength Test",
          "Resistance to Heat",
          "Resistance to Abnormal Heat and Fire",
        ],
      };
    } else if (
      userQuery.includes("led lamp") ||
      userQuery.includes("led bulb") ||
      userQuery.includes("led light") ||
      userQuery.includes("led") ||
      userQuery.includes("एलईडी") ||
      userQuery.includes("ఎల్‌ఈడీ")
    ) {
      result = {
        title: "Self-Ballasted LED Lamp",
        category: "Lighting / Electrical Product",
        material: "LED Lamp",
        capacity: "General Lighting",
        standard: "IS 16102",
        standardTitle: "Self-Ballasted LED Lamps for General Lighting Services",
        applicability:
          "The IS 16102 series covers self-ballasted LED lamps for general lighting services, including safety and performance requirements.",
        confidence: 90,
        sourceLabel: "BIS LIMS",
        sourceUrl:
          "https://lims.bis.gov.in/home/search_is_number/?is_number__doc_no=16102",
        tests: [
          "General Safety Requirements",
          "Cap Interchangeability",
          "Insulation Resistance",
          "Electric Strength Test",
          "Resistance to Heat",
          "Resistance to Flame and Ignition",
        ],
      };
    } else {
      result = defaultProduct;
    }

    setProductData(result);

    setMessages([
      {
        role: "assistant",
        text: `Hi! I'm BIS Xpert. Ask me anything about ${result.title}, its standard, testing, or certification.`,
      },
    ]);

    setChatOpen(false);
    setChatMessage("");
    setScreen("analysis");

    setTimeout(() => {
      setScreen("result");
    }, 3000);
  };

  /* =========================
     EXAMPLE PRODUCT
  ========================= */

  const selectExample = (example) => {
    setQuery(example);
  };

  /* =========================
     BACK HOME
  ========================= */

  const goHome = () => {
    setScreen("home");
    setQuery("");
    setChatOpen(false);
    setChatMessage("");
  };

  /* =========================
     CHAT
  ========================= */

  const sendChatMessage = () => {
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setChatMessage("");

    setTimeout(() => {
      let response;

      const lower = userMessage.toLowerCase();

      if (
        lower.includes("standard") ||
        lower.includes("is number") ||
        lower.includes("प्रमाण") ||
        lower.includes("ప్రమాణం")
      ) {
        response = `${productData.title} is currently matched in this prototype with ${productData.standard} — ${productData.standardTitle}.`;
      } else if (
        lower.includes("test") ||
        lower.includes("testing") ||
        lower.includes("परीक्षण") ||
        lower.includes("పరీక్ష")
      ) {
        response = `Some representative tests include: ${productData.tests.join(", ")}. The exact testing scope should be verified against the current BIS requirements.`;
      } else if (
        lower.includes("certification") ||
        lower.includes("license") ||
        lower.includes("प्रमाणन") ||
        lower.includes("సర్టిఫికేషన్")
      ) {
        response =
          "The general pathway involves application, product testing, assessment of results and documentation, followed by the applicable BIS licence or certification process.";
      } else if (
        lower.includes("lab") ||
        lower.includes("laboratory") ||
        lower.includes("प्रयोगशाला") ||
        lower.includes("ప్రయోగశాల")
      ) {
        response =
          "You can use the BIS laboratory search to check laboratories and testing scopes relevant to the identified standard.";
      } else {
        response = `For ${productData.title}, I can help you understand the applicable standard, testing requirements, certification pathway, and laboratory information.`;
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: response,
        },
      ]);
    }, 600);
  };

  /* =========================
     OPEN LAB
  ========================= */

  const openLaboratorySearch = () => {
    window.open(
      "https://lims.bis.gov.in/home/search_is_number/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  /* =========================
     SPLASH
  ========================= */

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <h1>BIS Xpert</h1>
          <p>Indian Standards Assistant</p>

          <div className="splash-loader">
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     HOME
  ========================= */

  if (screen === "home") {
    return (
      <div className="app app-visible">
        <div className="home">
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
                <option value="Hindi">हिन्दी</option>
              </select>
            </div>
          </nav>

          <main className="hero">
            <div className="welcome">{t.welcome}</div>

            <h1>
              {t.title1}
              <br />
              <span>{t.title2}</span>
            </h1>

            <p>{t.description}</p>

            <div className="input-card">
              <label>{t.productLabel}</label>

              <div className="input-wrapper">
                <textarea
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t.placeholder}
                />

                <button
                  type="button"
                  className={`voice-button ${isListening ? "listening" : ""}`}
                  onClick={startVoiceInput}
                  aria-label="Voice input"
                >
                  {isListening ? "🔴" : "🎙️"}
                </button>
              </div>

              {isListening && (
                <div className="voice-status">🎙️ Listening... Speak now</div>
              )}

              <button
                className="primary-button"
                onClick={startAnalysis}
                disabled={!query.trim()}
              >
                <span>{t.getHelp}</span>
                <span>→</span>
              </button>
            </div>

            <div className="examples">
              <span>{t.examples}</span>

              <div className="example-buttons">
                <button
                  onClick={() =>
                    selectExample(
                      "I manufacture stainless steel water bottles for domestic use",
                    )
                  }
                >
                  {t.waterBottle}
                </button>

                <button
                  onClick={() =>
                    selectExample(
                      "I manufacture domestic pressure cookers for household use",
                    )
                  }
                >
                  {t.pressureCooker}
                </button>

                <button
                  onClick={() =>
                    selectExample(
                      "I manufacture ordinary Portland cement for construction",
                    )
                  }
                >
                  {t.cement}
                </button>

                <button
                  onClick={() =>
                    selectExample(
                      "I manufacture industrial safety helmets for workers",
                    )
                  }
                >
                  {t.safetyHelmet}
                </button>

                <button
                  onClick={() =>
                    selectExample(
                      "I manufacture electrical switches for domestic use",
                    )
                  }
                >
                  {t.electricalSwitch}
                </button>

                <button
                  onClick={() =>
                    selectExample(
                      "I manufacture LED lamps for general lighting",
                    )
                  }
                >
                  {t.ledLamp}
                </button>
              </div>
            </div>
          </main>

          <footer className="home-footer">
            <span>{t.footer}</span>
            <span>•</span>
            <span>INNOCRAFTERS</span>
          </footer>
        </div>
      </div>
    );
  }

  /* =========================
     ANALYSIS
  ========================= */

  if (screen === "analysis") {
    return (
      <div className="app app-visible">
        <div className="analysis-screen">
          <div className="analysis-box">
            <div className="loading-icon">✦</div>

            <h1>{t.analysisTitle}</h1>

            <p>{t.analysisText}</p>

            <div className="progress-list">
              <div className="progress-item">
                <span>✓</span>
                {t.step1}
              </div>

              <div className="progress-item">
                <span>✓</span>
                {t.step2}
              </div>

              <div className="progress-item">
                <span className="loading-dot">●</span>
                {t.step3}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     RESULT
  ========================= */

  if (screen === "result") {
    return (
      <div className="app app-visible">
        <div className="result-screen">
          <header className="result-header">
            <button className="back-button" onClick={goHome}>
              {t.backHome}
            </button>

            <div className="brand">
              <div className="brand-icon">BX</div>

              <div>
                <strong>BIS Xpert</strong>
                <span>Indian Standards Assistant</span>
              </div>
            </div>

            <div></div>
          </header>

          <main className="result-container">
            <div className="result-intro">
              <span className="success-label">{t.resultLabel}</span>

              <h1>{productData.title}</h1>

              <p>
                {productData.category} • {productData.material}
              </p>
            </div>

            <section className="standard-card">
              <div className="standard-card-top">
                <span>{t.applicable}</span>

                <div className="match">
                  {productData.confidence}% {t.prototypeMatch}
                </div>
              </div>

              <h2>{productData.standard}</h2>

              <h3>{productData.standardTitle}</h3>

              <p>{productData.applicability}</p>

              <div className="source">
                {t.source}:{" "}
                <button
                  onClick={() =>
                    window.open(
                      productData.sourceUrl,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  {productData.sourceLabel}
                </button>
              </div>
            </section>

            <section className="next-section">
              <h2>{t.actionsTitle}</h2>

              <div className="action-grid">
                <button onClick={() => setScreen("details")}>
                  <strong>{t.testing}</strong>
                  <span>{t.testingDesc}</span>
                </button>

                <button onClick={() => setScreen("certification")}>
                  <strong>{t.certification}</strong>
                  <span>{t.certificationDesc}</span>
                </button>

                <button onClick={() => setScreen("laboratory")}>
                  <strong>{t.laboratory}</strong>
                  <span>{t.laboratoryDesc}</span>
                </button>
              </div>

              {!chatOpen && (
                <div className="ask-card">
                  <div>
                    <strong>{t.askTitle}</strong>
                    <p>{t.askDesc}</p>
                  </div>

                  <button onClick={() => setChatOpen(true)}>
                    {t.askButton}
                  </button>
                </div>
              )}

              {chatOpen && (
                <div className="chat-card">
                  <div className="chat-header">
                    <div>
                      <strong>{t.chatTitle}</strong>
                      <span>{t.chatSubtitle}</span>
                    </div>

                    <button
                      className="chat-close"
                      onClick={() => setChatOpen(false)}
                    >
                      ×
                    </button>
                  </div>

                  <div className="chat-messages">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`chat-message ${message.role}`}
                      >
                        {message.text}
                      </div>
                    ))}
                  </div>

                  <div className="chat-input">
                    <input
                      value={chatMessage}
                      onChange={(event) => setChatMessage(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          sendChatMessage();
                        }
                      }}
                      placeholder={t.chatPlaceholder}
                    />

                    <button onClick={sendChatMessage}>→</button>
                  </div>
                </div>
              )}
            </section>

            <p className="disclaimer">{t.disclaimer}</p>
          </main>
        </div>
      </div>
    );
  }

  /* =========================
     TESTING
  ========================= */

  if (screen === "details") {
    return (
      <div className="app app-visible">
        <div className="details-screen">
          <header className="result-header">
            <button className="back-button" onClick={() => setScreen("result")}>
              {t.backResult}
            </button>

            <div className="brand">
              <div className="brand-icon">BX</div>

              <div>
                <strong>BIS Xpert</strong>
                <span>Indian Standards Assistant</span>
              </div>
            </div>

            <div></div>
          </header>

          <main className="details-container">
            <div className="details-heading">
              <span>{t.detailsLabel}</span>

              <h1>{t.detailsTitle}</h1>

              <p>{t.detailsText}</p>
            </div>

            <div className="details-card">
              {productData.tests.map((test, index) => (
                <div className="test-item" key={test}>
                  <div className="test-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <strong>{test}</strong>

                    <p>
                      Testing requirement associated with the identified product
                      standard.
                    </p>
                  </div>

                  <span>✓</span>
                </div>
              ))}
            </div>

            <button
              className="details-back"
              onClick={() => setScreen("result")}
            >
              {t.backResult}
            </button>
          </main>
        </div>
      </div>
    );
  }

  /* =========================
     CERTIFICATION
  ========================= */

  if (screen === "certification") {
    return (
      <div className="app app-visible">
        <div className="details-screen">
          <header className="result-header">
            <button className="back-button" onClick={() => setScreen("result")}>
              {t.backResult}
            </button>

            <div className="brand">
              <div className="brand-icon">BX</div>

              <div>
                <strong>BIS Xpert</strong>
                <span>Indian Standards Assistant</span>
              </div>
            </div>

            <div></div>
          </header>

          <main className="details-container">
            <div className="details-heading">
              <span>{t.certificationLabel}</span>

              <h1>{t.certificationTitle}</h1>

              <p>{t.certificationText}</p>
            </div>

            <div className="details-card">
              <div className="certification-item">
                <div className="test-number">01</div>

                <div>
                  <strong>{t.stepApplication}</strong>
                  <p>{t.stepApplicationDesc}</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="test-number">02</div>

                <div>
                  <strong>{t.stepTesting}</strong>
                  <p>{t.stepTestingDesc}</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="test-number">03</div>

                <div>
                  <strong>{t.stepAssessment}</strong>
                  <p>{t.stepAssessmentDesc}</p>
                </div>
              </div>

              <div className="certification-item">
                <div className="test-number">04</div>

                <div>
                  <strong>{t.stepLicence}</strong>
                  <p>{t.stepLicenceDesc}</p>
                </div>
              </div>
            </div>

            <div className="details-note">
              <strong>{t.noteTitle}</strong>
              <p>{t.certificationText}</p>
            </div>

            <button
              className="details-back"
              onClick={() => setScreen("result")}
            >
              {t.backResult}
            </button>
          </main>
        </div>
      </div>
    );
  }

  /* =========================
     LABORATORY
  ========================= */

  if (screen === "laboratory") {
    return (
      <div className="app app-visible">
        <div className="details-screen">
          <header className="result-header">
            <button className="back-button" onClick={() => setScreen("result")}>
              {t.backResult}
            </button>

            <div className="brand">
              <div className="brand-icon">BX</div>

              <div>
                <strong>BIS Xpert</strong>
                <span>Indian Standards Assistant</span>
              </div>
            </div>

            <div></div>
          </header>

          <main className="details-container">
            <div className="details-heading">
              <span>{t.labLabel}</span>

              <h1>{t.labTitle}</h1>

              <p>{t.labText}</p>
            </div>

            <div className="lab-info-card">
              <div className="lab-icon">⌕</div>

              <div>
                <strong>{productData.standard}</strong>

                <p>{t.labText}</p>

                <button onClick={openLaboratorySearch}>{t.openLab}</button>
              </div>
            </div>

            <div className="details-note">
              <strong>{t.noteTitle}</strong>
              <p>{t.noteText}</p>
            </div>

            <button
              className="details-back"
              onClick={() => setScreen("result")}
            >
              {t.backResult}
            </button>
          </main>
        </div>
      </div>
    );
  }

  return null;
}

export default Manufacturer;
