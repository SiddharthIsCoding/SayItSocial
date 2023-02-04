/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        jockeysans: ["Jockey One", "sans-serif"],
      },
      colors:{
       silvertype: '#2B2929',
       bluetype :'#19324E',
       orangetype:'#F68D42'
      }
    },
  },
  plugins: [],
};
