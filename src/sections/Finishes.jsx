import { useState } from 'react'
import './Finishes.css'

const finishes = [
  {
    id: 'graphite',
    name: 'Graphite',
    image: '/images/aura-product.jpg',
    material: 'Charcoal woven fabric',
    base: 'Brushed champagne aluminum',
  },
  {
    id: 'stone',
    name: 'Stone',
    image: '/images/finish-stone.jpg',
    material: 'Natural stone woven fabric',
    base: 'Brushed silver aluminum',
  },
  {
    id: 'bronze',
    name: 'Warm Bronze',
    image: '/images/finish-bronze.jpg',
    material: 'Bronze woven fabric',
    base: 'Rose gold aluminum',
  },
]

export default function Finishes() {
  const [active, setActive] = useState(0)
  const current = finishes[active]

  return (
    <section className="finishes" id="finishes">
      <div className="finishes__inner container">
        <div className="finishes__header">
          <span className="finishes__label t-label reveal">
            04 &mdash; Finishes
          </span>
          <h2 className="finishes__heading t-display-lg reveal reveal-d1">
            Three expressions,<br />
            one identity.
          </h2>
        </div>

        <div className="finishes__showcase">
          {/* Product image with crossfade */}
          <div className="finishes__image-wrap reveal reveal-d2">
            {finishes.map((f, i) => (
              <img
                key={f.id}
                src={f.image}
                alt={`AURA in ${f.name} finish`}
                className={`finishes__image${i === active ? ' finishes__image--active' : ''}`}
              />
            ))}
          </div>

          {/* Selector + metadata */}
          <div className="finishes__controls">
            <div className="finishes__selector reveal reveal-d3">
              {finishes.map((f, i) => (
                <button
                  key={f.id}
                  className={`finishes__btn${i === active ? ' finishes__btn--active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="finishes__btn-dot" />
                  <span className="finishes__btn-name t-label">{f.name}</span>
                </button>
              ))}
            </div>

            <div className="finishes__meta reveal reveal-d4">
              <div className="finishes__meta-row">
                <span className="t-meta">Body</span>
                <span className="t-body-sm">{current.material}</span>
              </div>
              <div className="finishes__meta-row">
                <span className="t-meta">Base</span>
                <span className="t-body-sm">{current.base}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
