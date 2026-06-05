import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import bhuwanImage from '../assets/profile_pics/Bhuwan_Khatri_Profile_Picture_for_MobileView.png';
import SEO from '../components/common/SEO';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Bhuwan = () => {
  const { t } = useTranslation(['common', 'projects']);
  
  const portfolioData = t('projects', { returnObjects: true, ns: 'projects' });
  const portfolio = Array.isArray(portfolioData) ? portfolioData : [];

  const socialLinksData = t('bhuwan.socialLinks', { returnObjects: true, ns: 'common' });
  const socialLinks = Array.isArray(socialLinksData) ? socialLinksData : [];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaGithub': return <FaGithub />;
      case 'FaLinkedin': return <FaLinkedin />;
      case 'FaTwitter': return <FaTwitter />;
      case 'FaEnvelope': return <FaEnvelope />;
      case 'FaFileAlt': return <FaFileAlt />;
      default: return null;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen p-4 sm:p-6 lg:p-8"
    >
      <SEO 
        title={t('bhuwan.seo.title', { ns: 'common' })}
        description={t('bhuwan.seo.description', { ns: 'common' })}
      />
      <div className="max-w-6xl mx-auto">
        <motion.section variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <img
            src={bhuwanImage}
            alt={t('bhuwan.name', { ns: 'common' })}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text">{t('bhuwan.name', { ns: 'common' })}</h1>
            <p className="text-xl text-text-muted mt-2">
              {t('bhuwan.tagline', { ns: 'common' })}
            </p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mt-16">
          <h2 className="text-3xl font-bold border-b-2 border-primary pb-2 mb-8">{t('bhuwan.portfolio_title', { ns: 'common' })}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project) => (
              <Link to={`/bhuwan/${project.id}`} key={project.id} className="group">
                <motion.div
                  variants={itemVariants}
                  className="bg-secondary rounded-xl shadow-md overflow-hidden hover:shadow-lg dark:hover:shadow-primary/20 hover:-translate-y-1 transition-all"
                >
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <p className="text-text-muted mt-2">
                      {project.summary}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mt-16">
          <h2 className="text-3xl font-bold border-b-2 border-primary pb-2 mb-8">{t('bhuwan.connect_title', { ns: 'common' })}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-secondary rounded-lg shadow-md hover:bg-primary/10 dark:hover:bg-accent/10 hover:-translate-y-1 transition-all"
              >
                <div className="text-2xl text-primary">{getIcon(link.icon)}</div>
                <span className="font-semibold">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Bhuwan;