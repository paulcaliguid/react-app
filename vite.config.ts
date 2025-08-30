﻿import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to the repository name for GitHub Pages project site
  base: '/react-app/',
})
