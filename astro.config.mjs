// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
	site: 'https://profryan.com',

	// Explicit static output (recommended for Cloudflare Pages / GitHub Pages style deploys)
	output: 'static',

	// Slightly smaller HTML output
	compressHTML: true,

	integrations: [mdx(), sitemap()],

	// Applies to Markdown + MDX content rendering
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'append',

					// Ensures only the anchor element is clickable (not the whole heading)
					properties: {
						className: ['heading-anchor-link'],
						ariaLabel: 'Link to this section',
					},

					// Content appended inside the anchor
					content: {
						type: 'element',
						tagName: 'span',
						properties: { className: ['heading-anchor'] },
						children: [{ type: 'text', value: '#' }],
					},
				},
			],
		],
	},
});