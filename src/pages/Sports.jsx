import sportsImg from "../assets/sportsImg.png";
import "../Project.css";
import { Link } from "react-router-dom";

export default function Sports() {
  return (
    <section className="project-page">
      {/* HERO IMAGE */}
      <img
        src={sportsImg}
        className="project-hero"
        alt="Wakili Sigei Cup Sports Development"
      />

      <div className="project-content">
        <h1>Wakili Sigei Cup & Youth Sports Development in Bomet County</h1>

        <p>
          Sports and talent development remain a powerful tool for youth
          empowerment, discipline, and social cohesion. Through the
          <strong> Wakili Sigei Cup</strong>, Senator Hillary Sigei has championed
          grassroots football as a platform for nurturing talent, promoting
          unity, and steering young people toward positive life paths.
        </p>

        {/* ================= STATS ================= */}
        <div className="stats-grid">
          <div className="stat-card">
            <h2>2+</h2>
            <p>Wakili Cup Editions</p>
          </div>
          <div className="stat-card">
            <h2>300+</h2>
            <p>Youth Teams</p>
          </div>
          <div className="stat-card">
            <h2>5,000+</h2>
            <p>Youth Reached</p>
          </div>
          <div className="stat-card">
            <h2>6</h2>
            <p>Sub-Counties</p>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <h3>Wakili Sigei Cup Timeline</h3>

        <div className="timeline">
          <div className="timeline-card">
            <span>2023 / 2024</span>
            <h4>1st Edition</h4>
            <p>
              Launched as a grassroots football initiative bringing together
              youth teams from across Bomet County, fostering unity and healthy
              competition.
            </p>
          </div>

          <div className="timeline-card">
            <span>2025</span>
            <h4>2nd Edition</h4>
            <p>
              Expanded participation with structured sub-county qualifiers,
              enhanced organization, and increased community engagement.
            </p>
          </div>
        </div>

        {/* ================= WINNERS ================= */}
        <h3>Past Winners</h3>
        <ul className="winners-list">
          <li>
            <strong>2023/24:</strong> Chepalungu United FC
          </li>
          <li>
            <strong>2025:</strong> Sotik Young Stars FC
          </li>
        </ul>

        {/* ================= GALLERY ================= */}
        <h3>Wakili Cup Highlights</h3>
        <div className="gallery-grid">
          <img src="/gallery/final1.jpg" alt="Wakili Cup Final Match" />
          <img src="/gallery/final2.jpg" alt="Fans and Teams" />
          <img src="/gallery/final3.jpg" alt="Trophy Presentation Ceremony" />
        </div>

        {/* ================= QUOTES ================= */}
        <h3>What the Youth Say</h3>
        <div className="quotes">
          <blockquote>
            “The Wakili Sigei Cup gave us exposure, discipline, and hope. It keeps
            young people focused and united.”
            <span>— Team Captain, Chepalungu</span>
          </blockquote>

          <blockquote>
            “This tournament has helped keep our youth away from drugs and
            crime, while discovering real football talent.”
            <span>— Community Coach</span>
          </blockquote>
        </div>

        {/* BACK */}
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

