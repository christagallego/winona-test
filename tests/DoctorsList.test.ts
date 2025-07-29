import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import DoctorsList from '../src/components/DoctorsList.vue'
import DoctorsListItem from '../src/components/DoctorsListItem.vue'
import { useDoctorStore } from '@/stores/doctors'

vi.mock('@/stores/doctors', () => ({
  useDoctorStore: vi.fn()
}))

const mockDoctors = [
  { id: '1', firstName: 'Laura', lastName: 'Brown', licenseActive: true },
  { id: '2', firstName: 'Jake', lastName: 'Smith', licenseActive: false }
]

describe('DoctorsList', () => {
  beforeEach(() => {
    useDoctorStore.mockReturnValue({
      doctors: mockDoctors,
      isLoading: false,
      fetchDoctors: vi.fn()
    })
  })

  it('renders a DoctorsListItem for each doctor', () => {
    const wrapper = mount(DoctorsList)
    const items = wrapper.findAllComponents(DoctorsListItem)
    expect(items.length).toBe(2)
  })

  it('renders no DoctorsListItem when the doctors list is empty', () => {
    useDoctorStore.mockReturnValue({
      doctors: [],
      isLoading: false,
      fetchDoctors: vi.fn().mockResolvedValue(undefined)
    })

    const wrapper = mount(DoctorsList)
    const items = wrapper.findAllComponents(DoctorsListItem)
    expect(items.length).toBe(0)
  })
})
