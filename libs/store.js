import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

export const useStore = createWithEqualityFn(
  (set) => ({
    isNavOpened: false,
    setIsNavOpened: (value) => set({ isNavOpened: value }),
    theme: 'dark',
    setTheme: (value) => set({ theme: value }),
    toggleTheme: () =>
      set(({ theme }) => ({ theme: theme === 'dark' ? 'light' : 'dark' })),
  }),
  shallow,
)
