import { computed } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'
import { DEFAULT_PRIMARY } from '../config/config'
import { ElMessage } from 'element-plus'
import { getLightColor, getDarkColor } from '@/utils/color'

export const useTheme = () => {
  const settingsStore = useSettingsStore()
  const themeConfig = computed(() => settingsStore.themeConfig)

  // 切换暗黑模式
  /**
   * 切换暗黑模式
   * 此函数根据themeConfig的配置，将网站主题切换到暗黑模式或从暗黑模式切换出来
   * 它通过修改HTML元素的class属性来实现主题的切换，并调用changePrimary函数来变更主题色
   */
  const switchDark = () => {
    // 获取HTML元素，用于后续修改class属性以切换主题
    const body = document.documentElement as HTMLElement

    // 根据当前是否是暗黑模式，设置HTML元素的class属性
    if (themeConfig.value.isDark) body.setAttribute('class', 'dark')
    else body.setAttribute('class', '')

    // 调用changePrimary函数，更新主题色
    changePrimary(themeConfig.value.primary)
  }

  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY
      ElMessage({
        type: 'success',
        message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`,
      })
    }
    settingsStore.setThemeConfig({ ...themeConfig.value, primary: val })
    document.documentElement.style.setProperty(
      '--el-color-primary',
      themeConfig.value.primary,
    )

    // 颜色加深或变浅
    for (let i = 1; i <= 9; i++) {
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${i}`,
        themeConfig.value.isDark
          ? `${getDarkColor(themeConfig.value.primary, i / 10)}`
          : `${getLightColor(themeConfig.value.primary, i / 10)}`,
      )
    }
  }

  // 初始化主题
  const initTheme = () => {
    switchDark()
    // changePrimary(themeConfig.value.primary)
  }
  return {
    initTheme,
    switchDark,
    changePrimary,
  }
}
