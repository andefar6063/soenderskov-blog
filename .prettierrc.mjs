/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["*.astro", "*.vue"],
      options: {
        parser: "astro",
      },
    },
    // Add more overrides as needed for different file types or parsers
  ],
};
