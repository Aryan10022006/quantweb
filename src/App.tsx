import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Sponsors from './pages/Sponsors'
import PageTransition from './components/PageTransition'
import LoadingScreen from './components/LoadingScreen'
import Questions from './pages/Questions'
import './App.css'

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <>
            <Navbar />
            <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/events" 
            element={
              <PageTransition>
                <div className="container page-content">
                  <h1>Events Page</h1>
                </div>
              </PageTransition>
            } 
          />
          <Route 
            path="/sponsors" 
            element={
              <PageTransition>
                <Sponsors />
              </PageTransition>
            } 
          />
          <Route 
            path="/blogs" 
            element={
              <PageTransition>
                <div className="container page-content">
                  <h1>Blogs Page</h1>
                </div>
              </PageTransition>
            } 
          />
          <Route 
            path="/competitions" 
            element={
              <PageTransition>
                <div className="container page-content">
                  <h1>Competitions Page</h1>
                </div>
              </PageTransition>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PageTransition>
                <div className="container page-content">
                  <h1>About Us Page</h1>
                </div>
              </PageTransition>
            } 
          />
          <Route 
            path="/team" 
            element={
              <PageTransition>
                <div className="container page-content">
                  <h1>Team Page</h1>
                </div>
              </PageTransition>
            } 
          />
          <Route 
            path="/questions" 
            element={
              <PageTransition>
                <Questions />
              </PageTransition>
            } 
          />
        </Routes>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
