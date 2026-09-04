import { useEffect, useState } from "react";
import "./index.css";

const defaultProduct = {
  title: "Stainless Steel Water Bottle",
  category: "Consumer Product",
  material: "Stainless Steel",
  capacity: "1000 ml",
  standard: "IS 17803:2022",
  standardTitle: "Potable Water Bottles (Metallic) — Specification",
  applicability:
    "This standard applies to potable water bottles made from metallic materials such as stainless steel.",
  confidence: 94,
  sourceLabel: "BIS Product Manual",
  sourceUrl:
    "https://www.bis.gov.in/wp-content/uploads/2024/12/PM-IS-17803-1.pdf",
  tests: [
    "Capacity Test",
    "Impact Resistance",
    "Leakage Test",
    "Stability Test",
    "Load Test",
  ],
};

const translations = {
  English: {
    welcome: "Welcome to BIS Xpert",
    heading: "Need help with an",
    headingHighlight: "Indian Standard?",
    description:
      "Tell us about your product or ask a question. We'll help you understand what to do next.",
    inputLabel: "Describe your product or question",
    placeholder:
      "Example: I manufacture stainless steel water bottles of 1000 ml...",
    getHelp: "Get Help",
    tryExample: "Try an example",
    waterBottle: "Water Bottle",
    pressureCooker: "Pressure Cooker",
    cement: "Cement",
    simple: "Simple",
    helpful: "Helpful",
    evidenceBased: "Evidence-based",

    understanding: "Understanding your request",
    preparing: "BIS Xpert is preparing a simple answer for you.",
    understandingProduct: "Understanding your product",
    findingStandard: "Finding the relevant standard",
    preparingRequirements: "Preparing requirements",

    understood: "WE UNDERSTOOD YOUR PRODUCT",
    likelyStandard: "LIKELY APPLICABLE STANDARD",
    demoMatch: "prototype match",
    evidenceSource: "Evidence source",
    whatKnow: "What would you like to know?",
    testsNeeded: "What tests are needed?",
    testingRequirements: "See the testing requirements →",
    certification: "How do I get certification?",
    certificationProcess: "Understand the BIS certification process →",
    testingLab: "Find a testing laboratory",
    labScope: "Find laboratories with relevant scope →",
    anotherQuestion: "Have another question?",
    askSimple: "Ask BIS Xpert in simple language.",
    askXpert: "Ask BIS Xpert →",
    askQuestion: "Ask a question...",

    testingLabel: "TESTING REQUIREMENTS",
    testingTitle: "What tests are needed?",
    testingDescription:
      "The following testing requirements are identified for the selected product.",
    certificationLabel: "CERTIFICATION",
    certificationTitle: "How do I get BIS certification?",
    certificationDescription:
      "A simple overview of the certification pathway for your product.",
    labLabel: "TESTING LABORATORY",
    labTitle: "Find a testing laboratory",
    labDescription:
      "Look for a laboratory whose BIS LIMS scope includes the relevant standard and tests.",
    labSearch: "BIS LIMS Laboratory Search",
    openLab: "Open BIS Laboratory Search →",
    important: "Important",
    verifyScope:
      "Laboratory availability and testing scope can change. Always verify the current scope in the official BIS database.",
    backResults: "← Back to results",
    startAgain: "← Start Again",
    labSearchDescription:
      "Search the official BIS laboratory database to verify testing scope for",

    testingDescriptionItem: "Testing requirement identified for",
    certificationStep1: "Identify the applicable standard",
    certificationStep2: "Complete product testing",
    certificationStep3: "Prepare required documents",
    certificationStep4: "Apply for certification",
    certificationDesc1: "Applicable standard:",
    certificationDesc2: "Testing against applicable requirements",
    certificationDesc3: "Product and manufacturing documentation",
    certificationDesc4: "Follow the applicable BIS certification process",

    disclaimer:
      "This is an AI-assisted demonstration. Final requirements should be verified with BIS and applicable regulations.",
  },

  తెలుగు: {
    welcome: "BIS Xpert కు స్వాగతం",
    heading: "మీకు సహాయం కావాలా",
    headingHighlight: "భారతీయ ప్రమాణంపై?",
    description:
      "మీ ఉత్పత్తి గురించి చెప్పండి లేదా ప్రశ్న అడగండి. తర్వాత ఏమి చేయాలో అర్థం చేసుకోవడంలో మేము సహాయం చేస్తాము.",
    inputLabel: "మీ ఉత్పత్తి లేదా ప్రశ్నను వివరించండి",
    placeholder:
      "ఉదాహరణ: నేను 1000 ml స్టెయిన్‌లెస్ స్టీల్ వాటర్ బాటిళ్లను తయారు చేస్తున్నాను...",
    getHelp: "సహాయం పొందండి",
    tryExample: "ఉదాహరణ ప్రయత్నించండి",
    waterBottle: "వాటర్ బాటిల్",
    pressureCooker: "ప్రెషర్ కుక్కర్",
    cement: "సిమెంట్",
    simple: "సులభం",
    helpful: "సహాయకరం",
    evidenceBased: "ఆధారాలతో",

    understanding: "మీ అభ్యర్థనను అర్థం చేసుకుంటున్నాము",
    preparing: "BIS Xpert మీ కోసం సరళమైన సమాధానాన్ని సిద్ధం చేస్తోంది.",
    understandingProduct: "మీ ఉత్పత్తిని అర్థం చేసుకుంటున్నాము",
    findingStandard: "సంబంధిత ప్రమాణాన్ని కనుగొంటున్నాము",
    preparingRequirements: "అవసరాలను సిద్ధం చేస్తున్నాము",

    understood: "మీ ఉత్పత్తిని మేము అర్థం చేసుకున్నాము",
    likelyStandard: "వర్తించే అవకాశం ఉన్న ప్రమాణం",
    demoMatch: "ప్రోటోటైప్ మ్యాచ్",
    evidenceSource: "ఆధార మూలం",
    whatKnow: "మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
    testsNeeded: "ఏ పరీక్షలు అవసరం?",
    testingRequirements: "పరీక్షా అవసరాలను చూడండి →",
    certification: "సర్టిఫికేషన్ ఎలా పొందాలి?",
    certificationProcess: "BIS సర్టిఫికేషన్ ప్రక్రియను తెలుసుకోండి →",
    testingLab: "పరీక్షా ప్రయోగశాలను కనుగొనండి",
    labScope: "సంబంధిత పరిధి ఉన్న ప్రయోగశాలలను కనుగొనండి →",
    anotherQuestion: "మరో ప్రశ్న ఉందా?",
    askSimple: "BIS Xpert ను సులభమైన భాషలో అడగండి.",
    askXpert: "BIS Xpert ను అడగండి →",
    askQuestion: "ప్రశ్న అడగండి...",

    testingLabel: "పరీక్షా అవసరాలు",
    testingTitle: "ఏ పరీక్షలు అవసరం?",
    testingDescription:
      "ఎంచుకున్న ఉత్పత్తికి సంబంధించిన క్రింది పరీక్షా అవసరాలు గుర్తించబడ్డాయి.",
    certificationLabel: "సర్టిఫికేషన్",
    certificationTitle: "BIS సర్టిఫికేషన్ ఎలా పొందాలి?",
    certificationDescription:
      "మీ ఉత్పత్తికి సంబంధించిన సర్టిఫికేషన్ మార్గం యొక్క సరళమైన వివరణ.",
    labLabel: "పరీక్షా ప్రయోగశాల",
    labTitle: "పరీక్షా ప్రయోగశాలను కనుగొనండి",
    labDescription:
      "సంబంధిత ప్రమాణం మరియు పరీక్షలను కలిగి ఉన్న BIS LIMS పరిధి ఉన్న ప్రయోగశాలను చూడండి.",
    labSearch: "BIS LIMS ప్రయోగశాల శోధన",
    openLab: "BIS ప్రయోగశాల శోధనను తెరవండి →",
    important: "ముఖ్యమైనది",
    verifyScope:
      "ప్రయోగశాల లభ్యత మరియు పరీక్షా పరిధి మారవచ్చు. అధికారిక BIS డేటాబేస్‌లో ప్రస్తుత పరిధిని ఎల్లప్పుడూ ధృవీకరించండి.",
    backResults: "← ఫలితాలకు తిరిగి వెళ్ళండి",
    startAgain: "← మళ్లీ ప్రారంభించండి",
    labSearchDescription:
      "పరీక్షా పరిధిని ధృవీకరించడానికి అధికారిక BIS ప్రయోగశాల డేటాబేస్‌లో శోధించండి:",

    testingDescriptionItem: "పరీక్షా అవసరం గుర్తించబడింది:",
    certificationStep1: "వర్తించే ప్రమాణాన్ని గుర్తించండి",
    certificationStep2: "ఉత్పత్తి పరీక్షను పూర్తి చేయండి",
    certificationStep3: "అవసరమైన పత్రాలను సిద్ధం చేయండి",
    certificationStep4: "సర్టిఫికేషన్ కోసం దరఖాస్తు చేయండి",
    certificationDesc1: "వర్తించే ప్రమాణం:",
    certificationDesc2: "వర్తించే అవసరాలకు అనుగుణంగా పరీక్ష",
    certificationDesc3: "ఉత్పత్తి మరియు తయారీ పత్రాలు",
    certificationDesc4: "వర్తించే BIS సర్టిఫికేషన్ ప్రక్రియను అనుసరించండి",

    disclaimer:
      "ఇది AI సహాయంతో రూపొందించిన డెమో. తుది అవసరాలను BIS మరియు వర్తించే నిబంధనలతో ధృవీకరించాలి.",
  },

  हिन्दी: {
    welcome: "BIS Xpert में आपका स्वागत है",
    heading: "क्या आपको मदद चाहिए",
    headingHighlight: "भारतीय मानक के बारे में?",
    description:
      "अपने उत्पाद के बारे में बताएं या कोई प्रश्न पूछें। हम आपको आगे क्या करना है, यह समझने में मदद करेंगे।",
    inputLabel: "अपने उत्पाद या प्रश्न का विवरण दें",
    placeholder:
      "उदाहरण: मैं 1000 ml की स्टेनलेस स्टील पानी की बोतल बनाता हूँ...",
    getHelp: "मदद प्राप्त करें",
    tryExample: "एक उदाहरण आज़माएं",
    waterBottle: "पानी की बोतल",
    pressureCooker: "प्रेशर कुकर",
    cement: "सीमेंट",
    simple: "सरल",
    helpful: "उपयोगी",
    evidenceBased: "प्रमाण-आधारित",

    understanding: "आपके अनुरोध को समझा जा रहा है",
    preparing: "BIS Xpert आपके लिए एक सरल उत्तर तैयार कर रहा है।",
    understandingProduct: "आपके उत्पाद को समझा जा रहा है",
    findingStandard: "संबंधित मानक खोजा जा रहा है",
    preparingRequirements: "आवश्यकताएं तैयार की जा रही हैं",

    understood: "हमने आपके उत्पाद को समझ लिया",
    likelyStandard: "संभावित रूप से लागू मानक",
    demoMatch: "प्रोटोटाइप मैच",
    evidenceSource: "स्रोत",
    whatKnow: "आप क्या जानना चाहते हैं?",
    testsNeeded: "कौन से परीक्षण आवश्यक हैं?",
    testingRequirements: "परीक्षण आवश्यकताएं देखें →",
    certification: "प्रमाणन कैसे प्राप्त करें?",
    certificationProcess: "BIS प्रमाणन प्रक्रिया समझें →",
    testingLab: "परीक्षण प्रयोगशाला खोजें",
    labScope: "संबंधित दायरे वाली प्रयोगशालाएं खोजें →",
    anotherQuestion: "क्या आपका कोई और प्रश्न है?",
    askSimple: "BIS Xpert से सरल भाषा में पूछें।",
    askXpert: "BIS Xpert से पूछें →",
    askQuestion: "प्रश्न पूछें...",

    testingLabel: "परीक्षण आवश्यकताएं",
    testingTitle: "कौन से परीक्षण आवश्यक हैं?",
    testingDescription:
      "चयनित उत्पाद के लिए निम्नलिखित परीक्षण आवश्यकताओं की पहचान की गई है।",
    certificationLabel: "प्रमाणन",
    certificationTitle: "BIS प्रमाणन कैसे प्राप्त करें?",
    certificationDescription:
      "आपके उत्पाद के लिए प्रमाणन प्रक्रिया का एक सरल अवलोकन।",
    labLabel: "परीक्षण प्रयोगशाला",
    labTitle: "परीक्षण प्रयोगशाला खोजें",
    labDescription:
      "ऐसी प्रयोगशाला खोजें जिसके BIS LIMS दायरे में संबंधित मानक और परीक्षण शामिल हों।",
    labSearch: "BIS LIMS प्रयोगशाला खोज",
    openLab: "BIS प्रयोगशाला खोज खोलें →",
    important: "महत्वपूर्ण",
    verifyScope:
      "प्रयोगशाला की उपलब्धता और परीक्षण का दायरा बदल सकता है। आधिकारिक BIS डेटाबेस में वर्तमान दायरे की हमेशा पुष्टि करें।",
    backResults: "← परिणामों पर वापस जाएं",
    startAgain: "← फिर से शुरू करें",
    labSearchDescription:
      "परीक्षण के दायरे की पुष्टि करने के लिए आधिकारिक BIS प्रयोगशाला डेटाबेस में खोजें:",

    testingDescriptionItem: "परीक्षण आवश्यकता पहचानी गई:",
    certificationStep1: "लागू मानक की पहचान करें",
    certificationStep2: "उत्पाद परीक्षण पूरा करें",
    certificationStep3: "आवश्यक दस्तावेज तैयार करें",
    certificationStep4: "प्रमाणन के लिए आवेदन करें",
    certificationDesc1: "लागू मानक:",
    certificationDesc2: "लागू आवश्यकताओं के अनुसार परीक्षण",
    certificationDesc3: "उत्पाद और विनिर्माण दस्तावेज",
    certificationDesc4: "लागू BIS प्रमाणन प्रक्रिया का पालन करें",

    disclaimer:
      "यह AI-सहायता प्राप्त प्रदर्शन है। अंतिम आवश्यकताओं की BIS और लागू नियमों के साथ पुष्टि की जानी चाहिए।",
  },
};

