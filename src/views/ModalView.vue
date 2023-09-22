<script>
import { computed } from "vue";
import HeaderModal from "../components/Header/HeaderModal.vue";
import ChatModal from "../components/Chat/ChatModal.vue";
import InputModal from "../components/Input/InputModal.vue";
import { useModalStore } from "../stores/FlagModalStore";

export default {
  name: "ModalView",
  components: {
    HeaderModal,
    ChatModal,
    InputModal,
  },
  setup() {
    // Store
    const modalStore = useModalStore();

    // Computed
    const activateModal = computed(() => {
      return modalStore.flagModal === true ? "" : "hidden";
    });

    return { activateModal };
  },
};
</script>

<template>
  <div class="h-screen w-full fixed flex justify-center items-center bg-black bg-opacity-50" :class="activateModal">
    <div class="bg-white rounded shadow-lg w-3/4">
      <header-modal></header-modal>
      <chat-modal></chat-modal>
      <input-modal></input-modal>
    </div>
  </div>
</template>

<style scoped></style>