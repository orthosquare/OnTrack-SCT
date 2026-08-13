// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// Auto sidebar completion
import starlightAutoSidebar from 'starlight-auto-sidebar';
// katex support
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKaTeX from 'rehype-katex';
// Link validation support
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "kanagawa-wave",
      langs: [],
      wrap: true,
    },
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKaTeX],
    }),
  },
  integrations: [
    starlight({
      title: 'Monash University FIT Unit Template',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/orthosquare' }],
      plugins: [
        starlightAutoSidebar(), 
        starlightLinksValidator({
          errorOnRelativeLinks: true,
        }),
      ],
      sidebar: [
        {
          label: 'Welcome',
          items: [{ autogenerate: { directory: 'welcome' } }],
        },
      ],
    }),
  ],
  server: {
    host: true,
    port: 3001,
  },
});
