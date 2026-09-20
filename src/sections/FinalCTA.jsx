import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="cta">
      <div className="cta__inner container">
        <span className="cta__label t-label reveal">
          A quieter kind of technology
        </span>

        <h2 className="cta__heading t-display-xl reveal reveal-d1">
          Less noise.<br />
          More presence.
        </h2>

        <p className="cta__body t-body reveal reveal-d2">
          AURA doesn't compete for your attention. It earns it —
          through material honesty, acoustic precision, and the kind
          of restraint that only comes from genuine confidence in craft.
        </p>

        <div className="reveal reveal-d3">
          <a href="#" className="btn">
            Order AURA
          </a>
        </div>
      </div>
    </section>
  )
}
