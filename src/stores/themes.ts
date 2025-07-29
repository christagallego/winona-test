import { defineStore } from 'pinia'

interface ThemeState {
  darkMode: boolean
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    darkMode: true // dark mode by default
  }),
  actions: {
    toggleDarkMode(): void {
      this.darkMode = !this.darkMode
      const theme = this.darkMode ? 'synthwave' : 'light'
      document.documentElement.setAttribute('data-theme', theme)
    }
  }
})
