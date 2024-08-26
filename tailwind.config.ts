import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          110: '#212126',
          100: '#34343D',
          90: '#464653',
          80: '#595969',
          70: '#6C6C7F',
          60: '#808093',
          50: '#9696A6',
          40: '#ACACB9',
          30: '#C2C2CB',
          20: '#D8D8DE',
          15: '#E3E3E8',
          10: '#EEEFF1',
          '05': '#F9F9FA',
          '00': '#FFFFFF',
        },
        primary: {
          90: '#004080',
          80: '#004D99',
          70: '#0059B2',
          60: '#0066CC',
          50: '#0073E5',
          40: '#0680F9',
          30: '#4299F0',
          20: '#79B2EC',
          10: '#C0D9F2',
          '00': '#EBF2F9',
        },
        sub: {
          90: '#0B3C17',
          80: '#136326',
          70: '#1A8935',
          60: '#21B044',
          50: '#29D653',
          40: '#51DE73',
          30: '#76E591',
          20: '#9CECB0',
          10: '#C3F4CF',
          '00': '#EAFBEE',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        'title-lg': ['24px', '150%'], 
        'title-md': ['22px', '150%'],
        'title-sm': ['20px', '150%'], 
        'text-lg': ['18px', '150%'], 
        'text-md': ['16px', '150%'], 
        'text-sm': ['14px', '150%'],
      },
      fontWeight: {
        light: '400', // Weight-400
        normal: '500', // Weight-500
        bold: '600', // Weight-600
      },
    },
  },
  plugins: [],
};

export default config;