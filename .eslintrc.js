const common = {
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['prettier', 'jest', 'markdown', 'jsonc'],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:jest/all',
    'plugin:json/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': 'error',
    'jest/unbound-method': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/expect-expect': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/no-test-return-statement': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-console': 'off',
    'no-iterator': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'jsonc/indent': ['error', 2],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  globals: {
    fetch: true,
    window: true,
    document: true,
    __CDN_URL__: true,
    __DEV__: true,
    __TEST__: true,
    __CLIENT__: true,
    __SERVER__: true,
    __GRAPHQL_ENDPOINT__: true,
    __SSR__: true,
    __PERSIST_GQL__: true,
    __API_URL__: true,
    __WEBSITE_URL__: true,
    __FRONTEND_BUILD_DIR__: true,
  },
};

module.exports = {
  root: true,
  overrides: [
    {
      /*
    eslint-plugin-markdown only finds javascript code block snippet.
    For specific spec, refer to https://github.com/eslint/eslint-plugin-markdown
    */
      files: ['**/*.js', '**/*.md'],
      ...common,
    },
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      env: common.env,
      plugins: [...common.plugins, '@typescript-eslint'],
      extends: [
        ...common.extends,
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      rules: {
        ...common.rules,
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: [
              '.js',
              '.jsx',
              '.ts',
              '.d.ts',
              '.tsx',
              '.graphql',
              '.gql',
            ],
          },
          webpack: {
            config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
          },
          typescript: {
            // paths: './tsconfig.json',
          },
        },
      },
    },
    {
      files: ['**/*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
