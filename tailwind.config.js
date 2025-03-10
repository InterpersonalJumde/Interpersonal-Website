// import defaultTheme from 'tailwindcss/defaultTheme';
// import plugin from 'tailwindcss/plugin';
// import typographyPlugin from '@tailwindcss/typography';

// export default {
//   content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: 'var(--aw-color-primary)',
//         secondary: 'var(--aw-color-secondary)',
//         accent: 'var(--aw-color-accent)',
//         default: 'var(--aw-color-text-default)',
//         muted: 'var(--aw-color-text-muted)',
//       },
//       fontFamily: {
//         sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
//         serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
//         heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
//       },

//       animation: {
//         fade: 'fadeInUp 1s both',
//       },

//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: 0, transform: 'translateY(2rem)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       },
//     },
//   },
//   plugins: [
//     typographyPlugin,
//     plugin(({ addVariant }) => {
//       addVariant('intersect', '&:not([no-intersect])');
//     }),
//   ],
//   darkMode: 'class',
// };

import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        dmSans: ['DM Sans', 'sans-serif'],
        diphylleia: ['Diphylleia', 'serif'],
      },
      backgroundImage: {
        'line-gradient(left)': 'linear-gradient(to left, rgba(174, 131, 0, 1) 0%, rgba(174, 131, 0, 0.5) 30%, rgba(174, 131, 0, 0) 60%)',
        'line-gradient(right)': 'linear-gradient(to right, rgba(174, 131, 0, 1) 0%, rgba(174, 131, 0, 0.5) 30%, rgba(174, 131, 0, 0) 60%)',
      },
      boxShadow: {
        'image-shadow': '0px 0px 108px rgba(174, 131, 0, 0.08)', // Adjust x, y, blur, and color
        'whitebox-shadow': '0px 0px 84px rgba(174, 131, 0, 0.08)',
        'footer-shadow': '0px 4px 240px rgba(174, 131, 0, 0.04)',
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};

