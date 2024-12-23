// ? 全局不动配置项 只做导出不做修改

// * 首页地址（默认）
/**
 * 定义首页的URL路径
 * 
 * 说明:
 * - 使用导出(const HOME_URL = '/index')来定义一个常量HOME_URL，表示首页的URL路径为‘/index’。
 * - 该常量在整个应用程序中可以被引用，以确保首页路径的统一性和一致性。
 * - 将路径定义为常量有利于未来的维护和修改，如果首页路径发生变化，只需修改此处即可。
 */
export const HOME_URL = '/index'

// * 登录页地址（默认）
export const LOGIN_URL = '/login'

// * 默认主题颜色
export const DEFAULT_PRIMARY = '#409EFF'

// * 路由白名单地址（必须是本地存在的路由 staticRouter.ts）
/**
 * 定义路由白名单数组，用于存储无需鉴权即可访问的路由路径
 * 
 * @type {string[]} 路由路径字符串数组
 */
export const ROUTER_WHITE_LIST: string[] = ['/404']

// * 高德地图 key
export const AMAP_MAP_KEY = '5e8245ac445d7cd6d98b178ed42b5700'

export const AMAP_MAP_SECRET_KEY = '2f047c7b569d899dbd1ab8ccd11c22ed'

// 高德地图 安全密匙
export const AMAP_MAP_SERVICE_HOST = 'http://www.gitlbo.top:8181/_AMapService'
// * 百度地图 key
export const BAIDU_MAP_KEY = ''
