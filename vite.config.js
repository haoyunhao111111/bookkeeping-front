import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [reactRefresh(), createStyleImportPlugin({
    resolves: [VantResolve()]
  })]
})
