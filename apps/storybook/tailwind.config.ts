import baseConfig from '@repo/tailwind-config';

export default {
  presets: [baseConfig],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', '../../packages/ui/src/**/*.{html,js,ts,jsx,tsx}'],
};
