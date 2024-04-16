/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'diane': '#AA57CA',
      'orange': '#DE9146',
      'green': '#7FE7B1',
      'gray': '#333333',
      'white': '#FDFBFD',
      'button': '#3A23FF',
      'font':'#F3F4F4',
    },
    fontFamily: {
      'header':['Bai Jamjuree'],
      'brand':['Shrikhand'],
      'display':['Gentium Book Basic'],
      'body': ['K2D'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
