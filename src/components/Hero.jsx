import { motion } from 'framer-motion'
import './Hero.css'

const fade = (delay) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" alt="IronPeak Gym" />
        <div className="hero-scrim" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner">
        <motion.div className="hero-tag" {...fade(0.1)}>
          <span className="tag-dot" />
          Now Open · Kochi & Bangalore
        </motion.div>
        <motion.h1 {...fade(0.25)}>
          FORGE YOUR<br /><span className="green-text">BEST</span><br />SELF.
        </motion.h1>
        <motion.p className="hero-sub" {...fade(0.45)}>
          State-of-the-art equipment, elite coaches, and a community that
          pushes harder every single day. This is IronPeak.
        </motion.p>
        <motion.div className="hero-btns" {...fade(0.6)}>
          <motion.button className="btn-primary" onClick={() => scrollTo('freetrial')}
            whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(57,255,20,0.5)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            Claim Free Trial
          </motion.button>
          <motion.button className="btn-outline" onClick={() => scrollTo('classes')}
            whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            View Classes
          </motion.button>
        </motion.div>
        <motion.div className="hero-badges" {...fade(0.75)}>
          {['CPSC Certified', 'Open 24/7', 'No Lock-In'].map(b => (
            <span key={b} className="hero-badge">{b}</span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="scroll-line" /><span>SCROLL</span>
      </motion.div>
    </section>
  )
}
