<script setup lang="ts">
import { useDoctorStore } from '@/stores/doctors'

const store = useDoctorStore()
const doctor = store.selectedDoctor ?? null

const formatDate = (date: string) => {
  if (!date) return ''

  const d = new Date(date)
  if (isNaN(d.getTime())) return ''

  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })
}
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Doctor Details</h1>
    <template v-if="doctor">
      <p>Doctor ID: {{ doctor.id }}</p>
      <p>
        First Name: <strong>{{ doctor.firstName }}</strong>
      </p>
      <p>
        Last Name: <strong>{{ doctor.lastName }}</strong>
      </p>
      <p>
        State: <strong>{{ doctor.state }}</strong>
      </p>
      <p>
        Date of Birth: <strong>{{ formatDate(doctor.dob) }}</strong>
      </p>
      <p>
        Signed Up Date: <strong>{{ formatDate(doctor.signedUpDate) }}</strong>
      </p>
      <p>
        Is license active: <strong>{{ doctor.licenseActive ? 'Yes' : 'No' }}</strong>
      </p>
    </template>
    <template v-else>
      <p>No doctor selected</p>
    </template>
  </div>
</template>
