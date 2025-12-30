import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  // 1. 这里配置了你的子路径
  base: '/watermark/',
  
  // 2. Vue 插件
  plugins: [vue()],
  
  // 3. 路径别名配置 (解决 @ 指向 src 的问题)
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
  // 4. 强制指定输出目录为 dist (防止项目默认改名)
  build: {
    outDir: 'dist',
  }
})
