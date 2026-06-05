import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ mode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-3 rounded-full bg-secondary text-text shadow-md hover:shadow-lg transition-shadow"
      aria-label="Toggle theme"
    >
      {mode === 'dark' ? <FaSun className="text-accent" /> : <FaMoon className="text-primary" />}
    </button>
  );
};

export default ThemeToggle;