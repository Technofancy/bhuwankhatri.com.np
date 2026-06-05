import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaHeart, FaShare2, FaBookmark } from 'react-icons/fa';
import { useState } from 'react';
import SEO from '../components/common/SEO';
import poemsData from '../data/poems.json';
import NotFound from './NotFound';

const SinglePoem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const poem = poemsData.poems.find(p => p.id === id);

  if (!poem) {
    return <NotFound />;
  }

  // Get related poems from same category
  const relatedPoems = poemsData.poems
    .filter(p => p.category === poem.category && p.id !== poem.id)
    .slice(0, 3);

  // Get previous and next poem in category
  const categoryPoems = poemsData.poems.filter(p => p.category === poem.category);
  const currentIndex = categoryPoems.findIndex(p => p.id === id);
  const prevPoem = currentIndex > 0 ? categoryPoems[currentIndex - 1] : null;
  const nextPoem = currentIndex < categoryPoems.length - 1 ? categoryPoems[currentIndex + 1] : null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: poem.title,
        text: poem.author,
        url: window.location.href
      });
    } else {
      // Fallback: copy link to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <SEO
        title={poem.title}
        description={poem.summary}
      />

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
          >
            <FaArrowLeft />
            <span>Back to Poems</span>
          </button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8 rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-96"
        >
          <img
            src={poem.imageUrl}
            alt={poem.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Article Header */}
        <motion.article variants={itemVariants} className="mb-12">
          <header className="mb-8">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-4 py-2 rounded-full">
                {poem.category}
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text mb-4 leading-tight">
              {poem.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-b border-primary/20">
              <div>
                <p className="text-lg text-primary font-semibold">{poem.author}</p>
                <p className="text-sm text-text-muted">
                  {new Date(poem.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              {/* Reading Info */}
              <div className="flex items-center gap-4">
                <span className="text-sm bg-accent/20 text-accent px-4 py-2 rounded-lg font-semibold">
                  {poem.readingTime} min read
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`p-3 rounded-lg transition-all ${
                      liked
                        ? 'bg-red-500/20 text-red-500'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                    title="Like this poem"
                  >
                    <FaHeart size={18} />
                  </button>
                  <button
                    onClick={() => setSaved(!saved)}
                    className={`p-3 rounded-lg transition-all ${
                      saved
                        ? 'bg-accent/20 text-accent'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                    title="Save this poem"
                  >
                    <FaBookmark size={18} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                    title="Share this poem"
                  >
                    <FaShare2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Poem Content */}
          <motion.div
            variants={itemVariants}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            {/* Summary */}
            <p className="text-xl text-text-muted italic mb-8 leading-relaxed">
              "{poem.summary}"
            </p>

            {/* Poem Text */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-12 rounded-2xl border border-primary/20 font-serif text-lg leading-relaxed whitespace-pre-line">
              {poem.content}
            </div>
          </motion.div>

          {/* Tags */}
          {poem.tags && poem.tags.length > 0 && (
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {poem.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent/30 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.article>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 mb-12 py-8 border-t border-b border-primary/20"
        >
          {prevPoem ? (
            <Link
              to={`/mohanmitra/${prevPoem.id}`}
              className="flex-1 p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-left"
            >
              <p className="text-xs text-text-muted mb-1">← Previous</p>
              <p className="font-semibold text-primary truncate">{prevPoem.title}</p>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}

          {nextPoem && (
            <Link
              to={`/mohanmitra/${nextPoem.id}`}
              className="flex-1 p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-right"
            >
              <p className="text-xs text-text-muted mb-1">Next →</p>
              <p className="font-semibold text-primary truncate">{nextPoem.title}</p>
            </Link>
          )}
        </motion.div>

        {/* Related Poems */}
        {relatedPoems.length > 0 && (
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8">
              More from {poem.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPoems.map((relPoem, idx) => (
                <motion.div
                  key={relPoem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={`/mohanmitra/${relPoem.id}`}
                    className="block p-6 bg-secondary rounded-xl hover:shadow-lg transition-all group"
                  >
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors mb-2">
                      {relPoem.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-3 line-clamp-2">
                      {relPoem.summary}
                    </p>
                    <span className="text-xs text-accent font-semibold">
                      Read more →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
};

export default SinglePoem;
