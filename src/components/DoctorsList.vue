<script setup lang="ts">
import { onMounted } from 'vue'
import { useDoctorStore } from '@/stores/doctors'
import Doctor from './DoctorsListItem.vue'

const store = useDoctorStore()

onMounted(() => {
  if (!store.doctors.length) {
    store.fetchDoctors().catch((err: Error) => {
      console.error(err.message)
    })
  }
})
</script>
<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Available Doctors</li>

    <li v-if="store.isLoading" class="p-4 flex justify-center items-center">
      <span class="loading loading-spinner loading-lg"></span>
    </li>

    <Doctor v-for="doctor in store.doctors" :key="doctor.id" :doctor="doctor" />
  </ul>
</template>
