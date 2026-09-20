import './Experience.css'

export default function Experience() {
  return (
    <section className="exp" id="experience">
      {/* Full-bleed environment image */}
      <div className="exp__visual reveal-image">
        <img
          src="/images/sound-atmosphere.jpg"
          alt="AURA ambient listening atmosphere in architectural interior"
          className="exp__image"
        />
      </div>

      <div className="exp__content container">
        <div className="exp__text">
          <span className="exp__label t-label reveal">
            05 &mdash; Experience
          </span>

          <h2 className="exp__heading t-display-lg reveal reveal-d1">
            Designed to live
            <br />
            where you do.
          </h2>

          <p className="exp__body t-body reveal reveal-d2">
            AURA occupies space with intention. Its form, materials, and presence
            have been shaped to complement the textures and rhythms of daily life
            — quiet enough to belong, refined enough to be noticed.
          </p>
        </div>

        <div className="exp__details">
          <div className="exp__detail reveal reveal-d3">
            <span className="t-meta">Dimensions</span>
            <span className="t-body-sm">182 × 160 mm</span>
          </div>
          <div className="exp__detail reveal reveal-d4">
            <span className="t-meta">Weight</span>
            <span className="t-body-sm">1.8 kg</span>
          </div>
          <div className="exp__detail reveal reveal-d5">
            <span className="t-meta">Power</span>
            <span className="t-body-sm">USB-C / 30W</span>
          </div>
        </div>
      </div>
    </section>
  )
}
