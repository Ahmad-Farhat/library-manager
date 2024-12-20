// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vitest/config';

// export default defineConfig({
//   test: {
//     // Some Vitest options like global variables, environment, etc.
//     globals: true, // Enables global variables like `describe`, `it`, `expect`
//     environment: 'jsdom', // Use jsdom for testing in browser-like environment
//   },
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom', // Or use 'jsdom' for a full browser simulation
    globals: true, 
    coverage: {
      provider: 'c8', 
    },
  },
})
