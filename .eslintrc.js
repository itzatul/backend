module.exports = {
    extends: ['eslint:recommended', 'prettier', 'plugin:jsx-a11y/recommended'],
	plugins: ['jsx-a11y'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		}
	},
    rules: {
        strict: 0,
		curly: 1,
        semi: ["error", "always"],
        quotes: ["error", "double"]
    }
}