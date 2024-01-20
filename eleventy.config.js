module.exports = (eleventyConfig) => {
	// Return your Object options:
	return {
		dir: {
			input: 'src/content',
			output: 'dist',
			includes: '../includes',
			layouts: '../layouts',
			data: '../data'
		},
		templateFormats: [ "md", "html", "njk" ],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
	}
}
