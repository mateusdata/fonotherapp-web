import { create } from "zustand";

interface FormatUser {
  name: string;
  email: string;
}

interface UserStore {
  users: FormatUser | null;
  setUsers: (user: FormatUser) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: null, // Estado inicial do usuário
  setUsers: (users) => set({ users }) // Função para atualizar o estado do usuário
}));
