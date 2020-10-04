module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/img');

  eleventyConfig.addWatchTarget('src/js');
  eleventyConfig.addWatchTarget('src/scss');
  eleventyConfig.setTemplateFormats(['ejs']);

  return {
    dir: {
      input: 'src',
      output: 'dist',
      // includes: 'src/_includes',
    },
  };
};
