import '../styles/AboutPage.css'
import Header from '../components/Header'
import AboutPageHeader from '../components/AboutPageHeader'
import AboutContentGrid from '../components/AboutContentGrid'
import AboutTeamMember from '../components/AboutTeamMember'
import ClientStory from '../components/ClientStory'
import StoryChallenge from '../components/StoryChallenge'
import Footer from '../components/Footer'
import StoryJourney from '../components/StoryJourney';
import CTASection from '../components/CTASection';
import OfferedServices from '../components/OfferedServices';
import FinalCTA from '../components/FinalCTA';
import founderImg from '../../images/ANP_6333-Web.jpg';
import ashleyImg from '../../images/Ashley-Healey-Anderson-Wealth.jpg';

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header variant="light" />
      <AboutPageHeader
        title="About Us"
        label="AWM"
      />
      <AboutContentGrid />
      <AboutTeamMember
        name="Anderson Founder"
        title="Founder & Lead Advisor"
        bio={[
          "With over 20 years of experience in wealth management, our founder established Anderson Wealth Management with a vision to create a different kind of financial advisory firm – one centered on relationships, transparency, and genuine client care.",
          "Having guided countless families through market cycles and life transitions, the founder brings a wealth of knowledge and a deep commitment to helping clients achieve their financial aspirations with confidence and peace of mind."
        ]}
        image={founderImg}
        email="evan.anderson@andersonwealth.ca"
        flipped={true}
      />
      <AboutTeamMember
        name="Ashley Healey"
        title="Licensed Assistant"
        bio={[
          "Growing up in rural Saskatchewan, Ashley developed a strong foundation in teamwork and community values through retail management. These experiences instilled in her the importance of meaningful relationships and collaborative problem-solving.",
          "Ashley joined the financial services industry in 2020, driven by a passion to empower clients with financial knowledge and confidence. Her enthusiasm comes from making a tangible, positive impact on the lives of individuals and families as they work toward their dreams."
        ]}
        email="admin@andersonwealth.ca"
        image={ashleyImg}
        flipped={false}
      />
      <ClientStory />
      <StoryChallenge />
      <StoryJourney
        title="THE JOURNEY"
        columns={[
          { title: 'Mary and Sam reached out to us for help.',
            paragraphs: [
              { text: 'We listened to their goals and concerns and worked with them to develop a personalized financial plan that would help them achieve their dreams.', bold: false }
            ]
          }, 
          { title: '',
            paragraphs: [
              { text: 'Together, we looked at their income and expenses and identified areas where they could make small changes that would have a big impact.', bold: false },
              { text: 'We recommended investments that would provide a steady stream of income, reduce their tax burden, and help them reach their long-term financial goals.', bold: false }
            ]
          },
          { title: '',
            paragraphs: [
              { text: 'We also helped Mary and Sam address their income concerns by recommending insurance policies that would provide financial protection in the event of illness, injury, or job loss.', bold: false },    
              { text: 'We made sure they had the coverage they needed to protect their family and their financial future.', bold: true }
            ]
          }
        ]}
      />

      <StoryJourney
        title="The Transformation"
        columns={[
          { title: '',
            paragraphs: [
              { text: 'Thanks to our work together, Mary and Sam now feel confident in their ability to achieve their financial goals.', bold: false }
            ]
          }, 
          { title: '',
            paragraphs: [
              { text: 'They have reduced their debt load, are saving for their children’s post-secondary education, and are on track to retire comfortably.', bold: false },
              { text: 'They also have the peace of mind that comes with knowing their family will be taken care of, even if something unexpected happens.', bold: false }
            ]
          },
          { title: '',
            paragraphs: [
              { text: 'Mary and Sam’s journey to financial confidence is a testament to the power of personalized financial planning. With the right guidance and support, anyone can overcome financial challenges and achieve their dreams.', bold: true },    
              { text: '', bold: true }
            ]
          }
        ]}
      />
      <CTASection />
      <OfferedServices />
      <FinalCTA />
      <Footer />
    </div>
  )
}
