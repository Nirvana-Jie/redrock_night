
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://be-prod.redrock.cqupt.edu.cn"                                                                                                                                                    
    : "https://be-dev.redrock.cqupt.edu.cn";

module.exports ={
  baseURL
}
