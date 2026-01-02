import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        slate: {
          25: '#f8fafc'
        }
      }
    }
  }
} satisfies Partial<Config>;
