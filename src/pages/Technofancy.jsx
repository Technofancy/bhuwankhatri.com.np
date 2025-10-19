import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';

const Technofancy = () => {
  const { t } = useTranslation(['common', 'works', 'blog']);

  const worksData = t('works', { returnObjects: true, ns: 'works' });
  const works = Array.isArray(worksData) ? worksData : [];

  const blogsData = t('blog', { returnObjects: true, ns: 'blog' });
  const blogs = Array.isArray(blogsData) ? blogsData : [];

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-8">
      <SEO 
        title={t('technofancy.seo.title', { ns: 'common' })}
        description={t('technofancy.seo.description', { ns: 'common' })}
      />
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-text">{t('technofancy.name', { ns: 'common' })}</h1>
          <p className="text-xl text-text-muted mt-2">{t('technofancy.tagline', { ns: 'common' })}</p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold border-b-2 border-primary pb-2 mb-8">{t('technofancy.works_title', { ns: 'common' })}</h2>
          <div className="space-y-8">
            {works.map((work) => (
              <Link to={`/technofancy/work/${work.id}`} key={work.id} className="block group">
                <div className="p-6 bg-secondary rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-accent/20 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{work.title}</h3>
                  <p className="text-text-muted mt-2">{work.description}</p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:underline">
                    {t('technofancy.view_details', { ns: 'common' })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-primary pb-2 mb-8">{t('technofancy.blog_title', { ns: 'common' })}</h2>
          <div className="space-y-8">
            {blogs.map((blog) => (
              <Link to={`/technofancy/blog/${blog.id}`} key={blog.id} className="block group">
                <div className="p-6 bg-secondary rounded-xl shadow-md hover:shadow-lg dark:hover:shadow-accent/20 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{blog.title}</h3>
                  <p className="text-text-muted mt-2">{blog.summary}</p>
                  <span className="inline-block mt-4 font-semibold text-primary group-hover:underline">
                    {t('technofancy.read_more', { ns: 'common' })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technofancy;