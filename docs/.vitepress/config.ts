import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Artify-AI',
  description: 'AI-powered art creation and manipulation platform',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Security', link: '/security' },
      { text: 'Cookies', link: '/cookies' },
      { text: 'Social Media', link: '/social-media' },
      { text: 'License', link: '/license' },
      { text: 'Code of Conduct', link: '/code-of-conduct' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Security', link: '/security' },
          { text: 'Cookie Policy', link: '/cookies' },
          { text: 'Social Media Guidelines', link: '/social-media' },
          { text: 'License', link: '/license' },
          { text: 'Code of Conduct', link: '/code-of-conduct' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shazzar00ni/Artify-AI-V0-site' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Artify-AI'
    }
  }
});