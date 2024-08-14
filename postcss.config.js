module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-nested'),
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.html', './src/**/*.js'], // Paths to all files where CSS classes are used
        safelist: [], // Optional: list of CSS classes to always include
      }),
      require('autoprefixer'),
    ],
  }
  