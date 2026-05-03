import type { Pillar as PillarData } from '../data/pillars'

export default function Pillar({ icon, title, body }: PillarData) {
  return (
    <div className="pillar">
      <div className="pillar-header">
        <img className="pillar-icon" src={`${import.meta.env.BASE_URL}assets/icons/${icon}`} alt="" />
        <h3>{title}</h3>
      </div>
      <p>{body}</p>
    </div>
  )
}
