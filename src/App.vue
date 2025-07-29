<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <RouterLink to="/" class="btn btn-ghost text-xl">Dashboard</RouterLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><RouterLink to="/">Doctors</RouterLink></li>
          <li><ThemeSwitcher /></li>
        </ul>
      </div>
    </div>

    <main class="flex-grow p-4">
      <RouterView />
    </main>

    <footer class="bg-base-200 p-4 text-center">
      <div class="flex justify-between items-center">
        <span class="text-xs">&copy; Dashboard</span>
        <ThemeSwitcher />
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
