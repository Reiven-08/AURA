import './TheObject.css'

const materials = [
  {
    image: '/images/detail-fabric.jpg',
    title: 'Premium Fabric',
    desc: 'Acoustically transparent, beautifully tactile.',
  },
  {
    image: '/images/detail-base.jpg',
    title: 'Aluminum Base',
    desc: 'Precision-milled for strength and elegance.',
  },
  {
    image: '/images/detail-top.jpg',
    title: 'Touch Control',
    desc: 'Intuitive. Minimal. Seamless.',
  },
]

export default function TheObject() {
  return (
    <section className="object" id="object">
      <div className="object__inner container">
        {/* Left column — text */}
        <div className="object__text">
          <span className="object__label t-label reveal">
            01 &mdash; The Object
          </span>

          <h2 className="object__heading t-display-lg reveal reveal-d1">
            Crafted for
            <br />
            lasting impact.
          </h2>

          <p className="object__body t-body reveal reveal-d2">
            Every detail of AURA has been considered — from its acoustically
            optimized form to its carefully selected materials. The result is
            a speaker that feels as good as it sounds.
          </p>

          <a href="#sound" className="btn btn--inline t-label reveal reveal-d3">
            Discover more
          </a>
        </div>

        {/* Center — large product image */}
        <div className="object__hero reveal-image">
          <img
            src="/images/detail-base.jpg"
            alt="AURA speaker aluminum base detail"
            className="object__hero-img"
          />
        </div>

        {/* Right column — material annotations */}
        <div className="object__materials">
          {materials.map((mat, i) => (
            <div
              key={mat.title}
              className={`object__mat reveal reveal-d${i + 2}`}
            >
              <div className="object__mat-img-wrap">
                <img
                  src={mat.image}
                  alt={mat.title}
                  className="object__mat-img"
                />
              </div>
              <div className="object__mat-info">
                <h4 className="object__mat-title t-label">{mat.title}</h4>
                <p className="object__mat-desc t-body-sm">{mat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
