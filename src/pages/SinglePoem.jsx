import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import NotFound from './NotFound';

const SinglePoem = () => {
  const { id } = useParams();
  // By loading the 'poems' and 'common' namespaces, I can get the data I need.
  const { t } = useTranslation(['poems', 'common']);

  // I'm now getting the 'poems' array directly from the 'poems' namespace.
  const poemsData = t('poems', { returnObjects: true, ns: 'poems' });
  const poems = Array.isArray(poemsData) ? poemsData : [];
  const poem = poems.find((p) => p.id === id);

  if (!poem) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen p-4 sm:p-6 lg:p-8"
    >
      <SEO 
        title={poem.title}
        description={poem.lines.join(' ')}
      />
      <div className="max-w-3xl mx-auto">
        <Link
          to="/mohanmitra"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors"
        >
          <FaArrowLeft />
          {/* This text is now translated using a key from the 'common' namespace. */}
          <span>{t('back_to_poems', { ns: 'common' })}</span>
        </Link>
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            {poem.title}
          </h1>
        </header>
        <div className="space-y-6">
          {poem.lines.map((line, index) => (
            <p key={index} className="text-xl font-serif leading-loose">
              {line}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SinglePoem;