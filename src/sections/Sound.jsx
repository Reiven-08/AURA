import './Sound.css'

export default function Sound() {
  return (
    <section className="sound" id="sound">
      {/* Background atmosphere image */}
      <div className="sound__bg">
        <img
          src="/images/sound-atmosphere.jpg"
          alt="Warm light filtering through architectural space"
          className="sound__bg-img"
        />
        <div className="sound__bg-overlay" />
      </div>

      <div className="sound__content container">
        <div className="sound__top">
          <span className="sound__label t-label reveal">
            02 &mdash; Sound
          </span>
        </div>

        <div className="sound__main">
          <h2 className="sound__heading t-display-xl reveal reveal-d1">
            Felt, not heard.
          </h2>

          <div className="sound__wave reveal reveal-d2" aria-hidden="true">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="sound__wave-svg">
              <path
                d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <path
                d="M0,60 Q150,40 300,60 T600,60 T900,60 T1200,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.2"
              />
              <path
                d="M0,60 Q150,80 300,60 T600,60 T900,60 T1200,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.15"
              />
            </svg>
          </div>

          <div className="sound__desc reveal reveal-d3">
            <p className="t-body-sm">
              AURA doesn't demand attention — it transforms a room. Its 360° acoustic
              architecture fills every corner with rich, natural sound that adapts
              to your space. The listening experience becomes invisible, leaving only
              the atmosphere it creates.
            </p>
          </div>
        </div>

        <div className="sound__specs">
          <div className="sound__spec reveal reveal-d2">
            <span className="sound__spec-value t-display-md">360°</span>
            <span className="sound__spec-label t-meta">Omnidirectional sound</span>
          </div>
          <div className="sound__spec reveal reveal-d3">
            <span className="sound__spec-value t-display-md">40Hz</span>
            <span className="sound__spec-label t-meta">Low frequency response</span>
          </div>
          <div className="sound__spec reveal reveal-d4">
            <span className="sound__spec-value t-display-md">&lt;0.5%</span>
            <span className="sound__spec-label t-meta">Total harmonic distortion</span>
          </div>
        </div>
      </div>
    </section>
  )
}
