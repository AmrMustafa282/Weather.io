const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#131216",
      secondary: "#1D1B1F",
      middle: "#1A191D",
    },
    screens: {
      '3xl': '1500px', // You can adjust the pixel value as needed
      '4xl': '1600px', // You can adjust the pixel value as needed
      '5xl': '1700px', // You can adjust the pixel value as needed
      '6xl': '1800px', // You can adjust the pixel value as needed
    },
  },
  plugins: [],
});

