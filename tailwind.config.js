/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    // Chỉnh lại margin: auto cho class container
    container: {
      center: true
    },
    boxShadow: {
      'shadow-custom': '0px 0px 8px -5px #b5a7a7',
      'shadow-clear': 'none',
    },
    plugins: [],
  }
}