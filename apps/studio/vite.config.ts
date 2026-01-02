import path from 'path';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../../packages/shared/src'),
      '@expat-statistics/shared': path.resolve(__dirname, '../../packages/shared/src')
    }
  },
  server: {
    port: 4173,
    fs: {
      // ensure shared workspace files are served during dev
      allow: [searchForWorkspaceRoot(__dirname)]
    }
  }
});
