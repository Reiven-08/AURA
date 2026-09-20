import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import TheObject from './sections/TheObject'
import Sound from './sections/Sound'
import Engineered from './sections/Engineered'
import Finishes from './sections/Finishes'
import Experience from './sections/Experience'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TheObject />
        <Sound />
        <Engineered />
        <Finishes />
        <Experience />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
