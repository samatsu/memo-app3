import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  theme: {
    extend: {
      typography: ({ theme }: PluginUtils) => ({
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: "normal",
              color: theme("colors.slate.600"),
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
