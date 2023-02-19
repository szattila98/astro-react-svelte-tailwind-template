module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	rules: {
		'prettier/prettier': ['warn', { endOfLine: 'auto' }],
		'no-unused-vars': 'warn',
	},
	plugins: ['prettier'],
	overrides: [
		{
			files: ['**/*.cjs'],
			env: {
				node: true,
			},
		},
		{
			files: ['*.astro'],
			extends: ['plugin:astro/recommended'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
		{
			files: ['**/*.tsx', '**/*.jsx'],
			extends: ['plugin:react/recommended'],
			env: {
				es6: true,
			},
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			plugins: ['react'],
		},
		{
			files: ['**/*.svelte'],
			extends: ['plugin:svelte/recommended'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.svelte'],
			},
		},
	],
};
