<script setup lang="ts">
import { onMounted } from 'vue'
import { useDoctorStore } from '../stores/doctors'
import Doctor from './DoctorsListItem.vue'

const doctorStore = useDoctorStore()

onMounted(() => {
  if (doctorStore.doctors.length === 0) {
    doctorStore.fetchDoctors().catch((err: Error) => {
      console.error(err.message)
    })
  }
})
</script>
<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Available Doctors</li>

    <Doctor />
    <Doctor />
    <Doctor />
    <Doctor />
    <Doctor />
    <Doctor />
    <Doctor />
    <Doctor />
  </ul>
</template>
