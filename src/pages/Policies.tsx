import Footer from '../components/Footer'

const base = import.meta.env.BASE_URL

export default function Policies() {
  return (
    <>
      <div className="policies-nav section-border">
        <a href={base} className="policies-back">← Back</a>
        <span className="label">SYNERGY FC · U11 BOYS · TEAM POLICIES</span>
      </div>

      <section className="hero section-border" style={{ minHeight: '28vh' }}>
        <p className="label">TEAM POLICIES</p>
        <h1>How we run this team.</h1>
      </section>

      <section className="policy-overview section-border">
        <a href="#positions" className="policy-overview-item">
          <span className="policy-overview-num">01</span>
          <div>
            <p className="policy-overview-title">Positions</p>
            <p className="policy-overview-sub">How we assign and rotate roles across the roster.</p>
          </div>
        </a>
        <div className="policy-overview-divider"></div>
        <a href="#playing-time" className="policy-overview-item">
          <span className="policy-overview-num">02</span>
          <div>
            <p className="policy-overview-title">Playing Time</p>
            <p className="policy-overview-sub">Our commitment to every player getting meaningful minutes.</p>
          </div>
        </a>
      </section>

      <section id="positions" className="content section-border">
        <p className="label">POSITIONS</p>
        <h2>How we approach positions</h2>
        <p>Players are expected to play more than one general position — forward, midfielder, or defender. For instance, while you may be best at center back, you're also expected to be comfortable stepping into a midfield role.</p>
        <p>Even though we don't specialize in positions, we still learn position-specific skills as a team.</p>
        <div className="learn-area" style={{ marginTop: 40 }}>
          <h3>Preferred Positions</h3>
          <p>Players are encouraged to share with their coach what position they'd like to play. If the coach can't put a player in their preferred position, the coach will:</p>
        </div>
        <div className="policy-list">
          <div className="policy-item">
            <span className="policy-num">01</span>
            <p>Explain why that decision was made.</p>
          </div>
          <div className="policy-item">
            <span className="policy-num">02</span>
            <p>Provide guidance on what the player can improve to be a better fit for that position.</p>
          </div>
          <div className="policy-item">
            <span className="policy-num">03</span>
            <p>Give the player a clear path — so they can choose to work toward it, find a better fit elsewhere, or learn to love another position... at least for now.</p>
          </div>
        </div>
        <div className="learn-area" style={{ marginTop: 40 }}>
          <h3>Why?</h3>
          <p>Kids are developing physically, mentally, and as soccer players. A person's strengths at age 11 may look completely different at 16. Strict focus on a single position is not in the best long-term interest of a developing player.</p>
        </div>
        <p>All players attack. All players defend.</p>
        <p>All players must be involved in the game as a unit.</p>
        <p>Switching positions in-game — temporarily — is a fundamental component of successful soccer tactics.</p>
      </section>

      <section id="playing-time" className="content section-border">
        <p className="label">PLAYING TIME</p>
        <h2>Our goal for every player</h2>
        <p>All players should play roughly half of every game. This isn't a guarantee or an exact science — but it is our standard. Players who are significantly behind due to missed practices, games, or injury will play less than 50%.</p>
        <p>Our roster target is only 3–4 subs available per game, which means most players will see 66% to 75% or more of game time. The game is the best teacher — players need time on the field.</p>
        <div className="learn-area" style={{ marginTop: 40 }}>
          <h3>Does this mean we don't care about winning?</h3>
          <p>No. We play to win every game. But we only win as a team — which means we operate with a "next man up" philosophy.</p>
        </div>
        <div className="policy-list">
          <div className="policy-item">
            <span className="policy-num">—</span>
            <p>At this age, every player who commits to the team deserves a chance to develop.</p>
          </div>
          <div className="policy-item">
            <span className="policy-num">—</span>
            <p>At our club level, families should be able to go on vacation and miss an occasional tournament without consequence.</p>
          </div>
          <div className="policy-item">
            <span className="policy-num">—</span>
            <p>We often play multiple games in a day. A deep, rested roster wins games — tired players don't.</p>
          </div>
          <div className="policy-item">
            <span className="policy-num">—</span>
            <p>Arizona isn't exactly cool. If players are moving without the ball — as they should be — they will need a break.</p>
          </div>
        </div>
        <p className="closing-line">We build teams. Teams win games.</p>
      </section>

      <Footer heading="Questions?" sub="We're an open book. Reach out anytime." />
    </>
  )
}
