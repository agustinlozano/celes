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
        mono: ['FiraCode', 'monospace'],
        serif: ['Merriweather', 'serif']
      }
    }
  },
  plugins: []
}
