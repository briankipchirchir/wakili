import educationImg from "../assets/education.png";
import "../Project.css";
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <section className="project-page">
      <img src={educationImg} className="project-hero" alt="Education Programs" />

      <div className="project-content">
        <h1>Education & Scholarships</h1>

        <p>
          Senator Hillary Sigei believes education is the strongest foundation
          for sustainable development and economic empowerment.
        </p>

        <p>
          His education initiatives support students from disadvantaged
          backgrounds through bursaries, scholarships, mentorship, and strategic
          partnerships.
        </p>

        <ul>
          <li>✔ Secondary & University Bursaries</li>
          <li>✔ Support for girls & learners with disabilities</li>
          <li>✔ Career mentorship programs</li>
          <li>✔ Partnerships with learning institutions</li>
        </ul>

        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    </section>
  );
}
