export class OnionMiddleware {
  middlewares: any[]
  constructor() {
    this.middlewares = []
  }

  use(middleware: any) {
    this.middlewares.push(middleware)
  }

  async execute(ctx: any, callback: () => any) {
    const { promise } = ctx
    let index = -1
    const next = async (options?: any) => {
      const { shouldAbort = false } = options || {}
      index++
      if (!shouldAbort && index < this.middlewares.length) {
        const currentMiddleware = this.middlewares[index]
        await currentMiddleware(ctx, next)
      } else {
        // 执行回调，并设置response
        if (shouldAbort) {
          // 执行当前中间件中断回调函数
          const res = await options?.callback()
          ctx.response = res
        } else {
          // 所有中间件执行完毕后的处理
          if (callback) {
            const res = await callback()
            ctx.response = res
          }
        }
      }
    }
    await next()
    promise.resolve(ctx?.response)
  }
}
