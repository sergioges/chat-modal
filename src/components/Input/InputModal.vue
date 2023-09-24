<script>
import { ref, watch } from "vue";
import { useStudentStore } from "../../stores/StudentChatStore";
import { useModalStore } from "../../stores/FlagModalStore";

export default {
  name: "InputModal",
  setup() {
    // Store
    const studentStore = useStudentStore();
    const modalStore = useModalStore();

    // Data
    const message = ref("");
    const requiredMessage = ref({
      class: '',
      message: 'Escribe tu mensaje y haz click en la flecha'
    });

    // Methods
    const sendMessage = () => {
      if (!message.value) {
        requiredMessage.value = {
          class: 'placeholder:text-red-800 border-red-600',
          message: 'Te faltó escribir un mensaje'
        }
      } else {
        studentStore.setStudentMessage(message.value)
        message.value = "";
        requiredMessage.value = {
          class: '',
          message: 'Escribe tu mensaje y haz click en la flecha'
        }
      }
    };

    watch(
      () => modalStore.flagModal,
      (newValue) => {
        if (newValue) {
          requiredMessage.value = {
            class: '',
            message: 'Escribe tu mensaje y haz click en la flecha'
          }
        }
      }
      // Se podrá observar cada una de las stores dedicadas a cada uno de los elementos del chat
      // (teacher o download) para añadirlo según type al array chatConversations
    );

    return { message, requiredMessage, sendMessage };
  },
};
</script>

<template>
  <div class="border-t-4 w-full my-3 divide-solid">
    <div class="flex justify-around mt-6">
      <input :placeholder="requiredMessage.message" type="text" class="rounded-full bg-gray-200 border border-gray-300 p-3 w-3/4 h-10" :class="requiredMessage.class" v-model="message" />
      <div>
        <img class="cursor-pointer" src="../../assets/send-regular-48.png" alt="Enviar conversación" title="Enviar" @click="sendMessage" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>