import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from "../components/Hero";
import WhoWeAre from '../components/WhoWeAre';
import TeamSection from '../components/TeamSection';
import GiftCardSection from '../components/GiftCardSection';
import BrandsSection from '../components/BrandsSection';
import GallerySection from '../components/GallerySection';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    //  1s in case layout or images aren't ready yet
    const tryScroll = (attempt = 0) => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        section.focus?.({ preventScroll: true }); // accessibility
        navigate('.', { replace: true, state: {} }); // clear state after scroll
      } else if (attempt < 20) {
        setTimeout(() => tryScroll(attempt + 1), 50);
      }
    };

    requestAnimationFrame(() => tryScroll());
  }, [location.state, navigate]);

  return (
    <main>
      <Hero />
      <WhoWeAre />
      <TeamSection />
      <BrandsSection />
      <GiftCardSection />
      <GallerySection />
    </main>
  );
}

export default Home;

