module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        1440: '1400px'
      }
    },
  },
  plugins: [],
}