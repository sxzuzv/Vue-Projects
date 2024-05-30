const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static",  // Vue.js Build 결과물을 만들 타겟 디렉토리
  devServer: {
    proxy: {
      '/api': {
        // '/api' 경로로 접근하면 8080 port(스프링 서버)로 요청을 넘긴다.
        target: 'http://localhost:8080',
        changeOrigin: true // cross origin 허용
      }
    }
  }
})