import tree from "../assets/tree.png";
import "../Project.css";
import { Link } from "react-router-dom";

export default function Environment() {
  return (
    <section className="project-page">
      <img src={tree} className="project-hero" alt="Environmental Conservation" />

      <div className="project-content">
        <h1>Environmental Conservation</h1>

        <p>
          Senator Sigei actively champions climate action and environmental
          sustainability across Bomet County.
        </p>

        <ul>
          <li>✔ Tree planting & reforestation</li>
          <li>✔ Environmental awareness programs</li>
          <li>✔ Community-led climate initiatives</li>
        </ul>

        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    </section>
  );
}
