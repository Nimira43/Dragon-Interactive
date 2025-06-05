/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
        'support': '#87ceeb',
        'light': '#fffcfa',
        'dark': '#111',
        'grey-light-extra': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#898989',
        'grey-dark': '#333',
      },
    },
    screens: {
      xl: { max: '1400px' },
      lg: { max: '1150px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  plugins: [],
}

