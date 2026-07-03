import { motion } from 'framer-motion'
import './Stats.css'

const stats = [
  { value: '5,200+', label: 'Active Members' },
  { value: '48',     label: 'Expert Trainers' },
  { value: '120+',   label: 'Weekly Classes' },
  { value: '24/7',   label: 'Always Open' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div key={s.label} className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
