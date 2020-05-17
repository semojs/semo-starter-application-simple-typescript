// export const name = '' // 路由名字，非必填
// export const path = '' // 追加额外的路由，非必填
// export const method = 'get' // 路由方法，默认 get，非必填
// // https://indicative.adonisjs.com/validations/master/min
// export const middleware = [] // 为单个路由指定前置中间件
// export const validate = {
//   username: 'min:6' 
// }
export const handler = async ctx => {
  // ctx.errors[11] = '错误'
  ctx.json = true // 返回JSON数据结构
  return 'hello world'
}
