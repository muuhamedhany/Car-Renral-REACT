import React from 'react';
import HeroDefault from '../components/HeroDefault';
import ContactForm from '../components/ContactForm';
import BannerAll from '../components/bannerAll.jsx';

const Contact = () => {
  return (
    <>
      <HeroDefault name="Contact" />
      <div>
        <ContactForm />

        <BannerAll />
      </div>
    </>
  );
};

export default Contact;
