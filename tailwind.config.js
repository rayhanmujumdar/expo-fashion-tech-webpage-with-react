/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bill-banner-bg-img": 'url("../src/assert/1x/order-banner.jpg")',
        "product-banner-bg-img": 'url("../src/assert/1x/product-Background.png")'
      },
      fontFamily: {
        sans: ["my-font", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        title: '39px'
      }
    },
  },
  plugins: [],
}
