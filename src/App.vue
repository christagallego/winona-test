<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Dashboard</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Doctors</a></li>
        <li><ThemeSwitcher /></li>
      </ul>
    </div>
  </div>
  <RouterView />

  <footer>Put a footer with a dark mode toggle here. You can reuse the one from the header</footer>
</template>

<style scoped></style>
