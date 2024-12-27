/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dracula: {
          background: '#282a36',
          text: '#f8f8f2',
          string: '#50fa7b',
          function: '#ff79c6',
          variable: '#f8f8f2',
          keyword: '#bd93f9',
          comment: '#6272a4',
          number: '#ffb86c',
          error: '#ff5555',
          highlight: '#44475a',
        },
      },
    },
  },
  plugins: [],
};

