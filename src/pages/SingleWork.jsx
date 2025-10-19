import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import NotFound from './NotFound';

const SingleWork = () => {
  const { id } = useParams();
  const { t } = useTranslation(['works', 'common']);

  const worksData = t('works', { returnObjects: true, ns: 'works' });
  const works = Array.isArray(worksData) ? worksData : [];
  const work = works.find((w) => w.id === id);

  if (!work) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen p-4 sm:p-6 lg:p-8"
    >
      <SEO 
        title={work.title}
        description={work.description}
      />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/technofancy"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>{t('back_to_works', { ns: 'common' })}</span>
        </Link>
        <article>
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              {work.title}
            </h1>
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg text-primary hover:underline"
              >
                <span>Visit Project</span>
                <FaExternalLinkAlt />
              </a>
            )}
          </header>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{work.description}</p>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default SingleWork;