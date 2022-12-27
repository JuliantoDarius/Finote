/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./layouts/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         width: {
            "40%": "40%",
            "45%": "45%",
            "50%": "50%",
            "55%": "55%",
            "60%": "60%",
            "65%": "65%",
            "70%": "70%",
            "75%": "75%",
            "80%": "80%",
            "85%": "85%",
            "90%": "90%",
            "95%": "95%",
         },
         colors: {
            danger: "#f43f5e",
            "danger-hover": "#e11d48",
            success: "#10b981",
            "success-hover": "#059669",
            primary: "#be123c",
         },
         fontFamily: {
            karla: ["Karla", "sans"],
         },
         animation: {
            moving: "moving 7s ease-in infinite",
         },
         keyframes: {
            moving: {
               "0%, 100%": { transform: "translateX(5px)" },
               "25%": { transform: "translateY(10px)" },
               "50%": { transform: "translateX(-5px)" },
               "75%": { transform: "translateY(-10px)" },
            },
         },
      },
   },
   plugins: [],
};
