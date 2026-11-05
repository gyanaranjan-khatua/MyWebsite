
import React from 'react';
import { Helmet } from 'react-helmet-async';

import AboutSection from './AboutSection';
import AbouHeroSection from './AbouHeroSection';
import OurTeam from './OurTeam';
import MissionVission from './MissionVission';

function About() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>About Us | Gyanex Solutions</title>

        <meta
          name="description"
          content="Learn about Gyanex Solutions, our approach to website development, mobile app development, and digital solutions that help businesses grow online."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://gyanex.in/about"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Gyanex Solutions"
        />
        <meta
          property="og:title"
          content="About Us | Gyanex Solutions"
        />
        <meta
          property="og:description"
          content="Discover Gyanex Solutions, our mission, our team, and our commitment to delivering professional digital solutions for businesses."
        />
        <meta
          property="og:url"
          content="https://gyanex.in/about"
        />
        <meta
          property="og:image"
          content="https://gyanex.in/logo.jpeg"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="About Us | Gyanex Solutions"
        />
        <meta
          name="twitter:description"
          content="Meet Gyanex Solutions and learn about our mission to deliver modern web, app, and digital solutions."
        />
        <meta
          name="twitter:image"
          content="https://gyanex.in/logo.jpeg"
        />
      </Helmet>

      <AbouHeroSection />
      <AboutSection />
      <OurTeam />
      <MissionVission />
    </>
  );
}

export default About;
