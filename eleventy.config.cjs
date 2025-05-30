module.exports = async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy('src/sitemap.xml');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addWatchTarget('src/assets');

    let markdownIt = require("markdown-it");
    var markdownItAttrs = require('markdown-it-attrs');
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };
    let markdownLib = markdownIt(options).use(markdownItAttrs);
    eleventyConfig.setLibrary("md", markdownLib);

    return {
        passthroughFileCopy: true,
        dir: {
        input: ".",
        includes: "_includes",
        data: "data",
        input: "src",
        output: "public"
        }
    };
};