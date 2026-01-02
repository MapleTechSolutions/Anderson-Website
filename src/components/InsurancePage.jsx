import Header from './Header';
import Footer from './Footer';
import InsuranceHero from './InsuranceHero';
import InsuranceSecure from './InsuranceSecure';
import compassImg from '../../images/ahmed-zayan-n_YWKiIBnp4-unsplash.jpg';
import InsuranceCTA from './InsuranceCTA';
import InsuranceFAQ from './InsuranceFAQ';
import AboutPageHeader from './AboutPageHeader';
import Banner from './Banner';
import ProcessStepsParam from './ProcessStepsParam';
import FinalCTA from './FinalCTA';
export default function InsurancePage() {
  return (
    <>
      <Header variant="light" />
      <AboutPageHeader 
        title="Insurance"
        label="Services"
      />
      <InsuranceHero
        img="../../images/annie-spratt-IT6aov1ScW0-unsplash.jpg"
        title="PROTECT WHAT MATTERS MOST"
        title1="Customized Insurance"
        title2="Solutions For Your Peace Of Mind"
        text1="Are you concerned about unforeseen events that could jeopardize your financial security? Do you worry about protecting your loved ones or your business in times of crisis?"
        text2="Without the right insurance coverage, you may be leaving yourself vulnerable to significant financial risks."
      />
      <Banner
        text="Anderson Wealth understands the importance of safeguarding your assets, your family, and your business."
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
        header="OUR INSURANCE PROCESS"
        steps={[
          {
            number: '1',
            title: 'Discovery',
            description: `Our comprehensive approach to insurance starts with a thorough analysis of your unique needs and risks. We take the time to listen to your concerns, evaluate your current coverage (if any), and identify any gaps or areas that require attention.`
          },
          {
            number: '2',
            title: 'Plan Development',
            description: `Based on our findings, we create a tailored insurance strategy designed specifically for you.`
          },
          {
            number: '3',
            title: 'Implementation',
            description: `We provide expert guidance and present you with transparent recommendations that align with your goals and budget.`
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
