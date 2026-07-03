import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Classes from './components/Classes'
import Trainers from './components/Trainers'
import Membership from './components/Membership'
import Timetable from './components/Timetable'
import FreeTrial from './components/FreeTrial'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Classes />
        <Trainers />
        <Membership />
        <Timetable />
        <FreeTrial />
      </main>
      <Footer />
    </>
  )
}
