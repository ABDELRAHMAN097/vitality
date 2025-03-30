/** @type {import('tailwindcss').Config} */
module.exports= {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#0f75bd",
        secondary: "#3ab54a",
        // primary: "#165D81",
        // secondary: "#FAD229",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
      },
    },
  },
  plugins: [],
};


// module.exports = {
//     content: ["./src/**/*.{js,ts,jsx,tsx}"],
//     theme: {
//       extend: {
//         colors: {
//           primary: "#6f55f2", 
//           headingColor: "#132742",
//           bgGradient: "gradient(90deg,rgba(103, 101, 240, 1) 27%,rgba(141, 141, 235, 1) 85%)",
//         },
//       },
//     },
//     plugins: [],
//   };


// bg-[#D0DAF5]  /* خلفية الجملة العلوية */
// text-[#5950B3]  /* لون نص الجملة العلوية */
// text-[#190C71]  /* لون النص الرئيسي */

