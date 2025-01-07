## 依赖安装

```
npm install onion-middleware
```

## 使用
```
import { OnionMiddleware } from 'xxx';

// vite等模块化加载的工具需调用clearMiddleware
app.clearMiddleware()

// 创建一个中间件应用
export const app = new OnionMiddleware()

// 添加中间件
app.use(async (ctx, next) => {
  // Middleware Before to do something
   next()
  // Middleware After to do something
})

```
