import { defineStore } from 'pinia'
import type { Doctor } from '@/types/Doctors'

interface DoctorState {
  doctors: Doctor[]
  selectedDoctor: Doctor | null
  isLoading: boolean
}

export const useDoctorStore = defineStore('doctor', {
  state: (): DoctorState => ({
    doctors: [],
    selectedDoctor: null,
    isLoading: false
  }),
  actions: {
    async fetchDoctors() {
      try {
        this.isLoading = true
        const response = await fetch('/api/doctors')
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        this.doctors = await response.json()
      } catch (err: Error | any) {
        console.error('Error fetching doctors:', err.message)
        throw err
      } finally {
        this.isLoading = false
      }
    },
    setSelectedDoctor(doctor: Doctor | null) {
      this.selectedDoctor = doctor
    }
  }
})
