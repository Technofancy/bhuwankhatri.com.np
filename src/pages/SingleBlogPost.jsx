import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import NotFound from './NotFound';

const SingleBlogPost = () => {
  const { id } = useParams();
  const { t } = useTranslation(['blog', 'common']);

  const blogsData = t('blogs', { returnObjects: true, ns: 'blog' });
  const blogs = Array.isArray(blogsData) ? blogsData : [];
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen p-4 sm:p-6 lg:p-8"
    >
      <SEO 
        title={blog.title}
        description={blog.summary}
      />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/technofancy"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>{t('back_to_blog', { ns: 'common' })}</span>
        </Link>
        <article>
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">
              {blog.title}
            </h1>
          </header>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{blog.summary}</p>
            {/* If you add a 'content' field to your JSON, it would render here */}
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default SingleBlogPost;