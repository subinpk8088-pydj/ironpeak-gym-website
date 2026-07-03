import { useState } from 'react'
import { motion } from 'framer-motion'
import './FreeTrial.css'

export default function FreeTrial() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="freetrial-section" id="freetrial">
      <div className="freetrial-bg">
        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80" alt="IronPeak gym floor" />
        <div className="freetrial-scrim" />
      </div>

      <motion.div className="freetrial-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}>
        <p className="section-label" style={{ color: 'var(--green)' }}>Zero Risk</p>
        <h2 className="freetrial-title">7 DAYS.<br />FREE.<br /><span>NO CARD.</span></h2>
        <p className="freetrial-sub">
          Walk in, train hard, see the results. No commitment,
          no credit card required. Just show up.
        </p>

        {submitted ? (
          <motion.div className="freetrial-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <span>💪</span>
            <strong>You're in!</strong>
            <p>We'll WhatsApp you the details within the hour. See you on the floor.</p>
          </motion.div>
        ) : (
          <div className="freetrial-form">
            <div className="ft-row">
              <div className="ft-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="ft-group">
                <label>Phone</label>
                <input type="tel" placeholder="+91 98xxx xxxxx" />
              </div>
            </div>
            <div className="ft-row">
              <div className="ft-group">
                <label>Email</label>
                <input type="email" placeholder="you@email.com" />
              </div>
              <div className="ft-group">
                <label>Goal</label>
                <select>
                  <option>Build Muscle</option>
                  <option>Lose Weight</option>
                  <option>Improve Fitness</option>
                  <option>Train for Sport</option>
                </select>
              </div>
            </div>
            <motion.button className="freetrial-btn"
              onClick={() => setSubmitted(true)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(57,255,20,0.55)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              Claim My Free Trial →
            </motion.button>
            <p className="freetrial-note">✓ No credit card &nbsp;·&nbsp; ✓ No lock-in &nbsp;·&nbsp; ✓ Cancel anytime</p>
          </div>
        )}
      </motion.div>
    </section>
  )
}
