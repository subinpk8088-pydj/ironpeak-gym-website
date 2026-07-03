import { useState } from 'react'
import { motion } from 'framer-motion'
import './Timetable.css'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const schedule = {
  Mon: [
    { time: '6:00 AM',  name: 'PowerLift Pro',  trainer: 'Arjun R.',  duration: '60 min', spots: 4,  cat: 'Strength' },
    { time: '8:00 AM',  name: 'Cardio Storm',   trainer: 'Rohan S.',  duration: '50 min', spots: 10, cat: 'Cardio'   },
    { time: '12:00 PM', name: 'Zen Flow Yoga',  trainer: 'Ananya P.', duration: '75 min', spots: 12, cat: 'Yoga'     },
    { time: '6:00 PM',  name: 'MetaBurn HIIT',  trainer: 'Priya M.',  duration: '45 min', spots: 6,  cat: 'HIIT'     },
    { time: '8:00 PM',  name: 'Iron Circuit',   trainer: 'Arjun R.',  duration: '55 min', spots: 3,  cat: 'Strength' },
  ],
  Tue: [
    { time: '6:00 AM',  name: 'MetaBurn HIIT',  trainer: 'Priya M.',  duration: '45 min', spots: 8,  cat: 'HIIT'     },
    { time: '9:00 AM',  name: 'Combat Fitness', trainer: 'Keya T.',   duration: '60 min', spots: 5,  cat: 'Combat'   },
    { time: '6:00 PM',  name: 'PowerLift Pro',  trainer: 'Arjun R.',  duration: '60 min', spots: 7,  cat: 'Strength' },
    { time: '7:30 PM',  name: 'Cardio Storm',   trainer: 'Rohan S.',  duration: '50 min', spots: 11, cat: 'Cardio'   },
  ],
  Wed: [
    { time: '6:00 AM',  name: 'Iron Circuit',   trainer: 'Arjun R.',  duration: '55 min', spots: 2,  cat: 'Strength' },
    { time: '8:00 AM',  name: 'Zen Flow Yoga',  trainer: 'Ananya P.', duration: '75 min', spots: 14, cat: 'Yoga'     },
    { time: '12:00 PM', name: 'MetaBurn HIIT',  trainer: 'Priya M.',  duration: '45 min', spots: 9,  cat: 'HIIT'     },
    { time: '6:00 PM',  name: 'Combat Fitness', trainer: 'Keya T.',   duration: '60 min', spots: 4,  cat: 'Combat'   },
  ],
  Thu: [
    { time: '6:00 AM',  name: 'Cardio Storm',   trainer: 'Rohan S.',  duration: '50 min', spots: 8,  cat: 'Cardio'   },
    { time: '9:00 AM',  name: 'PowerLift Pro',  trainer: 'Arjun R.',  duration: '60 min', spots: 5,  cat: 'Strength' },
    { time: '6:00 PM',  name: 'Zen Flow Yoga',  trainer: 'Ananya P.', duration: '75 min', spots: 13, cat: 'Yoga'     },
    { time: '8:00 PM',  name: 'Iron Circuit',   trainer: 'Arjun R.',  duration: '55 min', spots: 3,  cat: 'Strength' },
  ],
  Fri: [
    { time: '6:00 AM',  name: 'MetaBurn HIIT',  trainer: 'Priya M.',  duration: '45 min', spots: 7,  cat: 'HIIT'     },
    { time: '8:00 AM',  name: 'Combat Fitness', trainer: 'Keya T.',   duration: '60 min', spots: 6,  cat: 'Combat'   },
    { time: '12:00 PM', name: 'Cardio Storm',   trainer: 'Rohan S.',  duration: '50 min', spots: 10, cat: 'Cardio'   },
    { time: '6:00 PM',  name: 'PowerLift Pro',  trainer: 'Arjun R.',  duration: '60 min', spots: 4,  cat: 'Strength' },
    { time: '8:00 PM',  name: 'Zen Flow Yoga',  trainer: 'Ananya P.', duration: '75 min', spots: 15, cat: 'Yoga'     },
  ],
  Sat: [
    { time: '7:00 AM',  name: 'Iron Circuit',   trainer: 'Arjun R.',  duration: '55 min', spots: 5,  cat: 'Strength' },
    { time: '9:00 AM',  name: 'MetaBurn HIIT',  trainer: 'Priya M.',  duration: '45 min', spots: 8,  cat: 'HIIT'     },
    { time: '11:00 AM', name: 'Combat Fitness', trainer: 'Keya T.',   duration: '60 min', spots: 6,  cat: 'Combat'   },
    { time: '5:00 PM',  name: 'Cardio Storm',   trainer: 'Rohan S.',  duration: '50 min', spots: 12, cat: 'Cardio'   },
  ],
  Sun: [
    { time: '8:00 AM',  name: 'Zen Flow Yoga',  trainer: 'Ananya P.', duration: '75 min', spots: 15, cat: 'Yoga'     },
    { time: '10:00 AM', name: 'PowerLift Pro',  trainer: 'Arjun R.',  duration: '60 min', spots: 7,  cat: 'Strength' },
    { time: '4:00 PM',  name: 'MetaBurn HIIT',  trainer: 'Priya M.',  duration: '45 min', spots: 9,  cat: 'HIIT'     },
  ],
}

const catColor = { Strength: '#39ff14', HIIT: '#ff3c3c', Cardio: '#3de8e0', Yoga: '#8c6fff', Combat: '#ffd23f' }

export default function Timetable() {
  const todayIdx = new Date().getDay()
  const mapped = [6,0,1,2,3,4,5]
  const [activeDay, setActiveDay] = useState(days[mapped[todayIdx]])

  return (
    <section className="timetable-section" id="timetable">
      <div className="timetable-header">
        <p className="section-label">Weekly Schedule</p>
        <h2 className="section-title">Class <em>Timetable</em></h2>
        <div className="divider" />
      </div>

      <div className="day-tabs">
        {days.map(d => (
          <motion.button key={d} className={`day-tab ${activeDay === d ? 'active' : ''}`}
            onClick={() => setActiveDay(d)} whileTap={{ scale: 0.93 }}>
            {d}
          </motion.button>
        ))}
      </div>

      <div className="schedule-list">
        {schedule[activeDay].map((cls, i) => (
          <motion.div key={i} className="schedule-row"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <div className="sch-time">{cls.time}</div>
            <div className="sch-bar" style={{ background: `${catColor[cls.cat]}22`, borderLeft: `3px solid ${catColor[cls.cat]}` }}>
              <div className="sch-main">
                <h4>{cls.name}</h4>
                <span>with {cls.trainer}</span>
              </div>
              <div className="sch-meta">
                <span className="sch-dur">⏱ {cls.duration}</span>
                <span className={`sch-spots ${cls.spots <= 4 ? 'low' : ''}`}>
                  {cls.spots <= 4 ? `⚠ ${cls.spots} left` : `${cls.spots} spots`}
                </span>
              </div>
              <motion.button className="sch-btn"
                whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                Book
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
