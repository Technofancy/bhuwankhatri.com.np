import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Mohanmitra = () => {
  const { t } = useTranslation(['common', 'poems']);
  
  const poemsData = t('poems', { returnObjects: true, ns: 'poems' });
  const poems = Array.isArray(poemsData) ? poemsData : [];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen p-4 sm:p-6 lg:p-8"
    >
      <SEO 
        title={t('mohanmitra.seo.title', { ns: 'common' })}
        description={t('mohanmitra.seo.description', { ns: 'common' })}
      />
      <div className="max-w-4xl mx-auto">
        <motion.header variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text">{t('mohanmitra.name', { ns: 'common' })}</h1>
          <p className="text-xl text-text-muted mt-2">{t('mohanmitra.tagline', { ns: 'common' })}</p>
        </motion.header>

        <motion.section variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem) => (
              <Link to={`/mohanmitra/${poem.id}`} key={poem.id} className="group">
                <motion.div
                  variants={itemVariants}
                  className="p-6 h-full bg-secondary rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-accent/20 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary">{poem.title}</h3>
                  <p className="text-text-muted mt-4 font-serif">
                    {poem.lines[0]}...
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Mohanmitra;