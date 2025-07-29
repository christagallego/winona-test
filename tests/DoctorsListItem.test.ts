import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import DoctorsListItem from '../src/components/DoctorsListItem.vue'
import { useDoctorStore } from '@/stores/doctors'

const pushMock = vi.fn()
vi.mock('vue-router', () => ({
  useRouter: () => ({ push: pushMock })
}))

vi.mock('@/stores/doctors', () => ({
  useDoctorStore: vi.fn()
}))

describe('DoctorsListItem.vue', () => {
  const doctor = {
    id: '1',
    firstName: 'Laura',
    lastName: 'Brown',
    state: 'NY'
  }

  beforeEach(() => {
    // Mock store with selectedDoctor setter
    useDoctorStore.mockReturnValue({
      selectedDoctor: null
    })
  })

  it('renders full name and state', () => {
    const wrapper = mount(DoctorsListItem, {
      props: { doctor }
    })
    expect(wrapper.text()).toContain('Dr. Laura Brown')
    expect(wrapper.text()).toContain('NY')
  })

  it('calls goToDetails when clicking Details', async () => {
    const wrapper = mount(DoctorsListItem, {
      props: { doctor }
    })

    const detailsLink = wrapper.find('a')
    await detailsLink.trigger('click')

    expect(pushMock).toHaveBeenCalledWith({ name: 'doctor-detail' })
  })
})
