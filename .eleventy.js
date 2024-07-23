module.exports = function(config) {
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/img");
  config.addPassthroughCopy("src/*zip");
  config.addPassthroughCopy("src/*php");
  config.addPassthroughCopy("src/*txt");

    return {
  markdownTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
