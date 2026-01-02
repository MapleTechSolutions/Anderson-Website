
import Header from './Header';
import ServicesBanner from './ServicesBanner';
import Footer from './Footer';
import OfferedServices from './OfferedServices';
import FinalCTA from './FinalCTA';

export default function ServicesPage() {
  return (
    <>
      <Header variant="light" />
      <ServicesBanner />
      <OfferedServices />
      <FinalCTA />
      <Footer />
    </>
  );
}
