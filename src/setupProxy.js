const {createProxyMiddleware} = require("http-proxy-middleware")
const {baseURL} =require("./servers/config")

module.exports = (app)=>{
      app.use(createProxyMiddleware("/api",{
          target:baseURL,
          changeOrigin:true,
          secure:true,
          pathRewrite:{
              "^/api":"/"
            },
      }))
}