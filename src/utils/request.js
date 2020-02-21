import Axios from "axios"
import {
    MessageBox,
    Message
} from "element-ui";
// 创建axios实例
const axios = Axios.create({
    baseURL: process.env.NODE_ENV==='production'?process.env.VUE_APP_BASE_PATH:process.env.VUE_APP_BASE_API, // url基础地址，解决不同数据源url变化问题
    // withCredentials: true, // 跨域时若要发送cookies需设置该选项
    timeout: 3000 // 超时
});

axios.interceptors.request.use(
    config => {
        return config
    }, err => {
        return Promise.reject(err)
    }
)


axios.interceptors.response.use(res => {
    const response = res.data;
    if (response.code != 1) {
        Message({
            message: "输入错误" || "Error",
            type: "error",
            duration: 1 * 1000
          });
        return Promise.reject(new Error("输入错误") );
    } else {
        return response
    }
}, err => {
    return Promise.reject(err);
})

export default axios