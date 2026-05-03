import { Group, SimpleGrid, Flex } from '@mantine/core'
import { pillars } from '../data/pillars'
import { learningAreas } from '../data/learningAreas'
import { site } from '../data/site'
import Pillar from '../components/Pillar'
import LearningArea from '../components/LearningArea'
import Footer from '../components/Footer'

const base = import.meta.env.BASE_URL

export default function Home() {
  return (
    <>
      <section className="hero section-border">
        <p className="label">SYNERGY FC · U11 BOYS · PEORIA, AZ</p>
        <h1>Building complete soccer players</h1>
        <p className="subtitle">
          We develop technically skilled, tactically intelligent players in a culture
          built on effort, precision, and love for the game.
        </p>
        <Group gap={16} justify="center" wrap="wrap">
          <a href="#coaches" className="btn-outline">Meet the Coaches</a>
          <a href="#contact" className="btn-solid">Get in Touch</a>
        </Group>
      </section>

      <div className="photo-banner section-border">
        <img src={`${base}assets/images/team1.png`} alt="Team photo" />
      </div>

      <section id="coaches" className="content section-border">
        <p className="label">WHO ARE MY COACHES?</p>
        <h2>Meet Jeff &amp; Ashley Montone</h2>
        <Flex gap={40} align="flex-start" direction={{ base: 'column', sm: 'row' }}>
          <div className="coach-photos">
            <img className="coach-photo" src={`${base}assets/images/PXL_20231111_220634438.PORTRAIT.jpg`} alt="Our kids in our old jerseys front" />
            <img className="coach-photo" src={`${base}assets/images/PXL_20231111_220612115.MP~2.jpg`} alt="Our kids in our old jerseys back" />
            <img className="coach-photo" src={`${base}assets/images/03252025Rickey'sSoccer194.jpg`} alt="Training teaching team" />
            <img className="coach-photo" src={`${base}assets/images/03252025Rickey'sSoccer338.jpg`} alt="Training teaching solo" />
          </div>
          <div className="coach-text">
            <p>We're not just coaches — we're products of this game.</p>
            <p>We both grew up playing for the same club, and soccer shaped who we are. Now we're committed to guiding the next generation of players.</p>
            <p>At U11, the single most important factor in youth development is the coach. Our job is to build an environment where players learn to think for themselves, solve problems on the field, and develop the persistence, effort, and teamwork that will serve them far beyond soccer.</p>
            <p>We've spent the last three years at the club level, creating a culture where our players develop real skills, compete with confidence, and — most importantly — fall in love with the sport the way we did.</p>
            <p>We've been through every stage of youth soccer as players and as parents, and we bring that firsthand perspective to everything we do on the training ground.</p>
            <p className="closing-line">This isn't a side project for us. It's personal.</p>
          </div>
        </Flex>
      </section>

      <section className="hook section-border">
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 12, md: 20 }} style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="hook-box">
            <p>At this age, development should come first. We get to know your player, build their game, and grow with them — not replace them.</p>
          </div>
          <div className="hook-box">
            <p>Your child isn't a number on a roster. If we bring them in, we're committed to their development — every step of the way.</p>
          </div>
          <div className="hook-box">
            <p>Every player we take on gets real attention and a real role on this team — not a spot that disappears when a guest player shows up.</p>
          </div>
        </SimpleGrid>
      </section>

      <section className="content section-border">
        <p className="label">OUR PILLARS</p>
        <h2>What we stand for</h2>
        {pillars.map((pillar) => (
          <Pillar key={pillar.title} {...pillar} />
        ))}
      </section>

      <section className="content section-border">
        <p className="label">PLAYER DEVELOPMENT</p>
        <h2>What will my son learn?</h2>
        {learningAreas.map((area) => (
          <LearningArea key={area.title} {...area} />
        ))}
      </section>

      <div className="gallery section-border" style={{ paddingTop: 4, paddingBottom: 4 }}>
        <img src={`${base}assets/images/rondo.jpg`} alt="Game action" />
        <img src={`${base}assets/images/team-teaching-1.jpg`} alt="Game action" />
      </div>

      <section className="content section-border">
        <p className="label">FULL TRANSPARENCY</p>
        <h2>What does practice look like?</h2>
        <p style={{ marginBottom: 24 }}>
          We believe in full transparency. Here's an actual practice plan so you can see
          exactly what your son will experience — no secrets.
        </p>
        <div className="practice-box">
          <p>
            Our pattern: <span>Technical Block</span> (unopposed → opposed)
            → <span>Tactical Block</span> (small-sided games for team principles)
            → <span>Scrimmage</span> (apply everything in a fully unrestricted environment)
          </p>
          <a href={site.links.samplePractice} target="_blank" rel="noreferrer">
            View a Sample Practice →
          </a>
        </div>
        <p className="practice-location">Location: Paloma Community Park · Two nights a week</p>
      </section>

      <section className="content section-border">
        <div className="link-cards">
          <a href={`${base}policies.html`} className="link-card">
            <h3>Team Policies</h3>
            <p>Philosophy, development stages, evaluations, playing time, and responsibilities.</p>
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
