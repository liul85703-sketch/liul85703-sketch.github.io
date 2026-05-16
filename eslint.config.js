import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['src/components/Splash_Cursor_1.tsx'],
    rules: {
      // Third-party shader component — keep file untouched; patterns trigger strict hooks rules.
      'react-hooks/refs': 'off',
      'prefer-const': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
])
