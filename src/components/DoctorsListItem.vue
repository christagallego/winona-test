<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import type { Doctor } from '@/types/Doctors'
import { useDoctorStore } from '@/stores/doctors'

const router = useRouter()
const store = useDoctorStore()
const props = defineProps<{ doctor: Doctor }>()

const fullName = computed(() => {
  return `Dr. ${props.doctor.firstName} ${props.doctor.lastName}`
})

const goToDetails = () => {
  store.selectedDoctor = props.doctor
  router.push({ name: 'doctor-detail' })
}
</script>
<template>
  <li class="list-row">
    <div></div>
    <div>
      <div>{{ fullName }}</div>
      <div class="text-xs uppercase font-semibold opacity-60">{{ props.doctor.state }}</div>
    </div>
    <div class="dropdown dropdown-end">
      <button tabindex="0" role="button" class="btn btn-square btn-ghost">
        <!-- 3 dots icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 2a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z"
          />
        </svg>
      </button>
      <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-32">
        <li>
          <a @click="goToDetails">Details</a>
        </li>
      </ul>
    </div>
  </li>
</template>
