module.exports = {
	preset: 'ts-jest',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.jest.json',
		},
	},
	collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
	moduleNameMapper: {
		'^.+.module.(css|sass|scss)$': 'identity-obj-proxy',
		'^.+.(css|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
		'^.+.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
	testEnvironment: 'jsdom',
}
