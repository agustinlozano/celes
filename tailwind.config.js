/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cute: ['YouthTouchRegular', 'sans-serif'],
        lato: ['LatoLight', 'sans-serif'],
        'lato-bold': ['LatoBold', 'sans-serif']
      }
    }
  },
  build: {
    assetsDir: 'assets'
  },
  plugins: []
}
