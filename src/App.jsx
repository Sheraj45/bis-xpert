import { useState } from "react";
import Consumer from "./pages/Consumer";
import Manufacturer from "./pages/Manufacturer";
import "./index.css";

function App() {
  const [role, setRole] = useState(null);

  if (role === "manufacturer") {
    return <Manufacturer onBack={() => setRole(null)} />;
  }

  if (role === "consumer") {
    return <Consumer onBack={() => setRole(null)} />;
  }

  return (
    <div className="role-selection">
      <div className="role-content">
        <div className="role-brand">
          <div className="brand-icon">BX</div>

          <div>
            <strong>BIS Xpert</strong>
            <span>Indian Standards Assistant</span>
          </div>
        </div>

        <div className="role-heading">
          <p>WELCOME TO BIS XPERT</p>

          <h1>
            How can we
            <br />
            <span>help you today?</span>
          </h1>

          <div className="role-divider"></div>

          <p className="role-subtitle">
            Choose the option that best describes you.
          </p>
        </div>

        <div className="role-cards">
          <button
            className="role-card manufacturer-card"
            onClick={() => setRole("manufacturer")}
          >
            <div className="role-icon">🏭</div>

            <div className="role-card-content">
              <span className="role-label">FOR BUSINESS</span>

              <h2>Manufacturer, MSME or Startup</h2>

              <p>
                Find applicable standards, testing requirements, certification
                guidance and laboratories.
              </p>

              <span className="role-action">
                Continue <span>→</span>
              </span>
            </div>
          </button>

          <button
            className="role-card consumer-card"
            onClick={() => setRole("consumer")}
          >
            <div className="role-icon">👤</div>

            <div className="role-card-content">
              <span className="role-label">FOR CONSUMERS</span>

              <h2>Consumer</h2>

              <p>
                Understand BIS information, product safety, standards and
                consumer services.
              </p>

              <span className="role-action">
                Continue <span>→</span>
              </span>
            </div>
          </button>
        </div>

        <p className="role-footer">
          Making Indian Standards easier to understand.
        </p>
      </div>
    </div>
  );
}

export default App;
