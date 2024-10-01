module.exports = {
  content: [
    './src/**/*.{html,js}', // Tentukan path file HTML dan JS
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Tambahkan plugin DaisyUI
  ],
  daisyui: {
    themes: ["emerald", "dark", "forest"], // Tambahkan tema
  },
}
