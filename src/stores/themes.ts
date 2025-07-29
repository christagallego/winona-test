import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: (): { darkMode: boolean } => ({
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
