import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  // 1. 基础路径
  base: '/watermark/',

  // 2. 插件
  plugins: [
    vue(),
    Unocss()
  ],

  // 3. 路径别名 (关键修改在这里！)
  resolve: {
    alias: {
      // 告诉 Vite，"@" 和 "~" 都代表 "src" 目录
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'src'), 
    },
  },

  // 4. 打包输出
  build: {
    outDir: 'dist',
  }
})
