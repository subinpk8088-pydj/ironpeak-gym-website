import { useState } from 'react'
import { motion } from 'framer-motion'
import './Classes.css'

const categories = ['All', 'Strength', 'Cardio', 'HIIT', 'Yoga', 'Combat']

const classes = [
  { name: 'PowerLift Pro',   cat: 'Strength', img: 'photo-1534438327276-14e5300c3a48', level: 'Advanced',     duration: '60 min', trainer: 'Arjun R.', spots: 4  },
  { name: 'MetaBurn HIIT',   cat: 'HIIT',     img: 'photo-1571019613454-1cb2f99b2d8b', level: 'Intermediate', duration: '45 min', trainer: 'Priya M.', spots: 8  },
  { name: 'Cardio Storm',    cat: 'Cardio',   img: 'photo-1549060279-7e168fcee0c2', level: 'Beginner',     duration: '50 min', trainer: 'Rohan S.', spots: 12 },
  { name: 'Combat Fitness',  cat: 'Combat',   img: 'photo-1555597673-b21d5c935865', level: 'Intermediate', duration: '60 min', trainer: 'Keya T.', spots: 6  },
  { name: 'Zen Flow Yoga',   cat: 'Yoga',     img: 'photo-1506629082955-511b1aa562c8', level: 'All Levels',   duration: '75 min', trainer: 'Ananya P.', spots: 15 },
  { name: 'Iron Circuit',    cat: 'Strength', img: 'photo-1581009146145-b5ef050c2e1e', level: 'Advanced',     duration: '55 min', trainer: 'Arjun R.', spots: 3  },
]

const levelColor = { 'Beginner': '#39ff14', 'Intermediate': '#ffd23f', 'Advanced': '#ff3c3c', 'All Levels': '#3de8e0' }

export default function Classes() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? classes : classes.filter(c => c.cat === active)

  return (
    <section className="classes-section" id="classes">
      <div className="classes-header">
        <div>
          <p className="section-label">Train Hard</p>
          <h2 className="section-title">Our <em>Classes</em></h2>
        </div>
        <div className="cat-pills">
          {categories.map(c => (
            <motion.button key={c} className={`cat-pill ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)} whileTap={{ scale: 0.93 }}>
              {c}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="classes-grid">
        {filtered.map((cls, i) => (
          <motion.div key={cls.name} className="class-card"
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -6 }}>
            <div className="class-img-wrap">
              <img src={`https://images.unsplash.com/${cls.img}?w=600&q=80`} alt={cls.name} loading="lazy" />
              <div className="class-img-overlay" />
              <span className="class-cat">{cls.cat}</span>
              <span className="class-level" style={{ color: levelColor[cls.level], borderColor: `${levelColor[cls.level]}55` }}>
                {cls.level}
              </span>
            </div>
            <div className="class-info">
              <h3>{cls.name}</h3>
              <div className="class-meta">
                <span>⏱ {cls.duration}</span>
                <span>👤 {cls.trainer}</span>
                <span className={cls.spots <= 4 ? 'spots-low' : ''}>
                  {cls.spots <= 4 ? `⚠ ${cls.spots} spots left` : `${cls.spots} spots`}
                </span>
              </div>
              <motion.button className="book-btn"
                whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                Book Class
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
