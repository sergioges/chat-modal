import { defineStore } from 'pinia'

export const useStudentStore = defineStore({
    id: 'studentChat',
    state: () => ({
        studentMessage: ''
    }),
    actions: {
        setStudentMessage(message) {
            this.studentMessage = message;
        },
    },
})