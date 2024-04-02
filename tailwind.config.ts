import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        sliderimages: {
         ' 0%,1%,2%,3%,4%,5%,6%,7%,8%,9%,10%,11%': {
            transform: 'translateX(0)'
        },
    
        '20%': {
            transform: 'translateX(-100%)'
        },
    
        '40%' :{
            transform: 'translateX(-200%)'
        },

        '60%': {
            transform: 'translateX(-300%)'
        },

        '80%':{
            transform: 'translateX(-400%)'
        },

        '95%' :{
            transform: 'translateX(-400%)'
        }
        }
      }
      , 
      screens: {
        'sm1' : {'max':  '600px'}
      },

      fontFamily: {
        shaw: ["Zilla Slab", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
