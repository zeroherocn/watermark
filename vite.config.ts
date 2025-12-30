import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite' // 必须导入这个
import { resolve } from 'path'

export default defineConfig({
  // 1. 你的仓库名路径
  base: '/watermark/',
  
  // 2. 插件配置（必须包含 Unocss，否则报错）
  plugins: [
    vue(),
    Unocss() 
  ],
  
  // 3. 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
  // 4. 强制输出到 dist 目录
  build: {
    outDir: 'dist',
  }
})
