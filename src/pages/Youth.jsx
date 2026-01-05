import youthImg from "../assets/youth.png";
import "../Project.css";
import { Link } from "react-router-dom";

export default function Youth() {
  return (
    <section className="project-page">
      <img src={youthImg} className="project-hero" alt="Youth Empowerment" />

      <div className="project-content">
        <h1>Youth & Economic Empowerment</h1>

        <p>
          Youth empowerment remains central to Senator Sigei’s development
          agenda across Bomet County.
        </p>

        <ul>
          <li>✔ Startup grants & business mentorship</li>
          <li>✔ Vocational & technical training</li>
          <li>✔ Support for women & youth enterprises</li>
          <li>✔ Financial literacy programs</li>
        </ul>

        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    </section>
  );
}
