<script>
import ModalView from "./views/ModalView.vue";
import { useModalStore } from "./stores/FlagModalStore";

export default {
  name: "App",
  components: {
    ModalView,
  },
  setup() {
    // Store
    const modalStore = useModalStore();

    //Methods
    const isModalOpened = () => {
      modalStore.setFlagModal(true);
    };

    return { isModalOpened };
  },
};
</script>

<template>
  <div>
    <div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6">
      <div>
        <label class="cursor-pointer rounded bg-black px-8 py-4 text-white active:bg-slate-400"
          @click="isModalOpened">Open Modal</label>
      </div>
      <modal-view></modal-view>
    </div>
  </div>
</template>

<style scoped></style>
