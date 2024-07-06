const AboutUs = () => {
    return (
      <div className="about-us">
        <div className="container">
        <div className="about-us__header">
          <h1>About us</h1>
          <p>
            We bring the beauty and richness of indigenous languages to kids,
            teenagers, and young adults living in the diaspora.
          </p>
        </div>
        <div className="about-us__content">
          <img src="/hero-img.webp" alt="Children" className="image" />
          <div className="mission">
            <p>
              Our mission is to bridge cultural gaps and preserve linguistic heritage by offering engaging, interactive, and comprehensive language programs tailored for young learners.
            </p>
          </div>
          <div className="belief">
            <p>
              At Idealab, we believe that language is a vital connection to our roots, identity, and traditions. Our tutors are custodians of our culture, dedicated to passing the baton, unadulterated, to the next generation. Using innovative teaching methods, they make learning fun and accessible, ensuring each student can confidently communicate in their ancestral tongue.
            </p>
          </div>
          <div className="service">
            <p>
            We offer bootcamps, one-on-one classes, and even special classes for families, so everyone can join in the journey of cultural discovery and linguistic mastery. Join us in celebrating and nurturing your cultural heritage through the power of language!
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;