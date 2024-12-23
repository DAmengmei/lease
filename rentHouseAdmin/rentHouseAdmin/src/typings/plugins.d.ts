// 声明模块 'nprogress'，以便在项目中使用 nprogress 库
declare module 'nprogress'

// 声明模块 '*.vue'，为所有 Vue 组件文件提供类型声明
declare module '*.vue' {
  // 导入 Vue 构造函数
  import Vue from 'vue'
  // 默认导出 Vue 类，表示当前模块的默认导出是一个 Vue 类的实例
  export default Vue
}
