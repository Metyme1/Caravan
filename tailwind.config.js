module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#152652',
      },
      fontFamily: {
        'times': ['Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
        '1.5xl': '1.375rem', // This is between `text-lg` (1.125rem) and `text-xl` (1.25rem)
      },
      height: {
        '128': '32rem',
        '160': '40rem', // Example custom height
      },
      borderRadius: {
        'custom': '50px', // Define your custom border radius here
      },
      
    },
  },
  plugins: [],
}
