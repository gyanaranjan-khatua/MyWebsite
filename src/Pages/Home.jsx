
import React from 'react';
import { Helmet } from 'react-helmet-async';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import WhyChooseUs from './WhyChooseUs';
import WebsiteDevelopment from './WebsiteDevelopment';
import Faq from './Faq';
import AppDev from '@/Services/AppDev';
import AppDevelopment from './AppDevelopment';
import AdminPanel from './AdminPanel';

function Home() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Gyanex Solutions | Website & App Development Company
        </title>

        <meta
          name="description"
          content="Gyanex Solutions helps businesses grow with professional website development, mobile app development, full-stack web applications, and custom admin panel solutions."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://gyanex.in/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Gyanex Solutions"
        />
        <meta
          property="og:title"
          content="Gyanex Solutions | Website & App Development Company"
        />
        <meta
          property="og:description"
          content="Build your digital presence with Gyanex Solutions. Explore professional website development, mobile applications, full-stack solutions, and admin panels."
        />
        <meta
          property="og:url"
          content="https://gyanex.in/"
        />
        <meta
          property="og:image"
          content="https://gyanex.in/logo.jpeg"
        />
        <meta
          property="og:image:alt"
          content="Gyanex Solutions"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Gyanex Solutions | Website & App Development Company"
        />
        <meta
          name="twitter:description"
          content="Professional website development, mobile apps, full-stack web applications, and custom admin panel solutions from Gyanex Solutions."
        />
        <meta
          name="twitter:image"
          content="https://gyanex.in/logo.jpeg"
        />
      </Helmet>

      <HeroSection />

      <ServiceSection />

      <WebsiteDevelopment />

      <AppDevelopment />

      <AppDev />

      <AdminPanel />

      <WhyChooseUs />

      <Faq />
    </>
  );
}

export default Home;
