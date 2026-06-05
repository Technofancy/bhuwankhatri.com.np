import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import NotFound from './NotFound';

const SingleProject = () => {
  const { id } = useParams();
  const { t } = useTranslation(['projects', 'common']);
  
  const portfolioData = t('projects', { returnObjects: true, ns: 'projects' });
  const portfolio = Array.isArray(portfolioData) ? portfolioData : [];
  const project = portfolio.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen p-4 sm:p-6 lg:p-8"
    >
      <SEO 
        title={project.title}
        description={project.summary}
      />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/bhuwan"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>{t('back_to_projects', { ns: 'common' })}</span>
        </Link>
        <article>
          <header className="mb-8">
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-xl mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">
              {project.title}
            </h1>
          </header>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{project.summary}</p>
            {/* If you add a 'content' field to your JSON, it would render here */}
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default SingleProject;