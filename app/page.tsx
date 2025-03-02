'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../components/Loading';
import MainContent from '../components/MainContent';
import NavPanel from '../components/NavPanel';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Dynamic import for ParticlesBackground to avoid server-side rendering issues
const ParticlesBackground = dynamic(
  () => import('../components/ParticlesBackground'),
  { ssr: false }
);

// Custom hook to setup jQuery animations
const useAnimationSetup = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isAnyOpen, setIsAnyOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // We don't need to import jQuery here as it's already available in components when needed
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  // This effect is no longer needed since we're directly setting isAnyOpen in the handlers
  // We're keeping it commented out for reference in case you want to revert to this approach
  /*
  useEffect(() => {
    setIsAnyOpen(isAboutVisible || isWorkVisible || isContactVisible);
  }, [isAboutVisible, isWorkVisible, isContactVisible]);
  */

  // About section handlers
  const showAbout = () => {
    if (!isAnyOpen) {
      // Update isAnyOpen first to prevent double flash
      setIsAnyOpen(true);
      requestAnimationFrame(() => {
        setIsAboutVisible(true);
      });
    }
  };

  const closeAbout = () => {
    // First update visibility state
    setIsAnyOpen(false);
    // Then update section visibility with a slight delay
    // This ensures buttons appear first while the panel is still animating out
    requestAnimationFrame(() => {
      setIsAboutVisible(false);
    });
  };

  // Work section handlers
  const showWork = () => {
    if (!isAnyOpen) {
      // Set both states at once to ensure UI consistency
      setIsWorkVisible(true);
      setIsAnyOpen(true);
    }
  };

  const closeWork = () => {
    // First update visibility state
    setIsAnyOpen(false);
    // Then update section visibility with a slight delay
    requestAnimationFrame(() => {
      setIsWorkVisible(false);
    });
  };

  // Contact section handlers
  const showContact = () => {
    if (!isAnyOpen) {
      // Set both states at once to ensure UI consistency
      setIsContactVisible(true);
      setIsAnyOpen(true);
    }
  };

  const closeContact = () => {
    // First update visibility state
    setIsAnyOpen(false);
    // Then update section visibility with a slight delay
    requestAnimationFrame(() => {
      setIsContactVisible(false);
    });
  };

  return {
    isClient,
    isAboutVisible,
    isWorkVisible,
    isContactVisible,
    isAnyOpen,
    showAbout,
    closeAbout,
    showWork,
    closeWork,
    showContact,
    closeContact,
  };
};

export default function Home() {
  // Direct state management in the component
  
  const [isAnyOpen, setIsAnyOpen] = useState(false); // Direct state control
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simplified direct handlers without any animation delay
  const showAbout = () => {
    if (!isAnyOpen) {
      setIsAnyOpen(true);
      setIsAboutVisible(true);
    }
  };

  const closeAbout = () => {
    // No delay at all - buttons must reappear instantly
    setIsAnyOpen(false);
    setIsAboutVisible(false);
  };

  const showWork = () => {
    if (!isAnyOpen) {
      // Update isAnyOpen first to prevent double flash
      setIsAnyOpen(true);
      requestAnimationFrame(() => {
        setIsWorkVisible(true);
      });
    }
  };

  const closeWork = () => {
    // No delay at all - buttons must reappear instantly
    setIsAnyOpen(false);
    setIsWorkVisible(false);
  };

  const showContact = () => {
    if (!isAnyOpen) {
      // Update isAnyOpen first to prevent double flash
      setIsAnyOpen(true);
      requestAnimationFrame(() => {
        setIsContactVisible(true);
      });
    }
  };

  const closeContact = () => {
    // No delay at all - buttons must reappear instantly
    setIsAnyOpen(false);
    setIsContactVisible(false);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Loading />
      <ParticlesBackground />
      
      {/* Always render but disable when a card is open */}
      <NavPanel 
        onShowAbout={showAbout}
        onShowWork={showWork}
        onShowContact={showContact}
        disabled={isAnyOpen}
      />
      
      <MainContent 
        onShowAbout={showAbout}
        onShowWork={showWork}
        onShowContact={showContact}
        disabled={isAnyOpen}
      />
      
      <AboutSection isVisible={isAboutVisible} onClose={closeAbout} />
      <WorkSection isVisible={isWorkVisible} onClose={closeWork} />
      <ContactSection isVisible={isContactVisible} onClose={closeContact} />
      
      <Footer />
    </main>
  );
}