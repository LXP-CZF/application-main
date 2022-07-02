import { registerMicroApps, start } from "qiankun";

// 注册子应用
// 微前端的运行原理和SPA非常相似
registerMicroApps([
  // 当匹配到 activeRule 的时候，请求获取 entry 资源，渲染到 container中
  {
    name: "qiankun-demo-webpack", // app name registered子应用项目名称
    entry: "//localhost:3003", // 子应用的 HTML 入口
    container: "#contanier", // 挂载子应用
    activeRule: "/qiankun-demo-webpack", // 激活路径，路由匹配
  },
  {
    name: "application-demo1",
    entry: "//localhost:3004",
    container: "#contanier",
    activeRule: "/application-demo1",
  }
]);

// 开启qiankun主应用
start();
