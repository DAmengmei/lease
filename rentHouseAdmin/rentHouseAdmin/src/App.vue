<template>
  <!-- 路由视图，用于展示匹配到的组件 -->
  <router-view></router-view>
</template>

<script setup lang="ts">
// 导入自定义钩子useTheme以使用主题相关功能
import { useTheme } from './hooks/useTheme'

// 初始化主题配置
// 该操作确保应用的主题设置被正确加载和应用
const { initTheme } = useTheme()
initTheme()
</script>
