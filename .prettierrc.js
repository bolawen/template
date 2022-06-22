module.exports = {
    arrowParens: 'always',
    bracketSpacing: false,
    eslintIntegration: true,
    insertPragma: false,
    jsxBracketSameLine: true,
    jsxSingleQuote: false,
    printWidth: 80,
    requirePragma: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            files: '.prettierrc',
            options: {parser: 'typescript'},
        },
    ],
};
