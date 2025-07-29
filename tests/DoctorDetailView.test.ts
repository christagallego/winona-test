import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import DoctorDetailView from '../src/views/DoctorDetailView.vue'
import { useDoctorStore } from '@/stores/doctors'

vi.mock('@/stores/doctors', () => ({
  useDoctorStore: vi.fn()
}))

describe('DoctorDetailView.vue', () => {
  const mockDoctor = {
    id: '123',
    firstName: 'Laura',
    lastName: 'Brown',
    state: 'NY',
    dob: '1968-12-13',
    signedUpDate: '2021-01-30',
    licenseActive: true
  }

  it('shows doctor details when selectedDoctor exists', () => {
    useDoctorStore.mockReturnValue({
      selectedDoctor: mockDoctor
    })

    const wrapper = mount(DoctorDetailView)

    expect(wrapper.text()).toContain('Doctor ID: 123')
    expect(wrapper.text()).toContain('First Name: Laura')
    expect(wrapper.text()).toContain('Last Name: Brown')
    expect(wrapper.text()).toContain('State: NY')
    expect(wrapper.text()).toContain('December 13, 1968') // formatted DOB
    expect(wrapper.text()).toContain('January 30, 2021') // formatted signedUpDate
    expect(wrapper.text()).toContain('Is license active: Yes')
  })

  it('shows fallback text when no doctor is selected', () => {
    useDoctorStore.mockReturnValue({
      selectedDoctor: null
    })

    const wrapper = mount(DoctorDetailView)

    expect(wrapper.text()).toContain('No doctor selected')
  })

  it('shows empty DOB if dob is empty or invalid', () => {
    const mockDoctorNoDob = {
      id: '125',
      firstName: 'Anna',
      lastName: 'Taylor',
      state: 'TX',
      dob: '', // or null, or 'invalid date'
      signedUpDate: '2022-05-10',
      licenseActive: true
    }

    useDoctorStore.mockReturnValue({
      selectedDoctor: mockDoctorNoDob
    })

    const wrapper = mount(DoctorDetailView)

    expect(wrapper.text()).toContain('Date of Birth: ')
  })
})
