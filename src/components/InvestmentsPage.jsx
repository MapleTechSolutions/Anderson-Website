import Header from './Header';
import ServicesBanner from './ServicesBanner';
import Footer from './Footer';
import ProcessStepsParam from './ProcessStepsParam';
import AboutPageHeader from './AboutPageHeader';
import InsuranceHero from './InsuranceHero';
import Banner from './Banner';
import InsuranceSecure from './InsuranceSecure';
import compassImg from '../../images/ahmed-zayan-n_YWKiIBnp4-unsplash.jpg';
import InsuranceCTA from './InsuranceCTA';
import InsuranceFAQ from './InsuranceFAQ';
import FinalCTA from './FinalCTA';


export default function InvestmentsPage() {
  return (
    <>
      <Header variant="light" />
        <AboutPageHeader 
            title="Investments"
            label="Services"
        />
      <InsuranceHero
        img="../../images/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg"
        title="Grow Your Wealth with Confidence"
        title1="Strategic Investment Solutions"
        title2="for Your Financial Future"
        text1="Are you uncertain about how to make your money work for you? Do you want to grow your wealth but feel overwhelmed by the complexities of investing?"
        text2="Without a clear investment strategy, you may miss out on opportunities to maximize your returns and achieve your financial objectives."
      />
      <Banner
        text="Anderson Wealth specializes in helping individuals like you navigate the world of investments with confidence."
        />
    <InsuranceSecure
      image={compassImg}
      imageAlt="Compass in hand"
      title="Secure Your Future"
      description="Our team is dedicated to helping you find the right insurance solutions that provide the necessary protection and peace of mind."
      products={[
        [
          'Key Person Insurance',
          'Asset Protection',
          'Retirement Protection',
          'Succession Planning',
          'Buy-Sell Agreement Funding'
        ],
        [
          'Life, Disability & Critical Illness',
          'Segregated Funds',
          'Annuities',
          'GIAs'
        ]
      ]}
      investmentText="We also provide Investment guidance."
      investmentLink={{ href: '/investments', text: 'Learn more.' }}
    />
      <ProcessStepsParam
        header="HOW THE PROCESS WORKS"
        steps={[
          {
            number: '1',
            title: 'Discovery',
            description: `We begin by gaining a deep understanding of your financial goals and aspirations. We assess your risk profile and consider factors such as your timeline, income, and desired outcomes.`
          },
          {
            number: '2',
            title: 'Plan Development',
            description: `Based on this comprehensive analysis, we create a tailored investment plan designed to help you grow your wealth over time.`
          },
          {
            number: '3',
            title: 'Implementation',
            description: `We explain the investment options available to you, provide clear recommendations, and address any concerns or questions you may have.`
          },
          {
            number: '4',
            title: 'Maintenance',
            description: `Our transparent approach ensures that you are well-informed every step of the way.`
          }
        ]}
      />
        <InsuranceCTA />
        <InsuranceFAQ />
        <FinalCTA />
      <Footer />
    </>
  );
}
