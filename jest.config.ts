import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
    moduleFileExtension: ['js', 'json', 'ts'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),

    testeRegex: '.*\\..*spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },

    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDir: '../coverage',
    testEnvironment: 'node',
};
