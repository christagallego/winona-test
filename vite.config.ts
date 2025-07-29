import { fileURLToPath, URL } from 'node:url'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue(), vueDevTools(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      proxy: {
        '/api/doctors': {
          target: 'https://v23l6u6a3qrlk6k3sweaql3chm0iaayj.lambda-url.us-west-2.on.aws/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/doctors/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Authorization', env.VITE_API_SECRET_TOKEN)
            })
          }
        }
      }
    },
    test: {
      environment: 'jsdom'
    }
  }
})
