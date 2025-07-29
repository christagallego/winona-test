export interface Doctor {
  id: string
  firstName: string
  lastName: string
  dob: string // ISO date string, e.g. "1968-12-13"
  signedUpDate: string // ISO date string
  state: string
  licenseActive: boolean
}
