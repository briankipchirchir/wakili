import bodaImg from "../assets/boda.png";
import "../Project.css";
import { Link } from "react-router-dom";

export default function BodaBoda() {
  return (
    <section className="project-page">
      <img src={bodaImg} className="project-hero" alt="Boda Boda Initiative" />

      <div className="project-content">
        <h1>Boda Boda RideSmart Initiative</h1>

        <p>
          This initiative focuses on improving safety, income stability, and
          professionalism among boda boda operators.
        </p>

        <ul>
          <li>✔ Road safety training</li>
          <li>✔ Protective gear support</li>
          <li>✔ Financial literacy & savings programs</li>
        </ul>

        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    </section>
  );
}
