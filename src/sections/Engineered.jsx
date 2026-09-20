import './Engineered.css'

const specs = [
  {
    id: '01',
    title: '360° Sound',
    desc: 'Omnidirectional acoustic architecture projects sound evenly in every direction, eliminating dead spots.',
  },
  {
    id: '02',
    title: 'Adaptive Acoustics',
    desc: 'Built-in spatial awareness calibrates output to match room geometry, surface materials, and ambient conditions.',
  },
  {
    id: '03',
    title: 'Precision Materials',
    desc: 'Acoustically optimized enclosure with damped aluminum, woven fabric, and isolated driver mounts.',
  },
  {
    id: '04',
    title: 'Low-Distortion Driver',
    desc: 'Custom-engineered full-range driver delivers clean, undistorted audio across the entire frequency spectrum.',
  },
  {
    id: '05',
    title: 'Room-Aware Tuning',
    desc: 'Continuous real-time adjustment ensures consistent listening quality regardless of placement or orientation.',
  },
]

export default function Engineered() {
  return (
    <section className="eng" id="engineered">
      <div className="eng__inner container">
        <div className="eng__header">
          <span className="eng__label t-label reveal">
            03 &mdash; Engineered
          </span>
          <h2 className="eng__heading t-display-lg reveal reveal-d1">
            Technology should<br />
            disappear into the<br />
            experience.
          </h2>
        </div>

        <div className="eng__list">
          {specs.map((spec, i) => (
            <div
              key={spec.id}
              className={`eng__item reveal reveal-d${Math.min(i + 1, 5)}`}
            >
              <div className="eng__item-num t-meta">{spec.id}</div>
              <div className="eng__item-content">
                <h3 className="eng__item-title t-label">{spec.title}</h3>
                <p className="eng__item-desc t-body-sm">{spec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
