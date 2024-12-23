// 导入NProgress模块和对应的CSS文件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置NProgress的全局设置
NProgress.configure({
  easing: 'ease', // 动画方式，使用ease表示匀速变化
  speed: 500, // 递增进度条的速度，单位为毫秒
  showSpinner: false, // 是否显示加载ico，这里设置为不显示
  trickleSpeed: 200, // 自动递增间隔，单位为毫秒
  minimum: 0.3, // 初始化时的最小百分比，防止进度条一开始就完成
})

// 导出NProgress实例，以便在其他地方使用
export default NProgress