import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import InitiativesSection from '../components/InitiativesSection'
import PageTransition from '../components/PageTransition'

const Home = () => {
    return (
        <PageTransition>
            <main className="d-flex flex-column">
                <Hero />
                <AboutSection />
                <InitiativesSection />
            </main>
        </PageTransition>
    )
}

export default Home