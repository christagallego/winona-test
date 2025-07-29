import { defineStore } from 'pinia'

interface Doctor {
  id: string
  firstName: string
  lastName: string
  dob: string // ISO date string, e.g. "1968-12-13"
  signedUpDate: string // ISO date string
  state: string // e.g. "NY"
  licenseActive: boolean
}

interface DoctorState {
  doctors: Doctor[]
  selectedDoctor: Doctor | null
}

export const useDoctorStore = defineStore('doctor', {
  state: (): DoctorState => ({
    doctors: [],
    selectedDoctor: null
  }),
  actions: {
    async fetchDoctors() {
      try {
        const response = await fetch('/api/doctors', {
          headers: {
            Authorization: 'Bearer dGhpcyBpcyBzdXBlciBzYWZlLiBqdXN0IHRydXN0IG1lLiBoZWhl'
          }
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        this.doctors = await response.json()
      } catch (err: Error | any) {
        console.error('Error fetching doctors:', err.message)
        throw err
      } finally {
        console.log('Doctors fetched:', this.doctors)
      }
    },
    setSelectedDoctor(doctor: Doctor | null) {
      this.selectedDoctor = doctor
    }
  }
})
