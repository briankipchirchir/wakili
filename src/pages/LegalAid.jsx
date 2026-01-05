import "../Project.css";
import { Link } from "react-router-dom";

export default function LegalAid() {
  return (
    <section className="project-page">
      <div className="project-content">
        <h1>Legal Aid & Governance</h1>

        <p>
          As an Advocate of the High Court, Senator Hillary Sigei remains deeply
          committed to justice, constitutionalism, and the rule of law.
        </p>

        <ul>
          <li>✔ Pro bono legal services</li>
          <li>✔ Civic education & legal awareness</li>
          <li>✔ Advocacy for human rights</li>
        </ul>

        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    </section>
  );
}
