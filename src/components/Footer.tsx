import { site } from '../data/site'

interface FooterProps {
  heading?: string
  sub?: string
}

export default function Footer({
  heading = "Interested?",
  sub = "Come watch a practice. Ask us anything. We're an open book.",
}: FooterProps) {
  return (
    <section id="contact" className="contact">
      <h2>{heading}</h2>
      <p className="contact-sub">{sub}</p>
      <a href={`mailto:${site.email}`} className="btn-solid">Get in Touch</a>

      <div className="footer-links">
        <a href={site.links.clubSite} target="_blank" rel="noreferrer">Synergy FC</a>
        <span className="dot">·</span>
        <a href={site.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <span className="dot">·</span>
        <a href={site.links.gotSport} target="_blank" rel="noreferrer">GotSport Rankings</a>
      </div>

      <p className="age-range">{site.ageRange}</p>
    </section>
  )
}
