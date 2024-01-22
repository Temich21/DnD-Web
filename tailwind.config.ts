import type { Config } from 'tailwindcss'
import buttonPlugin from './plugins/buttonPlugin'
import navigationTextPlugin from './plugins/navigationTextPlugin'
import characterFormPlugin from './plugins/characterFormPlugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
    },
    fontFamily: {

    },
    colors: {
      headerGray: '#303030',
      navGray: '#656565',
      header: 'white'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'burger': '6.25rem',
        'navigation': '15.625rem',
        'navLine': '12.5rem',
      },
      height: {
        'header': '4rem',
        'navigation': '300vh',
        'welcomeText': '90vh',
      },
      fontSize: {
        'header': '1.625rem',
        'welcomeText': '2.5rem',
        'characterFormText': '1.625rem',
      },
      gap: {
        'header': '0.625rem'
      },
      borderRadius: {
        'full': '100%',
        'formRadius': '1.25rem'
      },
      spacing: {
        'welcomeText': "12.5rem",
        'characterForm': "85px"
      }
    },
  },
  plugins: [buttonPlugin, navigationTextPlugin, characterFormPlugin],
}
export default config
