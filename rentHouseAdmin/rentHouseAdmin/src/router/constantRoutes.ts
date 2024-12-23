/**
 * @description 📚 路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */

// 导入vue-router中的RouteRecordRaw类型，用于定义路由配置
import { RouteRecordRaw } from 'vue-router'

// 从项目配置文件中导入首页和登录页的URL常量
import { HOME_URL, LOGIN_URL } from '@/config/config'

const LAYOUT = () => import('@/layouts/index.vue')

/**
 * @description 静态路由
 */
// 定义静态路由数组，包含应用中的固定路由
export const staticRoutes: RouteRecordRaw[] = [
  {
    // 登录页面路由
    path: LOGIN_URL,
    name: 'login',
    meta: {
      // 隐藏在菜单中
      isHide: true,
    },
    // 动态导入登录页面组件
    component: () => import('@/views/login/index.vue'),
  },
  {
    // 404错误页面路由
    path: '/404',
    name: '404',
    meta: {
      // 隐藏在菜单中
      isHide: true,
    },
    // 动态导入404错误页面组件
    component: () => import('@/views/error/error-404.vue'),
  },
  {
    // 主布局页面路由
    path: '/',
    name: 'LAYOUT',
    component: LAYOUT,
    // 重定向到首页
    redirect: HOME_URL,
    meta: {
      // 设置首页的标题、图标和可见性
      title: '首页',
      icon: 'HomeFilled',
      isHide: false,
    },
    children: [
      {
        // 首页子路由
        path: '/index',
        name: 'Index',
        // 动态导入首页组件
        component: () => import('@/views/home/index.vue'),
        meta: {
          // 设置首页的标题、图标和固定在侧边栏的属性
          title: '首页',
          icon: 'HomeFilled',
          affix: true,
        },
      },
      {
        // 用户管理页面路由
        path: '/system/user',
        // 动态导入用户管理页面组件
        component: () => import('@/views/system/user/user.vue'),
        meta: {
          // 设置用户管理的标题、图标和可见性
          title: '用户管理',
          icon: 'UserFilled',
          isHide: false,
          // 激活的菜单项，默认为null
          activeMenu: null,
        },
        // 空子路由数组，用于未来扩展
        children: [],
      },
      {
        // 岗位管理页面路由
        path: '/system/post',
        // 动态导入岗位管理页面组件
        component: () => import('@/views/system/post/post.vue'),
        meta: {
          // 设置岗位管理的标题、图标和可见性
          title: '岗位管理',
          icon: 'Postcard',
          isHide: false,
          // 激活的菜单项，默认为null
          activeMenu: null,
        },
        // 空子路由数组，用于未来扩展
        children: [],
      },
     // 定义一个路由配置对象，用于指定特定页面的访问路径、组件和元数据
      {
        // 路由的路径，唯一标识该页面的位置
        path: '/apartmentManagement/apartmentManagement/apartmentManagement',
        
        // 动态导入组件函数，按需加载以提高性能
        component: () =>
          import(
            '@/views/apartmentManagement/apartmentManagement/apartmentManagement.vue'
          ),
        
        // 路由的元数据，包含页面的标题、图标、是否隐藏以及激活的菜单等信息
        meta: {
          title: '公寓管理', // 页面的标题，显示在浏览器标签页或特定区域
          icon: 'OfficeBuilding', // 页面的图标，通常用于菜单或标签页
          isHide: false, // 指示是否隐藏该路由，false表示不隐藏
          activeMenu: '', // 当前路由激活时高亮显示的菜单项，此处为空表示默认行为
        },
        
        // 子路由的数组，用于嵌套路由，此处为空表示没有子路由
        children: [],
      },
      // 定义公寓管理模块下的添加或编辑公寓页面路由
      {
        path: '/apartmentManagement/apartmentManagement/addOrEditApartment',
        component: () =>
          import(
            '@/views/apartmentManagement/apartmentManagement/components/addOrEditApartment.vue'
          ),
        meta: {
          title: '公寓详情',
          icon: 'Document',
          isHide: true,
          activeMenu:
            '/apartmentManagement/apartmentManagement/apartmentManagement',
        },
        children: [],
      },
      // 定义房间管理页面路由
      {
        path: '/apartmentManagement/roomManagement/roomManagement',
        component: () =>
          import(
            '@/views/apartmentManagement/roomManagement/roomManagement.vue'
          ),
        meta: {
          title: '房间管理',
          icon: 'House',
          isHide: false,
          activeMenu: null,
        },
        children: [],
      },
      {
        path: '/apartmentManagement/roomManagement/addOrEditRoom',
        component: () =>
          import(
            '@/views/apartmentManagement/roomManagement/components/addOrEditRoom.vue'
          ),
        meta: {
          title: '房间详情',
          icon: 'Document',
          isHide: true,
          activeMenu: '/apartmentManagement/roomManagement/roomManagement',
        },
        children: [],
      },
      {
        path: '/apartmentManagement/attributeManagement/attributeManagement',
        component: () =>
          import(
            '@/views/apartmentManagement/attributeManagement/attributeManagement.vue'
          ),
        meta: {
          title: '属性管理',
          icon: 'List',
          isHide: false,
          activeMenu: null,
        },
        children: [],
      },
      {
        path: '/rentManagement/appointment/appointment',
        component: () =>
          import('@/views/rentManagement/appointment/appointment.vue'),
        meta: {
          title: '看房预约管理',
          icon: 'Clock',
          isHide: false,
          activeMenu: null,
        },
        children: [],
      },
      {
        path: '/agreementManagement/agreement/agreement',
        component: () =>
          import('@/views/rentManagement/agreement/agreement.vue'),
        meta: {
          title: '租约管理',
          icon: 'CreditCard',
          isHide: false,
          activeMenu: null,
        },
        children: [],
      },
      {
        path: '/rentManagement/agreement/addOrEditAgreement',
        component: () =>
          import(
            '@/views/rentManagement/agreement/components/addOrEditAgreement.vue'
          ),
        meta: {
          title: '租约详情',
          icon: null,
          isHide: true,
          activeMenu: '/agreementManagement/agreement/agreement',
        },
        children: [],
      },
      {
        path: '/userManagement/userManagement',
        component: () => import('@/views/userManagement/userManagement.vue'),
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
          isHide: false,
          activeMenu: null,
        },
        children: [],
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/error-404.vue'), //这个是我自己的路径
  },
]
