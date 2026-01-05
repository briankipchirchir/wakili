import sportsImg from "../assets/sportsImg.png";
import "../Project.css";
import { Link } from "react-router-dom";

export default function Sports() {
  return (
    <section className="project-page">
      <img src={sportsImg} className="project-hero" alt="Sports Development" />

      <div className="project-content">
        <h1>Sports & Talent Development</h1>

        <p>
          Sports development promotes unity, discipline, and youth engagement.
        </p>

        <ul>
          <li>✔ Wakili Sigei Cup</li>
          <li>✔ Youth sports sponsorship</li>
          <li>✔ Talent identification & nurturing</li>
        </ul>

        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    </section>
  );
}

