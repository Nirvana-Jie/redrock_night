import { baseURL } from "./src/servers";
const {createProxyMiddleware} = require("http-proxy-middleware")


module.exports = (app)=>{
      app.use(createProxyMiddleware("/api",{
          target:baseURL,
          changeOrigin:true,
          pathRewrite:{
              "^/api":"/"
            },
      }))
}