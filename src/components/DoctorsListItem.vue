<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const goToDetails = () => {
  router.push({ name: 'DoctorDetail', params: { id: '12' } })
}
</script>
<template>
  <li class="list-row">
    <div></div>
    <div>
      <div>Dr. Jeff Jefferson</div>
      <div class="text-xs uppercase font-semibold opacity-60">TX</div>
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
          <RouterLink :to="{ name: 'doctor-detail', params: { id: '12' } }"> Details </RouterLink>
        </li>
      </ul>
    </div>
  </li>
</template>
