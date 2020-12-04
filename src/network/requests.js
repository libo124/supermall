import axios from 'axios'

export function requests(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 拦截请求
  instance.interceptors.request.use(config => {
    // console.log(config, '请求拦截完成');
    return config
  }, err => {
    console.log(err);
  })

  // 拦截响应
  instance.interceptors.response.use(res => {
    // console.log(res.data, '响应数据');
    // 这里第一个函数的参数是响应的数据，同样要把数据返回出去
    // 这里只是返回数据
    return res.data
  }, err => {
    console.log(err, '响应拦截报错');
  })
  // 发送网络请求
  // 因为axios本身就是Promise
  return instance(config)
}
