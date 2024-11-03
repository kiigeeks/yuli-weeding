/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
        colors: {
            blackPrimary: '#120B23',
            purplePrimary: '#9747FF',
            cyanPrimary: '#00DBDE',
            pinkPrimary: '#FC00FF',
            bluePrimary: '#3680EF',
            grayPrimary: '#8A96B5',
            greenPrimary: '#42E395',
        },
        fontSize: {
            'xxs': '10px',
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            parisienne: ['Parisienne', 'cursive'],
        }
    },
  },
  plugins: [],
}

