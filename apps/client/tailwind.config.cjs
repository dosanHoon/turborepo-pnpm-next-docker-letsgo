const baseConfig = require("@on/tailwind-config");

module.exports = {
  darkMode: "class",
  presets: [baseConfig],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        primary: "var(--color-blue-600)",
        background: "var(--color-background)",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "sans-serif"],
      },
      screens: {
        "al-min": "720px",
      },
    },
    container: {
      center: true,
    },
  },
  experimental: {
    applyComplexClasses: true,
  },
};
