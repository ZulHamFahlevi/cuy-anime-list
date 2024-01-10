import { create } from 'zustand';

interface TPaginationStore {
  page: number;
  prev: () => void;
  next: () => void;
}

export const usePagination = create<TPaginationStore>()((set) => ({
  page: 1,
  prev: () => set((state) => ({ page: state.page - 1 })),
  next: () => set((state) => ({ page: state.page + 1 })),
}));
