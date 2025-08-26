/**** ESLint config ****/
/* eslint-env node */
module.exports = {
	root: true,
	overrides: [
		{
			files: ["**/*.{ts,tsx}"],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint", "react-refresh"],
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
			],
			rules: {
				"react-refresh/only-export-components": [
					"warn",
					{ allowConstantExport: true },
				],
			},
		},
	],
}


