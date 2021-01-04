const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/img');

  eleventyConfig.addWatchTarget('src/js');
  eleventyConfig.addWatchTarget('src/scss');
  eleventyConfig.setTemplateFormats(['ejs']);

	eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
				collapseWhitespace: true,
				minifyJS: true
      });
      return minified;
    }

    return content;
	});

  return {
    dir: {
      input: 'src',
      output: 'dist',
      // includes: 'src/_includes',
    },
  };
};
