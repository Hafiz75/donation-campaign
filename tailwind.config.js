/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('/public/resource/bannerBg.png')",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],  // Choose DaisyUI themes or customize them
  }
}

