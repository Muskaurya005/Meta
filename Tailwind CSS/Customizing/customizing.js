/* tailwind.config.js */
module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#3498db',
        },
        spacing: {
          'custom-spacing': '20px',
        },
        fontSize: {
          'custom-font-size': '18px',
        },
      },
    },
    variants: {},
    plugins: [],
  }