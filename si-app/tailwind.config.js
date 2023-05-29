/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    darkMode: 'class',
    // ...
  theme: {
    container: {
      centered: true,
      padding: '2rem',
      maxWidth: {
        default: '800px'
      }
    }
  },
  plugins: [],
}
