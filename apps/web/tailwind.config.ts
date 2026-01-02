import type { Config } from 'tailwindcss';
import sharedPreset from '../../packages/shared/src/lib/tailwind.preset';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  presets: [sharedPreset],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
