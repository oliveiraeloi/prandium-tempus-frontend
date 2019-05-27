const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.tsx'
  ],
});
module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ],
};
