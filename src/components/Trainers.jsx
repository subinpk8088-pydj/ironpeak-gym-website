import { motion } from 'framer-motion'
import './Trainers.css'

const trainers = [
  { name: 'Arjun Reddy',  role: 'Strength & Powerlifting', exp: '12 yrs', img: 'photo-1567013127542-490d757e51fc', cert: 'NASM-CPT', clients: 340 },
  { name: 'Priya Menon',  role: 'HIIT & Metabolic',        exp: '8 yrs',  img: 'photo-1609899537878-4b3451e4d1e1', cert: 'ACE-CPT',  clients: 280 },
  { name: 'Rohan Sharma', role: 'Cardio & Endurance',      exp: '10 yrs', img: 'photo-1571731956672-f2b94d7dd0cb', cert: 'ISSA',     clients: 210 },
  { name: 'Keya Thomas',  role: 'MMA & Combat Fitness',    exp: '9 yrs',  img: 'photo-1611072337226-1d8bb5b11158', cert: 'NSCA',     clients: 195 },
]

export default function Trainers() {
  return (
    <section className="trainers-section" id="trainers">
      <div className="trainers-header">
        <p className="section-label">The Coaches</p>
        <h2 className="section-title">Train With <em>The Best</em></h2>
        <div className="divider" />
        <p className="trainers-sub">Every IronPeak trainer is nationally certified with a minimum 8 years of elite coaching experience.</p>
      </div>
      <div className="trainers-grid">
        {trainers.map((t, i) => (
          <motion.div key={t.name} className="trainer-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}>
            <div className="trainer-img-wrap">
              <img src={`https://images.unsplash.com/${t.img}?w=500&q=80`} alt={t.name} loading="lazy" />
              <div className="trainer-overlay" />
              <span className="trainer-cert">{t.cert}</span>
            </div>
            <div className="trainer-info">
              <h3>{t.name}</h3>
              <p className="trainer-role">{t.role}</p>
              <div className="trainer-meta">
                <div><strong>{t.exp}</strong><span>Experience</span></div>
                <div><strong>{t.clients}+</strong><span>Clients</span></div>
              </div>
              <motion.button className="trainer-btn"
                whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                Book a Session
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
