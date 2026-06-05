/** @type {import('tailwindcss').Config} **/

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
      },
      colors: {
        primary: withOpacity("--color-primary"),
        accent: withOpacity("--color-accent"),
        background: withOpacity("--color-background"),
        text: withOpacity("--color-text"),
        "text-muted": withOpacity("--color-text-muted"),
        secondary: withOpacity("--color-secondary"),
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
