import { motion } from 'framer-motion';
import { FaFilter, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const PoemFilter = ({ categories, selectedCategory, onCategoryChange, onSearch, searchQuery }) => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-6 flex gap-2">
        <button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-colors"
        >
          <FaFilter /> Filter
        </button>
      </div>

      {/* Filter Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${
          showMobileFilter ? 'block' : 'hidden'
        } md:block mb-8 p-4 sm:p-6 bg-secondary rounded-xl border border-primary/10`}
      >
        {/* Search Bar */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-text-muted mb-2">
            Search Poems
          </label>
          <input
            type="text"
            placeholder="Search by title, author, or tag..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-text-muted mb-3">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {/* All Button */}
            <button
              onClick={() => onCategoryChange(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-white'
                  : 'bg-background text-text-muted border border-primary/20 hover:border-primary'
              }`}
            >
              All
            </button>

            {/* Category Buttons */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all capitalize ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-background text-text-muted border border-primary/20 hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Close Button for Mobile */}
        <button
          onClick={() => setShowMobileFilter(false)}
          className="md:hidden mt-4 flex items-center gap-2 text-text-muted hover:text-primary"
        >
          <FaTimes /> Close
        </button>
      </motion.div>
    </>
  );
};

export default PoemFilter;
