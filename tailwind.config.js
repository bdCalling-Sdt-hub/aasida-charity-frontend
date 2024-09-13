/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        // custom colors
        "primary-black": "#232323",
        "primary-white": "#F8FAFC",
        "secondary-1": "#334A55",
        "secondary-2": "#758888",
        "foundation-primary-white-darker": "#575858",
      },
    },
  },
  plugins: [],
};
