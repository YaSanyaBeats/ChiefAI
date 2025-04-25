// eslint.config.js
import next from '@next/eslint-plugin-next';
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Базовые правила ESLint
  eslint.configs.recommended,
  
  // Next.js правила
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      '@next/next/no-html-link-for-pages': 'off',
    }
  },
  
  // TypeScript правила
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  
  // Prettier (должен быть последним)
  prettierConfig
];