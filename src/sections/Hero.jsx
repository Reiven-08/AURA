import useScrollReveal from '../hooks/useScrollReveal'
import './Hero.css'

export default function Hero() {
  useScrollReveal()

  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">
        <div className="hero__text">
          <span className="hero__eyebrow t-label reveal reveal-d1">
            Ambient Audio System
          </span>

          <h1 className="hero__headline t-display-xl reveal reveal-d2">
            Sound,
            <br />
            in its purest form.
          </h1>

          <p className="hero__body t-body-sm reveal reveal-d3">
            A sculptural audio system engineered to disappear into the
            room and leave only the sound behind.
          </p>

          <div className="reveal reveal-d4">
            <a href="#object" className="btn btn--light">
              <span>Explore the object</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h11M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Product render — blends into the dark background */}
      <div className="hero__product reveal reveal-d2">
        <img
          src="/images/aura-product.jpg"
          alt="AURA speaker — tilted cylindrical body with dark fabric grille and brushed metal rim"
        />
      </div>

      <div className="hero__foot container">
        <div className="hero__scroll t-meta reveal reveal-d5">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
        <div className="hero__counter t-meta reveal reveal-d5">
          <span>01</span>
          <span className="hero__counter-sep">/</span>
          <span>07</span>
          <div className="hero__counter-line" />
        </div>
      </div>
    </section>
  )
}
