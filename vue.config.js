module.exports = {
    publicPath: "./", // 部署应⽤包时的基本 URL
    outputDir: "dist", // npm run build ⽣成的⽂件夹，默认是dist
    assetsDir: "static", // 在kaixin⽂件夹下⾯⽣成static⽬录存放js,img,css等静态资源
    indexPath: "index.html", // ⽣成的单⽂件的，⽂件名，
    devServer: {
        host: "0.0.0.0", // 配置主机地址
        port: 8080, // 配置运⾏的端⼝
        // proxy: "接⼝地址",  跨域代理！ 【重要！】
        proxy: { // 配置多个！
            '/api': {
                target: 'http://localhost:3030/api',
                ws: true, // 跨域地址是https协议！
                changeOrigin: true,
                pathWrite: {
                    "^/api": ""   // 将 '/api' 替换成 ''  
                }
            }
        },
    }

}