module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/github",
      {
        assets: [{ path: ".next/static/**/*", label: "Release files" }],
      },
    ],
    "@semantic-release/git",
  ],
  // "preset": "angular"
};
