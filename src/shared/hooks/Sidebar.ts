import { create } from 'zustand'

interface Props {
    isOpen: boolean
    handleToggle: () => void
}

export const useSidebar = create<Props>()((set) => ({
    isOpen: false,
    handleToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))