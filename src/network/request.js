import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // 设置前端请求为post请求
    method: 'post',
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })

  // 2. axios的拦截器
  // 2.1 请求拦截的作用

  instance.interceptors.request.use(config => {

    // 请求成功的拦截
    // 打印结果
    // console.log(config);

    // 2.1.1 比如config 中的一些信息不符合服务器的要求

    // 2.1.2 比如每次发送网络请求时,都希望在界面中显示一个请求的图标

    // 2.1.3 某些网络请求(比如登陆(token),必须携带一些特殊的信息)

    // 处理完之后要返回出去
    // console.log('处理完之后要返回出去', config);
    return config
  }, err => {
    // 请求失败的拦截
    // console.log('请求失败的拦截', err);
  })

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    // console.log('响应拦截', res);
    // 拦截过后需要把结果返回出去,响应只要res.data
    return res.data;
  }, err => {
    console.log('失败', err);
  })

  // 3.发送真正的网络请求
  return instance(config);
}