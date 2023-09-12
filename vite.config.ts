import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 项目部署的基础路径
  base: "/dim-light-dream-vue/",

  // 插件
  plugins: [
    vue()
  ],

  resolve: {
    // 别名
    alias: {
      '@': resolve(__dirname, 'src')
    },

    // 导入时想要省略的扩展名列表
    extensions: ['.js', '.json', '.ts', '.vue']
  },
})
