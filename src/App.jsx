import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TeamMember from './components/TeamMember'
import Banner from './components/Banner'
import OfferedServices from './components/OfferedServices'
import ProcessSteps from './components/ProcessSteps'
import CTASection from './components/CTASection'
import Promise from './components/Promise'
import AboutPageHeader from './components/AboutPageHeader'
import AboutSection from './components/AboutSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import ServicesPage from './components/ServicesPage'
import InsurancePage from './components/InsurancePage'
import InvestmentsPage from './components/InvestmentsPage'
import Chatbot from './components/Chatbot'

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <TeamMember />
      <Banner
        text="WE RECOGNIZE THAT THE MULTITUDE OF INVESTMENT OPTIONS AVAILABLE CAN FEEL OVERWHELMING AND STRESSFUL."
      />
      <OfferedServices />
      <ProcessSteps />
      <CTASection />
      <Promise />
      <AboutSection />
      <FinalCTA />
      <Footer />
      <Chatbot />
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename="/Anderson-Website">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