function App() {
  const [query, setQuery] = useState("");
  const [screen, setScreen] = useState("home");
  const [detail, setDetail] = useState(null);
  const [language, setLanguage] = useState("English");

  const [productData, setProductData] = useState(defaultProduct);

  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: `Hi! I'm BIS Xpert. Ask me anything about ${defaultProduct.title}, its standard, testing, or certification.`,
    },
  ]);

  const text = (key) =>
    translations[language]?.[key] || translations.English[key];

  const startAnalysis = () => {
    if (!query.trim()) return;

    const userQuery = query.toLowerCase();

    let result;

    if (userQuery.includes("pressure cooker") || userQuery.includes("cooker")) {
      result = {
        title: "Domestic Pressure Cooker",
        category: "Consumer Product",
        material: "Aluminium / Stainless Steel",
        capacity: "Domestic Use",
        standard: "IS 2347",
        standardTitle:
          "Aluminium and Stainless Steel Pressure Cookers — Specification",
        applicability:
          "This standard specifies requirements for pressure cookers intended for domestic use.",
        confidence: 91,
        tests: [
          "Pressure Test",
          "Safety Valve Test",
          "Leakage Test",
          "Handle Strength Test",
          "Material Inspection",
        ],
      };
    } else if (userQuery.includes("cement") || userQuery.includes("portland")) {
      result = {
        title: "Ordinary Portland Cement",
        category: "Construction Material",
        material: "Cement",
        capacity: "Construction Use",
        standard: "IS 269",
        standardTitle: "Ordinary Portland Cement — Specification",
        applicability:
          "This standard specifies requirements for ordinary Portland cement used in construction.",
        confidence: 93,
        tests: [
          "Fineness Test",
          "Setting Time Test",
          "Soundness Test",
          "Compressive Strength",
          "Chemical Analysis",
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

  const selectExample = (example) => {
    setQuery(example);
  };

  const openDetail = (type) => {
    setDetail(type);
    setScreen("details");
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
      {
        role: "assistant",
        text: `For this demonstration, BIS Xpert identified your question as being related to ${productData.standard}. In a full implementation, the assistant would retrieve the relevant BIS documents and provide an evidence-backed answer.`,
      },
    ]);

    setChatMessage("");
  };

  return (
    <>
      <div className={`app ${showSplash ? "app-hidden" : "app-visible"}`}>
        <div className="app">
          {/* ================= HOME ================= */}

          {screen === "home" && (
            <main className="home">
              <header className="navbar">
                <div className="brand">
                  <div className="brand-icon">IS</div>

                  <div>
                    <strong>BIS Xpert</strong>
                    <span>Indian Standards Assistant</span>
                  </div>
                </div>

                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  aria-label="Select language"
                >
                  <option>English</option>
                  <option>తెలుగు</option>
                  <option>हिन्दी</option>
                </select>
              </header>

              <section className="hero">
                <div className="welcome">{text("welcome")}</div>

                <h1>
                  {text("heading")}
                  <br />
                  <span>{text("headingHighlight")}</span>
                </h1>

                <p>{text("description")}</p>

                <div className="input-card">
                  <label>{text("inputLabel")}</label>

                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={text("placeholder")}
                  />

                  <button
                    className="primary-button"
                    onClick={startAnalysis}
                    disabled={!query.trim()}
                  >
                    {text("getHelp")}
                    <span>→</span>
                  </button>
                </div>

                <div className="examples">
                  <span>{text("tryExample")}</span>

                  <div className="example-buttons">
                    <button
                      onClick={() =>
                        selectExample("Stainless steel water bottle, 1000 ml")
                      }
                    >
                      {text("waterBottle")}
                    </button>

                    <button
                      onClick={() => selectExample("Domestic pressure cooker")}
                    >
                      {text("pressureCooker")}
                    </button>

                    <button
                      onClick={() => selectExample("Ordinary Portland cement")}
                    >
                      {text("cement")}
                    </button>
                  </div>
                </div>
              </section>

              <footer className="home-footer">
                <span>{text("simple")}</span>
                <span>•</span>
                <span>{text("helpful")}</span>
                <span>•</span>
                <span>{text("evidenceBased")}</span>

                <div className="team-name">INNOCRAFTERS</div>
              </footer>
            </main>
          )}

          {/* ================= ANALYSIS ================= */}

          {screen === "analysis" && (
            <main className="analysis-screen">
              <div className="analysis-box">
                <div className="loading-icon">✦</div>

                <h1>{text("understanding")}</h1>

                <p>{text("preparing")}</p>

                <div className="progress-list">
                  <div className="progress-item">
                    <span>✓</span>
                    {text("understandingProduct")}
                  </div>

                  <div className="progress-item">
                    <span>✓</span>
                    {text("findingStandard")}
                  </div>

                  <div className="progress-item">
                    <span className="loading-dot">●</span>
                    {text("preparingRequirements")}
                  </div>
                </div>
              </div>
            </main>
          )}

          {/* ================= RESULT ================= */}

          {screen === "result" && (
            <main className="result-screen">
              <header className="result-header">
                <button
                  className="back-button"
                  onClick={() => setScreen("home")}
                >
                  {text("startAgain")}
                </button>

                <div className="brand">
                  <div className="brand-icon">IS</div>

                  <div>
                    <strong>BIS Xpert</strong>
                    <span>Indian Standards Assistant</span>
                  </div>
                </div>

                <div></div>
              </header>

              <section className="result-container">
                <div className="result-intro">
                  <span className="success-label">✓ {text("understood")}</span>

                  <h1>{productData.title}</h1>

                  <p>
                    {productData.material} • {productData.capacity}
                  </p>
                </div>

                <div className="standard-card">
                  <div className="standard-card-top">
                    <span>{text("likelyStandard")}</span>

                    <div className="match">
                      {productData.confidence}% {text("demoMatch")}
                    </div>
                  </div>

                  <h2>{productData.standard}</h2>

                  <h3>{productData.standardTitle}</h3>

                  <p>{productData.applicability}</p>

                  <div className="source">
                    {text("evidenceSource")}:{" "}
                    {productData.sourceUrl ? (
                      <button
                        type="button"
                        onClick={() =>
                          window.open(productData.sourceUrl, "_blank")
                        }
                      >
                        {productData.sourceLabel} →
                      </button>
                    ) : (
                      <span>Reference available in BIS sources</span>
                    )}
                  </div>
                </div>

                <section className="next-section">
                  <h2>{text("whatKnow")}</h2>

                  <div className="action-grid">
                    <button onClick={() => openDetail("testing")}>
                      <strong>{text("testsNeeded")}</strong>
                      <span>{text("testingRequirements")}</span>
                    </button>

                    <button onClick={() => openDetail("certification")}>
                      <strong>{text("certification")}</strong>
                      <span>{text("certificationProcess")}</span>
                    </button>

                    <button onClick={() => openDetail("labs")}>
                      <strong>{text("testingLab")}</strong>
                      <span>{text("labScope")}</span>
                    </button>
                  </div>
                </section>

                <div className="ask-card">
                  <div>
                    <strong>{text("anotherQuestion")}</strong>
                    <p>{text("askSimple")}</p>
                  </div>

                  <button onClick={() => setChatOpen(true)}>
                    {text("askXpert")}
                  </button>
                </div>

                {chatOpen && (
                  <div className="chat-card">
                    <div className="chat-header">
                      <div>
                        <strong>BIS Xpert</strong>
                        <span>Standards Assistant</span>
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
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            sendMessage();
                          }
                        }}
                        placeholder={text("askQuestion")}
                      />

                      <button onClick={sendMessage}>→</button>
                    </div>
                  </div>
                )}

                <div className="disclaimer">{text("disclaimer")}</div>
              </section>
            </main>
          )}

          {/* ================= DETAILS ================= */}

          {screen === "details" && (
            <main className="details-screen">
              <header className="result-header">
                <button
                  className="back-button"
                  onClick={() => setScreen("result")}
                >
                  {text("backResults")}
                </button>

                <div className="brand">
                  <div className="brand-icon">IS</div>

                  <div>
                    <strong>BIS Xpert</strong>
                    <span>Indian Standards Assistant</span>
                  </div>
                </div>

                <div></div>
              </header>

              <section className="details-container">
                {/* ================= TESTING ================= */}

                {detail === "testing" && (
                  <>
                    <div className="details-heading">
                      <span>{text("testingLabel")}</span>

                      <h1>{text("testingTitle")}</h1>

                      <p>{text("testingDescription")}</p>
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
                              {text("testingDescriptionItem")}{" "}
                              {productData.title}.
                            </p>
                          </div>

                          <span>✓</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ================= CERTIFICATION ================= */}

                {detail === "certification" && (
                  <>
                    <div className="details-heading">
                      <span>{text("certificationLabel")}</span>

                      <h1>{text("certificationTitle")}</h1>

                      <p>{text("certificationDescription")}</p>
                    </div>

                    <div className="details-card">
                      {[
                        [
                          "01",
                          text("certificationStep1"),
                          `${text("certificationDesc1")} ${productData.standard}`,
                        ],
                        [
                          "02",
                          text("certificationStep2"),
                          text("certificationDesc2"),
                        ],
                        [
                          "03",
                          text("certificationStep3"),
                          text("certificationDesc3"),
                        ],
                        [
                          "04",
                          text("certificationStep4"),
                          text("certificationDesc4"),
                        ],
                      ].map(([number, title, description]) => (
                        <div className="certification-item" key={number}>
                          <div className="test-number">{number}</div>

                          <div>
                            <strong>{title}</strong>
                            <p>{description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ================= LABS ================= */}

                {detail === "labs" && (
                  <>
                    <div className="details-heading">
                      <span>{text("labLabel")}</span>

                      <h1>{text("labTitle")}</h1>

                      <p>{text("labDescription")}</p>
                    </div>

                    <div className="lab-info-card">
                      <div className="lab-icon">⌖</div>

                      <div>
                        <strong>{text("labSearch")}</strong>

                        <p>
                          {text("labSearchDescription")} {productData.standard}.
                        </p>

                        <button
                          onClick={() =>
                            window.open(
                              "https://lims.bis.gov.in/home_lab_scope/70/?page=1",
                              "_blank",
                            )
                          }
                        >
                          {text("openLab")}
                        </button>
                      </div>
                    </div>

                    <div className="details-note">
                      <strong>{text("important")}</strong>

                      <p>{text("verifyScope")}</p>
                    </div>
                  </>
                )}

                <button
                  className="details-back"
                  onClick={() => setScreen("result")}
                >
                  {text("backResults")}
                </button>
              </section>
            </main>
          )}
        </div>
      </div>

      {showSplash && (
        <div className="splash-screen">
          <div className="splash-content">
            <h1>BIS Xpert</h1>

            <p>Indian Standards Assistant</p>

            <div className="splash-loader">
              <span></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
