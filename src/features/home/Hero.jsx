import { Link } from "react-router-dom";
import bhuwanImage from "../../assets/profile_pics/Bhuwan_Khatri_Profile_Picture_for_MobileView.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const HeroCard = ({ to, className, children, index }) => (
  <motion.div custom={index} variants={cardVariants} initial="hidden" animate="visible" viewport={{ once: true }}>
    <Link to={to} className="block h-full group">
      <div className={`h-full p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 ${className}`}>
        {children}
      </div>
    </Link>
  </motion.div>
);

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-background flex justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Mohanmitra Card */}
        <HeroCard
          to="/mohanmitra"
          className="bg-secondary border-2 border-primary"
          index={0}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary">{t('mohanmitra.name')}</h2>
          <hr className="my-3 border-accent" />
          <span className="text-base sm:text-lg font-normal text-text-muted">{t('mohanmitra.description')}</span>
        </HeroCard>

        {/* Bhuwan Card (Central) */}
        <HeroCard
          to="/bhuwan"
          className="bg-primary text-primary"
          index={1}
        >
          <div className="mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">{t('bhuwan.name')}</h1>
            <p className="opacity-80">{t('bhuwan.name_en')}</p>
            <hr className="my-3 border-accent" />
            <h2 className="text-base">{t('bhuwan.tagline')}</h2>
          </div>
          <img
            src={bhuwanImage}
            alt={t('bhuwan.alt_text')}
            className="w-36 h-36 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-accent"
          />
        </HeroCard>

        {/* Technofancy Card */}
        <HeroCard
          to="/technofancy"
          className="bg-secondary border-2 border-primary"
          index={2}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary">{t('technofancy.name')}</h2>
          <hr className="my-3 border-accent" />
          <span className="text-base sm:text-lg font-normal text-text-muted">{t('technofancy.description')}</span>
        </HeroCard>
      </div>
    </div>
  );
};

export default Hero;