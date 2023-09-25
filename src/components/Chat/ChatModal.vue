<script>
import { ref, watch, onMounted } from "vue";
import DownloadChat from "./DownloadChat.vue";
import StudentChat from "./StudentChat.vue";
import TeacherChat from "./TeacherChat.vue";
import { useStudentStore } from "../../stores/StudentChatStore";
import { format } from 'date-fns';

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

    // Data
    const chatConversations = ref([]);

    watch(
      () => studentStore.studentMessage,
      (newValue) => {
        const newDate = new Date();
        const formatedDate = format(newDate, 'dd MMM yyyy / HH:mm');
        chatConversations.value.push({
          type: "student",
          data: { message: newValue, date: formatedDate },
        });
      }
      // Se podrá observar cada una de las stores dedicadas a cada uno de los elementos del chat
      // (teacher o download) para añadirlo según type al array chatConversations.
      // En el observable de student se puede añadir el servicio que enviaría la conversación al servidor
    );

    // Methods 
    const loadingData = async () => {
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
      loadingData();
    });

    return { chatConversations };
  },
};
</script>

<template>
  <div class="wrapper overflow-auto">
    <div class="flex flex-col items-center w-full" v-for="(conversation, index) in chatConversations" :key="index">
      <download-chat v-if="conversation.type === 'download'" :content="conversation"></download-chat>
      <student-chat v-if="conversation.type === 'student'" :content="conversation"></student-chat>
      <teacher-chat v-if="conversation.type === 'teacher'" :content="conversation"></teacher-chat>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-height: 600px;
}

.wrapper::-webkit-scrollbar {
  width: 7px;
}

.wrapper::-webkit-scrollbar-track {
  background: #ddd;
}

.wrapper::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>