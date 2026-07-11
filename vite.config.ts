import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/stage1-shindan/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'node',
  },
})
