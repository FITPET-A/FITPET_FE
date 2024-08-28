import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          110: "#212126",
          100: "#34343D",
          90: "#464653",
          80: "#595969",
          70: "#6C6C7F",
          60: "#808093",
          50: "#9696A6",
          40: "#ACACB9",
          30: "#C2C2CB",
          20: "#D8D8DE",
          15: "#E3E3E8",
          10: "#EEEFF1",
          "05": "#F9F9FA",
          "00": "#FFFFFF",
        },
        primary: {
          90: "#004080",
          80: "#004D99",
          70: "#0059B2",
          60: "#0066CC",
          50: "#0073E5",
          40: "#0680F9",
          30: "#4299F0",
          20: "#79B2EC",
          10: "#C0D9F2",
          "00": "#EBF2F9",
        },
        sub: {
          90: "#0B3C17",
          80: "#136326",
          70: "#1A8935",
          60: "#21B044",
          50: "#29D653",
          40: "#51DE73",
          30: "#76E591",
          20: "#9CECB0",
          10: "#C3F4CF",
          "00": "#EAFBEE",
        },
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", ...defaultTheme.fontFamily.sans],
        paperlogy: ["Paperlogy-Bold", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "3xl": ["24px", "150%"],
        "2xl": ["22px", "150%"],
        xl: ["20px", "150%"],
        lg: ["18px", "150%"],
        md: ["16px", "150%"],
        sm: ["14px", "150%"],
      },
      boxShadow: {
        "main-form": "0px 8px 40px 0px rgba(52, 52, 61, 0.15)",
      },
      borderWidth: {
        1: "1px",
      },
      fontWeight: {
        regular: "400",
      },
    },
    screens: {
      desktop: "1080px",
    },
  },
  plugins: [],
};

export default config;
