module.exports = {
  branches: ['master', { name: 'develop', prerelease: 'a' }],
  tagFormat: 'v${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'patch' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', scope: 'README.md', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'minor', release: 'minor' },
          { type: 'major', release: 'major' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd: './bin/updateBuild.sh',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/gitlab',
      {
        gitlabUrl: 'https://gitlab.fusang.co',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['docs/CHANGELOG.md', 'package.json', 'yarn.lock'],
        message: 'chore(release): FSM-000 ${nextRelease.version} \n\n${nextRelease.notes}',
      },
    ],
  ],
}
