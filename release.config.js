module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          { path: ".next/static/**", label: "Static files" },
          { path: ".next/server/**", label: "Server files" },
        ],
      },
    ],
    "@semantic-release/git",
  ],
  // "preset": "angular"
};
