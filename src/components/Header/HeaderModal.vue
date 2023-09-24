<script>
import { useModalStore } from "../../stores/FlagModalStore";

export default {
  name: "HeaderModal",
  setup() {
    // Store
    const modalStore = useModalStore();

    // Methods
    const isModalClosed = () => {
      modalStore.setFlagModal(false);
    };

    return { isModalClosed };
  },
};
</script>

<template>
  <div class="border-b line-clamp-4 w-full flex justify-between my-3 divide-solid">
    <div class="w-full text-center">
      <p class="text-xl mb-1 inline-block align-middle">Comentarios</p>
    </div>
    <p class="mr-2 mb-1 cursor-pointer text-blue-500 font-bold text-lg" @click="isModalClosed" title="Cerrar">X</p>
  </div>
</template>

<style scoped></style>
