module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      yellow: "#C27803"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}