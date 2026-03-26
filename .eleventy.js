module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("public");

  // Don't process README as a page
  eleventyConfig.ignores.add("README.md");

  // Filter: only featured projects
  eleventyConfig.addFilter("featured", (arr) => arr.filter(p => p.featured));

  // Filter: projects by category
  eleventyConfig.addFilter("byCategory", (arr, cat) => arr.filter(p => p.category === cat));

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
