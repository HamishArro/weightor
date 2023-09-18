module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', ['text', {skipFull: true}]],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 77.77,
      lines: 74.34,
      statements: 74.34,
    },
  },
};
