import { useState } from "react";
import "../Home.css";

// Community Impact Images
import educationImg from "../assets/education.png";
import youthImg from "../assets/youth.png";
import bodaImg from "../assets/boda.png";
import tree from "../assets/tree.png";
import sportsImg from "../assets/sportsImg.png";


export default function Home() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section id="home">
      {/* ================= HERO SECTION ================= */}
      <div className="hero">
        <div className="hero-text">
          <h1>Meet Senator Hillary Sigei</h1>

          <p>
            Senator Hillary Sigei is an accomplished Advocate of the High Court of
            Kenya with over 15 years of distinguished legal practice and public
            service. Widely known as <strong>Wakili Hillary Sigei</strong>, he has
            built a reputation founded on integrity, excellence, and results in
            arbitration, mediation, commercial litigation, and legislative
            drafting.
          </p>

          {readMore && (
            <>
              <p>
                Born and raised in Cheserton, Chepalungu Sub-County, Senator Sigei
                began his academic journey at Ndamichonik Primary School before
                proceeding to Tenwek High School. He later pursued a Bachelor of
                Laws at the University of Nairobi and trained at the Kenya School
                of Law.
              </p>

              <p>
                He is the Managing Partner at <strong>SMS Advocates LLP</strong>,
                a firm respected for legal excellence and strategic advisory
                services.
              </p>

              <p>
                As Senator for Bomet County, he remains committed to principled
                leadership, effective legislation, and accountable governance.
              </p>
            </>
          )}

          <button
            onClick={() => setReadMore(!readMore)}
            className="read-more-btn"
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://www.parliament.go.ke/sites/default/files/2022-09/Sen.%20Kiprotich%20Hillary%20Sigei%20.jpg"
            alt="Senator Hillary Sigei"
          />
        </div>
      </div>

      {/* ================= COMMUNITY IMPACT ================= */}
      <section className="impact-section">
        <h2 className="section-title">Public Service & Community Impact</h2>
        <p className="section-subtitle">
          Championing education, youth empowerment, economic resilience, and
          sustainable development across Bomet County.
        </p>

        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={educationImg} alt="Education and Scholarships" />
            </div>
            <h3>🎓 Education & Scholarships</h3>
            <p>
              Through scholarships, bursaries, and mentorship programs, Senator
              Sigei has supported access to education for needy and deserving
              students.
            </p>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={youthImg} alt="Youth Empowerment" />
            </div>
            <h3>Youth & Economic Empowerment</h3>
            <p>
              Supporting youth enterprises, women-led businesses, and vocational
              skills programs to promote sustainable livelihoods.
            </p>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={bodaImg} alt="Boda Boda RideSmart Initiative" />
            </div>
            <h3> Boda Boda RideSmart Initiative</h3>
            <p>
              Promoting road safety, financial literacy, and responsible riding
              among boda boda operators across the county.
            </p>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={tree} alt="Environmental Conservation" />
            </div>
            <h3>🌱 Environmental Conservation</h3>
            <p>
              Actively involved in tree planting, forest restoration, and climate
              action initiatives in partnership with local communities.
            </p>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              <img src={sportsImg} alt="Sports and Talent Development" />
            </div>
            <h3>⚽ Sports & Talent Development</h3>
            <p>
              Patron of youth sports initiatives including the annual Wakili
              Sigei Cup, nurturing talent and promoting unity.
            </p>
          </div>

          <div className="impact-card">
            <div className="impact-image">
              
            </div>
            <h3>⚖️ Legal Aid & Governance</h3>
            <p>
              Provided pro bono legal services and continues to champion justice,
              constitutionalism, and human rights at national and county levels.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
