<script>
import { ref, watch, onMounted } from "vue";
import DownloadChat from "./DownloadChat.vue";
import StudentChat from "./StudentChat.vue";
import TeacherChat from "./TeacherChat.vue";
import { useStudentStore } from "../../stores/StudentChatStore";

export default {
  name: "ChatModal",
  components: {
    DownloadChat,
    StudentChat,
    TeacherChat,
  },
  setup() {
    // Store
    const studentStore = useStudentStore();
    const newStudentMessage = studentStore.studentMessage;

    // Data
    const chatConversations = ref([]);

    watch(
      () => studentStore.studentMessage,
      (newValue) => {
        chatConversations.value.push({
          type: "student",
          data: { message: newValue },
        });
      }
    );

    // Methods 
    const cargarDatos = async () => {
      try {
        const response = await fetch('/chat-conversation.json');
        if (response.ok) {
          chatConversations.value = await response.json();
        } else {
          console.error('Error al cargar los datos');
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }

    onMounted(() => {
      cargarDatos();
    });

    return { newStudentMessage, chatConversations };
  },
};
</script>

<template>
  <div class="wrapper overflow-y-auto">
    <div class="flex flex-col items-center w-full" v-for="(conversation, index) in chatConversations" :key="index">
      <download-chat v-if="conversation.type === 'download'" :content="conversation"></download-chat>
      <student-chat v-if="conversation.type === 'student'" :content="conversation"></student-chat>
      <teacher-chat v-if="conversation.type === 'teacher'" :content="conversation"></teacher-chat>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 600px;
}
</style>