import { defineStore } from 'pinia'

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        flagModal: false
    }),
    actions: {
        setFlagModal(flag) {
            this.flagModal = flag;
        },
    },
})