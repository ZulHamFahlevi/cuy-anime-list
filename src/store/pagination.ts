import { create } from 'zustand';

interface TPaginationStore {
  page: number;
  previousPage: () => void;
  nextPage: () => void;
}

export const usePagination = create<TPaginationStore>()((set) => ({
  page: 1,
  previousPage: () => set((state) => ({ page: state.page - 1 })),
  nextPage: () => set((state) => ({ page: state.page + 1 })),
}));
