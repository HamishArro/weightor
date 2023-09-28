module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', ['text', {skipFull: true}]],
  collectCoverageFrom: ['./**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['^.*.(d.ts)$'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 88.23,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
