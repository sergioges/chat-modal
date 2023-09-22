<script>
import { ref } from "vue";
import { useStudentStore } from "../../stores/StudentChatStore";

export default {
  name: "InputModal",
  setup() {
    // Store
    const studentStore = useStudentStore();

    // Data
    const message = ref("");

    // Methods
    const sendMessage = () => {
      studentStore.setStudentMessage(message.value)
      message.value = "";
    }

    return { message, sendMessage };
  },
};
</script>

<template>
  <div class="border-t-4 w-full my-3 divide-solid">
    <div class="flex justify-around mt-6">
      <input type="text" class="rounded-full bg-gray-200 border border-gray-300 p-3 w-3/4 h-10" v-model="message" />
      <div>
        <img class="cursor-pointer" src="../../assets/send-regular-48.png" alt="Send Conversation" @click="sendMessage" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>