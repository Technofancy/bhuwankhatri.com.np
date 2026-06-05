import Hero from '../features/home/Hero';
import SEO from '../components/common/SEO'; // Corrected Path

const HomeLand = () => {
  return (
    <div>
      <SEO 
        title="Bhuwan Khatri - Unified Portfolio" 
        description="The unified portfolio of Bhuwan Khatri, showcasing the professional (Bhuwan), the poet (Mohanmitra), and the tech enthusiast (Technofancy)."
      />
      <Hero />
    </div>
  );
};

export default HomeLand;