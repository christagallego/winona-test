import { defineStore } from 'pinia'

export const useDoctorStore = defineStore('doctor', {
  state: () => ({
    doctors: []
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
      } catch (err: any) {
        console.error('Error fetching doctors:', err.message)
        throw err
      } finally {
        console.log('Doctors fetched:', this.doctors)
      }
    }
    // getDoctorById(id: string) {
    //   return this.doctors.find((d) => d.id === id)
    // },
  }
})
