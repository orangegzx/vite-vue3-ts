/*
 * @Author: gezuxia
 * @Descripttion: 
 * @Date: 2022-02-04 15:31:04
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-27 16:56:32
 */
// 'use strict'

// 获取类型提示
// import { defineConfig, loadEnv } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import { svgBuilder } from './src/plugins/svgBuilder.js'
import eslintPlugin from 'vite-plugin-eslint'

// 主要用于 alias 文件路径别名
const { resolve } = require('path')

const path = require('path')
function pathResolve (dir) {
  return resolve(__dirname, '.', dir)
}

export default ({ mode }) => {
  require('dotenv').config({ path: `./env/.env.${mode}` })
  return defineConfig({
    // 配置需要使用的插件列表，这里将vue添加进去
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      })
      // svgBuilder('./src/icons/svg/')// 这里已经将src/icons/svg/下的svg全部导入，无需再单独导入
    ],

    // 强制预构建插件包：引入第三方的配置 会将引入的第三方文件移动到\node_modules\gitcode\工程目录\node_modules\.vite_opt_cache目录中
    optimizeDeps: {
      // 检测需要预构建的依赖项
      // entries: [],
      // 默认情况下，不在 node_modules 中的，链接的包不会预构建
      include: [] // 'axios
      // exclude:['your-package-name'] //排除在优化之外
    },

    // 配置文件别名 vite1.0是/@/  2.0改为/@
    // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
    resolve: {
      // "/@": pathResolve("src"),
      // 配置别名
      alias: [
        { find: '@', replacement: resolve(__dirname, 'src') }
      ]
    },

    // 静态资源服务的文件夹
    publicDir: 'public',
    base: process.env.NODE_ENV === 'production' ? '/': './',

    // 静态资源处理
    assetsInclude: '',

    // 控制台输出的级别 info 、warn、error、silent
    logLevel: 'info',
    envDir: pathResolve('./env'), // 环境文件所在目录
    // 打包配置
    build: {
      target: 'modules', // 浏览器兼容性  "esnext"|"modules"
      outDir: 'dist', // 指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小 boolean | 'terser' | 'esbuild'
      sourcemap: false, // 构建后是否生成 source map 文件
      brotliSize: false // 禁用压缩大小报告，提高构建性能
    },

    // 本地运行配置，与反向代理配置
    server: {
      cors: true, // 默认启用并允许任何源
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      host: 'localhost',
      port: 4000,
      https: false, // 是否启用 http 2
      // 反向代理
      proxy: {
        '/api': {
          target: process.env.VITE_APP_API_URL,
          // target: 'https://blog.csdn.net/weixin_45292658',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
          // rewrite: path => path.replace(/^\/dec-api/, '')
        }
      }
    },

    css: {
      // 配置 css modules 的行为
      modules: {},
      // 预处理 postCss 配置
      postcss: {
      },
      // 指定传递给 css 预处理器的选项
      preprocessorOptions: {
        scss: {
          additionalData: '$injectedColor:orange;'
        }
      }
    },
    json: {
      // 是否支持从 .json 文件中进行按名导入
      namedExports: true,
      // 若设置为 true 导入的json会被转为 export default JSON.parse("..") 会比转译成对象字面量性能更好
      stringify: false
    }
  })
}
