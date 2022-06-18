module.exports = {
    content: [
      './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        width: {
          'full-popup' : '31.25rem',
        },
        height: {
          'full-popup': '34.375rem',
          'header-popup' : '10rem',
        }
      },
    },
    plugins: [],
};