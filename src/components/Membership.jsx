import { useState } from 'react'
import { motion } from 'framer-motion'
import './Membership.css'

const plans = [
  {
    name: 'Starter',
    price: '₹1,499',
    period: '/month',
    desc: 'Perfect for beginners getting into a routine.',
    features: ['Gym floor access', '2 group classes/week', 'Locker room access', 'Fitness assessment'],
    missing: ['Personal training', 'Nutrition plan', 'Guest passes'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Peak',
    price: '₹2,999',
    period: '/month',
    desc: 'Our most popular plan for serious athletes.',
    features: ['Unlimited gym access', 'Unlimited group classes', '2 PT sessions/month', 'Nutrition consultation', 'Guest passes (2/month)', 'Priority class booking'],
    missing: [],
    cta: 'Join Peak',
    highlight: true,
  },
  {
    name: 'Elite',
    price: '₹4,999',
    period: '/month',
    desc: 'For those who demand the absolute best.',
    features: ['Everything in Peak', '8 PT sessions/month', 'Custom meal plan', 'Body composition scans', 'Unlimited guest passes', 'Dedicated locker', '24/7 coach access'],
    missing: [],
    cta: 'Go Elite',
    highlight: false,
  },
]

export default function Membership() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section className="membership-section" id="membership">
      <div className="membership-header">
        <p className="section-label">Pricing</p>
        <h2 className="section-title">Choose Your <em>Plan</em></h2>
        <div className="divider" style={{ margin: '0 auto' }} />
        <div className="billing-toggle">
          <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>Monthly</button>
          <button className={billing === 'annual' ? 'active' : ''} onClick={() => setBilling('annual')}>
            Annual <span className="save-tag">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="plans-grid">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            className={`plan-card ${p.highlight ? 'highlight' : ''}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: p.highlight ? 0 : -6 }}
          >
            {p.highlight && <div className="plan-badge">Most Popular</div>}
            <div className="plan-top">
              <h3>{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-price">
                <strong>
                  {billing === 'annual'
                    ? '₹' + Math.round(parseInt(p.price.replace('₹','').replace(',','')) * 0.8).toLocaleString('en-IN')
                    : p.price}
                </strong>
                <span>{p.period}</span>
              </div>
            </div>
            <ul className="plan-features">
              {p.features.map(f => (
                <li key={f} className="feat-yes"><span>✓</span>{f}</li>
              ))}
              {p.missing.map(f => (
                <li key={f} className="feat-no"><span>✗</span>{f}</li>
              ))}
            </ul>
            <motion.button
              className={`plan-btn ${p.highlight ? 'plan-btn-green' : ''}`}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03, ...(p.highlight && { boxShadow: '0 0 28px rgba(57,255,20,0.45)' }) }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {p.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
