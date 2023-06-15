/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['./build/'],
    collectCoverage: true,
    coverageReporters: [['html', { subdir: 'html' }], 'text-summary'],
    coverageThreshold: {
        global: {
            lines: 100,
            branches: 100,
            functions: 100,
            statements: 100
        }
    }
};
