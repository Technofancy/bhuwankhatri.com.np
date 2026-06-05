import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import PoemCard from '../components/PoemCard';
import PoemFilter from '../components/PoemFilter';
import poemsData from '../data/poems.json';
import { staggerContainer } from '../animations/variants';
import { FaQuoteLeft } from 'react-icons/fa';

const Mohanmitra = () => {
  const { t } = useTranslation(['poems', 'common']);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories from poems
  const categories = useMemo(() => {
    return [...new Set(poemsData.poems.map(poem => poem.category))].sort();
  }, []);

  // Filter poems based on search and category
  const filteredPoems = useMemo(() => {
    return poemsData.poems.filter(poem => {
      const matchCategory = !selectedCategory || poem.category === selectedCategory;
      const matchSearch = !searchQuery || 
        poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        poem.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Separate featured and regular poems
  const featuredPoems = filteredPoems.filter(p => p.featured);
  const regularPoems = filteredPoems.filter(p => !p.featured);

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
        title={t('mohanmitra.name', { ns: 'common' })}
        description={t('mohanmitra.description', { ns: 'common' })}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.section variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <FaQuoteLeft className="text-5xl sm:text-6xl text-primary/30" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text mb-4">
            {t('mohanmitra.name', { ns: 'common' })}
          </h1>

          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-6 leading-relaxed">
            {t('mohanmitra.description', { ns: 'common' })}
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-accent font-serif italic text-lg"
          >
            "Words are the soul\'s melody"
          </motion.div>
        </motion.section>

        {/* Filter Section */}
        <motion.div variants={itemVariants}>
          <PoemFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onSearch={setSearchQuery}
            searchQuery={searchQuery}
          />
        </motion.div>

        {/* Results Info */}
        {filteredPoems.length > 0 && (
          <motion.div
            variants={itemVariants}
            className="mb-8 text-center text-text-muted"
          >
            <p>
              Showing <span className="font-bold text-primary">{filteredPoems.length}</span> poem{filteredPoems.length !== 1 ? 's' : ''}
              {selectedCategory && ` in "${selectedCategory}" category`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </motion.div>
        )}

        {/* Featured Poems Section */}
        {featuredPoems.length > 0 && (
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8 flex items-center gap-3">
              <span className="text-primary">★</span>
              Featured Poems
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {featuredPoems.map((poem, index) => (
                <PoemCard key={poem.id} poem={poem} index={index} featured={true} />
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* All Poems Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-8">
            {featuredPoems.length > 0 ? 'More Poems' : 'All Poems'}
          </h2>

          {regularPoems.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {regularPoems.map((poem, index) => (
                <PoemCard key={poem.id} poem={poem} index={index} featured={false} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="text-center py-12 bg-secondary rounded-xl border border-primary/10"
            >
              <p className="text-text-muted text-lg mb-4">
                No poems found matching your search.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.section>

        {/* Stats Section */}
        <motion.section
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl font-bold text-primary mb-2"
            >
              {poemsData.poems.length}
            </motion.div>
            <p className="text-text-muted">Total Poems</p>
          </div>
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="text-4xl font-bold text-accent mb-2"
            >
              {categories.length}
            </motion.div>
            <p className="text-text-muted">Categories</p>
          </div>
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="text-4xl font-bold text-primary mb-2"
            >
              {Math.round(poemsData.poems.reduce((sum, p) => sum + p.readingTime, 0) / poemsData.poems.length)}
            </motion.div>
            <p className="text-text-muted">Avg. Read Time</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Mohanmitra;