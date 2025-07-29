<script setup lang="ts">
import { useDoctorStore } from '../stores/doctors'

const store = useDoctorStore()
const doctor = store.selectedDoctor ?? null

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }
  return new Date(date).toLocaleDateString('en-US', options)
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
      <p class="flex items-center gap-2">
        Is license active:
        <strong class="flex items-center gap-1">
          <span v-if="doctor.licenseActive"> ✔️ Yes </span>
          <span v-else> ❌ No </span>
        </strong>
      </p>
    </template>
    <template v-else>
      <p>No doctor selected</p>
    </template>
  </div>
</template>
