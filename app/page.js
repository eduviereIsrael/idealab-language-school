import Faq from "./Components/faq/faq";
import { FaqDiv, Hero, LanguageClasses, SecondSection, ThirdSection } from "./index.style";
import Link from "next/link"


export default function Home() {
  return (
    <div className="homepage" >

      <Hero>
        <div className="container" >

        <h1>DO NOT LOSE <br/> THE TASTE OF YOUR CULTURE.</h1>
        <p>Connect with your root through our online language classes</p>
        <Link href={'https://wa.me/qr/KNAR4TKIXY6VG1'} >
          <span className="cta" >Learn more</span>
        </Link>
        {/* <h1>CONNECT WITH YOUR ROOT
  THROUGH OUR LIVE ONLINE 
  LANGUAGE CLASSES</h1> */}
        </div>
      </Hero>
      <SecondSection>
        <div className="container" >
          <h2> <span>we have created a reliable learning cycle </span>To make sure you are matched to your current competence level.</h2>
          <div className="perk-div" >
            <span className="section-tag" >How it works</span>
            <div className="perk-container" >
              <div className="perk-item" >
                <span>Culture Understanding</span>
                <p>By fusing language instruction with cultural 
awareness, we offer the closest thing to 
living in your own country.</p>
              </div>
              <span className="vt" ></span>
              <div className="perk-item" >
                <span>Flexibilty</span>
                <p>Whatever your circumstances or preferred 
method of learning, we will create a program 
specifically tailored to you. 
You can study in groups, with your family, 
or even by yourself.</p>
              </div>
              <span className="vt" ></span>
              
              <div className="perk-item" >
                <span>Fast Results</span>
                <p>Quickly acquire fluency in the language 
you&apos;re learning. Devote more time to your 
priorities and less time to studying.</p>
              </div>
            </div>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <h2>
          Language school, <br/> a culture of perpetual excellence
        </h2>
        <Link href={'https://wa.me/qr/KNAR4TKIXY6VG1'} >
          <span className="cta" >Learn more</span>
        </Link>
      </ThirdSection>
      
      <LanguageClasses>
        <div className="container" >

        <div className="heading" >
          <span className="section-tag" >Our Classes</span>

          <h3>As you go through our language competency levels, 
we will assist you in assessing your present level of skill 
and tracking your development with ease. </h3>
        </div>
          <div className="teens" >
            <span className="title" >For Kids and Teens</span>
            <div className="language-container" >
              <div className="first" >
                <div className="lang-card" >
                  <p>Yoruba</p>
                  <span>Yoruba for beginners</span>
                  <span>Conversational Yoruba</span>
                  <span>Yoruba Folk Tales</span>
                  <span>Yoruba culture</span>
                </div>
                <div className="lang-card" >
                  <p>Igbo</p>
                  <span>Igbo for beginners</span>
                  <span>Conversational Igbo</span>
                  <span>Igbo Folk Tales</span>
                  <span>Igbo culture</span>
                </div>
              </div>
              <div className="second" >
                {/* <div className="lang-card" >
                  <p>French</p>
                  <span>French for beginners</span>
                </div>
                <div className="lang-card" >
                  <p>Mandarin</p>
                  <span>Mandarin for beginners</span>
                </div>
                <div className="lang-card" >
                  <p>Spanish</p>
                  <span>Spanish for beginners</span>
                </div>
                <div className="lang-card" >
                  <p>German</p>
                  <span>German for beginners</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="teens" >
            <span className="title" >For Adults</span>
            <div className="language-container" >
              <div className="first" >
                <div className="lang-card" >
                  <p>Yoruba</p>
                  <span>Beginners Class</span>
                  <span>Intermediate Class</span>
                  <span>Advance Class</span>
                </div>
                <div className="lang-card" >
                  <p>Igbo</p>
                  <span>Beginners Class</span>
                  <span>Intermediate Class</span>
                  <span>Advance Class</span>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </LanguageClasses>

      <FaqDiv>
        <div className="container" >
             <div className="heading" >
              <span className="section-tag" >FAQs</span>

              <h3>We answered some questions</h3>
            </div>
          <Faq />
        </div>
      </FaqDiv>

    </div>
    

  );
}
