<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const doctorId = route.params.id
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Doctor Details</h1>
    <p>Doctor ID: {{ doctorId }}</p>
  </div>
</template>
