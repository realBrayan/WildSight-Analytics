/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // need extend like this and THEN add custom colors otherwise all the colors will be overwritten
    extend: {
      colors: {
        wsgreen: "#293819",
        wsorange: "#ea9010",
        wsblue: "#587291",
        wslightgreen: "#c6dabf",
        wstan: "#fff7ed",
        // extend: {},
      },
    },
    plugins: [],
  },
};
